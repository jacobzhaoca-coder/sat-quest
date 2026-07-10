/* SAT Quest — full-length Digital SAT practice engine.
   Runs the official module STRUCTURE (R&W Module 1 → R&W Module 2 → break →
   Math Module 1 → Math Module 2) with per-module timers, review-before-submit,
   no going back to a finished module, local save/resume, SIMULATED adaptivity,
   and an UNOFFICIAL estimated score.

   Two presentation styles share this engine:
     - 'sim'  : the clean Simulation Gate practice test
     - 'boss' : the Final Exam Realm, where each module is a boss fight

   IMPORTANT: The score is an unofficial practice estimate only. The real SAT is
   scored by the College Board using its own model; this app does not replicate
   that model and never reports an official score. */

/* Module sizes and timing. This is a SHORTENED practice simulation that keeps
   the real test's structure and per-question pacing (~71s R&W, ~95s Math),
   scaled to a length that is repeatable. Adjust counts here to taste. */
const EXAM_CONFIG = {
  rw:   { count: 12, perQ: 71 },
  math: { count: 10, perQ: 95 },
  order: ['rw1', 'rw2', 'break', 'math1', 'math2'],
  breakSeconds: 600, // up to 10 minutes; the UI lets you skip
};

const MODULE_META = {
  rw1:   { section: 'rw',   label: 'Reading & Writing — Module 1', icon: '📕' },
  rw2:   { section: 'rw',   label: 'Reading & Writing — Module 2', icon: '📗' },
  math1: { section: 'math', label: 'Math — Module 1', icon: '📐' },
  math2: { section: 'math', label: 'Math — Module 2', icon: '📏' },
};

/* Build one module's question list. `hard` biases toward tier-3 (used for the
   adaptive second module). */
function buildExamModule(kind, hard) {
  const meta = MODULE_META[kind];
  const cfg = EXAM_CONFIG[meta.section];
  const n = cfg.count;
  const out = [];
  if (meta.section === 'rw') {
    const skills = Object.keys(SKILLS).filter(s => SKILLS[s].section === 'rw');
    // spread across all R&W skills, sampling authored questions without repeats
    let pool = [];
    for (const s of skills) pool = pool.concat(rwQuestionsFor(s, hard ? 3 : 2));
    if (typeof rwGeneratedFor === 'function' && typeof rwHasGenerator === 'function') {
      for (const s of skills) if (rwHasGenerator(s)) pool = pool.concat(rwGeneratedFor(s, 6));
    }
    // Draw without repeats, preferring items not yet seen this runthrough.
    const bag = (typeof shuffleQuestions === 'function') ? shuffleQuestions(pool) : pool.slice();
    const seen = (typeof _rtSeen === 'function') ? _rtSeen : () => false;
    const used = new Set();
    while (out.length < n) {
      if (bag.length === 0) { bag.push(...(typeof shuffleQuestions === 'function' ? shuffleQuestions(pool) : pool)); }
      let idx = bag.findIndex(it => !used.has(it.text) && !seen(it));
      if (idx === -1) idx = bag.findIndex(it => !used.has(it.text));
      if (idx === -1) idx = Math.floor(Math.random() * bag.length);
      const item = bag.splice(idx, 1)[0];
      if (used.has(item.text) && used.size < pool.length) continue;
      used.add(item.text); out.push(item);
    }
  } else {
    const skills = Object.keys(SKILLS).filter(s => SKILLS[s].section === 'math');
    const seen = (typeof _rtSeen === 'function') ? _rtSeen : () => false;
    for (let i = 0; i < n; i++) {
      const skill = skills[Math.floor(Math.random() * skills.length)];
      const tier = hard ? (Math.random() < 0.6 ? 3 : 2) : (Math.random() < 0.5 ? 2 : 1);
      let mq = mixedMathQuestion(skill, tier);
      for (let a = 0; a < 8 && seen(mq); a++) mq = mixedMathQuestion(skill, tier);
      out.push(mq);
    }
  }
  return shuffleQuestions(out);
}

