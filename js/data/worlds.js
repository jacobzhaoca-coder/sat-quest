/* SAT Quest — region, level, and boss definitions (v2, expanded).
   8 domain regions × 10 levels = 80 regular levels, 8 domain bosses,
   2 section champions, and 1 final boss.

   All practice content in this app is ORIGINAL SAT-style material, written or
   generated from scratch. Domains, skills, question styles, and timing mirror
   the official Digital SAT for ALIGNMENT only — nothing is copied from College
   Board, Bluebook, Khan Academy, or any official source. See SAT_REALISM_AUDIT.md. */

/* Skill catalog. `section` is 'rw' or 'math'; `region` groups skills into a
   domain region. Names match official SAT skill categories for alignment. */
const SKILLS = {
  // Reading & Writing — Information and Ideas
  'central-ideas':   { name: 'Central Ideas and Details',   region: 'rw-ii', section: 'rw' },
  'evidence-text':   { name: 'Command of Evidence (Textual)', region: 'rw-ii', section: 'rw' },
  'evidence-quant':  { name: 'Command of Evidence (Quantitative)', region: 'rw-ii', section: 'rw' },
  'inferences':      { name: 'Inferences',                  region: 'rw-ii', section: 'rw' },
  // Reading & Writing — Craft and Structure
  'words-context':   { name: 'Words in Context',            region: 'rw-cs', section: 'rw' },
  'structure':       { name: 'Text Structure and Purpose',  region: 'rw-cs', section: 'rw' },
  'cross-text':      { name: 'Cross-Text Connections',      region: 'rw-cs', section: 'rw' },
  // Reading & Writing — Expression of Ideas
  'transitions':     { name: 'Transitions',                 region: 'rw-ei', section: 'rw' },
  'synthesis':       { name: 'Rhetorical Synthesis',        region: 'rw-ei', section: 'rw' },
  // Reading & Writing — Standard English Conventions
  'boundaries':      { name: 'Boundaries',                  region: 'rw-sec', section: 'rw' },
  'form-sense':      { name: 'Form, Structure, and Sense',  region: 'rw-sec', section: 'rw' },
  // Math — Algebra
  'linear-eq':       { name: 'Linear Equations in One Variable', region: 'm-alg', section: 'math' },
  'linear-func':     { name: 'Linear Functions',            region: 'm-alg', section: 'math' },
  'systems':         { name: 'Systems of Linear Equations', region: 'm-alg', section: 'math' },
  'inequalities':    { name: 'Linear Inequalities',         region: 'm-alg', section: 'math' },
  // Math — Advanced Math
  'equivalent':      { name: 'Equivalent Expressions',      region: 'm-adv', section: 'math' },
  'quadratics':      { name: 'Quadratic Equations',         region: 'm-adv', section: 'math' },
  'exponentials':    { name: 'Exponential Functions',       region: 'm-adv', section: 'math' },
  'radicals':        { name: 'Radicals and Rational Exponents', region: 'm-adv', section: 'math' },
  'functions':       { name: 'Function Notation',           region: 'm-adv', section: 'math' },
  // Math — Problem-Solving and Data Analysis
  'ratios':          { name: 'Ratios, Rates, and Proportions', region: 'm-psda', section: 'math' },
  'percentages':     { name: 'Percentages',                 region: 'm-psda', section: 'math' },
  'statistics':      { name: 'Mean, Median, and Spread',    region: 'm-psda', section: 'math' },
  'scatterplots':    { name: 'Two-Variable Data and Models', region: 'm-psda', section: 'math' },
  'probability':     { name: 'Probability',                 region: 'm-psda', section: 'math' },
  'sampling':        { name: 'Sample Statistics and Margin of Error', region: 'm-psda', section: 'math' },
  // Math — Geometry and Trigonometry
  'angles':          { name: 'Lines, Angles, and Triangles', region: 'm-geo', section: 'math' },
  'area-volume':     { name: 'Area and Volume',             region: 'm-geo', section: 'math' },
  'circles':         { name: 'Circles',                     region: 'm-geo', section: 'math' },
  'trig':            { name: 'Right Triangle Trigonometry', region: 'm-geo', section: 'math' },
};

