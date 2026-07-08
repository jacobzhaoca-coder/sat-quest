/* SAT Quest — router, screens, and game flow (v2, expanded).
   Entry point loaded last. */

const APP = document.getElementById('app');
let currentRoute = { name: 'home' };

/* ---------------- Router ---------------- */
const ROUTES = {};
function route(name, fn) { ROUTES[name] = fn; }
function navigate(name, params = {}) {
  Sound.play('click');
  currentRoute = { name, ...params };
  render();
  window.scrollTo({ top: 0, behavior: motionOff() ? 'auto' : 'smooth' });
}
function render() {
  if (typeof examTimerId !== 'undefined' && examTimerId) { clearInterval(examTimerId); examTimerId = null; }
  clear(APP);
  const fn = ROUTES[currentRoute.name] || ROUTES.home;
  APP.appendChild(fn(currentRoute));
  updateNav();
  updateFabVisibility();
}

/* The floating Upgrade Hub button is hidden on immersive / action screens (a
   question, a boss fight, the exam, onboarding, results) where it would overlap
   the primary button or content — and on the hub itself, where it is redundant.
   The Upgrade Hub stays reachable there via the bottom-nav Upgrades tab. */
const FAB_HIDDEN_ROUTES = new Set(['onboarding', 'level', 'practice', 'boss', 'exam', 'result', 'upgrades']);
function updateFabVisibility() {
  const fab = document.getElementById('upgrade-fab');
  if (!fab) return;
  const show = !FAB_HIDDEN_ROUTES.has(currentRoute.name);
  fab.style.display = show ? '' : 'none';
  document.body.classList.toggle('has-fab', show);
}

/* Bulletproof entry to the Upgrade Hub. Uses the normal router when available,
   and falls back to rendering the hub screen directly into the app container so
   the button is never a dead link — even if the router somehow breaks. */
function openUpgradeHub() {
  try {
    if (typeof navigate === 'function' && ROUTES.upgrades) { navigate('upgrades'); return; }
  } catch (e) { /* fall through to a direct render */ }
  try {
    currentRoute = { name: 'upgrades' };
    clear(APP);
    APP.appendChild(ROUTES.upgrades
      ? ROUTES.upgrades(currentRoute)
      : el('div', { class: 'screen', text: 'Upgrade Hub is temporarily unavailable.' }));
    if (typeof updateNav === 'function') updateNav();
    window.scrollTo({ top: 0 });
  } catch (e2) { /* nothing more we can do */ }
}

/* Persistent on-screen chrome that lives OUTSIDE #app (which render() wipes on
   every navigation): an always-visible floating Upgrade Hub button. */
function mountPersistentChrome() {
  if (!document.getElementById('upgrade-fab')) {
    const fab = document.createElement('button');
    fab.id = 'upgrade-fab';
    fab.type = 'button';
    fab.setAttribute('aria-label', 'Open Upgrade Hub');
    fab.textContent = '⚡ Upgrade Hub';
    fab.addEventListener('click', openUpgradeHub);
    document.body.appendChild(fab);
  }
}

/* Service worker policy:
     - LOCAL DEVELOPMENT (localhost / 127.0.0.1 / ::1 / file): the worker is
       NEVER registered. Any previously-installed worker is unregistered and its
       sat-quest-* caches are deleted, so local edits are never hidden behind a
       stale cache-first worker (the PWA double-reload trap that blocked us).
     - PRODUCTION / DEPLOYED (any real hostname): a normal offline-capable PWA
       worker is registered as usual. */
function setupServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  const host = location.hostname;
  const isLocalDev = host === 'localhost' || host === '127.0.0.1' || host === '[::1]' || host === '';
  if (isLocalDev) {
    // Local dev: unregister everything and never register.
    navigator.serviceWorker.getRegistrations()
      .then(regs => regs.forEach(r => r.unregister())).catch(() => {});
    if (window.caches && caches.keys) {
      caches.keys().then(keys => keys.forEach(k => { if (/^sat-quest-/.test(k)) caches.delete(k); })).catch(() => {});
    }
    return;
  }
  navigator.serviceWorker.register('./service-worker.js').catch(() => {});
}

/* ---------------- Shared chrome ---------------- */
function screen(title, subtitle, bodyNodes, opts = {}) {
  const wrap = el('div', { class: 'screen' });
  const head = el('header', { class: 'screen-head' });
  if (opts.back) head.appendChild(el('button', {
    class: 'icon-btn back', 'aria-label': 'Go back', text: '‹',
    onclick: () => navigate(opts.back.route, opts.back.params || {}),
  }));
  head.appendChild(el('div', { class: 'screen-titles' }, [
    el('h1', { class: 'screen-title', text: title }),
    subtitle ? el('p', { class: 'screen-sub', text: subtitle }) : null,
  ]));
  if (opts.right) head.appendChild(opts.right);
  wrap.appendChild(head);
  wrap.appendChild(el('main', { class: 'screen-body' }, bodyNodes));
  return wrap;
}

function statChip(icon, label, value) {
  return el('div', { class: 'stat-chip' }, [
    el('span', { class: 'stat-icon', text: icon }),
    el('div', {}, [
      el('div', { class: 'stat-value', text: String(value) }),
      el('div', { class: 'stat-label', text: label }),
    ]),
  ]);
}

/* ---------------- Bottom navigation ---------------- */
const NAV_ITEMS = [
  { name: 'home', icon: '🏰', label: 'Home' },
  { name: 'map', icon: '🗺️', label: 'Map' },
  { name: 'upgrades', icon: '⚡', label: 'Upgrades' },
  { name: 'skills', icon: '🌳', label: 'Skills' },
  { name: 'mistakes', icon: '📖', label: 'Mistakes' },
  { name: 'profile', icon: '🧙', label: 'Hero' },
];
function buildNav() {
  const nav = document.getElementById('nav');
  clear(nav);
  for (const item of NAV_ITEMS) nav.appendChild(el('button', {
    class: 'nav-item', dataset: { route: item.name }, onclick: () => navigate(item.name),
  }, [el('span', { class: 'nav-icon', text: item.icon }), el('span', { class: 'nav-label', text: item.label })]));
}
function updateNav() {
  const nav = document.getElementById('nav');
  const map = { map: 'map', section: 'map', region: 'map', level: 'map', practice: 'map', boss: 'map', result: 'map', exam: 'map',
    profile: 'profile', settings: 'profile', resources: 'profile', weekly: 'profile',
    tower: 'home', review: 'skills' };
  const active = map[currentRoute.name] || currentRoute.name;
  nav.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.route === active));
  nav.style.display = currentRoute.name === 'onboarding' ? 'none' : '';
}

/* ================================================================
   ONBOARDING
   ================================================================ */
route('onboarding', () => {
  const wrap = el('div', { class: 'screen onboarding' });
  const step = el('div', { class: 'onb-body' });
  let name = STATE.profile.name || '', heroClass = STATE.profile.heroClass || 'sage', goalScore = '', goalDate = '';

  function renderStep1() {
    clear(step);
    step.appendChild(el('div', { class: 'onb-hero' }, [
      el('div', { class: 'onb-crest', text: '⚔️' }),
      el('h1', { class: 'display-title', text: 'SAT Quest' }),
      el('p', { class: 'onb-tag', text: 'Turn SAT prep into an adventure across 8 regions, 80 levels, and 11 bosses — while training the skills the real test rewards.' }),
      el('p', { class: 'origin-note', text: 'All questions are original SAT-style practice created for this app — not official test content.' }),
    ]));
    step.appendChild(el('label', { class: 'field-label', text: 'Hero name' }));
    step.appendChild(el('input', { class: 'text-input', type: 'text', maxlength: '20', placeholder: 'Name your hero', value: name, oninput: e => { name = e.target.value; } }));
    step.appendChild(el('label', { class: 'field-label', text: 'Choose your class' }));
    const grid = el('div', { class: 'class-grid' });
    for (const c of HERO_CLASSES) grid.appendChild(el('button', {
      class: 'class-card' + (c.id === heroClass ? ' selected' : ''),
      onclick: () => { heroClass = c.id; renderStep1(); Sound.play('click'); },
    }, [el('span', { class: 'class-icon', text: c.icon }), el('strong', { text: c.name }), el('span', { class: 'class-blurb', text: c.blurb })]));
    step.appendChild(grid);
    step.appendChild(el('button', { class: 'btn btn-primary btn-block', text: 'Continue', onclick: () => { if (!name.trim()) name = 'Challenger'; renderStep2(); } }));
  }
  function renderStep2() {
    clear(step);
    step.appendChild(el('h2', { class: 'display-title small', text: 'Set your quest goal' }));
    step.appendChild(el('p', { class: 'onb-tag', text: 'Optional — add a target score and test date, and your dashboard will track a countdown and pace you. Change or skip anytime.' }));
    step.appendChild(el('label', { class: 'field-label', text: 'Target score (400–1600)' }));
    step.appendChild(el('input', { class: 'text-input', type: 'number', min: '400', max: '1600', placeholder: 'e.g. 1400', oninput: e => { goalScore = e.target.value; } }));
    step.appendChild(el('label', { class: 'field-label', text: 'Test date' }));
    step.appendChild(el('input', { class: 'text-input', type: 'date', oninput: e => { goalDate = e.target.value; } }));
    step.appendChild(el('div', { class: 'btn-row' }, [
      el('button', { class: 'btn btn-ghost', text: 'Skip', onclick: finish }),
      el('button', { class: 'btn btn-primary', text: 'Begin the quest', onclick: finish }),
    ]));
  }
  function finish() {
    Object.assign(STATE.profile, {
      name: name.trim() || 'Challenger', heroClass, onboarded: true,
      goalScore: goalScore ? Math.max(400, Math.min(1600, parseInt(goalScore, 10))) : null,
      goalDate: goalDate || null,
    });
    saveState(); Sound.play('unlock'); navigate('home');
  }
  renderStep1();
  wrap.appendChild(step);
  return wrap;
});

/* ================================================================
   HOME DASHBOARD
   ================================================================ */
route('home', () => {
  const gained = claimFinishedQuests();
  if (gained > 0) toast(`Daily quest complete! +${gained} XP`, '📜');

  const p = STATE.profile;
  const cls = HERO_CLASSES.find(c => c.id === p.heroClass) || HERO_CLASSES[3];
  const streak = effectiveStreak();

  const headerRight = el('div', { class: 'head-actions' }, [
    el('button', { class: 'icon-btn small-toggle', title: 'Study/Game mode', text: STATE.settings.mode === 'study' ? '📓' : '🎮',
      onclick: (e) => { STATE.settings.mode = STATE.settings.mode === 'study' ? 'game' : 'study'; saveState(); e.currentTarget.textContent = STATE.settings.mode === 'study' ? '📓' : '🎮'; toast(STATE.settings.mode === 'study' ? 'Serious study mode: fewer animations.' : 'Game mode: full RPG visuals.', STATE.settings.mode === 'study' ? '📓' : '🎮'); } }),
    el('button', { class: 'icon-btn', 'aria-label': 'Toggle sound', text: STATE.settings.sound ? '🔊' : '🔇',
      onclick: (e) => { STATE.settings.sound = !STATE.settings.sound; saveState(); e.currentTarget.textContent = STATE.settings.sound ? '🔊' : '🔇'; Sound.play('click'); } }),
  ]);

  const body = [];
  body.push(el('section', { class: 'hero-banner card' }, [
    el('div', { class: 'hero-avatar', text: cls.icon }),
    el('div', { class: 'hero-info' }, [
      el('div', { class: 'hero-name', text: p.name }),
      el('div', { class: 'hero-rank', text: `${rankName()} · ${cls.name}` }),
      el('div', { class: 'xp-row' }, [el('span', { class: 'lvl-badge', text: `Lv ${STATE.playerLevel}` }), progressBar(xpIntoLevel() / xpToNextLevel(), 'xp-bar')]),
      el('div', { class: 'xp-caption', text: `${xpIntoLevel()} / ${xpToNextLevel()} XP to Level ${STATE.playerLevel + 1}` }),
    ]),
  ]));

  body.push(el('section', { class: 'stat-row' }, [
    statChip('🔥', 'Day streak', streak),
    statChip('⭐', 'Total XP', STATE.xp),
    statChip('🎖️', 'Badges', Object.keys(STATE.badges).length),
  ]));

  // Upgrade Hub banner — kept near the top so it is visible without scrolling.
  const canBuy = anyUpgradeAffordable();
  body.push(el('button', { class: 'card upgrade-banner' + (canBuy ? ' ready' : ''), onclick: openUpgradeHub }, [
    el('span', { class: 'upgrade-banner-icon', text: '⚡' }),
    el('div', { class: 'upgrade-banner-body' }, [
      el('div', { class: 'upgrade-banner-title', text: '⚡ Upgrade Hub' }),
      el('div', { class: 'upgrade-banner-sub', text: canBuy ? 'You can afford a new upgrade — spend your points!' : 'Spend Skill Points on hints, deeper explanations, and mastery.' }),
    ]),
    el('span', { class: 'sp-chip', text: `${STATE.skillPoints || 0} SP` }),
  ]));

  if (p.goalScore || p.goalDate) body.push(goalCard());
  body.push(dailyStudyPathCard());
  body.push(dailyQuestCard());
  body.push(recommendationCard());

  body.push(el('div', { class: 'home-links' }, [
    el('button', { class: 'home-link', onclick: () => navigate('tower') }, [el('span', { text: '🗼' }), el('span', { text: 'Daily Tower' })]),
    el('button', { class: 'home-link', onclick: () => navigate('weekly') }, [el('span', { text: '📈' }), el('span', { text: 'Weekly Report' })]),
    el('button', { class: 'home-link', onclick: () => startReview('due') }, [el('span', { text: '🔁' }), el('span', { text: 'Review Dungeon' })]),
    el('button', { class: 'home-link', onclick: () => navigate('exam', { style: 'sim' }) }, [el('span', { text: '🧪' }), el('span', { text: 'Practice Test' })]),
  ]));

  body.push(el('button', { class: 'btn btn-primary btn-block big', onclick: () => navigate('map') }, [el('span', { text: '🗺️  Open the World Map' })]));
  body.push(tipCard(generalTip(), 'Tip of the moment'));

  return screen(`Welcome back, ${p.name}`, `${rankName()} of the realms`, body, { right: headerRight });
});

