/* SAT Quest — ORIGINAL math generator templates (blueprint batch 3).
   Loaded AFTER mathgen.js, gridgen.js, and mathgen2.js. Adds new reasoning
   patterns not covered by the earlier batches — slope from two points,
   inequalities, x-intercepts, distributing, quadratic roots, exponent rules,
   polynomial evaluation, radicals, median, ratio partition, table probability,
   speed/distance, percent-of, triangle & box measures, similar triangles, and
   special right triangles — so every math skill draws from a wider variety of
   templates.

   Drawn from ABSTRACT blueprints of the digital SAT: no official question text,
   numbers, scenarios, or figures are used. Every instance is generated fresh
   and tagged source:'blueprint-generated'. Depends on globals from
   mathgen.js/gridgen.js: ri, pick, round2, mcFromValues, mcFromStrings, gridQ,
   MATH_GENERATORS, GRID_GENERATORS. */

function bp3(q) { return { ...q, source: 'blueprint-generated' }; }

/* ============================ MC TEMPLATES ============================== */

/* Algebra — slope between two points. */
function gen3_slope(tier) {
  const m = pick([-3, -2, -1, 2, 3, 4]);
  const x1 = ri(-4, 3), run = ri(2, 5), x2 = x1 + run;
  const y1 = ri(-5, 6), y2 = y1 + m * run;
  const q = mcFromValues(m, [
    { v: -m, why: 'Sign error — check the order of subtraction in both the numerator and denominator.' },
    { v: y2 - y1, why: 'This is the rise (change in y) only; slope is rise over run.' },
    { v: run, why: 'This is the run (change in x) only; slope is rise over run.' },
  ]);
  return bp3({ skill: 'linear-func',
    text: `A line passes through the points (${x1}, ${y1}) and (${x2}, ${y2}). What is the slope of the line?`, ...q,
    explanation: `Slope = (y₂ − y₁)/(x₂ − x₁) = (${y2} − ${y1})/(${x2} − ${x1}) = ${y2 - y1}/${run} = ${m}.` });
}

/* Algebra — solve a two-step linear inequality for its boundary value. */
function gen3_inequality(tier) {
  const a = ri(2, 6), x = ri(2, 9), b = ri(1, 12), c = a * x + b;
  const q = mcFromValues(x, [
    { v: c - b, why: 'This forgets to divide by the coefficient of x after subtracting.' },
    { v: Math.round((c + b) / a), why: 'This adds the constant instead of subtracting it.' },
    { v: x + 1, why: 'Off by one — substitute the boundary value back to check.' },
  ]);
  return bp3({ skill: 'inequalities',
    text: `For which value of x is ${a}x + ${b} = ${c} the boundary of the solution to ${a}x + ${b} ≤ ${c}? (Find the largest x that satisfies the inequality.)`, ...q,
    explanation: `Solve ${a}x + ${b} ≤ ${c}: subtract ${b} to get ${a}x ≤ ${c - b}, then divide by ${a} to get x ≤ ${x}. The largest such x is ${x}.` });
}

/* Algebra — x-intercept of a line y = mx + b. */
function gen3_x_intercept(tier) {
  const m = pick([2, 3, 4, 5]);
  const root = ri(-4, 5), b = -m * root; // so x-intercept is the integer `root`
  const q = mcFromValues(root, [
    { v: b, why: 'This is the y-intercept (where x = 0), not the x-intercept.' },
    { v: -root, why: 'Sign error — solve mx + b = 0 carefully.' },
    { v: Math.round(b / m) + 1, why: 'Check by substituting: the y-value must be 0 at the x-intercept.' },
  ]);
  return bp3({ skill: 'linear-eq',
    text: `The line y = ${m}x ${b >= 0 ? '+ ' + b : '− ' + Math.abs(b)} crosses the x-axis at what value of x?`, ...q,
    explanation: `At the x-intercept, y = 0. Solve ${m}x ${b >= 0 ? '+ ' + b : '− ' + Math.abs(b)} = 0: ${m}x = ${-b}, so x = ${root}.` });
}

