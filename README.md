# MAVICO — Brand Book

Bilingual (EN / FR) brand book for MAVICO, built on the Mavico Design System.
Static HTML/CSS/JS — **no build step** — deploys to Vercel as-is. Opens at `/`.

## What's inside
15 spreads — cover, contents, foundation, logo, color, typography, graphic language,
imagery, voice & tone, components, layout, applications, governance. Scales to any screen;
the **Save PDF** button (top-right) prints one spread per landscape page.
The EN/FR toggle is top-right; the choice persists (localStorage).

## Deploy to Vercel
1. Push this folder to a GitHub repo, **or** drag it into Vercel.
2. Vercel → Add New → Project → Import.
3. Framework Preset: **Other**. Build Command: **(leave empty)**. Output Directory: **(leave empty / root)**.
4. Deploy.

CLI alternative: `npm i -g vercel` then `vercel --prod`.

## Notes
- `_ds/` is the Mavico Design System (tokens, fonts, component bundle) — required; keep it.
- The Imagery spread has drag-to-fill photo slots; drop real images when ready.
- To export a PDF: open the book, switch to the language you want, click **Save PDF**.
