/* SAT Quest — concise concept mini-lessons, one per skill. Loaded after worlds.js.
   These are short teaching cards (Concept / When the SAT tests it / Common trap /
   Strategy) shown in the Skill Clinic and before a targeted drill. Original
   study guidance in the app's own words — no official text, passages, or
   copyrighted explanations. Keep each field to one or two plain sentences so the
   card stays readable on a phone. Keyed by the same skill ids as SKILLS. */

const MINI_LESSONS = {
  /* ---------- Reading & Writing ---------- */
  'central-ideas': {
    concept: 'The central idea is the single main point the whole text supports — not any one detail.',
    when: 'Questions ask for the “main idea,” “central claim,” or the best summary of a passage.',
    trap: 'A choice that is true but only covers one detail, or one that overstates the point.',
    strategy: 'Ask “what is this whole text mostly about?” in your own words, then pick the choice closest to it.',
  },
  'evidence-text': {
    concept: 'Textual evidence is the specific statement that would most directly support or weaken a given claim.',
    when: 'A claim or hypothesis is given, and you choose the finding that best supports it.',
    trap: 'True-sounding details that are irrelevant to the exact claim being made.',
    strategy: 'Restate the claim, then keep only the choice that speaks to that exact point.',
  },
  'evidence-quant': {
    concept: 'Quantitative evidence uses numbers from a graph or table to back a claim.',
    when: 'A figure is described and you complete a sentence with data that fits.',
    trap: 'A choice that misreads the numbers or states a trend the data does not show.',
    strategy: 'Read the actual values first; the answer must match them exactly, not just sound reasonable.',
  },
  'inferences': {
    concept: 'An inference is what must logically follow from the text — no more, no less.',
    when: 'Questions ask what “can most reasonably be concluded” or complete a logical blank.',
    trap: 'Choices that go beyond the text or add information that was never stated.',
    strategy: 'Pick the choice the text guarantees; if it needs an outside assumption, eliminate it.',
  },
  'words-context': {
    concept: 'The right word fits the exact meaning and tone the sentence needs.',
    when: 'A blank or underlined word must be filled with the most logical word.',
    trap: 'A word that is a synonym in general but wrong for this specific sentence.',
    strategy: 'Predict your own word for the blank first, then match it to the closest choice.',
  },
  'structure': {
    concept: 'Text structure is how a passage is organized to achieve its purpose.',
    when: 'Questions ask about the “main purpose” or how the text is put together.',
    trap: 'Choices that describe something the text mentions but that isn’t its overall job.',
    strategy: 'Summarize what the passage does as a whole (contrast, explain, correct…), then match it.',
  },
  'cross-text': {
    concept: 'Cross-text questions compare how two texts relate — agree, qualify, or disagree.',
    when: 'Two short texts are given and you judge how one author would respond to the other.',
    trap: 'Choices that overstate the disagreement or ignore what the second text actually grants.',
    strategy: 'Name each author’s position in a phrase, then find the choice that captures the relationship.',
  },
  'transitions': {
    concept: 'A transition signals the logical relationship between two ideas.',
    when: 'A blank between sentences must be filled with the right connecting word.',
    trap: 'Picking a familiar transition without checking the actual relationship.',
    strategy: 'Name the relationship first (contrast? cause? addition?), then choose a word that fits it.',
  },
  'synthesis': {
    concept: 'Rhetorical synthesis uses given notes to meet a stated writing goal.',
    when: 'You’re given bullet notes and a specific goal, and pick the sentence that best meets it.',
    trap: 'A true sentence that ignores the stated goal (e.g., states a fact but not the required comparison).',
    strategy: 'Underline the goal, then keep only the choice that does exactly that.',
  },
  'boundaries': {
    concept: 'Boundaries are about joining or separating clauses with correct punctuation.',
    when: 'Choices differ only in commas, periods, semicolons, or colons.',
    trap: 'Comma splices — joining two complete sentences with only a comma.',
    strategy: 'Test whether each side of the mark is a complete sentence; two complete ones need a period or semicolon.',
  },
  'form-sense': {
    concept: 'Form, structure, and sense covers verb agreement, tense, and clear phrasing.',
    when: 'Choices differ in verb form, subject–verb agreement, or modifier placement.',
    trap: 'A verb that agrees with a nearby noun instead of the true subject.',
    strategy: 'Find the real subject, match the verb to it, and keep tense consistent with the sentence.',
  },
  /* ---------- Math — Algebra ---------- */
  'linear-eq': {
    concept: 'A linear equation is solved by undoing operations to isolate the variable.',
    when: 'Solve for x, or find a value that makes an equation true.',
    trap: 'Sign errors when moving a term across the equals sign, or forgetting to divide the whole side.',
    strategy: 'Do the same operation to both sides, one step at a time, and check by substituting back.',
  },
  'linear-func': {
    concept: 'A line is y = mx + b: m is the rate of change, b is the starting value.',
    when: 'Find slope, intercept, or the equation from points, a table, or a context.',
    trap: 'Swapping slope and intercept, or reading the y-intercept as the wrong point.',
    strategy: 'Slope = change in y over change in x; the intercept is the value when x = 0.',
  },
  'systems': {
    concept: 'A system’s solution is the point that satisfies both equations at once.',
    when: 'Solve two equations together, or interpret where two lines meet in a context.',
    trap: 'Setting up the wrong quantity — e.g., total cost vs. cost per item.',
    strategy: 'Define what each variable means, then eliminate or substitute; check the point in both equations.',
  },
  'inequalities': {
    concept: 'Inequalities work like equations, but the direction flips when you multiply or divide by a negative.',
    when: 'Solve an inequality, or model a limit like “no more than” or “at least.”',
    trap: 'Forgetting to flip the sign, or mismodeling “at most/at least.”',
    strategy: 'Solve as if it were an equation, flip if you divide by a negative, and re-read the wording.',
  },
  /* ---------- Math — Advanced Math ---------- */
  'equivalent': {
    concept: 'Equivalent expressions are just different-looking forms of the same thing.',
    when: 'Rewrite, factor, distribute, or combine like terms.',
    trap: 'Adding coefficients that should multiply, or dropping a sign while distributing.',
    strategy: 'Work carefully term by term; you can check by plugging in a small number for x.',
  },
  'quadratics': {
    concept: 'Quadratics come in standard, factored, and vertex forms — each reveals something different.',
    when: 'Find roots, the vertex, the axis of symmetry, or rewrite the form.',
    trap: 'Confusing roots with the vertex, or sign errors in the factors.',
    strategy: 'Match the form to what’s asked: factored gives roots, vertex form gives the max/min.',
  },
  'exponentials': {
    concept: 'Exponential models multiply by a fixed factor each step: y = a·b^x.',
    when: 'Growth/decay, half-life, or interpreting a base and starting amount.',
    trap: 'Treating exponential change as linear (adding instead of multiplying).',
    strategy: 'Identify a (start) and b (multiplier); b > 1 grows, 0 < b < 1 decays.',
  },
  'radicals': {
    concept: 'Radicals and rational exponents are two ways to write the same root.',
    when: 'Simplify roots or rewrite x^(1/n) form.',
    trap: 'Forgetting that squaring can introduce answers that don’t actually work.',
    strategy: 'Convert between root and exponent form, and check solutions in the original equation.',
  },
  'functions': {
    concept: 'Function notation f(x) means “apply the rule f to the input x.”',
    when: 'Evaluate f(a), compose f(g(x)), or read a function from a table.',
    trap: 'For f(g(x)), applying f before g, or misreading the input.',
    strategy: 'Work inside-out: compute the inner function first, then feed its result into the outer one.',
  },
  /* ---------- Math — Problem-Solving and Data Analysis ---------- */
  'ratios': {
    concept: 'Ratios, rates, and proportions compare quantities that scale together.',
    when: 'Scale a recipe, convert units, or split a total in a given ratio.',
    trap: 'Adding instead of scaling, or flipping the rate upside down.',
    strategy: 'Set up a proportion with matching units on top and bottom, then cross-multiply.',
  },
  'percentages': {
    concept: 'Percent means “per hundred”; percent change compares the change to the original.',
    when: 'Percent of a number, percent change, or successive percent changes.',
    trap: 'Mixing up “percent of” with “percent change,” or dividing by the wrong base.',
    strategy: 'Percent change = (new − old) ÷ old. For successive changes, multiply the factors.',
  },
  'statistics': {
    concept: 'Mean, median, and range each describe a data set differently.',
    when: 'Compute or compare center and spread, or judge the effect of a new value.',
    trap: 'Assuming the mean and median move together — an outlier pulls the mean, not the median.',
    strategy: 'Mean uses every value; median is the middle. Ask which one an outlier would move.',
  },
  'scatterplots': {
    concept: 'A line of best fit models the trend in two-variable data; residuals are the misses.',
    when: 'Predict from a best-fit line, read a residual, or describe an association.',
    trap: 'Reading a single point as the trend, or confusing the residual with the predicted value.',
    strategy: 'Use the line’s equation to predict; residual = actual − predicted.',
  },
  'probability': {
    concept: 'Probability is favorable outcomes over total outcomes, often read from a table.',
    when: 'Simple probability, complements, or conditional probability from a two-way table.',
    trap: 'Using the grand total when the question restricts you to one row or group.',
    strategy: 'Identify the correct total first; for “given,” restrict to that group before dividing.',
  },
  'sampling': {
    concept: 'A valid conclusion depends on a random, representative sample; margin of error frames the estimate.',
    when: 'Judge whether a survey supports a claim, or interpret a margin of error.',
    trap: 'Over-generalizing from a biased sample, or treating the estimate as exact.',
    strategy: 'Check that the sample is random and fits the population; read the margin as a range.',
  },
  /* ---------- Math — Geometry and Trigonometry ---------- */
  'angles': {
    concept: 'Lines, angles, and triangles follow fixed rules (angle sums, parallel-line angles, similarity).',
    when: 'Find a missing angle or side using triangle or line relationships.',
    trap: 'Assuming a figure is to scale, or mismatching corresponding parts of similar triangles.',
    strategy: 'Label what you know, apply the rule (angles in a triangle sum to 180°), and set up an equation.',
  },
  'area-volume': {
    concept: 'Area and volume come from formulas tied to a shape’s dimensions.',
    when: 'Compute area, surface area, or volume, sometimes for composite shapes.',
    trap: 'Using the wrong formula, or forgetting a factor like ½ or the scale-factor cube for volume.',
    strategy: 'Write the formula first, substitute carefully, and mind units and scaling (area ∝ k², volume ∝ k³).',
  },
  'circles': {
    concept: 'Circles connect radius, circumference, area, arcs, sectors, and their equation.',
    when: 'Find area/circumference, arc length, sector area, or read center and radius from an equation.',
    trap: 'Confusing radius with diameter, or arc length (∝ circumference) with sector area (∝ area).',
    strategy: 'Use the fraction (angle ÷ 360) for arcs and sectors; complete the square for the equation.',
  },
  'trig': {
    concept: 'Right-triangle trig relates angles to side ratios: SOH-CAH-TOA.',
    when: 'Find a side or angle, use special triangles, or apply complementary-angle facts.',
    trap: 'Picking the wrong ratio (sin vs. cos), or mixing up opposite and adjacent.',
    strategy: 'Label opposite, adjacent, and hypotenuse relative to the angle, then choose the matching ratio.',
  },
};

function miniLesson(skillId) { return MINI_LESSONS[skillId] || null; }

if (typeof module !== 'undefined' && module.exports) module.exports = { MINI_LESSONS, miniLesson };
