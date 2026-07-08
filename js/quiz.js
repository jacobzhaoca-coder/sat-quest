/* SAT Quest — assembles quizzes for levels, bosses, review dungeons, and the
   daily challenge tower from the two question sources (procedural math +
   authored R&W). */

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
  if (section === 'math') return mixedMathQuestion(skillId, tier, opts);
  const pool = rwQuestionsFor(skillId, tier);
  if (pool.length === 0) return generateMathQuestion('linear-eq', tier); // safety net
  return pool[Math.floor(Math.random() * pool.length)];
}

/* Sample n items from an authored pool without repeats where possible. */
function sampleNoRepeat(pool, n) {
  const bag = pool.slice();
  const out = [];
  const usedTexts = new Set();
  while (out.length < n) {
    if (bag.length === 0) bag.push(...pool);
    const i = Math.floor(Math.random() * bag.length);
    const item = bag.splice(i, 1)[0];
    if (usedTexts.has(item.text) && usedTexts.size < pool.length) continue;
    usedTexts.add(item.text);
    out.push(item);
  }
  return out;
}

function buildLevelQuiz(levelId) {
  const lv = levelById(levelId);
  const skills = lv.skills;
  const n = lv.questionCount || 6;
  const questions = [];

  if (lv.section === 'math') {
    for (let i = 0; i < n; i++) {
      const skill = skills[i % skills.length];
      questions.push(mixedMathQuestion(skill, lv.tier));
    }
  } else {
    let pool = [];
    for (const s of skills) pool = pool.concat(rwQuestionsFor(s, lv.tier));
    const tierMatched = pool.filter(q => q.difficulty === TIER_LABEL[lv.tier]);
    const base = tierMatched.length >= n ? tierMatched : pool;
    questions.push(...sampleNoRepeat(base, n));
  }
  return questions;
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

  for (let i = 0; i < n; i++) {
    const skill = skillPool[i % skillPool.length];
    // Escalating difficulty; final and champions lean harder.
    let tier;
    if (boss.id === FINAL_BOSS.id) tier = i < n / 3 ? 2 : 3;
    else if (SECTION_BOSSES.some(b => b.id === boss.id)) tier = (i % 3) + 1 < 3 ? 2 : 3;
    else tier = (i % 3) + 1;
    questions.push(makeQuestion(skill, tier));
  }
  return shuffleQuestions(questions);
}

function shuffleQuestions(qs) {
  const a = qs.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

/* Review dungeon: pull questions from a set of (usually weak) skills. */
function buildReviewQuiz(skillIds, count = 6, tier = null) {
  const questions = [];
  const skills = skillIds.length ? skillIds : Object.keys(SKILLS);
  for (let i = 0; i < count; i++) {
    const skill = skills[i % skills.length];
    const t = tier || pick2(2, 3);
    questions.push(makeQuestion(skill, t));
  }
  return shuffleQuestions(questions);
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
    if (q.difficulty === wantLabel) return q;
  }
  return q;
}
