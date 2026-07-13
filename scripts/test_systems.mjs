/* SAT Quest — regression tests for the v3 systems: runthrough anti-repeat,
   per-question history & mastery, spaced-review selection, and flagging.
   Run:  node scripts/test_systems.mjs

   Loads the real data + state + quiz logic in a VM with a localStorage shim,
   then drives the actual game functions and asserts the invariants the user
   asked for (no exact repeats within a runthrough, history/mastery transitions,
   Review Dungeon uses due/missed items, flags stored + exported). */
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

// Minimal localStorage shim.
const store = new Map();
const localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k),
};

const ctx = { console, Math, Date, JSON, Object, Array, String, Number, isNaN, parseInt, parseFloat, localStorage, window: undefined };
vm.createContext(ctx);
for (const f of [
  'js/data/worlds.js', 'js/data/tips.js', 'js/data/mathgen.js', 'js/data/gridgen.js',
  'js/data/mathviz.js', 'js/data/mathgen2.js', 'js/data/mathgen3.js', 'js/data/mathgen4.js', 'js/data/mathgen5.js', 'js/data/mathgen6.js', 'js/data/mathgen7.js', 'js/data/mathgen8.js', 'js/data/mathgen9.js', 'js/data/mathgen_flatten.js',
  'js/data/rw/information-ideas.js', 'js/data/rw/craft-structure.js', 'js/data/rw/expression-ideas.js',
  'js/data/rw/conventions.js', 'js/data/rw/index.js', 'js/data/rwgen.js', 'js/data/rwgen2.js', 'js/data/rwgen3.js', 'js/data/rwgen4.js',
  'js/state.js', 'js/upgrades.js', 'js/quiz.js', 'js/exam.js',
]) {
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
}
const run = (code) => vm.runInContext(code, ctx);

let pass = 0, fail = 0;
const check = (label, ok, detail = '') => {
  if (ok) { pass++; console.log(`  ✅ ${label}`); }
  else { fail++; console.log(`  ❌ ${label}${detail ? ' — ' + detail : ''}`); }
};

run('loadState()');

console.log('1) Runthrough tracking exists and can be reset without wiping progress');
check('loadState creates a runthrough', run('!!(STATE.runthrough && STATE.runthrough.id)'));
run('STATE.xp = 1234; STATE.playerLevel = 3; noteSeenInRunthrough([{id:"seed-x"}]); saveState();');
run('startNewRunthrough(false)');
check('new runthrough clears seen ids', run('STATE.runthrough.seenIds.length === 0 && STATE.runthrough.seenSigs.length === 0'));
check('new runthrough keeps XP and level (no full reset)', run('STATE.xp === 1234 && STATE.playerLevel === 3'));

console.log('\n2) No exact repeats within a runthrough (R&W level replayed)');
// Pick a real R&W level and replay it several times; every served authored id /
// generated variantId should be unique until the pool is genuinely exhausted.
const rwRepeat = run(`(function(){
  startNewRunthrough(false);
  const lv = allLevels().find(l => l.section !== 'math');
  const keys = [];
  for (let r = 0; r < 5; r++) for (const q of buildLevelQuiz(lv.id)) keys.push(q.id || q.variantId);
  const distinct = new Set(keys);
  return { total: keys.length, distinct: distinct.size, level: lv.id };
})()`);
check(`R&W level replay served ${rwRepeat.total} items with no exact repeat (${rwRepeat.distinct} distinct)`,
  rwRepeat.total === rwRepeat.distinct, `${rwRepeat.total - rwRepeat.distinct} repeats`);

console.log('\n3) No exact repeats within a runthrough (Math level replayed)');
const mathRepeat = run(`(function(){
  startNewRunthrough(false);
  const lv = allLevels().find(l => l.section === 'math');
  const sigs = [];
  for (let r = 0; r < 8; r++) for (const q of buildLevelQuiz(lv.id)) sigs.push(q.variantId || q.sig || q.text);
  const distinct = new Set(sigs);
  return { total: sigs.length, distinct: distinct.size };
})()`);
check(`Math level replay served ${mathRepeat.total} generated items with no repeated signature (${mathRepeat.distinct} distinct)`,
  mathRepeat.total === mathRepeat.distinct, `${mathRepeat.total - mathRepeat.distinct} repeats`);

console.log('\n4) A full campaign pass avoids exact repeats across mixed content');
const campaign = run(`(function(){
  startNewRunthrough(false);
  const keys = [];
  for (const lv of allLevels()) for (const q of buildLevelQuiz(lv.id)) keys.push(q.id || q.variantId);
  for (const b of allBosses()) for (const q of buildBossQuiz(b.id)) keys.push(q.id || q.variantId);
  const distinct = new Set(keys);
  return { total: keys.length, distinct: distinct.size, seenR: STATE.runthrough.seenIds.length, seenS: STATE.runthrough.seenSigs.length };
})()`);
check(`campaign served ${campaign.total} questions with ${campaign.total - campaign.distinct} exact repeats (target 0)`,
  campaign.total === campaign.distinct, `${campaign.total - campaign.distinct} repeats`);
