/* SAT Quest — ORIGINAL math generator templates (blueprint batch 6).
   Loaded AFTER mathgen.js…mathgen5.js. This batch adds genuinely NEW problem
   TYPES (not number-permutations of existing ones) in areas the pool was thin on:
   quadratic vertex / roots, compound inequalities, circle center & radius,
   special right triangles, right-triangle trig ratios, two-way-table probability,
   line-of-best-fit prediction, and exponential growth models.

   Every instance is built ANSWER-FIRST — the correct value/expression is computed
   directly from chosen parameters, so the keyed answer is correct by construction
   and each distractor models a specific, named mistake. Drawn from abstract SAT
   blueprints; no official text, numbers, scenarios, or figures are used. Depends on
   globals: ri, pick, round2, mcFromValues, mcFromStrings, gridQ, MATH_GENERATORS,
   GRID_GENERATORS. */

function bp6(q) { return { ...q, source: 'blueprint-generated' }; }
function _gcd6(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; }
function _frac6(n, d) { const g = _gcd6(n, d); n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return d === 1 ? String(n) : `${n}/${d}`; }
function _signed6(v) { return v < 0 ? `− ${-v}` : `+ ${v}`; } // for "(x + 3)" style display
function _shift6(v) { return v === 0 ? 'x' : (v > 0 ? `(x − ${v})` : `(x + ${-v})`); } // (x − h)

/* ===================== QUADRATICS (vertex / extremum) ===================== */
/* y = a(x − h)^2 + k in vertex form; the min (a>0) or max (a<0) value is k, at x = h. */
function gen6_quadratic_vertex(tier) {
  const a = pick([1, 1, 2, -1, -2]);
  const h = ri(-4, 5), k = ri(-6, 8);
  const askValue = Math.random() < 0.5;
  const isMin = a > 0;
  const disp = `y = ${a === 1 ? '' : a === -1 ? '−' : a}${_shift6(h)}² ${_signed6(k)}`;
  if (askValue) {
    const q = mcFromValues(k, [
      { v: h, why: 'This is the x-coordinate of the vertex, not the minimum/maximum value of y.' },
      { v: -k, why: 'The constant added in vertex form is the extreme value directly; keep its sign.' },
      { v: k + a, why: 'At the vertex the squared term is 0, so it contributes nothing to add here.' },
    ]);
    return bp6({ skill: 'quadratics',
      text: `The parabola ${disp} is graphed in the xy-plane. What is the ${isMin ? 'minimum' : 'maximum'} value of y?`, ...q,
      explanation: `In vertex form y = a(x − h)² + k, the vertex is at (${h}, ${k}). Because a = ${a} is ${isMin ? 'positive, the parabola opens up and y has a minimum' : 'negative, the parabola opens down and y has a maximum'} equal to k = ${k}.` });
  }
  const q = mcFromValues(h, [
    { v: k, why: 'This is the extreme value of y, not the x-coordinate where it occurs.' },
    { v: -h, why: 'The vertex is at x = h; read the sign directly from (x − h).' },
    { v: h + k, why: 'The x-coordinate of the vertex is h alone; do not combine it with k.' },
  ]);
  return bp6({ skill: 'quadratics',
    text: `The parabola ${disp} is graphed in the xy-plane. At what value of x does y reach its ${isMin ? 'minimum' : 'maximum'}?`, ...q,
    explanation: `In vertex form y = a(x − h)² + k, the vertex is at x = h = ${h}, where the squared term is 0.` });
}

/* ===================== QUADRATICS (the other root) ===================== */
/* x² − (p+q)x + pq = 0 has integer roots p and q; given one, find the other. */
function gen6_quadratic_other_root(tier) {
  let p = ri(-6, 8), q = ri(-6, 8);
  if (p === q) q = p + pick([-3, -2, 2, 3]);
  const S = p + q, P = p * q;
  const bTerm = -S, cTerm = P;
  const q_ = mcFromValues(q, [
    { v: -q, why: 'This flips the sign; substitute and check that it makes the equation 0.' },
    { v: S, why: 'This is the sum of the two roots, not the second root by itself.' },
    { v: P, why: 'This is the product of the two roots, not the second root.' },
  ]);
  const bStr = bTerm === 0 ? '' : (bTerm > 0 ? ` + ${bTerm}x` : ` − ${-bTerm}x`);
  const cStr = cTerm >= 0 ? ` + ${cTerm}` : ` − ${-cTerm}`;
  return bp6({ skill: 'quadratics',
    text: `One solution to the equation x²${bStr}${cStr} = 0 is x = ${p}. What is the other solution?`, ...q_,
    explanation: `For x² + bx + c = 0 the two solutions sum to −b = ${S} and multiply to c = ${P}. Since one solution is ${p}, the other is ${S} − ${p} = ${q}. (Check: ${p} × ${q} = ${P}.)` });
}

