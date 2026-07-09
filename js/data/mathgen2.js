/* SAT Quest — additional ORIGINAL math generator templates (blueprint batch 2).
   Loaded AFTER mathgen.js and gridgen.js. These add new reasoning patterns
   (word problems, percent change, unit rates, Pythagorean triples, angle sums,
   circle measures, function composition, ...) drawn from ABSTRACT blueprints of
   the digital SAT — no official question text, numbers, or scenarios are used.
   Every instance is generated fresh and tagged source:'blueprint-generated'.

   Integration: each template is appended to the existing MATH_GENERATORS /
   GRID_GENERATORS pools via a wrapper, so a skill randomly serves either its
   original generator or one of these, multiplying variety without touching the
   original generators. Depends on globals from mathgen.js/gridgen.js:
   ri, pick, round2, mcFromValues, mcFromStrings, gridQ, MATH_GENERATORS,
   GRID_GENERATORS. */

/* Helper: tag a generated question as blueprint-derived. */
function bp(q) { return { ...q, source: 'blueprint-generated' }; }

/* ============================ MC TEMPLATES ============================== */

/* Algebra — linear equation as a word problem (fixed fee + per-unit). */
function gen2_linear_word(tier) {
  const fee = ri(10, 40), per = ri(3, 9 + tier), months = ri(3, 8 + tier);
  const total = fee + per * months;
  const q = mcFromValues(months, [
    { v: total - fee, why: `This is the amount beyond the fee, not the number of months — divide by ${per}.` },
    { v: Math.round(total / per), why: 'This forgets to subtract the one-time fee before dividing.' },
    { v: months + 1, why: 'Off-by-one: check by plugging the value back in.' },
  ]);
  return bp({ skill: pick(['linear-eq']),
    text: `A club charges a one-time fee of $${fee} to join plus $${per} for each month of membership. A member who paid $${total} in total was a member for how many months?`, ...q,
    explanation: `Subtract the join fee: $${total} − $${fee} = $${total - fee}. Divide by the monthly cost: ${total - fee} ÷ ${per} = ${months} months.` });
}

/* Algebra — linear function as a draining-tank rate problem. */
function gen2_linear_rate(tier) {
  const start = ri(40, 90), rate = ri(2, 6), t = ri(3, 8);
  const val = start - rate * t;
  const q = mcFromValues(val, [
    { v: start - rate - t, why: 'This subtracts the rate and time instead of their product.' },
    { v: start - rate, why: 'This subtracts only one minute of draining.' },
    { v: rate * t, why: 'This is the amount drained, not the amount remaining.' },
  ]);
  return bp({ skill: 'linear-func',
    text: `A tank holds ${start} liters of water and drains at a steady ${rate} liters per minute. The volume after t minutes is V(t) = ${start} − ${rate}t. How many liters remain after ${t} minutes?`, ...q,
    explanation: `Substitute t = ${t}: V = ${start} − ${rate}(${t}) = ${start} − ${rate * t} = ${val} liters.` });
}

/* Algebra — systems as a two-item ticket problem. */
function gen2_systems_word(tier) {
  const adult = ri(4, 9), child = ri(2, adult - 1);
  const nAdult = ri(3, 8), nChild = ri(3, 8);
  const total = nAdult + nChild, cost = adult * nAdult + child * nChild;
  const q = mcFromValues(nAdult, [
    { v: nChild, why: 'This is the number of child tickets, not adult tickets.' },
    { v: total, why: 'This is the total number of tickets, not the adult tickets alone.' },
    { v: nAdult + 1, why: 'Check by computing the total cost with this value.' },
  ]);
  return bp({ skill: 'systems',
    text: `Adult tickets cost $${adult} and child tickets cost $${child}. A group bought ${total} tickets for $${cost} total. How many adult tickets did the group buy?`, ...q,
    explanation: `Let a be adult tickets, so child tickets = ${total} − a. Then ${adult}a + ${child}(${total} − a) = ${cost}. Solving: ${adult - child}a = ${cost - child * total}, so a = ${nAdult}.` });
}

