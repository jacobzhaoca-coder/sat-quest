/* SAT Quest — Upgrade & learning system.
   Players earn Skill Points (SP) from levels, bosses, and exams, then spend
   them in the Upgrade Hub. Upgrades are designed to support LEARNING (deeper
   explanations, hints, better analytics, mastery tracking) rather than to give
   an unfair advantage. Reads/writes the global STATE from state.js. */

const UPGRADES = {
  explanation: {
    name: 'Explanation Boost', icon: '📖', color: '#a78bfa',
    blurb: 'Unlock deeper, step-by-step explanations after every question.',
    tiers: [
      { cost: 3, label: 'Step-by-step math worked solutions and auto-expanded reasons.' },
      { cost: 6, label: 'Add a “key concept” recap and highlight the trap you avoided.' },
    ],
  },
  hint: {
    name: 'Hint System', icon: '💡', color: '#e8c06a',
    blurb: 'Reveal a strategy hint BEFORE you answer, so you learn the approach.',
    tiers: [
      { cost: 3, label: 'A “Reveal hint” button appears on every question.' },
      { cost: 7, label: 'Hints also point to the first step for grid-in math.' },
    ],
  },
  time: {
    name: 'Time Control', icon: '⏳', color: '#45e0a8',
    blurb: 'Earn small time extensions in timed practice, bosses, and exams.',
    tiers: [
      { cost: 4, label: '+5 seconds per question in all timed modes.' },
      { cost: 8, label: '+10 seconds per question in all timed modes.' },
      { cost: 12, label: '+15 seconds per question in all timed modes.' },
    ],
  },
  analytics: {
    name: 'Accuracy Tracker', icon: '📊', color: '#ff9d5c',
    blurb: 'Unlock enhanced analytics: per-difficulty accuracy and pacing detail.',
    tiers: [
      { cost: 5, label: 'Show accuracy by difficulty and average time on the Skills and Weekly screens.' },
    ],
  },
};

/* Skill Mastery is per-domain (region). Each region can be upgraded to boost
   its XP and accelerate mastery gain. */
const MASTERY_UPGRADE = {
  name: 'Skill Mastery', icon: '🏆', color: '#ffd98a',
  blurb: 'Invest in a domain to boost its XP rewards and speed mastery.',
  costPerTier: [4, 8, 14], // tier 1,2,3 costs
  bonusPerTier: 0.15,      // +15% region XP per tier
};

function upgLevel(cat) { return (STATE.upgrades && STATE.upgrades[cat]) || 0; }
function masteryUpgLevel(regionId) { return (STATE.upgrades && STATE.upgrades.mastery && STATE.upgrades.mastery[regionId]) || 0; }

/* Effect helpers used across gameplay. */
function hintUnlocked() { return upgLevel('hint') > 0; }
function hintCoversGrid() { return upgLevel('hint') >= 2; }
function explanationBoost() { return upgLevel('explanation'); }
function analyticsUnlocked() { return upgLevel('analytics') > 0; }
function timeBonusSeconds() { return upgLevel('time') * 5; }
function regionXpMultiplier(regionId) { return 1 + masteryUpgLevel(regionId) * MASTERY_UPGRADE.bonusPerTier; }

/* SP economy. */
function earnSP(n, reason) {
  STATE.skillPoints = (STATE.skillPoints || 0) + n;
  STATE.spEarnedTotal = (STATE.spEarnedTotal || 0) + n;
  return n;
}

function canAfford(cost) { return (STATE.skillPoints || 0) >= cost; }

function nextUpgradeCost(cat) {
  const lvl = upgLevel(cat);
  const def = UPGRADES[cat];
  if (!def || lvl >= def.tiers.length) return null;
  return def.tiers[lvl].cost;
}

function buyUpgrade(cat) {
  const cost = nextUpgradeCost(cat);
  if (cost === null || !canAfford(cost)) return false;
  STATE.skillPoints -= cost;
  STATE.upgrades[cat] = upgLevel(cat) + 1;
  saveState();
  return true;
}

function nextMasteryCost(regionId) {
  const lvl = masteryUpgLevel(regionId);
  if (lvl >= MASTERY_UPGRADE.costPerTier.length) return null;
  return MASTERY_UPGRADE.costPerTier[lvl];
}

function buyMastery(regionId) {
  const cost = nextMasteryCost(regionId);
  if (cost === null || !canAfford(cost)) return false;
  STATE.skillPoints -= cost;
  if (!STATE.upgrades.mastery) STATE.upgrades.mastery = {};
  STATE.upgrades.mastery[regionId] = masteryUpgLevel(regionId) + 1;
  saveState();
  return true;
}

/* Domain mastery LEVEL (0–5), earned through correct practice — separate from
   the paid Mastery upgrade. Tracks genuine improvement over time. */
function domainMastery(regionId) {
  const region = regionById(regionId);
  let correct = 0, seen = 0;
  for (const sk of region.skills) {
    const s = STATE.skillStats[sk];
    if (s) { correct += s.correct; seen += s.seen; }
  }
  const acc = seen ? correct / seen : 0;
  // Level requires both volume (correct answers) and accuracy gates.
  const volumeLevel = Math.min(5, Math.floor(correct / 12)); // every 12 correct
  const accGate = acc >= 0.85 ? 5 : acc >= 0.75 ? 4 : acc >= 0.65 ? 3 : acc >= 0.5 ? 2 : acc > 0 ? 1 : 0;
  const level = Math.min(volumeLevel, accGate);
  const nextAt = (level + 1) * 12;
  return { level, correct, seen, acc, progress: seen ? Math.min(1, (correct % 12) / 12) : 0, nextAt };
}

const MASTERY_TITLES = ['Untrained', 'Novice', 'Practiced', 'Skilled', 'Expert', 'Master'];