/* ===================== INEQUALITIES (greatest/least integer) ===================== */
/* Solve m·x + b ≤ N (or ≥) for the greatest (or least) integer x. Exact by design. */
function gen6_inequality_integer(tier) {
  const m = ri(2, 5), x0 = ri(3, 9 + tier * 2), b = ri(1, 10);
  const N = m * x0 + b + ri(0, m - 1);   // so floor((N−b)/m) = x0
  const greatest = Math.floor((N - b) / m);
  const q = mcFromValues(greatest, [
    { v: greatest + 1, why: `Substituting x = ${greatest + 1} gives ${m * (greatest + 1) + b}, which is greater than ${N}, so it fails.` },
    { v: N - b, why: 'This is m·x, not x; you still need to divide by the coefficient.' },
    { v: Math.floor(N / m), why: 'This forgets to subtract the constant before dividing.' },
  ]);
  return bp6({ skill: 'inequalities',
    text: `What is the greatest integer value of x that satisfies ${m}x + ${b} ≤ ${N}?`, ...q,
    explanation: `Subtract ${b}: ${m}x ≤ ${N - b}. Divide by ${m}: x ≤ ${round2((N - b) / m)}. The greatest integer not exceeding ${round2((N - b) / m)} is ${greatest}.` });
}

/* ===================== CIRCLES (center & radius from equation) ============ */
/* (x − h)² + (y − k)² = r²; ask for the radius. */
function gen6_circle_radius(tier) {
  const h = ri(-6, 6), k = ri(-6, 6), r = ri(2, 9);
  const r2 = r * r;
  const q = mcFromValues(r, [
    { v: r2, why: `The right side equals r², so the radius is √${r2} = ${r}, not ${r2}.` },
    { v: 2 * r, why: 'This is the diameter; the radius is half of it.' },
    { v: Math.abs(h) + Math.abs(k), why: 'The center coordinates give the center, not the radius.' },
  ]);
  return bp6({ skill: 'circles',
    text: `In the xy-plane, a circle has the equation ${_shift6(h)}² + ${_shift6(k).replace('x', 'y')}² = ${r2}. What is the radius of the circle?`, ...q,
    explanation: `The standard form (x − h)² + (y − k)² = r² shows r² = ${r2}, so the radius is r = √${r2} = ${r}. The center is (${h}, ${k}).` });
}

/* ===================== TRIG (special right triangles) ===================== */
/* 45-45-90 (leg L → hyp L√2) or 30-60-90 (short s → hyp 2s, long s√3). */
function gen6_special_triangle(tier) {
  const type = pick(['45', '30hyp', '30long']);
  if (type === '45') {
    const L = ri(2, 9);
    const correct = `${L}√2`;
    const q = mcFromStrings(correct, [
      { v: `${2 * L}`, why: 'In a 45-45-90 triangle the hypotenuse is √2 times a leg, not twice it.' },
      { v: `${L}√3`, why: '√3 belongs to the 30-60-90 triangle, not the 45-45-90.' },
      { v: `${L}/√2`, why: 'The hypotenuse is longer than a leg, so multiply by √2 rather than divide.' },
    ], (g) => `${L + g}√2`);
    return bp6({ skill: 'trig',
      text: `In a 45°-45°-90° right triangle, each leg has length ${L}. What is the length of the hypotenuse?`, ...q,
      explanation: `In a 45-45-90 triangle the sides are in the ratio 1 : 1 : √2, so the hypotenuse is ${L}√2.` });
  }
  if (type === '30hyp') {
    const s = ri(2, 9);
    const correct = `${2 * s}`;
    const q = mcFromStrings(correct, [
      { v: `${s}√3`, why: 'That is the longer leg (opposite 60°), not the hypotenuse.' },
      { v: `${s}√2`, why: '√2 belongs to the 45-45-90 triangle, not the 30-60-90.' },
      { v: `${s}`, why: 'The hypotenuse is twice the short leg, not equal to it.' },
    ], (g) => `${2 * s + g}`);
    return bp6({ skill: 'trig',
      text: `In a 30°-60°-90° right triangle, the side opposite the 30° angle has length ${s}. What is the length of the hypotenuse?`, ...q,
      explanation: `In a 30-60-90 triangle the sides are in the ratio 1 : √3 : 2, so the hypotenuse is 2 × ${s} = ${2 * s}.` });
  }
  const s = ri(2, 9);
  const correct = `${s}√3`;
  const q = mcFromStrings(correct, [
    { v: `${2 * s}`, why: 'That is the hypotenuse, not the longer leg.' },
    { v: `${s}√2`, why: '√2 belongs to the 45-45-90 triangle, not the 30-60-90.' },
    { v: `${s}`, why: 'The longer leg is √3 times the short leg, not equal to it.' },
  ], (g) => `${s + g}√3`);
  return bp6({ skill: 'trig',
    text: `In a 30°-60°-90° right triangle, the side opposite the 30° angle has length ${s}. What is the length of the side opposite the 60° angle?`, ...q,
    explanation: `In a 30-60-90 triangle the sides are in the ratio 1 : √3 : 2, so the longer leg is ${s}√3.` });
}

