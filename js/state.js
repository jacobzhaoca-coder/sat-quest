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
  // ---- v3 anti-repeat + question history + flagging ----
  runthrough: null,        // { id, startedAt, seenIds:[], seenSigs:[], served }
  qhistory: {},            // qKey -> { s:seen, c:correct, w:wrong, last:ts, lr:0|1, str:streak, sk:skill, dm:domain, src:'authored'|'generated' }
  flags: [],               // { key, reason, note, source, type, domain, skill, when }
  recentRW: [],            // rolling window of recently-served authored R&W texts (soft anti-repeat)
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
    if (!STATE.qhistory || typeof STATE.qhistory !== 'object') STATE.qhistory = {};
    if (!Array.isArray(STATE.flags)) STATE.flags = [];
    if (!Array.isArray(STATE.recentRW)) STATE.recentRW = [];
    ensureRunthrough();
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
// Clamp to [0, XP_PER_LEVEL] so an imported or hand-edited save whose xp and
// playerLevel are out of sync degrades gracefully instead of showing a negative
// "progress to next level". Normal play keeps xp cumulative, so this never fires.
function xpIntoLevel() { return Math.max(0, Math.min(XP_PER_LEVEL, STATE.xp - xpForCurrentLevel())); }
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
function recordAnswer(skillId, correct, timeMs = 0, difficulty = null) {
  const s = STATE.skillStats[skillId] || { correct: 0, seen: 0, timeMs: 0, lastPracticed: 0 };
  s.seen += 1;
  if (correct) s.correct += 1;
  s.timeMs += timeMs;
  s.lastPracticed = Date.now();
  // Rolling window of the last dozen results (1 = correct) so the Skill Clinic
  // can show a real recent trend, not just the lifetime average.
  if (!Array.isArray(s.recent)) s.recent = [];
  s.recent.push(correct ? 1 : 0);
  if (s.recent.length > 12) s.recent.splice(0, s.recent.length - 12);
  // Per-difficulty tally (powers the Accuracy Tracker upgrade). Filled going
  // forward; older answers simply aren't counted here.
  if (difficulty === 'Easy' || difficulty === 'Medium' || difficulty === 'Hard') {
    if (!s.byDiff) s.byDiff = {};
    const d = s.byDiff[difficulty] || (s.byDiff[difficulty] = { correct: 0, seen: 0, timeMs: 0 });
    d.seen += 1; if (correct) d.correct += 1; d.timeMs += timeMs;
  }
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

// Accuracy + pacing broken out by difficulty, across every skill. Powers the
// Accuracy Tracker upgrade's analytics panel. Returns null buckets until data
// accrues so the UI can show "not enough data yet".
function accuracyByDifficulty() {
  const out = { Easy: { correct: 0, seen: 0, timeMs: 0 }, Medium: { correct: 0, seen: 0, timeMs: 0 }, Hard: { correct: 0, seen: 0, timeMs: 0 } };
  for (const sid of Object.keys(STATE.skillStats || {})) {
    const bd = STATE.skillStats[sid].byDiff;
    if (!bd) continue;
    for (const lvl of ['Easy', 'Medium', 'Hard']) if (bd[lvl]) {
      out[lvl].correct += bd[lvl].correct; out[lvl].seen += bd[lvl].seen; out[lvl].timeMs += bd[lvl].timeMs;
    }
  }
  for (const lvl of ['Easy', 'Medium', 'Hard']) {
    out[lvl].acc = out[lvl].seen ? out[lvl].correct / out[lvl].seen : null;
    out[lvl].avgTimeSec = out[lvl].seen ? out[lvl].timeMs / out[lvl].seen / 1000 : null;
  }
  return out;
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

/* ---- Automatic mistake-type diagnosis ----
   Classifies a wrong answer into a specific, SAT-relevant mistake type so the
   app can teach from it. It leans on the generator's OWN labeled reason for the
   chosen distractor (q.whyWrong[chosen]) — which already encodes the exact slip
   — and falls back to the skill when no keyword matches. Lightweight, transparent,
   and offline: pure string matching, no model. */
const MISTAKE_TYPES = {
  // Math
  'equation-setup':   { label: 'Equation setup',        advice: 'Before solving, write what each variable stands for and what the question actually asks for.' },
  'algebra-manip':    { label: 'Algebra manipulation',  advice: 'Do one step at a time to both sides and watch signs when moving terms.' },
  'wrong-formula':    { label: 'Wrong formula',         advice: 'Recall the right formula for the shape or quantity before plugging in.' },
  'arithmetic':       { label: 'Arithmetic slip',       advice: 'Slow down on the final computation and recheck it.' },
  'misread-question': { label: 'Misread the question',  advice: 'Underline exactly what is asked (which variable, which quantity) before choosing.' },
  'graph-table':      { label: 'Graph/table reading',   advice: 'Read the actual values off the figure before reasoning about them.' },
  'unit-rate':        { label: 'Unit / rate error',     advice: 'Track units and make sure the rate is right-side up.' },
  'percent-change':   { label: 'Percent error',         advice: 'Separate “percent of” from “percent change”; divide by the correct base.' },
  'geometry-rel':     { label: 'Geometry relationship', advice: 'Name the rule (angle sum, similarity, radius vs. diameter) before computing.' },
  'function-notation':{ label: 'Function notation',     advice: 'Work inside-out: evaluate the inner function first.' },
  // R&W
  'main-idea':        { label: 'Main idea',             advice: 'Summarize the whole text in your own words, then match.' },
  'missed-evidence':  { label: 'Unsupported choice',    advice: 'Keep only what the text actually states or directly implies.' },
  'too-broad':        { label: 'Too broad',             advice: 'Reject choices that overreach beyond what the text supports.' },
  'too-narrow':       { label: 'Too narrow',            advice: 'Reject choices that fixate on a single detail.' },
  'transition-logic': { label: 'Transition logic',      advice: 'Name the relationship (contrast, cause, addition) before picking a connector.' },
  'grammar-boundary': { label: 'Grammar boundary',      advice: 'Check whether each side of the punctuation is a complete sentence.' },
  'verb-form':        { label: 'Verb form / agreement', advice: 'Find the true subject and match the verb’s number and tense to it.' },
  'word-context':     { label: 'Word in context',       advice: 'Predict your own word for the blank, then match the closest choice.' },
  'rhetorical-goal':  { label: 'Rhetorical goal',       advice: 'Re-read the stated goal and keep only the choice that does exactly that.' },
  'cross-text':       { label: 'Cross-text relationship', advice: 'State each author’s position, then find how the second responds to the first.' },
  'careless':         { label: 'Careless reading',      advice: 'Reread the stem and the finalist choices slowly before committing.' },
  // Low-confidence fallback when nothing else fits — never claim certainty.
  'strategy-mismatch':{ label: 'Strategy mismatch',     advice: 'Review the explanation and the skill card before drilling this skill.' },
};

// Ordered [regex, type] rules scanned against the chosen distractor's reason.
const _MATH_MISTAKE_RULES = [
  [/set up|represent|should (be|have)|models|translate|total (cost|amount)|per (item|unit|month|mile)/, 'equation-setup'],
  [/\bsign\b|distribut|both sides|isolate|combine|like terms|flip|inverse operation|move the/, 'algebra-manip'],
  [/formula|area|volume|circumference|pythag|slope is|½|surface area|use the/, 'wrong-formula'],
  [/percent|%/, 'percent-change'],
  [/unit|convert|rate|per\b|scale by|proportion/, 'unit-rate'],
  [/graph|table|axis|scatter|best fit|residual|read (the|off)|data point/, 'graph-table'],
  [/angle|triangle|similar|parallel|radius|diameter|degree|arc|sector|inscribed/, 'geometry-rel'],
  [/f\(|g\(|function|compose|composition|inside|notation/, 'function-notation'],
  [/asked|question asks|what is being|the value of x|which (variable|quantity)|solve for/, 'misread-question'],
  [/arithmet|add|subtract|multipl|divide|off by|miscalc|computation|rounding/, 'arithmetic'],
];
const _RW_MISTAKE_RULES = [
  [/too broad|overly (general|broad)|sweeping|every|entire|all of|whole (genre|field)/, 'too-broad'],
  [/too narrow|only (one|a single)|single detail|just one|fixate|one example/, 'too-narrow'],
  [/not supported|no evidence|does not (say|state|show|claim)|unsupported|nothing (in the text|suggests)|never (says|stated)|beyond the text/, 'missed-evidence'],
  [/main (idea|point|purpose)|overall|as a whole|central/, 'main-idea'],
  [/contrast|addition|cause|however|therefore|relationship|transition|connect/, 'transition-logic'],
  [/subject.?verb|agreement|verb (form|tense)|singular|plural|tense|modifier|parallel/, 'verb-form'],
  [/clause|comma splice|independent|complete sentence|punctuat|semicolon|boundary/, 'grammar-boundary'],
  [/means|word|context|definition|synonym|tone/, 'word-context'],
  [/goal|synthesis|the student wants|emphasize|the intended/, 'rhetorical-goal'],
  [/text 1|text 2|other author|both texts|second text|first text/, 'cross-text'],
];
// Default mistake type per skill when the reason text doesn't match a rule.
const _SKILL_DEFAULT_MISTAKE = {
  'linear-eq': 'algebra-manip', 'linear-func': 'graph-table', 'systems': 'equation-setup',
  'inequalities': 'algebra-manip', 'equivalent': 'algebra-manip', 'quadratics': 'algebra-manip',
  'exponentials': 'wrong-formula', 'radicals': 'algebra-manip', 'functions': 'function-notation',
  'ratios': 'unit-rate', 'percentages': 'percent-change', 'statistics': 'graph-table',
  'scatterplots': 'graph-table', 'probability': 'graph-table', 'sampling': 'graph-table',
  'angles': 'geometry-rel', 'area-volume': 'wrong-formula', 'circles': 'geometry-rel', 'trig': 'geometry-rel',
  'central-ideas': 'main-idea', 'evidence-text': 'missed-evidence', 'evidence-quant': 'missed-evidence',
  'inferences': 'missed-evidence', 'words-context': 'word-context', 'structure': 'main-idea',
  'cross-text': 'cross-text', 'transitions': 'transition-logic', 'synthesis': 'rhetorical-goal',
  'boundaries': 'grammar-boundary', 'form-sense': 'grammar-boundary',
};

// Returns { type, label, advice, note, confidence, lead }.
//   confidence: 'high'   — matched the distractor's own labeled reason (most reliable)
//               'medium' — inferred from the skill (no reason text to read)
//               'low'    — a reason existed but fit no pattern, or the skill is unmapped
//   lead: the softened phrase the UI shows so we never overclaim certainty
//         ('Likely mistake' / 'Watch for' / 'Possible trap' / 'Likely issue').
function classifyMistake(q, chosen) {
  if (!q) return null;
  const section = (typeof SKILLS !== 'undefined' && SKILLS[q.skill]) ? SKILLS[q.skill].section : 'math';
  const isGrid = q.type === 'grid';
  // A blank/timeout on a grid-in is usually a formatting or time issue, not a concept slip.
  if (isGrid && (chosen === '' || chosen == null || /ran out of time/.test(String(chosen)))) {
    return { type: 'careless', ...MISTAKE_TYPES.careless, confidence: 'medium', lead: 'Watch for',
      note: 'Grid-ins have no choices — double-check the format (integer, decimal, or fraction) and pacing.' };
  }
  const reason = (!isGrid && q.whyWrong && q.whyWrong[chosen]) ? String(q.whyWrong[chosen]) : '';
  const hay = reason.toLowerCase();
  const rules = section === 'math' ? _MATH_MISTAKE_RULES : _RW_MISTAKE_RULES;
  let type = null, confidence, lead;
  if (hay) for (const [re, t] of rules) { if (re.test(hay)) { type = t; break; } }
  if (type) {
    confidence = 'high'; lead = 'Likely mistake';       // the trap's own reason named the slip
  } else if (_SKILL_DEFAULT_MISTAKE[q.skill]) {
    type = _SKILL_DEFAULT_MISTAKE[q.skill];
    confidence = hay ? 'low' : 'medium';                 // a reason that fit nothing → low; pure skill guess → medium
    lead = hay ? 'Possible trap' : 'Watch for';
  } else {
    type = 'strategy-mismatch'; confidence = 'low'; lead = 'Likely issue';
  }
  const def = MISTAKE_TYPES[type] || MISTAKE_TYPES['strategy-mismatch'];
  const note = type === 'strategy-mismatch' ? def.advice : (reason || def.advice);
  return { type, label: def.label, advice: def.advice, note, confidence, lead };
}

// Count auto-classified mistake types, optionally restricted to one skill.
function mistakeTypeCounts(skillId = null) {
  const counts = {};
  for (const m of STATE.mistakes) {
    if (skillId && m.skill !== skillId) continue;
    const t = m.mtype;
    if (t) counts[t] = (counts[t] || 0) + 1;
  }
  return counts;
}
function topMistakeType(skillId = null) {
  const c = mistakeTypeCounts(skillId);
  const top = Object.entries(c).sort((a, b) => b[1] - a[1])[0];
  return top ? { type: top[0], count: top[1], ...(MISTAKE_TYPES[top[0]] || {}) } : null;
}

// Recent per-skill trend from the rolling window: compares the older half of the
// window to the newer half. Returns 'up' | 'down' | 'flat' | null (too little data).
function skillTrend(skillId) {
  const s = STATE.skillStats[skillId];
  if (!s || !Array.isArray(s.recent) || s.recent.length < 4) return null;
  const r = s.recent, mid = Math.floor(r.length / 2);
  const older = r.slice(0, mid), newer = r.slice(mid);
  const avg = a => a.reduce((x, y) => x + y, 0) / a.length;
  const d = avg(newer) - avg(older);
  return d > 0.15 ? 'up' : d < -0.15 ? 'down' : 'flat';
}

/* Difficulty a drill/practice set should center on for this skill, from the
   player's demonstrated accuracy (and nudged by recent trend). This makes the
   difficulty the player actually experiences adapt to them, independent of how
   well any single generator scales its own parameters by tier:
     weak (<50%) → Easy start, struggling stays gentle
     mid  (50–80%) → Medium
     strong (≥80%) → Hard, and a rising trend can bump a mid skill up.
   Returns a base tier 1–3; callers may still spread ± around it. */
function adaptiveTier(skillId) {
  const acc = skillAccuracy(skillId);
  if (acc == null) return 2;                 // unknown skill → start at Medium
  let base = acc < 0.5 ? 1 : acc < 0.8 ? 2 : 3;
  const trend = skillTrend(skillId);
  if (base === 2 && trend === 'up' && acc >= 0.72) base = 3;   // clearly improving → stretch
  if (base === 2 && trend === 'down' && acc <= 0.58) base = 1; // slipping → ease off
  return base;
}

/* How many tracked questions in a specific skill are currently due for review. */
function skillDueCount(skillId) {
  let n = 0;
  for (const key of Object.keys(STATE.qhistory || {})) {
    const h = STATE.qhistory[key];
    if (h && h.sk === skillId && reviewDue(h)) n++;
  }
  return n;
}

/* Which drill mode fits this skill right now, with a one-line reason. Weak or
   thin skills want more reps (Focused); solid skills want a stretch (Challenge);
   the middle wants a Quick check. */
function recommendedDrillMode(skillId) {
  const acc = skillAccuracy(skillId);
  const trend = skillTrend(skillId);
  if (acc == null) return { mode: 'quick', label: 'Quick Drill', reason: 'Start with a quick set to gauge this skill.' };
  if (acc < 0.55) return { mode: 'focused', label: 'Focused Drill', reason: 'Below 55% — a longer set builds the reps you need.' };
  if (acc >= 0.85 && trend !== 'down') return { mode: 'challenge', label: 'Challenge Drill', reason: 'Strong here — harder questions keep it sharp.' };
  return { mode: 'quick', label: 'Quick Drill', reason: 'A quick set to push this from shaky to solid.' };
}

/* Bundle everything the Skill Clinic wants to show for one skill. */
function skillContext(skillId) {
  return {
    id: skillId,
    name: (SKILLS[skillId] || {}).name || skillId,
    section: (SKILLS[skillId] || {}).section || 'math',
    acc: skillAccuracy(skillId),
    seen: (STATE.skillStats[skillId] || {}).seen || 0,
    trend: skillTrend(skillId),
    due: skillDueCount(skillId),
    topMistake: (typeof topMistakeType === 'function') ? topMistakeType(skillId) : null,
    recommend: recommendedDrillMode(skillId),
    related: (typeof relatedSkills === 'function') ? relatedSkills(skillId) : [],
  };
}

/* Detect a repeated mistake pattern: a single mistake type the player has hit
   several times recently. Returns { type, label, advice, count, skill? } or null.
   Scans the most recent ~24 logged mistakes so the warning stays current. */
function repeatedMistakePattern(threshold = 3) {
  const recent = STATE.mistakes.slice(0, 24);
  const byType = {};
  for (const m of recent) if (m.mtype) {
    (byType[m.mtype] || (byType[m.mtype] = { count: 0, skills: {} })).count++;
    if (m.skill) byType[m.mtype].skills[m.skill] = (byType[m.mtype].skills[m.skill] || 0) + 1;
  }
  const top = Object.entries(byType).sort((a, b) => b[1].count - a[1].count)[0];
  if (!top || top[1].count < threshold) return null;
  const def = MISTAKE_TYPES[top[0]] || {};
  const topSkill = Object.entries(top[1].skills).sort((a, b) => b[1] - a[1])[0];
  return { type: top[0], label: def.label || top[0], advice: def.advice || '', count: top[1].count,
    skill: topSkill ? topSkill[0] : null };
}

/* One-glance progress context for the Profile: weakest/strongest skills, the
   most repeated mistake type, review-due count, section balance, and a single
   recommended next step. All unofficial — no score prediction. */
function progressContext() {
  const rated = Object.keys(SKILLS)
    .map(id => ({ id, name: SKILLS[id].name, section: SKILLS[id].section, acc: skillAccuracy(id), seen: (STATE.skillStats[id] || {}).seen || 0 }))
    .filter(x => x.seen >= 2 && x.acc !== null);
  const byAcc = rated.slice().sort((a, b) => a.acc - b.acc);
  const weakest = byAcc.slice(0, 3);
  const strongest = byAcc.slice().reverse().slice(0, 3);
  const dueCount = (typeof dueReviewQuestions === 'function') ? dueReviewQuestions(60).length : 0;
  const topMistake = (typeof topMistakeType === 'function') ? topMistakeType() : null;
  const math = sectionAccuracy('math'), rw = sectionAccuracy('rw');
  // Recommend the single most useful next step.
  let recommend;
  if (dueCount > 0) recommend = { kind: 'review', text: `Clear ${dueCount} due review question${dueCount === 1 ? '' : 's'} first — retention comes before new ground.` };
  else if (weakest[0]) recommend = { kind: 'drill', skillId: weakest[0].id, text: `Drill ${weakest[0].name} — your lowest skill at ${Math.round(weakest[0].acc * 100)}%.` };
  else recommend = { kind: 'level', text: 'Play a new level so the app can find your weak spots.' };
  return { weakest, strongest, topMistake, dueCount, section: { math, rw }, recommend, rated: rated.length };
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

/* ================================================================
   Runthrough anti-repeat + per-question history + spaced review
   ----------------------------------------------------------------
   A "runthrough" is one campaign session across levels, bosses, the
   Daily Tower and the Simulation Gate. Within it we avoid serving the
   exact same question twice (by R&W item id or generated math
   signature) until the relevant pool is genuinely exhausted. History
   is kept per question so the Review Dungeon can resurface specific
   missed items and space them out as they are re-mastered.
   ================================================================ */

/* Universal identity for any question: authored R&W items carry a stable
   `id`; generated math instances carry a `variantId`/`sig`. */
function qKey(q) {
  if (!q) return null;
  if (q.id) return q.id;
  if (q.variantId) return q.variantId;
  if (q.sig) return q.sig;
  return null;
}
function qIsGenerated(q) { return !q.id && !!(q.variantId || q.sig); }

/* ---- Runthrough ---- */
const RUNTHROUGH_SEEN_CAP = 8000; // covers the full doubled generated pool (~5,000 R&W scenarios + math) before any tracking-induced repeat; still storage-bounded (~a few hundred KB)
function ensureRunthrough() {
  if (!STATE) return;
  if (!STATE.runthrough || !STATE.runthrough.id) {
    STATE.runthrough = { id: 'rt-' + Date.now(), startedAt: Date.now(), seenIds: [], seenSigs: [], served: 0 };
  }
  if (!Array.isArray(STATE.runthrough.seenIds)) STATE.runthrough.seenIds = [];
  if (!Array.isArray(STATE.runthrough.seenSigs)) STATE.runthrough.seenSigs = [];
  return STATE.runthrough;
}

// Start a fresh runthrough. Always resets seen-tracking; only wipes XP/progress
// when the caller explicitly asks for a full reset (the UI warns first).
function startNewRunthrough(fullReset = false) {
  if (fullReset) { resetSave(); return STATE; }
  STATE.runthrough = { id: 'rt-' + Date.now(), startedAt: Date.now(), seenIds: [], seenSigs: [], served: 0 };
  saveState();
  return STATE.runthrough;
}

function runthroughHasSeen(q) {
  const rt = ensureRunthrough();
  const key = qKey(q);
  if (!key) return false;
  return qIsGenerated(q) ? rt.seenSigs.includes(key) : rt.seenIds.includes(key);
}

// Record questions as served this runthrough (fresh-practice modes only —
// the Review Dungeon intentionally repeats and must not mark items seen).
function noteSeenInRunthrough(qs) {
  const rt = ensureRunthrough();
  for (const q of (Array.isArray(qs) ? qs : [qs])) {
    const key = qKey(q);
    if (!key) continue;
    const bucket = qIsGenerated(q) ? rt.seenSigs : rt.seenIds;
    if (!bucket.includes(key)) { bucket.push(key); rt.served++; }
    if (bucket.length > RUNTHROUGH_SEEN_CAP) bucket.splice(0, bucket.length - RUNTHROUGH_SEEN_CAP);
  }
}

/* ---- Per-question history & mastery ---- */
const HISTORY_CAP = 3000;         // cap tracked questions to keep localStorage small
const REVIEW_INTERVAL_DAYS = [1, 3, 7, 16, 35]; // spacing by post-miss correct streak

function recordQuestionHistory(q, correct) {
  const key = qKey(q);
  if (!key) return;
  if (!STATE.qhistory) STATE.qhistory = {};
  const h = STATE.qhistory[key] || { s: 0, c: 0, w: 0, last: 0, lr: 1, str: 0 };
  h.s += 1;
  if (correct) { h.c += 1; h.str = (h.lr === 1 || h.s === 1) ? (h.str || 0) + 1 : 1; h.lr = 1; }
  else { h.w += 1; h.str = 0; h.lr = 0; }
  h.last = Date.now();
  h.sk = q.skill || h.sk;
  h.dm = (typeof SKILLS !== 'undefined' && SKILLS[q.skill]) ? SKILLS[q.skill].region : h.dm;
  h.src = qIsGenerated(q) ? 'generated' : 'authored';
  STATE.qhistory[key] = h;
  pruneHistory();
}

// Keep only the most valuable rows if the map grows large: never drop items
// that are still due/missed; among the rest drop the oldest-touched first.
function pruneHistory() {
  const keys = Object.keys(STATE.qhistory);
  if (keys.length <= HISTORY_CAP) return;
  const removable = keys.filter(k => !reviewDue(STATE.qhistory[k]))
    .sort((a, b) => (STATE.qhistory[a].last || 0) - (STATE.qhistory[b].last || 0));
  let excess = keys.length - HISTORY_CAP;
  for (const k of removable) { if (excess-- <= 0) break; delete STATE.qhistory[k]; }
}

// Is a tracked question currently due for spaced review?
function reviewDue(h, now = Date.now()) {
  if (!h) return false;
  if (h.lr === 0) return true;          // last attempt wrong → due until re-mastered
  if ((h.w || 0) === 0) return false;   // never missed → not a review item
  const days = REVIEW_INTERVAL_DAYS[Math.min(h.str || 0, REVIEW_INTERVAL_DAYS.length - 1)];
  return (now - (h.last || 0)) >= days * DAY_MS;
}

// One of: unseen | seen | improving | missed | due-for-review | mastered
//   missed         = the most recent attempt was wrong (needs work now)
//   due-for-review = previously missed, since answered right, but the spaced
//                    interval has elapsed so it is time to re-check
function masteryOf(key) {
  const h = STATE.qhistory && STATE.qhistory[key];
  if (!h) return 'unseen';
  const acc = h.s ? h.c / h.s : 0;
  if (h.s >= 3 && acc >= 0.85 && h.lr === 1 && (h.str || 0) >= 2) return 'mastered';
  if (h.lr === 0) return 'missed';
  if (reviewDue(h)) return 'due-for-review';
  if ((h.w || 0) > 0 && (h.c || 0) > 0) return 'improving';
  return 'seen';
}

function historySummary() {
  const out = { total: 0, unseen: 0, seen: 0, improving: 0, missed: 0, 'due-for-review': 0, mastered: 0, authored: 0, generated: 0 };
  for (const key of Object.keys(STATE.qhistory || {})) {
    out.total++;
    out[masteryOf(key)]++;
    out[STATE.qhistory[key].src === 'generated' ? 'generated' : 'authored']++;
  }
  return out;
}

// Specific questions due for review, most urgent first. Exact misses (last
// result wrong) rank above spaced re-checks. Returns metadata + a human reason;
// R&W items also carry the id so the Review Dungeon can re-serve them exactly.
function dueReviewQuestions(limit = 20) {
  const now = Date.now();
  const rows = [];
  for (const key of Object.keys(STATE.qhistory || {})) {
    const h = STATE.qhistory[key];
    if (!reviewDue(h, now)) continue;
    const exactMiss = h.lr === 0;
    rows.push({
      key, skill: h.sk, domain: h.dm, source: h.src,
      isAuthored: h.src !== 'generated',
      priority: exactMiss ? 2 : 1,
      overdueMs: now - (h.last || 0),
      reason: exactMiss ? 'Due because you missed this exact question'
                        : 'Spaced review — you have missed this before',
    });
  }
  rows.sort((a, b) => (b.priority - a.priority) || (b.overdueMs - a.overdueMs));
  return rows.slice(0, limit);
}

/* ---- Question flagging (quality feedback, local only) ---- */
const FLAG_REASONS = ['Confusing wording', 'Answer seems wrong', 'Explanation unclear', 'Too easy', 'Too hard', 'Not SAT-like', 'Typo/formatting issue', 'Other'];

function flagQuestion(q, reason, note = '') {
  if (!Array.isArray(STATE.flags)) STATE.flags = [];
  const key = qKey(q);
  const entry = {
    key, reason, note: (note || '').slice(0, 300),
    source: qIsGenerated(q) ? 'generated' : 'authored',
    type: q.type === 'grid' ? 'grid-in' : (q.visual ? 'visual' : 'multiple-choice'),
    domain: (typeof SKILLS !== 'undefined' && SKILLS[q.skill]) ? SKILLS[q.skill].region : null,
    skill: q.skill || null,
    preview: (q.text || '').replace(/\s+/g, ' ').trim().slice(0, 120),
    when: Date.now(),
  };
  // De-dupe: replace an existing flag for the same key+reason rather than pile up.
  const i = STATE.flags.findIndex(f => f.key === key && f.reason === reason);
  if (i !== -1) STATE.flags.splice(i, 1);
  STATE.flags.unshift(entry);
  if (STATE.flags.length > 300) STATE.flags.length = 300;
  saveState();
  return entry;
}
function isFlagged(q) { const key = qKey(q); return !!(STATE.flags || []).find(f => f.key === key); }
function flaggedQuestions() { return (STATE.flags || []).slice(); }
function unflagKey(key) { STATE.flags = (STATE.flags || []).filter(f => f.key !== key); saveState(); }

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

/* Accuracy of a whole section ('math' | 'rw') so the study path can balance the
   two — steering the player toward the section they're weaker in. */
function sectionAccuracy(section) {
  let correct = 0, seen = 0;
  for (const id of Object.keys(SKILLS)) {
    if (SKILLS[id].section !== section) continue;
    const s = STATE.skillStats[id];
    if (s) { correct += s.correct; seen += s.seen; }
  }
  return { acc: seen ? correct / seen : null, seen };
}

/* ---- Daily study path: an ordered, personalized set of today's tasks ----
   Considers, in priority order: how much history exists (starter plan for new
   players), questions due for spaced review, the weakest/most-due skill and its
   recent mistake pattern, flagged-for-review questions, section balance
   (Math vs R&W), progress on the map, and a boss/tower capstone. */
function dailyStudyPath() {
  const attemptedSkills = Object.keys(STATE.skillStats).filter(id => (STATE.skillStats[id] || {}).seen > 0).length;

  // Starter plan: too little data to personalise — get one level of each section
  // played so the app can learn the player's weak spots.
  if (STATE.stats.totalAnswered < 6 || attemptedSkills < 2) {
    const tasks = [];
    const firstMath = allLevels().find(l => l.section === 'math' && isLevelUnlocked(l.id) && !STATE.levelsCompleted[l.id]);
    const firstRW = allLevels().find(l => l.section === 'rw' && isLevelUnlocked(l.id) && !STATE.levelsCompleted[l.id]);
    if (firstRW) tasks.push({ kind: 'level', icon: regionById(firstRW.region).icon, title: `Start here: ${firstRW.title}`,
      sub: 'A Reading & Writing level so SAT Quest can learn your R&W level.', levelId: firstRW.id,
      why: 'You’re new — one R&W level lets the app measure where you stand.' });
    if (firstMath) tasks.push({ kind: 'level', icon: regionById(firstMath.region).icon, title: `Then: ${firstMath.title}`,
      sub: 'A Math level so SAT Quest can spot your weak Math skills.', levelId: firstMath.id,
      why: 'A Math level gives the app the data it needs to personalize your plan.' });
    tasks.push({ kind: 'tower', icon: '🗼', title: 'Try the Daily Tower', sub: 'A quick mixed warm-up once you’ve played a level or two.',
      why: 'A short mixed warm-up builds the habit and samples many skills.' });
    return tasks.slice(0, 4);
  }

  const tasks = [];
  // 1. Retention first: clear anything due for spaced review (missed before).
  const dueCount = (typeof dueReviewQuestions === 'function') ? dueReviewQuestions(60).length : 0;
  if (dueCount > 0) {
    tasks.push({ kind: 'review', icon: '🔁', title: 'Review Dungeon',
      sub: `${dueCount} question${dueCount === 1 ? '' : 's'} due for review — clear these first.`,
      why: 'Spaced review catches older misses before they fade from memory.' });
  }
  // 2. Targeted drill of the weakest / most-due skill (active weak-spot work),
  //    naming the recent mistake pattern so the player knows what to watch for.
  const weak = spacedReviewSkills(1)[0] || weakestSkills(1, 2)[0];
  if (weak) {
    const top = (typeof topMistakeType === 'function') ? topMistakeType(weak.id) : null;
    tasks.push({ kind: 'drill', icon: '🎯', title: `Drill: ${SKILLS[weak.id].name}`,
      sub: top ? `Your weak spot (${Math.round((weak.acc || 0) * 100)}%). Common miss: ${top.label}.`
               : `Your weak spot (${Math.round((weak.acc || 0) * 100)}% so far).`,
      skillId: weak.id,
      why: top ? `Lowest recent accuracy (${Math.round((weak.acc || 0) * 100)}%), and ${top.label.toLowerCase()} keeps recurring — a focused drill targets exactly that.`
               : `This is your lowest recent skill (${Math.round((weak.acc || 0) * 100)}%) — drilling it moves your score fastest.` });
  }
  // 3. Progress — but steer toward the weaker section when both have data.
  const mathAcc = sectionAccuracy('math'), rwAcc = sectionAccuracy('rw');
  let preferred = null;
  if (mathAcc.acc != null && rwAcc.acc != null) preferred = mathAcc.acc <= rwAcc.acc ? 'math' : 'rw';
  const levelsLeft = allLevels().filter(l => !STATE.levelsCompleted[l.id] && isLevelUnlocked(l.id));
  const next = (preferred && levelsLeft.find(l => l.section === preferred)) || levelsLeft[0];
  if (next) {
    const weaker = preferred && next.section === preferred;
    tasks.push({ kind: 'level', icon: regionById(next.region).icon, title: `New ground: ${next.title}`,
      sub: `${regionById(next.region).name} · ${TIER_LABEL[next.tier]}${weaker ? ' · your weaker section' : ''}`, levelId: next.id,
      why: weaker ? `Your ${preferred === 'math' ? 'Math' : 'Reading & Writing'} accuracy is the lower of the two — new ground here balances your sections.`
                  : 'Keeps your campaign progress moving and unlocks the next challenges.' });
  }
  // 4. A boss if one is ready, else the Daily Tower.
  let added = false;
  for (const b of allBosses()) if (isBossUnlocked(b.id) && !STATE.bossesDefeated[b.id]) {
    tasks.push({ kind: 'boss', icon: b.icon, title: `Boss ready: ${b.name}`, sub: 'Unlocked and waiting.', bossId: b.id,
      why: 'A boss tests several skills under pressure — good for consolidating what you’ve learned.' }); added = true; break;
  }
  if (!added) tasks.push({ kind: 'tower', icon: '🗼', title: 'Climb the Daily Tower', sub: 'Endless escalating questions — how high can you go?',
    why: 'An optional challenge that samples every skill at rising difficulty.' });
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
  if (!STATE.qhistory || typeof STATE.qhistory !== 'object') STATE.qhistory = {};
  if (!Array.isArray(STATE.flags)) STATE.flags = [];
  if (!Array.isArray(STATE.recentRW)) STATE.recentRW = [];
  ensureRunthrough();
  refreshDaily();
  saveState();
  return STATE;
}

function resetSave() { STATE = DEFAULT_STATE(); saveState(); return STATE; }
