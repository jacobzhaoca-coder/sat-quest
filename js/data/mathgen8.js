/* SAT Quest — ORIGINAL math generators, batch 8 (Problem-Solving & Data
   Analysis + Geometry & Trigonometry). Loaded AFTER mathgen.js…mathgen7.js.
   Adds genuinely NEW reasoning paths and representations: scatterplot residuals
   and association interpretation, percent-greater comparison, multi-step unit
   conversion, density, probability complements and joint (two-way-table)
   probability, choosing/comparing statistical measures, median from a frequency
   table, coordinate distance and midpoint, parallel-line (transversal) angles,
   polygon interior-angle sums, finding a leg with the Pythagorean theorem,
   similar triangles with algebra, cylinder/cone/sphere volume, writing a circle
   equation from its center and radius, and arc length.

   ANSWER-FIRST construction: keys are computed from parameters (correct by
   construction) and each distractor models one named mistake. Original SAT-style
   practice — no official text, numbers, scenarios, or figures. Depends on:
   ri, pick, shuffle, round2, mcFromValues, mcFromStrings, gridQ, terminates,
   MATH_GENERATORS, GRID_GENERATORS. */

function bp8(q, meta) { return { ...q, source: 'blueprint-generated', ...meta }; }
function _gcd8(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; }
function _frac8(n, d) { const g = _gcd8(n, d); n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return d === 1 ? String(n) : `${n}/${d}`; }
// (x − h) display for a circle's standard form: subtract the center coordinate
function _sub8(v) { return v >= 0 ? `− ${v}` : `+ ${-v}`; }

/* ========================================= PROBLEM-SOLVING & DATA ANALYSIS */

/* Residual = actual − predicted for a line of best fit (multi-step). */
function gen8_residual(tier) {
  const m = pick([2, 3, 4, 5]), b = ri(2, 12), x = ri(3, 10);
  const predicted = m * x + b;
  const res = pick([-6, -5, -4, -3, 3, 4, 5, 6]);
  const actual = predicted + res;
  const q = mcFromValues(res, [
    { v: -res, why: 'The residual is actual − predicted, in that order; this reverses the subtraction.' },
    { v: predicted, why: 'This is the predicted value, not the difference from the actual value.' },
    { v: actual, why: 'This is the actual value; the residual is how far it sits from the prediction.' },
  ]);
  return bp8({ skill: 'scatterplots',
    text: `A line of best fit for a data set is ŷ = ${m}x + ${b}. For a data point with x = ${x}, the actual y-value is ${actual}. What is the residual for this point?`, ...q,
    explanation: `The residual is actual − predicted. The predicted value is ŷ = ${m}(${x}) + ${b} = ${predicted}, so the residual is ${actual} − ${predicted} = ${res}.` },
    { family: 'residual', reasoning: 'multi-step', representation: 'graph' });
}

/* Interpret the association shown in a scatterplot (interpretation). */
function gen8_association(tier) {
  const dir = pick(['positive', 'negative']);
  const scene = pick([
    { x: 'hours studied', y: 'test score' }, { x: 'daily temperature', y: 'hot-cocoa sales' },
    { x: 'car age', y: 'resale value' }, { x: 'outdoor temperature', y: 'heating cost' },
  ]);
  const trend = dir === 'positive' ? 'increase' : 'decrease';
  const correct = `There is a ${dir} association between ${scene.x} and ${scene.y}.`;
  const opp = dir === 'positive' ? 'negative' : 'positive';
  const q = mcFromStrings(correct, [
    { v: `There is a ${opp} association between ${scene.x} and ${scene.y}.`, why: `As one variable rises the other ${trend}s, which is a ${dir} — not ${opp} — association.` },
    { v: `There is no association between ${scene.x} and ${scene.y}.`, why: 'A clear trend in one direction is an association, not the absence of one.' },
    { v: `Increasing ${scene.x} causes ${scene.y} to change.`, why: 'A scatterplot shows association, which does not by itself establish causation.' },
  ], () => `The two variables are equal.`);
  return bp8({ skill: 'scatterplots',
    text: `A scatterplot shows that as ${scene.x} increases, ${scene.y} tends to ${trend}. Which statement is best supported by the data?`, ...q,
    explanation: `When one variable tends to ${trend} as the other increases, the variables move together in a consistent direction — a ${dir} association. This describes a relationship, not a proven cause.` },
    { family: 'interpret-association', reasoning: 'interpretation', representation: 'graph' });
}

