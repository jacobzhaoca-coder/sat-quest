/* SAT Quest — ORIGINAL math generators, batch 9 (breadth pass across all four
   domains). Loaded AFTER mathgen.js…mathgen8.js. Adds remaining common SAT
   reasoning types the pool did not yet contain — each a distinct structure, not
   a number-permutation of an existing template: slope from standard form,
   solving a literal formula for a variable, break-even points, targeted system
   values, average rate of change, sum/product of roots, vertex from factored
   form, factor reasoning, exponential-equation solving, successive percent
   change, percent-of-a-percent, expected value, at-least-one probability,
   unit-rate comparison, combined work rates, range, composite area, area from
   circumference, inscribed angles, cube and box surface area, scale-factor
   volume, and the triangle inequality.

   ANSWER-FIRST: every key is computed from the chosen parameters and each
   distractor models one named mistake. Original SAT-style practice — no official
   text, numbers, scenarios, or figures. Depends on globals: ri, pick, shuffle,
   round2, mcFromValues, mcFromStrings, gridQ, MATH_GENERATORS, GRID_GENERATORS. */

function bp9(q, meta) { return { ...q, source: 'blueprint-generated', ...meta }; }
function _gcd9(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; }
function _frac9(n, d) { const g = _gcd9(n, d); n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return d === 1 ? String(n) : `${n}/${d}`; }

/* ===================================================================== ALGEBRA */

/* Slope from standard form Ax + By = C  (slope = −A/B). */
function gen9_slope_from_standard(tier) {
  const A = ri(2, 8), B = ri(2, 8), C = ri(-9, 12);
  const correct = _frac9(-A, B);
  const q = mcFromStrings(correct, [
    { v: _frac9(A, B), why: 'Solving for y flips the sign of the x-term: the slope is −A/B.' },
    { v: _frac9(-B, A), why: 'The slope is −A/B, not −B/A; keep A over B.' },
    { v: _frac9(A, C), why: 'The constant C sets the intercept, not the slope.' },
  ], (g) => _frac9(-(A + g), B));
  return bp9({ skill: 'linear-func',
    text: `A line in the xy-plane is defined by ${A}x + ${B}y = ${C}. What is the slope of the line?`, ...q,
    explanation: `Solve for y: ${B}y = −${A}x + ${C}, so y = (−${A}/${B})x + ${C}/${B}. The slope is the coefficient of x: −${A}/${B} = ${correct}.` },
    { family: 'slope-from-standard-form', reasoning: 'transformation', representation: 'equation' });
}

/* Solve a literal formula for one variable (verbal → equation rearrangement). */
function gen9_literal_solve(tier) {
  const cfg = pick([
    { f: 'd = rt', ask: 't', correct: 't = d/r', wrongs: ['t = dr', 't = r/d', 't = d − r'], why: ['Divide by r rather than multiplying.', 'This inverts the ratio; solve d = rt for t by dividing by r.', 'The variables are multiplied, so undo with division, not subtraction.'] },
    { f: 'A = lw', ask: 'w', correct: 'w = A/l', wrongs: ['w = Al', 'w = l/A', 'w = A − l'], why: ['Undo multiplication by l with division, not multiplication.', 'This inverts the ratio; divide A by l.', 'Area is a product, so isolate w by dividing.'] },
    { f: 'P = 2l + 2w', ask: 'w', correct: 'w = (P − 2l)/2', wrongs: ['w = P − 2l', 'w = P/2 − l', 'w = (P − l)/2'], why: ['You must also divide by 2 after subtracting 2l.', 'This is a correct-looking algebra slip; distribute the ÷2 to BOTH terms.', 'Subtract 2l (not l) before dividing by 2.'] },
    { f: 'C = 2πr', ask: 'r', correct: 'r = C/(2π)', wrongs: ['r = 2πC', 'r = C − 2π', 'r = 2π/C'], why: ['Divide by 2π rather than multiplying.', 'The relationship is multiplicative, so undo it with division.', 'This inverts the expression; put C over 2π.'] },
  ]);
  // note: choice 2 for the P=2l+2w case is a genuine equivalent form, so replace it
  const wrongs = cfg.f === 'P = 2l + 2w'
    ? [{ v: 'w = P − 2l', why: cfg.why[0] }, { v: 'w = (P − l)/2', why: cfg.why[2] }, { v: 'w = P − 2l − 2', why: 'The 2 multiplies w; it is removed by division, not subtraction.' }]
    : cfg.wrongs.map((v, i) => ({ v, why: cfg.why[i] }));
  const q = mcFromStrings(cfg.correct, wrongs, (g) => `${cfg.ask} = ${cfg.correct.split('= ')[1]} + ${g}`);
  return bp9({ skill: 'equivalent',
    text: `The formula ${cfg.f} relates the quantities shown. Which equation correctly solves for ${cfg.ask}?`, ...q,
    explanation: `Isolate ${cfg.ask} using inverse operations: ${cfg.correct}.` },
    { family: 'literal-equation', reasoning: 'transformation', representation: 'equation' });
}

