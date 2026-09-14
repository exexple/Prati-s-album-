# prati's album

A small multi-page digital album — five songs, six photographs, seven pages.

## 1. Install dependencies

Requires Node.js 18+.

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`).

## 3. Add the six photographs

Drop your images into `public/images/prati/`, named:

```
photo-01.jpg   photo-02.jpg   photo-03.jpg
photo-04.jpg   photo-05.jpg   photo-06.jpg
```

(`01` → Lover, `02` → Enchanted, `03` → Darkhaast, `04` → Daylight,
`05` → Heaven Is You, `06` → Side B.) Using `.png` or `.webp` instead?
Update the matching `image.src` in `src/data/album.js` to match.

Until a photo is added, that page shows a quiet placeholder instead of a
broken image — so it's safe to preview the site before every photo is in.

## 4. Change any text

Everything — the title, the subtitle, every line of copy, the trait
labels, the closing lines — lives in one file:

```
src/data/album.js
```

Nothing is hardcoded inside the page or component files, so editing that
one file is enough.

## 5. Configure the songs

This project does not ship any copyrighted audio files, and does not
assume you have distribution rights to any. In `src/data/album.js`, each
track has two optional fields — fill in at most one:

**Option A — a file you have the rights to use:**
```js
audio: "/audio/lover.mp3",
```
Place the file in `public/audio/`.

**Option B — link out to Spotify instead:**
```js
embed: { type: "link", url: "https://open.spotify.com/track/XXXXXXXX" },
```
This renders a "listen on Spotify" button.

**Option C — an inline official Spotify embed:**
```js
embed: { type: "iframe", url: "https://open.spotify.com/embed/track/XXXXXXXX" },
```
Get this URL from Spotify's own "Share → Embed track" option on the song.

If you leave both fields empty, the player shows a plain "not configured
yet" note instead of a button that doesn't do anything.

## 6. Configure external playback (Spotify links/embeds)

See Option B/C above — that's the entire configuration surface. There is
no API key or account needed for either option.

## 7. Build for production

```bash
npm run build
```

Output goes to `dist/`.

## 8. Deploy (GitHub + Vercel)

**Push to GitHub** — from inside this folder:
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
Create the empty repo on GitHub first, and don't let GitHub initialize it
with a README/license — that creates a conflicting commit history.

**Import into Vercel:**
1. vercel.com → **Add New → Project** → import that GitHub repo.
2. Vercel auto-detects the Vite preset: build command `npm run build`,
   output directory `dist`. Leave those as-is and click **Deploy**.
3. No local Node install is required for this — Vercel runs
   `npm install` and the build in its own environment.

This repo already includes `vercel.json` with the client-side routing
rewrite every React Router + Vercel deploy needs:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```
Without it, opening `/lover` directly (or refreshing on it) 404s, because
Vercel otherwise only knows about `index.html` at `/`.

Every `git push` to `main` after this triggers an automatic redeploy —
including once you commit the real photos into `public/images/prati/`.

## 9. Limitations

- No real audio playback works out of the box — you configure a source
  per track (see step 5).
- The six photographs are not included — this project deliberately does
  not generate or substitute stock images for a real person.
- This is a private link, not something indexed for search — there's no
  password gate built in. If you want one, the simplest option is to
  keep the deployed URL unlisted rather than adding auth to a project
  this size.

## Project structure

```
pratis-album/
├── public/
│   ├── images/prati/     ← your six photos go here
│   └── audio/            ← optional, only if using Option A above
├── src/
│   ├── components/       ← reusable UI (nav, player, photo frame, etc.)
│   ├── pages/            ← one file per route
│   ├── data/             ← album.js (content) + themes.js (palettes)
│   ├── hooks/
│   └── styles/
├── vercel.json           ← client-side routing rewrite for Vercel
└── README.md
```