/* Problem-Solving — percent change (increase or decrease). */
function gen2_percent_change(tier) {
  const base = pick([20, 25, 40, 50, 80, 200]);
  const pct = pick([10, 15, 20, 25, 40, 50]);
  const inc = Math.random() < 0.5;
  const changed = inc ? base + base * pct / 100 : base - base * pct / 100;
  const q = mcFromValues(pct, [
    { v: Math.round(Math.abs(changed - base)), why: 'This is the amount of change in units, not the percent.' },
    { v: pct + 5, why: 'This misreads the ratio of change to the original amount.' },
    { v: Math.round(Math.abs(changed - base) / changed * 100), why: 'This divides by the new value instead of the original.' },
  ], (x) => `${x}%`);
  return bp({ skill: 'percentages',
    text: `A quantity ${inc ? 'increased' : 'decreased'} from ${base} to ${changed}. By what percent did it ${inc ? 'increase' : 'decrease'}?`, ...q,
    explanation: `The change is |${changed} − ${base}| = ${Math.abs(changed - base)}. Divide by the original amount: ${Math.abs(changed - base)} ÷ ${base} = ${pct / 100} = ${pct}%.` });
}

/* Problem-Solving — proportion / unit rate. */
function gen2_proportion(tier) {
  const unit = ri(2, 6), cost = unit * ri(2, 5), want = unit * ri(3, 7);
  const price = cost / unit * want; // exact by construction
  const q = mcFromValues(price, [
    { v: cost + (want - unit), why: 'This adds items instead of scaling the price proportionally.' },
    { v: Math.round(cost * want), why: 'This multiplies by the count instead of the unit rate.' },
    { v: Math.round(cost / want * unit), why: 'This sets up the proportion upside down.' },
  ]);
  return bp({ skill: 'ratios',
    text: `If ${unit} identical notebooks cost $${cost}, how much do ${want} of the same notebooks cost?`, ...q,
    explanation: `The unit price is $${cost} ÷ ${unit} = $${cost / unit} each. For ${want} notebooks: ${want} × $${cost / unit} = $${price}.` });
}

/* Advanced — exponential decay by halving. */
function gen2_decay(tier) {
  const start = pick([160, 240, 320, 480, 640]);
  const halvings = ri(2, 4);
  const val = start / Math.pow(2, halvings);
  const q = mcFromValues(val, [
    { v: start - halvings * (start / 2), why: 'This subtracts halves instead of repeatedly halving.' },
    { v: start / (2 * halvings), why: `This divides by 2×${halvings} instead of 2 to the ${halvings} power.` },
    { v: start / Math.pow(2, halvings - 1), why: 'This performs one too few halvings.' },
  ]);
  return bp({ skill: 'exponentials',
    text: `A sample of ${start} milligrams of a substance loses half its mass every hour. How many milligrams remain after ${halvings} hours?`, ...q,
    explanation: `Halving ${halvings} times divides by 2^${halvings} = ${Math.pow(2, halvings)}: ${start} ÷ ${Math.pow(2, halvings)} = ${val} mg.` });
}

/* Advanced — function composition f(g(x)). */
function gen2_composition(tier) {
  const a = ri(2, 4), b = ri(1, 6), c = ri(2, 4), x = ri(1, 5);
  const g = c * x, val = a * g + b;
  const q = mcFromValues(val, [
    { v: a * x + b, why: 'This substitutes x into f directly, skipping g.' },
    { v: c * (a * x + b), why: 'This applies the functions in the wrong order, as g(f(x)).' },
    { v: a * g, why: `This forgets to add the constant ${b} in f.` },
  ]);
  return bp({ skill: 'functions',
    text: `The functions are defined by f(x) = ${a}x + ${b} and g(x) = ${c}x. What is the value of f(g(${x}))?`, ...q,
    explanation: `First find g(${x}) = ${c}(${x}) = ${g}. Then f(${g}) = ${a}(${g}) + ${b} = ${a * g} + ${b} = ${val}.` });
}

