# Mavico Design System

> **Clarity in complexity.** The design system for Mavico — a bold, high-contrast consulting brand built on black, gold, and confident geometric type.

This is the single source of truth for Mavico's visual language: tokens, components, foundation specimens, and a full marketing-site UI kit. Consumers link one file — `styles.css` — to inherit every token and font.

---

## Source material

The system was derived from the **Mavico master logo** (`uploads/MAVICO.webp`) — a wide geometric-sans wordmark, white on near-black, with a gold bar replacing the "I". No codebase, Figma, or existing site was provided; everything here is built from the logo plus the brief: *bold & confident consulting brand, geometric sans, black + gold + warm neutrals + semantic colors, slightly-rounded corners, marketing website*.

Sampled brand values: **gold `#C38F2B`**, **ink `#0D0D0C`**, white.

> ⚠️ **Font substitution (needs confirmation).** The wordmark's exact typeface is unknown. We use **Jost** (a free, Futura-family geometric sans) as the closest match for the display/brand voice, **Manrope** for body, and **JetBrains Mono** for data. If Mavico licenses a specific brand font, send the files and we'll swap the `@import` in `tokens/fonts.css` and the `--font-*` vars in `tokens/typography.css`.

---

## Content fundamentals

**Voice:** plain-spoken, senior, confident — never salesy or jargon-heavy. The brand's whole positioning is "sharp thinking, delivered plainly." Copy should sound like a partner talking, not a brochure.

- **Person:** "we" (the firm) speaking to "you" (the client leader). First-person plural, second-person address.
- **Tone:** direct and a little blunt. Short declarative sentences. Confident claims backed by numbers. Examples: *"Clarity in complexity."* · *"No thick decks. A method that moves."* · *"Tell us where it hurts."* · *"Senior people, in the room."*
- **Casing:** Headlines in **sentence case** (set in the display font). Eyebrows, button labels, badges, and field labels in **UPPERCASE** with wide tracking — echoing the wordmark. Body is sentence case.
- **Numbers:** lead with them. Results are quantified (`+18% EBITDA`, `−31 cycle days`, `3.4x ROI`). Mono font for inline metrics.
- **Punctuation:** em-dashes and the occasional period for rhythm. Avoid exclamation marks.
- **Emoji:** none. The brand is premium and restrained — no emoji anywhere.
- **Avoid:** buzzwords ("synergy", "leverage" as a verb, "best-in-class"), hedging, and walls of text.

---

## Visual foundations

**Colour.** Black and gold do the heavy lifting. The signature look is an **ink surface** (`#0D0D0C`–`#232120`) with white type and gold accents; light sections use a **warm cream page** (`#F7F4EE`) with white cards. Neutrals are warm-tinted (not pure grey) so they sit naturally beside the gold. Gold is used sparingly — for accents, the bar motif, CTAs, key numbers, and one highlighted word in a headline — never as large fills of body area. Semantic colours (success/warning/error/info) are reserved for product UI states.

**Typography.** Display = **Jost** (geometric, matches the wordmark), weight 400–500, tight tracking on large sizes. Body = **Manrope**, 400–700. Headlines are big and confident (clamp up to ~88px on hero). The **eyebrow/overline** — wide-tracked uppercase with a leading gold bar — is the system's signature label and appears above most section headings.

**The gold bar motif.** Drawn straight from the wordmark's accent. It appears as: the leading bar in eyebrows, the top accent on cards (`accent` prop), section-step top rules, and dividers. It's the brand's most reusable graphic device — prefer it over inventing new ornament.

**Spacing & layout.** 4px base grid; generous, airy spacing supports the bold/high-contrast feel. Page gutter is fluid (`clamp(1.25rem, 5vw, 5rem)`). Max content width 1440px. Sections alternate ink/cream backgrounds for rhythm. Grids use `gap`, never margins between siblings.

