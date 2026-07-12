/* SAT Quest — MATH-ONLY deep audit: variety, near-repeat, and correctness.
   Loads the real math generators and inspects the ACTUAL generated instances.

   Reports (JSON at the end for before/after diffing):
     • Raw math signatures      — distinct variant sigs under a fixed budget
     • Meaningful templates      — distinct STEM SKELETONS (numbers masked); a
                                   pure number-swap collapses to the same skeleton,
                                   so this cannot be inflated by shallow clones
     • Representation types      — distinct `representation` tags carried by items
     • Near-repeat rate          — per skill, Σ pᵢ² over skeleton shares = the
                                   chance two independent draws share a skeleton
                                   (the "felt repetition"); lower is better
     • Largest clusters          — the skeletons that dominate a skill's draws
     • Correctness               — MC well-formedness, grid answers grade correct,
                                   no NaN/undefined/Infinity, explanations present

   Run:  node scripts/audit_math.mjs            (exit 1 on any hard failure)
         MATHBUDGET=4000 node scripts/audit_math.mjs   (faster) */
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const store = new Map();
const ctx = { console, Math, Date, JSON, Object, Array, String, Number, isNaN, isFinite, parseInt, parseFloat,
  localStorage: { getItem: k => store.has(k) ? store.get(k) : null, setItem: (k, v) => store.set(k, String(v)), removeItem: k => store.delete(k) }, window: undefined };
vm.createContext(ctx);
for (const f of [
  'js/data/worlds.js', 'js/data/tips.js', 'js/data/mathgen.js', 'js/data/gridgen.js', 'js/data/mathviz.js',
  'js/data/mathgen2.js', 'js/data/mathgen3.js', 'js/data/mathgen4.js', 'js/data/mathgen5.js',
  'js/data/mathgen6.js', 'js/data/mathgen7.js', 'js/data/mathgen8.js', 'js/data/mathgen9.js', 'js/data/mathgen10.js', 'js/data/mathgen_flatten.js',
  'js/state.js', 'js/upgrades.js', 'js/quiz.js', 'js/exam.js',
].filter(f => fs.existsSync(path.join(root, f)))) {
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
}
const run = c => vm.runInContext(c, ctx);

const BUDGET = parseInt(process.env.MATHBUDGET || '9000', 10); // draws per skill per tier per kind
let failures = 0, warnings = 0;
const ok = m => console.log('  ✅ ' + m);
const bad = m => { console.log('  ❌ ' + m); failures++; };
const warn = m => { console.log('  ⚠️  ' + m); warnings++; };

