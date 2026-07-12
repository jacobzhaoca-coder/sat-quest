/* SAT Quest — difficulty-calibration audit.
   Measures, per math skill, whether the questions actually generated at tier 1 /
   2 / 3 get harder as the tier rises. Difficulty can't be measured exactly, so we
   use a transparent COMPLEXITY PROXY per generated item:
     • count of distinct numbers in the stem   (more quantities → more to track)
     • largest magnitude among those numbers    (bigger numbers → more work)
     • any negative present                      (+1)
     • any fraction/decimal present              (+1)
     • operator count (+ - × ÷ ^ = < >)          (more operations → more steps)
     • stem length in words                      (longer setup → more reading)
   These are normalized and summed into a score; we compare the mean score at
   tier 1 vs tier 3 per skill and classify:
     scales   — tier 3 clearly harder than tier 1 (good)
     flat     — little difference across tiers (tier is a weak signal)
     inverted — tier 1 looks harder than tier 3 (mislabeled)
   This is a heuristic, not a truth oracle; treat it as a calibration signal.
   Run: node scripts/audit_difficulty.mjs */
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
  'js/data/worlds.js', 'js/data/tips.js', 'js/data/lessons.js', 'js/data/mathgen.js', 'js/data/gridgen.js',
  'js/data/mathviz.js', 'js/data/mathgen2.js', 'js/data/mathgen3.js', 'js/data/mathgen4.js', 'js/data/mathgen5.js', 'js/data/mathgen6.js', 'js/data/mathgen7.js', 'js/data/mathgen8.js', 'js/data/mathgen9.js', 'js/data/mathgen10.js', 'js/data/mathgen_flatten.js',
]) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
const run = c => vm.runInContext(c, ctx);

const SAMPLES = 500;
const complexity = (text) => {
  const t = String(text || '');
  const nums = (t.match(/-?\d+(\.\d+)?/g) || []).map(Number);
  const distinct = new Set(nums.map(n => Math.abs(n))).size;
  const maxMag = nums.length ? Math.max(...nums.map(n => Math.abs(n))) : 0;
  const neg = /(^|[\s(])-\d/.test(t) ? 1 : 0;
  const frac = /\d\/\d|\d\.\d/.test(t) ? 1 : 0;
  const ops = (t.match(/[+×÷^=<>]|(?<=\d)\s*-\s*(?=\d)/g) || []).length;
  const words = t.trim().split(/\s+/).length;
  // Normalized, bounded contributions so no single factor dominates.
  return distinct * 1.0 + Math.min(maxMag / 25, 6) + neg + frac + Math.min(ops, 8) * 0.6 + Math.min(words / 20, 6);
};

const skills = run('Object.keys(MATH_GENERATORS)');
const rows = [];
for (const skill of skills) {
  const meanAt = (tier) => {
    let sum = 0, n = 0;
    for (let i = 0; i < SAMPLES; i++) {
      const q = run(`(function(){ try { return MATH_GENERATORS[${JSON.stringify(skill)}](${tier}); } catch(e){ return null; } })()`);
      if (q && q.text) { sum += complexity(q.text); n++; }
    }
    return n ? sum / n : 0;
  };
  const t1 = meanAt(1), t2 = meanAt(2), t3 = meanAt(3);
  const delta = t3 - t1;
  const rel = t1 ? delta / t1 : 0;
  let verdict;
  if (rel >= 0.15) verdict = 'scales';
  else if (rel <= -0.08) verdict = 'inverted';
  else verdict = 'flat';
  rows.push({ skill, t1, t2, t3, delta, rel, verdict });
}

rows.sort((a, b) => a.rel - b.rel);
console.log('=== MATH DIFFICULTY CALIBRATION (complexity proxy) ===');
console.log('skill'.padEnd(16), 't1'.padStart(6), 't2'.padStart(6), 't3'.padStart(6), 'Δ(t3-t1)'.padStart(9), 'rel'.padStart(7), '  verdict');
for (const r of rows) {
  console.log(
    r.skill.padEnd(16),
    r.t1.toFixed(2).padStart(6), r.t2.toFixed(2).padStart(6), r.t3.toFixed(2).padStart(6),
    r.delta.toFixed(2).padStart(9), (r.rel * 100).toFixed(0).padStart(6) + '%',
    '  ' + (r.verdict === 'scales' ? '✅ scales' : r.verdict === 'flat' ? '⚠️  flat' : '❌ inverted'));
}
const counts = rows.reduce((m, r) => { m[r.verdict] = (m[r.verdict] || 0) + 1; return m; }, {});
console.log(`\nSummary: ${counts.scales || 0} scale, ${counts.flat || 0} flat, ${counts.inverted || 0} inverted, of ${rows.length} skills.`);
console.log('Note: heuristic proxy. "flat" skills are where the Easy/Medium/Hard label is a weak signal —');
console.log('the app compensates with adaptiveTier() (drills center difficulty on demonstrated accuracy).');
// Informational only — never fails CI (difficulty is a soft signal, not a correctness bug).
process.exit(0);