/* "X is what percent greater than Y" (multi-step percent comparison). */
function gen8_percent_compare(tier) {
  const Y = pick([40, 60, 80, 120, 140, 160, 180, 200]), p = pick([10, 20, 25, 40, 50, 75]);
  const X = Y + Y * p / 100;   // exact integer for these Y/p (avoids float dust like 110.0000001)
  const q = mcFromValues(p, [
    { v: round2((X - Y) / X * 100), why: 'Percent greater uses the ORIGINAL value as the base, not the larger value.' },
    { v: round2(X / Y * 100), why: 'This is X as a percent OF Y; “percent greater” compares only the increase.' },
    { v: X - Y, why: 'This is the raw difference, not a percentage.' },
  ], (v) => String(round2(v)));
  return bp8({ skill: 'percentages',
    text: `The value ${X} is what percent greater than ${Y}?`, ...q,
    explanation: `Percent greater = (difference ÷ original) × 100 = (${X} − ${Y}) ÷ ${Y} × 100 = ${X - Y} ÷ ${Y} × 100 = ${p}%.` },
    { family: 'percent-comparison', reasoning: 'multi-step', representation: 'verbal' });
}

/* Rate with a unit conversion (multi-step). */
function gen8_unit_conversion(tier) {
  const f = ri(20, 90), h = ri(2, 6);
  const ans = f * 60 * h;
  const scene = pick([
    { noun: 'A conveyor belt moves a box', rate: `${f} feet per minute`, ask: 'feet' },
    { noun: 'A drone flies', rate: `${f} meters per minute`, ask: 'meters' },
    { noun: 'A pump moves water', rate: `${f} liters per minute`, ask: 'liters' },
  ]);
  const q = mcFromValues(ans, [
    { v: f * h, why: 'This multiplies the rate by hours directly, forgetting to convert hours to minutes.' },
    { v: f * 60, why: 'This finds the amount for only one hour.' },
    { v: f * 30 * h, why: 'This uses 30 minutes per hour instead of 60.' },
  ]);
  return bp8({ skill: 'ratios',
    text: `${scene.noun} at ${scene.rate}. How many ${scene.ask} does it move in ${h} hours? (1 hour = 60 minutes)`, ...q,
    explanation: `Convert the time: ${h} hours = ${h} × 60 = ${h * 60} minutes. Then multiply by the rate: ${f} × ${h * 60} = ${ans} ${scene.ask}.` },
    { family: 'unit-conversion-rate', reasoning: 'multi-step', representation: 'verbal' });
}

/* Mass from density and volume (multi-step). */
function gen8_density(tier) {
  const d = ri(2, 12), v = ri(3, 15), mass = d * v;
  const q = mcFromValues(mass, [
    { v: d + v, why: 'Density and volume are multiplied, not added.' },
    { v: round2(v / d), why: 'This divides volume by density; mass is density × volume.' },
    { v: d, why: 'This is the density alone, not the mass of the whole block.' },
  ]);
  return bp8({ skill: 'ratios',
    text: `A solid material has a density of ${d} grams per cubic centimeter. What is the mass, in grams, of a ${v} cm³ block of this material?`, ...q,
    explanation: `Density = mass ÷ volume, so mass = density × volume = ${d} × ${v} = ${mass} grams.` },
    { family: 'density', reasoning: 'multi-step', representation: 'verbal' });
}

/* Probability of the complement (interpretation). */
function gen8_prob_complement(tier) {
  const b = ri(4, 12), a = ri(1, b - 1);
  const correct = _frac8(b - a, b);
  const q = mcFromStrings(correct, [
    { v: _frac8(a, b), why: 'This is the probability the event DOES happen, not its complement.' },
    { v: _frac8(b, b - a), why: 'The total number of outcomes stays in the denominator; do not swap it.' },
    { v: _frac8(a, b - a), why: 'The complement is (total − favorable) ÷ total, not favorable ÷ remainder.' },
  ], (g) => _frac8(b - a + g, b + g + 1));
  return bp8({ skill: 'probability',
    text: `The probability that an event occurs is ${a}/${b}. What is the probability that the event does NOT occur?`, ...q,
    explanation: `The complement is 1 − P = 1 − ${a}/${b} = ${b - a}/${b}${_frac8(b - a, b) !== `${b - a}/${b}` ? ` = ${correct}` : ''}.` },
    { family: 'probability-complement', reasoning: 'interpretation', representation: 'verbal' });
}

