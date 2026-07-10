/* SAT Quest — assembles quizzes for levels, bosses, review dungeons, and the
   daily challenge tower from the two question sources (procedural math +
   authored R&W). */

/* Guarded bridges to the runthrough anti-repeat layer in state.js (kept
   optional so quiz.js can be unit-tested without the full state module). */
const _rtSeen = (q) => (typeof runthroughHasSeen === 'function') ? runthroughHasSeen(q) : false;
const _noteRun = (qs) => { if (typeof noteSeenInRunthrough === 'function') noteSeenInRunthrough(qs); };

/* A math question that may be multiple-choice, a grid-in (student-produced
   response), or a visual (SVG) question — mixing the three the way the real
   SAT Math section mixes MC and student-produced response. */
function mixedMathQuestion(skillId, tier, opts = {}) {
  const r = Math.random();
  const allowGrid = opts.allowGrid !== false;
  const allowVisual = opts.allowVisual !== false;
  if (allowVisual && hasVisual(skillId) && r < 0.22) {
    const v = generateVisualQuestion(skillId, tier);
    if (v) return v;
  }
  if (allowGrid && hasGrid(skillId) && r < 0.5) {
    const g = generateGridQuestion(skillId, tier);
    if (g) return g;
  }
  return generateMathQuestion(skillId, tier);
}

function makeQuestion(skillId, tier, opts = {}) {
  const section = SKILLS[skillId] ? SKILLS[skillId].section : 'math';
  const exclude = opts.exclude || new Set();
  if (section === 'math') {
    // Generated math: random parameters can occasionally collide — retry a few
    // times rather than serve the identical question twice in one quiz, and
    // (unless this is a review) prefer a signature not yet seen this runthrough.
    let q = mixedMathQuestion(skillId, tier, opts);
    for (let a = 0; a < 10 && (exclude.has(q.text) || (!opts.review && _rtSeen(q))); a++) {
      q = mixedMathQuestion(skillId, tier, opts);
    }
    return q;
  }
  // Authored R&W: prefer this skill at this tier, then widen (same skill other
  // tiers, then same region) before ever repeating a text within one quiz.
  // Passes: runthrough-unseen → not-recent → anything.
  const region = SKILLS[skillId] ? SKILLS[skillId].region : null;
  const layers = rwLevelLayers([skillId], tier, region);
  const flat = layers.flat();
  if (flat.length === 0) return generateMathQuestion('linear-eq', tier); // safety net
  const recent = recentRWSet();
  const passes = opts.review ? ['any'] : ['unseen', 'fresh', 'any'];
  for (const pass of passes) {
    for (const layer of layers) {
      const candidates = layer.filter(q => {
        if (exclude.has(q.text)) return false;
        if (pass === 'unseen' && (_rtSeen(q) || recent.has(q.text))) return false;
        if (pass === 'fresh' && recent.has(q.text)) return false;
        return true;
      });
      if (candidates.length) {
        const q = candidates[Math.floor(Math.random() * candidates.length)];
        noteServedRW([q]);
        return q;
      }
    }
  }
  // Every authored item is already in this quiz — a repeat is unavoidable.
  return flat[Math.floor(Math.random() * flat.length)];
}

/* ---- Anti-repeat memory for authored R&W items ----
   Remembers the last ~24 authored questions served so consecutive plays and
   neighboring levels prefer material the player hasn't just seen. Tracking
   only — it never blocks an item outright once the pool is exhausted. */
const RECENT_RW_CAP = 24;
function recentRWSet() {
  if (typeof STATE === 'undefined' || !STATE) return new Set();
  return new Set(STATE.recentRW || []);
}
function noteServedRW(qs) {
  if (typeof STATE === 'undefined' || !STATE) return;
  STATE.recentRW = STATE.recentRW || [];
  for (const q of qs) {
    if (!q || q.origin !== 'authored') continue;
    const i = STATE.recentRW.indexOf(q.text);
    if (i !== -1) STATE.recentRW.splice(i, 1);
    STATE.recentRW.push(q.text);
  }
  if (STATE.recentRW.length > RECENT_RW_CAP) STATE.recentRW.splice(0, STATE.recentRW.length - RECENT_RW_CAP);
}

/* Layered pool for an R&W level. Widening order:
     0: the level's skills at the level's tier (the ideal material)
     1: the same skills at other tiers
     2: other skills from the same region (any tier)
   A level only repeats a question if all three layers together hold fewer
   items than the quiz needs. */