function goalCard() {
  const p = STATE.profile;
  const parts = [];
  if (p.goalScore) parts.push(el('span', { class: 'goal-score', text: `🎯 Goal: ${p.goalScore}` }));
  let advice = 'Set a pace and keep your streak alive.';
  if (p.goalDate) {
    const days = Math.ceil((new Date(p.goalDate) - new Date()) / 86400000);
    if (days >= 0) {
      parts.push(el('span', { class: 'goal-days', text: `⏳ ${days} day${days === 1 ? '' : 's'} left` }));
      const done = allLevels().filter(l => STATE.levelsCompleted[l.id]).length;
      const remaining = allLevels().length - done;
      if (days > 0 && remaining > 0) {
        const perWeek = Math.max(1, Math.ceil(remaining / Math.max(1, days / 7)));
        advice = `Clear about ${perWeek} level${perWeek === 1 ? '' : 's'} per week to finish all 80 before test day, then drill your weakest skills.`;
      } else if (remaining === 0) advice = 'You have cleared every level. Replay bosses and hit the Review Dungeon to stay sharp.';
    } else { parts.push(el('span', { class: 'goal-days past', text: 'Test date passed' })); advice = 'Update your goal in Settings to set your next target.'; }
  }
  return el('section', { class: 'card goal-card' }, [el('div', { class: 'goal-row' }, parts), el('p', { class: 'goal-advice', text: '💡 ' + advice })]);
}

function dailyStudyPathCard() {
  const tasks = dailyStudyPath();
  const card = el('section', { class: 'card path-card' }, [el('div', { class: 'card-head' }, [el('h2', { text: '🧭 Today’s Study Path' })])]);
  tasks.forEach((t, i) => {
    card.appendChild(el('button', { class: 'path-task', onclick: () => runPathTask(t) }, [
      el('span', { class: 'path-step', text: String(i + 1) }),
      el('span', { class: 'path-icon', text: t.icon }),
      el('div', { class: 'path-main' }, [el('div', { class: 'path-title', text: t.title }), el('div', { class: 'path-sub', text: t.sub })]),
      el('span', { class: 'rec-arrow', text: '›' }),
    ]));
  });
  return card;
}
function runPathTask(t) {
  if (t.kind === 'review') startReview('custom', t.skillIds);
  else if (t.kind === 'level') navigate('level', { levelId: t.levelId });
  else if (t.kind === 'boss') navigate('boss', { bossId: t.bossId });
  else if (t.kind === 'tower') navigate('tower');
}

function dailyQuestCard() {
  const card = el('section', { class: 'card quest-card' }, [el('div', { class: 'card-head' }, [
    el('h2', { text: '📜 Daily Quests' }),
    el('span', { class: 'pill', text: `${STATE.daily.quests.filter(q => q.done).length}/${STATE.daily.quests.length}` }),
  ])]);
  for (const q of STATE.daily.quests) {
    const ratio = q.target ? Math.min(1, q.progress / q.target) : (q.done ? 1 : 0);
    card.appendChild(el('div', { class: 'quest' + (q.done ? ' done' : '') }, [
      el('span', { class: 'quest-check', text: q.done ? '✅' : '⬜' }),
      el('div', { class: 'quest-main' }, [el('div', { class: 'quest-text', text: q.text }), q.target ? progressBar(ratio, 'quest-bar') : null]),
      el('span', { class: 'quest-xp', text: `+${q.xp}` }),
    ]));
  }
  return card;
}

function recommendationCard() {
  const rec = recommendNext();
  return el('section', { class: 'card rec-card', role: 'button', tabindex: '0',
    onclick: () => rec.action(), onkeydown: e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); rec.action(); } },
  }, [
    el('div', { class: 'rec-icon', text: rec.icon }),
    el('div', { class: 'rec-body' }, [el('div', { class: 'rec-label', text: 'Recommended next' }), el('div', { class: 'rec-title', text: rec.title }), el('div', { class: 'rec-sub', text: rec.sub })]),
    el('span', { class: 'rec-arrow', text: '›' }),
  ]);
}

function recommendNext() {
  const weak = weakestSkills(1, 3)[0];
  if (weak && weak.acc < 0.7) {
    const skill = SKILLS[weak.id];
    const region = regionById(skill.region);
    const target = region.levels.find(l => !STATE.levelsCompleted[l.id] && isLevelUnlocked(l.id)) || region.levels[0];
    return { icon: region.icon, title: `Train ${skill.name}`, sub: `Your weakest skill (${Math.round(weak.acc * 100)}%). Head to ${target.title}.`, action: () => navigate('level', { levelId: target.id }) };
  }
  const next = allLevels().find(l => !STATE.levelsCompleted[l.id] && isLevelUnlocked(l.id));
  if (next) return { icon: regionById(next.region).icon, title: next.title, sub: `${regionById(next.region).name} · ${TIER_LABEL[next.tier]}`, action: () => navigate('level', { levelId: next.id }) };
  for (const b of allBosses()) if (isBossUnlocked(b.id) && !STATE.bossesDefeated[b.id]) return { icon: b.icon, title: `Boss Fight: ${b.name}`, sub: 'Unlocked and waiting.', action: () => navigate('boss', { bossId: b.id }) };
  return { icon: '📖', title: STATE.mistakes.length ? 'Review your mistakes' : 'Climb the Daily Tower', sub: STATE.mistakes.length ? `${STATE.mistakes.length} logged to learn from.` : 'Everything cleared — keep sharp.', action: () => navigate(STATE.mistakes.length ? 'mistakes' : 'tower') };
}

/* ================================================================
   WORLD MAP  (two sections → four regions each → section champions → final)
   ================================================================ */
route('map', () => {
  const body = [];
  body.push(el('p', { class: 'map-intro', text: 'Two sections, eight regions, eighty levels. Clear a region to summon its boss; beat all four bosses in a section to face its Champion; defeat both Champions for the final trial.' }));

  // Upgrade Hub — clearly accessible from the world map too
  const canBuyMap = anyUpgradeAffordable();
  body.push(el('button', { class: 'card upgrade-banner map-upgrade' + (canBuyMap ? ' ready' : ''), onclick: openUpgradeHub }, [
    el('span', { class: 'upgrade-banner-icon', text: '⚡' }),
    el('div', { class: 'upgrade-banner-body' }, [
      el('div', { class: 'upgrade-banner-title', text: '⚡ Upgrade Hub' }),
      el('div', { class: 'upgrade-banner-sub', text: canBuyMap ? 'You can afford a new upgrade — spend your points!' : 'Spend Skill Points on hints, deeper explanations, and mastery.' }),
    ]),
    el('span', { class: 'sp-chip', text: `${STATE.skillPoints || 0} SP` }),
  ]));

  for (const sec of SECTIONS) {
    const cleared = sec.regions.filter(r => regionCleared(r)).length;
    body.push(el('div', { class: 'section-block' }, [
      el('div', { class: 'section-header ' + sec.id }, [
        el('span', { class: 'section-emblem', text: sec.icon }),
        el('div', {}, [el('h2', { class: 'section-name', text: sec.name }), el('p', { class: 'section-tag', text: `${sec.tagline} · ${cleared}/4 regions cleared` })]),
      ]),
    ]));
    const grid = el('div', { class: 'region-grid' });
    for (const rid of sec.regions) {
      const r = regionById(rid);
      const done = r.levels.filter(l => STATE.levelsCompleted[l.id]).length;
      const bossDown = STATE.bossesDefeated[r.boss.id];
      grid.appendChild(el('button', { class: 'region-card ' + sec.id, onclick: () => navigate('region', { regionId: rid }) }, [
        el('div', { class: 'region-top' }, [el('span', { class: 'region-icon', text: r.icon }), bossDown ? el('span', { class: 'region-boss-done', text: r.boss.icon + ' ✓' }) : null]),
        el('div', { class: 'region-name', text: r.name }),
        progressBar(done / r.levels.length, 'region-bar'),
        el('div', { class: 'region-meta', text: `${done}/${r.levels.length} levels` }),
      ]));
    }
    body.push(grid);

    // Section champion gate
    const champ = bossById(sec.champion);
    const ready = isBossUnlocked(champ.id), down = STATE.bossesDefeated[champ.id];
    body.push(el('button', { class: 'champion-gate ' + sec.id + (ready ? ' ready' : ' locked') + (down ? ' done' : ''),
      onclick: () => { if (ready) navigate('boss', { bossId: champ.id }); else { Sound.play('wrong'); toast('Defeat all four region bosses in this section first.', '🔒'); } },
    }, [
      el('span', { class: 'champion-icon', text: champ.icon }),
      el('div', {}, [el('div', { class: 'champion-name', text: champ.name }), el('div', { class: 'champion-sub', text: down ? 'Defeated ✅' : ready ? 'Champion unlocked — enter when ready' : `Locked — beat all 4 ${sec.name} bosses` })]),
    ]));
  }

  // Final boss
  const ready = isBossUnlocked('boss-final'), down = STATE.bossesDefeated['boss-final'];
  body.push(el('button', { class: 'final-boss-card' + (ready ? ' ready' : ' locked') + (down ? ' done' : ''),
    onclick: () => { if (ready) navigate('boss', { bossId: 'boss-final' }); else { Sound.play('wrong'); toast('Defeat both Section Champions first.', '🔒'); } },
  }, [
    el('div', { class: 'world-emblem big', text: FINAL_BOSS.icon }),
    el('div', { class: 'world-info' }, [el('h2', { class: 'world-name', text: FINAL_BOSS.name }), el('p', { class: 'world-tag', text: down ? 'Vanquished. You are the Digital SAT Champion. 🏆' : ready ? 'The final trial awaits.' : 'Locked until both Champions fall.' })]),
    el('span', { class: 'rec-arrow', text: ready ? '›' : '🔒' }),
  ]));

  // Practice & trials section: Simulation Gate + Final Exam Realm
  body.push(el('div', { class: 'section-block' }, [el('div', { class: 'section-header sim' }, [
    el('span', { class: 'section-emblem', text: '🧪' }),
    el('div', {}, [el('h2', { class: 'section-name', text: 'Practice & Trials' }), el('p', { class: 'section-tag', text: 'Serious full-length practice, adaptive and timed' })]),
  ])]));

  const simInProgress = hasExamInProgress() && STATE.examSession.style === 'sim';
  body.push(el('button', { class: 'sim-gate', onclick: () => navigate('exam', { style: 'sim' }) }, [
    el('span', { class: 'sim-gate-icon', text: '🧪' }),
    el('div', {}, [
      el('div', { class: 'champion-name', text: 'Simulation Gate' }),
      el('div', { class: 'champion-sub', text: simInProgress ? 'Resume your practice test in progress →' : 'Full Digital SAT structure: 2 R&W + 2 Math modules, timed. Unofficial estimate.' }),
    ]),
    el('span', { class: 'rec-arrow', text: '›' }),
  ]));

  const examDone = STATE.examStats && STATE.examStats.taken > 0;
  body.push(el('button', { class: 'sim-gate final-exam', onclick: () => navigate('exam', { style: 'boss' }) }, [
    el('span', { class: 'sim-gate-icon', text: '🐲' }),
    el('div', {}, [
      el('div', { class: 'champion-name', text: 'Final Exam Realm' }),
      el('div', { class: 'champion-sub', text: 'Face the full mock SAT as four module bosses with adaptive difficulty.' + (examDone ? ` Best estimate: ${STATE.examStats.bestTotal}.` : '') }),
    ]),
    el('span', { class: 'rec-arrow', text: '›' }),
  ]));

  return screen('World Map', 'Eight regions await', body);
});

/* ================================================================
   REGION  (level path + domain boss)
   ================================================================ */
route('region', ({ regionId }) => {
  const r = regionById(regionId);
  const body = [];
  body.push(el('div', { class: 'domain-head' }, [el('span', { class: 'domain-icon', text: r.icon }), el('h2', { class: 'domain-name', text: r.realm })]));

  const path = el('div', { class: 'level-path' });
  r.levels.forEach((lv, i) => {
    const done = STATE.levelsCompleted[lv.id];
    const unlocked = isLevelUnlocked(lv.id);
    path.appendChild(el('button', {
      class: 'level-node ' + (done ? 'done' : unlocked ? 'open' : 'locked') + (i % 2 ? ' right' : ' left') + (lv.trial ? ' trial' : ''),
      onclick: () => { if (unlocked || done) navigate('level', { levelId: lv.id }); else { Sound.play('wrong'); toast('Complete the previous level to unlock this one.', '🔒'); } },
    }, [
      el('span', { class: 'node-orb', text: done ? '✓' : unlocked ? (lv.trial ? '★' : lv.num) : '🔒' }),
      el('span', { class: 'node-title', text: lv.title }),
      el('span', { class: 'node-tier', text: lv.trial ? 'Trial' : TIER_LABEL[lv.tier] }),
      done ? el('span', { class: 'node-stars', text: '★'.repeat(done.stars) + '☆'.repeat(3 - done.stars) }) : null,
    ]));
  });
  body.push(path);

  const ready = isBossUnlocked(r.boss.id), down = STATE.bossesDefeated[r.boss.id];
  const remaining = r.levels.length - r.levels.filter(l => STATE.levelsCompleted[l.id]).length;
  body.push(el('button', { class: 'boss-gate' + (ready ? ' ready' : ' locked') + (down ? ' done' : ''),
    onclick: () => { if (ready) navigate('boss', { bossId: r.boss.id }); else { Sound.play('wrong'); toast('Clear all 10 levels to unlock the boss.', '🔒'); } },
  }, [
    el('span', { class: 'boss-gate-icon', text: r.boss.icon }),
    el('div', {}, [el('div', { class: 'boss-gate-name', text: r.boss.name }), el('div', { class: 'boss-gate-sub', text: down ? 'Defeated ✅' : ready ? 'Boss unlocked — enter when ready' : `Locked — ${remaining} level${remaining === 1 ? '' : 's'} remain` })]),
  ]));

  return screen(r.name, r.tagline, body, { back: { route: 'map' } });
});