/* Algebra — distribute and identify a coefficient. */
function gen3_distribute(tier) {
  const a = ri(2, 6), b = ri(2, 7), c = ri(1, 8);
  const coef = a * b; // coefficient of x in a(bx + c)
  const q = mcFromValues(coef, [
    { v: a * c, why: 'This is the constant term a·c, not the coefficient of x.' },
    { v: b + a, why: 'This adds a and b instead of multiplying them.' },
    { v: b, why: 'This forgets to multiply the inside coefficient by the factor outside.' },
  ]);
  return bp3({ skill: 'equivalent',
    text: `When ${a}(${b}x + ${c}) is written in the form px + q, what is the value of p?`, ...q,
    explanation: `Distribute: ${a}(${b}x + ${c}) = ${a * b}x + ${a * c}. The coefficient of x is p = ${a * b}.` });
}

/* Advanced — greater root of a factorable quadratic. */
function gen3_quadratic_roots(tier) {
  let p = ri(-6, 4), q2 = ri(p + 1, 7); // roots p < q2
  if (p === q2) q2 = p + 1;
  const bCoef = -(p + q2), cCoef = p * q2;
  const q = mcFromValues(q2, [
    { v: p, why: 'This is the smaller root; the question asks for the greater one.' },
    { v: -q2, why: 'Sign error — the roots make each factor (x − r) equal to zero.' },
    { v: p + q2, why: 'This is the sum of the roots, not a root itself.' },
  ]);
  const bStr = bCoef === 0 ? '' : (bCoef > 0 ? ` + ${bCoef}x` : ` − ${Math.abs(bCoef)}x`);
  const cStr = cCoef >= 0 ? ` + ${cCoef}` : ` − ${Math.abs(cCoef)}`;
  return bp3({ skill: 'quadratics',
    text: `What is the greater solution to the equation x²${bStr}${cStr} = 0?`, ...q,
    explanation: `Factor: x²${bStr}${cStr} = (x − ${p})(x − ${q2}) = 0. The solutions are x = ${p} and x = ${q2}; the greater is ${q2}.` });
}

/* Advanced — exponent rules, presented symbolically. */
function gen3_exponents(tier) {
  const base = pick(['x', 'y', 'a', 't']);
  const a = ri(2, 6), b = ri(2, 6);
  const powerOfPower = Math.random() < 0.5;
  const correctExp = powerOfPower ? a * b : a + b;
  const correct = `${base}^${correctExp}`;
  const q = mcFromStrings(correct, [
    { v: `${base}^${powerOfPower ? a + b : a * b}`, why: powerOfPower ? 'For a power raised to a power, multiply the exponents; do not add them.' : 'When multiplying like bases, add the exponents; do not multiply them.' },
    { v: `${base}^${Math.abs(a - b)}`, why: 'This subtracts the exponents, which is the rule for division, not this operation.' },
    { v: `${base}^${correctExp + 1}`, why: 'Recount the exponent using the correct rule.' },
  ], (g) => `${base}^${correctExp + g + 1}`);
  const expr = powerOfPower ? `(${base}^${a})^${b}` : `${base}^${a} · ${base}^${b}`;
  return bp3({ skill: 'equivalent',
    text: `Which expression is equivalent to ${expr}, where ${base} > 0?`, ...q,
    explanation: powerOfPower
      ? `A power raised to a power multiplies the exponents: (${base}^${a})^${b} = ${base}^(${a}·${b}) = ${correct}.`
      : `Multiplying like bases adds the exponents: ${base}^${a} · ${base}^${b} = ${base}^(${a}+${b}) = ${correct}.` });
}