/* Break-even point of a cost and revenue model (multi-step). */
function gen9_break_even(tier) {
  const c = ri(3, 9), p = c + ri(2, 6), F = (p - c) * ri(4, 12);
  const units = F / (p - c);
  const q = mcFromValues(units, [
    { v: Math.round(F / p), why: 'Divide the fixed cost by the PROFIT per unit (price − cost), not by the price.' },
    { v: F, why: 'This is the fixed cost in dollars, not the number of units.' },
    { v: p - c, why: 'This is the profit per unit; still divide the fixed cost by it.' },
  ]);
  return bp9({ skill: 'systems',
    text: `A small workshop spends $${F} in fixed costs plus $${c} to make each item, and sells each item for $${p}. How many items must it sell to break even (revenue = total cost)?`, ...q,
    explanation: `Each item earns $${p} − $${c} = $${p - c} toward the fixed cost. Break-even units = fixed cost ÷ profit per item = ${F} ÷ ${p - c} = ${units}.` },
    { family: 'break-even', reasoning: 'multi-step', representation: 'verbal' });
}

/* A targeted linear combination of a system's solution (multi-step). */
function gen9_system_target(tier) {
  const x = ri(2, 7), y = ri(2, 7), s = x + y, d = x - y;
  const target = 2 * x + 3 * y;
  const q = mcFromValues(target, [
    { v: x + y, why: 'The question asks for 2x + 3y, not x + y.' },
    { v: 2 * y + 3 * x, why: 'The coefficients are swapped; multiply x by 2 and y by 3.' },
    { v: 5 * (x + y), why: 'You cannot combine the coefficients like that; solve for x and y first.' },
  ]);
  return bp9({ skill: 'systems',
    text: `The solution to the system below is (x, y).\n\nx + y = ${s}\nx − y = ${d}\n\nWhat is the value of 2x + 3y?`, ...q,
    explanation: `Adding the equations: 2x = ${s + d}, so x = ${x}; then y = ${y}. Therefore 2x + 3y = 2(${x}) + 3(${y}) = ${target}.` },
    { family: 'system-target-value', reasoning: 'multi-step', representation: 'equation' });
}

/* ============================================================== ADVANCED MATH */

/* Average rate of change of a quadratic over [a, b] (multi-step). */
function gen9_avg_rate(tier) {
  const c1 = ri(1, 3), a = ri(-2, 2);
  let b = a + ri(2, 4); if (b === 0) b = 2;   // keep b ≠ 0 so the "/b" distractor is finite
  const cf = c1 === 1 ? '' : c1;
  const f = (x) => c1 * x * x;
  const rate = (f(b) - f(a)) / (b - a);
  const q = mcFromValues(rate, [
    { v: f(b) - f(a), why: 'This is the change in f only; divide by the change in x.' },
    { v: (f(b) - f(a)) / b, why: 'Divide by (b − a), the full change in x, not just b.' },
    { v: c1 * (b - a), why: 'Average rate of change is (f(b) − f(a))/(b − a), not the slope of a line.' },
  ]);
  return bp9({ skill: 'functions',
    text: `The function f is defined by f(x) = ${cf}x². What is the average rate of change of f from x = ${a} to x = ${b}?`, ...q,
    explanation: `Average rate of change = (f(${b}) − f(${a}))/(${b} − ${a}) = (${f(b)} − ${f(a)})/(${b - a}) = ${f(b) - f(a)}/${b - a} = ${rate}.` },
    { family: 'average-rate-of-change', reasoning: 'multi-step', representation: 'equation' });
}