/* Advanced — quadratic vertex (minimum value). */
function gen2_vertex(tier) {
  const h = ri(1, 5), k = ri(1, 9);
  const q = mcFromValues(k, [
    { v: h, why: 'This is the x-coordinate of the vertex, not the minimum value.' },
    { v: -k, why: 'Sign error: the constant added outside the square is the minimum here.' },
    { v: h * h + k, why: 'This evaluates at x = 0 instead of at the vertex.' },
  ]);
  return bp({ skill: 'quadratics',
    text: `The function f is defined by f(x) = (x − ${h})² + ${k}. What is the minimum value of f(x)?`, ...q,
    explanation: `A squared term (x − ${h})² is never negative and equals 0 when x = ${h}. So the smallest value of f is 0 + ${k} = ${k}.` });
}

/* Geometry — Pythagorean theorem (hypotenuse from legs, using triples). */
const PYTH_TRIPLES = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25], [20, 21, 29]];
function gen2_pythagorean(tier) {
  const [a, b, c] = pick(PYTH_TRIPLES);
  const q = mcFromValues(c, [
    { v: a + b, why: 'This adds the legs instead of using a² + b² = c².' },
    { v: b - a, why: 'This subtracts the legs; the hypotenuse is longer than either leg.' },
    { v: Math.round(Math.sqrt(a * a + b * b)) + 1, why: 'Check: the hypotenuse squared equals the sum of the squared legs.' },
  ]);
  return bp({ skill: 'area-volume',
    text: `A right triangle has legs of length ${a} and ${b}. What is the length of its hypotenuse?`, ...q,
    explanation: `By the Pythagorean theorem, c² = ${a}² + ${b}² = ${a * a} + ${b * b} = ${a * a + b * b}, so c = √${a * a + b * b} = ${c}.` });
}

/* Geometry — angle sum in a triangle (find the third angle). */
function gen2_triangle_angle(tier) {
  const x = ri(30, 80), y = ri(30, 140 - x);
  const z = 180 - x - y;
  const q = mcFromValues(z, [
    { v: x + y, why: 'This is the sum of the two given angles, not the third angle.' },
    { v: 180 - x, why: 'This subtracts only one of the two given angles.' },
    { v: 90 - z, why: 'This assumes a right angle that is not given.' },
  ], (n) => `${n}°`);
  return bp({ skill: 'angles',
    text: `Two angles of a triangle measure ${x}° and ${y}°. What is the measure of the third angle?`, ...q,
    explanation: `The angles of a triangle sum to 180°. So the third angle is 180° − ${x}° − ${y}° = ${z}°.` });
}

/* Geometry — supplementary angles. */
function gen2_supplement(tier) {
  const a = ri(35, 145);
  const s = 180 - a;
  const q = mcFromValues(s, [
    { v: 90 - a, why: 'This finds the complement (to 90°), not the supplement (to 180°).' },
    { v: a, why: 'Supplementary angles are equal only when both are 90°.' },
    { v: 360 - a, why: 'This uses 360° instead of 180° for a straight angle.' },
  ], (n) => `${n}°`);
  return bp({ skill: 'angles',
    text: `Two angles are supplementary, and one of them measures ${a}°. What is the measure of the other angle?`, ...q,
    explanation: `Supplementary angles add to 180°. So the other angle is 180° − ${a}° = ${s}°.` });
}

/* Geometry — circle circumference/area in terms of π. */
function gen2_circle(tier) {
  const r = ri(2, 9);
  const wantArea = Math.random() < 0.5;
  if (wantArea) {
    const area = r * r;
    const q = mcFromStrings(`${area}π`, [
      { v: `${2 * r}π`, why: 'This is the circumference (2πr), not the area.' },
      { v: `${r}π`, why: 'This uses r instead of r² for the area.' },
      { v: `${area}`, why: 'This drops the factor of π.' },
    ], (g) => `${area + g}π`);
    return bp({ skill: 'circles',
      text: `A circle has radius ${r}. What is its area, in terms of π?`, ...q,
      explanation: `Area = πr² = π(${r})² = ${area}π.` });
  }
  const circ = 2 * r;
  const q = mcFromStrings(`${circ}π`, [
    { v: `${r * r}π`, why: 'This is the area (πr²), not the circumference.' },
    { v: `${r}π`, why: 'This uses πr instead of 2πr.' },
    { v: `${circ}`, why: 'This drops the factor of π.' },
  ], (g) => `${circ + g}π`);
  return bp({ skill: 'circles',
    text: `A circle has radius ${r}. What is its circumference, in terms of π?`, ...q,
    explanation: `Circumference = 2πr = 2π(${r}) = ${circ}π.` });
}