/* Advanced — evaluate a quadratic polynomial. */
function gen3_poly_eval(tier) {
  const a = ri(1, 4), b = pick([-4, -3, -2, 2, 3, 4]), c = ri(-5, 6), x = ri(-3, 4);
  const val = a * x * x + b * x + c;
  const q = mcFromValues(val, [
    { v: a * x + b * x + c, why: 'This treats x² as x; square the input before multiplying by a.' },
    { v: a * x * x - b * x + c, why: 'Sign error on the middle term when substituting a negative x.' },
    { v: val + b, why: 'Check each term: a·x², then b·x, then the constant.' },
  ]);
  const bStr = b >= 0 ? `+ ${b}x` : `− ${Math.abs(b)}x`;
  const cStr = c >= 0 ? `+ ${c}` : `− ${Math.abs(c)}`;
  return bp3({ skill: 'functions',
    text: `The function f is defined by f(x) = ${a}x² ${bStr} ${cStr}. What is the value of f(${x})?`, ...q,
    explanation: `Substitute x = ${x}: ${a}(${x})² ${bStr.replace('x', `(${x})`)} ${cStr} = ${a * x * x} ${b >= 0 ? '+ ' + b * x : '− ' + Math.abs(b * x)} ${cStr} = ${val}.` });
}

/* Advanced — simplify a radical of the form √(k²·m). */
function gen3_radical(tier) {
  const k = ri(2, 6), m = pick([2, 3, 5, 6, 7]);
  const inside = k * k * m;
  const correct = `${k}√${m}`;
  const q = mcFromStrings(correct, [
    { v: `${k * m}`, why: 'This drops the radical entirely; only the perfect-square factor comes out.' },
    { v: `${k}√${k * m}`, why: 'This leaves too much under the radical — pull out the full perfect square.' },
    { v: `${m}√${k}`, why: 'This swaps which factor is a perfect square.' },
  ], (g) => `${k + g}√${m}`);
  return bp3({ skill: 'radicals',
    text: `Which of the following is equal to √${inside} in simplest radical form?`, ...q,
    explanation: `Factor out the perfect square: ${inside} = ${k * k}·${m}, so √${inside} = √${k * k}·√${m} = ${k}√${m}.` });
}

/* Problem-Solving — median of an odd-length data set. */
function gen3_median(tier) {
  const nums = [];
  while (nums.length < 5) { const n = ri(3, 40); if (!nums.includes(n)) nums.push(n); }
  const sorted = nums.slice().sort((a, b) => a - b);
  const med = sorted[2];
  const mean = Math.round(nums.reduce((s, v) => s + v, 0) / nums.length);
  const q = mcFromValues(med, [
    { v: mean, why: 'This is the mean (average), not the median (middle value when ordered).' },
    { v: nums[2], why: 'This is the middle of the unordered list; you must sort first.' },
    { v: sorted[3], why: 'Recount: with 5 values, the median is the 3rd value when ordered.' },
  ]);
  return bp3({ skill: 'statistics',
    text: `A data set consists of the values ${nums.join(', ')}. What is the median of the data set?`, ...q,
    explanation: `Order the values: ${sorted.join(', ')}. With ${nums.length} values, the median is the middle (3rd) value: ${med}.` });
}

/* Problem-Solving — split a total in a given ratio. */
function gen3_ratio_partition(tier) {
  const a = ri(2, 5), b = ri(2, 5), unit = ri(4, 12);
  const total = (a + b) * unit, part = a * unit;
  const q = mcFromValues(part, [
    { v: b * unit, why: 'This is the other share (the b part), not the a part.' },
    { v: Math.round(total / 2), why: 'This splits the total evenly instead of in the given ratio.' },
    { v: Math.round(total * a / 100), why: 'This treats the ratio number as a percent of the total.' },
  ]);
  return bp3({ skill: 'ratios',
    text: `A total of ${total} is divided between two shares in the ratio ${a} : ${b}. What is the size of the first (${a}-part) share?`, ...q,
    explanation: `The ratio has ${a} + ${b} = ${a + b} equal parts, so each part is ${total} ÷ ${a + b} = ${unit}. The ${a}-part share is ${a} × ${unit} = ${part}.` });
}

