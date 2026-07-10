/* SAT Quest — ORIGINAL math generator templates (blueprint batch 4).
   Loaded AFTER mathgen.js, gridgen.js, mathgen2.js, and mathgen3.js. This batch
   targets the areas that the effective-pool measurement showed were thinnest and
   most likely to feel repetitive over daily use: sampling & study design, trig
   ratios and identities, circles (arcs, sectors, equations), radicals,
   exponential growth/decay, quadratics, scatterplots, and two-way-table data.

   Drawn from ABSTRACT blueprints of the digital SAT: no official question text,
   numbers, scenarios, or figures are used. Every instance is generated fresh and
   tagged source:'blueprint-generated'. Depends on globals from earlier batches:
   ri, pick, round2, mcFromValues, mcFromStrings, gridQ, PYTH_TRIPLES,
   MATH_GENERATORS, GRID_GENERATORS. */

function bp4(q) { return { ...q, source: 'blueprint-generated' }; }
function gcd4(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; }

/* ============================ SAMPLING / STUDY DESIGN ============================== */

/* Which sample best supports a generalization about a population. */
function gen4_sampling_valid(tier) {
  const scenes = [
    { pop: 'all students at a large high school', good: 'a random sample of students drawn from the full enrollment list', bad1: 'students leaving a single after-school chess club', bad2: 'volunteers who replied to a flyer in the science wing', bad3: 'the first thirty students to arrive one morning' },
    { pop: 'all adults in a city', good: 'a random sample of residents selected from the city’s address records', bad1: 'people shopping at one downtown electronics store', bad2: 'listeners who called in to a sports radio show', bad3: 'attendees at a single evening concert' },
    { pop: 'all customers of an online store', good: 'a random sample drawn from the store’s complete customer list', bad1: 'customers who left a product review', bad2: 'shoppers who used a discount code from one blog', bad3: 'people who visited the store’s booth at one fair' },
    { pop: 'all commuters in a region', good: 'a random sample selected from the region’s registered transit riders', bad1: 'drivers stopped at one busy intersection', bad2: 'riders on a single morning express train', bad3: 'people who filled out a survey at one station kiosk' },
  ];
  const s = pick(scenes);
  const q = mcFromStrings(s.good, [
    { v: s.bad1, why: 'This group is self-selected or narrow, so it is not representative of the whole population.' },
    { v: s.bad2, why: 'This is a convenience or self-selected group and can be biased toward one type of person.' },
    { v: s.bad3, why: 'This captures only people at one place or event, not a cross-section of the population.' },
  ], () => 'a sample chosen for convenience at one location');
  return bp4({ skill: 'sampling',
    text: `A researcher wants to estimate an opinion held by ${s.pop}. Which sampling method would best support a reliable generalization to the whole population?`, ...q,
    explanation: 'A random sample drawn from the entire population gives every member an equal chance of selection, which best supports generalizing to that population. The other groups are self-selected or tied to one place, so they can be biased.' });
}

/* Margin-of-error interpretation: plausible range for the true value. */
function gen4_sampling_margin(tier) {
  const est = ri(30, 70), moe = pick([2, 3, 4, 5]);
  const lo = est - moe, hi = est + moe;
  const q = mcFromStrings(`between ${lo}% and ${hi}%`, [
    { v: `exactly ${est}%`, why: 'The estimate is a single sample value; the margin of error gives a range around it, not an exact figure.' },
    { v: `between ${est - 2 * moe}% and ${est + 2 * moe}%`, why: 'This doubles the stated margin of error.' },
    { v: `greater than ${hi}%`, why: 'The plausible values lie within the margin on both sides, not only above it.' },
  ], () => `between ${lo - 1}% and ${hi + 1}%`);
  return bp4({ skill: 'sampling',
    text: `In a random survey, ${est}% of respondents favored a proposal, with a margin of error of ${moe} percentage points. Which statement is most appropriate about the true percentage in the full population?`, ...q,
    explanation: `The margin of error means the true value is plausibly within ${moe} points of the estimate: from ${est} − ${moe} = ${lo}% to ${est} + ${moe} = ${hi}%.` });
}

