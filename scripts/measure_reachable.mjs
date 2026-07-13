/* Probe: honest "reachable" math pool under FAIR (flat) per-generator sampling.
   Sums distinct signatures across every generator with an equal budget each, so
   skills with many generators are not under-counted (the nested pick([orig,...])
   dispatch starves older high-cardinality generators). Reports the reachable
   pool for the pre-expansion generators (batches 1-6) vs all (1-9). */
import fs from 'node:fs'; import vm from 'node:vm';
const ctx = { console, Math, Date, JSON, Object, Array, String, Number, isNaN, isFinite, parseInt, parseFloat, localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} }, window: undefined };
vm.createContext(ctx);
for (const f of ['js/data/worlds.js','js/data/tips.js','js/data/mathgen.js','js/data/gridgen.js','js/data/mathviz.js','js/data/mathgen2.js','js/data/mathgen3.js','js/data/mathgen4.js','js/data/mathgen5.js','js/data/mathgen6.js','js/data/mathgen7.js','js/data/mathgen8.js','js/data/mathgen9.js','js/state.js','js/upgrades.js','js/quiz.js','js/exam.js'])
  vm.runInContext(fs.readFileSync(f,'utf8'), ctx, { filename: f });

// generator-name lists, split by batch era
const OLD = ['gen_linear_eq','gen_linear_func','gen_systems','gen_inequalities','gen_equivalent','gen_quadratics','gen_exponentials','gen_radicals','gen_functions','gen_ratios','gen_percentages','gen_statistics','gen_scatterplots','gen_probability','gen_sampling','gen_area_volume','gen_angles','gen_circles','gen_trig',
'grid_linear_eq','grid_systems','grid_inequalities','grid_quadratics','grid_exponents','grid_functions','grid_percentages','grid_ratios','grid_statistics','grid_probability','grid_angles','grid_area','grid_trig',
'gen2_linear_word','gen2_linear_rate','gen2_systems_word','gen2_percent_change','gen2_proportion','gen2_decay','gen2_composition','gen2_vertex','gen2_pythagorean','gen2_triangle_angle','gen2_supplement','gen2_circle','gen2_trig_ratio','gen2_mean_target','gen2grid_linear_word','gen2grid_percent_change','gen2grid_proportion','gen2grid_triangle_angle','gen2grid_pythagorean','gen2grid_mean_target',
'gen3_slope','gen3_inequality','gen3_x_intercept','gen3_distribute','gen3_exponents','gen3_quadratic_roots','gen3_poly_eval','gen3_radical','gen3_median','gen3_ratio_partition','gen3_speed','gen3_probability','gen3_percent_of','gen3_area_triangle','gen3_volume_box','gen3_similar','gen3_special_right','gen3grid_slope','gen3grid_percent_of','gen3grid_area_triangle','gen3grid_ratio_partition','gen3grid_median','gen3grid_quadratic_root',
'gen4_sampling_valid','gen4_sampling_margin','gen4_trig_complement','gen4_trig_side','gen4_circle_sector','gen4_circle_equation','gen4_radical_equation','gen4_radical_add','gen4_exp_growth','gen4_exp_factor','gen4_quad_axis','gen4_quad_sumprod','gen4_scatter_predict','gen4_scatter_slope','gen4_two_way','gen4grid_exp_growth','gen4grid_circle_sector','gen4grid_radical','gen4grid_quad_sumprod','gen4grid_trig_side',
'gen5_system_word','gen5_percent_change','gen5_function_composition','gen5_exp_halflife','gen5_ratio_share','gen5_weighted_avg','gen5grid_system','gen5grid_exp_halflife',
'gen6_quadratic_vertex','gen6_quadratic_other_root','gen6_inequality_integer','gen6_circle_radius','gen6_special_triangle','gen6_trig_ratio','gen6_two_way_prob','gen6_best_fit','gen6_exp_growth','gen6grid_quadratic_root','gen6grid_pythagorean','gen6grid_circle_radius'];
const NEW = ['gen7_no_solution','gen7_infinite_solutions','gen7_abs_value_eq','gen7_abs_value_ineq','gen7_compound_ineq','gen7_model_inequality','gen7_inequality_max','gen7_line_from_table','gen7_interpret_slope','gen7_interpret_intercept','gen7_match_equation','gen7_parallel_perp_slope','gen7_complete_square','gen7_discriminant','gen7_nonlinear_count','gen7_rational_undefined','gen7_rational_simplify','gen7_func_transform','gen7_func_from_table','gen7_exp_interpret','gen7_simplify_radical','gen7_rational_exponent','gen7grid_abs_value','gen7grid_compound','gen7grid_infinite','gen7grid_complete_square','gen7grid_func_from_table',
'gen8_residual','gen8_association','gen8_percent_compare','gen8_unit_conversion','gen8_density','gen8_prob_complement','gen8_prob_joint_table','gen8_stat_measure','gen8_spread_compare','gen8_median_frequency','gen8_distance','gen8_midpoint','gen8_transversal','gen8_polygon_sum','gen8_pyth_leg','gen8_similar_algebra','gen8_solid_volume','gen8_circle_write_eq','gen8_arc_length','gen8grid_residual','gen8grid_bestfit_predict','gen8grid_density','gen8grid_prob_complement','gen8grid_distance','gen8grid_polygon_sum','gen8grid_percent_compare',
'gen9_slope_from_standard','gen9_literal_solve','gen9_break_even','gen9_system_target','gen9_avg_rate','gen9_sum_product_roots','gen9_vertex_from_factored','gen9_exp_equation','gen9_successive_percent','gen9_percent_of_percent','gen9_expected_value','gen9_at_least_one','gen9_unit_rate_deal','gen9_combined_rate','gen9_range','gen9_composite_area','gen9_circle_area_from_circ','gen9_inscribed_angle','gen9_surface_area_box','gen9_scale_volume','gen9_triangle_inequality','gen9grid_break_even','gen9grid_avg_rate','gen9grid_composite_area','gen9grid_range','gen9grid_surface_area'];

ctx.OLD = OLD; ctx.NEW = NEW;
const res = vm.runInContext(`(function(){
  const B = 3000; // draws per generator per tier
  const missing = [];
  const distinctFor = (names) => {
    const sigs = new Set(); const skels = new Set();
    for (const nm of names) {
      let fn; try { fn = eval(nm); } catch(e) { missing.push(nm); continue; }
      if (typeof fn !== 'function') { missing.push(nm); continue; }
      for (let t=1;t<=3;t++) for (let i=0;i<B;i++){ const base = fn(t); if(!base) continue; const q = stampMathIds({...base, origin:'generated', difficulty:'Medium'}, base.type==='grid'?'grid':'mc', base.skill||'x'); sigs.add(q.sig); skels.add(q.styleSig); }
    }
    return { sigs: sigs.size, skels: skels.size };
  };
  const old = distinctFor(OLD);
  const allNames = OLD.concat(NEW);
  const all = distinctFor(allNames);
  return { old, all, missing, oldN: OLD.length, allN: allNames.length };
})()`, ctx);
console.log('missing/invalid names:', res.missing.length, res.missing.slice(0,20).join(', '));
console.log(`OLD generators (batches 1-6): ${res.oldN}  → reachable sigs ${res.old.sigs.toLocaleString()}, skeletons ${res.old.skels}`);
console.log(`ALL generators (batches 1-9): ${res.allN}  → reachable sigs ${res.all.sigs.toLocaleString()}, skeletons ${res.all.skels}`);
