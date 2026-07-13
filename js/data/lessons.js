/* SAT Quest — concise concept mini-lessons, one per skill. Loaded after worlds.js.
   Short teaching cards shown in the Skill Clinic and before a targeted drill.
   Fields: concept / recognize (how to spot it) / when (on the SAT) / trap /
   strategy / example (a typical example mistake). Original study guidance in the
   app's own words — no official text, passages, or copyrighted explanations.
   Keep each field to one or two plain sentences so the card stays phone-readable.
   Keyed by the same skill ids as SKILLS. */

const MINI_LESSONS = {
  /* ---------- Reading & Writing ---------- */
  'central-ideas': {
    concept: 'The central idea is the single main point the whole text supports — not any one detail.',
    recognize: 'The question asks for the “main idea,” “central claim,” or the best overall summary.',
    when: 'Questions ask for the main idea, central claim, or the best summary of a passage.',
    trap: 'A choice that is true but only covers one detail, or one that overstates the point.',
    strategy: 'Ask “what is this whole text mostly about?” in your own words, then pick the closest choice.',
    example: 'Picking a true supporting detail instead of the point the whole passage builds toward.',
  },
  'evidence-text': {
    concept: 'Textual evidence is the specific statement that most directly supports or weakens a given claim.',
    recognize: 'A claim, hypothesis, or conclusion is stated and you pick the finding that backs it.',
    when: 'A claim is given and you choose the finding that best supports it.',
    trap: 'True-sounding details that are irrelevant to the exact claim being made.',
    strategy: 'Restate the claim, then keep only the choice that speaks to that exact point.',
    example: 'Choosing an on-topic fact that doesn’t actually address the specific claim.',
  },
  'evidence-quant': {
    concept: 'Quantitative evidence uses numbers from a graph or table to back a claim.',
    recognize: 'A figure or data set is described and you complete a sentence using its values.',
    when: 'A figure is described and you complete a sentence with data that fits.',
    trap: 'A choice that misreads the numbers or states a trend the data does not show.',
    strategy: 'Read the actual values first; the answer must match them exactly, not just sound reasonable.',
    example: 'Naming a “trend” the table doesn’t support, or reading the wrong row/column.',
  },
  'inferences': {
    concept: 'An inference is what must logically follow from the text — no more, no less.',
    recognize: 'The blank or question asks what can be “most reasonably concluded/inferred.”',
    when: 'Questions ask what can most reasonably be concluded, or complete a logical blank.',
    trap: 'Choices that go beyond the text or add information that was never stated.',
    strategy: 'Pick the choice the text guarantees; if it needs an outside assumption, eliminate it.',
    example: 'Choosing a “likely” real-world guess the passage never actually establishes.',
  },
  'words-context': {
    concept: 'The right word fits the exact meaning and tone the sentence needs.',
    recognize: 'A blank or underlined word must be replaced with the most logical word.',
    when: 'A blank or underlined word must be filled with the most logical word.',
    trap: 'A word that is a synonym in general but wrong for this specific sentence.',
    strategy: 'Predict your own word for the blank first, then match it to the closest choice.',
    example: 'Picking a dictionary synonym that clashes with the sentence’s tone or logic.',
  },
  'structure': {
    concept: 'Text structure is how a passage is organized to achieve its purpose.',
    recognize: 'The question asks about the “main purpose” or how the text is put together.',
    when: 'Questions ask about the main purpose or how the text is organized.',
    trap: 'Choices that describe something the text mentions but that isn’t its overall job.',
    strategy: 'Summarize what the passage does as a whole (contrast, explain, correct…), then match it.',
    example: 'Choosing a purpose that fits one sentence rather than the passage as a whole.',
  },
  'cross-text': {
    concept: 'Cross-text questions compare how two texts relate — agree, qualify, or disagree.',
    recognize: 'Two short texts (Text 1 / Text 2) are given and you judge how the authors relate.',
    when: 'Two short texts are given and you judge how one author would respond to the other.',
    trap: 'Choices that overstate the disagreement or ignore what the second text actually grants.',
    strategy: 'Name each author’s position in a phrase, then find the choice that captures the relationship.',
    example: 'Saying the authors “disagree” when Text 2 only qualifies or extends Text 1.',
  },
  'transitions': {
    concept: 'A transition signals the logical relationship between two ideas.',
    recognize: 'A blank between two sentences must be filled with a connecting word.',
    when: 'A blank between sentences must be filled with the right connecting word.',
    trap: 'Picking a familiar transition without checking the actual relationship.',
    strategy: 'Name the relationship first (contrast? cause? addition?), then choose a word that fits it.',
    example: 'Using “however” where the ideas actually agree, or “therefore” with no cause.',
  },
  'synthesis': {
    concept: 'Rhetorical synthesis uses given notes to meet a stated writing goal.',
    recognize: 'You’re given bullet notes and a specific goal, and pick the best sentence for it.',
    when: 'You’re given notes and a goal, and pick the sentence that best meets that goal.',
    trap: 'A true sentence that ignores the stated goal (e.g., states a fact but not the required comparison).',
    strategy: 'Underline the goal, then keep only the choice that does exactly that.',
    example: 'Choosing an accurate sentence that doesn’t do the job the goal asked for.',
  },
  'boundaries': {
    concept: 'Boundaries are about joining or separating clauses with correct punctuation.',
    recognize: 'The choices differ only in commas, periods, semicolons, or colons.',
    when: 'Choices differ only in commas, periods, semicolons, or colons.',
    trap: 'Comma splices — joining two complete sentences with only a comma.',
    strategy: 'Test whether each side of the mark is a complete sentence; two complete ones need a period or semicolon.',
    example: 'Joining two full sentences with a comma instead of a period or semicolon.',
  },
  'form-sense': {
    concept: 'Form, structure, and sense covers verb agreement, tense, and clear phrasing.',
    recognize: 'The choices differ in verb form, subject–verb agreement, or word/modifier placement.',
    when: 'Choices differ in verb form, subject–verb agreement, or modifier placement.',
    trap: 'A verb that agrees with a nearby noun instead of the true subject.',
    strategy: 'Find the real subject, match the verb to it, and keep tense consistent with the sentence.',
    example: 'Matching a verb to the closest noun (“the box of tools are”) instead of the subject.',
  },
  /* ---------- Math — Algebra ---------- */
  'linear-eq': {
    concept: 'A linear equation is solved by undoing operations to isolate the variable.',
    recognize: 'One variable, first power, and you’re asked to solve for it or find a value.',
    when: 'Solve for x, or find a value that makes an equation true.',
    trap: 'Sign errors when moving a term across the equals sign, or forgetting to divide the whole side.',
    strategy: 'Do the same operation to both sides, one step at a time, and check by substituting back.',
    example: 'Dividing only one term by the coefficient instead of the entire side.',
  },
  'linear-func': {
    concept: 'A line is y = mx + b: m is the rate of change, b is the starting value.',
    recognize: 'Points, a table, a graph, or “rate of change” / “per” language about a line.',
    when: 'Find slope, intercept, or the equation from points, a table, or a context.',
    trap: 'Swapping slope and intercept, or reading the y-intercept as the wrong point.',
    strategy: 'Slope = change in y over change in x; the intercept is the value when x = 0.',
    example: 'Reporting b as the slope, or computing Δx/Δy instead of Δy/Δx.',
  },
  'systems': {
    concept: 'A system’s solution is the point that satisfies both equations at once.',
    recognize: 'Two conditions/unknowns at once, or two lines meeting in a context.',
    when: 'Solve two equations together, or interpret where two lines meet in a context.',
    trap: 'Setting up the wrong quantity — e.g., total cost vs. cost per item.',
    strategy: 'Define what each variable means, then eliminate or substitute; check the point in both equations.',
    example: 'Solving for x when the question asked for x + y, or mis-assigning the variables.',
  },
  'inequalities': {
    concept: 'Inequalities work like equations, but the direction flips when you multiply or divide by a negative.',
    recognize: 'A ≤ ≥ < > sign, or wording like “at least,” “no more than,” “maximum.”',
    when: 'Solve an inequality, or model a limit like “no more than” or “at least.”',
    trap: 'Forgetting to flip the sign, or mismodeling “at most/at least.”',
    strategy: 'Solve as if it were an equation, flip if you divide by a negative, and re-read the wording.',
    example: 'Keeping the sign direction after dividing by a negative coefficient.',
  },
  /* ---------- Math — Advanced Math ---------- */
  'equivalent': {
    concept: 'Equivalent expressions are just different-looking forms of the same thing.',
    recognize: 'Asked to rewrite, factor, distribute, or combine like terms.',
    when: 'Rewrite, factor, distribute, or combine like terms.',
    trap: 'Adding coefficients that should multiply, or dropping a sign while distributing.',
    strategy: 'Work carefully term by term; you can check by plugging in a small number for x.',
    example: 'Distributing to only the first term inside the parentheses.',
  },
  'quadratics': {
    concept: 'Quadratics come in standard, factored, and vertex forms — each reveals something different.',
    recognize: 'An x² term, or talk of roots, vertex, axis of symmetry, or a parabola.',
    when: 'Find roots, the vertex, the axis of symmetry, or rewrite the form.',
    trap: 'Confusing roots with the vertex, or sign errors in the factors.',
    strategy: 'Match the form to what’s asked: factored gives roots, vertex form gives the max/min.',
    example: 'Reading roots as x = 3, −2 from (x − 3)(x + 2) but writing 3 and 2 with wrong signs.',
  },
  'exponentials': {
    concept: 'Exponential models multiply by a fixed factor each step: y = a·b^x.',
    recognize: 'A repeated %-per-period, doubling/half-life, or a variable in the exponent.',
    when: 'Growth/decay, half-life, or interpreting a base and starting amount.',
    trap: 'Treating exponential change as linear (adding instead of multiplying).',
    strategy: 'Identify a (start) and b (multiplier); b > 1 grows, 0 < b < 1 decays.',
    example: 'Adding the rate each period instead of multiplying by (1 + rate).',
  },
  'radicals': {
    concept: 'Radicals and rational exponents are two ways to write the same root.',
    recognize: 'A square-root sign, or an exponent like x^(1/n) or x^(2/3).',
    when: 'Simplify roots or rewrite x^(1/n) form.',
    trap: 'Forgetting that squaring can introduce answers that don’t actually work.',
    strategy: 'Convert between root and exponent form, and check solutions in the original equation.',
    example: 'Keeping an extraneous root that fails when substituted back.',
  },
  'functions': {
    concept: 'Function notation f(x) means “apply the rule f to the input x.”',
    recognize: 'f(x), g(x), f(g(x)), a table of inputs/outputs, or “evaluate.”',
    when: 'Evaluate f(a), compose f(g(x)), or read a function from a table.',
    trap: 'For f(g(x)), applying f before g, or misreading the input.',
    strategy: 'Work inside-out: compute the inner function first, then feed its result into the outer one.',
    example: 'Computing f then g for f(g(2)) instead of g first, then f.',
  },
  /* ---------- Math — Problem-Solving and Data Analysis ---------- */
  'ratios': {
    concept: 'Ratios, rates, and proportions compare quantities that scale together.',
    recognize: '“Per,” “for every,” a unit rate, a recipe scale, or a unit conversion.',
    when: 'Scale a recipe, convert units, or split a total in a given ratio.',
    trap: 'Adding instead of scaling, or flipping the rate upside down.',
    strategy: 'Set up a proportion with matching units on top and bottom, then cross-multiply.',
    example: 'Writing miles/hour when the problem needs hours/mile (rate flipped).',
  },
  'percentages': {
    concept: 'Percent means “per hundred”; percent change compares the change to the original.',
    recognize: 'A %, a discount/markup/tax, or “percent increase/decrease.”',
    when: 'Percent of a number, percent change, or successive percent changes.',
    trap: 'Mixing up “percent of” with “percent change,” or dividing by the wrong base.',
    strategy: 'Percent change = (new − old) ÷ old. For successive changes, multiply the factors.',
    example: 'Dividing the change by the new value instead of the original.',
  },
  'statistics': {
    concept: 'Mean, median, and range each describe a data set differently.',
    recognize: 'Asked for average/mean, median, range, or the effect of a new value.',
    when: 'Compute or compare center and spread, or judge the effect of a new value.',
    trap: 'Assuming the mean and median move together — an outlier pulls the mean, not the median.',
    strategy: 'Mean uses every value; median is the middle. Ask which one an outlier would move.',
    example: 'Expecting the median to jump when a single large outlier is added.',
  },
  'scatterplots': {
    concept: 'A line of best fit models the trend in two-variable data; residuals are the misses.',
    recognize: 'A scatterplot with a best-fit line, a prediction, or a “residual.”',
    when: 'Predict from a best-fit line, read a residual, or describe an association.',
    trap: 'Reading a single point as the trend, or confusing the residual with the predicted value.',
    strategy: 'Use the line’s equation to predict; residual = actual − predicted.',
    example: 'Reporting the predicted y as the residual instead of actual − predicted.',
  },
  'probability': {
    concept: 'Probability is favorable outcomes over total outcomes, often read from a table.',
    recognize: 'A two-way table, “probability that…,” or a “given that…” condition.',
    when: 'Simple probability, complements, or conditional probability from a two-way table.',
    trap: 'Using the grand total when the question restricts you to one row or group.',
    strategy: 'Identify the correct total first; for “given,” restrict to that group before dividing.',
    example: 'Dividing by the grand total for a “given that it’s a female” conditional.',
  },
  'sampling': {
    concept: 'A valid conclusion depends on a random, representative sample; margin of error frames the estimate.',
    recognize: 'A survey/study, talk of “random sample,” bias, or a margin of error.',
    when: 'Judge whether a survey supports a claim, or interpret a margin of error.',
    trap: 'Over-generalizing from a biased sample, or treating the estimate as exact.',
    strategy: 'Check that the sample is random and fits the population; read the margin as a range.',
    example: 'Generalizing a volunteer/convenience sample to the whole population.',
  },
  /* ---------- Math — Geometry and Trigonometry ---------- */
  'angles': {
    concept: 'Lines, angles, and triangles follow fixed rules (angle sums, parallel-line angles, similarity).',
    recognize: 'A figure with angles/triangles, parallel lines, or “similar” triangles.',
    when: 'Find a missing angle or side using triangle or line relationships.',
    trap: 'Assuming a figure is to scale, or mismatching corresponding parts of similar triangles.',
    strategy: 'Label what you know, apply the rule (angles in a triangle sum to 180°), and set up an equation.',
    example: 'Pairing non-corresponding sides when writing a similar-triangle proportion.',
  },
  'area-volume': {
    concept: 'Area and volume come from formulas tied to a shape’s dimensions.',
    recognize: 'Asked for area, surface area, or volume — sometimes of a composite shape.',
    when: 'Compute area, surface area, or volume, sometimes for composite shapes.',
    trap: 'Using the wrong formula, or forgetting a factor like ½ or the scale-factor cube for volume.',
    strategy: 'Write the formula first, substitute carefully, and mind units and scaling (area ∝ k², volume ∝ k³).',
    example: 'Forgetting the ½ in a triangle’s area, or scaling volume by k² instead of k³.',
  },
  'circles': {
    concept: 'Circles connect radius, circumference, area, arcs, sectors, and their equation.',
    recognize: 'A radius/diameter, arc or sector, or an equation like (x−h)²+(y−k)²=r².',
    when: 'Find area/circumference, arc length, sector area, or read center and radius from an equation.',
    trap: 'Confusing radius with diameter, or arc length (∝ circumference) with sector area (∝ area).',
    strategy: 'Use the fraction (angle ÷ 360) for arcs and sectors; complete the square for the equation.',
    example: 'Plugging the diameter in where the formula wants the radius.',
  },
  'trig': {
    concept: 'Right-triangle trig relates angles to side ratios: SOH-CAH-TOA.',
    recognize: 'A right triangle with sin/cos/tan, a special triangle, or complementary angles.',
    when: 'Find a side or angle, use special triangles, or apply complementary-angle facts.',
    trap: 'Picking the wrong ratio (sin vs. cos), or mixing up opposite and adjacent.',
    strategy: 'Label opposite, adjacent, and hypotenuse relative to the angle, then choose the matching ratio.',
    example: 'Using adjacent/hypotenuse (cos) when the side you want is opposite the angle.',
  },
};

