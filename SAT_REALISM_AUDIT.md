# SAT Quest — SAT Realism Audit

This document checks SAT Quest's design against publicly known facts about the
**Digital SAT** administered by the College Board. It exists to keep the app
honest: aligned to the real test's structure, timing, and skills — while making
clear that **all in-app questions are original SAT-style practice**, never
copied, paraphrased, or "tweaked" from any official source.

> **Alignment, not copying.** SAT Quest uses the SAT's published *structure,
> domains, skills, question styles, and timing* only as references for building
> original content. It does not reproduce College Board, Bluebook, or Khan
> Academy questions in any form.

_Last reviewed by the author against publicly available College Board
descriptions of the Digital SAT. Where facts could drift over time (exact
timing, question counts), verify against the official links before relying on
them for test-day planning._

---

## 1. Test sections

| Official SAT fact | In SAT Quest | Status |
|---|---|---|
| The SAT has two sections: **Reading and Writing** and **Math**. | The map is split into two sections: Reading & Writing (verbal realms) and Math (numbered realms). | ✅ Aligned |
| Reading & Writing comes first, then Math. | Sections are presented R&W then Math on the map. | ✅ Aligned |

## 2. Reading & Writing content

| Official SAT fact | In SAT Quest | Status |
|---|---|---|
| R&W uses **short passages** (or passage pairs), each followed by **one** question. | Every R&W item is a short original passage with a single question. | ✅ Aligned |
| Four R&W content domains: **Information and Ideas, Craft and Structure, Expression of Ideas, Standard English Conventions**. | Four R&W regions map exactly to these four domains. | ✅ Aligned |
| Skills tested include comprehension/central ideas, command of evidence (textual **and** quantitative), inferences, words in context, text structure & purpose, cross-text connections, transitions, rhetorical synthesis, boundaries, and form/structure/sense. | Skill tags used: Central Ideas and Details, Command of Evidence (Textual), Command of Evidence (Quantitative), Inferences, Words in Context, Text Structure and Purpose, Cross-Text Connections, Transitions, Rhetorical Synthesis, Boundaries, Form/Structure/Sense. | ✅ Aligned |
| Command of Evidence has a **quantitative** variant using data (tables/graphs described in text). | Added a dedicated "Command of Evidence (Quantitative)" skill with data-description questions. | ✅ Added in v2 |

## 3. Math content

| Official SAT fact | In SAT Quest | Status |
|---|---|---|
| Four Math content domains: **Algebra, Advanced Math, Problem-Solving and Data Analysis, Geometry and Trigonometry**. | Four Math regions map exactly to these four domains. | ✅ Aligned |
| Skills include linear equations/functions/systems/inequalities; equivalent expressions, quadratics, exponentials, radicals, function notation; ratios/rates/proportions, percentages, one/two-variable data & statistics, probability, sample statistics/margin of error; area/volume, lines/angles/triangles, right-triangle trig, and circles. | Generators cover all of these skills with skill tags. | ✅ Aligned |
| Some Math questions are **student-produced response** (grid-in), not multiple choice. | v3 adds **typed student-produced response** questions across all four Math domains, mixed into levels, bosses, review, the tower, and practice tests. Grading accepts equivalent integers, decimals, and fractions. | ✅ Added in v3 |
| A calculator (built-in Desmos) is allowed on the entire Math section. | Noted in strategy tips; the app does not embed a calculator. | ⚠️ Informational |

## 4. Digital format, modules, and adaptivity

| Official SAT fact | In SAT Quest | Status |
|---|---|---|
| The Digital SAT is delivered in **two modules per section**, and it is **section-adaptive**: performance on the first module affects the difficulty of the second. | v3 adds a **full practice test** and **Final Exam Realm** that run the real module STRUCTURE (R&W M1 → R&W M2 → break → Math M1 → Math M2). Module 2 difficulty adjusts to Module 1 performance. This is clearly labeled **SIMULATED adaptivity**, not the official College Board algorithm. | ✅ Added in v3 (simulated) |
| Each question is worth the same; there is **no penalty for guessing**. | Reflected in strategy tips ("never leave a question blank"). Grading counts each question equally. | ✅ Aligned |

## 5. Timing

