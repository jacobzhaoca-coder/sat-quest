/* SAT Quest — flat math dispatch (loaded LAST, after mathgen.js…mathgen9.js).

   WHY: each mathgen batch registered its generators by wrapping the previous
   dispatcher — MATH_GENERATORS[skill] = t => pick([prevPicker, ...newGens])(t).
   Nesting that eight times makes the pick GEOMETRICALLY biased: the newest batch
   is chosen ~50% of the time while the earliest, highest-variety generators
   (e.g. the mean/statistics and linear generators, each with tens of thousands
   of distinct variants) are reached only a fraction of a percent of the time.
   That both wastes their variety and over-serves the newest templates.

   FIX: rebuild each skill's pool as a FLAT, uniform list of every generator that
   feeds it, so every problem type — old and new — is equally likely. This raises
   the effective reachable pool (older high-variety generators get sampled fairly)
   and minimises near-repeat (no template dominates a skill). No generator is
   added or removed here; only the selection distribution changes. */

(function flattenMathDispatch() {
  const MC = {
    'linear-eq': [gen_linear_eq, gen2_linear_word, gen3_x_intercept, gen7_abs_value_eq],
    'linear-func': [gen_linear_func, gen2_linear_rate, gen3_slope, gen7_line_from_table, gen7_interpret_slope, gen7_interpret_intercept, gen7_match_equation, gen7_parallel_perp_slope, gen9_slope_from_standard],
    'systems': [gen_systems, gen2_systems_word, gen5_system_word, gen7_no_solution, gen7_infinite_solutions, gen9_break_even, gen9_system_target],
    'inequalities': [gen_inequalities, gen3_inequality, gen6_inequality_integer, gen7_abs_value_ineq, gen7_compound_ineq, gen7_model_inequality, gen7_inequality_max],
    'equivalent': [gen_equivalent, gen3_distribute, gen3_exponents, gen7_rational_undefined, gen7_rational_simplify, gen9_literal_solve],
    'quadratics': [gen_quadratics, gen2_vertex, gen3_quadratic_roots, gen4_quad_axis, gen4_quad_sumprod, gen6_quadratic_vertex, gen6_quadratic_other_root, gen7_complete_square, gen7_discriminant, gen7_nonlinear_count, gen9_sum_product_roots, gen9_vertex_from_factored],
    'exponentials': [gen_exponentials, gen2_decay, gen4_exp_growth, gen4_exp_factor, gen5_exp_halflife, gen6_exp_growth, gen7_exp_interpret, gen9_exp_equation],
    'radicals': [gen_radicals, gen3_radical, gen4_radical_equation, gen4_radical_add, gen7_rational_exponent, gen7_simplify_radical],
    'functions': [gen_functions, gen2_composition, gen3_poly_eval, gen5_function_composition, gen7_func_transform, gen7_func_from_table, gen9_avg_rate],
    'ratios': [gen_ratios, gen2_proportion, gen3_ratio_partition, gen3_speed, gen5_ratio_share, gen8_unit_conversion, gen8_density, gen9_unit_rate_deal, gen9_combined_rate],
    'percentages': [gen_percentages, gen2_percent_change, gen3_percent_of, gen5_percent_change, gen8_percent_compare, gen9_successive_percent, gen9_percent_of_percent],
    'statistics': [gen_statistics, gen2_mean_target, gen3_median, gen5_weighted_avg, gen8_stat_measure, gen8_spread_compare, gen8_median_frequency, gen9_range],
    'scatterplots': [gen_scatterplots, gen4_scatter_predict, gen4_scatter_slope, gen6_best_fit, gen8_residual, gen8_association],
    'probability': [gen_probability, gen3_probability, gen4_two_way, gen6_two_way_prob, gen8_prob_complement, gen8_prob_joint_table, gen9_expected_value, gen9_at_least_one],
    'sampling': [gen_sampling, gen4_sampling_valid, gen4_sampling_margin],
    'area-volume': [gen_area_volume, gen2_pythagorean, gen3_area_triangle, gen3_volume_box, gen8_solid_volume, gen9_composite_area, gen9_surface_area_box, gen9_scale_volume],
    'angles': [gen_angles, gen2_triangle_angle, gen2_supplement, gen3_similar, gen8_distance, gen8_midpoint, gen8_transversal, gen8_polygon_sum, gen8_pyth_leg, gen8_similar_algebra, gen9_triangle_inequality],
    'circles': [gen_circles, gen2_circle, gen4_circle_sector, gen4_circle_equation, gen6_circle_radius, gen8_circle_write_eq, gen8_arc_length, gen9_circle_area_from_circ, gen9_inscribed_angle],
    'trig': [gen_trig, gen2_trig_ratio, gen3_special_right, gen4_trig_complement, gen4_trig_side, gen6_special_triangle, gen6_trig_ratio],
  };
  const GRID = {
    'linear-eq': [grid_linear_eq, gen2grid_linear_word, gen3grid_slope, gen7grid_abs_value],
    'systems': [grid_systems, gen5grid_system, gen7grid_infinite, gen9grid_break_even],
    'inequalities': [grid_inequalities, gen7grid_compound],
    'quadratics': [grid_quadratics, gen3grid_quadratic_root, gen4grid_quad_sumprod, gen6grid_quadratic_root, gen7grid_complete_square],
    'radicals': [grid_exponents, gen4grid_radical],
    'functions': [grid_functions, gen7grid_func_from_table, gen9grid_avg_rate],
    'percentages': [grid_percentages, gen2grid_percent_change, gen3grid_percent_of, gen8grid_percent_compare],
    'ratios': [grid_ratios, gen2grid_proportion, gen3grid_ratio_partition, gen8grid_density],
    'statistics': [grid_statistics, gen2grid_mean_target, gen3grid_median, gen9grid_range],
    'probability': [grid_probability, gen8grid_prob_complement],
    'angles': [grid_angles, gen2grid_triangle_angle, gen6grid_pythagorean, gen8grid_distance, gen8grid_polygon_sum],
    'area-volume': [grid_area, gen2grid_pythagorean, gen3grid_area_triangle, gen9grid_composite_area, gen9grid_surface_area],
    'trig': [grid_trig, gen4grid_trig_side],
    'circles': [gen4grid_circle_sector, gen6grid_circle_radius],
    'exponentials': [gen4grid_exp_growth, gen5grid_exp_halflife],
    'scatterplots': [gen8grid_residual, gen8grid_bestfit_predict],
  };
  const install = (registry, map) => {
    if (typeof registry === 'undefined') return;
    for (const [skill, gens] of Object.entries(map)) {
      const pool = gens.filter(g => typeof g === 'function');   // guard against any missing name
      if (pool.length) registry[skill] = (tier) => pick(pool)(tier);
    }
  };
  if (typeof MATH_GENERATORS !== 'undefined') install(MATH_GENERATORS, MC);
  if (typeof GRID_GENERATORS !== 'undefined') install(GRID_GENERATORS, GRID);
})();
