/* SAT Quest — persistent player state (localStorage) + game/study logic (v2). */

const STORAGE_KEY = 'sat-quest-save-v2';
const XP_PER_LEVEL = 500;
const DAY_MS = 86400000;

const DEFAULT_STATE = () => ({
  version: 2,
  createdAt: Date.now(),
  profile: {
    name: '', heroClass: 'sage', onboarded: false,
    goalScore: null, goalDate: null,
  },
  xp: 0,
  playerLevel: 1,
  skillPoints: 0,          // spendable in the Upgrade Hub
  spEarnedTotal: 0,
  upgrades: { explanation: 0, hint: 0, time: 0, analytics: 0, mastery: {} },
  examSession: null,       // in-progress full practice test / final exam
  examStats: { taken: 0, bestTotal: 0, history: [] },
  levelsCompleted: {},     // levelId -> { best, stars, xpEarned, lastPlayed }
  bossesDefeated: {},      // bossId -> true
  skillStats: {},          // skillId -> { correct, seen, timeMs, lastPracticed }
  mistakes: [],            // { id, question, chosen, correct, skill, category, reflected, when }
  streak: { count: 0, lastActiveDay: null, best: 0 },
  badges: {},              // badgeId -> earnedTimestamp
  daily: { day: null, quests: [] },
  dailyLog: {},            // 'YYYY-MM-DD' -> { answered, correct, xp, timeMs }
  tower: { bestFloor: 0, lastPlayedDay: null, todayFloor: 0 },
  settings: { sound: true, reducedMotion: false, mode: 'game' }, // mode: 'game' | 'study'
  stats: { totalAnswered: 0, totalCorrect: 0, totalTimeMs: 0 },
});

let STATE = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    STATE = raw ? Object.assign(DEFAULT_STATE(), JSON.parse(raw)) : DEFAULT_STATE();
    const d = DEFAULT_STATE();
    for (const k of ['profile', 'streak', 'daily', 'settings', 'stats', 'tower', 'upgrades', 'examStats']) {
      STATE[k] = Object.assign(d[k], STATE[k] || {});
    }
    if (!STATE.upgrades.mastery) STATE.upgrades.mastery = {};
    if (typeof STATE.skillPoints !== 'number') STATE.skillPoints = 0;
    if (!STATE.dailyLog) STATE.dailyLog = {};
  } catch (e) {
    console.warn('Save was corrupted; starting fresh.', e);
    STATE = DEFAULT_STATE();
  }
  refreshDaily();
  return STATE;
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE)); }
  catch (e) { console.warn('Could not save progress.', e); }
}

function todayKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/* ---- XP & player level ---- */
function xpForCurrentLevel() { return (STATE.playerLevel - 1) * XP_PER_LEVEL; }
function xpIntoLevel() { return STATE.xp - xpForCurrentLevel(); }
function xpToNextLevel() { return XP_PER_LEVEL; }

function addXP(amount) {
  STATE.xp += amount;
  logToday({ xp: amount });
  const leveledUp = [];
  while (STATE.xp >= STATE.playerLevel * XP_PER_LEVEL) {
    STATE.playerLevel += 1;
    leveledUp.push(STATE.playerLevel);
  }
  return leveledUp;
}

function rankName() {
  const idx = Math.min(RANKS.length - 1, Math.floor((STATE.playerLevel - 1) / 2));
  return RANKS[idx];
}

/* ---- Daily activity log (for weekly summary) ---- */
function logToday(delta) {
  const k = todayKey();
  const e = STATE.dailyLog[k] || { answered: 0, correct: 0, xp: 0, timeMs: 0 };
  e.answered += delta.answered || 0;
  e.correct += delta.correct || 0;
  e.xp += delta.xp || 0;
  e.timeMs += delta.timeMs || 0;
  STATE.dailyLog[k] = e;
  // prune logs older than 60 days
  const cutoff = todayKey(new Date(Date.now() - 60 * DAY_MS));
  for (const key of Object.keys(STATE.dailyLog)) if (key < cutoff) delete STATE.dailyLog[key];
}