// The audit runs inside the VM so it can call the generators directly.
const R = run(`(function(BUDGET){
  // ---- stem skeleton: mask every number so number-only variants collapse ----
  const skeleton = (t) => String(t || '')
    .replace(/-?\\d+(?:\\.\\d+)?/g, '#')     // numbers -> #
    .replace(/\\s+/g, ' ')
    .trim();
  const answerType = (q) => {
    if (q.type === 'grid') return 'grid';
    const texts = (q.choices || []).map(c => (c.text != null ? c.text : c));
    const avg = texts.reduce((a, s) => a + String(s).length, 0) / (texts.length || 1);
    if (avg > 24) return 'mc-verbal';
    if (texts.every(s => /^[-+]?[\\d.,/\\s]+$/.test(String(s)))) return 'mc-num';
    return 'mc-str';
  };
  const gradeGrid = (q) => {
    // reuse the app's grader if present
    try { if (typeof gradeGridAnswer === 'function') {
      const okA = gradeGridAnswer(String(q.answer), q);
      const okAccept = (q.accept || []).every(a => gradeGridAnswer(String(a), q));
      return okA && okAccept;
    } } catch (e) {}
    return q.answer != null;
  };
  // NaN / Infinity / an unrendered \${...} placeholder are always corruption,
  // in prose or values. "undefined"/"null" are legitimate English words in a
  // stem/explanation ("the expression is undefined"), so only flag them when
  // they leak into an answer CHOICE or a grid ANSWER.
  const badToken = (s) => /NaN|Infinity|\\$\\{/.test(String(s));
  const badValueToken = (s) => /undefined|null|NaN|Infinity|\\$\\{/.test(String(s));

  const kinds = [];
  if (typeof MATH_GENERATORS !== 'undefined') kinds.push(['mc', MATH_GENERATORS]);
  if (typeof GRID_GENERATORS !== 'undefined') kinds.push(['grid', GRID_GENERATORS]);

  const allSig = new Set();
  const allSkel = new Set();
  const reps = new Set();
  const families = new Set();
  const perSkillNear = {};   // skill -> { total, byStyle: {styleSig: count} }
  const perSkillSig = {};    // skill -> distinct sig count
  const clusters = [];       // {skill, kind, skeleton, share}
  let total = 0, malformed = 0, badExpl = 0, badNum = 0, gridWrong = 0, dupChoice = 0, noDiff = 0;
  const malformedEx = [], gridWrongEx = [], badNumEx = [];

  for (const [kind, gens] of kinds) {
    for (const s of Object.keys(gens)) {
      const sigSet = new Set();
      const styleCount = {};
      let styleTotal = 0;
      for (let tier = 1; tier <= 3; tier++) {
        for (let i = 0; i < BUDGET; i++) {
          // Call the real gameplay entry points so items carry the stamped
          // sig / variantId / difficulty exactly as players receive them.
          const q = kind === 'mc' ? generateMathQuestion(s, tier) : generateGridQuestion(s, tier);
          if (!q) continue;
          total++;
          const sig = q.sig || ((typeof qSignature === 'function') ? qSignature(q) : q.text);
          sigSet.add(sig); allSig.add(kind + ':' + sig);
          const skel = skeleton(q.text);
          const style = s + '§' + answerType(q) + '§' + skel;
          allSkel.add(kind + ':' + style);
          styleCount[style] = (styleCount[style] || 0) + 1; styleTotal++;
          if (q.representation) reps.add(q.representation);
          if (q.family) families.add(q.family);

          // ---- correctness ----
          if (kind === 'mc') {
            const texts = (q.choices || []).map(c => (c.text != null ? c.text : c));
            const uniq = new Set(texts.map(String)).size === 4 && (q.choices || []).length === 4;
            const ansOk = ['A', 'B', 'C', 'D'].includes(q.answer);
            const wrongs = ['A', 'B', 'C', 'D'].filter(L => L !== q.answer);
            const whyOk = q.whyWrong && wrongs.every(L => q.whyWrong[L] && String(q.whyWrong[L]).length > 8);
            if (!uniq) { if (new Set(texts.map(String)).size !== 4) dupChoice++; }
            if (!(uniq && ansOk && whyOk)) { malformed++; if (malformedEx.length < 8) malformedEx.push(kind + ':' + s); }
            if (texts.some(badValueToken) || badToken(q.text)) { badNum++; if (badNumEx.length < 8) badNumEx.push(kind + ':' + s + ' :: ' + q.text.slice(0, 60)); }
          } else {
            if (!gradeGrid(q)) { gridWrong++; if (gridWrongEx.length < 8) gridWrongEx.push(s + ' :: ans=' + q.answer + ' :: ' + q.text.slice(0, 50)); }
            if (badToken(q.text) || badValueToken(q.answer)) { badNum++; if (badNumEx.length < 8) badNumEx.push('grid:' + s + ' :: ' + q.text.slice(0, 60)); }
          }
          if (!q.explanation || String(q.explanation).length < 12 || badToken(q.explanation)) badExpl++;
          if (!q.difficulty) noDiff++;
        }
      }
      perSkillSig[s] = (perSkillSig[s] || 0) + sigSet.size;
      // near-repeat for this (skill,kind)
      let sumSq = 0, top = { skeleton: '', share: 0 };
      for (const [style, c] of Object.entries(styleCount)) {
        const p = c / styleTotal; sumSq += p * p;
        if (p > top.share) top = { skeleton: style.split('§').slice(1).join(' '), share: p };
      }
      if (!perSkillNear[s]) perSkillNear[s] = { sumSqParts: [], styles: 0 };
      perSkillNear[s].sumSqParts.push({ kind, sumSq, styles: Object.keys(styleCount).length, top });
      clusters.push({ skill: s, kind, skeleton: top.skeleton.slice(0, 70), share: +top.share.toFixed(3) });
    }
  }

  // Aggregate near-repeat per skill (average the MC/grid parts by draw share ~ equal)
  const near = {};
  for (const s of Object.keys(perSkillNear)) {
    const parts = perSkillNear[s].sumSqParts;
    const avgSq = parts.reduce((a, p) => a + p.sumSq, 0) / parts.length;
    const styles = parts.reduce((a, p) => a + p.styles, 0);
    near[s] = { nearRepeat: +avgSq.toFixed(4), templates: styles };
  }
  clusters.sort((a, b) => b.share - a.share);

  return {
    budget: BUDGET, total,
    rawSigs: allSig.size, skeletons: allSkel.size,
    representations: [...reps].sort(), families: [...families].sort(),
    perSkillSig, near, topClusters: clusters.slice(0, 12),
    correctness: { malformed, malformedEx: [...new Set(malformedEx)], badExpl, badNum, badNumEx: [...new Set(badNumEx)],
      gridWrong, gridWrongEx: [...new Set(gridWrongEx)], dupChoice, noDiff },
  };
})(${BUDGET})`);