/* ===================== TRIG (ratio from a right triangle) ================= */
/* Pythagorean-triple triangle; sin/cos/tan of an acute angle as a reduced fraction. */
function gen6_trig_ratio(tier) {
  const base = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29]]);
  const scale = pick([1, 1, 2]);
  const [a, b, c] = base.map(x => x * scale);   // legs a,b; hyp c
  const ratio = pick(['sin', 'cos', 'tan']);
  // Angle A is opposite leg a, adjacent to leg b.
  let correct, expl;
  if (ratio === 'sin') { correct = _frac6(a, c); expl = `sin A = opposite/hypotenuse = ${a}/${c} = ${correct}.`; }
  else if (ratio === 'cos') { correct = _frac6(b, c); expl = `cos A = adjacent/hypotenuse = ${b}/${c} = ${correct}.`; }
  else { correct = _frac6(a, b); expl = `tan A = opposite/adjacent = ${a}/${b} = ${correct}.`; }
  const q = mcFromStrings(correct, [
    { v: _frac6(b, c), why: 'This swaps the opposite and adjacent sides for this ratio.' },
    { v: _frac6(a, b), why: 'This uses the two legs (a tangent ratio) rather than the requested ratio.' },
    { v: _frac6(c, a), why: 'This inverts the ratio; put the hypotenuse in the denominator for sine and cosine.' },
  ], (g) => _frac6(a + g, c + g + 1));
  return bp6({ skill: 'trig',
    text: `A right triangle has legs of length ${a} and ${b} and a hypotenuse of length ${c}. If angle A is the angle opposite the leg of length ${a}, what is ${ratio} A?`, ...q,
    explanation: `${expl}` });
}

/* ===================== PROBABILITY (two-way table) ===================== */
/* 2×2 table; conditional probability as a reduced fraction. */
function gen6_two_way_prob(tier) {
  const a = ri(3, 9) * 2, b = ri(2, 8) * 2, c = ri(3, 9) * 2, d = ri(2, 8) * 2; // even for nicer reductions
  const row1 = a + b, total = a + b + c + d;
  const scene = pick([
    { rows: ['9th graders', '10th graders'], cols: ['chose art', 'chose music'], group: '9th graders', event: 'chose art' },
    { rows: ['members', 'guests'], cols: ['ordered tea', 'ordered coffee'], group: 'members', event: 'ordered tea' },
    { rows: ['weekday visitors', 'weekend visitors'], cols: ['toured the garden', 'toured the gallery'], group: 'weekday visitors', event: 'toured the garden' },
  ]);
  const correct = _frac6(a, row1);
  const q = mcFromStrings(correct, [
    { v: _frac6(a, total), why: 'This divides by the grand total; a conditional probability divides by the group total instead.' },
    { v: _frac6(row1, total), why: 'This is the probability of being in the group, not the conditional probability of the event.' },
    { v: _frac6(b, row1), why: 'This uses the other column of the group; use the count for the requested event.' },
  ], (g) => _frac6(a + g, row1 + g + 1));
  return bp6({ skill: 'probability',
    text: `In a survey, ${a} ${scene.rows[0]} ${scene.cols[0]} and ${b} ${scene.rows[0]} ${scene.cols[1]}, while ${c} ${scene.rows[1]} ${scene.cols[0]} and ${d} ${scene.rows[1]} ${scene.cols[1]}. If one of the ${scene.group} is chosen at random, what is the probability that this person ${scene.event}?`, ...q,
    explanation: `There are ${a} + ${b} = ${row1} ${scene.group}. Of these, ${a} ${scene.event}, so the probability is ${a}/${row1} = ${correct}.` });
}

/* ===================== SCATTERPLOTS (line of best fit prediction) ========= */
/* Predict y from a given best-fit line y = mx + b at a stated x. Integer by design. */
function gen6_best_fit(tier) {
  const m = pick([2, 3, 4, 5]), b = ri(1, 12), x = ri(4, 12);
  const y = m * x + b;
  const scene = pick([
    { xlab: 'weeks of practice', ylab: 'words typed per minute' },
    { xlab: 'hours of sunlight', ylab: 'centimeters of growth' },
    { xlab: 'years of experience', ylab: 'projects completed' },
  ]);
  const q = mcFromValues(y, [
    { v: m * x, why: 'This leaves out the y-intercept b of the best-fit line.' },
    { v: m + x + b, why: 'This adds the numbers instead of multiplying the slope by x.' },
    { v: y + m, why: 'This uses one x-value too many; substitute x exactly once.' },
  ]);
  return bp6({ skill: 'scatterplots',
    text: `A line of best fit for a scatterplot of ${scene.ylab} versus ${scene.xlab} is y = ${m}x + ${b}. Based on this model, what value of y is predicted when x = ${x}?`, ...q,
    explanation: `Substitute x = ${x}: y = ${m}(${x}) + ${b} = ${m * x} + ${b} = ${y}.` });
}