/* Problem-Solving — probability from a two-category count. */
function gen3_probability(tier) {
  const fav = ri(3, 12), other = ri(4, 15), total = fav + other;
  // reduce the fraction
  const g = (function gcd(x, y) { return y ? gcd(y, x % y) : x; })(fav, total);
  const correct = `${fav / g}/${total / g}`;
  const q = mcFromStrings(correct, [
    { v: `${fav}/${other}`, why: 'This compares favorable to unfavorable; probability is favorable over the total.' },
    { v: `${other / g}/${total / g}`, why: 'This is the probability of the other outcome.' },
    { v: `${total / g}/${fav / g}`, why: 'This inverts the ratio; probability is at most 1.' },
  ], () => `${fav}/${total + 1}`);
  return bp3({ skill: 'probability',
    text: `A box contains ${fav} blue marbles and ${other} red marbles. If one marble is chosen at random, what is the probability that it is blue?`, ...q,
    explanation: `There are ${total} marbles in all and ${fav} are blue, so the probability is ${fav}/${total}${g > 1 ? ' = ' + correct : ''}.` });
}

/* Problem-Solving — distance = rate × time (solve for one). */
function gen3_speed(tier) {
  const rate = ri(30, 65), time = ri(2, 6), dist = rate * time;
  const solveForRate = Math.random() < 0.5;
  if (solveForRate) {
    const q = mcFromValues(rate, [
      { v: dist - time, why: 'Distance and time are combined by division here, not subtraction.' },
      { v: dist * time, why: 'This multiplies instead of dividing distance by time.' },
      { v: rate + 5, why: 'Check: rate × time should return the given distance.' },
    ]);
    return bp3({ skill: 'ratios',
      text: `A car travels ${dist} miles in ${time} hours at a constant speed. What is its speed, in miles per hour?`, ...q,
      explanation: `Speed = distance ÷ time = ${dist} ÷ ${time} = ${rate} miles per hour.` });
  }
  const q = mcFromValues(dist, [
    { v: rate + time, why: 'Distance is rate times time, not rate plus time.' },
    { v: Math.round(rate / time), why: 'This divides instead of multiplying.' },
    { v: dist - rate, why: 'Check: distance = rate × time.' },
  ]);
  return bp3({ skill: 'ratios',
    text: `A car travels at a constant speed of ${rate} miles per hour for ${time} hours. How many miles does it travel?`, ...q,
    explanation: `Distance = speed × time = ${rate} × ${time} = ${dist} miles.` });
}

/* Problem-Solving — percent of a number. */
function gen3_percent_of(tier) {
  const pct = pick([5, 10, 15, 20, 25, 30, 40, 60, 75]);
  const base = pick([40, 60, 80, 120, 160, 200, 240]);
  const val = base * pct / 100;
  const q = mcFromValues(val, [
    { v: base - val, why: 'This is the amount remaining after removing the percent, not the percent itself.' },
    { v: base * pct, why: 'This forgets to divide by 100 when converting the percent.' },
    { v: Math.round(base / pct), why: 'This divides by the percent instead of multiplying by it.' },
  ]);
  return bp3({ skill: 'percentages',
    text: `What is ${pct}% of ${base}?`, ...q,
    explanation: `${pct}% = ${pct}/100 = ${pct / 100}. So ${pct}% of ${base} is ${pct / 100} × ${base} = ${val}.` });
}

/* Geometry — area of a triangle. */
function gen3_area_triangle(tier) {
  const base = ri(4, 16), height = pick([2, 4, 6, 8, 10, 12]);
  const area = base * height / 2;
  const q = mcFromValues(area, [
    { v: base * height, why: 'This forgets the factor of ½ in the triangle area formula.' },
    { v: base + height, why: 'This adds the dimensions instead of using ½·base·height.' },
    { v: Math.round((base + height)), why: 'Use A = ½ × base × height.' },
  ]);
  return bp3({ skill: 'area-volume',
    text: `A triangle has a base of ${base} and a height of ${height}. What is its area?`, ...q,
    explanation: `Area of a triangle = ½ × base × height = ½ × ${base} × ${height} = ${area}.` });
}

/* Geometry — volume of a rectangular box. */
function gen3_volume_box(tier) {
  const l = ri(2, 8), w = ri(2, 7), h = ri(2, 6);
  const vol = l * w * h;
  const q = mcFromValues(vol, [
    { v: 2 * (l * w + l * h + w * h), why: 'This is the surface area, not the volume.' },
    { v: l + w + h, why: 'This adds the edges instead of multiplying the dimensions.' },
    { v: l * w, why: 'This is the area of one face, not the volume.' },
  ]);
  return bp3({ skill: 'area-volume',
    text: `A rectangular box has length ${l}, width ${w}, and height ${h}. What is its volume?`, ...q,
    explanation: `Volume of a rectangular box = length × width × height = ${l} × ${w} × ${h} = ${vol}.` });
}