function rwLevelLayers(skills, tier, regionId) {
  const seen = new Set();
  const layers = [[], [], []];
  const add = (q, layer) => { if (!seen.has(q.text)) { seen.add(q.text); layers[layer].push(q); } };
  for (const s of skills) for (const q of rwQuestionsFor(s, tier)) add(q, q.difficulty === TIER_LABEL[tier] ? 0 : 1);
  // Procedurally generated R&W (transitions, words-in-context) deepens the pool
  // for the skills that support it. Added to the widen layer so authored items
  // at the level's tier stay the first choice.
  if (typeof rwGeneratedFor === 'function') {
    for (const s of skills) if (typeof rwHasGenerator === 'function' && rwHasGenerator(s)) {
      for (const q of rwGeneratedFor(s, 8)) add(q, 1);
    }
  }
  for (const s of skills) for (const t of [1, 2, 3]) {
    if (t === tier) continue;
    for (const q of rwQuestionsFor(s, t)) add(q, 1);
  }
  const regionSkills = (typeof skillsForRegion === 'function' ? skillsForRegion(regionId) : []).filter(s => !skills.includes(s));
  for (const s of regionSkills) for (const t of [tier, 1, 2, 3]) for (const q of rwQuestionsFor(s, t)) add(q, 2);
  return layers;
}

/* Draw n unique questions from ordered layers, preferring earlier layers and
   items not served recently. Cycles fairly only if the layers are exhausted. */
function drawFromLayers(layers, n) {
  const recent = recentRWSet();
  const out = [];
  const chosen = new Set();
  for (const pass of ['unseen', 'fresh', 'any']) {
    for (const layer of layers) {
      for (const q of shuffleQuestions(layer)) {
        if (out.length >= n) break;
        if (chosen.has(q.text)) continue;
        if (pass === 'unseen' && (_rtSeen(q) || recent.has(q.text))) continue;
        if (pass === 'fresh' && recent.has(q.text)) continue;
        chosen.add(q.text);
        out.push(q);
      }
    }
    if (out.length >= n) break;
  }
  // Bank genuinely exhausted: cycle fairly across everything we have.
  const all = layers.flat();
  let i = 0;
  while (out.length < n && all.length) out.push(all[i++ % all.length]);
  return shuffleQuestions(out);
}

function buildLevelQuiz(levelId) {
  const lv = levelById(levelId);
  const skills = lv.skills;
  const n = lv.questionCount || 6;
  let questions = [];

  if (lv.section === 'math') {
    const used = new Set();
    for (let i = 0; i < n; i++) {
      const skill = skills[i % skills.length];
      const q = makeQuestion(skill, lv.tier, { exclude: used });
      used.add(q.text);
      questions.push(q);
    }
    questions = shuffleQuestions(questions);
  } else {
    questions = drawFromLayers(rwLevelLayers(skills, lv.tier, lv.region), n);
    noteServedRW(questions);
  }
  _noteRun(questions); // fresh practice: remember these for the runthrough
  debugQuizReport('level ' + levelId, questions);
  return questions;
}

/* Dev-only transparency: set window.SATQ_DEBUG = true in the console to log
   what each quiz was built from (ids, types, origins, duplicate detection). */
function debugQuizReport(label, qs) {
  const on = (typeof window !== 'undefined' && window.SATQ_DEBUG);
  if (!on) return;
  const rows = qs.map(q => ({
    id: q.id || '(generated)',
    skill: q.skill,
    type: q.type === 'grid' ? 'grid-in' : (q.visual ? 'visual' : 'choice'),
    origin: q.origin || 'generated',
    difficulty: q.difficulty,
    text: (q.text || '').slice(0, 60).replace(/\n/g, ' ') + '…',
  }));
  const texts = qs.map(q => q.text);
  const dupes = texts.filter((t, i) => texts.indexOf(t) !== i).length;
  console.groupCollapsed(`[SATQ] ${label} — ${qs.length} questions, ${new Set(texts).size} unique${dupes ? `, ${dupes} DUPLICATES` : ''}`);
  console.table(rows);
  console.groupEnd();
}