/* Geometry — right-triangle trig ratio from side lengths. */
function gen2_trig_ratio(tier) {
  const [a, b, c] = pick(PYTH_TRIPLES); // opposite=a, adjacent=b, hyp=c
  const useSin = Math.random() < 0.5;
  const num = useSin ? a : b;
  const correct = `${num}/${c}`;
  const q = mcFromStrings(correct, [
    { v: `${c}/${num}`, why: 'This inverts the ratio; sine and cosine put the hypotenuse in the denominator.' },
    { v: `${useSin ? b : a}/${c}`, why: `This uses the ${useSin ? 'adjacent' : 'opposite'} side instead of the ${useSin ? 'opposite' : 'adjacent'} side.` },
    { v: `${a}/${b}`, why: 'This is the tangent ratio (opposite/adjacent), not the requested ratio.' },
  ], (g) => `${num}/${c + g}`);
  return bp({ skill: 'trig',
    text: `In a right triangle, the side opposite angle θ has length ${a}, the side adjacent to θ has length ${b}, and the hypotenuse has length ${c}. What is ${useSin ? 'sin' : 'cos'} θ?`, ...q,
    explanation: `${useSin ? 'Sine is opposite over hypotenuse' : 'Cosine is adjacent over hypotenuse'}: ${useSin ? 'sin' : 'cos'} θ = ${num}/${c}.` });
}

/* Statistics — find the value needed to reach a target mean. Built from a
   target mean and three known scores chosen so the fourth is a valid 0–100
   score, so no fallback is needed. */
function gen2_mean_target(tier) {
  const target = ri(80, 90), n = 4;
  const needed = ri(72, 98);                 // the answer (a valid score)
  const remaining = target * n - needed;      // the three known must total this
  const k1 = ri(Math.max(60, remaining - 190), Math.min(100, remaining - 120));
  const k2 = ri(Math.max(60, remaining - k1 - 100), Math.min(100, remaining - k1 - 60));
  const k3 = remaining - k1 - k2;
  const known = [k1, k2, k3];
  const q = mcFromValues(needed, [
    { v: target, why: 'This is the target average, not the score needed on the last test.' },
    { v: Math.round(known.reduce((s, v) => s + v, 0) / 3), why: 'This averages the known scores instead of solving for the missing one.' },
    { v: needed - 5, why: 'Check by averaging all four scores with this value.' },
  ]);
  return bp({ skill: 'statistics',
    text: `A student has scores of ${known[0]}, ${known[1]}, and ${known[2]} on three tests. What score on a fourth test would give an average (arithmetic mean) of exactly ${target}?`, ...q,
    explanation: `A mean of ${target} over ${n} tests needs a total of ${target} × ${n} = ${target * n}. The three known scores total ${known.reduce((s, v) => s + v, 0)}, so the fourth must be ${target * n} − ${known.reduce((s, v) => s + v, 0)} = ${needed}.` });
}

/* ============================ GRID TEMPLATES =========================== */

function gen2grid_linear_word(tier) {
  const fee = ri(5, 30), per = ri(2, 8), n = ri(4, 9), total = fee + per * n;
  return bp(gridQ('linear-eq',
    `A rental costs a flat $${fee} plus $${per} for each hour. A customer paid $${total}. For how many hours did the customer rent?`, n,
    `Subtract the flat fee: $${total} − $${fee} = $${total - fee}. Divide by the hourly rate: ${total - fee} ÷ ${per} = ${n} hours.`,
    { steps: [`${per}h + ${fee} = ${total}`, `${per}h = ${total - fee}`, `h = ${n}`], hint: 'Undo the flat fee first, then divide by the hourly rate.' }));
}

