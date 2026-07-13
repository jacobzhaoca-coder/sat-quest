/* SAT Quest — content validation for the expanded R&W bank and math generators.
   Run:  node scripts/test_content.mjs
   Verifies R&W field completeness/ids/answer keys/coverage and that the math
   generators can produce 500+ valid, non-identical variants with correct keys. */
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const ctx = { console, Math, window: undefined, STATE: { recentRW: [] } };
vm.createContext(ctx);
const files = ['js/data/worlds.js', 'js/data/tips.js', 'js/data/mathgen.js', 'js/data/gridgen.js', 'js/data/mathviz.js', 'js/data/mathgen2.js', 'js/data/mathgen3.js', 'js/data/mathgen4.js', 'js/data/mathgen5.js', 'js/data/mathgen6.js', 'js/data/mathgen7.js', 'js/data/mathgen8.js', 'js/data/mathgen9.js', 'js/data/mathgen_flatten.js',
  'js/data/rw/information-ideas.js', 'js/data/rw/craft-structure.js', 'js/data/rw/expression-ideas.js',
  'js/data/rw/conventions.js', 'js/data/rw/index.js', 'js/data/rwgen.js', 'js/data/rwgen2.js', 'js/data/rwgen3.js', 'js/data/rwgen4.js', 'js/quiz.js'];
for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
const run = (c) => vm.runInContext(c, ctx);

let pass = 0, fail = 0;
const check = (label, ok, detail = '') => { if (ok) { pass++; console.log('  ✅ ' + label); } else { fail++; console.log('  ❌ ' + label + (detail ? ' — ' + detail : '')); } };

/* ============================ READING & WRITING ============================ */
console.log('\n=== READING & WRITING ===');
const bank = run('RW_BANK');
console.log(`  Total R&W items: ${bank.length}`);

check('R&W bank has at least 402 items (doubled from the 201 baseline)', bank.length >= 402, `only ${bank.length}`);

const ids = bank.map(q => q.id);
check('every item has a unique id', new Set(ids).size === ids.length, `${ids.length - new Set(ids).size} dupes`);

const reqBad = bank.filter(q => !q.id || !q.domain || !q.skill || !q.tier || !q.text || !Array.isArray(q.choices) || q.choices.length !== 4 || !q.answer || !q.explanation);
check('every item has all required fields (id/domain/skill/tier/text/4 choices/answer/explanation)', reqBad.length === 0, reqBad.slice(0, 3).map(q => q.id).join(', '));

const keyBad = bank.filter(q => !q.choices.some(c => c.letter === q.answer));
check('every answer key matches one of the four choices', keyBad.length === 0, keyBad.slice(0, 3).map(q => q.id).join(', '));

const expBad = bank.filter(q => !q.explanation || q.explanation.length < 15);
check('every explanation is present and non-trivial', expBad.length === 0, expBad.slice(0, 3).map(q => q.id).join(', '));

const wwBad = bank.filter(q => !q.whyWrong || Object.keys(q.whyWrong).length < 3);
check('every item has wrong-answer explanations for the 3 distractors', wwBad.length === 0, wwBad.slice(0, 3).map(q => q.id).join(', '));

const wwKeyBad = bank.filter(q => q.whyWrong && Object.keys(q.whyWrong).some(lt => lt === q.answer));
check('no whyWrong entry is keyed to the correct answer', wwKeyBad.length === 0, wwKeyBad.slice(0, 3).map(q => q.id).join(', '));

const texts = bank.map(q => q.text.trim());
check('no exact duplicate passages/prompts', new Set(texts).size === texts.length, `${texts.length - new Set(texts).size} dupes`);

const choiceDup = bank.filter(q => new Set(q.choices.map(c => c.text.trim())).size !== 4);
check('no item has duplicate answer choices', choiceDup.length === 0, choiceDup.slice(0, 3).map(q => q.id).join(', '));

// Near-duplicate scenario heuristic: compare only the passage/scenario content, with
// the standard question stems and shared instruction boilerplate stripped out, and flag
// any two items that share most of their remaining content words. This catches shallow
// "template slop" (e.g. reusing the same scenario with a reworded stem) without firing
// on the legitimately templated question stems many item types share.
const BOILER = new Set(('which choice completes text conforms conventions standard english following adapted ' +
  'from most logical precise word transition finding true would strongly support claim effectively uses ' +
  'relevant information notes accomplish this goal describes overall structure best states main idea author ' +
  'response respond based texts complete that so about article book story essay').split(/\s+/));