/* ================================================================
   LEVEL BRIEFING
   ================================================================ */
route('level', ({ levelId }) => {
  const lv = levelById(levelId);
  const r = regionById(lv.region);
  const done = STATE.levelsCompleted[levelId];
  const skills = lv.skills.map(id => SKILLS[id].name);
  const tt = TIME_TARGETS[lv.section][lv.tier];

  const body = [
    el('div', { class: 'brief-card card' }, [
      el('div', { class: 'brief-icon', text: r.icon }),
      el('div', { class: 'brief-badges' }, [
        el('span', { class: 'pill', text: r.name }),
        el('span', { class: 'pill difficulty-' + lv.tier, text: lv.trial ? 'Trial · Hard' : TIER_LABEL[lv.tier] }),
        el('span', { class: 'pill', text: `${lv.questionCount} questions` }),
        el('span', { class: 'pill', text: `~${tt}s each` }),
      ]),
      el('p', { class: 'brief-mission', text: lv.mission }),
      el('div', { class: 'brief-skills' }, [el('span', { class: 'field-label', text: 'Skills trained' }), el('p', { text: skills.join(' · ') })]),
      el('p', { class: 'brief-pass', text: `Pass by answering at least ${Math.ceil(lv.questionCount * PASS_RATIO)} of ${lv.questionCount} correctly. Unlimited retries — this is about learning.` }),
      el('p', { class: 'origin-note', text: 'Original SAT-style practice · aligned to official SAT skills, not copied from any official test.' }),
      done ? el('div', { class: 'brief-best', text: `Best: ${Math.round(done.best * 100)}% · ${'★'.repeat(done.stars)}` }) : null,
    ]),
    tipCard(tipForSkill(lv.skills[0]), 'Before you begin'),
    el('button', { class: 'btn btn-primary btn-block big', text: done ? '↻ Replay level' : '▶ Start level', onclick: () => startLevel(levelId) }),
  ];
  return screen(lv.title, 'Level briefing', body, { back: { route: 'region', params: { regionId: lv.region } } });
});

/* ================================================================
   PRACTICE LEVEL
   ================================================================ */
let SESSION = null;
function startLevel(levelId) {
  const lv = levelById(levelId);
  SESSION = { type: 'level', levelId, section: lv.section, questions: buildLevelQuiz(levelId), idx: 0, correct: 0, answers: [] };
  navigate('practice');
}

route('practice', () => {
  const s = SESSION;
  const q = s.questions[s.idx];
  const total = s.questions.length;
  const body = [];
  body.push(el('div', { class: 'q-progress' }, [progressBar(s.idx / total, 'q-bar'), el('span', { class: 'q-count', text: `${s.idx + 1} / ${total}` })]));
  body.push(questionCard(q, s, () => advancePractice(s), { showTimer: STATE.settings.mode === 'study' }));
  return screen(levelById(s.levelId).title, regionById(levelById(s.levelId).region).name, body, { back: { route: 'level', params: { levelId: s.levelId } } });
});

function advancePractice(s) {
  Sound.play('click');
  s.idx += 1;
  if (s.idx >= s.questions.length) finishLevel(s);
  else render();
}

/* Shared question renderer. onNext advances after feedback. */
function questionCard(q, session, onNext, opts = {}) {
  const card = el('section', { class: 'card q-card' });
  const isGrid = q.type === 'grid';
  card.appendChild(el('div', { class: 'q-meta' }, [
    el('span', { class: 'pill subtle', text: SKILLS[q.skill] ? SKILLS[q.skill].name : q.skill }),
    el('span', { class: 'pill difficulty-' + ({ Easy: 1, Medium: 2, Hard: 3 }[q.difficulty] || 2), text: q.difficulty }),
    el('span', { class: 'pill subtle', text: `~${q.timeTarget || 60}s` }),
    isGrid ? el('span', { class: 'pill spr', text: 'Grid-in' }) : null,
    el('span', { class: 'origin-tag', text: isGrid ? 'Student-Produced Response · Original' : (q.origin === 'generated' ? 'Original · generated' : 'Original · authored') }),
  ]));

  // optional live timer (study mode), extended by the Time Control upgrade
  let liveTimer = null, startTime = Date.now();
  const target = (q.timeTarget || 60) + timeBonusSeconds();
  if (opts.showTimer) {
    const bar = el('div', { class: 'q-timer' }, [el('div', { class: 'q-timer-fill' })]);
    card.appendChild(bar);
    const fill = bar.querySelector('.q-timer-fill');
    liveTimer = setInterval(() => {
      const frac = Math.max(0, 1 - (Date.now() - startTime) / (target * 1000));
      fill.style.width = frac * 100 + '%';
      if (frac < 0.25) fill.classList.add('danger');
      if (frac <= 0) { clearInterval(liveTimer); liveTimer = null; }
    }, 120);
  }

  // visual (SVG) with an accessible text description
  if (q.visual) {
    card.appendChild(el('figure', { class: 'q-visual', html: q.visual.html }));
    card.appendChild(el('details', { class: 'q-visual-alt' }, [el('summary', { text: 'Image description' }), el('p', { text: q.visual.alt })]));
  }

  const qt = el('div', { class: 'q-text' });
  q.text.split('\n').forEach(line => { if (line.trim() === '') qt.appendChild(el('div', { class: 'q-spacer' })); else qt.appendChild(el('p', { text: line })); });
  card.appendChild(qt);

  // Hint System upgrade: reveal a hint before answering
  if (hintUnlocked() && (q.hint || q.tip)) {
    const box = el('div', { class: 'hint-box', style: 'display:none' });
    const btn = el('button', { class: 'btn btn-ghost small hint-btn', text: '💡 Reveal hint' });
    btn.addEventListener('click', () => { box.textContent = (isGrid && hintCoversGrid() && q.steps) ? (q.hint + ' First step: ' + q.steps[0]) : (q.hint || q.tip); box.style.display = ''; btn.disabled = true; Sound.play('click'); });
    card.appendChild(btn); card.appendChild(box);
  }

  let locked = false;
  const finish = (chosen, correct) => {
    locked = true;
    if (liveTimer) { clearInterval(liveTimer); liveTimer = null; }
    const elapsedMs = Date.now() - startTime;
    handleAnswer(q, chosen, correct, session, elapsedMs);
    Sound.play(correct ? 'correct' : 'wrong');
    if (opts.onAnswered) opts.onAnswered(correct, elapsedMs);
    card.appendChild(feedbackBlock(q, chosen, correct, onNext, opts, session));
    if (!motionOff() && !correct) { card.classList.add('shake'); setTimeout(() => card.classList.remove('shake'), 400); }
  };

  if (isGrid) {
    const input = el('input', { class: 'grid-input', type: 'text', inputmode: 'decimal', autocomplete: 'off',
      placeholder: 'e.g. 12, 3.5, or 3/4', 'aria-label': 'Your answer' });
    const submit = el('button', { class: 'btn btn-primary grid-submit', text: 'Submit answer' });
    const doSubmit = () => {
      if (locked) return;
      if (String(input.value).trim() === '') { input.focus(); input.classList.add('shake'); setTimeout(() => input.classList.remove('shake'), 400); return; }
      const correct = gradeGridAnswer(input.value, q);
      input.disabled = true; submit.disabled = true;
      input.classList.add(correct ? 'correct' : 'wrong');
      finish(String(input.value).trim(), correct);
    };
    submit.addEventListener('click', doSubmit);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') doSubmit(); });
    card.appendChild(el('div', { class: 'grid-row' }, [input, submit]));
    card.appendChild(el('p', { class: 'grid-hint', text: 'Type your own answer — no choices. Enter an integer, decimal, or fraction (e.g. 12, 3.5, or 3/4). Equivalent forms are accepted; round long decimals.' }));
  } else {
    const choicesWrap = el('div', { class: 'choices' });
    q.choices.forEach(ch => {
      const btn = el('button', { class: 'choice', dataset: { letter: ch.letter } }, [
        el('span', { class: 'choice-letter', text: ch.letter }),
        el('span', { class: 'choice-text', text: ch.text }),
      ]);
      btn.addEventListener('click', () => {
        if (locked) return;
        const correct = ch.letter === q.answer;
        choicesWrap.querySelectorAll('.choice').forEach(b => {
          b.classList.add('revealed');
          if (b.dataset.letter === q.answer) b.classList.add('correct');
          if (b === btn && !correct) b.classList.add('wrong');
          b.disabled = true;
        });
        finish(ch.letter, correct);
      });
      choicesWrap.appendChild(btn);
    });
    card.appendChild(choicesWrap);
  }
  return card;
}

function feedbackBlock(q, chosen, correct, onNext, opts, session) {
  const isGrid = q.type === 'grid';
  const block = el('div', { class: 'feedback ' + (correct ? 'ok' : 'no') });
  const answerText = isGrid ? String(q.answer) : q.answer;
  block.appendChild(el('div', { class: 'feedback-head', text: correct ? '✓ Correct!' : `✗ Not quite — the answer is ${answerText}.` }));
  block.appendChild(el('div', { class: 'feedback-exp' }, [el('strong', { text: 'Why it’s right. ' }), document.createTextNode(q.explanation)]));

  // Explanation Boost upgrade: step-by-step worked solution (math)
  if (explanationBoost() >= 1 && q.steps && q.steps.length) {
    block.appendChild(el('div', { class: 'steps-box' }, [
      el('div', { class: 'steps-head', text: '📖 Step by step' }),
      el('ol', { class: 'steps-list' }, q.steps.map(st => el('li', { text: st }))),
    ]));
  }

  if (!isGrid && !correct && q.whyWrong && q.whyWrong[chosen]) {
    block.appendChild(el('div', { class: 'feedback-whywrong' }, [el('strong', { text: `Why ${chosen} is wrong. ` }), document.createTextNode(q.whyWrong[chosen])]));
  }
  if (!isGrid && q.whyWrong && Object.keys(q.whyWrong).length) {
    const det = el('details', { class: 'whywrong-all' }, [el('summary', { text: 'Why the other choices are wrong' })]);
    if (explanationBoost() >= 1) det.open = true; // Explanation Boost auto-expands
    Object.entries(q.whyWrong).forEach(([lt, why]) => { if (lt !== chosen || correct) det.appendChild(el('p', {}, [el('strong', { text: lt + '. ' }), document.createTextNode(why)])); });
    block.appendChild(det);
  }
  if (isGrid && q.accept && q.accept.length > 1) {
    block.appendChild(el('p', { class: 'accept-note', text: `Accepted forms: ${q.accept.join(', ')}` }));
  }
  if (explanationBoost() >= 2) {
    block.appendChild(el('p', { class: 'concept-note', text: `🔑 Key skill: ${SKILLS[q.skill] ? SKILLS[q.skill].name : q.skill}.` }));
  }
  if (q.tip) block.appendChild(tipCard(q.tip, 'Strategy'));

  if (!correct && session && session.answers && session.answers.length) {
    const last = session.answers[session.answers.length - 1];
    if (last.mistakeId) block.appendChild(reflectionPrompt(last.mistakeId));
  }
  block.appendChild(el('button', { class: 'btn btn-primary btn-block', text: opts.nextLabel || 'Next →', onclick: onNext }));
  return block;
}

function reflectionPrompt(mistakeId) {
  const wrap = el('div', { class: 'reflection' }, [el('div', { class: 'reflection-q', text: 'Why did you miss it? (tap one — it sharpens your mistake log)' })]);
  const btns = el('div', { class: 'reflection-btns' });
  for (const [key, def] of Object.entries(MISTAKE_CATEGORIES)) {
    btns.appendChild(el('button', { class: 'reflect-chip', onclick: (e) => {
      reflectMistake(mistakeId, key);
      btns.querySelectorAll('.reflect-chip').forEach(b => b.classList.remove('picked'));
      e.currentTarget.classList.add('picked');
      Sound.play('click');
      toast(`Tagged: ${def.label}. ${def.advice}`, def.icon);
    } }, [el('span', { text: def.icon }), el('span', { text: def.label })]));
  }
  wrap.appendChild(btns);
  return wrap;
}

function handleAnswer(q, chosen, correct, session, elapsedMs) {
  recordAnswer(q.skill, correct, elapsedMs);
  session.correct += correct ? 1 : 0;
  const rec = { q, chosen, correct, elapsedMs, mistakeId: null };
  if (correct) {
    questProgress('correct', { section: SKILLS[q.skill] ? SKILLS[q.skill].section : null });
  } else {
    const id = 'm' + Date.now() + Math.floor(Math.random() * 1000);
    rec.mistakeId = id;
    const isGrid = q.type === 'grid';
    STATE.mistakes.unshift({ id, category: null, reflected: false,
      question: q.text, chosen, chosenText: isGrid ? '' : (q.choices.find(c => c.letter === chosen) || {}).text || '',
      correct: isGrid ? String(q.answer) : q.answer, correctText: isGrid ? '' : (q.choices.find(c => c.letter === q.answer) || {}).text || '',
      explanation: q.explanation, whyWrong: (!isGrid && q.whyWrong) ? q.whyWrong[chosen] : '', tip: q.tip,
      skill: q.skill, skillName: SKILLS[q.skill] ? SKILLS[q.skill].name : q.skill, when: Date.now() });
    if (STATE.mistakes.length > 200) STATE.mistakes.length = 200;
  }
  session.answers.push(rec);
  saveState();
}