| Official SAT fact | In SAT Quest | Status |
|---|---|---|
| Total testing time is approximately **2 hours 14 minutes** (about 64 minutes for Reading & Writing and 70 minutes for Math), plus a break. | Documented on the Official Resources screen and here. The app does not run a single 2h14m test; it uses shorter timed levels and bosses. | ✅ Documented |
| R&W averages roughly **~71 seconds per question**; Math averages roughly **~95 seconds per question**. | Per-question **time targets** are set by section and difficulty (R&W 45/60/80s, Math 60/90/120s) to bracket these averages. Boss fights use per-question timers. | ✅ Aligned |

## 6. Scoring

| Official SAT fact | In SAT Quest | Status |
|---|---|---|
| The SAT is scored on a **400–1600** scale (two 200–800 section scores). | The optional goal tracker accepts a target score in the 400–1600 range. | ✅ Aligned |
| Only the College Board can produce an official SAT score. | **SAT Quest never calculates or claims an official SAT score.** It tracks XP, in-game levels, accuracy, and a weakness map. Any score figure the user enters is treated as a personal goal, and the Resources page explicitly labels any score figures as **"unofficial estimates, not real SAT scores."** | ✅ Aligned |

## 7. Copyright & attribution

| Requirement | In SAT Quest | Status |
|---|---|---|
| Do not copy, paraphrase, lightly modify, or "tweak" official questions. | All Math questions are **procedurally generated** from templates with randomized numbers; all Reading & Writing questions are **authored from scratch** for this app. Every question is labeled **"Original SAT-style practice."** | ✅ Aligned |
| Do not scrape official websites. | The app has no network scraping; it only provides outbound **links** to official resources. | ✅ Aligned |
| Link to official resources. | The Resources screen links to the College Board **Student Question Bank**, **Bluebook** official practice tests, and **Khan Academy** Official Digital SAT Prep. | ✅ Aligned |
| Trademark clarity. | Settings and Resources state: "SAT" is a trademark of the College Board, which does not endorse this app. | ✅ Aligned |

## 8. Content-quality checks (automated)

The build includes tests (see the project's test scripts) that verify, across
thousands of generated questions and the full authored bank:

- Every question has exactly **four unique answer choices**.
- The labeled correct answer is always **one of the four choices**.
- Every question carries a **skill tag, difficulty tag, and time target**.
- Every question includes an **explanation of why the answer is right**, and
  wrong choices carry **reasons they are wrong**.
- No item text is copied from an official source (all content originates in
  `js/data/mathgen.js` and `js/data/rwbank.js`).

## v3 additions (what changed since v2)

- ✅ **Student-produced response (grid-in)** Math questions across all four Math
  domains, with equivalence-aware grading (integers, decimals, fractions).
- ✅ **Full-length practice test** (Simulation Gate) following the real module
  structure, with timers, review-before-submit, no-going-back, save/resume, an
  unofficial estimated score, domain accuracy, pacing, and recommendations.
- ✅ **Final Exam Realm** — the same four-module test as a boss sequence.
- ✅ **Simulated adaptivity** between Module 1 and Module 2, clearly labeled.
- ✅ **R&W passage variety** across science, history/social studies, humanities,
  and literature-style topics; the authored bank grew from 54 to 71 items.
- ✅ **Math visuals** (SVG) for scatterplots, line graphs, bar charts, geometry
  diagrams, and the coordinate plane — each with an alt-text description.
- ✅ **Upgrade Hub** — spend earned Skill Points on Explanation Boost, Hint
  System, Time Control, Accuracy Tracker, and per-domain Skill Mastery; plus
  domain mastery tracking that grows with correct practice.

## Known gaps to close in v4

1. **True module adaptivity** matching the official algorithm (v3 uses a simpler
   accuracy threshold, clearly labeled as simulated).
2. A genuinely **full-length** timed test (~2h14m / ~98 questions); v3 ships a
   shorter, structurally faithful simulation (44 questions) for repeatability.
3. Even more **R&W passages** and **paired (Cross-Text) passages** to further cut
   repetition across all 40 R&W levels and long practice tests.
4. **Grid diagrams for more skills** (e.g. circles on the coordinate plane,
   systems as intersecting lines) and richer geometry figures.
5. An official-format **calculator** panel for the Math section.

---

*This audit reflects the author's understanding of the publicly documented
Digital SAT. Always confirm current test specifics on the official College Board
site before making test-day decisions.*