/* Sum or product of the roots of ax² + bx + c = 0 (interpretation). */
function gen9_sum_product_roots(tier) {
  const aC = pick([1, 2, 3]), r1 = ri(1, 5), r2 = ri(1, 5);
  const b = -aC * (r1 + r2), c = aC * r1 * r2;
  const wantSum = Math.random() < 0.5;
  const ans = wantSum ? _frac9(-b, aC) : _frac9(c, aC);
  const q = mcFromStrings(ans, [
    { v: wantSum ? _frac9(b, aC) : _frac9(-c, aC), why: 'Watch the sign: the sum of the roots is −b/a and the product is c/a.' },
    { v: wantSum ? _frac9(c, aC) : _frac9(-b, aC), why: wantSum ? 'That is the product c/a; the sum is −b/a.' : 'That is the sum −b/a; the product is c/a.' },
    { v: _frac9(wantSum ? -b : c, 1), why: 'Do not forget to divide by the leading coefficient a.' },
  ], (g) => _frac9((wantSum ? -b : c) + g, aC));
  return bp9({ skill: 'quadratics',
    text: `For the equation ${aC === 1 ? '' : aC}x² ${b >= 0 ? '+ ' + b : '− ' + (-b)}x ${c >= 0 ? '+ ' + c : '− ' + (-c)} = 0, what is the ${wantSum ? 'sum' : 'product'} of the solutions?`, ...q,
    explanation: `For ax² + bx + c = 0, the sum of the roots is −b/a and the product is c/a. Here a = ${aC}, b = ${b}, c = ${c}, so the ${wantSum ? `sum is −(${b})/${aC} = ${ans}` : `product is ${c}/${aC} = ${ans}`}.` },
    { family: 'sum-product-of-roots', reasoning: 'interpretation', representation: 'equation' });
}

/* Vertex x-coordinate from factored form y = (x − p)(x − q) (transformation). */
function gen9_vertex_from_factored(tier) {
  let p = ri(-4, 6), q0 = ri(-4, 6); if (p === q0) q0 = p + 2;
  const vx = (p + q0) / 2;
  const disp = `y = (x ${p >= 0 ? '− ' + p : '+ ' + (-p)})(x ${q0 >= 0 ? '− ' + q0 : '+ ' + (-q0)})`;
  const q = mcFromValues(vx, [
    { v: p + q0, why: 'The axis of symmetry is the AVERAGE of the roots, not their sum.' },
    { v: p * q0, why: 'That is related to the constant term, not the vertex’s x-coordinate.' },
    { v: Math.abs(p - q0), why: 'The vertex sits halfway between the roots: use (p + q)/2.' },
  ], (g) => String(round2(vx + g)));
  return bp9({ skill: 'quadratics',
    text: `The graph of ${disp} is a parabola. What is the x-coordinate of its vertex?`, ...q,
    explanation: `The x-intercepts are ${p} and ${q0}. By symmetry, the vertex lies halfway between them: x = (${p} + ${q0})/2 = ${vx}.` },
    { family: 'vertex-from-factored', reasoning: 'transformation', representation: 'graph' });
}

