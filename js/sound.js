/* SAT Quest — synthesized chiptune sound effects via the Web Audio API.
   No audio files needed. Respects the player's mute setting. */

const Sound = (() => {
  let ctx = null;
  function ac() {
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch (e) { ctx = null; }
    }
    return ctx;
  }

  function enabled() { return STATE && STATE.settings && STATE.settings.sound; }

  function tone(freq, start, dur, type = 'square', vol = 0.15) {
    const a = ac(); if (!a) return;
    const osc = a.createOscillator();
    const gain = a.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, a.currentTime + start);
    gain.gain.setValueAtTime(0, a.currentTime + start);
    gain.gain.linearRampToValueAtTime(vol, a.currentTime + start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + start + dur);
    osc.connect(gain).connect(a.destination);
    osc.start(a.currentTime + start);
    osc.stop(a.currentTime + start + dur + 0.02);
  }

  function play(name) {
    if (!enabled()) return;
    const a = ac(); if (!a) return;
    if (a.state === 'suspended') a.resume();
    switch (name) {
      case 'correct': tone(660, 0, 0.12, 'square'); tone(880, 0.09, 0.16, 'square'); break;
      case 'wrong':   tone(200, 0, 0.18, 'sawtooth', 0.12); tone(150, 0.12, 0.2, 'sawtooth', 0.1); break;
      case 'click':   tone(520, 0, 0.05, 'triangle', 0.08); break;
      case 'levelup': [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.1, 0.18, 'square')); break;
      case 'victory': [523, 659, 784, 1047, 784, 1047].forEach((f, i) => tone(f, i * 0.09, 0.2, 'square')); break;
      case 'bosshit': tone(140, 0, 0.14, 'sawtooth', 0.18); tone(90, 0.05, 0.18, 'square', 0.12); break;
      case 'playerhit': tone(110, 0, 0.22, 'sawtooth', 0.16); break;
      case 'defeat':  [392, 349, 294, 233].forEach((f, i) => tone(f, i * 0.14, 0.26, 'triangle', 0.14)); break;
      case 'unlock':  tone(784, 0, 0.1, 'square'); tone(1047, 0.08, 0.16, 'square'); break;
      case 'badge':   [659, 988, 1319].forEach((f, i) => tone(f, i * 0.08, 0.2, 'square')); break;
      default: break;
    }
  }

  return { play };
})();