function weeklySummary() {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const k = todayKey(new Date(Date.now() - i * DAY_MS));
    days.push({ key: k, ...(STATE.dailyLog[k] || { answered: 0, correct: 0, xp: 0, timeMs: 0 }) });
  }
  const total = days.reduce((a, d) => ({
    answered: a.answered + d.answered, correct: a.correct + d.correct,
    xp: a.xp + d.xp, timeMs: a.timeMs + d.timeMs,
    activeDays: a.activeDays + (d.answered > 0 ? 1 : 0),
  }), { answered: 0, correct: 0, xp: 0, timeMs: 0, activeDays: 0 });
  return { days, total, accuracy: total.answered ? total.correct / total.answered : 0,
    avgTimeSec: total.answered ? total.timeMs / total.answered / 1000 : 0 };
}

/* ---- Skill tracking, weakness & spaced review ---- */
function recordAnswer(skillId, correct, timeMs = 0) {
  const s = STATE.skillStats[skillId] || { correct: 0, seen: 0, timeMs: 0, lastPracticed: 0 };
  s.seen += 1;
  if (correct) s.correct += 1;
  s.timeMs += timeMs;
  s.lastPracticed = Date.now();
  STATE.skillStats[skillId] = s;
  STATE.stats.totalAnswered += 1;
  STATE.stats.totalTimeMs += timeMs;
  if (correct) STATE.stats.totalCorrect += 1;
  logToday({ answered: 1, correct: correct ? 1 : 0, timeMs });
}

function skillAccuracy(skillId) {
  const s = STATE.skillStats[skillId];
  if (!s || s.seen === 0) return null;
  return s.correct / s.seen;
}

function skillAvgTimeSec(skillId) {
  const s = STATE.skillStats[skillId];
  if (!s || s.seen === 0) return null;
  return s.timeMs / s.seen / 1000;
}

function weakestSkills(limit = 3, minSeen = 3) {
  const rated = Object.keys(SKILLS)
    .map(id => ({ id, ...STATE.skillStats[id], acc: skillAccuracy(id) }))
    .filter(x => x.seen >= minSeen && x.acc !== null)
    .sort((a, b) => a.acc - b.acc);
  return rated.slice(0, limit);
}

/* Spaced review: a skill is "due" when enough time has passed since last
   practice, with the interval shorter for weaker skills. Returns due skills
   the player has actually attempted, weakest/most-overdue first. */
function spacedReviewSkills(limit = 6) {
  const now = Date.now();
  const due = [];
  for (const id of Object.keys(SKILLS)) {
    const s = STATE.skillStats[id];
    if (!s || s.seen < 2) continue;
    const acc = s.correct / s.seen;
    // interval in days: strong skills reviewed less often
    const intervalDays = acc >= 0.9 ? 7 : acc >= 0.75 ? 4 : acc >= 0.5 ? 2 : 1;
    const overdueMs = now - (s.lastPracticed || 0) - intervalDays * DAY_MS;
    if (overdueMs > 0) due.push({ id, acc, overdueDays: overdueMs / DAY_MS });
  }
  due.sort((a, b) => (a.acc - b.acc) || (b.overdueDays - a.overdueDays));
  return due.slice(0, limit);
}

function accuracyByDomain() {
  const out = {};
  for (const r of REGIONS) {
    let correct = 0, seen = 0, timeMs = 0;
    for (const sk of r.skills) {
      const s = STATE.skillStats[sk];
      if (s) { correct += s.correct; seen += s.seen; timeMs += s.timeMs; }
    }
    out[r.id] = { name: r.name, icon: r.icon, section: r.section,
      acc: seen ? correct / seen : null, seen, avgTimeSec: seen ? timeMs / seen / 1000 : null };
  }
  return out;
}