/* Start a new exam. Persists immediately so it can be resumed after exit. */
function startExam(style) {
  const s = { style: style || 'sim', phase: 'rw1', startedAt: Date.now(),
    adaptive: { rwHard: false, mathHard: false }, modules: {}, results: null };
  s.modules.rw1 = newModuleState('rw1', false);
  STATE.examSession = s;
  saveState();
  return s;
}

function newModuleState(kind, hard) {
  const meta = MODULE_META[kind];
  const cfg = EXAM_CONFIG[meta.section];
  const questions = buildExamModule(kind, hard);
  if (typeof _noteRun === 'function') _noteRun(questions); // Simulation Gate = fresh practice
  return {
    kind, questions,
    responses: {}, flags: {}, idx: 0, submitted: false,
    timeLeft: cfg.count * cfg.perQ + timeBonusSeconds() * cfg.count,
    total: cfg.count,
  };
}

function examSession() { return STATE.examSession; }
function currentModule() { const s = examSession(); return s && s.modules[s.phase]; }

/* Record a response (letter for MC, string for grid). */
function setExamResponse(qIdx, value) {
  const m = currentModule();
  m.responses[qIdx] = value;
  saveState();
}
function toggleExamFlag(qIdx) {
  const m = currentModule();
  m.flags[qIdx] = !m.flags[qIdx];
  saveState();
}

/* Grade a single question object against a stored response. */
function gradeExamQuestion(q, resp) {
  if (resp === undefined || resp === null || resp === '') return false;
  if (q.type === 'grid') return gradeGridAnswer(resp, q);
  return resp === q.answer;
}

/* Submit the current module: score it, set adaptivity, advance the phase. */
function submitModule() {
  const s = examSession();
  const m = currentModule();
  m.submitted = true;
  let correct = 0;
  m.questions.forEach((q, i) => { if (gradeExamQuestion(q, m.responses[i])) correct++; });
  m.correct = correct;
  m.accuracy = m.total ? correct / m.total : 0;

  // Record answers into skill stats (counts toward the weakness map).
  m.questions.forEach((q, i) => {
    const ok = gradeExamQuestion(q, m.responses[i]);
    recordAnswer(q.skill, ok, 0);
    if (m.responses[i] !== undefined && typeof recordQuestionHistory === 'function') recordQuestionHistory(q, ok);
    if (!ok && m.responses[i] !== undefined) {
      // log to mistake log
      STATE.mistakes.unshift({ id: 'm' + Date.now() + i, category: null, reflected: false,
        question: q.text, chosen: q.type === 'grid' ? String(m.responses[i] ?? '(blank)') : (m.responses[i] || '(blank)'),
        chosenText: '', correct: q.type === 'grid' ? String(q.answer) : q.answer,
        correctText: q.type === 'grid' ? '' : (q.choices.find(c => c.letter === q.answer) || {}).text || '',
        explanation: q.explanation, tip: q.tip, skill: q.skill,
        skillName: SKILLS[q.skill] ? SKILLS[q.skill].name : q.skill, when: Date.now() });
    }
  });
  if (STATE.mistakes.length > 200) STATE.mistakes.length = 200;

  // Simulated adaptivity: strong Module 1 → harder Module 2.
  const nextPhase = EXAM_CONFIG.order[EXAM_CONFIG.order.indexOf(s.phase) + 1] || 'done';
  if (s.phase === 'rw1') s.adaptive.rwHard = m.accuracy >= 0.6;
  if (s.phase === 'math1') s.adaptive.mathHard = m.accuracy >= 0.6;

  s.phase = nextPhase;
  if (nextPhase === 'rw2') s.modules.rw2 = newModuleState('rw2', s.adaptive.rwHard);
  else if (nextPhase === 'math1') s.modules.math1 = newModuleState('math1', false);
  else if (nextPhase === 'math2') s.modules.math2 = newModuleState('math2', s.adaptive.mathHard);
  else if (nextPhase === 'done') s.results = computeExamResults();
  markActiveToday();
  saveState();
  return s.phase;
}