const scenarioOf = t => {
  let parts = t.split(/\n\n/).filter(p => !/^which choice|^complete the text so/i.test(p.trim()));
  return parts.join(' ').replace(/which (choice|finding)[^?]*\?/gi, ' ');
};
const wordSet = s => new Set(s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 3 && !BOILER.has(w)));
const jaccard = (a, b) => { const i = [...a].filter(x => b.has(x)).length; const u = new Set([...a, ...b]).size; return u ? i / u : 0; };
const passages = bank.map(q => ({ id: q.id, skill: q.skill, w: wordSet(scenarioOf(q.text)) }));
let nearDup = [];
for (let i = 0; i < passages.length; i++) for (let j = i + 1; j < passages.length; j++) {
  if (passages[i].w.size < 6 || passages[j].w.size < 6) continue;
  const sim = jaccard(passages[i].w, passages[j].w);
  if (sim > 0.6) nearDup.push(`${passages[i].id}~${passages[j].id} (${sim.toFixed(2)})`);
}
check('no two scenarios are near-duplicates (content-word overlap <= 0.6)', nearDup.length === 0, nearDup.slice(0, 5).join(', '));

// Blueprint-generated items (batch 2) carry the source tag and are well formed.
const bpItems = bank.filter(q => q.source === 'blueprint-generated');
console.log(`  Blueprint-generated R&W items: ${bpItems.length}`);
check('every blueprint-generated item has a source tag and 4 choices', bpItems.every(q => q.choices.length === 4 && q.whyWrong), '');

// No official-source leakage: the reference folder is analyzed privately only.
// Guard against any recognizable proper-noun scenarios from the reference set
// slipping into the committed bank. (Names below are examples the private
// reference happens to use; none should appear in app content.)
const FORBIDDEN = ['lillie taylor', 'diné', 'navajo (diné)', 'in the path of the four seasons', 'arizona dock'];
const leaks = bank.filter(q => { const t = (q.text + ' ' + q.explanation).toLowerCase(); return FORBIDDEN.some(f => t.includes(f)); });
check('no committed item contains known official-reference text', leaks.length === 0, leaks.slice(0, 3).map(q => q.id).join(', '));

// Coverage
const stats = run('rwBankStats()');
console.log('\n  Coverage by domain:');
for (const [d, n] of Object.entries(stats.byDomain)) console.log(`    ${d}: ${n}`);
console.log('  Coverage by tier:', JSON.stringify(stats.byTier));
console.log('  Coverage by skill (t1/t2/t3):');
const thin = [];
for (const [s, c] of Object.entries(stats.bySkill)) {
  console.log(`    ${s.padEnd(16)} ${c[1]}/${c[2]}/${c[3]} = ${c.total}`);
  for (const t of [1, 2, 3]) if (c[t] < 12) thin.push(`${s}-t${t}:${c[t]}`);
}
check('every skill-tier cell has >= 12 items', thin.length === 0, thin.join(', '));

const skillsExpected = ['central-ideas', 'evidence-text', 'evidence-quant', 'inferences', 'words-context', 'structure', 'cross-text', 'transitions', 'synthesis', 'boundaries', 'form-sense'];
check('all 11 skills are covered', skillsExpected.every(s => stats.bySkill[s] && stats.bySkill[s].total > 0));
check('all 4 domains are covered', Object.keys(stats.byDomain).length === 4);

/* ================================ MATH ================================ */
console.log('\n=== MATH GENERATORS ===');
const mathSkills = run(`Object.keys(SKILLS).filter(s => SKILLS[s].section==='math')`);
const gridSkills = run(`Object.keys(SKILLS).filter(s => SKILLS[s].section==='math' && hasGrid(s))`);
const vizSkills = run(`Object.keys(SKILLS).filter(s => SKILLS[s].section==='math' && hasVisual(s))`);
console.log(`  MC skills: ${mathSkills.length}, grid skills: ${gridSkills.length}, visual skills: ${vizSkills.length}`);

// Generate a large batch of variants and validate each.
const res = run(`(function(){
  const seen = new Set(); const problems = []; let total = 0, invalid = 0;
  const validateMC = q => q.choices && q.choices.length===4 && new Set(q.choices.map(c=>c.text)).size===4 && q.choices.some(c=>c.letter===q.answer) && q.explanation && q.text;
  const validateGrid = q => (q.answer!==undefined && q.answer!=='') && q.explanation && q.text && gradeGridAnswer(String(q.answer), q);
  const mk = (fn, skill, tier, kind) => {
    const q = fn(skill, tier); if(!q) return;
    total++;
    // Validate by the question's actual type — visual items may be grid-in.
    const ok = q.type==='grid' ? validateGrid(q) : validateMC(q);
    if(!ok) { invalid++; problems.push((q.typeId||kind+'-'+skill)+' invalid'); }
    if(q.visual && !(q.visual.html.includes('<svg') && q.visual.alt && q.visual.alt.length>10)) problems.push((q.typeId)+' bad-visual');
    seen.add(q.variantId);
  };
  const bpSigs = new Set();
  const mathSkills = Object.keys(SKILLS).filter(s=>SKILLS[s].section==='math');
  for(let rep=0; rep<20; rep++) for(const s of mathSkills) for(const t of [1,2,3]) {
    const before = seen.size;
    mk(generateMathQuestion, s, t, 'mc');
    if(hasGrid(s)) mk(generateGridQuestion, s, t, 'grid');
    if(hasVisual(s)) mk(generateVisualQuestion, s, t, 'viz');
    // record blueprint-generated signatures
    for (const gen of [generateMathQuestion, hasGrid(s)?generateGridQuestion:null].filter(Boolean)) {
      const q = gen(s, t); if (q && q.source === 'blueprint-generated') bpSigs.add(q.variantId);
    }
  }
  return { total, invalid, uniqueVariants: seen.size, bpVariants: bpSigs.size, problems: problems.slice(0,8) };
})()`);
console.log(`  Generated ${res.total} instances, ${res.uniqueVariants} unique variant signatures, ${res.invalid} invalid`);
console.log(`  Blueprint-generated math variants (sample): ${res.bpVariants}`);
check('produced >= 500 unique validated math variants', res.uniqueVariants >= 500, `only ${res.uniqueVariants}`);
check('produced >= 100 unique blueprint-generated math variants', res.bpVariants >= 100, `only ${res.bpVariants}`);
check('all generated math instances are valid (solvable, keyed, explained)', res.invalid === 0, res.problems.join('; '));

