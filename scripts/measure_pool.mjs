/* SAT Quest — effective-pool measurement. Loads the real generators and counts
   the DISTINCT question variants actually reachable under a large, fixed sample
   budget (not theoretical generator space). Reproducible: same budget every run.
   Run:  node scripts/measure_pool.mjs

   "Effective pool" = static authored items + distinct generated signatures a
   daily user could realistically encounter. Scenario-based generators (R&W)
   saturate, so their distinct count is a true measure of variety; parametric
   generators (math) are sampled with a fixed budget per skill/tier. */
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
  'js/data/mathviz.js', 'js/data/mathgen2.js', 'js/data/mathgen3.js', 'js/data/mathgen4.js', 'js/data/mathgen5.js', 'js/data/mathgen6.js', 'js/data/mathgen7.js', 'js/data/mathgen8.js', 'js/data/mathgen9.js', 'js/data/mathgen10.js', 'js/data/mathgen_flatten.js',
  'js/data/rw/information-ideas.js', 'js/data/rw/craft-structure.js', 'js/data/rw/expression-ideas.js',
  'js/data/rw/conventions.js', 'js/data/rw/index.js', 'js/data/rwgen.js', 'js/data/rwgen2.js', 'js/data/rwgen3.js', 'js/data/rwgen4.js', 'js/data/rwgen5.js',
  'js/state.js', 'js/upgrades.js', 'js/quiz.js', 'js/exam.js',
].filter(f => fs.existsSync(path.join(root, f)))) {
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
}
const run = c => vm.runInContext(c, ctx);

// --- Sampling budgets (fixed, so before/after are comparable) ---
const RW_DRAWS_PER_SKILL = 40000;   // enough to saturate scenario-based R&W generators
const MATH_DRAWS_PER_CELL = 6000;   // per skill per tier for MC + grid

const staticRW = run('RW_BANK.length');

// stripQ isolates the SCENARIO/passage (everything before the trailing
// "Which choice…" question), so we can count meaningfully-distinct content
// rather than shallow answer-wording permutations of the same passage.
const rw = run(`(function(){
  if (typeof RW_GENERATORS === 'undefined') return { skills: [], perSkill: {}, perScenario: {}, total: 0, scenarios: 0 };
  const stripQ = (t) => (t || '').split(/\\n\\nWhich choice/)[0].replace(/______/g, '_').trim();
  const perSkill = {}, perScenario = {}; const all = new Set(); const allScen = new Set();
  for (const s of Object.keys(RW_GENERATORS)) {
    const set = new Set(), scen = new Set();
    for (let i = 0; i < ${RW_DRAWS_PER_SKILL}; i++) { const q = RW_GENERATORS[s](); set.add(q.variantId); all.add(q.variantId); const sc = stripQ(q.text); scen.add(sc); allScen.add(s+'::'+sc); }
    perSkill[s] = set.size; perScenario[s] = scen.size;
  }
  return { skills: Object.keys(RW_GENERATORS), perSkill, perScenario, total: all.size, scenarios: allScen.size };
})()`);

const math = run(`(function(){
  const all = new Set(); const perSkill = {};
  const tally = (name, gens) => {
    for (const s of Object.keys(gens)) {
      const set = new Set();
      for (let t = 1; t <= 3; t++) for (let i = 0; i < ${MATH_DRAWS_PER_CELL}; i++) { const q = gens[s](t); if(!q) continue; const sig = qSignature(q); set.add(sig); all.add(name+sig); }
      perSkill[s] = (perSkill[s] || 0) + set.size;
    }
  };
  tally('mc', MATH_GENERATORS);
  tally('grid', GRID_GENERATORS);
  // visual entry points
  if (typeof VISUAL_SKILLS !== 'undefined' || typeof hasVisual === 'function') {
    for (const s of Object.keys(MATH_GENERATORS)) {
      if (typeof hasVisual === 'function' && hasVisual(s)) {
        const set = new Set();
        for (let t = 1; t <= 3; t++) for (let i = 0; i < 2000; i++) { const q = generateVisualQuestion(s, t); if (q) { const sig = qSignature(q); set.add(sig); all.add('viz'+sig); } }
        if (set.size) perSkill[s] = (perSkill[s] || 0) + set.size;
      }
    }
  }
  return { perSkill, total: all.size };
})()`);

const effRW = staticRW + rw.total;
const effMath = math.total; // all math is generated (no static math bank)
const totalEff = effRW + effMath;

console.log('=== SAT QUEST — EFFECTIVE POOL MEASUREMENT ===');
console.log(`(R&W draws/skill: ${RW_DRAWS_PER_SKILL.toLocaleString()}, Math draws/skill/tier: ${MATH_DRAWS_PER_CELL.toLocaleString()})\n`);
const effScenRW = staticRW + (rw.scenarios || 0); // honest freshness metric
console.log('READING & WRITING');
console.log(`  Static authored bank:            ${staticRW.toLocaleString()} (each a distinct scenario)`);
console.log(`  Generated skills (${rw.skills.length}):            ${rw.skills.join(', ') || '(none)'}`);
console.log(`     ${'skill'.padEnd(16)} ${'sigs'.padStart(9)}  ${'scenarios'.padStart(9)}`);
for (const s of rw.skills) console.log(`     ${s.padEnd(16)} ${rw.perSkill[s].toLocaleString().padStart(9)}  ${rw.perScenario[s].toLocaleString().padStart(9)}`);
console.log(`  Distinct generated R&W signatures: ${rw.total.toLocaleString()}`);
console.log(`  Distinct generated R&W SCENARIOS:  ${(rw.scenarios||0).toLocaleString()}  <-- honest freshness metric`);
console.log(`  EFFECTIVE R&W (signatures):        ${effRW.toLocaleString()}`);
console.log(`  EFFECTIVE R&W (distinct scenarios): ${effScenRW.toLocaleString()}\n`);
console.log('MATH');
const mathSkills = Object.keys(math.perSkill).sort((a,b)=>math.perSkill[b]-math.perSkill[a]);
for (const s of mathSkills) console.log(`     ${s.padEnd(16)} ${math.perSkill[s].toLocaleString()} distinct`);
console.log(`  EFFECTIVE MATH POOL:            ${effMath.toLocaleString()}\n`);
console.log('TOTAL');
console.log(`  TOTAL EFFECTIVE PLAYABLE POOL:  ${totalEff.toLocaleString()}`);

console.log(`  Honest freshness pool (distinct scenarios R&W + distinct math): ${(effScenRW + effMath).toLocaleString()}`);

// Machine-readable line for diffing runs.
console.log(`\nJSON ${JSON.stringify({ staticRW, genRWsig: rw.total, genRWscen: rw.scenarios || 0, effRW, effScenRW, effMath, totalEff, freshnessPool: effScenRW + effMath, rwSkills: rw.skills.length })}`);