/* Joint probability from a two-way table (cell ÷ grand total). */
function gen8_prob_joint_table(tier) {
  const a = ri(3, 9) * 2, b = ri(2, 8) * 2, c = ri(3, 9) * 2, d = ri(2, 8) * 2;
  const row1 = a + b, total = a + b + c + d;
  const scene = pick([
    { rows: ['juniors', 'seniors'], cols: ['ride the bus', 'walk to school'] },
    { rows: ['members', 'guests'], cols: ['ordered tea', 'ordered coffee'] },
    { rows: ['weekday visitors', 'weekend visitors'], cols: ['toured the garden', 'toured the gallery'] },
  ]);
  const correct = _frac8(a, total);
  const q = mcFromStrings(correct, [
    { v: _frac8(a, row1), why: 'This divides by the row total; a joint probability divides by the GRAND total.' },
    { v: _frac8(row1, total), why: 'This is the probability of being in the row, not of the specific cell.' },
    { v: _frac8(a, a + c), why: 'This divides by the column total; use the grand total for a joint probability.' },
  ], (g) => _frac8(a + g, total + g + 1));
  return bp8({ skill: 'probability',
    text: `In a group, ${a} ${scene.rows[0]} ${scene.cols[0]} and ${b} ${scene.rows[0]} ${scene.cols[1]}, while ${c} ${scene.rows[1]} ${scene.cols[0]} and ${d} ${scene.rows[1]} ${scene.cols[1]}. If one person is chosen at random from the whole group, what is the probability that the person is a ${scene.rows[0].replace(/s$/, '')} who ${scene.cols[0]}?`, ...q,
    explanation: `There are ${total} people in all, and ${a} of them are ${scene.rows[0]} who ${scene.cols[0]}. The probability is ${a}/${total} = ${correct}.` },
    { family: 'probability-joint-table', reasoning: 'multi-step', representation: 'table' });
}

/* Which measure is most affected by an outlier (interpretation). */
function gen8_stat_measure(tier) {
  const correct = 'The mean';
  const q = mcFromStrings(correct, [
    { v: 'The median', why: 'The median is the middle value, so a single outlier barely moves it.' },
    { v: 'The mode', why: 'The mode is the most frequent value and is unaffected by one extreme value.' },
    { v: 'The number of values', why: 'Adding one value changes the count by exactly one either way; that is not “most affected.”' },
  ], () => 'The smallest value');
  return bp8({ skill: 'statistics',
    text: `A data set of everyday measurements has one value replaced by a much larger outlier. Which of these summary statistics is most affected by this change?`, ...q,
    explanation: `The mean adds up every value, so one very large outlier pulls it strongly toward that extreme. The median and mode depend on position or frequency and barely move.` },
    { family: 'statistics-interpretation', reasoning: 'interpretation', representation: 'verbal' });
}

/* Compare the spread (standard deviation) of two data sets (comparison). */
function gen8_spread_compare(tier) {
  const c = ri(20, 40);
  const tight = shuffle([c - 1, c, c, c + 1]);
  const wide = shuffle([c - 9, c - 3, c + 3, c + 9]);
  const wideIsA = Math.random() < 0.5;
  const A = wideIsA ? wide : tight, B = wideIsA ? tight : wide;
  const correct = wideIsA ? 'Data set A' : 'Data set B';
  const q = mcFromStrings(correct, [
    { v: wideIsA ? 'Data set B' : 'Data set A', why: 'These values cluster tightly around their mean, so the spread is smaller.' },
    { v: 'The two sets have equal standard deviations', why: 'The two sets have the same mean but clearly different spreads.' },
    { v: 'It cannot be determined from the data', why: 'Both full data sets are shown, so the spread can be compared directly.' },
  ], () => 'Neither data set has any spread');
  return bp8({ skill: 'statistics',
    text: `Two data sets have the same mean.\n\nData set A: ${A.join(', ')}\nData set B: ${B.join(', ')}\n\nWhich data set has the greater standard deviation?`, ...q,
    explanation: `Standard deviation measures how far values sit from the mean. The values in ${correct.toLowerCase()} range from ${Math.min(...(wideIsA ? A : B))} to ${Math.max(...(wideIsA ? A : B))}, much farther from the mean than the other set, so it has the greater standard deviation.` },
    { family: 'spread-comparison', reasoning: 'comparison', representation: 'data-display' });
}

