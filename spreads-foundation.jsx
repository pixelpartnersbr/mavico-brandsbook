/* ============================================================
   MAVICO Brand Book — foundation spreads (bilingual via t())
   cover · contents · positioning · logo construction · logo rules
   ============================================================ */
const { Logo, Eyebrow, Badge, Button, Card } = window.MavicoDesignSystem_269fd1;

function GoldBar({ w = 26, h = 3, style = {} }) {
  return <span style={{ display: "inline-block", width: w + "px", height: h + "px", background: "var(--brand)", ...style }} />;
}

const FOUNDATION_SPREADS = [
  /* ---------------- 00 · COVER ---------------- */
  {
    section: { en: "Cover", fr: "Couverture" }, tone: "ink",
    render: () => (
      <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: "30px" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-120px", right: "-120px", width: "620px", height: "620px", background: "radial-gradient(circle, rgba(195,143,43,0.20), transparent 62%)", pointerEvents: "none" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative" }}>
          <span className="mono-label">{t("Sports Operations Consulting", "Conseil en opérations sportives")}</span>
          <span className="mono-label">{t("Edition 01 — 2026", "Édition 01 — 2026")}</span>
        </div>
        <div style={{ position: "relative" }}>
          <Logo tone="light" size={104} />
          <h1 className="h-display" style={{ fontSize: "150px", lineHeight: 0.92, marginTop: "26px", letterSpacing: "-0.035em" }}>
            {t("Brand", "Guide")}<br /><span className="gold">{t("Book.", "de marque.")}</span>
          </h1>
        </div>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <p className="lead" style={{ maxWidth: "46ch", fontSize: "19px" }}>
            {t(
              "The single source of truth for how Mavico looks, sounds, and shows up — the logo, the gold bar, the type, the voice, and the rules that keep it sharp.",
              "La référence unique pour l'apparence, la voix et la présence de Mavico — le logo, la barre dorée, la typographie, le ton et les règles qui gardent la marque nette."
            )}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <GoldBar w={64} h={4} />
            <span className="mono-label" style={{ color: "var(--brand)" }}>{t("Clarity in complexity", "La clarté dans la complexité")}</span>
          </div>
        </div>
      </div>
    ),
  },

  /* ---------------- 01 · CONTENTS ---------------- */
  {
    section: { en: "Contents", fr: "Sommaire" }, tone: "soft",
    render: ({ Kicker }) => {
      const rows = [
        ["01", t("Foundation", "Fondation"), t("Positioning, the idea, and the principles that govern every decision.", "Le positionnement, l'idée et les principes qui guident chaque décision.")],
        ["02", "Logo", t("Anatomy, construction, clear space, minimum size, and misuse.", "Anatomie, construction, zone de protection, taille minimale et usages à proscrire.")],
        ["03", t("Color", "Couleur"), t("The black-and-gold system, warm neutrals, and how to apply them.", "Le système noir et or, les neutres chauds et leur application.")],
        ["04", t("Typography", "Typographie"), t("Jost, Manrope, and JetBrains Mono — the type voice and scale.", "Jost, Manrope et JetBrains Mono — la voix typographique et l'échelle.")],
        ["05", t("Graphic language", "Langage graphique"), t("The gold-bar motif and the icon style that extends it.", "Le motif de la barre dorée et le style d'icônes qui le prolonge.")],
        ["06", t("Imagery", "Imagerie"), t("Warm, editorial, real — the photography direction.", "Chaleureuse, éditoriale, vraie — la direction photo.")],
        ["07", t("Voice & tone", "Voix et ton"), t("Plain-spoken and senior. How Mavico writes.", "Direct et expérimenté. La façon d'écrire de Mavico.")],
        ["08", t("Components & UI", "Composants et UI"), t("The interface kit built from the system.", "La trousse d'interface issue du système.")],
        ["09", t("Layout & spacing", "Mise en page"), t("Grid, gutters, rhythm, and the 4px base.", "Grille, gouttières, rythme et base de 4 px.")],
        ["10", "Applications", t("The brand in the world — cards, social, signage.", "La marque dans le monde — cartes, réseaux sociaux, affichage.")],
        ["11", t("Governance", "Gouvernance"), t("Stewardship, do/don't, and where to get assets.", "Intendance, à faire / à éviter, et où trouver les fichiers.")],
      ];
      return (
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "0.85fr 1.25fr", gap: "64px" }}>
          <div>
            <Kicker>{t("Inside", "Sommaire")}</Kicker>
            <H size={62} style={{ marginTop: "22px" }}>{t("What's in", "Ce qu'on y")} <span className="gold">{t("here.", "trouve.")}</span></H>
            <p className="lead" style={{ marginTop: "20px", fontSize: "17px" }}>
              {t(
                "Eleven sections, each one a single page you can lift, share, or print. Read it front to back, or jump to what you need.",
                "Onze sections, chacune sur une seule page à extraire, partager ou imprimer. Lisez du début à la fin, ou allez droit au but."
              )}
            </p>
            <div style={{ marginTop: "28px" }}><GoldBar w={80} h={4} /></div>
          </div>
          <div style={{ alignSelf: "center" }}>
            {rows.map(([n, ti, d], i) => (
              <div key={n} style={{ display: "grid", gridTemplateColumns: "52px 1fr", gap: "20px", alignItems: "baseline", padding: "12px 0", borderBottom: i < rows.length - 1 ? "1px solid var(--border-ondark)" : "none" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--brand)" }}>{n}</span>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "18px", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 500, color: "var(--white)" }}>{ti}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", color: "var(--ink-400)", textAlign: "right", maxWidth: "46ch" }}>{d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  /* ---------------- 02 · FOUNDATION / POSITIONING ---------------- */
  {
    section: { en: "01 — Foundation", fr: "01 — Fondation" }, tone: "ink",
    render: ({ SpreadHead }) => {
      const principles = [
        [t("Builders, not consultants", "Des bâtisseurs, pas des consultants"), t("We don't hand over a deck and leave. We install systems and stay until the discipline sticks.", "On ne remet pas une présentation pour ensuite disparaître. On installe des systèmes et on reste jusqu'à ce que la discipline s'ancre.")],
        [t("Plain over polished", "Clair plutôt que clinquant"), t("Sharp thinking, delivered plainly. No jargon, no thick decks — a method that moves.", "Une pensée affûtée, exprimée simplement. Sans jargon ni présentations interminables — une méthode qui avance.")],
        [t("Numbers up front", "Les chiffres d'abord"), t("Every claim is quantified. Results lead the sentence, not the footnote.", "Chaque affirmation est chiffrée. Les résultats ouvrent la phrase, pas la note de bas de page.")],
        [t("Senior, in the room", "De l'expérience, dans la pièce"), t("Real experience on the deals, the operations, and the contracts — not borrowed frameworks.", "Une vraie expérience des ententes, des opérations et des contrats — pas des cadres empruntés.")],
      ];
      return (
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          <div>
            <SpreadHead kicker={t("The idea", "L'idée")} size={50}
              title={<>{t("Clarity in", "La clarté dans la")} <Gold>{t("complexity.", "complexité.")}</Gold></>}
              lead={t(
                "Mavico builds the commercial, operational, and contract infrastructure that sports organizations win with. The brand has to feel like the work: confident, exact, and unmistakably premium — black and gold, geometric, and quiet where it counts.",
                "Mavico bâtit l'infrastructure commerciale, opérationnelle et contractuelle qui fait gagner les organisations sportives. La marque doit refléter le travail : assurée, précise et résolument haut de gamme — noir et or, géométrique, et sobre là où il le faut."
              )} />
            <div style={{ marginTop: "34px", display: "flex", gap: "40px" }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "44px", fontWeight: 500, color: "var(--white)", letterSpacing: "-0.02em" }}>10<span className="gold">+</span></div>
                <div className="mono-label" style={{ marginTop: "6px" }}>{t("Years in sport", "Années dans le sport")}</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "44px", fontWeight: 500, color: "var(--white)", letterSpacing: "-0.02em" }}>EN<span className="gold">/</span>FR</div>
                <div className="mono-label" style={{ marginTop: "6px" }}>{t("Fully bilingual", "Entièrement bilingue")}</div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {principles.map(([ti, d]) => (
              <div key={ti} style={{ background: "var(--ink-800)", border: "1px solid var(--border-ondark)", borderRadius: "10px", padding: "22px", position: "relative" }}>
                <GoldBar w={28} h={3} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: "19px", fontWeight: 500, color: "var(--white)", margin: "16px 0 8px", lineHeight: 1.15 }}>{ti}</div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", lineHeight: 1.5, color: "var(--ink-300)", margin: 0 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  /* ---------------- 03 · LOGO — CONSTRUCTION ---------------- */
  {
    section: { en: "02 — Logo", fr: "02 — Logo" }, tone: "ink",
    render: ({ SpreadHead, SpecRow }) => (
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
        <div>
          <SpreadHead kicker={t("02 — Logo · Anatomy", "02 — Logo · Anatomie")} size={46}
            title={<>{t("The wordmark & the", "Le logotype et la")} <Gold>{t("bar.", "barre.")}</Gold></>}
            lead={t(
              "A wide geometric-sans wordmark with a single gold bar replacing the I. The bar is the brand's signature — a confident vertical accent that recurs across the whole system.",
              "Un logotype en sans-serif géométrique large, où une seule barre dorée remplace le « I ». La barre est la signature de la marque — un accent vertical assuré qui revient dans tout le système."
            )} />
          <div style={{ marginTop: "30px", display: "grid", gap: "0" }}>
            <SpecRow k={t("Wordmark type", "Type du logotype")} v="Jost · Medium" />
            <SpecRow k={t("Letter tracking", "Interlettrage")} v={t("+0.12em (wider)", "+0,12em (élargi)")} />
            <SpecRow k="Accent" v={t("Gold bar — the “I”", "Barre dorée — le « I »")} />
            <SpecRow k={t("Casing", "Casse")} v={t("MAVICO — all caps", "MAVICO — capitales")} />
          </div>
        </div>
        <div>
          <div style={{ background: "var(--ink-900)", border: "1px solid var(--border-ondark)", borderRadius: "12px", padding: "54px 40px", position: "relative", overflow: "hidden" }}>
            <div aria-hidden="true" style={{ position: "absolute", inset: "54px 40px", borderLeft: "1px dashed rgba(195,143,43,0.4)", borderRight: "1px dashed rgba(195,143,43,0.4)" }} />
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
              <Logo tone="light" size={64} />
            </div>
            <div style={{ position: "relative", display: "flex", justifyContent: "center", marginTop: "30px" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--brand)" }}>{t("← cap-height grid · bar = stroke width ×1 →", "← grille hauteur de capitale · barre = largeur de fût ×1 →")}</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px" }}>
            <div style={{ background: "var(--ink-50)", borderRadius: "10px", padding: "26px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
              <Logo tone="dark" size={30} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-500)" }}>{t("On light", "Sur clair")}</span>
            </div>
            <div style={{ background: "var(--ink-950)", border: "1px solid var(--border-ondark)", borderRadius: "10px", padding: "26px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
              <Logo tone="light" size={30} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-400)" }}>{t("On ink", "Sur encre")}</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  /* ---------------- 04 · LOGO — CLEAR SPACE / MISUSE ---------------- */
  {
    section: { en: "02 — Logo", fr: "02 — Logo" }, tone: "paper",
    render: ({ SpreadHead }) => {
      const dont = [
        t("Don't recolor the wordmark or the bar", "Ne pas recolorer le logotype ou la barre"),
        t("Don't stretch, condense, or skew", "Ne pas étirer, condenser ni incliner"),
        t("Don't add shadows, glows, or outlines", "Ne pas ajouter d'ombres, de lueurs ni de contours"),
        t("Don't rotate or place on busy imagery", "Ne pas pivoter ni poser sur une image chargée"),
        t("Don't recreate it in another typeface", "Ne pas le recréer dans une autre police"),
        t("Don't crowd it — respect the clear space", "Ne pas l'encombrer — respecter la zone de protection"),
      ];
      return (
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <SpreadHead kicker={t("02 — Logo · Rules", "02 — Logo · Règles")} size={46}
              title={<>{t("Clear space &", "Zone de protection et")} <Gold>{t("misuse.", "usages.")}</Gold></>}
              lead={t(
                "Give the mark room and keep it pristine. The clear space on every side equals the cap-height of the wordmark. Never reproduce it below the minimum size.",
                "Donnez de l'air au logo et gardez-le impeccable. La zone de protection sur chaque côté équivaut à la hauteur de capitale du logotype. Ne jamais le reproduire sous la taille minimale."
              )} />
            <div style={{ marginTop: "28px", display: "flex", gap: "32px" }}>
              <div style={{ background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "20px 24px", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "30px", fontWeight: 500, color: "var(--ink-950)" }}>24<span className="gold">px</span></div>
                <div className="mono-label" style={{ marginTop: "4px" }}>{t("Min · digital", "Min · numérique")}</div>
              </div>
              <div style={{ background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "20px 24px", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "30px", fontWeight: 500, color: "var(--ink-950)" }}>14<span className="gold">mm</span></div>
                <div className="mono-label" style={{ marginTop: "4px" }}>{t("Min · print", "Min · impression")}</div>
              </div>
            </div>
            <div style={{ marginTop: "26px", background: "var(--white)", border: "1px dashed var(--border-default)", borderRadius: "10px", padding: "30px", display: "inline-flex", position: "relative" }}>
              <div style={{ position: "absolute", inset: "10px", border: "1px dashed rgba(195,143,43,0.6)", borderRadius: "6px" }} />
              <Logo tone="dark" size={28} />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            {dont.map((d) => (
              <div key={d} style={{ background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "10px", padding: "18px", display: "flex", gap: "12px", alignItems: "flex-start", boxShadow: "var(--shadow-xs)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--error-500)" strokeWidth="2" strokeLinecap="round" style={{ flex: "none", marginTop: "1px" }}><path d="M6 6l12 12M18 6L6 18" /></svg>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.4, color: "var(--ink-800)" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      );
    },
  },
];

window.FOUNDATION_SPREADS = FOUNDATION_SPREADS;
