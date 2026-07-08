/* SAT Quest — Reading & Writing bank loader. Combines the four domain files
   (information-ideas.js, craft-structure.js, expression-ideas.js,
   conventions.js — which must be loaded first) into one RW_BANK and exposes
   the pool/loader API used by quiz.js and exam.js.

   All items are ORIGINAL SAT-style practice written for this app; none are
   copied, paraphrased, or adapted from any official test or prep book. */

const RW_BANK = [].concat(RW_BANK_II, RW_BANK_CS, RW_BANK_EI, RW_BANK_SEC);

/* Sample questions for a skill/tier, allowing fallback to adjacent tiers if
   the bank is thin for one. */
function rwPool(skillId, tier) {
  let pool = RW_BANK.filter(q => q.skill === skillId && q.tier === tier);
  if (pool.length < 2) pool = RW_BANK.filter(q => q.skill === skillId);
  if (pool.length === 0) pool = RW_BANK.filter(q => SKILLS[q.skill] && SKILLS[q.skill].region === (SKILLS[skillId] || {}).region);
  return pool;
}

function rwQuestionsFor(skillId, tier) {
  return rwPool(skillId, tier).map(q => ({
    ...q,
    origin: 'authored',
    difficulty: TIER_LABEL[q.tier] || 'Medium',
    timeTarget: (TIME_TARGETS.rw[q.tier] || 60),
    tip: (typeof SKILL_TIPS !== 'undefined' && SKILL_TIPS[skillId]) ? SKILL_TIPS[skillId][0] : (typeof generalTip === 'function' ? generalTip() : ''),
  }));
}

/* Coverage summary — handy for tests and future authoring. */
function rwBankStats() {
  const bySkill = {}, byTier = { 1: 0, 2: 0, 3: 0 }, byDomain = {};
  for (const q of RW_BANK) {
    bySkill[q.skill] = bySkill[q.skill] || { 1: 0, 2: 0, 3: 0, total: 0 };
    bySkill[q.skill][q.tier]++; bySkill[q.skill].total++;
    byTier[q.tier]++;
    byDomain[q.domain] = (byDomain[q.domain] || 0) + 1;
  }
  return { total: RW_BANK.length, bySkill, byTier, byDomain };
}