/* Realistic per-question time targets (seconds), by section and difficulty.
   Digital SAT pacing averages ~71s per R&W question and ~95s per Math question;
   these targets bracket that average by difficulty. */
const TIME_TARGETS = {
  rw:   { 1: 45, 2: 60, 3: 80 },
  math: { 1: 60, 2: 90, 3: 120 },
};

const TIER_LABEL = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };

/* Build 10 levels for a region: L1–3 Easy, L4–7 Medium, L8–10 Hard.
   Early levels drill one skill; later levels combine skills; L10 is a Trial
   that mixes every skill in the region at hard difficulty. */
function buildLevels(regionId, section, names, skills) {
  const n = skills.length;
  return names.map((title, i) => {
    const num = i + 1;
    let tier, focus;
    if (num <= 3) { tier = 1; focus = [skills[i % n]]; }
    else if (num <= 7) { tier = 2; focus = [skills[(i) % n], skills[(i + 1) % n]]; }
    else if (num < 10) { tier = 3; focus = [skills[(i) % n], skills[(i + 1) % n], skills[(i + 2) % n]]; }
    else { tier = 3; focus = skills.slice(); } // Trial
    focus = [...new Set(focus)];
    return {
      id: `${regionId}-${num}`,
      num, tier, title,
      section, region: regionId,
      skills: focus,
      trial: num === 10,
      questionCount: num === 10 ? 8 : 6,
      mission: '', // filled below
    };
  });
}