/* ============================ TRIGONOMETRY ============================== */

/* Complementary-angle identity: sin θ = cos(90° − θ). */
function gen4_trig_complement(tier) {
  const [a, b, c] = pick(PYTH_TRIPLES);
  const useSin = Math.random() < 0.5;
  const ratio = `${useSin ? a : b}/${c}`;
  const q = mcFromStrings(ratio, [
    { v: `${useSin ? b : a}/${c}`, why: 'This is the other co-ratio; sin θ equals cos of the complement, keeping the same value.' },
    { v: `${c}/${useSin ? a : b}`, why: 'This inverts the ratio.' },
    { v: `${a}/${b}`, why: 'This is the tangent ratio, not a sine or cosine.' },
  ], () => `${a}/${a + b}`);
  return bp4({ skill: 'trig',
    text: `In a right triangle, ${useSin ? 'sin' : 'cos'} θ = ${ratio}. What is the value of ${useSin ? 'cos' : 'sin'}(90° − θ)?`, ...q,
    explanation: `For complementary angles, ${useSin ? 'sin θ = cos(90° − θ)' : 'cos θ = sin(90° − θ)'}. So ${useSin ? 'cos' : 'sin'}(90° − θ) equals ${useSin ? 'sin' : 'cos'} θ = ${ratio}.` });
}

/* Find a missing side using a given trig ratio and a known side (integer by triple). */
function gen4_trig_side(tier) {
  const [a, b, c] = pick(PYTH_TRIPLES);
  const scale = ri(1, 3);
  const opp = a * scale, hyp = c * scale;
  const q = mcFromValues(opp, [
    { v: hyp, why: 'This is the hypotenuse, not the side opposite the angle.' },
    { v: b * scale, why: 'This is the adjacent side, not the opposite side.' },
    { v: Math.round(hyp * a / c) + 1, why: 'Recompute: opposite = hypotenuse × sin θ.' },
  ]);
  return bp4({ skill: 'trig',
    text: `In a right triangle, the hypotenuse has length ${hyp} and sin θ = ${a}/${c}. What is the length of the side opposite angle θ?`, ...q,
    explanation: `sin θ = opposite ÷ hypotenuse, so opposite = ${hyp} × ${a}/${c} = ${opp}.` });
}

/* ============================ CIRCLES ============================== */

/* Arc length or sector area from a central angle, in terms of π. */
function gen4_circle_sector(tier) {
  const r = pick([3, 4, 6, 9, 12]);
  const deg = pick([30, 45, 60, 90, 120, 180]);
  const frac = deg / 360;
  const wantArc = Math.random() < 0.5;
  if (wantArc) {
    const arcNum = 2 * r * frac; // coefficient of π
    const arc = `${arcNum % 1 === 0 ? arcNum : round2(arcNum)}π`;
    const q = mcFromStrings(arc, [
      { v: `${r * r * frac}π`, why: 'This uses the sector-area formula instead of the arc-length formula.' },
      { v: `${2 * r}π`, why: 'This is the full circumference, ignoring that the arc is only part of it.' },
      { v: `${round2(2 * r * (deg / 180))}π`, why: 'This divides by 180 instead of 360 when taking the fraction.' },
    ], (g) => `${arcNum + g + 1}π`);
    return bp4({ skill: 'circles',
      text: `A circle has radius ${r}. What is the length of an arc that subtends a central angle of ${deg}°, in terms of π?`, ...q,
      explanation: `Arc length = (${deg}/360) × 2π(${r}) = ${frac} × ${2 * r}π = ${arc}.` });
  }
  const areaNum = r * r * frac;
  const area = `${areaNum % 1 === 0 ? areaNum : round2(areaNum)}π`;
  const q = mcFromStrings(area, [
    { v: `${round2(2 * r * frac)}π`, why: 'This uses the arc-length formula instead of the sector-area formula.' },
    { v: `${r * r}π`, why: 'This is the whole circle’s area, ignoring the fraction the sector covers.' },
    { v: `${round2(r * r * (deg / 180))}π`, why: 'This divides by 180 instead of 360.' },
  ], (g) => `${areaNum + g + 1}π`);
  return bp4({ skill: 'circles',
    text: `A circle has radius ${r}. What is the area of a sector with a central angle of ${deg}°, in terms of π?`, ...q,
    explanation: `Sector area = (${deg}/360) × π(${r})² = ${frac} × ${r * r}π = ${area}.` });
}