**Corners.** Slightly rounded — the 4px family. Buttons & inputs `--radius-sm` (4px), cards `--radius-lg` (10px), pills/badges full. Nothing is sharp-square, nothing is pill-soft except deliberate pills.

**Borders.** Hairline `1px` dividers — warm grey on light (`--border-subtle/-default`), translucent white on dark (`--border-ondark`). A `3px` gold rule is the accent border (card top-bar, step rules).

**Shadows.** Quiet and warm-tinted (rgba of ink, not pure black). A 5-step elevation scale for light surfaces; dark surfaces mostly rely on borders + a single deep `--shadow-ondark` for lifted elements. A dedicated **gold glow** (`--glow-gold`) exists for emphasis on dark.

**Motion.** Crisp and confident — **no bounce**. Standard ease is `cubic-bezier(0.22,1,0.36,1)`; durations 140/220/400ms. Cards lift `-3px` with a shadow on hover. Buttons darken on hover (`gold → gold-600`) and nudge `1px` down on press. Accordion uses a grid-rows height transition; the toggle rotates a gold plus into a cross.

**Hover / press states.** Hover = darker fill (filled buttons), subtle tint (ghost/outline), or lift (cards). Links lighten toward white on dark. Press = slight downward translate, no scale-bounce. Focus = `--ring` (3px translucent-gold ring).

**Imagery.** The brand leans **typographic** — most of the marketing surface is type + the gold bar on ink, no photography required. Where photography is used it should be **warm-toned, editorial, real** (people in rooms, not stock handshakes). Avatars fall back to gold-on-ink initials. No illustration system, no gradient meshes, no decorative blobs — the one permitted "glow" is a faint radial gold light behind the hero.

**Transparency & blur.** Used sparingly: the sticky nav is `rgba(13,13,12,0.85)` + `backdrop-filter: blur(12px)`; on-dark borders are translucent white. Otherwise surfaces are solid.

---

## Iconography

- **Style:** thin-stroke (1.6px) line icons on a 24px grid, rounded caps/joins — matching the geometric, confident feel. Drawn inline as SVG `<path>` in the UI kit (see `SiteParts2.jsx` `SERVICE_ICONS`).
- **Recommended set:** **[Lucide](https://lucide.dev)** — its 1.5–2px stroke, rounded-join geometry matches the system exactly. Use it via CDN/npm in production for full coverage. The few icons hand-coded here (arrow, service glyphs, check, plus, menu, caret) follow Lucide's conventions so the set stays consistent when expanded.
- **Colour:** icons are gold (`--brand`) for accents/feature glyphs, or inherit text colour in UI chrome. On gold fills they go ink.
- **No emoji. No unicode-glyph icons.** Use real SVG only.
- **Logo assets** live in `assets/` (see Index). The `Logo` component reconstructs the wordmark typographically for crisp scaling; use the raster files for pixel-exact placements (footers, OG images, favicons).

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import this). `@import`s all token files.
- `readme.md` — this guide.
- `SKILL.md` — portable Agent-Skill wrapper.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css`

**`assets/`**
- `mavico-logo-blackbg.webp` — master logo (white+gold on black).
- `mavico-logo-light.png` — transparent, light marks → for **dark** backgrounds.
- `mavico-logo-dark.png` — transparent, ink marks → for **light** backgrounds.

**`components/`** (13 components — namespace `MavicoDesignSystem_269fd1`)
- `core/` — `Button`, `Eyebrow`, `Badge`, `Card`, `Stat`, `Avatar`, `Accordion`, `Logo`
- `forms/` — `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Effects, Brand) shown in the Design System tab.

**`ui_kits/website/`** — full interactive Mavico marketing homepage (`index.html` + 3 section files). Also registered as a Starting Point.

---

## Using the system

Link the stylesheet and read components off the global namespace:

```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Eyebrow, Card } = window.MavicoDesignSystem_269fd1;
</script>
```

Build on the tokens (`var(--brand)`, `var(--surface-ink)`, `var(--font-display)`, …) rather than raw hex so themes stay consistent.