/* Median from a frequency table (multi-step, table). */
function gen8_median_frequency(tier) {
  const v0 = ri(1, 5);
  const vals = [v0, v0 + ri(1, 3), v0 + ri(4, 6)];
  const freqs = [ri(1, 4), ri(1, 4), ri(1, 4)];
  let total = freqs.reduce((a, b) => a + b, 0);
  if (total % 2 === 0) { freqs[1] += 1; total += 1; }   // odd total → single middle value
  const list = [];
  vals.forEach((v, i) => { for (let j = 0; j < freqs[i]; j++) list.push(v); });
  const median = list[(total - 1) / 2];
  const q = mcFromValues(median, [
    { v: vals[1], why: 'The middle VALUE in the table is not the median unless the frequencies are equal.' },
    { v: round2(list.reduce((a, b) => a + b, 0) / total), why: 'This is the mean; the median is the middle value of the ordered data.' },
    { v: vals[freqs.indexOf(Math.max(...freqs))], why: 'This is the mode (most frequent value), not the median.' },
  ], (v) => String(round2(v)));
  return bp8({ skill: 'statistics',
    text: `The frequency table shows a data set.\n\nValue:     ${vals.join(',  ')}\nFrequency: ${freqs.join(',  ')}\n\nWhat is the median of the data set?`, ...q,
    explanation: `There are ${total} values in all. Listing them in order, the median is the ${(total + 1) / 2}th value, which is ${median}.` },
    { family: 'median-from-frequency', reasoning: 'multi-step', representation: 'table' });
}

/* ================================================= GEOMETRY & TRIGONOMETRY */

/* Distance between two points in the xy-plane (Pythagorean, coordinate). */
function gen8_distance(tier) {
  const [dx, dy, dist] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25]]);
  const x1 = ri(-6, 6), y1 = ri(-6, 6), x2 = x1 + dx, y2 = y1 + dy;
  const q = mcFromValues(dist, [
    { v: dx + dy, why: 'Distance is not the sum of the coordinate changes; combine them with the Pythagorean theorem.' },
    { v: dx * dx + dy * dy, why: 'This is (Δx)² + (Δy)² without taking the square root.' },
    { v: Math.max(dx, dy), why: 'The distance is the hypotenuse, longer than either coordinate change.' },
  ]);
  return bp8({ skill: 'angles',
    text: `In the xy-plane, what is the distance between the points (${x1}, ${y1}) and (${x2}, ${y2})?`, ...q,
    explanation: `Distance = √((Δx)² + (Δy)²) = √(${dx}² + ${dy}²) = √(${dx * dx} + ${dy * dy}) = √${dx * dx + dy * dy} = ${dist}.` },
    { family: 'coordinate-distance', reasoning: 'multi-step', representation: 'coordinate-plane' });
}

/* Midpoint of a segment (coordinate). */
function gen8_midpoint(tier) {
  const x1 = ri(-8, 8), x2 = x1 + 2 * ri(1, 6), y1 = ri(-8, 8), y2 = y1 + 2 * ri(1, 6);
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const correct = `(${mx}, ${my})`;
  const q = mcFromStrings(correct, [
    { v: `(${x1 + x2}, ${y1 + y2})`, why: 'This adds the coordinates without dividing by 2.' },
    { v: `(${x2 - x1}, ${y2 - y1})`, why: 'This is the change in coordinates, not the midpoint.' },
    { v: `(${mx}, ${y1})`, why: 'The midpoint averages BOTH coordinates; keep both y-values in the average.' },
  ], () => `(${mx + 1}, ${my})`);
  return bp8({ skill: 'angles',
    text: `What is the midpoint of the segment with endpoints (${x1}, ${y1}) and (${x2}, ${y2})?`, ...q,
    explanation: `The midpoint averages the coordinates: ((${x1} + ${x2})/2, (${y1} + ${y2})/2) = (${mx}, ${my}).` },
    { family: 'coordinate-midpoint', reasoning: 'plug-in', representation: 'coordinate-plane' });
}

