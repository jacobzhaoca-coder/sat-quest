/* SAT Quest — strategy library. Skill-specific tactics shown during play,
   plus general test-taking wisdom rotated on dashboards and result screens. */

const SKILL_TIPS = {
  'central-ideas': [
    'Summarize the passage in your own five words before reading the choices. The right answer will match your summary; traps match a single detail.',
    'Wrong answers here are usually too narrow (one detail) or too broad (beyond the passage). The main idea covers most sentences, not one.',
  ],
  'evidence-text': [
    'First restate the claim precisely. Then ask of each choice: if this finding is true, does the claim become more believable? Related topic ≠ support.',
    'For "weaken" questions, look for the choice that attacks the link between the evidence and the conclusion, not one that just sounds negative.',
  ],
  'evidence-quant': [
    'Read the data description carefully and note exactly which group and which number the question restricts you to before checking the choices.',
    'The right choice must be fully supported by the numbers. Reject any option that overstates the data ("all," "every," "will continue") or brings in an unmentioned quantity.',
  ],
  'inferences': [
    'The blank must follow from the passage alone. If a choice needs outside knowledge or a new assumption, it loses — even if it is true in real life.',
    'Reread the two sentences before the blank. The correct completion usually resolves the exact tension or setup those sentences create.',
  ],
  'words-context': [
    'Cover the choices and fill the blank with your own simple word first. Then pick the choice closest to your word.',
    'Beware of the most common meaning of a word. SAT vocabulary questions often test a secondary meaning that fits the context.',
  ],
  'structure': [
    'Purpose questions ask WHY the author wrote it, not WHAT it says. The right answer names a function: to explain, to challenge, to illustrate.',
    'Track the passage’s "moves": introduces X, complicates X, gives an example. The answer describes the moves, not the topic.',
  ],
  'cross-text': [
    'Before comparing, write one line per author: "Author 1 thinks ___; Author 2 thinks ___." The answer respects both lines exactly.',
    'The second author usually agrees partially, disagrees on a specific point, or adds a caveat. Total agreement or total opposition is rare.',
  ],
  'transitions': [
    'Read the sentence BEFORE and the sentence WITH the blank. Decide the relationship first: continue, contrast, cause, or example. Then match.',
    '"However" needs a real reversal; "therefore" needs a real cause. Test the logic, not what sounds smooth.',
  ],
  'synthesis': [
    'The goal sentence is the whole question. Underline the stated goal, then eliminate every choice that does anything else — even if it is accurate.',
    'Accuracy is not enough: a choice can use the notes correctly and still fail the stated goal. Goal first, facts second.',
  ],
  'boundaries': [
    'A period, a semicolon, and a comma + FANBOYS (for, and, nor, but, or, yet, so) all legally join two complete sentences. A comma alone never does.',
    'Check both sides of the punctuation: can each side stand alone as a sentence? That single test solves most boundary questions.',
  ],
  'form-sense': [
    'Cross out interrupting phrases between subject and verb. "The collection of rare maps (was/were)" — the subject is collection.',
    'For verb tense, match the timeline of the surrounding sentences. For pronouns, find the exact noun being replaced and match its number.',
  ],
  'linear-eq': [
    'Whatever you do to one side, do to the other — and write every step. Most linear-equation misses are sign slips, not concept gaps.',
    'After solving, plug your answer back into the original equation. Ten seconds of checking beats a lost point.',
  ],
  'linear-func': [
    'In y = mx + b, the slope m is the "per" quantity (cost per item, rate per hour) and b is the starting amount. Translate words to m and b first.',
    'Slope = rise over run = (y₂ − y₁)/(x₂ − x₁). Keep the subtraction order the same on top and bottom.',
  ],
  'systems': [
    'Line up the equations and ask: can I add or subtract them to kill a variable? Elimination is usually faster than substitution on the SAT.',
    'A system has no solution when the left sides are multiples of each other but the right sides are not — same slope, different intercepts.',
  ],
  'inequalities': [
    'Solve inequalities exactly like equations, with one law: multiplying or dividing by a negative flips the inequality sign.',
    'For word problems, "at least" means ≥ and "no more than" means ≤. Translate the phrase before touching numbers.',
  ],
  'equivalent': [
    'To rewrite an expression, distribute or expand fully, then combine like terms. Keep the coefficient of x separate from the constant term.',
    'For (x + p)(x + q), the coefficient of x is p + q (you ADD) and the constant is p·q (you MULTIPLY). Mixing these up is the classic trap.',
  ],
  'scatterplots': [
    'In a line of best fit y = mx + b, the slope m is the change per one unit of x, and b is the starting value when x = 0. Identify which the question wants.',
    'To predict a value, substitute the given x into the model. Do not forget to add b.',
  ],
  'sampling': [
    'A larger random sample generally means a smaller margin of error and a more reliable estimate. Sample size matters, not how convenient the sample was.',
    'A trustworthy estimate needs a random, representative sample. Watch for biased groups (only volunteers, only one club) that cannot represent the whole population.',
  ],
  'quadratics': [
    'To factor x² + bx + c, hunt two numbers that multiply to c and add to b. If nothing works in 15 seconds, use the quadratic formula.',
    'The solutions of a quadratic are the x-intercepts of its graph. If the question mentions roots, zeros, or solutions, they are the same thing.',
  ],
  'exponentials': [
    'y = a·bˣ: a is the starting value, b is the growth factor. Growth of r% means b = 1 + r/100; decay means b = 1 − r/100.',
    'Linear change adds the same AMOUNT each step; exponential change multiplies by the same FACTOR. Ask which one the story describes.',
  ],
  'radicals': [
    '√(x) = y means y² = x, and y cannot be negative for the principal root. After solving a radical equation, check for extraneous solutions.',
    'Fractional exponents are radicals in disguise: x^(1/2) = √x, x^(3/2) = (√x)³. Rewrite in whichever form is easier to compute.',
  ],
  'functions': [
    'f(3) means "replace every x with 3." Substitute with parentheses — f(x) = x² − x gives f(−2) = (−2)² − (−2), not −2² − −2.',
    'For composed functions like f(g(2)), work inside-out: find g(2) first, then feed that number to f.',
  ],
  'ratios': [
    'Set up the proportion with matching units in matching positions: miles/hour = miles/hour. Cross-multiply only after units line up.',
    'For unit conversion, multiply by fractions equal to 1 (like 60 min / 1 hr) and cancel units like factors until only the target unit remains.',
  ],
  'percentages': [
    'Percent change = (new − old)/old × 100. The denominator is always the ORIGINAL value — that is where most traps live.',
    'A 20% discount then 10% tax is NOT 10% off overall. Apply percent changes one at a time by multiplying: ×0.80 then ×1.10.',
  ],
  'statistics': [
    'The median resists outliers; the mean chases them. Adding one huge value drags the mean but barely moves the median.',
    'To find a missing value from an average: total = mean × count. Work with totals, not with the averages themselves.',
  ],
  'probability': [
    'Probability = favorable ÷ total. From a table, be careful WHICH row or column the question restricts you to — "of the students who..." shrinks the total.',
    'Read table questions twice: once for what is asked, once for the group it is asked about. Most misses are group misreads, not math errors.',
  ],
  'area-volume': [
    'Write the formula before substituting numbers: A = πr², V = lwh, V = πr²h. Formula first prevents mixing radius with diameter.',
    'If a question gives a diameter, halve it immediately and label it r. Diameter-as-radius is the #1 geometry trap.',
  ],
  'angles': [
    'Angles in a triangle sum to 180°; angles on a straight line sum to 180°; vertical angles are equal. Chain these three facts to solve almost anything.',
    'With parallel lines and a transversal, every angle is either equal to or supplementary with every other. Mark equal angles as you find them.',
  ],
  'circles': [
    'Circumference = 2πr, area = πr². An arc or sector is just a fraction of the whole: (central angle / 360) × the full measure.',
    'Circle equation (x − h)² + (y − k)² = r²: the center is (h, k) with SIGNS FLIPPED from what appears in the equation.',
  ],
  'trig': [
    'SOH-CAH-TOA: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent. Label the sides relative to the angle first.',
    'In any right triangle, sin(one acute angle) = cos(the other). If sin A = cos B, then A + B = 90°.',
  ],
};