/* Geometry — similar triangles, find the missing side by proportion. */
function gen3_similar(tier) {
  const scale = ri(2, 4), a = ri(3, 8), b = ri(4, 9);
  const A = a * scale, B = b * scale; // larger triangle sides
  const q = mcFromValues(B, [
    { v: b + (A - a), why: 'This adds the difference instead of scaling by the ratio.' },
    { v: Math.round(b * a / A), why: 'This sets up the proportion upside down.' },
    { v: b * scale + 1, why: 'Check: corresponding sides share the same ratio.' },
  ]);
  return bp3({ skill: 'angles',
    text: `Two triangles are similar. In the smaller triangle, two sides measure ${a} and ${b}. The side corresponding to the one measuring ${a} is ${A} in the larger triangle. What is the length of the side corresponding to the one measuring ${b}?`, ...q,
    explanation: `The scale factor is ${A} ÷ ${a} = ${scale}. The corresponding side is ${b} × ${scale} = ${B}.` });
}

/* Geometry — special right triangles (45-45-90 or 30-60-90) in radical form. */
function gen3_special_right(tier) {
  const s = ri(2, 9);
  if (Math.random() < 0.5) {
    // 45-45-90: legs s, hypotenuse s√2
    const correct = `${s}√2`;
    const q = mcFromStrings(correct, [
      { v: `${s}√3`, why: 'That radical belongs to a 30-60-90 triangle, not a 45-45-90 one.' },
      { v: `${2 * s}`, why: 'This doubles the leg; the hypotenuse is the leg times √2.' },
      { v: `${s * s}√2`, why: 'This squares the leg instead of just multiplying by √2.' },
    ], (g) => `${s + g}√2`);
    return bp3({ skill: 'trig',
      text: `A right triangle has two legs each of length ${s} and two 45° angles. What is the length of its hypotenuse?`, ...q,
      explanation: `In a 45-45-90 triangle the hypotenuse is a leg times √2: ${s}√2.` });
  }
  // 30-60-90: short leg s, longer leg s√3, hypotenuse 2s — ask for the longer leg
  const correct = `${s}√3`;
  const q = mcFromStrings(correct, [
    { v: `${s}√2`, why: 'That radical belongs to a 45-45-90 triangle, not a 30-60-90 one.' },
    { v: `${2 * s}`, why: 'This is the hypotenuse (2 × short leg), not the longer leg.' },
    { v: `${3 * s}`, why: 'The longer leg is the short leg times √3, not times 3.' },
  ], (g) => `${s + g}√3`);
  return bp3({ skill: 'trig',
    text: `In a 30-60-90 right triangle, the shorter leg (opposite the 30° angle) has length ${s}. What is the length of the longer leg (opposite the 60° angle)?`, ...q,
    explanation: `In a 30-60-90 triangle the longer leg is the shorter leg times √3: ${s}√3.` });
}

/* ============================ GRID TEMPLATES =========================== */

function gen3grid_slope(tier) {
  const m = pick([2, 3, 4, 5]), x1 = ri(-3, 3), run = ri(2, 5), x2 = x1 + run;
  const y1 = ri(-4, 5), y2 = y1 + m * run;
  return bp3(gridQ('linear-eq',
    `A line passes through (${x1}, ${y1}) and (${x2}, ${y2}). What is the slope of the line?`, m,
    `Slope = (${y2} − ${y1}) ÷ (${x2} − ${x1}) = ${y2 - y1} ÷ ${run} = ${m}.`,
    { steps: [`rise = ${y2} − ${y1} = ${y2 - y1}`, `run = ${x2} − ${x1} = ${run}`, `slope = ${y2 - y1}/${run} = ${m}`], hint: 'Slope is rise over run: the change in y divided by the change in x.' }));
}

