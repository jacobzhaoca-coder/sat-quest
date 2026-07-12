/* SAT Quest — regression tests for the learning layer added in the teaching pass:
   mistake-type classification, concept mini-lessons, per-skill trend, and the
   targeted skill drill builder. Run: node scripts/test_learning.mjs
   Loads the real data + state + quiz logic in a VM with a localStorage shim. */
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const store = new Map();
const localStorage = { getItem: (k) => (store.has(k) ? store.get(k) : null), setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) };
const ctx = { console, Math, Date, JSON, Object, Array, String, Number, isNaN, isFinite, parseInt, parseFloat, localStorage, window: undefined };
vm.createContext(ctx);
for (const f of [
  'js/data/worlds.js', 'js/data/tips.js', 'js/data/lessons.js', 'js/data/mathgen.js', 'js/data/gridgen.js',
  'js/data/mathviz.js', 'js/data/mathgen2.js', 'js/data/mathgen3.js', 'js/data/mathgen4.js', 'js/data/mathgen5.js', 'js/data/mathgen6.js', 'js/data/mathgen7.js', 'js/data/mathgen8.js', 'js/data/mathgen9.js', 'js/data/mathgen10.js', 'js/data/mathgen_flatten.js',
  'js/data/rw/information-ideas.js', 'js/data/rw/craft-structure.js', 'js/data/rw/expression-ideas.js',
  'js/data/rw/conventions.js', 'js/data/rw/index.js', 'js/data/rwgen.js', 'js/data/rwgen2.js', 'js/data/rwgen3.js', 'js/data/rwgen4.js', 'js/data/rwgen5.js',
  'js/state.js', 'js/upgrades.js', 'js/quiz.js', 'js/exam.js',
]) {
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
}
const run = (code) => vm.runInContext(code, ctx);
run('loadState();');

let pass = 0, fail = 0;
const check = (label, ok, detail = '') => { if (ok) { pass++; console.log(`  ✅ ${label}`); } else { fail++; console.log(`  ❌ ${label}${detail ? ' — ' + detail : ''}`); } };

console.log('=== MINI-LESSON COVERAGE ===');
const missing = run(`Object.keys(SKILLS).filter(s => { const l = miniLesson(s); return !l || !l.concept || !l.when || !l.trap || !l.strategy; })`);
check('every skill has a complete mini-lesson (concept/when/trap/strategy)', missing.length === 0, missing.join(', '));

console.log('\n=== MISTAKE CLASSIFICATION ===');
// Classify a real generated math wrong answer + a real R&W wrong answer.
const mathResult = run(`(function(){
  const q = generateMathQuestion('percentages', 2);
  const wrongLetter = q.choices.find(c => c.letter !== q.answer).letter;
  const d = classifyMistake(q, wrongLetter);
  return { ok: !!(d && d.type && MISTAKE_TYPES[d.type] && d.label && d.advice && d.note), type: d && d.type };
})()`);
check('math wrong answer → a valid, defined mistake type', mathResult.ok, 'type=' + mathResult.type);

const rwResult = run(`(function(){
  let q = null;
  for (let i=0;i<50 && !q;i++){ const c = RW_GENERATORS['transitions'](); if (c.choices && c.whyWrong) q = c; }
  if(!q) return { ok:false };
  const wrongLetter = Object.keys(q.whyWrong)[0] || q.choices.find(c=>c.letter!==q.answer).letter;
  const d = classifyMistake(q, wrongLetter);
  return { ok: !!(d && d.type && MISTAKE_TYPES[d.type]), type: d && d.type };
})()`);
check('R&W wrong answer → a valid, defined mistake type', rwResult.ok, 'type=' + rwResult.type);

// Every mistake type a classifier can emit must exist in MISTAKE_TYPES (broad sweep).
const emitOk = run(`(function(){
  const skills = Object.keys(SKILLS); const bad = new Set();
  for (const s of skills) {
    const section = SKILLS[s].section;
    for (let i=0;i<40;i++){
      let q; try { q = section==='math' ? (Math.random()<0.5?generateMathQuestion(s,1+i%3):(hasGrid(s)?generateGridQuestion(s,1+i%3):generateMathQuestion(s,1+i%3))) : RW_GENERATORS[s](); } catch(e){ continue; }
      if(!q) continue;
      const chosen = (q.type==='grid') ? '0' : (q.choices? q.choices.find(c=>c.letter!==q.answer).letter : 'A');
      const d = classifyMistake(q, chosen);
      if(!d || !MISTAKE_TYPES[d.type]) bad.add(s+':'+(d&&d.type));
    }
  }
  return [...bad];
})()`);
check('classifier never emits an undefined mistake type (all skills, mixed)', emitOk.length === 0, emitOk.slice(0,8).join(', '));

// Grid blank/timeout is treated as a formatting/careless issue, not a concept slip.
const gridBlank = run(`(function(){ const g = generateGridQuestion('percentages',2); const d = classifyMistake(g, ''); return d && d.type === 'careless'; })()`);
check('empty grid-in answer classified as careless/format', gridBlank);

console.log('\n=== SKILL TREND ===');
const trend = run(`(function(){
  // simulate: skill starts weak then improves → trend 'up'
  for (let i=0;i<6;i++) recordAnswer('linear-eq', false, 1000, 'Medium');
  for (let i=0;i<6;i++) recordAnswer('linear-eq', true, 1000, 'Medium');
  const up = skillTrend('linear-eq');
  return { up };
})()`);
check('skillTrend detects an improving skill as "up"', trend.up === 'up', 'got ' + trend.up);
check('skillTrend returns null with too little data', run(`skillTrend('trig') === null`));

console.log('\n=== TARGETED DRILL BUILDER ===');
for (const s of ['percentages', 'transitions', 'quadratics', 'circles', 'inferences']) {
  const r = run(`(function(){
    const qs = buildDrillQuiz('${s}', 6);
    const okLen = qs.length === 6;
    const allSkill = qs.every(q => q.skill === '${s}');
    const wellFormed = qs.every(q => q.text && (q.type==='grid' ? q.answer!=null : (q.choices && q.choices.length===4 && q.answer)));
    const uniqueTexts = new Set(qs.map(q=>q.text)).size;
    return { okLen, allSkill, wellFormed, uniqueTexts };
  })()`);
  check(`drill '${s}': 6 well-formed questions on the right skill`, r.okLen && r.allSkill && r.wellFormed, JSON.stringify(r));
}

console.log('\n=== MISTAKE-TYPE AGGREGATION ===');
const agg = run(`(function(){
  STATE.mistakes = [];
  const q = generateMathQuestion('percentages', 2);
  const wrong = q.choices.find(c=>c.letter!==q.answer).letter;
  const d = classifyMistake(q, wrong);
  STATE.mistakes.unshift({ id:'x1', skill:'percentages', mtype: d.type, mtypeLabel: d.label });
  STATE.mistakes.unshift({ id:'x2', skill:'percentages', mtype: d.type, mtypeLabel: d.label });
  const counts = mistakeTypeCounts('percentages');
  const top = topMistakeType('percentages');
  return { count: counts[d.type], topType: top && top.type, topCount: top && top.count };
})()`);
check('mistakeTypeCounts + topMistakeType aggregate correctly', agg.count === 2 && agg.topCount === 2, JSON.stringify(agg));

console.log(`\n${fail === 0 ? '✅' : '❌'} LEARNING TESTS — ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