/* ---- Mistakes ---- */
const MISTAKE_CATEGORIES = {
  'concept':   { label: 'Concept gap',      icon: '🧩', advice: 'Relearn the underlying rule or method, then do a few targeted practice questions.' },
  'careless':  { label: 'Careless error',   icon: '✋', advice: 'Slow down on the final step and check your work; write out each step even when it feels easy.' },
  'time':      { label: 'Time pressure',    icon: '⏱️', advice: 'Practice pacing. If a question stalls you, make your best elimination guess and move on.' },
  'misread':   { label: 'Misread question', icon: '👓', advice: 'Reread the question stem twice and underline exactly what is being asked before choosing.' },
  'trap':      { label: 'Trap answer',      icon: '🪤', advice: 'Note the tempting wrong choice and why it was designed to attract you; compare the two finalists word by word.' },
};

function recordMistake(entry) {
  STATE.mistakes.unshift({ id: 'm' + Date.now() + Math.floor(Math.random() * 1000), category: null, reflected: false, ...entry, when: Date.now() });
  if (STATE.mistakes.length > 200) STATE.mistakes.length = 200;
}

function reflectMistake(id, category) {
  const m = STATE.mistakes.find(x => x.id === id);
  if (m) { m.category = category; m.reflected = true; saveState(); questProgress('review'); }
}

function mistakeCategoryCounts() {
  const counts = {};
  for (const m of STATE.mistakes) if (m.category) counts[m.category] = (counts[m.category] || 0) + 1;
  return counts;
}

/* ---- Streaks ---- */
function markActiveToday() {
  const today = todayKey();
  const last = STATE.streak.lastActiveDay;
  if (last === today) return;
  const yesterday = todayKey(new Date(Date.now() - DAY_MS));
  if (last === yesterday) STATE.streak.count += 1;
  else STATE.streak.count = 1;
  STATE.streak.lastActiveDay = today;
  STATE.streak.best = Math.max(STATE.streak.best, STATE.streak.count);
  checkStreakBadges();
}

function effectiveStreak() {
  const last = STATE.streak.lastActiveDay;
  if (!last) return 0;
  const today = todayKey();
  const yesterday = todayKey(new Date(Date.now() - DAY_MS));
  if (last === today || last === yesterday) return STATE.streak.count;
  return 0;
}

/* ---- Badges ---- */
const BADGE_DEFS = {
  'first-steps':   { name: 'First Steps',       icon: '👣', desc: 'Complete your first level.' },
  'streak-3':      { name: 'Kindling',          icon: '🔥', desc: 'Reach a 3-day streak.' },
  'streak-7':      { name: 'Bonfire',           icon: '🔥', desc: 'Reach a 7-day streak.' },
  'streak-14':     { name: 'Wildfire',          icon: '🔥', desc: 'Reach a 14-day streak.' },
  'streak-30':     { name: 'Eternal Flame',     icon: '🔥', desc: 'Reach a 30-day streak.' },
  'region-master': { name: 'Region Master',     icon: '🏅', desc: 'Clear all 10 levels in any region.' },
  'boss-rw-ii':    { name: 'Idea Keeper',       icon: '👁️', desc: 'Defeat The Misreader.' },
  'boss-rw-cs':    { name: 'Fog Cutter',        icon: '🌫️', desc: 'Defeat The Vague Shade.' },
  'boss-rw-ei':    { name: 'Idea Weaver',       icon: '🧩', desc: 'Defeat The Disjointed.' },
  'boss-rw-sec':   { name: 'Wraith Bane',       icon: '👻', desc: 'Defeat The Comma-Splice Wraith.' },
  'boss-m-alg':    { name: 'Golem Breaker',     icon: '🗿', desc: 'Defeat The Linear Golem.' },
  'boss-m-adv':    { name: 'Hydra Slayer',      icon: '🐉', desc: 'Defeat The Parabola Hydra.' },
  'boss-m-psda':   { name: 'Djinn Tamer',       icon: '🔮', desc: 'Defeat The Data Djinn.' },
  'boss-m-geo':    { name: 'Titan Feller',      icon: '🗿', desc: 'Defeat The Geometric Titan.' },
  'boss-rw-champion':   { name: 'R&W Champion',  icon: '📕', desc: 'Defeat the Reading & Writing Champion.' },
  'boss-math-champion': { name: 'Math Champion', icon: '📐', desc: 'Defeat the Math Champion.' },
  'boss-final':    { name: 'Digital SAT Champion', icon: '🏆', desc: 'Defeat the final boss.' },
  'perfectionist': { name: 'Perfectionist',     icon: '💯', desc: 'Complete a level with 100% correct.' },
  'scholar':       { name: 'Dedicated Scholar',  icon: '📚', desc: 'Answer 200 questions.' },
  'tower-10':      { name: 'Tower Climber',      icon: '🗼', desc: 'Reach floor 10 in the Daily Tower.' },
  'reflector':     { name: 'Self-Aware',         icon: '🪞', desc: 'Reflect on 10 mistakes.' },
};