/* Angle formed by parallel lines cut by a transversal (interpretation). */
function gen8_transversal(tier) {
  const a = ri(35, 145);
  const type = pick([
    { label: 'corresponding', equal: true }, { label: 'alternate interior', equal: true },
    { label: 'same-side interior', equal: false },
  ]);
  const ans = type.equal ? a : 180 - a;
  const q = mcFromValues(ans, [
    { v: type.equal ? 180 - a : a, why: type.equal ? 'Corresponding and alternate interior angles are equal, not supplementary.' : 'Same-side interior angles are supplementary (sum to 180°), not equal.' },
    { v: 90 - a, why: 'These angles are not complementary; parallel-line angles are equal or supplementary.' },
    { v: Math.round(a / 2), why: 'The angle is not halved by the transversal.' },
  ]);
  return bp8({ skill: 'angles',
    text: `Two parallel lines are cut by a transversal, forming eight angles. One angle measures ${a}°. What is the measure of its ${type.label} angle?`, ...q,
    explanation: `${type.equal ? `${type.label.charAt(0).toUpperCase() + type.label.slice(1)} angles formed by a transversal across parallel lines are congruent, so the angle is ${a}°.` : `Same-side interior angles are supplementary, so the angle is 180° − ${a}° = ${ans}°.`}` },
    { family: 'transversal-angles', reasoning: 'interpretation', representation: 'geometric-figure' });
}

/* Sum of interior angles of a polygon (plug-in). */
function gen8_polygon_sum(tier) {
  const n = ri(3, 10) + (tier > 1 ? ri(0, 3) : 0);
  const ans = (n - 2) * 180;
  const q = mcFromValues(ans, [
    { v: n * 180, why: 'The formula is (n − 2) × 180°, not n × 180°.' },
    { v: (n - 2) * 90, why: 'The triangle count multiplies by 180°, not 90°.' },
    { v: 360, why: '360° is the sum of the EXTERIOR angles, which is the same for every polygon.' },
  ]);
  return bp8({ skill: 'angles',
    text: `What is the sum of the measures of the interior angles of a polygon with ${n} sides?`, ...q,
    explanation: `A polygon with n sides splits into (n − 2) triangles, so its interior angles sum to (n − 2) × 180° = (${n} − 2) × 180° = ${ans}°.` },
    { family: 'polygon-angle-sum', reasoning: 'plug-in', representation: 'geometric-figure' });
}

/* Find a leg of a right triangle with the Pythagorean theorem (multi-step). */
function gen8_pyth_leg(tier) {
  const [a, b, c] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25]]);
  const q = mcFromValues(b, [
    { v: c - a, why: 'The legs and hypotenuse do not simply subtract; use a² + b² = c².' },
    { v: c + a, why: 'A leg is shorter than the hypotenuse, so it cannot be c + a.' },
    { v: Math.round(Math.sqrt(c * c + a * a)), why: 'This adds the squares; to find a leg you SUBTRACT: b² = c² − a².' },
  ]);
  return bp8({ skill: 'angles',
    text: `A right triangle has a hypotenuse of length ${c} and one leg of length ${a}. What is the length of the other leg?`, ...q,
    explanation: `By the Pythagorean theorem, b = √(c² − a²) = √(${c}² − ${a}²) = √(${c * c} − ${a * a}) = √${c * c - a * a} = ${b}.` },
    { family: 'pythagorean-leg', reasoning: 'multi-step', representation: 'geometric-figure' });
}