function miniLesson(skillId) { return MINI_LESSONS[skillId] || null; }

/* Conceptually adjacent skills — used to suggest "related skills" in the Skill
   Clinic so practice on one weak skill points to the neighbors that reinforce it.
   Keyed by skill id; values are 2 sibling skill ids in the same section. */
const RELATED_SKILLS = {
  'central-ideas': ['structure', 'inferences'], 'evidence-text': ['evidence-quant', 'inferences'],
  'evidence-quant': ['evidence-text', 'scatterplots'], 'inferences': ['central-ideas', 'evidence-text'],
  'words-context': ['transitions', 'form-sense'], 'structure': ['central-ideas', 'transitions'],
  'cross-text': ['central-ideas', 'inferences'], 'transitions': ['structure', 'boundaries'],
  'synthesis': ['central-ideas', 'transitions'], 'boundaries': ['form-sense', 'transitions'],
  'form-sense': ['boundaries', 'words-context'],
  'linear-eq': ['linear-func', 'systems'], 'linear-func': ['linear-eq', 'systems'],
  'systems': ['linear-eq', 'inequalities'], 'inequalities': ['linear-eq', 'systems'],
  'equivalent': ['quadratics', 'functions'], 'quadratics': ['equivalent', 'functions'],
  'exponentials': ['functions', 'percentages'], 'radicals': ['equivalent', 'quadratics'],
  'functions': ['quadratics', 'equivalent'], 'ratios': ['percentages', 'linear-func'],
  'percentages': ['ratios', 'statistics'], 'statistics': ['probability', 'scatterplots'],
  'scatterplots': ['statistics', 'linear-func'], 'probability': ['statistics', 'sampling'],
  'sampling': ['statistics', 'probability'], 'angles': ['area-volume', 'trig'],
  'area-volume': ['angles', 'circles'], 'circles': ['area-volume', 'angles'], 'trig': ['angles', 'circles'],
};
function relatedSkills(skillId) { return RELATED_SKILLS[skillId] || []; }

if (typeof module !== 'undefined' && module.exports) module.exports = { MINI_LESSONS, miniLesson, RELATED_SKILLS, relatedSkills };