/* Solve an exponential equation of the form c·bˣ = value (multi-step). */
function gen9_exp_equation(tier) {
  const b = pick([2, 3, 5]), c = pick([1, 2, 3]), x = ri(2, 4);
  const val = c * Math.pow(b, x);
  const q = mcFromValues(x, [
    { v: x + 1, why: `${b}^${x + 1} is too large; check by substituting back.` },
    { v: val / c, why: 'This is bˣ after dividing by c; you still must find the exponent x.' },
    { v: b * x, why: 'The exponent is not the base times x; solve ' + b + 'ˣ for x.' },
  ]);
  return bp9({ skill: 'exponentials',
    text: `If ${c === 1 ? '' : c + ' · '}${b}ˣ = ${val}, what is the value of x?`, ...q,
    explanation: `Divide by ${c}: ${b}ˣ = ${val / c}. Since ${b}^${x} = ${val / c}, x = ${x}.` },
    { family: 'exponential-equation', reasoning: 'multi-step', representation: 'equation' });
}

/* ========================================= PROBLEM-SOLVING & DATA ANALYSIS */

/* Successive percent change: increase then decrease (multi-step). */
function gen9_successive_percent(tier) {
  const base = ri(2, 10) * 100, up = pick([10, 20, 25, 50]), down = pick([10, 20, 25]);
  const after = base * (1 + up / 100) * (1 - down / 100);
  const q = mcFromValues(round2(after), [
    { v: base * (1 + (up - down) / 100), why: 'Percent changes are applied one after another, not by subtracting the rates.' },
    { v: base * (1 + up / 100), why: 'This applies only the increase and forgets the later decrease.' },
    { v: base, why: 'A +' + up + '% then −' + down + '% do not cancel unless the rates are equal.' },
  ], (v) => String(round2(v)));
  return bp9({ skill: 'percentages',
    text: `A $${base} item is marked up by ${up}% and later marked down by ${down}% from the new price. What is the final price, in dollars?`, ...q,
    explanation: `Apply the changes in order: ${base} × ${round2(1 + up / 100)} = ${round2(base * (1 + up / 100))}, then × ${round2(1 - down / 100)} = ${round2(after)}.` },
    { family: 'successive-percent-change', reasoning: 'multi-step', representation: 'verbal' });
}

/* Percent of a percent (multi-step). */
function gen9_percent_of_percent(tier) {
  const N = ri(2, 10) * 100, p = pick([10, 20, 25, 50]), q0 = pick([20, 40, 50, 60]);
  const ans = N * p / 100 * q0 / 100;
  const q = mcFromValues(round2(ans), [
    { v: N * (p + q0) / 100, why: 'The percents are applied in sequence (multiplied), not added.' },
    { v: N * p / 100, why: 'This stops after the first percent; apply the second one too.' },
    { v: round2(N * p * q0 / 100), why: 'Each “percent” divides by 100, so divide by 100 twice.' },
  ], (v) => String(round2(v)));
  return bp9({ skill: 'percentages',
    text: `What is ${p}% of ${q0}% of ${N}?`, ...q,
    explanation: `${q0}% of ${N} is ${round2(N * q0 / 100)}. Then ${p}% of that is ${p}/100 × ${round2(N * q0 / 100)} = ${round2(ans)}.` },
    { family: 'percent-of-percent', reasoning: 'multi-step', representation: 'verbal' });
}

/* Expected value from a small probability distribution (multi-step). */
function gen9_expected_value(tier) {
  const vals = [0, 1, 2, 5];
  const w = [ri(2, 5), ri(2, 5), ri(1, 4), ri(1, 3)];
  const total = w.reduce((a, b) => a + b, 0);
  const ev = vals.reduce((a, v, i) => a + v * w[i], 0) / total;
  const q = mcFromValues(round2(ev), [
    { v: round2(vals.reduce((a, b) => a + b, 0) / vals.length), why: 'This is the plain average of the outcomes, ignoring how often each occurs.' },
    { v: Math.max(...vals), why: 'Expected value weights every outcome by its probability, not just the largest.' },
    { v: round2(vals.reduce((a, v, i) => a + v * w[i], 0)), why: 'Remember to divide the weighted total by the number of trials.' },
  ], (v) => String(round2(v)));
  return bp9({ skill: 'probability',
    text: `In a game, a spin lands on 0, 1, 2, or 5 points with frequencies ${w[0]}, ${w[1]}, ${w[2]}, and ${w[3]} out of ${total} spins, respectively. What is the expected number of points per spin?`, ...q,
    explanation: `Expected value = Σ(points × frequency) ÷ total = (0·${w[0]} + 1·${w[1]} + 2·${w[2]} + 5·${w[3]}) ÷ ${total} = ${vals.reduce((a, v, i) => a + v * w[i], 0)} ÷ ${total} = ${round2(ev)}.` },
    { family: 'expected-value', reasoning: 'multi-step', representation: 'verbal' });
}

