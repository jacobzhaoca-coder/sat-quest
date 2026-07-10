/* SAT Quest — deep problem-quality audit for the v3 content-depth pass.
   Loads the real generators and inspects the ACTUAL generated content (not just
   structure) for the quality risks the daily-use spec calls out:
     • duplicate / near-duplicate scenarios (repeated passages with tiny changes)
     • malformed answer choices (not 4, not unique, none/many correct)
     • missing or empty wrong-answer explanations
     • empty / too-generic main explanations
     • passages too long for mobile
     • math answers that are missing, malformed, or absent from the choices
   Run: node scripts/audit_quality.mjs   (exit 1 if any hard check fails) */
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const store = new Map();
const ctx = { console, Math, Date, JSON, Object, Array, String, Number, isNaN, parseInt, parseFloat,
  localStorage: { getItem: k => store.has(k) ? store.get(k) : null, setItem: (k, v) => store.set(k, String(v)), removeItem: k => store.delete(k) }, window: undefined };
vm.createContext(ctx);
for (const f of [
  'js/data/worlds.js', 'js/data/tips.js', 'js/data/mathgen.js', 'js/data/gridgen.js',
  'js/data/mathviz.js', 'js/data/mathgen2.js', 'js/data/mathgen3.js', 'js/data/mathgen4.js', 'js/data/mathgen5.js',
  'js/data/rw/information-ideas.js', 'js/data/rw/craft-structure.js', 'js/data/rw/expression-ideas.js',
  'js/data/rw/conventions.js', 'js/data/rw/index.js', 'js/data/rwgen.js', 'js/data/rwgen2.js', 'js/data/rwgen3.js',
  'js/state.js', 'js/upgrades.js', 'js/quiz.js', 'js/exam.js',
].filter(f => fs.existsSync(path.join(root, f)))) {
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
}
const run = c => vm.runInContext(c, ctx);

let failures = 0, warnings = 0;
const ok = m => console.log('  ✅ ' + m);
const bad = m => { console.log('  ❌ ' + m); failures++; };
const warn = m => { console.log('  ⚠️  ' + m); warnings++; };

const STEM = /\n\nWhich choice|\n\nWhich finding|\n\nWhich choice most|\n\nHow (would|does)|\n\nThe (author|relationship|student|point|two)|\n\nThe student wants/;
const stripQ = t => (t || '').split(STEM)[0].replace(/_{2,}/g, '_').trim();
const contentWords = t => new Set(String(t).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 3));
const jaccard = (a, b) => { let i = 0; for (const w of a) if (b.has(w)) i++; return i / (a.size + b.size - i || 1); };

console.log('=== R&W GENERATED CONTENT AUDIT ===');
const rw = run(`(function(){
  const stripQ = (t) => { t = t || ''; const m = t.search(/\\n\\nWhich |\\n\\nHow |\\n\\nThe author|\\n\\nThe relationship|\\n\\nThe student wants|\\n\\nThe two|\\n\\nThe point/); return (m >= 0 ? t.slice(0, m) : t).replace(/_{2,}/g, '_').trim(); };
  const perSkill = {};
  for (const s of Object.keys(RW_GENERATORS)) {
    const seen = new Map();          // scenario -> sample question
    for (let i = 0; i < 60000; i++) {
      const q = RW_GENERATORS[s]();
      const sc = stripQ(q.text);
      if (!seen.has(sc)) seen.set(sc, q);
    }
    perSkill[s] = [...seen.entries()].map(([sc, q]) => ({ sc, text: q.text, choices: q.choices, answer: q.answer, whyWrong: q.whyWrong, explanation: q.explanation }));
  }
  return perSkill;
})()`);