function gen2grid_percent_change(tier) {
  const base = pick([20, 25, 40, 50, 80]);
  const pct = pick([10, 20, 25, 50]);
  const changed = base + base * pct / 100;
  return bp(gridQ('percentages',
    `A subscription price rose from $${base} to $${changed}. By what percent did the price increase? (Enter your answer as a number of percent, e.g. 25 for 25%.)`, pct,
    `The increase is $${changed} − $${base} = $${changed - base}. As a percent of the original: ${changed - base} ÷ ${base} = ${pct / 100} = ${pct}%.`,
    { hint: 'Divide the change by the original price, not the new price.' }));
}

function gen2grid_proportion(tier) {
  const unit = ri(2, 5), cost = unit * ri(2, 6), want = unit * ri(3, 6);
  const price = cost / unit * want;
  return bp(gridQ('ratios',
    `If ${unit} bags of soil cost $${cost}, how much do ${want} bags cost, in dollars?`, price,
    `Unit price: $${cost} ÷ ${unit} = $${cost / unit}. For ${want} bags: ${want} × $${cost / unit} = $${price}.`,
    { hint: 'Find the price of one bag first.' }));
}

function gen2grid_triangle_angle(tier) {
  const x = ri(35, 80), y = ri(35, 140 - x), z = 180 - x - y;
  return bp(gridQ('angles',
    `Two angles of a triangle measure ${x}° and ${y}°. What is the measure, in degrees, of the third angle?`, z,
    `The angles of a triangle sum to 180°: 180 − ${x} − ${y} = ${z}°.`,
    { hint: 'The three angles of any triangle add to 180°.' }));
}

function gen2grid_pythagorean(tier) {
  const [a, b, c] = pick(PYTH_TRIPLES);
  return bp(gridQ('area-volume',
    `A right triangle has legs of length ${a} and ${b}. What is the length of its hypotenuse?`, c,
    `c² = ${a}² + ${b}² = ${a * a + b * b}, so c = √${a * a + b * b} = ${c}.`,
    { hint: 'Use a² + b² = c².' }));
}

function gen2grid_mean_target(tier) {
  const target = ri(82, 90), needed = ri(74, 96);
  const remaining = target * 4 - needed;
  const k1 = ri(Math.max(60, remaining - 190), Math.min(100, remaining - 120));
  const k2 = ri(Math.max(60, remaining - k1 - 100), Math.min(100, remaining - k1 - 60));
  const k3 = remaining - k1 - k2;
  const known = [k1, k2, k3];
  return bp(gridQ('statistics',
    `A student scored ${known[0]}, ${known[1]}, and ${known[2]} on three quizzes. What score on a fourth quiz gives a mean of exactly ${target}?`, needed,
    `Total needed for a mean of ${target} over 4 quizzes: ${target} × 4 = ${target * 4}. Known total: ${known.reduce((s, v) => s + v, 0)}. Fourth score: ${target * 4} − ${known.reduce((s, v) => s + v, 0)} = ${needed}.`,
    { hint: 'The four scores must total four times the desired mean.' }));
}

/* ===================== REGISTER (augment dispatch pools) ================ */
(function registerBlueprintMath() {
  const MC2 = {
    'linear-eq': [gen2_linear_word],
    'linear-func': [gen2_linear_rate],
    'systems': [gen2_systems_word],
    'percentages': [gen2_percent_change],
    'ratios': [gen2_proportion],
    'exponentials': [gen2_decay],
    'functions': [gen2_composition],
    'quadratics': [gen2_vertex],
    'area-volume': [gen2_pythagorean],
    'angles': [gen2_triangle_angle, gen2_supplement],
    'circles': [gen2_circle],
    'trig': [gen2_trig_ratio],
    'statistics': [gen2_mean_target],
  };
  const GRID2 = {
    'linear-eq': [gen2grid_linear_word],
    'percentages': [gen2grid_percent_change],
    'ratios': [gen2grid_proportion],
    'angles': [gen2grid_triangle_angle],
    'area-volume': [gen2grid_pythagorean],
    'statistics': [gen2grid_mean_target],
  };
  if (typeof MATH_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(MC2)) {
      const orig = MATH_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      MATH_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
  if (typeof GRID_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(GRID2)) {
      const orig = GRID_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      GRID_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
})();
