/* SAT Quest — EXTENDED long-runthrough anti-repeat simulation.
   Plays a much longer continuous daily-use session than test_systems' built-in
   check (which serves ~1,177). Everything happens inside ONE runthrough, so
   seen-tracking must keep every served question distinct until a relevant pool
   is genuinely exhausted. Reports served / distinct / repeats, broken down by
   source. Run: node scripts/longrun.mjs */
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const store = new Map();
const localStorage = { getItem: k => store.has(k) ? store.get(k) : null, setItem: (k, v) => store.set(k, String(v)), removeItem: k => store.delete(k) };
const ctx = { console, Math, Date, JSON, Object, Array, String, Number, isNaN, parseInt, parseFloat, localStorage, window: undefined };
vm.createContext(ctx);
for (const f of [
  'js/data/worlds.js', 'js/data/tips.js', 'js/data/mathgen.js', 'js/data/gridgen.js',
  'js/data/mathviz.js', 'js/data/mathgen2.js', 'js/data/mathgen3.js', 'js/data/mathgen4.js', 'js/data/mathgen5.js',
  'js/data/rw/information-ideas.js', 'js/data/rw/craft-structure.js', 'js/data/rw/expression-ideas.js',
  'js/data/rw/conventions.js', 'js/data/rw/index.js', 'js/data/rwgen.js', 'js/data/rwgen2.js', 'js/data/rwgen3.js',
  'js/state.js', 'js/upgrades.js', 'js/quiz.js', 'js/exam.js',
]) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
const run = c => vm.runInContext(c, ctx);
run('loadState()');

const DAYS = Number(process.argv[2] || 50);   // simulated days of daily use
const r = run(`(function(){
  startNewRunthrough(false);
  const keys = [];
  const firstRepeatAt = { n: -1 };
  const seen = new Set();
  const push = (k) => { if (k == null) return; keys.push(k); if (seen.has(k) && firstRepeatAt.n < 0) firstRepeatAt.n = keys.length; seen.add(k); };
  const rwLevels = allLevels().filter(l => l.section !== 'math').map(l => l.id);
  const mathLevels = allLevels().filter(l => l.section === 'math').map(l => l.id);
  for (let day = 0; day < ${DAYS}; day++) {
    // heavier daily load than the built-in test: 5 R&W + 5 math levels + 5 tower floors
    for (let k = 0; k < 5; k++) {
      const rw = rwLevels[(day * 5 + k) % rwLevels.length];
      const ma = mathLevels[(day * 5 + k) % mathLevels.length];
      for (const q of buildLevelQuiz(rw)) push(q.id || q.variantId);
      for (const q of buildLevelQuiz(ma)) push(q.variantId || q.sig);
    }
    for (let f = 1; f <= 5; f++) { const q = buildTowerQuestion(((day + f) % 10) + 1); push(q.id || q.variantId || q.sig); }
    // one exam module every few days
    if (day % 3 === 0) { for (const q of buildExamModule(day % 2 ? 'math1' : 'rw1', false)) push(q.id || q.variantId || q.sig); }
  }
  // a handful of bosses along the way
  for (const b of allBosses()) for (const q of buildBossQuiz(b.id)) push(q.id || q.variantId || q.sig);
  const distinct = new Set(keys);
  const rwIds = keys.filter(k => typeof k === 'string' && !/#/.test(k) && !/^rwgen/.test(k));
  const genSigs = keys.filter(k => typeof k === 'string' && /#/.test(k));
  return { total: keys.length, distinct: distinct.size, repeats: keys.length - distinct.size, firstRepeatAt: firstRepeatAt.n,
    rwIds: rwIds.length, distinctRwIds: new Set(rwIds).size, genSigs: genSigs.length, distinctGenSigs: new Set(genSigs).size,
    seenR: STATE.runthrough.seenIds.length, seenS: STATE.runthrough.seenSigs.length };
})()`);

console.log(`=== EXTENDED LONG-RUNTHROUGH (${DAYS} simulated days, one runthrough) ===`);
console.log(`  questions served : ${r.total.toLocaleString()}`);
console.log(`  distinct served  : ${r.distinct.toLocaleString()}`);
console.log(`  exact repeats    : ${r.repeats}${r.firstRepeatAt > 0 ? ' (first at #' + r.firstRepeatAt + ')' : ''}`);
console.log(`  authored R&W ids : ${r.rwIds.toLocaleString()} served, ${r.distinctRwIds.toLocaleString()} distinct`);
console.log(`  generated sigs   : ${r.genSigs.toLocaleString()} served, ${r.distinctGenSigs.toLocaleString()} distinct`);
console.log(`  seen-tracking    : ${r.seenR} ids + ${r.seenS} signatures`);
console.log(r.repeats === 0 ? '  ✅ NO exact repeats across the entire extended session' : `  ⚠️  ${r.repeats} repeats after the authored pool was exhausted (expected once a finite pool runs out)`);