const REGIONS = [
  {
    id: 'rw-ii', name: 'Information and Ideas', section: 'rw', icon: '📜',
    realm: 'The Archive Lowlands', tagline: 'Find what a text says — and what it must mean.',
    skills: ['central-ideas', 'evidence-text', 'evidence-quant', 'inferences'],
    names: ['Gate of First Readings', 'The Detail Thicket', "Meaning's Wellspring", 'Hall of Claims',
            'The Evidence Vault', "Chart-Reader's Loft", 'The Inference Bridge', 'Whispering Subtext',
            'The Synthesis Court', 'Trial of Ideas'],
    boss: { id: 'boss-rw-ii', name: 'The Misreader', icon: '👁️',
      intro: 'A drifting eye that thrives on answers pulled from thin air. Defeat it with what the text actually says.' },
  },
  {
    id: 'rw-cs', name: 'Craft and Structure', section: 'rw', icon: '🏛️',
    realm: 'The Lexicon Heights', tagline: 'Weigh word choice, purpose, and how texts connect.',
    skills: ['words-context', 'structure', 'cross-text'],
    names: ["Wordsmith's Path", 'The Precise Blade', 'Context Hollow', "Architect's Study",
            'The Purpose Spire', 'Rhetoric Ridge', 'Twin-Text Canyon', 'The Comparison Bridge',
            'Nuance Summit', 'Trial of Craft'],
    boss: { id: 'boss-rw-cs', name: 'The Vague Shade', icon: '🌫️',
      intro: 'A fog that blurs precise meaning into mush. Pin down the exact word and purpose to disperse it.' },
  },
  {
    id: 'rw-ei', name: 'Expression of Ideas', section: 'rw', icon: '🪶',
    realm: "The Composer's Vale", tagline: 'Connect ideas and hit a writing goal with the right sentence.',
    skills: ['transitions', 'synthesis'],
    names: ['The Linking Way', 'Bridge of Because', 'Contrast Crossing', "Notetaker's Camp",
            'The Goal Forge', 'Synthesis Springs', 'The Flowlands', 'Precision Pass',
            "Editor's Peak", 'Trial of Expression'],
    boss: { id: 'boss-rw-ei', name: 'The Disjointed', icon: '🧩',
      intro: 'A scattered specter of half-finished thoughts. Only well-linked, goal-focused sentences can bind it.' },
  },
  {
    id: 'rw-sec', name: 'Standard English Conventions', section: 'rw', icon: '⚖️',
    realm: 'The Grammar Marches', tagline: 'Master punctuation, structure, and agreement.',
    skills: ['boundaries', 'form-sense'],
    names: ['Boundary Gate', 'The Comma Fields', 'Semicolon Bridge', 'Clause Keep',
            'Agreement Hall', 'The Tense Timeline', 'Pronoun Pass', "Modifier's Maze",
            'Convention Citadel', 'Trial of Conventions'],
    boss: { id: 'boss-rw-sec', name: 'The Comma-Splice Wraith', icon: '👻',
      intro: 'A specter woven from every run-on sentence ever written. Enforce the laws of the sentence to banish it.' },
  },
  {
    id: 'm-alg', name: 'Algebra', section: 'math', icon: '⚔️',
    realm: 'The Linear Expanse', tagline: 'Solve, graph, and model with lines and systems.',
    skills: ['linear-eq', 'linear-func', 'systems', 'inequalities'],
    names: ['Plains of One Variable', 'The Balance Point', 'Slope Ridge', 'Line-Crossing Marsh',
            'The Systems Gate', 'Inequality Fortress', 'Word-Problem Wilds', 'The Modeling Fields',
            'Abstraction Peak', 'Trial of Algebra'],
    boss: { id: 'boss-m-alg', name: 'The Linear Golem', icon: '🗿',
      intro: 'Assembled from unsolved equations. Every careless sign error makes it stronger.' },
  },
  {
    id: 'm-adv', name: 'Advanced Math', section: 'math', icon: '🔮',
    realm: 'The Nonlinear Depths', tagline: 'Bend expressions, quadratics, and functions to your will.',
    skills: ['equivalent', 'quadratics', 'exponentials', 'radicals', 'functions'],
    names: ['Expression Caverns', 'The Factoring Forge', 'Quadratic Hollow', 'Vertex Vale',
            'The Growth Chamber', 'Exponential Rise', 'Radical Springs', 'Function Machine',
            'Polynomial Peak', 'Trial of Advanced Math'],
    boss: { id: 'boss-m-adv', name: 'The Parabola Hydra', icon: '🐉',
      intro: 'A many-headed curve; cut one root and another appears. Factor precisely to fell it.' },
  },
  {
    id: 'm-psda', name: 'Problem-Solving and Data Analysis', section: 'math', icon: '📊',
    realm: 'The Data Bazaar', tagline: 'Reason with ratios, percentages, statistics, and data.',
    skills: ['ratios', 'percentages', 'statistics', 'scatterplots', 'probability', 'sampling'],
    names: ['Market of Ratios', 'Rate Road', 'The Percent Exchange', 'Proportion Plaza',
            "Statistician's Tent", 'The Median Well', 'Scatterplot Observatory', 'Probability Parlor',
            "Sampler's Summit", 'Trial of Data'],
    boss: { id: 'boss-m-psda', name: 'The Data Djinn', icon: '🔮',
      intro: 'A trickster of averages and rates who hides the group a question really asks about. Read carefully.' },
  },
  {
    id: 'm-geo', name: 'Geometry and Trigonometry', section: 'math', icon: '🏰',
    realm: 'The Geometric Reach', tagline: 'Measure angles, area, circles, and right triangles.',
    skills: ['angles', 'area-volume', 'circles', 'trig'],
    names: ['The Angle Gardens', 'Triangle Trail', 'Parallel Pass', 'Area Keep',
            'Volume Vault', 'Circle Sanctum', 'Arc & Sector Span', 'The Trig Ascent',
            'Coordinate Cliffs', 'Trial of Geometry'],
    boss: { id: 'boss-m-geo', name: 'The Geometric Titan', icon: '🗿',
      intro: 'A colossus of stone angles. Confuse radius with diameter and it crushes you; measure true and it falls.' },
  },
];