/* Center and radius from a circle equation (x − h)² + (y − k)² = r². */
function gen4_circle_equation(tier) {
  // Nonzero coordinates with distinct absolute values so the center and all
  // three distractors — (−h,−k), (k,h), (h,−k) — stay distinct.
  const nz = () => pick([-5, -4, -3, -2, 2, 3, 4, 5]);
  let h = nz(), k = nz();
  while (Math.abs(h) === Math.abs(k)) k = nz();
  const r = ri(2, 8);
  const askRadius = Math.random() < 0.5;
  if (askRadius) {
    const q = mcFromValues(r, [
      { v: r * r, why: 'The right side is r², so take its square root to get the radius.' },
      { v: r + 1, why: 'Recompute √(r²).' },
      { v: Math.max(1, r - 1), why: 'Recompute √(r²).' },
    ]);
    const hs = h >= 0 ? `− ${h}` : `+ ${-h}`, ks = k >= 0 ? `− ${k}` : `+ ${-k}`;
    return bp4({ skill: 'circles',
      text: `A circle is given by (x ${hs})² + (y ${ks})² = ${r * r}. What is the radius of the circle?`, ...q,
      explanation: `In (x − h)² + (y − k)² = r², the right side equals r² = ${r * r}, so r = √${r * r} = ${r}.` });
  }
  const correct = `(${h}, ${k})`;
  const q = mcFromStrings(correct, [
    { v: `(${-h}, ${-k})`, why: 'Sign error: the center is (h, k), and the equation shows (x − h) and (y − k).' },
    { v: `(${k}, ${h})`, why: 'The coordinates are swapped.' },
    { v: `(${h}, ${-k})`, why: 'Check the sign of the y-coordinate from (y − k).' },
  ], () => `(${h + 1}, ${k})`);
  const hs = h >= 0 ? `− ${h}` : `+ ${-h}`, ks = k >= 0 ? `− ${k}` : `+ ${-k}`;
  return bp4({ skill: 'circles',
    text: `A circle is given by (x ${hs})² + (y ${ks})² = ${r * r}. What are the coordinates of its center?`, ...q,
    explanation: `The equation (x − h)² + (y − k)² = r² has center (h, k). Here that is (${h}, ${k}).` });
}

/* ============================ RADICALS / EXPONENTS ============================== */

/* Solve a simple radical equation √x = k (or √(x) + c = k). */
function gen4_radical_equation(tier) {
  const k = ri(3, 9), c = ri(0, 5);
  const x = k * k;
  const q = mcFromValues(x, [
    { v: k, why: 'This is the value of the square root, not of x itself.' },
    { v: k - c, why: 'Isolate the radical, then square both sides.' },
    { v: 2 * k, why: 'Squaring is not the same as doubling.' },
  ]);
  return bp4({ skill: 'radicals',
    text: `If √x ${c ? '+ ' + c + ' = ' + (k + c) : '= ' + k}, what is the value of x?`, ...q,
    explanation: `${c ? `Subtract ${c}: √x = ${k}. ` : ''}Square both sides: x = ${k}² = ${x}.` });
}

/* Add like radicals: a√m + b√m = (a+b)√m. */
function gen4_radical_add(tier) {
  const m = pick([2, 3, 5, 7]), a = ri(2, 6), b = ri(2, 6);
  const correct = `${a + b}√${m}`;
  const q = mcFromStrings(correct, [
    { v: `${a + b}√${2 * m}`, why: 'When adding like radicals, keep the radicand the same; only the coefficients add.' },
    { v: `${a * b}√${m}`, why: 'Add the coefficients, do not multiply them.' },
    { v: `${a + b}√${m * m}`, why: 'The radicand does not change when adding like terms.' },
  ], (g) => `${a + b + g + 1}√${m}`);
  return bp4({ skill: 'radicals',
    text: `What is ${a}√${m} + ${b}√${m} in simplest form?`, ...q,
    explanation: `These are like radicals (both √${m}), so add the coefficients: (${a} + ${b})√${m} = ${correct}.` });
}