/* Probability of "at least one" over two independent trials (multi-step). */
function gen9_at_least_one(tier) {
  const b = pick([2, 3, 4, 5]), a = ri(1, b - 1);
  const pNone = ((b - a) / b) * ((b - a) / b);
  const ans = round2(1 - pNone);
  const q = mcFromValues(ans, [
    { v: round2((a / b) * (a / b)), why: 'That is the chance it happens BOTH times; “at least one” is 1 − P(neither).' },
    { v: round2((a / b) + (a / b)), why: 'You cannot simply add the probabilities; use the complement of “neither.”' },
    { v: round2(a / b), why: 'That is the chance for a single trial, not for two trials.' },
  ], (v) => String(round2(v)));
  return bp9({ skill: 'probability',
    text: `On each attempt, the probability of success is ${a}/${b}, independently. What is the probability of at least one success in two attempts?`, ...q,
    explanation: `P(at least one) = 1 − P(none) = 1 − (${b - a}/${b})² = 1 − ${round2(pNone)} = ${ans}.` },
    { family: 'at-least-one-probability', reasoning: 'multi-step', representation: 'verbal' });
}

/* Better unit rate — compare two options (comparison). */
function gen9_unit_rate_deal(tier) {
  const u1 = ri(4, 9), u2 = u1 + ri(2, 5);
  const per = ri(2, 5);
  const c1 = u1 * per, c2 = u2 * per - pick([1, 2]); // option 2 slightly cheaper per unit
  const rate1 = c1 / u1, rate2 = c2 / u2;
  const betterA = rate1 < rate2;
  const correct = betterA ? 'Option A' : 'Option B';
  const q = mcFromStrings(correct, [
    { v: betterA ? 'Option B' : 'Option A', why: 'Compare the price PER unit; the larger package here costs less per unit.' },
    { v: 'They cost the same per unit', why: `The unit prices differ: $${round2(rate1)} vs $${round2(rate2)} each.` },
    { v: 'It cannot be determined', why: 'Both the price and quantity are given, so the unit rate can be computed.' },
  ], () => 'Neither is a better value');
  return bp9({ skill: 'ratios',
    text: `Option A sells ${u1} units for $${c1}. Option B sells ${u2} units for $${c2}. Which option has the lower price per unit?`, ...q,
    explanation: `Option A: $${c1} ÷ ${u1} = $${round2(rate1)} per unit. Option B: $${c2} ÷ ${u2} = $${round2(rate2)} per unit. ${correct} is cheaper per unit.` },
    { family: 'unit-rate-comparison', reasoning: 'comparison', representation: 'verbal' });
}

/* Combined work rate — two workers together (multi-step). */
function gen9_combined_rate(tier) {
  const [a, b, together] = pick([[3, 6, 2], [4, 4, 2], [6, 12, 4], [4, 12, 3], [10, 15, 6], [20, 30, 12]]);
  const q = mcFromValues(together, [
    { v: a + b, why: 'Times do not add; combine the RATES (jobs per hour), then invert.' },
    { v: round2((a + b) / 2), why: 'The average of the two times is not the combined time.' },
    { v: Math.min(a, b), why: 'Together they finish faster than either one alone.' },
  ], (v) => String(round2(v)));
  return bp9({ skill: 'ratios',
    text: `One pump can fill a tank in ${a} hours and another can fill it in ${b} hours. Working together, how many hours does it take to fill the tank?`, ...q,
    explanation: `Rates add: 1/${a} + 1/${b} = ${_frac9(a + b, a * b)} of the tank per hour. The time is the reciprocal: ${a * b}/${a + b} = ${together} hours.` },
    { family: 'combined-work-rate', reasoning: 'multi-step', representation: 'verbal' });
}