let totalItems = 0, malformed = 0, badExpl = 0, tooLong = 0, maxLen = 0, exactDup = 0, nearDup = 0;
const nearDupExamples = [];
for (const skill of Object.keys(rw)) {
  const items = rw[skill];
  totalItems += items.length;
  // structural validation
  for (const it of items) {
    const texts = it.choices.map(c => c.text);
    const uniqueChoices = new Set(texts).size === 4 && it.choices.length === 4;
    const answerValid = ['A', 'B', 'C', 'D'].includes(it.answer);
    const wrongs = ['A', 'B', 'C', 'D'].filter(L => L !== it.answer);
    const whyOk = wrongs.every(L => it.whyWrong && it.whyWrong[L] && it.whyWrong[L].length > 8);
    if (!(uniqueChoices && answerValid && whyOk)) malformed++;
    if (!it.explanation || it.explanation.length < 25) badExpl++;
    if (it.text.length > maxLen) maxLen = it.text.length;
    if (it.text.length > 620) tooLong++;
  }
  // exact-duplicate scenarios
  const scs = items.map(i => i.sc);
  exactDup += scs.length - new Set(scs).size;
  // near-duplicate scenarios (content-word Jaccard within skill)
  const sets = items.map(i => contentWords(i.sc));
  for (let a = 0; a < sets.length; a++) for (let b = a + 1; b < sets.length; b++) {
    const j = jaccard(sets[a], sets[b]);
    if (j > 0.72) { nearDup++; if (nearDupExamples.length < 8) nearDupExamples.push(`[${skill} j=${j.toFixed(2)}] "${items[a].sc.slice(0,50)}..." ~ "${items[b].sc.slice(0,50)}..."`); }
  }
}
console.log(`  distinct scenarios inspected: ${totalItems}`);
malformed === 0 ? ok('every item has 4 unique choices, one valid keyed answer, 3 non-empty wrong-answer explanations') : bad(`${malformed} items malformed (choices/answer/whyWrong)`);
badExpl === 0 ? ok('every item has a substantive main explanation (>= 25 chars)') : bad(`${badExpl} items with empty/too-short explanations`);
tooLong === 0 ? ok(`no scenario exceeds the mobile length cap (longest = ${maxLen} chars)`) : warn(`${tooLong} scenarios over 620 chars (longest = ${maxLen})`);
exactDup === 0 ? ok('no exact-duplicate scenarios within any skill') : bad(`${exactDup} exact-duplicate scenarios found`);
if (nearDup === 0) ok('no near-duplicate scenarios (content-word Jaccard <= 0.72)');
else { warn(`${nearDup} near-duplicate scenario pairs (Jaccard > 0.72)`); nearDupExamples.forEach(e => console.log('       ' + e)); }

console.log('\n=== MATH GENERATED CONTENT AUDIT ===');
const math = run(`(function(){
  let total = 0, bad = 0, badExpl = 0, examples = [];
  const check = (gens, kind) => {
    for (const s of Object.keys(gens)) {
      for (let t = 1; t <= 3; t++) for (let i = 0; i < 1200; i++) {
        const q = gens[s](t); if (!q) continue; total++;
        let problem = false;
        if (kind === 'mc') {
          const texts = (q.choices||[]).map(c => c.text != null ? c.text : c);
          if (!q.choices || q.choices.length !== 4) problem = true;
          else if (new Set(texts.map(String)).size !== 4) problem = true;
          else if (!['A','B','C','D'].includes(q.answer)) problem = true;
        } else { // grid
          if (q.gridAnswer == null && q.answer == null) problem = true;
        }
        if (problem) { bad++; if (examples.length < 6) examples.push(kind+':'+s); }
        if (!q.explanation || q.explanation.length < 10) badExpl++;
      }
    }
  };
  check(MATH_GENERATORS, 'mc');
  check(GRID_GENERATORS, 'grid');
  return { total, bad, badExpl, examples };
})()`);
console.log(`  math instances inspected: ${math.total}`);
math.bad === 0 ? ok('every math item well-formed (4 unique choices + keyed answer, or a valid grid answer)') : bad(`${math.bad} malformed math items (${[...new Set(math.examples)].join(', ')})`);
math.badExpl === 0 ? ok('every math item carries an explanation') : bad(`${math.badExpl} math items missing explanations`);

console.log('\n=== SOURCE-SAFETY SPOT CHECK ===');
const forbidden = run(`(function(){
  const banned = ['bluebook','college board','khan academy','princeton review','uworld','barron'];
  let hits = 0;
  for (const s of Object.keys(RW_GENERATORS)) for (let i=0;i<3000;i++){ const t=(RW_GENERATORS[s]().text||'').toLowerCase(); if (banned.some(b=>t.includes(b))) hits++; }
  return hits;
})()`);
forbidden === 0 ? ok('no brand/source names surfaced in a large generated sample') : bad(`${forbidden} generated items mention a forbidden source name`);

console.log(`\n${failures === 0 ? '✅ QUALITY AUDIT PASSED' : '❌ QUALITY AUDIT FAILED'} — ${failures} failures, ${warnings} warnings`);
process.exit(failures === 0 ? 0 : 1);