function finishLevel(s) {
  const ratio = s.correct / s.questions.length;
  const passed = ratio >= PASS_RATIO;
  let xp = 0, levelUps = [];
  if (passed) {
    const lv = levelById(s.levelId);
    const base = 60, perCorrect = 12, tierBonus = lv.tier * 15 + (lv.trial ? 40 : 0);
    xp = base + s.correct * perCorrect + tierBonus;
    if (STATE.levelsCompleted[s.levelId]) xp = Math.round(xp * 0.5);
    xp = Math.round(xp * regionXpMultiplier(lv.region)); // Skill Mastery upgrade bonus
    completeLevel(s.levelId, ratio, xp);
    levelUps = addXP(xp);
    saveState();
  }
  currentRoute = { name: 'result', kind: 'level', levelId: s.levelId, ratio, passed, xp, correct: s.correct, total: s.questions.length, levelUps, answers: s.answers };
  render(); updateNav();
  if (passed) { Sound.play('victory'); celebrate(); } else Sound.play('defeat');
  if (levelUps.length) setTimeout(() => { Sound.play('levelup'); toast(`Level up! You reached Level ${levelUps[levelUps.length - 1]} (${rankName()})`, '⭐'); }, 600);
}

/* ================================================================
   RESULT (level victory / defeat)
   ================================================================ */
route('result', (r) => {
  if (r.kind === 'boss') return bossResultScreen(r);
  if (r.kind === 'tower') return towerResultScreen(r);
  if (r.kind === 'review') return reviewResultScreen(r);
  const lv = levelById(r.levelId);
  const nextLevel = nextLevelAfter(r.levelId);
  const body = [];
  body.push(el('div', { class: 'result-hero ' + (r.passed ? 'win' : 'lose') }, [
    el('div', { class: 'result-emblem', text: r.passed ? '🏆' : '💫' }),
    el('h1', { class: 'display-title', text: r.passed ? 'Level Cleared!' : 'So Close!' }),
    el('p', { class: 'result-score', text: `${r.correct} / ${r.total} correct · ${Math.round(r.ratio * 100)}%` }),
    r.passed ? el('div', { class: 'result-xp', text: `+${r.xp} XP` }) : el('p', { class: 'result-note', text: `You need ${Math.ceil(r.total * PASS_RATIO)} correct to pass. Review below and try again — retries are free.` }),
  ]));

  body.push(recapCard(r.answers));
  body.push(adviceCard(r.answers));

  const actions = el('div', { class: 'btn-row stacked' });
  if (r.passed && nextLevel && isLevelUnlocked(nextLevel.id)) actions.appendChild(el('button', { class: 'btn btn-primary btn-block big', text: `Next Level: ${nextLevel.title} →`, onclick: () => navigate('level', { levelId: nextLevel.id }) }));
  else if (r.passed && !nextLevel) {
    const rg = regionById(lv.region);
    if (isBossUnlocked(rg.boss.id) && !STATE.bossesDefeated[rg.boss.id]) actions.appendChild(el('button', { class: 'btn btn-boss btn-block big', text: `⚔️ Boss unlocked: ${rg.boss.name}`, onclick: () => navigate('boss', { bossId: rg.boss.id }) }));
  }
  actions.appendChild(el('button', { class: 'btn ' + (r.passed ? 'btn-ghost' : 'btn-primary big') + ' btn-block', text: r.passed ? '↻ Replay level' : '↻ Retry level', onclick: () => startLevel(r.levelId) }));
  actions.appendChild(el('button', { class: 'btn btn-ghost btn-block', text: '🗺️ Back to region', onclick: () => navigate('region', { regionId: lv.region }) }));
  body.push(actions);
  return screen(lv.title, r.passed ? 'Victory' : 'Try again', body);
});

function recapCard(answers) {
  const recap = el('section', { class: 'card recap' }, [el('h2', { text: 'Question recap' })]);
  answers.forEach((a, i) => recap.appendChild(el('div', { class: 'recap-row ' + (a.correct ? 'ok' : 'no') }, [
    el('span', { class: 'recap-num', text: String(i + 1) }),
    el('span', { class: 'recap-mark', text: a.correct ? '✓' : '✗' }),
    el('span', { class: 'recap-skill', text: SKILLS[a.q.skill] ? SKILLS[a.q.skill].name : a.q.skill }),
    el('span', { class: 'recap-time', text: a.elapsedMs ? `${Math.round(a.elapsedMs / 1000)}s` : '' }),
  ])));
  return recap;
}

function nextLevelAfter(levelId) {
  const lv = levelById(levelId);
  const r = regionById(lv.region);
  return r.levels[lv.num] || null; // lv.num is 1-based; index lv.num is the next
}

function adviceCard(answers) {
  const wrong = answers.filter(a => !a.correct);
  if (wrong.length === 0) return el('section', { class: 'card advice-card good' }, [
    el('h2', { text: '🌟 Flawless run' }),
    el('p', { text: 'A perfect score. To keep improving, move up a difficulty tier or take on a boss fight to test these skills under pressure.' }),
  ]);
  const tally = {}; wrong.forEach(a => { tally[a.q.skill] = (tally[a.q.skill] || 0) + 1; });
  const worst = Object.entries(tally).sort((a, b) => b[1] - a[1])[0];
  const skillName = SKILLS[worst[0]] ? SKILLS[worst[0]].name : worst[0];
  return el('section', { class: 'card advice-card' }, [
    el('h2', { text: '🎯 Where to focus' }),
    el('p', { text: `You missed the most questions in ${skillName}. That is the skill to drill next.` }),
    el('button', { class: 'btn btn-ghost small', text: `🔁 Quick review: ${skillName}`, onclick: () => startReview('custom', [worst[0]]) }),
    tipCard(tipForSkill(worst[0]), `${skillName} strategy`),
  ]);
}

/* ================================================================
   BOSS FIGHT
   ================================================================ */
route('boss', ({ bossId }) => {
  const boss = bossById(bossId);
  if (!STATE._bossSession || STATE._bossSession.bossId !== bossId) return bossIntroScreen(boss);
  return bossFightScreen(boss);
});

function bossBackRoute(boss) {
  if (boss.id === 'boss-final' || SECTION_BOSSES.some(b => b.id === boss.id)) return { route: 'map' };
  const region = REGIONS.find(r => r.boss.id === boss.id);
  return { route: 'region', params: { regionId: region.id } };
}

function bossIntroScreen(boss) {
  const back = bossBackRoute(boss);
  const body = [
    el('div', { class: 'boss-intro card' }, [
      el('div', { class: 'boss-portrait', text: boss.icon }),
      el('h1', { class: 'display-title', text: boss.name }),
      el('p', { class: 'boss-intro-text', text: boss.intro }),
      el('div', { class: 'boss-rules' }, [
        el('div', { class: 'rule', text: `❤️ ${boss.questions} questions · ${boss.timePerQ}s each` }),
        el('div', { class: 'rule', text: '⚔️ Correct answers damage the boss — faster answers hit harder' }),
        el('div', { class: 'rule', text: '🛡️ Wrong answers or timeouts drain your focus' }),
        el('div', { class: 'rule', text: '🏁 Reduce the boss to 0 HP before your focus runs out' }),
      ]),
      tipCard('Bosses mix skills and difficulties. Manage the clock: if a question stumps you, make your best elimination guess and move on — a timeout hurts more than a fast guess.', 'Boss strategy'),
    ]),
    el('button', { class: 'btn btn-boss btn-block big', text: '⚔️ Begin the fight', onclick: () => startBoss(boss.id) }),
    el('button', { class: 'btn btn-ghost btn-block', text: 'Retreat', onclick: () => navigate(back.route, back.params || {}) }),
  ];
  return screen('Boss Fight', 'Prepare yourself', body, { back });
}

function startBoss(bossId) {
  const boss = bossById(bossId);
  STATE._bossSession = { bossId, questions: buildBossQuiz(bossId), idx: 0, correct: 0, answers: [],
    bossHP: boss.hp, bossMaxHP: boss.hp, focus: 100, focusMax: 100, timePerQ: boss.timePerQ + timeBonusSeconds(),
    dmgPerHit: Math.ceil(boss.hp / boss.questions) + 4 };
  navigate('boss', { bossId });
}

let bossTimer = null;
function bossFightScreen(boss) {
  const s = STATE._bossSession;
  clearInterval(bossTimer);
  const q = s.questions[s.idx];
  const wrap = el('div', { class: 'screen boss-screen' });

  const hud = el('div', { class: 'boss-hud' }, [
    el('div', { class: 'hp-block boss' }, [
      el('div', { class: 'hp-label' }, [el('span', { text: `${boss.icon} ${boss.name}` }), el('span', { class: 'hp-num', text: `${Math.max(0, Math.round(s.bossHP))} HP` })]),
      hpBar(s.bossHP / s.bossMaxHP, 'boss-hp'),
    ]),
    el('div', { class: 'hp-block you' }, [
      el('div', { class: 'hp-label' }, [el('span', { text: '🛡️ Your Focus' }), el('span', { class: 'hp-num', text: `${Math.max(0, Math.round(s.focus))}` })]),
      hpBar(s.focus / s.focusMax, 'focus-hp'),
    ]),
  ]);
  wrap.appendChild(hud);

  const timerBar = el('div', { class: 'timer-bar' }, [el('div', { class: 'timer-fill' })]);
  wrap.appendChild(el('div', { class: 'boss-timer-wrap' }, [el('span', { class: 'timer-count', text: `${s.timePerQ}s` }), timerBar]));

  const body = el('main', { class: 'screen-body' });
  body.appendChild(el('div', { class: 'q-progress' }, [progressBar(s.idx / s.questions.length, 'q-bar'), el('span', { class: 'q-count', text: `${s.idx + 1} / ${s.questions.length}` })]));

  let answered = false, timeLeft = s.timePerQ;
  const timerCount = timerBar.parentElement.querySelector('.timer-count');
  const fill = timerBar.querySelector('.timer-fill');
  fill.style.width = '100%';
  const stop = () => { clearInterval(bossTimer); bossTimer = null; };

  const card = questionCard(q, s, () => { Sound.play('click'); s.idx += 1; if (s.bossHP <= 0 || s.focus <= 0 || s.idx >= s.questions.length) finishBoss(boss); else render(); }, {
    onAnswered: (correct) => {
      answered = true; stop();
      const speedBonus = Math.round((timeLeft / s.timePerQ) * 10);
      if (correct) { const dmg = s.dmgPerHit + speedBonus; s.bossHP = Math.max(0, s.bossHP - dmg); Sound.play('bosshit'); flashDamage(hud, `-${dmg}`, 'boss'); }
      else { s.focus = Math.max(0, s.focus - 20); Sound.play('playerhit'); flashDamage(hud, '-20', 'you'); }
      updateHUD(hud, s); saveState();
    },
  });
  body.appendChild(card);
  wrap.appendChild(body);

  bossTimer = setInterval(() => {
    if (answered) return;
    timeLeft -= 0.1;
    fill.style.width = Math.max(0, (timeLeft / s.timePerQ) * 100) + '%';
    timerCount.textContent = `${Math.max(0, Math.ceil(timeLeft))}s`;
    if (timeLeft <= 10) fill.classList.add('danger');
    if (timeLeft <= 0) {
      answered = true; stop();
      s.focus = Math.max(0, s.focus - 20);
      s.answers.push({ q, chosen: null, correct: false });
      recordAnswer(q.skill, false, s.timePerQ * 1000);
      STATE.mistakes.unshift({ id: 'm' + Date.now(), category: 'time', reflected: true, question: q.text, chosen: '(ran out of time)', chosenText: '', correct: q.answer, correctText: (q.choices.find(c => c.letter === q.answer) || {}).text || '', explanation: q.explanation, tip: q.tip, skill: q.skill, skillName: SKILLS[q.skill] ? SKILLS[q.skill].name : q.skill, when: Date.now() });
      Sound.play('playerhit'); flashDamage(hud, '-20', 'you'); updateHUD(hud, s);
      card.querySelectorAll('.choice').forEach(b => { b.classList.add('revealed'); b.disabled = true; if (b.dataset.letter === q.answer) b.classList.add('correct'); });
      card.appendChild(el('div', { class: 'feedback no' }, [
        el('div', { class: 'feedback-head', text: `⏱ Time! The answer was ${q.answer}.` }),
        el('div', { class: 'feedback-exp' }, [el('strong', { text: 'Why it’s right. ' }), document.createTextNode(q.explanation)]),
        el('button', { class: 'btn btn-primary btn-block', text: 'Next →', onclick: () => { Sound.play('click'); s.idx += 1; if (s.focus <= 0 || s.idx >= s.questions.length) finishBoss(boss); else render(); } }),
      ]));
      saveState();
    }
  }, 100);
  return wrap;
}

function hpBar(ratio, cls) {
  const wrap = el('div', { class: `bar hp ${cls}` });
  const fill = el('div', { class: 'bar-fill' });
  fill.style.width = Math.max(0, Math.min(1, ratio)) * 100 + '%';
  wrap.appendChild(fill);
  return wrap;
}
function updateHUD(hud, s) {
  hud.querySelector('.boss-hp .bar-fill').style.width = Math.max(0, s.bossHP / s.bossMaxHP) * 100 + '%';
  hud.querySelector('.focus-hp .bar-fill').style.width = Math.max(0, s.focus / s.focusMax) * 100 + '%';
  hud.querySelector('.hp-block.boss .hp-num').textContent = `${Math.max(0, Math.round(s.bossHP))} HP`;
  hud.querySelector('.hp-block.you .hp-num').textContent = `${Math.max(0, Math.round(s.focus))}`;
}
function flashDamage(hud, text, who) {
  if (motionOff()) return;
  const target = hud.querySelector(who === 'boss' ? '.hp-block.boss' : '.hp-block.you');
  const dmg = el('span', { class: 'dmg-float ' + who, text });
  target.appendChild(dmg);
  setTimeout(() => dmg.remove(), 900);
}