// Variation across runs for the same skill/tier
const vary = run(`(function(){
  const sigs = new Set();
  for(let i=0;i<40;i++) sigs.add(generateMathQuestion('quadratics',3).sig);
  return sigs.size;
})()`);
check('same generator varies across runs (quadratics t3: >5 distinct in 40)', vary > 5, `${vary} distinct`);

// Grid grading robustness
const grading = run(`(function(){
  const q = { type:'grid', answer: 0.75, accept:['3/4','0.75'] };
  const cases = [['3/4',true],['0.75',true],['.75',true],['  0.75 ',true],['6/8',true],['1/2',false],['0.7',false]];
  // Use a real generated grid question to confirm integer/decimal/fraction equivalence via gradeGridAnswer
  const tests = [];
  // integer
  const qi = { type:'grid', answer: 12 };
  tests.push(['int 12', gradeGridAnswer('12', qi)===true && gradeGridAnswer(' 12 ', qi)===true && gradeGridAnswer('13', qi)===false]);
  // decimal
  const qd = { type:'grid', answer: 3.5 };
  tests.push(['dec 3.5', gradeGridAnswer('3.5', qd)===true && gradeGridAnswer('3.50', qd)===true && gradeGridAnswer('7/2', qd)===true]);
  // fraction
  const qf = { type:'grid', answer: '3/4' };
  tests.push(['frac 3/4', gradeGridAnswer('3/4', qf)===true && gradeGridAnswer('0.75', qf)===true && gradeGridAnswer('6/8', qf)===true]);
  // whitespace + wrong
  tests.push(['whitespace/wrong', gradeGridAnswer('  0.75  ', qf)===true && gradeGridAnswer('0.7', qf)===false]);
  return tests;
})()`);
for (const [label, ok] of grading) check('grid grading: ' + label, ok);

// Procedural R&W generator (transitions + words-in-context): valid, distinct,
// exactly one correct answer, tagged, and a large variant space.
console.log('\nProcedural R&W generator (rwgen.js)');
const rw = run(`(function(){
  if (typeof RW_GENERATORS === 'undefined') return { present:false };
  const skills = Object.keys(RW_GENERATORS);
  const sigs = new Set(); let invalid = 0, tested = 0;
  for (const s of skills) for (let i=0;i<2000;i++){
    const q = rwGeneratedFor(s, 1)[0]; tested++;
    const letters = q.choices.map(c=>c.letter);
    const texts = q.choices.map(c=>c.text.trim().toLowerCase());
    const okItem = q && q.choices.length===4 && new Set(letters).size===4 && new Set(texts).size===4
      && letters.includes(q.answer) && q.explanation && Object.keys(q.whyWrong||{}).length===3
      && !Object.keys(q.whyWrong).includes(q.answer)
      && q.origin==='generated' && q.source==='blueprint-generated' && q.variantId
      && !/undefined|NaN/.test(q.text) && q.skill;
    if (!okItem) invalid++;
    sigs.add(q.variantId);
  }
  return { present:true, skills, tested, invalid, variants: sigs.size };
})()`);
if (!rw.present) check('R&W generator present', false, 'RW_GENERATORS missing');
else {
  console.log(`  R&W generator skills: ${rw.skills.join(', ')} — ${rw.tested} sampled, ${rw.variants} distinct variants`);
  check('every generated R&W item is valid (4 unique choices, keyed, explained, one correct)', rw.invalid === 0, `${rw.invalid} invalid`);
  check('R&W generator produces a large distinct variant space (>= 1000)', rw.variants >= 1000, `${rw.variants}`);
}

console.log(`\n${fail === 0 ? '✅ ALL CONTENT CHECKS PASSED' : '❌ ' + fail + ' CHECK(S) FAILED'} (${pass} passed)`);
process.exit(fail === 0 ? 0 : 1);