check('runthrough recorded seen ids and signatures', campaign.seenR > 0 && campaign.seenS > 0);

console.log('\n5) Per-question history updates on correct and wrong answers');
const hist = run(`(function(){
  const q = { id: 'hist-test-1', skill: 'transitions' };
  recordQuestionHistory(q, true);
  recordQuestionHistory(q, false);
  const h = STATE.qhistory['hist-test-1'];
  return { s: h.s, c: h.c, w: h.w, lr: h.lr, str: h.str };
})()`);
check('history counts seen/correct/wrong', hist.s === 2 && hist.c === 1 && hist.w === 1);
check('last-result and streak reset on a wrong answer', hist.lr === 0 && hist.str === 0);

console.log('\n6) Mastery states are all reachable');
const mastery = run(`(function(){
  const now = Date.now(), DAY = 86400000;
  STATE.qhistory = {
    'm-unseen': undefined,
    'm-mastered': { s:5,c:5,w:0,last:now,lr:1,str:5 },
    'm-missed':   { s:3,c:1,w:2,last:now,lr:0,str:0 },
    'm-due':      { s:4,c:3,w:1,last: now - 10*DAY, lr:1, str:1 },
    'm-improving':{ s:4,c:2,w:2,last:now,lr:1,str:1 },
    'm-seen':     { s:1,c:1,w:0,last:now,lr:1,str:1 },
  };
  return {
    mastered: masteryOf('m-mastered'), missed: masteryOf('m-missed'),
    due: masteryOf('m-due'), improving: masteryOf('m-improving'),
    seen: masteryOf('m-seen'), unseen: masteryOf('m-never-touched'),
  };
})()`);
check('mastered detected', mastery.mastered === 'mastered', mastery.mastered);
check('missed detected (last attempt wrong)', mastery.missed === 'missed', mastery.missed);
check('due-for-review detected (spaced interval elapsed)', mastery.due === 'due-for-review', mastery.due);
check('improving detected', mastery.improving === 'improving', mastery.improving);
check('seen detected', mastery.seen === 'seen', mastery.seen);
check('unseen detected', mastery.unseen === 'unseen', mastery.unseen);

console.log('\n7) dueReviewQuestions ranks exact misses first and the Review Dungeon uses them');
const due = run(`(function(){
  // Seed a specific missed authored R&W item by real id.
  const item = RW_BANK[0];
  STATE.qhistory = {};
  recordQuestionHistory({ id: item.id, skill: item.skill }, false); // exact miss
  const rows = dueReviewQuestions(20);
  const top = rows[0];
  const quiz = buildReviewQuiz([], 6);
  const served = quiz.map(q => q.id);
  const withReason = quiz.filter(q => q.reviewReason).length;
  return {
    dueCount: rows.length, topIsAuthoredMiss: top && top.isAuthored && top.priority === 2,
    reservedItemServed: served.includes(item.id),
    everyQuestionHasReason: withReason === quiz.length, quizLen: quiz.length,
    reasonSample: quiz.map(q => q.reviewReason)[0] || '',
  };
})()`);
check('a missed item becomes due for review', due.dueCount >= 1);
check('exact misses rank above spaced re-checks', due.topIsAuthoredMiss);
check('Review Dungeon re-serves the exact missed R&W item', due.reservedItemServed);
check('every Review Dungeon question carries a reviewReason label', due.everyQuestionHasReason, `sample: "${due.reasonSample}"`);

console.log('\n8) Correct answers reduce review priority; repeated misses keep it');
const priority = run(`(function(){
  const DAY = 86400000, now = Date.now();
  // item answered right twice after a miss, seen recently → NOT currently due
  const recovered = { s:4, c:3, w:1, last: now, lr:1, str:2 };
  // item missed and never recovered → due
  const stillMissed = { s:2, c:0, w:2, last: now, lr:0, str:0 };
  return { recoveredDue: reviewDue(recovered, now), missedDue: reviewDue(stillMissed, now) };
})()`);
check('a recently re-mastered item is not currently due', priority.recoveredDue === false);
check('a still-missed item stays due', priority.missedDue === true);

console.log('\n9) Flagging stores locally and appears in the backup export');
const flags = run(`(function(){
  STATE.flags = [];
  const q = { id: 'flag-test-1', skill: 'boundaries', text: 'A sample sentence for flagging.', type: 'mc' };
  flagQuestion(q, 'Answer seems wrong', 'the key looks off');
  flagQuestion(q, 'Answer seems wrong', 'the key looks off'); // same key+reason → de-duped, not doubled
  const list = flaggedQuestions();
  const exported = JSON.parse(exportSave());
  return {
    count: list.length, isFlagged: isFlagged(q),
    reason: list[0].reason, note: list[0].note, skill: list[0].skill,
    exportHasFlags: Array.isArray(exported.flags) && exported.flags.length === 1,
    exportHasHistory: !!exported.qhistory, exportHasRunthrough: !!exported.runthrough,
  };
})()`);
check('flag stored (and duplicate reason de-duped)', flags.count === 1, `count=${flags.count}`);
check('isFlagged reflects the flag', flags.isFlagged);
check('flag captures reason, note, and skill', flags.reason === 'Answer seems wrong' && flags.note === 'the key looks off' && flags.skill === 'boundaries');
check('backup export includes flags, history, and runthrough', flags.exportHasFlags && flags.exportHasHistory && flags.exportHasRunthrough);

