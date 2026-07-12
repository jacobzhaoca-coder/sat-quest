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
const missingNew = run(`Object.keys(SKILLS).filter(s => { const l = miniLesson(s); return !l || !l.recognize || !l.example; })`);
check('every mini-lesson has the new recognize + example fields (all 30)', missingNew.length === 0, missingNew.join(', '));

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

console.log('\n=== DIAGNOSIS CONFIDENCE & FALLBACK ===');
const conf = run(`(function(){
  const q = generateMathQuestion('percentages', 2);
  const wrong = q.choices.find(c=>c.letter!==q.answer).letter;
  const d = classifyMistake(q, wrong);
  return { hasLead: !!d.lead, hasConf: ['high','medium','low'].includes(d.confidence) };
})()`);
check('classifyMistake returns a softened lead and a confidence level', conf.hasLead && conf.hasConf, JSON.stringify(conf));
// Unmapped/unknown skill with no reason → strategy-mismatch low-confidence fallback.
const fallback = run(`(function(){
  const d = classifyMistake({ skill: '__nonexistent__', type: 'mc', choices: [{letter:'A'}], answer: 'B' }, 'A');
  return d && d.type === 'strategy-mismatch' && d.confidence === 'low';
})()`);
check('unknown/unmatched question → strategy-mismatch fallback (never overclaims)', fallback);
// Grid blank keeps its softened medium confidence.
const gridConf = run(`(function(){ const g = generateGridQuestion('percentages',2); const d = classifyMistake(g, ''); return d.type==='careless' && !!d.lead; })()`);
check('grid blank fallback carries a lead phrase', gridConf);

console.log('\n=== ADAPTIVE DIFFICULTY ===');
const adapt = run(`(function(){
  STATE.skillStats = {};
  // strong skill → high base tier
  for (let i=0;i<10;i++) recordAnswer('trig', true, 900, 'Hard');
  const strong = adaptiveTier('trig');
  // weak skill → low base tier
  for (let i=0;i<10;i++) recordAnswer('circles', false, 900, 'Easy');
  const weak = adaptiveTier('circles');
  const unknown = adaptiveTier('sampling'); // never practiced → medium
  return { strong, weak, unknown };
})()`);
check('adaptiveTier: strong skill → tier 3', adapt.strong === 3, 'got ' + adapt.strong);
check('adaptiveTier: weak skill → tier 1', adapt.weak === 1, 'got ' + adapt.weak);
check('adaptiveTier: unpracticed skill → tier 2 (medium)', adapt.unknown === 2, 'got ' + adapt.unknown);

// Drill difficulty adapts: a weak skill's drill should average an easier tier
// than a challenge drill on the same skill.
const drillAdapt = run(`(function(){
  const tierOf = q => ({Easy:1,Medium:2,Hard:3})[q.difficulty] || 2;
  const avg = a => a.reduce((x,y)=>x+y,0)/a.length;
  STATE.skillStats = {}; for (let i=0;i<10;i++) recordAnswer('percentages', false, 900, 'Easy');
  const weakDrill = buildDrillQuiz('percentages', 6).map(tierOf);
  const challenge = buildDrillQuiz('percentages', 6, { mode: 'challenge' }).map(tierOf);
  const focused = buildDrillQuiz('percentages', 6, { mode: 'focused' });
  const ramp = weakDrill.every((t,i,a)=> i===0 || t>=a[i-1]); // ascending ramp
  return { weakAvg: avg(weakDrill), chalAvg: avg(challenge), focusedLen: focused.length, ramp };
})()`);
check('weak-skill drill is easier on average than a challenge drill', drillAdapt.weakAvg < drillAdapt.chalAvg, JSON.stringify(drillAdapt));
check('drill questions are ordered as an easy→hard ramp', drillAdapt.ramp);
check('focused drill mode yields 10 questions', drillAdapt.focusedLen === 10, 'got ' + drillAdapt.focusedLen);

