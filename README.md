# 🐍 Nostalgia Snake (v2.0)

A polished, self-contained Snake arcade game you can play right in your browser — zero installs, zero accounts, no build step, and 100% offline.

> **Need a breather?** Chase the dot, dodge yourself, and let the old-school arcade buzz melt the day away. It's just a little something fun to play when work piles up and the childhood arcade afternoons feel far away. Built for us.

---

## ▶️ How to play

1. **Open `index.html`** in any modern browser (double-click it or drag into a tab).
2. **Steer:**
   - **Keyboard:** Arrow keys, `WASD`, or `HJKL` (Vim keys).
   - **Mobile / Touch:** Swipe anywhere on the board or use the on-screen **Virtual D-Pad**.
3. **Shortcuts:**
   - <kbd>Space</kbd> / <kbd>P</kbd>: Pause & Resume.
   - <kbd>R</kbd>: Quick Restart.
   - <kbd>M</kbd>: Mute / Unmute sound.
   - <kbd>T</kbd>: Cycle visual theme.
4. **Eat to Grow:**
   - **Red Apple / Orb:** Standard food (+10 pts × combo multiplier).
   - **Golden Star / Bonus:** Timed bonus item spawning every 5 food items (+50 pts × combo).
   - **Combo Multipliers:** Eat quickly within 4.5s to chain combos up to **5x**!
5. **Game Over & Stats:** View final score, foods eaten, survival time, and personal records.

---

## ✨ Features

- **Silky Smooth 60+ FPS Motion:** Decoupled simulation ticks and sub-cell interpolation glide the snake continuously instead of choppy block teleportation.
- **Input Buffer Queue:** 2-step turn buffering prevents dropped inputs during rapid cornering and blocks accidental 180° self-collisions.
- **4 Selectable Visual Themes:**
  - 🌟 **Neon Arcade (Default):** Radiant cyber glow, emerald snake, ruby food, particle bursts.
  - 📟 **Nokia 3310:** Authentic retro LCD dot-matrix green palette and chunky pixel styling.
  - 🕹️ **80s CRT Synthwave:** Phosphor magenta/cyan grid, scanline CRT overlay, and arcade nostalgia.
  - 🌙 **Midnight Minimal:** Clean, elegant dark slate palette with soft shadows.
- **Procedural Web Audio SFX:** 100% synthesized 8-bit sound effects (eat chimes, golden fanfare, crash buzz, combo escalation) with zero external audio assets.
- **HiDPI / Retina Crisp:** Automatic `devicePixelRatio` scaling ensures crystal clarity on 4K, laptops, and mobile screens.
- **Game Modes:**
  - **Classic (Walls):** Outer walls are fatal.
  - **Wrap-Around (Portal):** Snake wraps seamlessly across board edges.
- **Difficulty Speeds:** Relaxed (chill unwinding), Normal (arcade ramp), and Turbo (high-adrenaline challenge).
- **Expressive Snake Aesthetics:** Animated eyes that follow your direction and glance toward food, with occasional tongue flicks and smooth tapering body joints.
- **Mobile First:** Responsive layout, touch swipe gestures, on-screen tactile D-Pad, and haptic feedback.
- **100% Offline & Single-File:** Lives entirely in a single `index.html` file with zero dependencies.

---

## 🛠️ Run it your way

- **Simplest:** Double-click or open `index.html` directly in your browser.
- **Local server (optional):**
  ```bash
  python3 -m http.server 8000
  # or
  npx serve .
  ```
  Visit `http://localhost:8000`.
- **Automated Tests:**
  ```bash
  node test_snake.js
  ```

---

## 📜 License

MIT — do whatever you like, just keep the notice.