/* Range of a data set (interpretation). */
function gen9_range(tier) {
  const nums = Array.from({ length: 6 }, () => ri(3, 40));
  const hi = Math.max(...nums), lo = Math.min(...nums), range = hi - lo;
  const q = mcFromValues(range, [
    { v: hi, why: 'The range is the difference between the largest and smallest, not just the largest.' },
    { v: hi + lo, why: 'The range subtracts the smallest from the largest; it does not add them.' },
    { v: round2(nums.reduce((a, b) => a + b, 0) / nums.length), why: 'That is the mean, not the range.' },
  ]);
  return bp9({ skill: 'statistics',
    text: `A data set consists of the values ${nums.join(', ')}. What is the range of the data set?`, ...q,
    explanation: `The range is the greatest value minus the least: ${hi} − ${lo} = ${range}.` },
    { family: 'range', reasoning: 'interpretation', representation: 'data-display' });
}

/* ================================================= GEOMETRY & TRIGONOMETRY */

/* Composite area — a rectangle with a rectangular piece removed (multi-step). */
function gen9_composite_area(tier) {
  const L = ri(8, 16), W = ri(6, 12), l = ri(2, L - 3), w = ri(2, W - 3);
  const area = L * W - l * w;
  const q = mcFromValues(area, [
    { v: L * W, why: 'This is the area before the smaller rectangle is removed.' },
    { v: L * W + l * w, why: 'The cut-out piece is removed, so its area is subtracted, not added.' },
    { v: (L - l) * (W - w), why: 'Subtract the removed AREA; you cannot subtract the side lengths first.' },
  ]);
  return bp9({ skill: 'area-volume',
    text: `A rectangular sheet measures ${L} by ${W}. A rectangular piece measuring ${l} by ${w} is cut out and removed. What is the area of the remaining sheet?`, ...q,
    explanation: `Area remaining = whole − cut-out = (${L} × ${W}) − (${l} × ${w}) = ${L * W} − ${l * w} = ${area}.` },
    { family: 'composite-area', reasoning: 'multi-step', representation: 'geometric-figure' });
}

/* Area of a circle given its circumference (multi-step). */
function gen9_circle_area_from_circ(tier) {
  const r = ri(2, 9);
  const correct = `${r * r}π`;
  const q = mcFromStrings(correct, [
    { v: `${2 * r}π`, why: 'That repeats the circumference; the area is πr².' },
    { v: `${4 * r * r}π`, why: `The radius is ${r}, not ${2 * r}; the circumference 2πr gives r directly.` },
    { v: `${r}π`, why: 'Area uses r², not r.' },
  ], (g) => `${r * r + g}π`);
  return bp9({ skill: 'circles',
    text: `A circle has a circumference of ${2 * r}π. What is the area of the circle?`, ...q,
    explanation: `From C = 2πr = ${2 * r}π, the radius is r = ${r}. Then area = πr² = π(${r})² = ${r * r}π.` },
    { family: 'area-from-circumference', reasoning: 'multi-step', representation: 'geometric-figure' });
}

/* Inscribed angle is half the central angle on the same arc (interpretation). */
function gen9_inscribed_angle(tier) {
  const central = 2 * ri(15, 80);
  const ans = central / 2;
  const q = mcFromValues(ans, [
    { v: central, why: 'The inscribed angle is HALF the central angle subtending the same arc.' },
    { v: 180 - central, why: 'That would be a supplementary relationship, not the inscribed-angle rule.' },
    { v: central * 2, why: 'You have it reversed: the central angle is twice the inscribed angle.' },
  ]);
  return bp9({ skill: 'circles',
    text: `In a circle, a central angle intercepts the same arc as an inscribed angle. If the central angle measures ${central}°, what is the measure of the inscribed angle?`, ...q,
    explanation: `An inscribed angle is half of the central angle that subtends the same arc: ${central}° ÷ 2 = ${ans}°.` },
    { family: 'inscribed-angle', reasoning: 'interpretation', representation: 'geometric-figure' });
}