function skipBreak() {
  const s = examSession();
  if (s.phase === 'break') { s.phase = 'math1'; s.modules.math1 = newModuleState('math1', false); saveState(); }
}

/* Unofficial estimated score. Section scores 200–800 from accuracy; total is
   their sum (400–1600). This is NOT an official SAT score. */
function estimateSectionScore(acc) {
  return Math.max(200, Math.min(800, Math.round((200 + 600 * acc) / 10) * 10));
}

function computeExamResults() {
  const s = examSession();
  const rw = ['rw1', 'rw2'].map(k => s.modules[k]).filter(Boolean);
  const math = ['math1', 'math2'].map(k => s.modules[k]).filter(Boolean);
  const rwCorrect = rw.reduce((a, m) => a + (m.correct || 0), 0);
  const rwTotal = rw.reduce((a, m) => a + m.total, 0);
  const mathCorrect = math.reduce((a, m) => a + (m.correct || 0), 0);
  const mathTotal = math.reduce((a, m) => a + m.total, 0);
  const rwAcc = rwTotal ? rwCorrect / rwTotal : 0;
  const mathAcc = mathTotal ? mathCorrect / mathTotal : 0;
  const rwScore = estimateSectionScore(rwAcc);
  const mathScore = estimateSectionScore(mathAcc);

  // Domain accuracy across this exam's questions.
  const domainTally = {};
  const skillTally = {};
  for (const m of [...rw, ...math]) {
    m.questions.forEach((q, i) => {
      const ok = gradeExamQuestion(q, m.responses[i]);
      const region = SKILLS[q.skill].region;
      const d = domainTally[region] || (domainTally[region] = { correct: 0, total: 0 });
      d.correct += ok ? 1 : 0; d.total += 1;
      const sk = skillTally[q.skill] || (skillTally[q.skill] = { correct: 0, total: 0 });
      sk.correct += ok ? 1 : 0; sk.total += 1;
    });
  }
  const weakSkills = Object.entries(skillTally)
    .map(([id, t]) => ({ id, acc: t.total ? t.correct / t.total : 0, total: t.total }))
    .filter(x => x.total >= 1).sort((a, b) => a.acc - b.acc).slice(0, 4);

  const answered = [...rw, ...math].reduce((a, m) => a + Object.keys(m.responses).length, 0);
  const totalQ = rwTotal + mathTotal;

  return {
    rwCorrect, rwTotal, mathCorrect, mathTotal, rwAcc, mathAcc,
    rwScore, mathScore, total: rwScore + mathScore,
    domainTally, weakSkills, answered, totalQ,
    adaptive: s.adaptive, style: s.style, finishedAt: Date.now(),
  };
}

function finishExamRewards() {
  const s = examSession();
  if (!s || !s.results || s._rewarded) return { xp: 0, sp: 0, levelUps: [] };
  const r = s.results;
  const acc = (r.rwCorrect + r.mathCorrect) / Math.max(1, r.totalQ);
  const xp = Math.round(200 + acc * 300 + (s.style === 'boss' ? 150 : 0));
  const sp = 8 + (acc >= 0.8 ? 4 : 0);
  earnSP(sp, 'exam');
  const levelUps = addXP(xp);
  if (!STATE.examStats) STATE.examStats = { taken: 0, bestTotal: 0, history: [] };
  STATE.examStats.taken += 1;
  STATE.examStats.bestTotal = Math.max(STATE.examStats.bestTotal, r.total);
  STATE.examStats.history.unshift({ total: r.total, rw: r.rwScore, math: r.mathScore, when: Date.now(), style: s.style });
  if (STATE.examStats.history.length > 20) STATE.examStats.history.length = 20;
  if (s.style === 'boss') { STATE.bossesDefeated['final-exam-realm'] = true; }
  s._rewarded = true;
  s._xp = xp; s._sp = sp;
  saveState();
  return { xp, sp, levelUps };
}

function clearExam() { STATE.examSession = null; saveState(); }
function hasExamInProgress() { return !!(STATE.examSession && STATE.examSession.phase !== 'done'); }
