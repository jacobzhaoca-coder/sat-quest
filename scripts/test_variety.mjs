/* SAT Quest — regression test for question variety (the "same two questions
   repeating" bug). Run with:  node scripts/test_variety.mjs
   Loads the real app data + quiz logic in a VM and asserts:
     1. Every World Map level yields > 2 unique questions (and no duplicates
        unless the whole layered pool is genuinely smaller than the quiz).
     2. Generated math varies across runs of the same level.
     3. R&W levels sample from more than two authored items across replays.
     4. The math fallback is never used for R&W skills (every R&W skill/tier
        resolves to a non-empty authored pool).
     5. Bosses and review quizzes contain no duplicate texts.
*/
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const ctx = { console, Math, window: undefined, STATE: { recentRW: [] } };
vm.createContext(ctx);
for (const f of ['js/data/worlds.js', 'js/data/tips.js', 'js/data/mathgen.js',
  'js/data/gridgen.js', 'js/data/mathviz.js',
  'js/data/rw/information-ideas.js', 'js/data/rw/craft-structure.js',
  'js/data/rw/expression-ideas.js', 'js/data/rw/conventions.js',
  'js/data/rw/index.js', 'js/quiz.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
}
const run = (code) => vm.runInContext(code, ctx);

let pass = 0, fail = 0;
const check = (label, ok, detail = '') => {
  if (ok) { pass++; console.log(`  ✅ ${label}`); }
  else { fail++; console.log(`  ❌ ${label} ${detail}`); }
};

console.log('1) Every World Map level: >2 unique questions, no avoidable duplicates');
const levels = run('allLevels().map(l => l.id)');
for (const id of levels) {
  run('STATE.recentRW = []'); // each level judged on its own merits
  const r = run(`(function(){
    const lv = levelById('${id}');
    const qs = buildLevelQuiz('${id}');
    const uniq = new Set(qs.map(q=>q.text)).size;
    let poolSize = qs.length; // math pools are effectively infinite
    if (lv.section !== 'math') poolSize = rwLevelLayers(lv.skills, lv.tier, lv.region).flat().length;
    return { n: qs.length, uniq, poolSize, section: lv.section };
  })()`);
  const expected = Math.min(r.n, r.poolSize);
  if (r.uniq < expected || r.uniq <= 2) {
    check(`${id}`, false, `— ${r.uniq}/${r.n} unique (pool ${r.poolSize})`);
  } else pass++;
}
console.log(`  (${levels.length} levels checked, ${fail === 0 ? 'all OK' : fail + ' failing'})`);

console.log('2) Math levels vary across runs');
const varies = run(`(function(){
  const a = buildLevelQuiz('m-alg-1').map(q=>q.text).join('|');
  const b = buildLevelQuiz('m-alg-1').map(q=>q.text).join('|');
  const c = buildLevelQuiz('m-adv-2').map(q=>q.text).join('|');
  const d = buildLevelQuiz('m-adv-2').map(q=>q.text).join('|');
  return (a!==b) || (c!==d);
})()`);
check('same math level produces different questions on replay', varies);

console.log('3) R&W levels reach beyond two authored items across replays');
const spread = run(`(function(){
  STATE.recentRW = [];
  const seen = new Set();
  for (let i=0;i<4;i++) for (const q of buildLevelQuiz('rw-ii-1')) seen.add(q.text);
  return seen.size;
})()`);
check(`4 replays of rw-ii-1 draw ${spread} distinct authored questions (>2 required)`, spread > 2);

console.log('4) No R&W skill/tier falls through to the math fallback');
const rwOk = run(`(function(){
  const bad = [];
  for (const s of Object.keys(SKILLS)) {
    if (SKILLS[s].section !== 'rw') continue;
    for (const t of [1,2,3]) if (rwQuestionsFor(s,t).length === 0) bad.push(s+'/t'+t);
  }
  return bad;
})()`);
check('every R&W skill/tier has authored questions', rwOk.length === 0, rwOk.join(', '));

console.log('5) Bosses and review quizzes: no duplicate texts');
const bossDupes = run(`(function(){
  const bad = [];
  for (const b of allBosses()) {
    STATE.recentRW = [];
    const qs = buildBossQuiz(b.id);
    const uniq = new Set(qs.map(q=>q.text)).size;
    if (uniq !== qs.length) bad.push(b.id + ' (' + uniq + '/' + qs.length + ')');
  }
  return bad;
})()`);
check('all bosses duplicate-free', bossDupes.length === 0, bossDupes.join(', '));
const reviewDupes = run(`(function(){
  STATE.recentRW = [];
  const qs = buildReviewQuiz(['central-ideas','transitions','linear-eq'], 6);
  return new Set(qs.map(q=>q.text)).size === qs.length;
})()`);
check('review quiz duplicate-free', reviewDupes);

console.log(`\n${fail === 0 ? '✅ ALL VARIETY CHECKS PASSED' : '❌ ' + fail + ' CHECK(S) FAILED'} (${pass} passed)`);
process.exit(fail === 0 ? 0 : 1);