/* Exponential growth/decay: evaluate y = a·(1 ± r)^t for small t. */
function gen4_exp_growth(tier) {
  const a = pick([100, 200, 500, 1000]);
  const rPct = pick([10, 20, 50]);
  const grow = Math.random() < 0.5;
  const factor = grow ? 1 + rPct / 100 : 1 - rPct / 100;
  const t = ri(2, 3);
  const val = Math.round(a * Math.pow(factor, t));
  const q = mcFromValues(val, [
    { v: Math.round(a * (1 + (grow ? 1 : -1) * rPct / 100 * t)), why: 'This grows by a fixed amount each period (linear) instead of by a percent (exponential).' },
    { v: Math.round(a * factor), why: 'This applies the change for only one period, not for all ' + t + '.' },
    { v: Math.round(a * Math.pow(factor, t + 1)), why: 'This applies the change one too many times.' },
  ]);
  return bp4({ skill: 'exponentials',
    text: `A quantity starts at ${a} and ${grow ? 'increases' : 'decreases'} by ${rPct}% each year. What is its value after ${t} years?`, ...q,
    explanation: `Each year the value is multiplied by ${factor}. After ${t} years: ${a} × ${factor}^${t} = ${val}.` });
}

/* Identify the growth/decay factor and rate from y = a·b^t. */
function gen4_exp_factor(tier) {
  const a = pick([50, 80, 120]), rPct = pick([5, 10, 25, 30]);
  const grow = Math.random() < 0.5;
  const b = grow ? 1 + rPct / 100 : 1 - rPct / 100;
  const correct = `${grow ? 'growth' : 'decay'} of ${rPct}% per period`;
  const q = mcFromStrings(correct, [
    { v: `${grow ? 'decay' : 'growth'} of ${rPct}% per period`, why: `A base ${grow ? 'greater than 1 means growth' : 'less than 1 means decay'}, not the reverse.` },
    { v: `${grow ? 'growth' : 'decay'} of ${Math.round(b * 100)}% per period`, why: 'The rate is how far the base is from 1, not the base written as a percent.' },
    { v: `a constant increase of ${rPct} per period`, why: 'A base multiplier gives a percent change, not a constant amount.' },
  ], () => `growth of ${rPct + 1}% per period`);
  return bp4({ skill: 'exponentials',
    text: `The function f(t) = ${a}(${b})^t models a quantity over time. Which best describes how the quantity changes each period?`, ...q,
    explanation: `A base of ${b} means each period the quantity is multiplied by ${b}, a ${grow ? 'growth' : 'decay'} of ${rPct}% per period.` });
}

/* ============================ QUADRATICS ============================== */

/* Axis of symmetry / vertex x-coordinate of y = a(x − h)² + k. */
function gen4_quad_axis(tier) {
  const h = ri(-5, 5), k = ri(-6, 6), a = pick([1, 2, -1, -2]);
  const q = mcFromValues(h, [
    { v: -h, why: 'The vertex form (x − h)² gives x = h, so read the sign carefully.' },
    { v: k, why: 'This is the y-coordinate of the vertex, not the axis of symmetry.' },
    { v: h + a, why: 'The coefficient a does not shift the axis of symmetry.' },
  ]);
  const hs = h >= 0 ? `− ${h}` : `+ ${-h}`, ks = k >= 0 ? `+ ${k}` : `− ${-k}`;
  return bp4({ skill: 'quadratics',
    text: `The graph of y = ${a === 1 ? '' : a === -1 ? '−' : a}(x ${hs})² ${ks} is a parabola. What is the x-coordinate of its vertex (the axis of symmetry)?`, ...q,
    explanation: `In vertex form y = a(x − h)² + k, the vertex is at x = h. Here x ${hs} means h = ${h}.` });
}

