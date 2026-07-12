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
for (const f of ['js/data/worlds.js', 'js/data/tips.js', 'js/data/lessons.js', 'js/data/mathgen.js',
  'js/data/gridgen.js', 'js/data/mathviz.js', 'js/data/mathgen2.js', 'js/data/mathgen3.js', 'js/data/mathgen4.js', 'js/data/mathgen5.js', 'js/data/mathgen6.js', 'js/data/mathgen7.js', 'js/data/mathgen8.js', 'js/data/mathgen9.js', 'js/data/mathgen10.js', 'js/data/mathgen_flatten.js',
  'js/data/rw/information-ideas.js', 'js/data/rw/craft-structure.js',
  'js/data/rw/expression-ideas.js', 'js/data/rw/conventions.js',
  'js/data/rw/index.js', 'js/data/rwgen.js', 'js/data/rwgen2.js', 'js/data/rwgen3.js', 'js/data/rwgen4.js', 'js/data/rwgen5.js', 'js/quiz.js', 'js/exam.js']) {
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

console.log('3) R&W levels produce strong variety across 10 replays');
// A single R&W level replayed 10 times should surface many distinct authored
// questions now that each skill/tier cell holds ~12 items.
const rwLevels = run(`allLevels().filter(l => l.section==='rw').map(l => l.id)`);
const spread = run(`(function(){
  STATE.recentRW = [];
  const seen = new Set();
  for (let i=0;i<10;i++) for (const q of buildLevelQuiz('rw-ii-1')) seen.add(q.text);
  return seen.size;
})()`);
check(`10 replays of rw-ii-1 draw ${spread} distinct authored questions (>= 12 required)`, spread >= 12, `${spread}`);

// Across several different R&W levels, 10 replays each should also be varied.
const perLevel = run(`(function(){
  const out = {};
  for (const id of ${JSON.stringify(rwLevels.slice(0, 8))}) {
    STATE.recentRW = [];
    const seen = new Set();
    for (let i=0;i<10;i++) for (const q of buildLevelQuiz(id)) seen.add(q.text);
    out[id] = seen.size;
  }
  return out;
})()`);
const thinLevels = Object.entries(perLevel).filter(([, n]) => n < 10);
check('10 replays of each R&W level yield >= 10 distinct questions', thinLevels.length === 0,
  thinLevels.map(([id, n]) => `${id}:${n}`).join(', '));
console.log('   per-level distinct-over-10-runs:', JSON.stringify(perLevel));

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

console.log('6) Review Dungeon: empty and populated skill sets both build a valid quiz');
// Empty weak-skill list falls back to all skills; a populated list uses the weak ones.
const reviewEmpty = run(`(function(){
  STATE.recentRW = [];
  const qs = buildReviewQuiz([], 6);
  return qs.length === 6 && qs.every(q => q && q.text && q.choices);
})()`);
check('Review Dungeon empty state builds 6 valid questions', reviewEmpty);
const reviewPop = run(`(function(){
  STATE.recentRW = [];
  const qs = buildReviewQuiz(['words-context','boundaries','inferences'], 6);
  return qs.length === 6 && qs.every(q => q && q.text && q.choices) && new Set(qs.map(q=>q.text)).size === qs.length;
})()`);
check('Review Dungeon populated state builds 6 valid, distinct questions', reviewPop);

console.log('7) Daily Tower: floors build valid questions and escalate in difficulty');
const tower = run(`(function(){
  const seen = new Set();
  let invalid = 0;
  // A valid question is either MC (4 choices) or a grid-in (answer, no choices).
  const valid = q => q && q.text && ((Array.isArray(q.choices) && q.choices.length===4) || (q.type==='grid' && q.answer!==undefined && q.answer!==''));
  for (let floor=1; floor<=12; floor++) {
    const q = buildTowerQuestion(floor);
    if (!valid(q)) { invalid++; continue; }
    seen.add(q.text);
  }
  // Difficulty escalation is probabilistic (the tower retries to hit the target
  // tier), so sample many draws and compare the low floors to the high floors.
  const easyLow = []; const hardHigh = [];
  for (let i=0;i<40;i++){ easyLow.push(buildTowerQuestion(1).difficulty); hardHigh.push(buildTowerQuestion(12).difficulty); }
  const share = (arr, label) => arr.filter(d => d===label).length / arr.length;
  return { invalid, distinct: seen.size, easyShare: share(easyLow,'Easy'), hardShare: share(hardHigh,'Hard') };
})()`);
check('Daily Tower builds valid questions on all 12 floors', tower.invalid === 0, `${tower.invalid} invalid`);
check('Daily Tower questions vary across floors', tower.distinct >= 8, `${tower.distinct} distinct in 12 floors`);
check('Daily Tower escalates difficulty (low floors mostly Easy, high floors mostly Hard)',
  tower.easyShare >= 0.7 && tower.hardShare >= 0.7, `easy@1=${tower.easyShare.toFixed(2)}, hard@12=${tower.hardShare.toFixed(2)}`);

console.log('8) Simulation Gate: R&W and Math exam modules build cleanly and vary');
const exam = run(`(function(){
  STATE.recentRW = [];
  const rw = buildExamModule('rw1', false);
  const rwHard = buildExamModule('rw2', true);
  const math = buildExamModule('math1', false);
  const rwOk = rw.length===12 && rw.every(q=>q&&q.text&&q.choices) && new Set(rw.map(q=>q.text)).size===rw.length;
  const mathOk = math.length===10 && math.every(q=>q&&q.text);
  // two independent R&W module draws should differ
  STATE.recentRW = [];
  const rwA = buildExamModule('rw1', false).map(q=>q.text).join('|');
  STATE.recentRW = [];
  const rwB = buildExamModule('rw1', false).map(q=>q.text).join('|');
  return { rwOk, mathOk, hardOk: rwHard.length===12, vary: rwA!==rwB };
})()`);
check('Simulation Gate R&W module: 12 valid, non-duplicate questions', exam.rwOk);
check('Simulation Gate Math module: 10 valid questions', exam.mathOk);
check('Simulation Gate adaptive (hard) R&W module builds 12 questions', exam.hardOk);
check('Simulation Gate R&W module varies between runs', exam.vary);

console.log(`\n${fail === 0 ? '✅ ALL VARIETY CHECKS PASSED' : '❌ ' + fail + ' CHECK(S) FAILED'} (${pass} passed)`);
process.exit(fail === 0 ? 0 : 1);
