/* SAT Quest — student-produced response (grid-in) math generators + grading.
   These produce typed-answer questions (no A/B/C/D). All original SAT-style
   practice; nothing copied from any official source. Answers accept equivalent
   numeric forms (integers, decimals, and fractions) where reasonable.

   Shared helpers ri/pick/round2 come from mathgen.js (loaded first). */

/* Parse a typed answer into a number. Accepts integers, decimals (with or
   without a leading zero), and fractions "a/b". Returns null if unparseable. */
function parseNumeric(s) {
  if (s === null || s === undefined) return null;
  let t = String(s).trim().replace(/\s+/g, '');
  if (t === '') return null;
  t = t.replace(/^\+/, '');
  if (/^-?\d+\/-?\d+$/.test(t)) {
    const [a, b] = t.split('/').map(Number);
    if (!b) return null;
    return a / b;
  }
  if (/^-?(\d+\.?\d*|\.\d+)$/.test(t)) return parseFloat(t);
  return null;
}

/* Grade a typed answer against a grid question.
   - Exact string matches in q.accept always pass.
   - Otherwise compare numerically. Clean (terminating) answers require an
     effectively exact match; non-terminating answers accept a rounded value
     (within 0.01), mirroring the SAT's "fill the grid" rounding allowance. */
function gradeGridAnswer(input, q) {
  const norm = String(input).trim().replace(/\s+/g, '');
  if (norm === '') return false;
  const accept = q.accept || [];
  if (accept.some(a => String(a).replace(/\s+/g, '') === norm)) return true;
  const v = parseNumeric(norm);
  if (v === null) return false;
  const a = typeof q.answer === 'number' ? q.answer : parseNumeric(q.answer);
  if (a === null) return false;
  const tol = q.tolLoose ? 0.011 : Math.max(1e-9, Math.abs(a) * 1e-9);
  return Math.abs(v - a) <= tol;
}

/* Whether a fraction a/b terminates as a decimal (denominator only 2s and 5s). */
function terminates(b) {
  let n = Math.abs(b);
  while (n % 2 === 0) n /= 2;
  while (n % 5 === 0) n /= 5;
  return n === 1;
}

/* Build a grid question object. `accept` lists convenient equivalent forms. */
function gridQ(skill, text, answer, explanation, extra = {}) {
  const accept = new Set([String(answer)]);
  if (extra.accept) extra.accept.forEach(a => accept.add(String(a)));
  return {
    skill, type: 'grid', text, answer, accept: [...accept],
    explanation, gridLabel: 'Student-Produced Response · Original SAT-style practice',
    tolLoose: extra.tolLoose || false,
    steps: extra.steps || null,
    hint: extra.hint || null,
  };
}

/* ---- Algebra ---------------------------------------------------------- */
function grid_linear_eq(tier) {
  const a = ri(2, 5 + tier), x = ri(3, 9 + tier * 2), b = ri(2, 15);
  const c = a * x + b;
  return gridQ('linear-eq',
    `If ${a}x + ${b} = ${c}, what is the value of x?`, x,
    `Subtract ${b} from both sides: ${a}x = ${c - b}. Divide by ${a}: x = ${x}.`,
    { steps: [`Start: ${a}x + ${b} = ${c}`, `Subtract ${b}: ${a}x = ${c - b}`, `Divide by ${a}: x = ${x}`],
      hint: 'Undo the constant first, then undo the coefficient.' });
}
function grid_systems(tier) {
  const x = ri(2, 9), y = ri(2, 9), s = x + y, d = x - y;
  return gridQ('systems',
    `The solution to the system below is (x, y).\n\nx + y = ${s}\nx − y = ${d}\n\nWhat is the value of y?`, y,
    `Subtract the second equation from the first: 2y = ${s - d}, so y = ${y}.`,
    { steps: [`Add/subtract to eliminate x: (x+y) − (x−y) = ${s} − ${d}`, `2y = ${s - d}`, `y = ${y}`],
      hint: 'Subtracting the two equations cancels x.' });
}
function grid_inequalities(tier) {
  const a = ri(2, 5), b = ri(1, 8), k = ri(5, 12);
  const c = a * k + b;
  return gridQ('inequalities',
    `What is the greatest integer value of x that satisfies ${a}x + ${b} ≤ ${c}?`, k,
    `Subtract ${b}: ${a}x ≤ ${c - b}. Divide by ${a}: x ≤ ${k}. The greatest integer is ${k}.`,
    { hint: 'Solve as an equation, then take the greatest integer that still fits.' });
}

/* ---- Advanced Math ---------------------------------------------------- */
function grid_quadratics(tier) {
  const r = ri(2, 9);
  const bb = 2 * r, cc = r * r; // (x - r)^2 = x^2 - 2r x + r^2, double root r
  return gridQ('quadratics',
    `What is the solution to the equation x² − ${bb}x + ${cc} = 0?`, r,
    `The expression factors as (x − ${r})² = 0, since ${r} + ${r} = ${bb} and ${r} × ${r} = ${cc}. So x = ${r}.`,
    { steps: [`Look for a number that adds to ${bb} and multiplies to ${cc}`, `${r} works twice: (x − ${r})(x − ${r}) = 0`, `x = ${r}`],
      hint: 'This is a perfect square trinomial.' });
}
function grid_exponents(tier) {
  const base = pick([2, 3, 5]), exp = ri(2, 4);
  const val = Math.pow(base, exp);
  return gridQ('radicals',
    `If ${base}ˣ = ${val}, what is the value of x?`, exp,
    `${base}^${exp} = ${val}, so x = ${exp}.`,
    { hint: `Ask: ${base} to what power gives ${val}?` });
}
function grid_functions(tier) {
  const a = ri(2, 4), b = ri(1, 6), inp = ri(2, 6);
  const val = a * inp + b;
  return gridQ('functions',
    `The function f is defined by f(x) = ${a}x + ${b}. If f(x) = ${val}, what is the value of x?`, inp,
    `Set ${a}x + ${b} = ${val}. Subtract ${b}: ${a}x = ${val - b}. Divide by ${a}: x = ${inp}.`,
    { hint: 'Work backward: plug the output in and solve for x.' });
}