/* Sum/product of the roots from factored form. */
function gen4_quad_sumprod(tier) {
  let p = ri(-6, 5), q2 = ri(p + 1, 7);
  const wantSum = Math.random() < 0.5;
  const val = wantSum ? p + q2 : p * q2;
  const other = wantSum ? p * q2 : p + q2;
  const q = mcFromValues(val, [
    { v: other, why: `This is the ${wantSum ? 'product' : 'sum'} of the roots, not the ${wantSum ? 'sum' : 'product'}.` },
    { v: -val, why: 'Sign error — read each root from (x − r) as r.' },
    { v: wantSum ? p - q2 : Math.abs(p) + Math.abs(q2), why: 'Recompute using the actual roots ' + p + ' and ' + q2 + '.' },
  ]);
  return bp4({ skill: 'quadratics',
    text: `The solutions of a quadratic equation are x = ${p} and x = ${q2}. What is the ${wantSum ? 'sum' : 'product'} of the solutions?`, ...q,
    explanation: `The ${wantSum ? 'sum' : 'product'} of the roots ${p} and ${q2} is ${p} ${wantSum ? '+' : '×'} ${q2} = ${val}.` });
}

/* ============================ SCATTERPLOTS / DATA ============================== */

/* Use a line of best fit to predict / interpret slope. */
function gen4_scatter_predict(tier) {
  const m = ri(2, 6), b = ri(3, 20), x = ri(4, 12);
  const y = m * x + b;
  const q = mcFromValues(y, [
    { v: m * x, why: 'This forgets to add the y-intercept of the line.' },
    { v: m + b + x, why: 'Substitute x into y = mx + b and evaluate.' },
    { v: (m + 1) * x + b, why: 'Use the given slope exactly.' },
  ]);
  return bp4({ skill: 'scatterplots',
    text: `A line of best fit for a scatterplot is y = ${m}x + ${b}, where x is a plant’s age in weeks and y is its height in centimeters. The model predicts the height of a plant that is ${x} weeks old to be about how many centimeters?`, ...q,
    explanation: `Substitute x = ${x}: y = ${m}(${x}) + ${b} = ${m * x} + ${b} = ${y} centimeters.` });
}

/* Interpret the slope of a line of best fit in context. */
function gen4_scatter_slope(tier) {
  const m = ri(2, 9);
  const correct = `an increase of about ${m} centimeters per week`;
  const q = mcFromStrings(correct, [
    { v: `an increase of about ${m} weeks per centimeter`, why: 'The slope is the change in y (height) per change in x (week), not the reverse.' },
    { v: `a total height of ${m} centimeters`, why: 'The slope is a rate of change, not a single total value.' },
    { v: `a decrease of about ${m} centimeters per week`, why: 'A positive slope indicates an increase, not a decrease.' },
  ], () => `an increase of about ${m + 1} centimeters per week`);
  return bp4({ skill: 'scatterplots',
    text: `For a scatterplot of plant height (in centimeters) versus age (in weeks), the line of best fit has a slope of ${m}. What does this slope represent?`, ...q,
    explanation: `The slope is the change in the y-value per one-unit change in x, so it represents about ${m} more centimeters of height for each additional week.` });
}

/* Two-way table: probability or percentage. */
function gen4_two_way(tier) {
  const a = ri(20, 40), b = ri(20, 40), c = ri(15, 35), d = ri(15, 35);
  const rowTotal = a + b, grand = a + b + c + d;
  const g = gcd4(a, rowTotal);
  const correct = `${a / g}/${rowTotal / g}`;
  const q = mcFromStrings(correct, [
    { v: `${a}/${grand}`, why: 'This divides by the grand total instead of the row total for the group asked about.' },
    { v: `${b / gcd4(b, rowTotal)}/${rowTotal / gcd4(b, rowTotal)}`, why: 'This uses the other category within the row.' },
    { v: `${rowTotal / g}/${a / g}`, why: 'This inverts the fraction.' },
  ], () => `${a}/${rowTotal + 1}`);
  return bp4({ skill: 'probability',
    text: `In a survey, ${a} adults and ${b} teens chose option X, while ${c} adults and ${d} teens chose option Y. If one respondent who chose option X is selected at random, what is the probability that the respondent is an adult?`, ...q,
    explanation: `Among the ${rowTotal} people who chose X, ${a} are adults, so the probability is ${a}/${rowTotal}${g > 1 ? ' = ' + correct : ''}.` });
}