console.log('\n=== REVIEW DUNGEON PRIORITY ===');
const review = run(`(function(){
  STATE.qhistory = {}; STATE.skillStats = {}; STATE.flags = [];
  // an authored R&W item missed → should be top priority in dueReviewQuestions
  const rw = RW_GENERATORS['transitions'](); rw.id = rw.id || 'rev-test-1';
  recordQuestionHistory(rw, false);
  const due = dueReviewQuestions(20);
  const firstIsMiss = due.length && due[0].priority === 2;
  // review quiz tags every question with a reason
  const qz = buildReviewQuiz(['transitions','percentages'], 6);
  const allTagged = qz.every(q => q.reviewReason && q.reviewTag);
  return { firstIsMiss, allTagged, n: qz.length };
})()`);
check('dueReviewQuestions ranks an exact miss at top priority', review.firstIsMiss);
check('every Review Dungeon question carries a reason + tag', review.allTagged && review.n === 6, JSON.stringify(review));

console.log('\n=== DAILY STUDY PATH ===');
const studyPath = run(`(function(){
  // fresh player → starter plan (level tasks, not a drill)
  resetSave();
  const starter = dailyStudyPath();
  const starterHasLevels = starter.some(t => t.kind === 'level');
  const starterNoDrill = !starter.some(t => t.kind === 'drill');
  // experienced player with a weak skill → path includes a targeted drill
  for (let i=0;i<8;i++) recordAnswer('percentages', false, 900, 'Medium');
  for (let i=0;i<8;i++) recordAnswer('linear-eq', true, 900, 'Medium');
  STATE.stats.totalAnswered = 40;
  const exp = dailyStudyPath();
  const expHasDrill = exp.some(t => t.kind === 'drill');
  return { starterHasLevels, starterNoDrill, expHasDrill, starterLen: starter.length, expLen: exp.length };
})()`);
check('new player gets a starter plan (levels, no drill yet)', studyPath.starterHasLevels && studyPath.starterNoDrill, JSON.stringify(studyPath));
check('experienced player gets a targeted drill task', studyPath.expHasDrill);
check('study path is capped at 4 tasks', studyPath.starterLen <= 4 && studyPath.expLen <= 4);

console.log('\n=== TIER-AWARE SELECTION (difficulty scales) ===');
const scales = run(`(function(){
  const cx = t => { const nums=(t.match(/-?\\d+(\\.\\d+)?/g)||[]).map(Number); return new Set(nums.map(n=>Math.abs(n))).size + t.trim().split(/\\s+/).length/20; };
  const mean = (skill,tier) => { let s=0; for(let i=0;i<300;i++){ const q=generateMathQuestion(skill,tier); s+=cx(q.text);} return s/300; };
  let harder = 0, total = 0;
  for (const sk of ['linear-eq','circles','statistics','exponentials']) { total++; if (mean(sk,3) > mean(sk,1)) harder++; }
  return { harder, total };
})()`);
check('tier 3 generates harder questions than tier 1 (sampled skills)', scales.harder === scales.total, JSON.stringify(scales));

console.log('\n=== EXPORT / IMPORT PRESERVES LEARNING DATA ===');
const roundtrip = run(`(function(){
  resetSave();
  recordAnswer('percentages', false, 900, 'Medium');
  STATE.mistakes.unshift({ id:'mm1', skill:'percentages', mtype:'percent-change', mtypeLabel:'Percent error' });
  const rw = RW_GENERATORS['transitions'](); rw.id='rt-keep-1'; recordQuestionHistory(rw, false);
  const json = exportSave();
  resetSave();
  importSave(json);
  const hasMistake = STATE.mistakes.some(m => m.id==='mm1' && m.mtype==='percent-change');
  const hasHistory = !!STATE.qhistory['rt-keep-1'];
  const hasRecent = Array.isArray((STATE.skillStats['percentages']||{}).recent);
  return { hasMistake, hasHistory, hasRecent };
})()`);
check('export→import preserves mistakes (with mistake type)', roundtrip.hasMistake, JSON.stringify(roundtrip));
check('export→import preserves question history (spaced review)', roundtrip.hasHistory);
check('export→import preserves per-skill recent window (trend)', roundtrip.hasRecent);

console.log(`\n${fail === 0 ? '✅' : '❌'} LEARNING TESTS — ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
