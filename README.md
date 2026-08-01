# 🐍 Nostalgia Snake

A tiny, self-contained Snake game you can play right in your browser — no installs, no accounts, no build step, no internet required.

> **Need a breather?** Chase the dot, dodge yourself, and let the old-school arcade buzz melt the day away. It's just a little something fun to play when work piles up and the childhood arcade afternoons feel far away. Built for us.

## ▶️ How to play

1. **Open `index.html`** in any modern browser (double-click it, or drag it into a browser tab).
2. Steer with **Arrow keys** or **WASD**.
3. On phones/tablets, **swipe** on the board to change direction.
4. **Space** (or the Pause button) pauses. **New Game** restarts.
5. Eat the red dot to grow and score. Don't hit the walls or your own tail.
6. Your **best score** is saved locally on your device — it stays with you, nothing is uploaded.

That's it. Plug and play.

## ✨ Features

- 100% offline — a single HTML file, zero dependencies, no CDN, no fonts to fetch.
- Works on desktop and mobile (keyboard + touch swipe).
- Gently speeds up as you grow, so it stays challenging but fair.
- Best score persists via `localStorage` (stays on your device only).
- Clean, readable code in one file — fork it, tweak the colors, make it yours.

## 🛠️ Run it your way

- **Simplest:** just open `index.html`.
- **Local server (optional):** `python3 -m http.server` then visit `http://localhost:8000`.
- **GitHub Pages:** enable it on the repo's `main` branch (`/root`) and share the link.

## 📦 Make it yours

Everything lives in `index.html`. Change the CSS variables at the top (colors), `tickMs` (speed), or `CELL`/`COLS`/`ROWS` (board size) to remix the feel.

## 🤝 Contributing

Open an issue or PR — ideas, themes, and polish are all welcome. Keep it small, fun, and dependency-free.

## 📜 License

MIT — do whatever you like, just keep the notice.

---

_Author's note: this little toy was built with a bit of AI help, adapted for a network engineer's coffee-break nostalgia. Play it, laugh at the high-score chase, and remember the good old days._