/* ============================ GRID TEMPLATES =========================== */

function gen4grid_exp_growth(tier) {
  const a = pick([100, 200, 400]), rPct = pick([10, 25, 50]);
  const factor = 1 + rPct / 100, t = 2, val = Math.round(a * factor * factor);
  return bp4(gridQ('exponentials',
    `A population of ${a} bacteria grows by ${rPct}% each hour. How many bacteria are there after ${t} hours?`, val,
    `Each hour multiply by ${factor}: ${a} × ${factor}² = ${val}.`,
    { steps: [`after 1 hr: ${a} × ${factor} = ${a * factor}`, `after 2 hr: ${a * factor} × ${factor} = ${val}`], hint: 'Multiply by the growth factor once for each hour.' }));
}

function gen4grid_circle_sector(tier) {
  const r = pick([6, 9, 12]), deg = pick([90, 120, 180]);
  const arcNum = 2 * r * (deg / 360);
  return bp4(gridQ('circles',
    `A circle has radius ${r}. An arc subtends a central angle of ${deg}°. What is the arc length divided by π? (Enter the coefficient of π.)`, round2(arcNum),
    `Arc length = (${deg}/360) × 2π(${r}) = ${round2(arcNum)}π, so the coefficient of π is ${round2(arcNum)}.`,
    { hint: 'Arc length = (angle/360) × 2πr.' }));
}

function gen4grid_radical(tier) {
  const k = ri(4, 12), x = k * k;
  return bp4(gridQ('radicals',
    `If √x = ${k}, what is the value of x?`, x,
    `Square both sides: x = ${k}² = ${x}.`,
    { hint: 'Undo a square root by squaring.' }));
}

function gen4grid_quad_sumprod(tier) {
  let p = ri(1, 5), q2 = ri(p + 1, 8);
  return bp4(gridQ('quadratics',
    `The solutions of a quadratic equation are ${p} and ${q2}. What is the sum of the solutions?`, p + q2,
    `The sum of the roots ${p} and ${q2} is ${p} + ${q2} = ${p + q2}.`,
    { hint: 'Add the two roots.' }));
}

function gen4grid_trig_side(tier) {
  const [a, , c] = pick(PYTH_TRIPLES), scale = ri(1, 3);
  return bp4(gridQ('trig',
    `In a right triangle, the hypotenuse is ${c * scale} and sin θ = ${a}/${c}. What is the length of the side opposite θ?`, a * scale,
    `opposite = hypotenuse × sin θ = ${c * scale} × ${a}/${c} = ${a * scale}.`,
    { hint: 'sin θ = opposite ÷ hypotenuse.' }));
}

/* ===================== REGISTER (augment dispatch pools) ================ */
(function registerBlueprintMath4() {
  const MC4 = {
    'sampling': [gen4_sampling_valid, gen4_sampling_margin],
    'trig': [gen4_trig_complement, gen4_trig_side],
    'circles': [gen4_circle_sector, gen4_circle_equation],
    'radicals': [gen4_radical_equation, gen4_radical_add],
    'exponentials': [gen4_exp_growth, gen4_exp_factor],
    'quadratics': [gen4_quad_axis, gen4_quad_sumprod],
    'scatterplots': [gen4_scatter_predict, gen4_scatter_slope],
    'probability': [gen4_two_way],
  };
  const GRID4 = {
    'exponentials': [gen4grid_exp_growth],
    'circles': [gen4grid_circle_sector],
    'radicals': [gen4grid_radical],
    'quadratics': [gen4grid_quad_sumprod],
    'trig': [gen4grid_trig_side],
  };
  if (typeof MATH_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(MC4)) {
      const orig = MATH_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      MATH_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
  if (typeof GRID_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(GRID4)) {
      const orig = GRID_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      GRID_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
})();