/* ===================== EXPONENTIALS (growth model) ===================== */
/* Quantity multiplied by a whole factor each period; evaluate after n periods. */
function gen6_exp_growth(tier) {
  const factor = pick([2, 3]);
  const n = pick([2, 3, 4]);
  const start = pick([3, 4, 5, 6, 8, 10]);
  const result = start * Math.pow(factor, n);
  const scene = pick([
    { noun: 'A colony of bacteria', per: 'hour', verb: `${factor === 2 ? 'doubles' : 'triples'}` },
    { noun: 'A population of algae', per: 'day', verb: `${factor === 2 ? 'doubles' : 'triples'}` },
    { noun: 'A savings of tokens', per: 'round', verb: `${factor === 2 ? 'doubles' : 'triples'}` },
  ]);
  const q = mcFromValues(result, [
    { v: start * factor * n, why: `This multiplies by ${factor}·${n} instead of ${factor} raised to the power ${n}.` },
    { v: start * Math.pow(factor, n - 1), why: 'This uses one too few periods.' },
    { v: start + factor * n, why: 'Growth here is repeated multiplication, not addition.' },
  ]);
  return bp6({ skill: 'exponentials',
    text: `${scene.noun} starts at ${start} and ${scene.verb} every ${scene.per}. How many are there after ${n} ${scene.per}s?`, ...q,
    explanation: `Each ${scene.per} multiplies the amount by ${factor}, so after ${n} ${scene.per}s there are ${start} × ${factor}^${n} = ${start} × ${Math.pow(factor, n)} = ${result}.` });
}

/* ===================== GRID-IN VARIANTS ===================== */
function gen6grid_quadratic_root(tier) {
  // x² − (p+q)x + pq = 0 with a positive integer root to grid.
  let p = ri(2, 9), q = ri(1, 9);
  const S = p + q, P = p * q;
  const bStr = ` − ${S}x`, cStr = ` + ${P}`;
  return bp6(gridQ('quadratics',
    `One solution to x²${bStr}${cStr} = 0 is x = ${q}. What is the other solution?`,
    p,
    `The solutions multiply to ${P} and sum to ${S}. Since one is ${q}, the other is ${S} − ${q} = ${p}.`,
    { hint: 'The two roots sum to −b and multiply to c.' }));
}

function gen6grid_pythagorean(tier) {
  const [a, b, c] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]]);
  return bp6(gridQ('angles',
    `A right triangle has legs of length ${a} and ${b}. What is the length of its hypotenuse?`,
    c,
    `By the Pythagorean theorem, the hypotenuse is √(${a}² + ${b}²) = √(${a * a} + ${b * b}) = √${a * a + b * b} = ${c}.`,
    { hint: 'Use a² + b² = c².' }));
}

function gen6grid_circle_radius(tier) {
  const h = ri(-5, 5), k = ri(-5, 5), r = ri(2, 9);
  return bp6(gridQ('circles',
    `A circle in the xy-plane has equation ${_shift6(h)}² + ${_shift6(k).replace('x', 'y')}² = ${r * r}. What is the radius of the circle?`,
    r,
    `The right side is r² = ${r * r}, so the radius is √${r * r} = ${r}.`,
    { hint: 'Compare to (x − h)² + (y − k)² = r².' }));
}

/* ===================== REGISTER (augment dispatch pools) ================ */
(function registerBlueprintMath6() {
  const MC6 = {
    'quadratics': [gen6_quadratic_vertex, gen6_quadratic_other_root],
    'inequalities': [gen6_inequality_integer],
    'circles': [gen6_circle_radius],
    'trig': [gen6_special_triangle, gen6_trig_ratio],
    'probability': [gen6_two_way_prob],
    'scatterplots': [gen6_best_fit],
    'exponentials': [gen6_exp_growth],
  };
  const GRID6 = {
    'quadratics': [gen6grid_quadratic_root],
    'angles': [gen6grid_pythagorean],
    'circles': [gen6grid_circle_radius],
  };
  if (typeof MATH_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(MC6)) {
      const orig = MATH_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      MATH_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
  if (typeof GRID_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(GRID6)) {
      const orig = GRID_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      GRID_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
})();