/* Similar triangles with an unknown side, solved by proportion (multi-step). */
function gen8_similar_algebra(tier) {
  const k = ri(2, 4), a = ri(2, 6), b = ri(3, 7);
  const ka = k * a, x = k * b;
  const q = mcFromValues(x, [
    { v: b + (ka - a), why: 'Similar sides scale by MULTIPLICATION, not by adding the same difference.' },
    { v: ka, why: 'This copies the first pair’s larger side instead of scaling BC.' },
    { v: b + a, why: 'This adds side lengths rather than applying the scale factor.' },
  ]);
  return bp8({ skill: 'angles',
    text: `Triangle ABC is similar to triangle DEF. Side AB = ${a} corresponds to side DE = ${ka}, and side BC = ${b} corresponds to side EF. What is the length of EF?`, ...q,
    explanation: `The scale factor from ABC to DEF is DE ÷ AB = ${ka} ÷ ${a} = ${k}. So EF = ${k} × BC = ${k} × ${b} = ${x}.` },
    { family: 'similar-triangle-algebra', reasoning: 'multi-step', representation: 'geometric-figure' });
}

/* Volume of a cylinder, cone, or sphere in the form kπ (plug-in). */
function gen8_solid_volume(tier) {
  const type = pick(['cylinder', 'cone', 'sphere']);
  let r, h, coef, formula, wrongs;
  if (type === 'cylinder') {
    r = ri(2, 6); h = ri(2, 8); coef = r * r * h;
    formula = `V = πr²h = π(${r})²(${h})`;
    wrongs = [
      { v: `${2 * r * h}π`, why: 'This uses 2rh (like a surface term); volume of a cylinder is πr²h.' },
      { v: `${r * h}π`, why: 'This forgets to square the radius.' },
      { v: `${r * r}π`, why: 'This is the base area only; multiply by the height h.' },
    ];
    var text = `A cylinder has radius ${r} and height ${h}. What is its volume?`;
  } else if (type === 'cone') {
    r = ri(2, 6); h = 3 * ri(1, 4); coef = r * r * h / 3;
    formula = `V = (1/3)πr²h = (1/3)π(${r})²(${h})`;
    wrongs = [
      { v: `${r * r * h}π`, why: 'This forgets the 1/3 factor in a cone’s volume.' },
      { v: `${r * r}π`, why: 'This uses only the base area, missing the height and the 1/3.' },
      { v: `${round2(r * h / 3)}π`, why: 'The radius must be squared before multiplying.' },
    ];
    var text = `A cone has radius ${r} and height ${h}. What is its volume?`;
  } else {
    r = pick([3, 6]); coef = 4 * r * r * r / 3;
    formula = `V = (4/3)πr³ = (4/3)π(${r})³`;
    wrongs = [
      { v: `${r * r * r}π`, why: 'This forgets the 4/3 factor in a sphere’s volume.' },
      { v: `${4 * r * r}π`, why: 'A sphere’s volume uses r³, not r².' },
      { v: `${round2(4 * r / 3)}π`, why: 'The radius must be cubed, not used to the first power.' },
    ];
    var text = `A sphere has radius ${r}. What is its volume?`;
  }
  const q = mcFromStrings(`${coef}π`, wrongs, (g) => `${coef + g}π`);
  return bp8({ skill: 'area-volume', text, ...q,
    explanation: `${formula} = ${coef}π.` },
    { family: 'solid-volume', reasoning: 'plug-in', representation: 'geometric-figure' });
}

/* Write a circle's equation from its center and radius (transformation). */
function gen8_circle_write_eq(tier) {
  const h = ri(-6, 6), k = ri(-6, 6), r = ri(2, 9);
  const correct = `(x ${_sub8(h)})² + (y ${_sub8(k)})² = ${r * r}`;
  const q = mcFromStrings(correct, [
    { v: `(x ${_sub8(h)})² + (y ${_sub8(k)})² = ${r}`, why: 'The right side is r², not r.' },
    { v: `(x ${_sub8(-h)})² + (y ${_sub8(-k)})² = ${r * r}`, why: 'The center’s coordinates are SUBTRACTED, so the signs inside are reversed here.' },
    { v: `(x ${_sub8(h)})² + (y ${_sub8(k)})² = ${2 * r}`, why: 'This uses the diameter or 2r instead of r² on the right side.' },
  ], (g) => `(x ${_sub8(h)})² + (y ${_sub8(k)})² = ${r * r + g}`);
  return bp8({ skill: 'circles',
    text: `A circle in the xy-plane has center (${h}, ${k}) and radius ${r}. Which equation represents this circle?`, ...q,
    explanation: `The standard form is (x − h)² + (y − k)² = r². With center (${h}, ${k}) and radius ${r}: (x ${_sub8(h)})² + (y ${_sub8(k)})² = ${r * r}.` },
    { family: 'circle-equation-write', reasoning: 'transformation', representation: 'coordinate-plane' });
}