const GENERAL_TIPS = [
  'Process of elimination is a weapon: crossing out two wrong answers doubles your odds even when you are unsure.',
  'On the digital SAT, every question is worth the same. Never let one hard question steal time from three easy ones — flag it and move on.',
  'There is no penalty for guessing. Never leave a question blank, ever.',
  'Read the actual question stem twice. Many misses come from answering a question that was not asked.',
  'In Reading & Writing, the correct answer is defensible from the text alone. If you are arguing from outside knowledge, you are in a trap.',
  'In Math, write your work down even for "easy" steps. Mental-math sign errors are the silent score-killer.',
  'The built-in Desmos calculator on the digital SAT can graph both sides of an equation — intersections are solutions. Practice using it.',
  'Review your mistakes the same day you make them. A mistake reviewed once is worth five new practice questions.',
  'Do a little every day. Twenty minutes daily beats three hours on Sunday — that is what your streak is for.',
  'Before test day, take at least two full timed practice tests in Bluebook so the format holds no surprises.',
  'Sleep is a study strategy. The night before the test, protect eight hours like it is part of your score.',
  'When two answer choices seem identical, find the one word that differs — that word is the whole question.',
];

function tipForSkill(skillId) {
  const arr = SKILL_TIPS[skillId];
  if (!arr) return GENERAL_TIPS[Math.floor(Math.random() * GENERAL_TIPS.length)];
  return arr[Math.floor(Math.random() * arr.length)];
}

function generalTip() {
  return GENERAL_TIPS[Math.floor(Math.random() * GENERAL_TIPS.length)];
}