/* Attach missions to levels (short, skill-aware). */
const MISSION_BY_TIER = {
  1: 'Warm up on the fundamentals of this skill.',
  2: 'Combine skills and handle SAT-style wording.',
  3: 'Face trickier, multi-step SAT reasoning.',
};
REGIONS.forEach(r => {
  r.levels = buildLevels(r.id, r.section, r.names, r.skills);
  r.levels.forEach(lv => {
    const skillNames = lv.skills.map(s => SKILLS[s].name).join(' · ');
    lv.mission = lv.trial
      ? `A hard mixed trial across all of ${r.name}. Clear it to challenge the region boss.`
      : `${MISSION_BY_TIER[lv.tier]} Focus: ${skillNames}.`;
    lv.boss = r.boss.id;
  });
  // Add timing + hp to bosses
  Object.assign(r.boss, { section: r.section, region: r.id, hp: 120, questions: 10,
    timePerQ: r.section === 'rw' ? 55 : 80 });
});

/* Section champions unlock after all 4 domain bosses in that section fall. */
const SECTION_BOSSES = [
  { id: 'boss-rw-champion', name: 'Reading & Writing Champion', icon: '📕', section: 'rw',
    intro: 'The guardian of the verbal realms. A mixed gauntlet of every Reading & Writing skill.',
    hp: 160, questions: 12, timePerQ: 55,
    requires: ['boss-rw-ii', 'boss-rw-cs', 'boss-rw-ei', 'boss-rw-sec'] },
  { id: 'boss-math-champion', name: 'Math Champion', icon: '📐', section: 'math',
    intro: 'The guardian of the numbered realms. A mixed gauntlet of every Math skill.',
    hp: 160, questions: 12, timePerQ: 85,
    requires: ['boss-m-alg', 'boss-m-adv', 'boss-m-psda', 'boss-m-geo'] },
];

const FINAL_BOSS = {
  id: 'boss-final', name: 'The Digital SAT Champion', icon: '🏆', section: 'mixed',
  intro: 'The final trial: a full-length mixed gauntlet of both sections at their hardest.',
  hp: 200, questions: 14, timePerQ: 70,
  requires: ['boss-rw-champion', 'boss-math-champion'],
};

/* Rank titles earned by player level (every 2 levels advances a rank). */
const RANKS = [
  'Novice', 'Apprentice', 'Adept', 'Scholar', 'Strategist',
  'Sage', 'Master', 'Grandmaster', 'Legend', 'Digital SAT Champion',
];

const HERO_CLASSES = [
  { id: 'wizard', name: 'Word Wizard',  icon: '🧙', blurb: 'Reads between every line.' },
  { id: 'knight', name: 'Math Knight',  icon: '⚔️', blurb: 'Solves with unbreakable precision.' },
  { id: 'rogue',  name: 'Logic Rogue',  icon: '🗝️', blurb: 'Finds the shortcut in every problem.' },
  { id: 'sage',   name: 'Scholar Sage', icon: '🦉', blurb: 'Balanced mastery of both sections.' },
];

const PASS_RATIO = 0.7;

/* ---- Lookups ---- */
function levelById(id) {
  for (const r of REGIONS) {
    const lv = r.levels.find(l => l.id === id);
    if (lv) return lv;
  }
  return null;
}

function regionById(id) { return REGIONS.find(r => r.id === id); }

function bossById(id) {
  if (id === FINAL_BOSS.id) return FINAL_BOSS;
  const sec = SECTION_BOSSES.find(b => b.id === id);
  if (sec) return sec;
  const r = REGIONS.find(x => x.boss.id === id);
  return r ? r.boss : null;
}

function allLevels() {
  const out = [];
  for (const r of REGIONS) for (const lv of r.levels) out.push(lv);
  return out;
}

function allBosses() {
  return [...REGIONS.map(r => r.boss), ...SECTION_BOSSES, FINAL_BOSS];
}

function skillsForRegion(regionId) {
  return regionById(regionId).skills;
}

/* Section grouping for the map: two "sections" each holding four regions. */
const SECTIONS = [
  { id: 'rw', name: 'Reading & Writing', icon: '🕯️', tagline: 'The verbal realms',
    regions: ['rw-ii', 'rw-cs', 'rw-ei', 'rw-sec'], champion: 'boss-rw-champion' },
  { id: 'math', name: 'Math', icon: '🗡️', tagline: 'The numbered realms',
    regions: ['m-alg', 'm-adv', 'm-psda', 'm-geo'], champion: 'boss-math-champion' },
];