function gen3grid_percent_of(tier) {
  const pct = pick([10, 15, 20, 25, 40, 60]), base = pick([40, 60, 80, 120, 200]);
  const val = base * pct / 100;
  return bp3(gridQ('percentages',
    `What is ${pct}% of ${base}?`, val,
    `${pct}% = ${pct / 100}, so ${pct}% of ${base} = ${pct / 100} × ${base} = ${val}.`,
    { hint: 'Convert the percent to a decimal, then multiply.' }));
}

function gen3grid_area_triangle(tier) {
  const base = ri(4, 16), height = pick([2, 4, 6, 8, 10]);
  const area = base * height / 2;
  return bp3(gridQ('area-volume',
    `A triangle has a base of ${base} and a height of ${height}. What is its area?`, area,
    `Area = ½ × base × height = ½ × ${base} × ${height} = ${area}.`,
    { hint: 'Do not forget the factor of ½.' }));
}

function gen3grid_ratio_partition(tier) {
  const a = ri(2, 5), b = ri(2, 5), unit = ri(4, 10), total = (a + b) * unit, part = a * unit;
  return bp3(gridQ('ratios',
    `A total of ${total} is split in the ratio ${a} : ${b}. What is the size of the ${a}-part share?`, part,
    `There are ${a + b} equal parts, each ${total} ÷ ${a + b} = ${unit}. The ${a}-part share is ${a} × ${unit} = ${part}.`,
    { hint: 'Find the size of one part first, then multiply.' }));
}

function gen3grid_median(tier) {
  const nums = [];
  while (nums.length < 5) { const n = ri(3, 40); if (!nums.includes(n)) nums.push(n); }
  const sorted = nums.slice().sort((a, b) => a - b), med = sorted[2];
  return bp3(gridQ('statistics',
    `Find the median of the data set: ${nums.join(', ')}.`, med,
    `Ordered: ${sorted.join(', ')}. The middle (3rd) value is ${med}.`,
    { hint: 'Sort the values first; the median of 5 values is the 3rd.' }));
}

function gen3grid_quadratic_root(tier) {
  let p = ri(1, 5), q2 = ri(p + 1, 8);
  const bCoef = -(p + q2), cCoef = p * q2;
  const bStr = bCoef > 0 ? ` + ${bCoef}x` : ` − ${Math.abs(bCoef)}x`;
  const cStr = cCoef >= 0 ? ` + ${cCoef}` : ` − ${Math.abs(cCoef)}`;
  return bp3(gridQ('quadratics',
    `What is the greater solution to x²${bStr}${cStr} = 0?`, q2,
    `Factor: (x − ${p})(x − ${q2}) = 0, so x = ${p} or x = ${q2}. The greater solution is ${q2}.`,
    { hint: 'Find two numbers that multiply to the constant and add to the middle coefficient.' }));
}

/* ===================== REGISTER (augment dispatch pools) ================ */
(function registerBlueprintMath3() {
  const MC3 = {
    'linear-func': [gen3_slope],
    'inequalities': [gen3_inequality],
    'linear-eq': [gen3_x_intercept],
    'equivalent': [gen3_distribute, gen3_exponents],
    'quadratics': [gen3_quadratic_roots],
    'functions': [gen3_poly_eval],
    'radicals': [gen3_radical],
    'statistics': [gen3_median],
    'ratios': [gen3_ratio_partition, gen3_speed],
    'probability': [gen3_probability],
    'percentages': [gen3_percent_of],
    'area-volume': [gen3_area_triangle, gen3_volume_box],
    'angles': [gen3_similar],
    'trig': [gen3_special_right],
  };
  const GRID3 = {
    'linear-eq': [gen3grid_slope],
    'percentages': [gen3grid_percent_of],
    'area-volume': [gen3grid_area_triangle],
    'ratios': [gen3grid_ratio_partition],
    'statistics': [gen3grid_median],
    'quadratics': [gen3grid_quadratic_root],
  };
  if (typeof MATH_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(MC3)) {
      const orig = MATH_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      MATH_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
  if (typeof GRID_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(GRID3)) {
      const orig = GRID_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      GRID_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
})();