console.log('\n10) No server calls: state module references no network APIs');
const stateSrc = fs.readFileSync(path.join(root, 'js/state.js'), 'utf8');
check('state.js makes no fetch/XHR/WebSocket calls', !/\bfetch\s*\(|XMLHttpRequest|WebSocket|navigator\.sendBeacon/.test(stateSrc));

console.log('\n11) Long runthrough simulation (≈ weeks of daily use) avoids exact repeats');
// Simulate a long daily-use campaign: replay levels, bosses, tower floors, and a
// Simulation Gate, all within ONE runthrough, and confirm no exact question id /
// signature repeats until a relevant pool is genuinely exhausted.
const longRun = run(`(function(){
  startNewRunthrough(false);
  const keys = [];
  const rwLevels = allLevels().filter(l => l.section !== 'math').map(l => l.id);
  const mathLevels = allLevels().filter(l => l.section === 'math').map(l => l.id);
  // ~three weeks at ~40 questions/day: replay a rotating set of levels many times
  for (let day = 0; day < 21; day++) {
    for (let k = 0; k < 4; k++) {
      const rw = rwLevels[(day * 4 + k) % rwLevels.length];
      const ma = mathLevels[(day * 4 + k) % mathLevels.length];
      for (const q of buildLevelQuiz(rw)) keys.push(q.id || q.variantId);
      for (const q of buildLevelQuiz(ma)) keys.push(q.variantId || q.sig);
    }
    for (let f = 1; f <= 5; f++) { const q = buildTowerQuestion(f); keys.push(q.id || q.variantId || q.sig); }
  }
  // Two bosses and one Simulation Gate R&W module for good measure.
  for (const b of allBosses().slice(0, 2)) for (const q of buildBossQuiz(b.id)) keys.push(q.id || q.variantId);
  const rwMod = buildExamModule('rw1', false); for (const q of rwMod) keys.push(q.id || q.variantId);
  const distinct = new Set(keys);
  // Break down by source.
  const rwIds = keys.filter(k => typeof k === 'string' && !/#/.test(k) && !/^rwgen/.test(k));
  const genSigs = keys.filter(k => typeof k === 'string' && /#/.test(k));
  return { total: keys.length, distinct: distinct.size, repeats: keys.length - distinct.size,
    rwIds: rwIds.length, distinctRwIds: new Set(rwIds).size, genSigs: genSigs.length, distinctGenSigs: new Set(genSigs).size,
    seenR: STATE.runthrough.seenIds.length, seenS: STATE.runthrough.seenSigs.length };
})()`);
console.log(`   served ${longRun.total} questions (${longRun.rwIds} authored R&W ids, ${longRun.genSigs} generated signatures)`);
check(`long runthrough served ${longRun.total} questions with ${longRun.repeats} exact repeats (target 0)`,
  longRun.repeats === 0, `${longRun.repeats} repeats`);
check('runthrough seen-tracking scaled with the long session', longRun.seenR > 100 && longRun.seenS > 100,
  `seenR=${longRun.seenR}, seenS=${longRun.seenS}`);

console.log('\n12) Review Dungeon repeats are intentional (due/missed), not accidental');
const reviewIntent = run(`(function(){
  STATE.qhistory = {};
  // Seed three specific missed authored R&W items.
  const missed = RW_BANK.slice(0, 3).map(it => it.id);
  for (const it of RW_BANK.slice(0, 3)) recordQuestionHistory({ id: it.id, skill: it.skill }, false);
  startNewRunthrough(false);
  const quiz = buildReviewQuiz([], 6);
  const servedMissed = quiz.filter(q => missed.includes(q.id));
  return {
    reservedMissedCount: servedMissed.length,
    allLabeled: quiz.every(q => q.reviewReason),
    missedLabeled: servedMissed.every(q => /missed/i.test(q.reviewReason)),
  };
})()`);
check('Review Dungeon re-serves seeded missed items (intentional repeat)', reviewIntent.reservedMissedCount >= 1);
check('every review item is labeled with a reason, and missed items say so', reviewIntent.allLabeled && reviewIntent.missedLabeled);

console.log(`\n${fail === 0 ? '✅ ALL SYSTEMS CHECKS PASSED' : '❌ ' + fail + ' CHECK(S) FAILED'} (${pass} passed)`);
process.exit(fail === 0 ? 0 : 1);