/* ---- Problem-Solving & Data Analysis ---------------------------------- */
function grid_percentages(tier) {
  const whole = ri(4, 20) * 5, pct = pick([10, 20, 25, 40, 50, 60]);
  const part = whole * pct / 100;
  return gridQ('percentages',
    `What is ${pct}% of ${whole}?`, part,
    `${pct}% = ${pct}/100. ${pct}/100 × ${whole} = ${part}.`,
    { hint: 'Multiply the whole by the percent written as a decimal.' });
}
function grid_ratios(tier) {
  const per = ri(3, 8), units = ri(4, 12);
  const total = per * units;
  return gridQ('ratios',
    `A machine fills ${per} bottles every minute. How many bottles does it fill in ${units} minutes?`, total,
    `Multiply the rate by the time: ${per} × ${units} = ${total} bottles.`,
    { hint: 'Rate times time gives total.' });
}
function grid_statistics(tier) {
  const nums = Array.from({ length: 5 }, () => ri(2, 18));
  const sum = nums.reduce((a, b) => a + b, 0);
  // ensure integer mean for a clean grid answer
  const adjust = (5 - (sum % 5)) % 5;
  nums[0] += adjust;
  const sum2 = nums.reduce((a, b) => a + b, 0);
  const mean = sum2 / 5;
  return gridQ('statistics',
    `A data set consists of the values ${nums.join(', ')}. What is the mean (average) of the data set?`, mean,
    `Add the values: ${nums.join(' + ')} = ${sum2}. Divide by 5: ${sum2} ÷ 5 = ${mean}.`,
    { hint: 'Sum the values, then divide by how many there are.' });
}
function grid_probability(tier) {
  const fav = ri(2, 6), total = fav + ri(3, 8);
  const dec = round2(fav / total);
  return gridQ('probability',
    `A jar holds ${total} tokens, ${fav} of which are gold. If one token is drawn at random, what is the probability it is gold? Enter your answer as a fraction or decimal.`, fav / total,
    `Probability = favorable ÷ total = ${fav}/${total}${terminates(total) ? ` = ${dec}` : ''}.`,
    { accept: [`${fav}/${total}`, terminates(total) ? String(dec) : null].filter(Boolean),
      tolLoose: !terminates(total),
      hint: 'Favorable outcomes over total outcomes.' });
}

/* ---- Geometry & Trigonometry ------------------------------------------ */
function grid_angles(tier) {
  const a = ri(35, 75), b = ri(30, 80);
  const c = 180 - a - b;
  return gridQ('angles',
    `In a triangle, two of the angles measure ${a}° and ${b}°. What is the measure, in degrees, of the third angle?`, c,
    `Angles in a triangle sum to 180°. Third angle = 180 − ${a} − ${b} = ${c}°.`,
    { hint: 'The three interior angles add up to 180°.' });
}
function grid_area(tier) {
  const l = ri(4, 14), w = ri(3, 12);
  const area = l * w;
  return gridQ('area-volume',
    `A rectangle has a length of ${l} and a width of ${w}. What is its area?`, area,
    `Area = length × width = ${l} × ${w} = ${area}.`,
    { hint: 'Area of a rectangle is length times width.' });
}
function grid_trig(tier) {
  const trip = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17]]);
  const [a, b, hyp] = trip;
  return gridQ('trig',
    `In a right triangle, the two legs measure ${a} and ${b}. What is the length of the hypotenuse?`, hyp,
    `By the Pythagorean theorem, hypotenuse = √(${a}² + ${b}²) = √(${a * a} + ${b * b}) = √${a * a + b * b} = ${hyp}.`,
    { steps: [`a² + b² = c²`, `${a}² + ${b}² = ${a * a + b * b}`, `c = √${a * a + b * b} = ${hyp}`],
      hint: 'Use a² + b² = c².' });
}

const GRID_GENERATORS = {
  'linear-eq': grid_linear_eq, 'systems': grid_systems, 'inequalities': grid_inequalities,
  'quadratics': grid_quadratics, 'radicals': grid_exponents, 'functions': grid_functions,
  'percentages': grid_percentages, 'ratios': grid_ratios, 'statistics': grid_statistics, 'probability': grid_probability,
  'angles': grid_angles, 'area-volume': grid_area, 'trig': grid_trig,
};

function generateGridQuestion(skillId, tier) {
  const gen = GRID_GENERATORS[skillId];
  if (!gen) return null;
  const base = gen(tier);
  return stampMathIds({
    ...base,
    origin: 'generated',
    difficulty: TIER_LABEL[tier] || 'Medium',
    timeTarget: (TIME_TARGETS.math[tier] || 90),
    tip: tipForSkill(base.skill),
  }, 'grid', skillId);
}
function hasGrid(skillId) { return !!GRID_GENERATORS[skillId]; }