function finishBoss(boss) {
  clearInterval(bossTimer); bossTimer = null;
  const s = STATE._bossSession;
  const won = s.bossHP <= 0;
  let xp = 0, levelUps = [];
  if (won) {
    const isChamp = SECTION_BOSSES.some(b => b.id === boss.id), isFinal = boss.id === 'boss-final';
    xp = 150 + s.correct * 15 + (isFinal ? 250 : isChamp ? 120 : 60);
    defeatBoss(boss.id);
    levelUps = addXP(xp);
  }
  saveState();
  currentRoute = { name: 'result', kind: 'boss', bossId: boss.id, won, xp, correct: s.correct, total: s.questions.length, levelUps, answers: s.answers };
  STATE._bossSession = null;
  render(); updateNav();
  if (won) { Sound.play('victory'); celebrate(); if (levelUps.length) setTimeout(() => { Sound.play('levelup'); toast(`Level up! Level ${levelUps[levelUps.length - 1]}`, '⭐'); }, 600); }
  else Sound.play('defeat');
}

function bossResultScreen(r) {
  const boss = bossById(r.bossId);
  const body = [];
  body.push(el('div', { class: 'result-hero ' + (r.won ? 'win boss' : 'lose') }, [
    el('div', { class: 'result-emblem', text: r.won ? boss.icon : '💀' }),
    el('h1', { class: 'display-title', text: r.won ? `${boss.name} Defeated!` : 'Defeated…' }),
    el('p', { class: 'result-score', text: `${r.correct} / ${r.total} correct` }),
    r.won ? el('div', { class: 'result-xp', text: `+${r.xp} XP` }) : el('p', { class: 'result-note', text: 'Your focus ran out. Study the weak skills below, then challenge the boss again.' }),
  ]));

  const wrong = r.answers.filter(a => !a.correct);
  const tally = {}; wrong.forEach(a => { tally[a.q.skill] = (tally[a.q.skill] || 0) + 1; });
  const ranked = Object.entries(tally).sort((a, b) => b[1] - a[1]);
  const analysis = el('section', { class: 'card advice-card' }, [el('h2', { text: '📊 Battle report' })]);
  if (ranked.length === 0) analysis.appendChild(el('p', { text: 'You did not miss a single question. Legendary.' }));
  else {
    analysis.appendChild(el('p', { text: 'Skills that cost you focus in this fight, worst first:' }));
    const ul = el('ul', { class: 'weak-list' });
    ranked.slice(0, 5).forEach(([sk, n]) => ul.appendChild(el('li', {}, [el('strong', { text: SKILLS[sk] ? SKILLS[sk].name : sk }), el('span', { text: ` — missed ${n}` })])));
    analysis.appendChild(ul);
    const worst = ranked[0][0];
    analysis.appendChild(el('button', { class: 'btn btn-ghost small', text: `🔁 Review ${SKILLS[worst] ? SKILLS[worst].name : worst}`, onclick: () => startReview('custom', ranked.slice(0, 3).map(x => x[0])) }));
    analysis.appendChild(tipCard(tipForSkill(worst), `${SKILLS[worst] ? SKILLS[worst].name : worst} strategy`));
  }
  body.push(analysis);

  const actions = el('div', { class: 'btn-row stacked' });
  if (r.won && boss.id !== 'boss-final') {
    const nextBoss = allBosses().find(b => isBossUnlocked(b.id) && !STATE.bossesDefeated[b.id]);
    if (nextBoss) actions.appendChild(el('button', { class: 'btn btn-boss btn-block big', text: `${nextBoss.icon} Next: ${nextBoss.name}`, onclick: () => navigate('boss', { bossId: nextBoss.id }) }));
  }
  if (!r.won) actions.appendChild(el('button', { class: 'btn btn-boss btn-block big', text: '↻ Rematch', onclick: () => startBoss(boss.id) }));
  actions.appendChild(el('button', { class: 'btn btn-ghost btn-block', text: '🗺️ Back to map', onclick: () => navigate('map') }));
  actions.appendChild(el('button', { class: 'btn btn-ghost btn-block', text: '🌳 See full weakness map', onclick: () => navigate('skills') }));
  body.push(actions);
  return screen(boss.name, r.won ? 'Victory' : 'Defeat', body);
}

/* ================================================================
   REVIEW DUNGEON
   ================================================================ */
function startReview(mode, skillIds) {
  let skills = skillIds || [];
  if (mode === 'due') skills = spacedReviewSkills(6).map(s => s.id);
  if (skills.length === 0) skills = weakestSkills(4, 1).map(s => s.id);
  if (skills.length === 0) { toast('Answer a few questions first so I know what to review.', '🔁'); navigate('map'); return; }
  SESSION = { type: 'review', skills, questions: buildReviewQuiz(skills, 6), idx: 0, correct: 0, answers: [] };
  navigate('review');
}
route('review', () => {
  const s = SESSION;
  const q = s.questions[s.idx];
  const body = [];
  body.push(el('div', { class: 'dungeon-banner' }, [el('span', { text: '🔁' }), el('span', { text: 'Review Dungeon — spaced practice of your weak skills' })]));
  body.push(el('div', { class: 'q-progress' }, [progressBar(s.idx / s.questions.length, 'q-bar'), el('span', { class: 'q-count', text: `${s.idx + 1} / ${s.questions.length}` })]));
  body.push(questionCard(q, s, () => { Sound.play('click'); s.idx += 1; if (s.idx >= s.questions.length) finishReview(s); else render(); }, { showTimer: STATE.settings.mode === 'study' }));
  return screen('Review Dungeon', 'Spaced review', body, { back: { route: 'skills' } });
});
function finishReview(s) {
  const xp = 20 + s.correct * 8;
  markActiveToday();
  const levelUps = addXP(xp);
  saveState();
  currentRoute = { name: 'result', kind: 'review', correct: s.correct, total: s.questions.length, xp, answers: s.answers, levelUps };
  render(); updateNav();
  Sound.play(s.correct >= s.questions.length / 2 ? 'victory' : 'defeat');
  if (levelUps.length) setTimeout(() => { Sound.play('levelup'); toast(`Level up! Level ${levelUps[levelUps.length - 1]}`, '⭐'); }, 600);
}
function reviewResultScreen(r) {
  const body = [];
  body.push(el('div', { class: 'result-hero win' }, [
    el('div', { class: 'result-emblem', text: '🔁' }),
    el('h1', { class: 'display-title', text: 'Review Complete' }),
    el('p', { class: 'result-score', text: `${r.correct} / ${r.total} correct` }),
    el('div', { class: 'result-xp', text: `+${r.xp} XP` }),
  ]));
  body.push(recapCard(r.answers));
  body.push(adviceCard(r.answers));
  body.push(el('div', { class: 'btn-row stacked' }, [
    el('button', { class: 'btn btn-primary btn-block', text: '🔁 Another review', onclick: () => startReview('due') }),
    el('button', { class: 'btn btn-ghost btn-block', text: '🌳 Weakness map', onclick: () => navigate('skills') }),
    el('button', { class: 'btn btn-ghost btn-block', text: '🏰 Home', onclick: () => navigate('home') }),
  ]));
  return screen('Review Dungeon', 'Complete', body);
}

/* ================================================================
   DAILY CHALLENGE TOWER
   ================================================================ */
route('tower', () => {
  if (STATE._towerSession) return towerPlayScreen();
  const best = STATE.tower.bestFloor;
  const body = [
    el('div', { class: 'tower-intro card' }, [
      el('div', { class: 'tower-icon', text: '🗼' }),
      el('h1', { class: 'display-title', text: 'The Daily Tower' }),
      el('p', { class: 'boss-intro-text', text: 'Climb an endless tower of mixed questions. Each floor is harder than the last. One wrong answer ends the climb — how high can you reach today?' }),
      el('div', { class: 'boss-rules' }, [
        el('div', { class: 'rule', text: '🧗 Answer correctly to rise one floor' }),
        el('div', { class: 'rule', text: '💥 One wrong answer ends the run' }),
        el('div', { class: 'rule', text: '⭐ XP scales with how high you climb' }),
        el('div', { class: 'rule', text: `🏆 Best floor so far: ${best}` }),
      ]),
      tipCard('Difficulty ramps up as you climb: floors 1–3 easy, 4–7 medium, 8+ hard. Accuracy beats speed here — there is no timer.', 'Tower strategy'),
    ]),
    el('button', { class: 'btn btn-primary btn-block big', text: '🗼 Start climbing', onclick: () => startTower() }),
    el('button', { class: 'btn btn-ghost btn-block', text: 'Back', onclick: () => navigate('home') }),
  ];
  return screen('Daily Tower', 'Endless challenge', body, { back: { route: 'home' } });
});
function startTower() { STATE._towerSession = { floor: 1, correct: 0, question: buildTowerQuestion(1) }; navigate('tower'); }
function towerPlayScreen() {
  const t = STATE._towerSession;
  const body = [];
  body.push(el('div', { class: 'tower-hud' }, [
    el('div', { class: 'tower-floor', text: `Floor ${t.floor}` }),
    el('div', { class: 'tower-best', text: `Best: ${STATE.tower.bestFloor}` }),
  ]));
  body.push(questionCard(t.question, { answers: [], correct: 0 }, () => {}, {
    onAnswered: (correct) => {
      recordAnswer(t.question.skill, correct, 0);
      if (correct) {
        t.correct += 1; t.floor += 1;
        STATE.tower.bestFloor = Math.max(STATE.tower.bestFloor, t.floor - 1);
        STATE.tower.lastPlayedDay = todayKey(); STATE.tower.todayFloor = t.floor - 1;
        questProgress('tower', { amount: t.floor - 1 });
        if (t.floor - 1 >= 10) awardBadge('tower-10');
        saveState();
        setTimeout(() => { t.question = buildTowerQuestion(t.floor); Sound.play('unlock'); render(); }, 900);
      } else {
        setTimeout(() => finishTower(), 900);
      }
    },
  }));
  return screen('Daily Tower', `Floor ${t.floor}`, body, { back: { route: 'home' } });
}
function finishTower() {
  const t = STATE._towerSession;
  const reached = t.floor - 1;
  const xp = 10 + reached * 12;
  markActiveToday();
  const levelUps = addXP(xp);
  saveState();
  currentRoute = { name: 'result', kind: 'tower', reached, best: STATE.tower.bestFloor, xp, levelUps };
  STATE._towerSession = null;
  render(); updateNav();
  Sound.play(reached >= 5 ? 'victory' : 'defeat');
  if (reached >= 5) celebrate();
  if (levelUps.length) setTimeout(() => { Sound.play('levelup'); toast(`Level up! Level ${levelUps[levelUps.length - 1]}`, '⭐'); }, 600);
}
function towerResultScreen(r) {
  const body = [
    el('div', { class: 'result-hero ' + (r.reached >= 5 ? 'win' : 'lose') }, [
      el('div', { class: 'result-emblem', text: '🗼' }),
      el('h1', { class: 'display-title', text: `Reached Floor ${r.reached}` }),
      el('p', { class: 'result-score', text: `Best floor: ${r.best}` }),
      el('div', { class: 'result-xp', text: `+${r.xp} XP` }),
    ]),
    el('div', { class: 'btn-row stacked' }, [
      el('button', { class: 'btn btn-primary btn-block big', text: '🗼 Climb again', onclick: () => startTower() }),
      el('button', { class: 'btn btn-ghost btn-block', text: '🏰 Home', onclick: () => navigate('home') }),
    ]),
  ];
  return screen('Daily Tower', 'Climb over', body);
}

/* ================================================================
   SKILL TREE / WEAKNESS MAP
   ================================================================ */
route('skills', () => {
  const body = [];
  body.push(el('p', { class: 'map-intro', text: 'Your mastery across every SAT skill. Bars fill as you answer correctly; the app steers you toward the reddest bars.' }));

  body.push(el('div', { class: 'skills-actions' }, [
    el('button', { class: 'btn btn-primary', text: '🔁 Review weak skills', onclick: () => startReview('due') }),
    el('button', { class: 'btn btn-ghost', text: '📈 Weekly report', onclick: () => navigate('weekly') }),
  ]));

  const weak = weakestSkills(3, 3);
  if (weak.length) {
    const wc = el('section', { class: 'card weakness-focus' }, [el('h2', { text: '🎯 Train these next' })]);
    weak.forEach(w => {
      const skill = SKILLS[w.id];
      wc.appendChild(el('button', { class: 'weak-target', onclick: () => startReview('custom', [w.id]) }, [
        el('span', { class: 'weak-name', text: skill.name }),
        el('span', { class: 'weak-acc', text: `${Math.round(w.acc * 100)}%` }),
        el('span', { class: 'rec-arrow', text: '›' }),
      ]));
    });
    body.push(wc);
  }

  for (const sec of SECTIONS) {
    body.push(el('h2', { class: 'section-title', text: `${sec.icon} ${sec.name}` }));
    for (const rid of sec.regions) {
      const r = regionById(rid);
      const domCard = el('section', { class: 'card skill-domain' }, [el('div', { class: 'skill-domain-head' }, [el('span', { text: r.icon }), el('strong', { text: r.name })])]);
      r.skills.forEach(sid => {
        const acc = skillAccuracy(sid), stat = STATE.skillStats[sid], avg = skillAvgTimeSec(sid);
        const cls = acc === null ? 'untried' : acc >= 0.85 ? 'strong' : acc >= 0.6 ? 'ok' : 'weak';
        domCard.appendChild(el('div', { class: 'skill-row ' + cls }, [
          el('div', { class: 'skill-row-top' }, [
            el('span', { class: 'skill-name', text: SKILLS[sid].name }),
            el('span', { class: 'skill-stat', text: acc === null ? 'Not tried' : `${Math.round(acc * 100)}% · ${stat.seen} seen${avg ? ` · ${Math.round(avg)}s avg` : ''}` }),
          ]),
          progressBar(acc === null ? 0 : acc, 'skill-bar ' + cls),
        ]));
      });
      body.push(domCard);
    }
  }
  return screen('Skill Tree', 'Your weakness map', body);
});