/* Arc length of a circle from a central angle (multi-step). */
function gen8_arc_length(tier) {
  const cfg = pick([
    { theta: 90, mul: r => r / 2, rs: [2, 4, 6, 8, 10] },
    { theta: 180, mul: r => r, rs: [3, 4, 5, 6, 7, 8, 9] },
    { theta: 60, mul: r => r / 3, rs: [3, 6, 9, 12] },
    { theta: 120, mul: r => 2 * r / 3, rs: [3, 6, 9, 12] },
    { theta: 45, mul: r => r / 4, rs: [4, 8, 12] },
  ]);
  const r = pick(cfg.rs), coef = cfg.mul(r);
  const q = mcFromStrings(`${coef}π`, [
    { v: `${round2(cfg.theta / 360 * r * r)}π`, why: 'That is the SECTOR AREA formula (θ/360)πr², not the arc length.' },
    { v: `${2 * r}π`, why: 'This is the full circumference; the arc is only part of it.' },
    { v: `${r}π`, why: 'Scale the circumference by θ/360; this ignores the fraction of the circle.' },
  ], (g) => `${coef + g}π`);
  return bp8({ skill: 'circles',
    text: `A circle has radius ${r}. An arc of the circle is intercepted by a central angle of ${cfg.theta}°. What is the length of the arc?`, ...q,
    explanation: `Arc length = (θ/360) × 2πr = (${cfg.theta}/360) × 2π(${r}) = ${coef}π.` },
    { family: 'arc-length', reasoning: 'multi-step', representation: 'geometric-figure' });
}

/* ================================================ GRID-IN VARIANTS (batch 8) */

/* Residual — grid the signed value (gives scatterplots a grid-in). */
function gen8grid_residual(tier) {
  const m = pick([2, 3, 4, 5]), b = ri(2, 12), x = ri(3, 10);
  const predicted = m * x + b, res = pick([-5, -4, -3, 3, 4, 5]);
  return bp8(gridQ('scatterplots',
    `A line of best fit is ŷ = ${m}x + ${b}. A data point with x = ${x} has an actual y-value of ${predicted + res}. What is the residual (actual − predicted)?`, res,
    `Predicted: ${m}(${x}) + ${b} = ${predicted}. Residual = ${predicted + res} − ${predicted} = ${res}.`,
    { hint: 'Residual = actual − predicted.' }),
    { family: 'residual', reasoning: 'multi-step', representation: 'graph' });
}

/* Best-fit prediction — grid the predicted value (second scatterplots grid). */
function gen8grid_bestfit_predict(tier) {
  const m = pick([2, 3, 4, 5]), b = ri(1, 15), x = ri(4, 12);
  return bp8(gridQ('scatterplots',
    `A line of best fit for a data set is ŷ = ${m}x + ${b}. What value does the model predict for y when x = ${x}?`, m * x + b,
    `Substitute x = ${x}: ŷ = ${m}(${x}) + ${b} = ${m * x + b}.`,
    { hint: 'Substitute the x-value into the best-fit equation.' }),
    { family: 'best-fit-prediction', reasoning: 'plug-in', representation: 'graph' });
}

/* Density — grid the mass. */
function gen8grid_density(tier) {
  const d = ri(2, 12), v = ri(3, 15);
  return bp8(gridQ('ratios',
    `A material has a density of ${d} grams per cubic centimeter. What is the mass, in grams, of ${v} cm³ of the material?`, d * v,
    `Mass = density × volume = ${d} × ${v} = ${d * v} grams.`,
    { hint: 'Mass = density × volume.' }),
    { family: 'density', reasoning: 'multi-step', representation: 'verbal' });
}