function buildBossQuiz(bossId) {
  const boss = bossById(bossId);
  const n = boss.questions;
  const questions = [];

  // Determine the skill pool for this boss.
  let skillPool;
  if (boss.id === FINAL_BOSS.id) {
    skillPool = Object.keys(SKILLS);
  } else if (boss.section && SECTION_BOSSES.some(b => b.id === boss.id)) {
    skillPool = Object.keys(SKILLS).filter(s => SKILLS[s].section === boss.section);
  } else {
    // domain boss
    const region = REGIONS.find(r => r.boss.id === boss.id);
    skillPool = region.skills;
  }

  const used = new Set();
  for (let i = 0; i < n; i++) {
    const skill = skillPool[i % skillPool.length];
    // Escalating difficulty; final and champions lean harder.
    let tier;
    if (boss.id === FINAL_BOSS.id) tier = i < n / 3 ? 2 : 3;
    else if (SECTION_BOSSES.some(b => b.id === boss.id)) tier = (i % 3) + 1 < 3 ? 2 : 3;
    else tier = (i % 3) + 1;
    const q = makeQuestion(skill, tier, { exclude: used });
    used.add(q.text);
    questions.push(q);
  }
  const out = shuffleQuestions(questions);
  _noteRun(out); // bosses are fresh practice too
  debugQuizReport('boss ' + bossId, out);
  return out;
}

function shuffleQuestions(qs) {
  const a = qs.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

/* Review Dungeon — spaced repetition. Prefers SPECIFIC questions the player is
   due to review (exact missed R&W items re-served by id, ranked most-urgent
   first), then fills the rest with weak-skill practice biased toward skills
   that have due items. Every question carries a `reviewReason` label so the UI
   can explain why it appeared. Review deliberately repeats, so — unlike fresh
   practice — it does NOT mark items seen for the runthrough. */
function buildReviewQuiz(skillIds, count = 6, tier = null) {
  const out = [];
  const usedText = new Set();
  const due = (typeof dueReviewQuestions === 'function') ? dueReviewQuestions(60) : [];

  // 1) Exact missed authored R&W items, re-served by id, most urgent first.
  const authoredCap = Math.max(1, Math.round(count * 0.6));
  for (const d of due) {
    if (out.length >= authoredCap) break;
    if (!d.isAuthored || typeof rwById !== 'function') continue;
    const q = rwById(d.key);
    if (!q || usedText.has(q.text)) continue;
    q.reviewReason = d.reason; q.reviewTag = 'missed';
    usedText.add(q.text); out.push(q);
  }

  // 2) Fill with weak-skill practice, biased toward skills that have due items
  //    (this is how due MATH shows up — a fresh instance in the same skill).
  const dueSkills = [...new Set(due.map(d => d.skill).filter(Boolean))];
  const base = (skillIds && skillIds.length) ? skillIds : Object.keys(SKILLS);
  const fillSkills = [...new Set([...dueSkills, ...base])].filter(s => SKILLS[s]);
  let gi = 0, guard = 0;
  while (out.length < count && guard++ < count * 12 && fillSkills.length) {
    const skill = fillSkills[gi++ % fillSkills.length];
    const t = tier || pick2(2, 3);
    const q = makeQuestion(skill, t, { exclude: usedText, review: true });
    if (usedText.has(q.text)) continue;
    usedText.add(q.text);
    if (!q.reviewReason) {
      const acc = (typeof skillAccuracy === 'function') ? skillAccuracy(skill) : null;
      if (dueSkills.includes(skill)) { q.reviewReason = 'Due because you missed this skill recently'; q.reviewTag = 'due-skill'; }
      else if (acc !== null && acc < 0.7) { q.reviewReason = `Weak skill: ${SKILLS[skill].name}`; q.reviewTag = 'weak'; }
      else { q.reviewReason = 'Mastery check'; q.reviewTag = 'check'; }
    }
    out.push(q);
  }
  const result = shuffleQuestions(out);
  debugQuizReport('review', result);
  return result;
}
function pick2(a, b) { return Math.random() < 0.5 ? a : b; }

/* Daily challenge tower: endless floors of escalating difficulty, mixed skills.
   Floor 1–3 easy, 4–7 medium, 8+ hard. Returns a single question for a floor. */
function buildTowerQuestion(floor) {
  const skills = Object.keys(SKILLS);
  const tier = floor <= 3 ? 1 : floor <= 7 ? 2 : 3;
  const wantLabel = TIER_LABEL[tier];
  // Try a few times to serve a question whose difficulty matches the floor's
  // tier, so the tower's escalating difficulty stays honest even for authored
  // R&W skills that are thin at some tiers.
  let q = null;
  for (let attempt = 0; attempt < 6; attempt++) {
    const skill = skills[Math.floor(Math.random() * skills.length)];
    q = makeQuestion(skill, tier);
    if (q.difficulty === wantLabel) { _noteRun(q); return q; }
  }
  _noteRun(q); // tower floors are fresh practice
  return q;
}