/* ================================================================
   WEEKLY PROGRESS SUMMARY
   ================================================================ */
route('weekly', () => {
  const w = weeklySummary();
  const body = [];
  body.push(el('section', { class: 'stat-grid' }, [
    statChip('❓', 'Answered', w.total.answered),
    statChip('✅', 'Accuracy', (w.total.answered ? Math.round(w.accuracy * 100) : 0) + '%'),
    statChip('📅', 'Active days', w.total.activeDays + '/7'),
    statChip('⭐', 'XP earned', w.total.xp),
    statChip('⏱️', 'Avg time', (w.avgTimeSec ? Math.round(w.avgTimeSec) : 0) + 's'),
    statChip('🔥', 'Streak', effectiveStreak()),
  ]));

  // 7-day bar chart of questions answered
  const maxA = Math.max(1, ...w.days.map(d => d.answered));
  const chart = el('section', { class: 'card weekly-chart' }, [el('h2', { text: 'Questions answered — last 7 days' })]);
  const bars = el('div', { class: 'week-bars' });
  w.days.forEach(d => {
    const dt = new Date(d.key + 'T00:00');
    const label = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][dt.getDay()];
    const col = el('div', { class: 'week-col' }, [
      el('div', { class: 'week-bar-track' }, [el('div', { class: 'week-bar-fill', style: `height:${(d.answered / maxA) * 100}%` })]),
      el('div', { class: 'week-num', text: String(d.answered) }),
      el('div', { class: 'week-label', text: label }),
    ]);
    bars.appendChild(col);
  });
  chart.appendChild(bars);
  body.push(chart);

  // Accuracy by domain
  const byDom = accuracyByDomain();
  const domCard = el('section', { class: 'card' }, [el('h2', { text: 'Accuracy by domain' })]);
  Object.values(byDom).forEach(d => {
    const cls = d.acc === null ? 'untried' : d.acc >= 0.85 ? 'strong' : d.acc >= 0.6 ? 'ok' : 'weak';
    domCard.appendChild(el('div', { class: 'skill-row ' + cls }, [
      el('div', { class: 'skill-row-top' }, [
        el('span', { class: 'skill-name', text: `${d.icon} ${d.name}` }),
        el('span', { class: 'skill-stat', text: d.acc === null ? 'Not tried' : `${Math.round(d.acc * 100)}% · ${d.seen} seen${d.avgTimeSec ? ` · ${Math.round(d.avgTimeSec)}s` : ''}` }),
      ]),
      progressBar(d.acc === null ? 0 : d.acc, 'skill-bar ' + cls),
    ]));
  });
  body.push(domCard);

  // Weekly advice
  const weak = weakestSkills(2, 2);
  const advice = weak.length
    ? `This week, focus your reviews on ${weak.map(x => SKILLS[x.id].name).join(' and ')}. A short daily Review Dungeon on these will move your accuracy fastest.`
    : 'Keep answering questions across domains so the report can spot your weakest skills. Aim for activity on more days next week.';
  body.push(el('section', { class: 'card advice-card' }, [el('h2', { text: '🧭 This week’s focus' }), el('p', { text: advice }),
    el('button', { class: 'btn btn-primary', text: '🔁 Start a review', onclick: () => startReview('due') })]));

  return screen('Weekly Report', 'Your last 7 days', body, { back: { route: 'profile' } });
});

/* ================================================================
   MISTAKE LOG
   ================================================================ */
route('mistakes', () => {
  const body = [];
  if (STATE.mistakes.length === 0) {
    body.push(el('div', { class: 'empty-state' }, [
      el('div', { class: 'empty-icon', text: '📖' }),
      el('h2', { text: 'No mistakes logged yet' }),
      el('p', { text: 'When you miss a question, it lands here with the explanation, why your choice was wrong, and a strategy tip. Reviewing mistakes is the fastest way to raise a score.' }),
      el('button', { class: 'btn btn-primary', text: 'Go to the map', onclick: () => navigate('map') }),
    ]));
    return screen('Mistake Log', 'Learn from every miss', body);
  }

  // category summary
  const counts = mistakeCategoryCounts();
  if (Object.keys(counts).length) {
    const sum = el('section', { class: 'card cat-summary' }, [el('h2', { text: 'By category' })]);
    const row = el('div', { class: 'cat-chips' });
    for (const [key, def] of Object.entries(MISTAKE_CATEGORIES)) if (counts[key]) row.appendChild(el('span', { class: 'cat-chip', title: def.advice }, [el('span', { text: def.icon }), el('span', { text: `${def.label}: ${counts[key]}` })]));
    sum.appendChild(row);
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
    if (top) sum.appendChild(el('p', { class: 'cat-advice', text: `💡 Most common: ${MISTAKE_CATEGORIES[top[0]].label}. ${MISTAKE_CATEGORIES[top[0]].advice}` }));
    body.push(sum);
  }

  body.push(el('div', { class: 'mistake-tools' }, [
    el('span', { class: 'pill', text: `${STATE.mistakes.length} logged` }),
    el('button', { class: 'btn btn-ghost small', text: 'Clear log', onclick: () => { if (confirm('Clear all logged mistakes? Your skill stats stay.')) { STATE.mistakes = []; saveState(); render(); } } }),
  ]));

  STATE.mistakes.slice(0, 60).forEach(m => {
    const catDef = m.category ? MISTAKE_CATEGORIES[m.category] : null;
    const detail = el('div', { class: 'mistake-detail' }, [
      el('p', { class: 'mistake-q', text: lastLine(m.question) }),
      el('p', { class: 'mistake-line wrong', text: `Your answer: ${m.chosen}${m.chosenText ? ' · ' + m.chosenText : ''}` }),
      el('p', { class: 'mistake-line right', text: `Correct: ${m.correct}${m.correctText ? ' · ' + m.correctText : ''}` }),
      m.whyWrong ? el('p', { class: 'mistake-exp', text: `Why your choice was wrong: ${m.whyWrong}` }) : null,
      el('p', { class: 'mistake-exp', text: `Why the answer is right: ${m.explanation}` }),
      m.tip ? tipCard(m.tip, 'Strategy') : null,
      catReflectRow(m),
    ]);
    body.push(el('details', { class: 'mistake' }, [
      el('summary', {}, [
        el('span', { class: 'mistake-skill', text: m.skillName || m.skill }),
        el('span', { class: 'mistake-snippet', text: shorten(lastLine(m.question), 58) }),
        catDef ? el('span', { class: 'mistake-cat', text: catDef.icon }) : null,
      ]),
      detail,
    ]));
  });
  return screen('Mistake Log', 'Learn from every miss', body);
});

function catReflectRow(m) {
  const wrap = el('div', { class: 'reflection compact' });
  if (m.category) {
    const def = MISTAKE_CATEGORIES[m.category];
    wrap.appendChild(el('div', { class: 'reflection-tagged' }, [el('span', { text: def.icon }), el('span', { text: `Tagged: ${def.label}` }), el('span', { class: 'reflection-advice', text: '— ' + def.advice })]));
    return wrap;
  }
  wrap.appendChild(el('div', { class: 'reflection-q', text: 'Why did you miss it?' }));
  const btns = el('div', { class: 'reflection-btns' });
  for (const [key, def] of Object.entries(MISTAKE_CATEGORIES)) btns.appendChild(el('button', { class: 'reflect-chip', onclick: () => {
    reflectMistake(m.id, key);
    const reflected = STATE.mistakes.filter(x => x.reflected).length;
    if (reflected >= 10) awardBadge('reflector');
    saveState(); Sound.play('click'); render();
  } }, [el('span', { text: def.icon }), el('span', { text: def.label })]));
  wrap.appendChild(btns);
  return wrap;
}
function lastLine(text) { const parts = text.split('\n').filter(l => l.trim()); return parts[parts.length - 1]; }
function shorten(s, n) { return s.length > n ? s.slice(0, n - 1) + '…' : s; }

/* ================================================================
   PROFILE
   ================================================================ */
route('profile', () => {
  const p = STATE.profile;
  const cls = HERO_CLASSES.find(c => c.id === p.heroClass) || HERO_CLASSES[3];
  const body = [];
  body.push(el('section', { class: 'card profile-hero' }, [
    el('div', { class: 'profile-avatar', text: cls.icon }),
    el('h2', { class: 'profile-name', text: p.name }),
    el('div', { class: 'profile-rank', text: `${rankName()} · Level ${STATE.playerLevel}` }),
    el('div', { class: 'profile-class', text: cls.name }),
    el('div', { class: 'xp-row wide' }, [progressBar(xpIntoLevel() / xpToNextLevel(), 'xp-bar')]),
    el('div', { class: 'xp-caption', text: `${xpIntoLevel()} / ${xpToNextLevel()} XP to next level` }),
  ]));

  const acc = STATE.stats.totalAnswered ? Math.round(STATE.stats.totalCorrect / STATE.stats.totalAnswered * 100) : 0;
  const avg = STATE.stats.totalAnswered ? Math.round(STATE.stats.totalTimeMs / STATE.stats.totalAnswered / 1000) : 0;
  body.push(el('section', { class: 'stat-grid' }, [
    statChip('⭐', 'Total XP', STATE.xp),
    statChip('⚡', 'Skill Pts', STATE.skillPoints || 0),
    statChip('✅', 'Accuracy', acc + '%'),
    statChip('🗺️', 'Levels', allLevels().filter(l => STATE.levelsCompleted[l.id]).length + '/80'),
    statChip('⚔️', 'Bosses', Object.keys(STATE.bossesDefeated).length + '/11'),
    statChip('🧪', 'Best test', (STATE.examStats && STATE.examStats.bestTotal) || '—'),
  ]));

  // Domain mastery overview
  const masteryCard = el('section', { class: 'card' }, [el('h2', { text: '🏆 Domain Mastery' }), el('p', { class: 'muted', text: 'Grows as you answer correctly across each domain over time.' })]);
  for (const r of REGIONS) {
    const dm = domainMastery(r.id);
    masteryCard.appendChild(el('div', { class: 'mini-mastery' }, [
      el('span', { class: 'mini-mastery-ico', text: r.icon }),
      el('span', { class: 'mini-mastery-name', text: r.name }),
      progressBar(dm.level / 5, 'mini-mastery-bar'),
      el('span', { class: 'mini-mastery-lvl', text: MASTERY_TITLES[dm.level] }),
    ]));
  }
  body.push(masteryCard);

  const badgeCard = el('section', { class: 'card' }, [el('h2', { text: '🎖️ Badges' })]);
  const bg = el('div', { class: 'badge-grid' });
  for (const [id, def] of Object.entries(BADGE_DEFS)) {
    const earned = STATE.badges[id];
    bg.appendChild(el('div', { class: 'badge' + (earned ? ' earned' : ' locked'), title: def.desc }, [
      el('span', { class: 'badge-icon', text: earned ? def.icon : '🔒' }),
      el('span', { class: 'badge-name', text: def.name }),
    ]));
  }
  badgeCard.appendChild(bg);
  body.push(badgeCard);

  body.push(el('div', { class: 'link-list' }, [
    linkRow('⚡', 'Upgrade Hub', `${STATE.skillPoints || 0} Skill Points to spend`, () => navigate('upgrades')),
    linkRow('🧪', 'Practice test', 'Full-length Digital SAT simulation', () => navigate('exam', { style: 'sim' })),
    linkRow('📈', 'Weekly report', 'Accuracy, time, and activity', () => navigate('weekly')),
    linkRow('🌳', 'Skill tree', 'Your weakness map', () => navigate('skills')),
    linkRow('⚙️', 'Settings', 'Modes, sound, goal, backup', () => navigate('settings')),
    linkRow('📚', 'Official resources', 'College Board, Bluebook, Khan Academy', () => navigate('resources')),
  ]));
  return screen(p.name, 'Player profile', body);
});
function linkRow(icon, title, sub, onclick) {
  return el('button', { class: 'link-row', onclick }, [
    el('span', { class: 'link-icon', text: icon }),
    el('div', { class: 'link-text' }, [el('div', { class: 'link-title', text: title }), el('div', { class: 'link-sub', text: sub })]),
    el('span', { class: 'rec-arrow', text: '›' }),
  ]);
}

/* ================================================================
   SETTINGS
   ================================================================ */