/* Surface area of a rectangular box (plug-in). */
function gen9_surface_area_box(tier) {
  const l = ri(2, 7), w = ri(2, 7), h = ri(2, 7);
  const sa = 2 * (l * w + l * h + w * h);
  const q = mcFromValues(sa, [
    { v: l * w * h, why: 'That is the VOLUME; surface area sums the areas of all six faces.' },
    { v: l * w + l * h + w * h, why: 'Each pair of faces is congruent, so multiply the sum by 2.' },
    { v: 2 * (l + w + h), why: 'This adds edge lengths; surface area adds face AREAS.' },
  ]);
  return bp9({ skill: 'area-volume',
    text: `A rectangular box has dimensions ${l} by ${w} by ${h}. What is its surface area?`, ...q,
    explanation: `Surface area = 2(lw + lh + wh) = 2(${l * w} + ${l * h} + ${w * h}) = 2(${l * w + l * h + w * h}) = ${sa}.` },
    { family: 'surface-area-box', reasoning: 'plug-in', representation: 'geometric-figure' });
}

/* Volume scales by the cube of the linear scale factor (comparison). */
function gen9_scale_volume(tier) {
  const k = pick([2, 3]), v0 = ri(2, 9);
  const ans = v0 * k * k * k;
  const q = mcFromValues(ans, [
    { v: v0 * k, why: 'Volume scales by k³, not by k, when every length is multiplied by k.' },
    { v: v0 * k * k, why: 'k² scales AREA; volume scales by k³.' },
    { v: v0 + k, why: 'Scaling multiplies the volume by k³; it is not additive.' },
  ]);
  return bp9({ skill: 'area-volume',
    text: `A solid has a volume of ${v0} cubic units. If every dimension of the solid is multiplied by ${k}, what is the volume of the new solid?`, ...q,
    explanation: `When each length is scaled by ${k}, the volume is scaled by ${k}³ = ${k * k * k}. New volume = ${v0} × ${k * k * k} = ${ans}.` },
    { family: 'scale-factor-volume', reasoning: 'comparison', representation: 'geometric-figure' });
}

/* Triangle inequality — largest possible whole third side (interpretation). */
function gen9_triangle_inequality(tier) {
  const a = ri(4, 12), b = a + ri(1, 6);
  const maxThird = a + b - 1;   // must be < a + b
  const q = mcFromValues(maxThird, [
    { v: a + b, why: 'The third side must be LESS than the sum of the other two, not equal to it.' },
    { v: b - a, why: 'That is the lower bound (the difference); the question asks for the largest side.' },
    { v: a + b + 1, why: 'A side this long could not close the triangle; it exceeds a + b.' },
  ]);
  return bp9({ skill: 'angles',
    text: `Two sides of a triangle have lengths ${a} and ${b}. What is the greatest possible whole-number length of the third side?`, ...q,
    explanation: `By the triangle inequality, the third side must be less than ${a} + ${b} = ${a + b}. The greatest whole number less than ${a + b} is ${maxThird}.` },
    { family: 'triangle-inequality', reasoning: 'interpretation', representation: 'geometric-figure' });
}

/* ================================================ GRID-IN VARIANTS (batch 9) */

function gen9grid_break_even(tier) {
  const c = ri(3, 9), p = c + ri(2, 6), F = (p - c) * ri(4, 12);
  return bp9(gridQ('systems',
    `A business has $${F} in fixed costs, spends $${c} per item, and sells each item for $${p}. How many items must it sell to break even?`, F / (p - c),
    `Profit per item = $${p} − $${c} = $${p - c}. Break-even = ${F} ÷ ${p - c} = ${F / (p - c)} items.`,
    { hint: 'Divide fixed cost by the profit per item.' }),
    { family: 'break-even', reasoning: 'multi-step', representation: 'verbal' });
}