function awardBadge(id) {
  if (BADGE_DEFS[id] && !STATE.badges[id]) { STATE.badges[id] = Date.now(); return true; }
  return false;
}

function checkStreakBadges() {
  const c = STATE.streak.count;
  if (c >= 3) awardBadge('streak-3');
  if (c >= 7) awardBadge('streak-7');
  if (c >= 14) awardBadge('streak-14');
  if (c >= 30) awardBadge('streak-30');
}

/* ---- Daily quests ---- */
const QUEST_POOL = [
  { id: 'any-level',  text: 'Complete any level',            xp: 50, type: 'level' },
  { id: 'correct-5',  text: 'Answer 5 questions correctly',  xp: 30, type: 'correct', target: 5 },
  { id: 'correct-10', text: 'Answer 10 questions correctly', xp: 60, type: 'correct', target: 10 },
  { id: 'review-3',   text: 'Reflect on 3 mistakes',         xp: 30, type: 'review', target: 3 },
  { id: 'math-3',     text: 'Answer 3 Math questions correctly', xp: 30, type: 'section-correct', section: 'math', target: 3 },
  { id: 'rw-3',       text: 'Answer 3 Reading & Writing questions correctly', xp: 30, type: 'section-correct', section: 'rw', target: 3 },
  { id: 'perfect',    text: 'Ace a level (100% correct)',    xp: 80, type: 'perfect' },
  { id: 'tower-5',    text: 'Reach floor 5 of the Daily Tower', xp: 50, type: 'tower', target: 5 },
];

function refreshDaily() {
  const today = todayKey();
  if (STATE.daily.day === today && STATE.daily.quests.length) return;
  const shuffled = QUEST_POOL.slice().sort(() => Math.random() - 0.5).slice(0, 3);
  STATE.daily = { day: today, quests: shuffled.map(q => ({ ...q, progress: 0, done: false, claimed: false })) };
  // reset tower daily counter
  if (STATE.tower.lastPlayedDay !== today) STATE.tower.todayFloor = 0;
  saveState();
}

function questProgress(type, opts = {}) {
  let changed = false;
  for (const q of STATE.daily.quests) {
    if (q.done) continue;
    let match = q.type === type;
    if (!match && type === 'correct' && q.type === 'section-correct') match = true;
    if (!match) continue;
    if (q.type === 'section-correct' && opts.section && q.section !== opts.section) continue;
    if (q.type === 'tower') { q.progress = Math.max(q.progress, opts.amount || 0); }
    else q.progress += (opts.amount || 1);
    if ((q.target && q.progress >= q.target) || !q.target) q.done = true;
    changed = true;
  }
  if (changed) saveState();
}

function claimFinishedQuests() {
  let gained = 0;
  for (const q of STATE.daily.quests) if (q.done && !q.claimed) { q.claimed = true; gained += q.xp; }
  if (gained) { addXP(gained); saveState(); }
  return gained;
}

/* ---- Unlock logic ---- */
function isLevelUnlocked(levelId) {
  const lv = levelById(levelId);
  if (!lv) return false;
  if (lv.num === 1) return true;
  const prevId = `${lv.region}-${lv.num - 1}`;
  return !!STATE.levelsCompleted[prevId];
}

function regionCleared(regionId) {
  const r = regionById(regionId);
  return r.levels.every(l => STATE.levelsCompleted[l.id]);
}

