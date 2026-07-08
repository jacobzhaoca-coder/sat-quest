/* SAT Quest — tiny DOM helpers and shared UI pieces. */

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') node.className = v;
    else if (k === 'html') node.innerHTML = v;
    else if (k === 'text') node.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else if (k === 'dataset') Object.assign(node.dataset, v);
    else if (v !== null && v !== undefined && v !== false) node.setAttribute(k, v);
  }
  const kids = Array.isArray(children) ? children : [children];
  for (const c of kids) {
    if (c === null || c === undefined || c === false) continue;
    node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  }
  return node;
}

function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

/* Escape user/content text before injecting as HTML. */
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

/* Animated progress bar. Pass 0..1. */
function progressBar(ratio, className = '') {
  const wrap = el('div', { class: `bar ${className}` });
  const fill = el('div', { class: 'bar-fill' });
  wrap.appendChild(fill);
  requestAnimationFrame(() => { fill.style.width = `${Math.max(0, Math.min(1, ratio)) * 100}%`; });
  return wrap;
}

/* Floating toast notification (badges, quest rewards, level-ups). */
function toast(msg, icon = '✨') {
  const host = document.getElementById('toast-host');
  const t = el('div', { class: 'toast' }, [
    el('span', { class: 'toast-icon', text: icon }),
    el('span', { text: msg }),
  ]);
  host.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 400);
  }, 3200);
}

/* Tip card used across question review and result screens. */
function tipCard(text, label = 'Strategy Tip') {
  return el('div', { class: 'tip-card' }, [
    el('div', { class: 'tip-head' }, [el('span', { text: '💡' }), el('strong', { text: label })]),
    el('p', { text }),
  ]);
}

/* True when animations should be suppressed: reduced-motion setting OR the
   serious "study" mode, which deliberately strips RPG animation from practice. */
function motionOff() {
  return !!(STATE && STATE.settings && (STATE.settings.reducedMotion || STATE.settings.mode === 'study'));
}

/* Confetti-ish celebration using DOM spans (respects reduced motion). */
function celebrate() {
  if (motionOff()) return;
  const host = document.getElementById('fx-host');
  const glyphs = ['✨', '⭐', '🎉', '💫', '🌟'];
  for (let i = 0; i < 24; i++) {
    const s = el('span', { class: 'confetti', text: glyphs[i % glyphs.length] });
    s.style.left = Math.random() * 100 + 'vw';
    s.style.animationDelay = (Math.random() * 0.5) + 's';
    s.style.fontSize = (12 + Math.random() * 18) + 'px';
    host.appendChild(s);
    setTimeout(() => s.remove(), 2600);
  }
}