console.log('=== SAT QUEST — MATH AUDIT ===');
console.log(`(budget ${R.budget.toLocaleString()} draws / skill / tier / kind — ${R.total.toLocaleString()} instances inspected)\n`);

console.log('VARIETY');
console.log(`  Raw math signatures (distinct variants): ${R.rawSigs.toLocaleString()}`);
console.log(`  Meaningful templates (distinct skeletons): ${R.skeletons.toLocaleString()}`);
console.log(`  Representation types (${R.representations.length}): ${R.representations.join(', ') || '(untagged)'}`);
console.log(`  Tagged families (${R.families.length}): ${R.families.length ? R.families.join(', ') : '(none tagged yet)'}`);

console.log('\nNEAR-REPEAT (per skill: Σpᵢ² over skeletons — lower is better; #templates)');
const skills = Object.keys(R.near).sort((a, b) => R.near[b].nearRepeat - R.near[a].nearRepeat);
let maxNear = 0, sumNear = 0;
for (const s of skills) {
  const n = R.near[s]; maxNear = Math.max(maxNear, n.nearRepeat); sumNear += n.nearRepeat;
  console.log(`  ${s.padEnd(14)} nearRepeat=${n.nearRepeat.toFixed(4)}  templates=${n.templates}`);
}
const avgNear = sumNear / skills.length;
console.log(`  → worst-skill near-repeat (Σpᵢ²) = ${maxNear.toFixed(4)}, average = ${avgNear.toFixed(4)}`);

console.log('\nLARGEST SKELETON CLUSTERS (skill/kind → dominant skeleton share)');
for (const c of R.topClusters) console.log(`  ${(c.share * 100).toFixed(1)}%  [${c.skill}/${c.kind}] ${c.skeleton}`);
// The honest "felt near-repeat" pass criterion: no single stem skeleton may
// dominate its (skill,kind) cell. A 50/50 two-template split is healthy variety;
// a lone-template cell (100%) is a monoculture and fails.
const maxShare = R.topClusters.length ? R.topClusters[0].share : 0;
maxShare <= 0.55 ? ok(`no stem skeleton exceeds 55% of its skill/kind cell (worst ${(maxShare * 100).toFixed(1)}%)`)
  : warn(`a stem skeleton dominates its cell at ${(maxShare * 100).toFixed(1)}% (target ≤ 55%)`);

console.log('\nCORRECTNESS');
const C = R.correctness;
C.malformed === 0 ? ok('every MC item: 4 unique choices + valid keyed answer + 3 substantive wrong-answer reasons')
  : bad(`${C.malformed} malformed MC items (${C.malformedEx.join(', ')})`);
C.gridWrong === 0 ? ok('every grid-in: keyed answer AND all accepted forms grade as correct')
  : bad(`${C.gridWrong} grid items whose own answer fails grading (${C.gridWrongEx.slice(0, 4).join(' | ')})`);
C.badNum === 0 ? ok('no NaN / undefined / null / Infinity in any stem, choice, answer, or explanation')
  : bad(`${C.badNum} items with malformed numeric tokens (${C.badNumEx.slice(0, 4).join(' | ')})`);
C.badExpl === 0 ? ok('every math item carries a substantive explanation (≥ 12 chars)')
  : bad(`${C.badExpl} items with missing/short/malformed explanations`);
C.noDiff === 0 ? ok('every math item carries a difficulty tag') : bad(`${C.noDiff} items missing a difficulty tag`);

console.log(`\n${failures === 0 ? '✅ MATH AUDIT PASSED' : '❌ MATH AUDIT FAILED'} — ${failures} failures, ${warnings} warnings`);
console.log('\nJSON ' + JSON.stringify({
  budget: R.budget, rawSigs: R.rawSigs, skeletons: R.skeletons,
  representations: R.representations.length, families: R.families.length,
  worstNear: +maxNear.toFixed(4), avgNear: +avgNear.toFixed(4), maxClusterShare: +maxShare.toFixed(4),
  malformed: C.malformed, gridWrong: C.gridWrong, badNum: C.badNum, badExpl: C.badExpl,
}));
process.exit(failures === 0 ? 0 : 1);