route('settings', () => {
  const body = [];
  const p = STATE.profile;

  const modeCard = el('section', { class: 'card' }, [el('h2', { text: 'Mode' }),
    el('p', { class: 'muted', text: 'Game mode keeps all RPG visuals. Serious study mode strips animations and shows a per-question timer, for focused timed practice.' })]);
  const modeRow = el('div', { class: 'mode-switch' });
  ['game', 'study'].forEach(mode => modeRow.appendChild(el('button', { class: 'mode-btn' + (STATE.settings.mode === mode ? ' active' : ''), onclick: (e) => { STATE.settings.mode = mode; saveState(); modeRow.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active')); e.currentTarget.classList.add('active'); Sound.play('click'); }, }, [el('span', { text: mode === 'game' ? '🎮' : '📓' }), el('strong', { text: mode === 'game' ? 'Game mode' : 'Study mode' })])));
  modeCard.appendChild(modeRow);
  body.push(modeCard);

  body.push(el('section', { class: 'card' }, [el('h2', { text: 'Game' }),
    toggleRow('Sound effects', STATE.settings.sound, v => { STATE.settings.sound = v; saveState(); if (v) Sound.play('correct'); }),
    toggleRow('Reduce motion', STATE.settings.reducedMotion, v => { STATE.settings.reducedMotion = v; saveState(); }),
  ]));

  const goalCard2 = el('section', { class: 'card' }, [el('h2', { text: 'Quest goal' })]);
  const scoreIn = el('input', { class: 'text-input', type: 'number', min: '400', max: '1600', placeholder: 'Target score', value: p.goalScore || '' });
  const dateIn = el('input', { class: 'text-input', type: 'date', value: p.goalDate || '' });
  goalCard2.appendChild(el('label', { class: 'field-label', text: 'Target score' }));
  goalCard2.appendChild(scoreIn);
  goalCard2.appendChild(el('label', { class: 'field-label', text: 'Test date' }));
  goalCard2.appendChild(dateIn);
  goalCard2.appendChild(el('button', { class: 'btn btn-primary', text: 'Save goal', onclick: () => { p.goalScore = scoreIn.value ? Math.max(400, Math.min(1600, parseInt(scoreIn.value, 10))) : null; p.goalDate = dateIn.value || null; saveState(); toast('Goal saved.', '🎯'); } }));
  body.push(goalCard2);

  const idCard = el('section', { class: 'card' }, [el('h2', { text: 'Hero' })]);
  const nameIn = el('input', { class: 'text-input', type: 'text', maxlength: '20', value: p.name });
  idCard.appendChild(el('label', { class: 'field-label', text: 'Name' }));
  idCard.appendChild(nameIn);
  idCard.appendChild(el('label', { class: 'field-label', text: 'Class' }));
  const classSel = el('div', { class: 'class-grid small' });
  HERO_CLASSES.forEach(c => classSel.appendChild(el('button', { class: 'class-card' + (c.id === p.heroClass ? ' selected' : ''), onclick: (e) => { p.heroClass = c.id; saveState(); classSel.querySelectorAll('.class-card').forEach(x => x.classList.remove('selected')); e.currentTarget.classList.add('selected'); } }, [el('span', { class: 'class-icon', text: c.icon }), el('strong', { text: c.name })])));
  idCard.appendChild(classSel);
  idCard.appendChild(el('button', { class: 'btn btn-primary', text: 'Save hero', onclick: () => { p.name = nameIn.value.trim() || 'Challenger'; saveState(); toast('Saved.', '🧙'); } }));
  body.push(idCard);

  body.push(el('section', { class: 'card' }, [el('h2', { text: 'Backup & restore' }),
    el('p', { class: 'muted', text: 'Your progress lives in this browser only. Export a backup file to keep it safe or move it to another device.' }),
    el('div', { class: 'btn-row' }, [el('button', { class: 'btn btn-primary', text: '⬇ Export backup', onclick: exportBackup }), el('button', { class: 'btn btn-ghost', text: '⬆ Import backup', onclick: () => document.getElementById('import-file').click() })]),
  ]));

  body.push(el('section', { class: 'card danger' }, [el('h2', { text: 'Danger zone' }),
    el('button', { class: 'btn btn-danger', text: 'Reset all progress', onclick: () => { if (confirm('Erase ALL progress and start over? This cannot be undone.')) { resetSave(); Sound.play('defeat'); navigate('onboarding'); } } }),
  ]));

  body.push(el('p', { class: 'origin-note center', text: 'SAT Quest · All questions are original SAT-style practice, not official College Board content. “SAT” is a trademark of the College Board, which does not endorse this app.' }));
  return screen('Settings', 'Tune your quest', body, { back: { route: 'profile' } });
});
function toggleRow(label, value, onChange) {
  const input = el('input', { type: 'checkbox', class: 'toggle-input' });
  input.checked = value;
  input.addEventListener('change', () => onChange(input.checked));
  return el('label', { class: 'toggle-row' }, [el('span', { text: label }), el('span', { class: 'toggle' }, [input, el('span', { class: 'toggle-track' })])]);
}
function exportBackup() {
  const blob = new Blob([exportSave()], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = el('a', { href: url, download: `sat-quest-backup-${todayKey()}.json` });
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast('Backup downloaded.', '⬇');
}

/* ================================================================
   OFFICIAL RESOURCES
   ================================================================ */
route('resources', () => {
  const body = [];
  body.push(el('div', { class: 'card note-card' }, [
    el('p', { text: 'SAT Quest gives you original practice aligned to the SAT’s structure and skills. For official questions and the real digital-SAT format, use these free tools straight from the source. This app links out only — it never copies their questions, and any score figures it shows are unofficial estimates, not real SAT scores.' }),
  ]));
  const resources = [
    { icon: '🏛️', name: 'College Board — Student Question Bank', url: 'https://satsuitequestionbank.collegeboard.org/', desc: 'Official practice questions you can filter by section, domain, and skill. The real thing, free.' },
    { icon: '📘', name: 'Bluebook — Official Practice Tests', url: 'https://bluebook.collegeboard.org/', desc: 'The actual digital SAT app. Take full adaptive practice tests in the exact test-day interface.' },
    { icon: '🎓', name: 'Khan Academy — Official Digital SAT Prep', url: 'https://www.khanacademy.org/digital-sat', desc: 'Free official prep partnered with College Board: lessons, practice, and personalized recommendations.' },
    { icon: '🗓️', name: 'College Board — Register & Dates', url: 'https://satsuite.collegeboard.org/sat/registration', desc: 'Register for the SAT and check upcoming test dates and deadlines.' },
  ];
  resources.forEach(r => body.push(el('a', { class: 'card resource-link', href: r.url, target: '_blank', rel: 'noopener noreferrer' }, [
    el('div', { class: 'resource-icon', text: r.icon }),
    el('div', { class: 'resource-body' }, [el('div', { class: 'resource-name', text: r.name }), el('div', { class: 'resource-desc', text: r.desc }), el('div', { class: 'resource-url', text: r.url.replace('https://', '') })]),
    el('span', { class: 'rec-arrow', text: '↗' }),
  ])));

  body.push(el('div', { class: 'card how-to' }, [el('h2', { text: 'How to use both together' }),
    el('ol', { class: 'howto-list' }, [
      el('li', { html: 'Warm up in <strong>SAT Quest</strong> daily to drill skills and keep your streak.' }),
      el('li', { html: 'Do targeted sets in the <strong>Question Bank</strong> for your weakest domains.' }),
      el('li', { html: 'Take timed <strong>Bluebook</strong> tests every couple of weeks to track your real, official score.' }),
      el('li', { html: 'Feed your <strong>Khan Academy</strong> results back into your study plan.' }),
    ]),
  ]));

  body.push(el('div', { class: 'card note-card' }, [el('h2', { text: 'About the real SAT' }),
    el('p', { text: 'The digital SAT has two sections — Reading & Writing and Math — delivered in adaptive modules, taking about 2 hours and 14 minutes plus a break. Scores range from 400 to 1600. See SAT_REALISM_AUDIT.md in this project for how SAT Quest aligns to the official structure.' }),
  ]));
  return screen('Official Resources', 'Straight from the source', body, { back: { route: 'profile' } });
});

/* ================================================================
   UPGRADE HUB
   ================================================================ */
function anyUpgradeAffordable() {
  for (const cat of Object.keys(UPGRADES)) { const c = nextUpgradeCost(cat); if (c !== null && canAfford(c)) return true; }
  for (const r of REGIONS) { const c = nextMasteryCost(r.id); if (c !== null && canAfford(c)) return true; }
  return false;
}

route('upgrades', () => {
  const body = [];
  body.push(el('section', { class: 'card sp-banner' }, [
    el('div', { class: 'sp-big', text: `${STATE.skillPoints || 0}` }),
    el('div', {}, [el('div', { class: 'sp-label', text: 'Skill Points' }), el('div', { class: 'muted', text: `Earned by clearing levels, bosses, and practice tests. ${STATE.spEarnedTotal || 0} earned all-time.` })]),
  ]));
  body.push(el('p', { class: 'map-intro', text: 'Spend points on tools that help you learn — deeper explanations, hints, extra time, analytics, and domain mastery. These support understanding, not shortcuts.' }));

  // Upgrade paths
  for (const [cat, def] of Object.entries(UPGRADES)) {
    const lvl = upgLevel(cat), cost = nextUpgradeCost(cat), maxed = cost === null;
    const card = el('section', { class: 'card upgrade-path' }, [
      el('div', { class: 'upgrade-head' }, [
        el('span', { class: 'upgrade-icon', style: `background:${def.color}22;border-color:${def.color}`, text: def.icon }),
        el('div', { class: 'upgrade-titles' }, [el('strong', { text: def.name }), el('div', { class: 'upgrade-blurb', text: def.blurb })]),
      ]),
    ]);
    const tree = el('div', { class: 'upgrade-tiers' });
    def.tiers.forEach((t, i) => {
      const owned = lvl > i, isNext = lvl === i;
      tree.appendChild(el('div', { class: 'utier' + (owned ? ' owned' : isNext ? ' next' : ' locked') }, [
        el('span', { class: 'utier-dot', text: owned ? '✓' : (i + 1) }),
        el('span', { class: 'utier-label', text: t.label }),
        owned ? el('span', { class: 'utier-cost', text: 'Owned' }) : el('span', { class: 'utier-cost', text: `${t.cost} SP` }),
      ]));
    });
    card.appendChild(tree);
    if (!maxed) card.appendChild(el('button', { class: 'btn ' + (canAfford(cost) ? 'btn-primary' : 'btn-ghost') + ' btn-block', disabled: !canAfford(cost) ? true : null,
      text: canAfford(cost) ? `Unlock next tier · ${cost} SP` : `Need ${cost} SP`,
      onclick: () => { if (buyUpgrade(cat)) { Sound.play('unlock'); toast(`${def.name} upgraded!`, def.icon); render(); } } }));
    else card.appendChild(el('div', { class: 'upgrade-maxed', text: '★ Fully upgraded' }));
    body.push(card);
  }

  // Skill Mastery per domain
  body.push(el('h2', { class: 'section-title', text: '🏆 Skill Mastery (per domain)' }));
  body.push(el('p', { class: 'muted', text: MASTERY_UPGRADE.blurb }));
  for (const r of REGIONS) {
    const lvl = masteryUpgLevel(r.id), cost = nextMasteryCost(r.id);
    const dm = domainMastery(r.id);
    body.push(el('section', { class: 'card mastery-card' }, [
      el('div', { class: 'mastery-top' }, [
        el('span', { class: 'mastery-ico', text: r.icon }),
        el('div', { class: 'mastery-info' }, [
          el('strong', { text: r.name }),
          el('div', { class: 'mastery-sub', text: `Mastery: ${MASTERY_TITLES[dm.level]} (${dm.correct} correct, ${Math.round(dm.acc * 100)}%)` }),
        ]),
        el('span', { class: 'mastery-boost', text: lvl ? `+${Math.round(lvl * MASTERY_UPGRADE.bonusPerTier * 100)}% XP` : '' }),
      ]),
      progressBar(dm.level / 5, 'mastery-bar'),
      cost !== null
        ? el('button', { class: 'btn ' + (canAfford(cost) ? 'btn-primary' : 'btn-ghost') + ' small', disabled: !canAfford(cost) ? true : null,
            text: canAfford(cost) ? `Boost XP (tier ${lvl + 1}) · ${cost} SP` : `Need ${cost} SP`,
            onclick: () => { if (buyMastery(r.id)) { Sound.play('unlock'); toast(`${r.name} mastery boosted!`, '🏆'); render(); } } })
        : el('div', { class: 'upgrade-maxed small', text: '★ Max XP boost' }),
    ]));
  }

  return screen('Upgrade Hub', 'Invest in learning', body, { back: { route: 'home' } });
});

/* ================================================================
   FULL PRACTICE EXAM / FINAL EXAM REALM
   ================================================================ */
let examTimerId = null;

route('exam', ({ style }) => {
  const s = examSession();
  if (!s) return examIntroScreen(style || 'sim');
  if (s.style !== (style || s.style) && s.phase !== 'done') { /* resume whatever is active */ }
  if (s.phase === 'done') return examResultsScreen(s);
  if (s.phase === 'break') return examBreakScreen(s);
  return examModuleScreen(s);
});

function examIntroScreen(style) {
  const isBoss = style === 'boss';
  const rwT = EXAM_CONFIG.rw, mathT = EXAM_CONFIG.math;
  const totalQ = rwT.count * 2 + mathT.count * 2;
  const body = [
    el('div', { class: 'card exam-intro' + (isBoss ? ' boss' : '') }, [
      el('div', { class: 'exam-intro-icon', text: isBoss ? '🐲' : '🧪' }),
      el('h1', { class: 'display-title', text: isBoss ? 'Final Exam Realm' : 'Simulation Gate' }),
      el('p', { class: 'boss-intro-text', text: isBoss
        ? 'Face the full mock SAT as four module bosses. Correct answers damage the boss; wrong answers and timeouts strike back. Difficulty adapts between modules.'
        : 'A serious, timed practice test that follows the Digital SAT structure.' }),
      el('div', { class: 'boss-rules' }, [
        el('div', { class: 'rule', text: `📕 Reading & Writing — Module 1 & 2 (${rwT.count} questions each, ~${Math.round(rwT.count * rwT.perQ / 60)} min per module)` }),
        el('div', { class: 'rule', text: '☕ Break' }),
        el('div', { class: 'rule', text: `📐 Math — Module 1 & 2 (${mathT.count} questions each, ~${Math.round(mathT.count * mathT.perQ / 60)} min per module)` }),
        el('div', { class: 'rule', text: '🔀 Module 2 difficulty adapts to your Module 1 — simulated adaptivity, not the official algorithm' }),
        el('div', { class: 'rule', text: '🚫 You cannot return to a module once you submit it' }),
        el('div', { class: 'rule', text: '💾 Progress saves automatically — you can exit and resume' }),
      ]),
      el('div', { class: 'exam-disclaimer', text: `⚠️ This is a shortened practice simulation (${totalQ} questions total). Your score is an UNOFFICIAL practice estimate, not a real SAT score. The College Board scores the real SAT with its own model.` }),
    ]),
    el('button', { class: 'btn ' + (isBoss ? 'btn-boss' : 'btn-primary') + ' btn-block big', text: isBoss ? '🐲 Enter the Realm' : '🧪 Begin practice test', onclick: () => { startExam(style); render(); } }),
    el('button', { class: 'btn btn-ghost btn-block', text: 'Back to map', onclick: () => navigate('map') }),
  ];
  return screen(isBoss ? 'Final Exam Realm' : 'Simulation Gate', 'Full-length practice', body, { back: { route: 'map' } });
}

function examBreakScreen(s) {
  clearInterval(examTimerId);
  const body = [
    el('div', { class: 'card exam-break' }, [
      el('div', { class: 'exam-intro-icon', text: '☕' }),
      el('h1', { class: 'display-title', text: 'Break Time' }),
      el('p', { class: 'boss-intro-text', text: 'You have finished the Reading & Writing modules. On the real Digital SAT, a short break comes here before Math. Rest your eyes, then continue when ready.' }),
      el('div', { class: 'exam-progress-mini', text: '✅ R&W Module 1  ·  ✅ R&W Module 2  ·  ⏭️ Math next' }),
    ]),
    el('button', { class: 'btn btn-primary btn-block big', text: 'Continue to Math →', onclick: () => { skipBreak(); render(); } }),
  ];
  return screen('Break', 'Halfway there', body);
}

function examModuleScreen(s) {
  clearInterval(examTimerId);
  const m = currentModule();
  const meta = MODULE_META[m.kind];
  if (!s._view || s._view.kind !== m.kind) s._view = { kind: m.kind, mode: 'q', qi: 0 };
  const view = s._view;
  const isBoss = s.style === 'boss';

  const wrap = el('div', { class: 'screen exam-screen' });

  // Header: module label + timer + (boss HP for boss style)
  const timerEl = el('span', { class: 'exam-timer', text: fmtTime(m.timeLeft) });
  const header = el('div', { class: 'exam-header' }, [
    el('div', { class: 'exam-mod-label' }, [el('span', { text: meta.icon }), el('span', { text: meta.label })]),
    el('div', { class: 'exam-timer-wrap' }, [el('span', { text: '⏱' }), timerEl]),
  ]);
  wrap.appendChild(header);

  if (isBoss) {
    const answeredCorrect = m.questions.filter((q, i) => m.responses[i] !== undefined && gradeExamQuestion(q, m.responses[i])).length;
    const bossHP = Math.max(0, 100 - Math.round((answeredCorrect / m.total) * 100));
    wrap.appendChild(el('div', { class: 'exam-boss-hp' }, [
      el('div', { class: 'hp-label' }, [el('span', { text: `${meta.icon} Module Boss` }), el('span', { class: 'hp-num', text: `${bossHP}% HP` })]),
      hpBar(bossHP / 100, 'boss-hp'),
    ]));
  }

  const bodyMain = el('main', { class: 'screen-body' });

  if (view.mode === 'review') {
    bodyMain.appendChild(examReviewPanel(s, m, view));
  } else {
    bodyMain.appendChild(examQuestionPanel(s, m, view, timerEl));
  }
  wrap.appendChild(bodyMain);

  // Timer tick
  let saveCounter = 0;
  examTimerId = setInterval(() => {
    m.timeLeft -= 1;
    timerEl.textContent = fmtTime(m.timeLeft);
    if (m.timeLeft <= 30) timerEl.classList.add('danger');
    if (++saveCounter % 5 === 0) saveState();
    if (m.timeLeft <= 0) { clearInterval(examTimerId); saveState(); Sound.play('defeat'); doSubmitModule(s); }
  }, 1000);

  return wrap;
}

function examQuestionPanel(s, m, view, timerEl) {
  const qi = view.qi;
  const q = m.questions[qi];
  const panel = el('div', { class: 'exam-qpanel' });

  panel.appendChild(el('div', { class: 'exam-qnav-top' }, [
    el('span', { class: 'exam-qcount', text: `Question ${qi + 1} of ${m.total}` }),
    el('button', { class: 'flag-btn' + (m.flags[qi] ? ' flagged' : ''), text: m.flags[qi] ? '🚩 Flagged' : '🏳️ Flag for review',
      onclick: (e) => { toggleExamFlag(qi); e.currentTarget.classList.toggle('flagged'); e.currentTarget.textContent = m.flags[qi] ? '🚩 Flagged' : '🏳️ Flag for review'; } }),
  ]));

  panel.appendChild(el('div', { class: 'q-meta' }, [
    el('span', { class: 'pill subtle', text: SKILLS[q.skill] ? SKILLS[q.skill].name : q.skill }),
    q.type === 'grid' ? el('span', { class: 'pill spr', text: 'Grid-in' }) : null,
    el('span', { class: 'origin-tag', text: q.type === 'grid' ? 'Student-Produced Response · Original' : 'Original SAT-style' }),
  ]));

  if (q.visual) {
    panel.appendChild(el('figure', { class: 'q-visual', html: q.visual.html }));
    panel.appendChild(el('details', { class: 'q-visual-alt' }, [el('summary', { text: 'Image description' }), el('p', { text: q.visual.alt })]));
  }

  const qt = el('div', { class: 'q-text' });
  q.text.split('\n').forEach(line => { if (line.trim() === '') qt.appendChild(el('div', { class: 'q-spacer' })); else qt.appendChild(el('p', { text: line })); });
  panel.appendChild(qt);

  if (q.type === 'grid') {
    const input = el('input', { class: 'grid-input', type: 'text', inputmode: 'decimal', autocomplete: 'off', placeholder: 'Type your answer', value: m.responses[qi] || '' });
    input.addEventListener('input', () => setExamResponse(qi, input.value));
    panel.appendChild(el('div', { class: 'grid-row' }, [input]));
  } else {
    const choicesWrap = el('div', { class: 'choices' });
    q.choices.forEach(ch => {
      const sel = m.responses[qi] === ch.letter;
      const btn = el('button', { class: 'choice exam-choice' + (sel ? ' selected' : ''), dataset: { letter: ch.letter } }, [
        el('span', { class: 'choice-letter', text: ch.letter }), el('span', { class: 'choice-text', text: ch.text }),
      ]);
      btn.addEventListener('click', () => {
        setExamResponse(qi, ch.letter);
        choicesWrap.querySelectorAll('.choice').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
      choicesWrap.appendChild(btn);
    });
    panel.appendChild(choicesWrap);
  }

  // navigation
  const nav = el('div', { class: 'exam-nav' }, [
    el('button', { class: 'btn btn-ghost', disabled: qi === 0 ? true : null, text: '‹ Back', onclick: () => { view.qi = Math.max(0, qi - 1); render(); } }),
    qi < m.total - 1
      ? el('button', { class: 'btn btn-primary', text: 'Next ›', onclick: () => { view.qi = qi + 1; render(); } })
      : el('button', { class: 'btn btn-primary', text: 'Review & submit →', onclick: () => { view.mode = 'review'; render(); } }),
  ]);
  panel.appendChild(nav);
  panel.appendChild(el('button', { class: 'btn btn-ghost small exam-jump', text: '▦ Question navigator', onclick: () => { view.mode = 'review'; render(); } }));
  return panel;
}

function examReviewPanel(s, m, view) {
  const panel = el('div', { class: 'exam-review' });
  panel.appendChild(el('h2', { class: 'section-title', text: 'Review this module' }));
  panel.appendChild(el('p', { class: 'muted', text: 'Tap a number to revisit. 🚩 = flagged, filled = answered. You cannot return after submitting.' }));
  const grid = el('div', { class: 'qnav-grid' });
  for (let i = 0; i < m.total; i++) {
    const answered = m.responses[i] !== undefined && m.responses[i] !== '';
    grid.appendChild(el('button', { class: 'qnav-cell' + (answered ? ' answered' : '') + (m.flags[i] ? ' flagged' : ''),
      text: String(i + 1), onclick: () => { view.mode = 'q'; view.qi = i; render(); } }));
  }
  panel.appendChild(grid);
  const answeredCount = Object.keys(m.responses).filter(k => m.responses[k] !== '').length;
  panel.appendChild(el('div', { class: 'exam-review-stat', text: `${answeredCount} of ${m.total} answered` }));
  panel.appendChild(el('div', { class: 'btn-row stacked' }, [
    el('button', { class: 'btn btn-primary btn-block big', text: 'Submit module', onclick: () => { if (confirm('Submit this module? You will not be able to return to it.')) doSubmitModule(s); } }),
    el('button', { class: 'btn btn-ghost btn-block', text: '‹ Back to questions', onclick: () => { view.mode = 'q'; render(); } }),
  ]));
  return panel;
}

function doSubmitModule(s) {
  clearInterval(examTimerId);
  const prevPhase = s.phase;
  const m = currentModule();
  const correct = m.questions.filter((q, i) => gradeExamQuestion(q, m.responses[i])).length;
  submitModule();
  s._view = null;
  if (s.phase === 'done') { const rewards = finishExamRewards(); s._rewards = rewards; }
  Sound.play(correct >= m.total / 2 ? 'victory' : 'bosshit');
  render();
}

function fmtTime(sec) { sec = Math.max(0, Math.floor(sec)); const mm = Math.floor(sec / 60), ss = sec % 60; return `${mm}:${String(ss).padStart(2, '0')}`; }

function examResultsScreen(s) {
  clearInterval(examTimerId);
  const r = s.results;
  const isBoss = s.style === 'boss';
  const body = [];
  body.push(el('div', { class: 'result-hero win' }, [
    el('div', { class: 'result-emblem', text: isBoss ? '🐲' : '🧪' }),
    el('h1', { class: 'display-title', text: isBoss ? 'Final Exam Cleared!' : 'Practice Test Complete' }),
    el('div', { class: 'exam-score', text: String(r.total) }),
    el('div', { class: 'exam-score-label', text: 'Unofficial practice estimate (400–1600)' }),
    el('div', { class: 'exam-subscores' }, [
      el('div', { class: 'subscore' }, [el('div', { class: 'subscore-num', text: String(r.rwScore) }), el('div', { class: 'subscore-lab', text: 'Reading & Writing' })]),
      el('div', { class: 'subscore' }, [el('div', { class: 'subscore-num', text: String(r.mathScore) }), el('div', { class: 'subscore-lab', text: 'Math' })]),
    ]),
    s._rewards ? el('div', { class: 'result-xp', text: `+${s._rewards.xp} XP · +${s._rewards.sp} SP` }) : null,
  ]));

  body.push(el('div', { class: 'card exam-disclaimer-card' }, [
    el('p', { text: '⚠️ This is an unofficial practice estimate, not a real SAT score. It maps your accuracy to the 400–1600 scale for motivation only. The College Board scores the real SAT using its own equating and scoring model, which this app does not replicate.' }),
    el('p', { class: 'muted', text: `Simulated adaptivity: Module 2 was ${r.adaptive.rwHard ? 'harder' : 'standard'} (R&W) and ${r.adaptive.mathHard ? 'harder' : 'standard'} (Math), based on your Module 1 performance.` }),
  ]));

  // Domain accuracy
  const domCard = el('section', { class: 'card' }, [el('h2', { text: 'Accuracy by domain' })]);
  Object.entries(r.domainTally).forEach(([rid, t]) => {
    const acc = t.total ? t.correct / t.total : 0;
    const cls = acc >= 0.85 ? 'strong' : acc >= 0.6 ? 'ok' : 'weak';
    const region = regionById(rid);
    domCard.appendChild(el('div', { class: 'skill-row ' + cls }, [
      el('div', { class: 'skill-row-top' }, [el('span', { class: 'skill-name', text: `${region.icon} ${region.name}` }), el('span', { class: 'skill-stat', text: `${t.correct}/${t.total} · ${Math.round(acc * 100)}%` })]),
      progressBar(acc, 'skill-bar ' + cls),
    ]));
  });
  body.push(domCard);

  // Pacing + weak skills + recommendations
  const pace = el('section', { class: 'card advice-card' }, [el('h2', { text: '🧭 What to work on next' })]);
  pace.appendChild(el('p', { text: `You answered ${r.answered} of ${r.totalQ} questions.` }));
  if (r.weakSkills.length) {
    pace.appendChild(el('p', { text: 'Weakest skills this test:' }));
    const ul = el('ul', { class: 'weak-list' });
    r.weakSkills.forEach(w => ul.appendChild(el('li', {}, [el('strong', { text: SKILLS[w.id] ? SKILLS[w.id].name : w.id }), el('span', { text: ` — ${Math.round(w.acc * 100)}%` })])));
    pace.appendChild(ul);
    pace.appendChild(el('button', { class: 'btn btn-primary', text: '🔁 Review these skills now', onclick: () => { const ids = r.weakSkills.map(w => w.id); clearExam(); startReview('custom', ids); } }));
  }
  body.push(pace);

  body.push(el('div', { class: 'btn-row stacked' }, [
    el('button', { class: 'btn btn-ghost btn-block', text: '🔁 Retake (new questions)', onclick: () => { clearExam(); navigate('exam', { style: s.style }); } }),
    el('button', { class: 'btn btn-ghost btn-block', text: '🗺️ Back to map', onclick: () => { clearExam(); navigate('map'); } }),
  ]));

  return screen(isBoss ? 'Final Exam Realm' : 'Practice Test', 'Results', body);
}

/* ================================================================
   Boot
   ================================================================ */
function setupImportInput() {
  const input = document.getElementById('import-file');
  input.addEventListener('change', () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try { importSave(reader.result); toast('Backup restored!', '✅'); Sound.play('unlock'); navigate('home'); }
      catch (e) { toast('That file is not a valid SAT Quest backup.', '⚠️'); }
      input.value = '';
    };
    reader.readAsText(file);
  });
}
function boot() {
  loadState();
  buildNav();
  setupImportInput();
  mountPersistentChrome();
  currentRoute = STATE.profile.onboarded ? { name: 'home' } : { name: 'onboarding' };
  render();
  setupServiceWorker();
}
document.addEventListener('DOMContentLoaded', boot);