/* Probability complement — grid a fraction/decimal (breaks the probability grid monoculture). */
function gen8grid_prob_complement(tier) {
  const b = ri(4, 12), a = ri(1, b - 1);
  const dec = round2((b - a) / b);
  return bp8(gridQ('probability',
    `The probability that an event happens is ${a}/${b}. What is the probability that it does NOT happen? Enter your answer as a fraction or decimal.`, (b - a) / b,
    `P(not) = 1 − ${a}/${b} = ${b - a}/${b}${terminates(b) ? ` = ${dec}` : ''}.`,
    { accept: [`${b - a}/${b}`, _frac8(b - a, b), terminates(b) ? String(dec) : null].filter(Boolean),
      tolLoose: !terminates(b), hint: 'Subtract the probability from 1.' }),
    { family: 'probability-complement', reasoning: 'interpretation', representation: 'verbal' });
}

/* Coordinate distance — grid the integer distance. */
function gen8grid_distance(tier) {
  const [dx, dy, dist] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15]]);
  const x1 = ri(-6, 6), y1 = ri(-6, 6);
  return bp8(gridQ('angles',
    `In the xy-plane, what is the distance between (${x1}, ${y1}) and (${x1 + dx}, ${y1 + dy})?`, dist,
    `√((${dx})² + (${dy})²) = √${dx * dx + dy * dy} = ${dist}.`,
    { hint: 'Use the distance formula: √((Δx)² + (Δy)²).' }),
    { family: 'coordinate-distance', reasoning: 'multi-step', representation: 'coordinate-plane' });
}

/* Polygon interior-angle sum — grid the total. */
function gen8grid_polygon_sum(tier) {
  const n = ri(3, 12);
  return bp8(gridQ('angles',
    `What is the sum, in degrees, of the interior angles of a polygon with ${n} sides?`, (n - 2) * 180,
    `(n − 2) × 180° = (${n} − 2) × 180° = ${(n - 2) * 180}°.`,
    { hint: 'Interior-angle sum = (n − 2) × 180°.' }),
    { family: 'polygon-angle-sum', reasoning: 'plug-in', representation: 'geometric-figure' });
}

/* Percent greater — grid the percent. */
function gen8grid_percent_compare(tier) {
  const Y = pick([40, 60, 80, 120, 140, 160, 180, 200]), p = pick([10, 20, 25, 40, 50, 75]);
  const X = Y + Y * p / 100;
  return bp8(gridQ('percentages',
    `The value ${X} is what percent greater than ${Y}? (Enter the number of percent.)`, p,
    `(${X} − ${Y}) ÷ ${Y} × 100 = ${X - Y} ÷ ${Y} × 100 = ${p}.`,
    { hint: 'Percent greater = (difference ÷ original) × 100.' }),
    { family: 'percent-comparison', reasoning: 'multi-step', representation: 'verbal' });
}

/* ===================== REGISTER (augment dispatch pools) ================ */
(function registerBlueprintMath8() {
  const MC8 = {
    'scatterplots': [gen8_residual, gen8_association],
    'percentages': [gen8_percent_compare],
    'ratios': [gen8_unit_conversion, gen8_density],
    'probability': [gen8_prob_complement, gen8_prob_joint_table],
    'statistics': [gen8_stat_measure, gen8_spread_compare, gen8_median_frequency],
    'angles': [gen8_distance, gen8_midpoint, gen8_transversal, gen8_polygon_sum, gen8_pyth_leg, gen8_similar_algebra],
    'area-volume': [gen8_solid_volume],
    'circles': [gen8_circle_write_eq, gen8_arc_length],
  };
  const GRID8 = {
    'scatterplots': [gen8grid_residual, gen8grid_bestfit_predict],
    'ratios': [gen8grid_density],
    'probability': [gen8grid_prob_complement],
    'angles': [gen8grid_distance, gen8grid_polygon_sum],
    'percentages': [gen8grid_percent_compare],
  };
  if (typeof MATH_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(MC8)) {
      const orig = MATH_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      MATH_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
  if (typeof GRID_GENERATORS !== 'undefined') {
    for (const [skill, gens] of Object.entries(GRID8)) {
      const orig = GRID_GENERATORS[skill];
      const pool = orig ? [orig, ...gens] : gens.slice();
      GRID_GENERATORS[skill] = (tier) => pick(pool)(tier);
    }
  }
})();