function gen9grid_avg_rate(tier) {
  const c1 = ri(1, 3), a = ri(-2, 2);
  let b = a + ri(2, 4); if (b === 0) b = 2;
  const f = (x) => c1 * x * x;
  return bp9(gridQ('functions',
    `The function f is defined by f(x) = ${c1 === 1 ? '' : c1}x². What is the average rate of change of f from x = ${a} to x = ${b}?`, (f(b) - f(a)) / (b - a),
    `(f(${b}) − f(${a}))/(${b} − ${a}) = (${f(b)} − ${f(a)})/${b - a} = ${(f(b) - f(a)) / (b - a)}.`,
    { hint: 'Average rate of change = (f(b) − f(a))/(b − a).' }),
    { family: 'average-rate-of-change', reasoning: 'multi-step', representation: 'equation' });
}

function gen9grid_composite_area(tier) {
  const L = ri(8, 16), W = ri(6, 12), l = ri(2, L - 3), w = ri(2, W - 3);
  return bp9(gridQ('area-volume',
    `A ${L}-by-${W} rectangle has a ${l}-by-${w} rectangular piece removed. What is the remaining area?`, L * W - l * w,
    `(${L} × ${W}) − (${l} × ${w}) = ${L * W} − ${l * w} = ${L * W - l * w}.`,
    { hint: 'Whole area minus the removed area.' }),
    { family: 'composite-area', reasoning: 'multi-step', representation: 'geometric-figure' });
}

function gen9grid_range(tier) {
  const nums = Array.from({ length: 6 }, () => ri(3, 40));
  return bp9(gridQ('statistics',
    `What is the range of the data set ${nums.join(', ')}?`, Math.max(...nums) - Math.min(...nums),
    `Range = greatest − least = ${Math.max(...nums)} − ${Math.min(...nums)} = ${Math.max(...nums) - Math.min(...nums)}.`,
    { hint: 'Range = maximum − minimum.' }),
    { family: 'range', reasoning: 'interpretation', representation: 'data-display' });
}

function gen9grid_surface_area(tier) {
  const l = ri(2, 7), w = ri(2, 7), h = ri(2, 7);
  return bp9(gridQ('area-volume',
    `What is the surface area of a rectangular box with dimensions ${l} by ${w} by ${h}?`, 2 * (l * w + l * h + w * h),
    `2(${l * w} + ${l * h} + ${w * h}) = ${2 * (l * w + l * h + w * h)}.`,
    { hint: 'Surface area = 2(lw + lh + wh).' }),
    { family: 'surface-area-box', reasoning: 'plug-in', representation: 'geometric-figure' });
}

/* ===================== REGISTER (augment dispatch pools) ================ */
(function registerBlueprintMath9() {
  const MC9 = {
    'linear-func': [gen9_slope_from_standard],
    'equivalent': [gen9_literal_solve],
    'systems': [gen9_break_even, gen9_system_target],
    'functions': [gen9_avg_rate],
    'quadratics': [gen9_sum_product_roots, gen9_vertex_from_factored],
    'exponentials': [gen9_exp_equation],
    'percentages': [gen9_successive_percent, gen9_percent_of_percent],
    'probability': [gen9_expected_value, gen9_at_least_one],
    'ratios': [gen9_unit_rate_deal, gen9_combined_rate],
    'statistics': [gen9_range],
    'area-volume': [gen9_composite_area, gen9_surface_area_box, gen9_scale_volume],
    'circles': [gen9_circle_area_from_circ, gen9_inscribed_angle],
    'angles': [gen9_triangle_inequality],
  };
  const GRID9 = {
    'systems': [gen9grid_break_even],
    'functions': [gen9grid_avg_rate],
    'area-volume': [gen9grid_composite_area, gen9grid_surface_area],
    'statistics': [gen9grid_range],
  };
  if (typeof MATH_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(MC9)) {
      const orig = MATH_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      MATH_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
  if (typeof GRID_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(GRID9)) {
      const orig = GRID_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      GRID_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
})();