function isBossUnlocked(bossId) {
  const boss = bossById(bossId);
  if (!boss) return false;
  if (boss.requires) return boss.requires.every(b => STATE.bossesDefeated[b]);
  // domain boss: clear its region's 10 levels
  const region = REGIONS.find(r => r.boss.id === bossId);
  if (region) return regionCleared(region.id);
  return false;
}

function completeLevel(levelId, ratio, xpEarned) {
  const stars = ratio >= 1 ? 3 : ratio >= 0.85 ? 2 : 1;
  const prev = STATE.levelsCompleted[levelId];
  STATE.levelsCompleted[levelId] = {
    best: Math.max(ratio, prev ? prev.best : 0),
    stars: Math.max(stars, prev ? prev.stars : 0),
    xpEarned: (prev ? prev.xpEarned : 0) + xpEarned,
    lastPlayed: Date.now(),
  };
  awardBadge('first-steps');
  if (ratio >= 1) { awardBadge('perfectionist'); questProgress('perfect'); }
  if (STATE.stats.totalAnswered >= 200) awardBadge('scholar');
  const lv = levelById(levelId);
  if (lv && regionCleared(lv.region)) awardBadge('region-master');
  questProgress('level');
  markActiveToday();
  // Skill Points for the Upgrade Hub: 1 per clear, +1 for a perfect run.
  if (typeof earnSP === 'function') earnSP(1 + (ratio >= 1 ? 1 : 0), 'level');
}

function defeatBoss(bossId) {
  const first = !STATE.bossesDefeated[bossId];
  STATE.bossesDefeated[bossId] = true;
  if (first) awardBadge(bossId); // badge ids match boss ids
  markActiveToday();
  if (typeof earnSP === 'function') {
    const champ = SECTION_BOSSES.some(b => b.id === bossId), fin = bossId === 'boss-final';
    earnSP(fin ? 8 : champ ? 5 : 3, 'boss');
  }
  return first;
}

/* ---- Daily study path: an ordered, personalized set of today's tasks ---- */
function dailyStudyPath() {
  const tasks = [];
  // 1. Warm-up: review a weak or due skill
  const due = spacedReviewSkills(1)[0] || weakestSkills(1, 2)[0];
  if (due) {
    tasks.push({ kind: 'review', icon: '🔁', title: `Warm-up: ${SKILLS[due.id].name}`,
      sub: `Spaced review of a skill that needs it (${Math.round((due.acc || 0) * 100)}% so far).`,
      skillIds: [due.id] });
  }
  // 2. Progress: next unlocked, uncompleted level
  const next = allLevels().find(l => !STATE.levelsCompleted[l.id] && isLevelUnlocked(l.id));
  if (next) tasks.push({ kind: 'level', icon: regionById(next.region).icon, title: `New ground: ${next.title}`,
    sub: `${regionById(next.region).name} · ${TIER_LABEL[next.tier]}`, levelId: next.id });
  // 3. A boss if one is ready
  for (const b of allBosses()) if (isBossUnlocked(b.id) && !STATE.bossesDefeated[b.id]) {
    tasks.push({ kind: 'boss', icon: b.icon, title: `Boss ready: ${b.name}`, sub: 'Unlocked and waiting.', bossId: b.id }); break;
  }
  // 4. Tower challenge
  tasks.push({ kind: 'tower', icon: '🗼', title: 'Climb the Daily Tower', sub: 'Endless escalating questions — how high can you go?' });
  return tasks.slice(0, 4);
}

/* ---- Backup ---- */
function exportSave() { return JSON.stringify(STATE, null, 2); }

function importSave(json) {
  const parsed = JSON.parse(json);
  if (typeof parsed !== 'object' || !parsed.profile) throw new Error('Not a SAT Quest backup file.');
  STATE = Object.assign(DEFAULT_STATE(), parsed);
  const d = DEFAULT_STATE();
  for (const k of ['profile', 'streak', 'daily', 'settings', 'stats', 'tower']) {
    STATE[k] = Object.assign(d[k], STATE[k] || {});
  }
  if (!STATE.dailyLog) STATE.dailyLog = {};
  refreshDaily();
  saveState();
  return STATE;
}

function resetSave() { STATE = DEFAULT_STATE(); saveState(); return STATE; }
