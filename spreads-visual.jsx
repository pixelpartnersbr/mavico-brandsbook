/* ============================================================
   MAVICO Brand Book — visual spreads (bilingual via global t())
   color · color usage · typography · graphic language · imagery
   ============================================================ */
const { Logo: _Logo, Eyebrow: _Eyebrow, Badge: _Badge, Button: _Button, Card: _Card } = window.MavicoDesignSystem_269fd1;

const VISUAL_SPREADS = [
  /* ---------------- 05 · COLOR — PALETTE ---------------- */
  {
    section: { en: "03 — Color", fr: "03 — Couleur" }, tone: "ink",
    render: ({ SpreadHead, Swatch, SpecRow }) => (
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "0.78fr 1.4fr", gap: "56px", alignItems: "center" }}>
        <div>
          <SpreadHead kicker={t("03 — Color", "03 — Couleur")} size={48}
            title={<>{t("Black, gold,", "Noir, or,")} <Gold>{t("warm.", "chaleur.")}</Gold></>}
            lead={t(
              "Black and gold do the heavy lifting. Neutrals are warm-tinted — never pure grey — so they sit naturally beside the gold. Gold stays an accent, never a fill of body area.",
              "Le noir et l'or font le gros du travail. Les neutres sont teintés de chaud — jamais d'un gris pur — pour s'accorder naturellement à l'or. L'or reste un accent, jamais un aplat de grande surface."
            )} />
          <div style={{ marginTop: "28px", display: "grid", gap: "0" }}>
            <SpecRow k={t("Brand gold", "Or de marque")} v="#C38F2B" />
            <SpecRow k={t("Ink (logo bg)", "Encre (fond du logo)")} v="#0D0D0C" />
            <SpecRow k={t("Warm paper", "Papier chaud")} v="#F7F4EE" />
          </div>
        </div>
        <div style={{ display: "grid", gap: "22px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            <Swatch hex="#C38F2B" name={t("Brand Gold", "Or de marque")} token="--brand" role="500" onDark big />
            <Swatch hex="#0D0D0C" name={t("Ink", "Encre")} token="--ink-950" role="950" onDark big />
            <Swatch hex="#F7F4EE" name={t("Warm Paper", "Papier chaud")} token="--ink-50" role="50" onDark big />
          </div>
          <div>
            <div className="mono-label" style={{ marginBottom: "12px" }}>{t("Gold scale", "Échelle d'or")}</div>
            <div style={{ display: "flex", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border-ondark)" }}>
              {[["50", "#FAF4E6"], ["100", "#F3E6C4"], ["200", "#E8CF94"], ["300", "#DBB662"], ["400", "#CFA23F"], ["500", "#C38F2B"], ["600", "#A5761F"], ["700", "#835C18"], ["800", "#5F4212"], ["900", "#3D2A0C"]].map(([n, h]) => (
                <div key={n} style={{ flex: 1, height: "56px", background: h, display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "4px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: Number(n) >= 400 ? "#fff" : "#0D0D0C" }}>{n}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mono-label" style={{ marginBottom: "12px" }}>{t("Ink / warm-neutral scale", "Échelle encre / neutres chauds")}</div>
            <div style={{ display: "flex", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--border-ondark)" }}>
              {[["950", "#0D0D0C"], ["900", "#161514"], ["800", "#232120"], ["700", "#34312E"], ["600", "#4A4641"], ["500", "#6B655E"], ["400", "#918A80"], ["300", "#B8B1A6"], ["200", "#D9D3C8"], ["100", "#ECE8E0"], ["50", "#F7F4EE"]].map(([n, h]) => (
                <div key={n} style={{ flex: 1, height: "56px", background: h, display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "4px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: Number(n) >= 400 ? "#fff" : "#0D0D0C" }}>{n}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="mono-label" style={{ marginBottom: "12px" }}>{t("Semantic — reserved for product UI states", "Sémantiques — réservées aux états d'interface")}</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }}>
              {[[t("Success", "Succès"), "#3A8C5F"], [t("Warning", "Avertissement"), "#D98324"], [t("Error", "Erreur"), "#C5403B"], ["Info", "#3D6FB0"]].map(([n, h]) => (
                <div key={h} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ width: "22px", height: "22px", borderRadius: "5px", background: h, flex: "none" }} />
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "12.5px", fontWeight: 600, color: "var(--white)" }}>{n}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", color: "var(--ink-400)" }}>{h}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  /* ---------------- 06 · COLOR — USAGE ---------------- */
  {
    section: { en: "03 — Color", fr: "03 — Couleur" }, tone: "paper",
    render: ({ SpreadHead }) => (
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
        <div>
          <SpreadHead kicker={t("03 — Color · Application", "03 — Couleur · Application")} size={46}
            title={<>{t("How the color", "L'usage de la")} <Gold>{t("behaves.", "couleur.")}</Gold></>}
            lead={t(
              "Two contexts carry the brand: the signature ink surface with white type and gold accents, and warm-cream sections with white cards. Alternate them for rhythm.",
              "Deux contextes portent la marque : la surface encre signature, avec texte blanc et accents dorés, et les sections crème chaud à cartes blanches. On les alterne pour le rythme."
            )} />
          <div style={{ marginTop: "28px", display: "grid", gap: "14px" }}>
            {[[t("Ink surfaces", "Surfaces encre"), t("The signature look — hero, headers, deep sections.", "Le look signature — bannières, en-têtes, sections profondes.")],
              [t("Cream sections", "Sections crème"), t("Warm paper with white cards for breathing room.", "Papier chaud et cartes blanches pour respirer.")],
              [t("Gold — sparingly", "L'or — avec parcimonie"), t("Accents, the bar, CTAs, key numbers, one word in a headline.", "Accents, la barre, boutons d'action, chiffres clés, un mot d'un titre.")],
              [t("Never", "Jamais"), t("Gold as a large body fill, or pure-grey neutrals.", "L'or en grand aplat, ni des neutres gris purs.")]].map(([ti, d]) => (
              <div key={ti} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--brand)", marginTop: "6px", flex: "none" }} />
                <div>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 500, color: "var(--ink-950)" }}>{ti}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--ink-600)" }}> — {d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gap: "16px" }}>
          <div style={{ background: "var(--ink-950)", borderRadius: "12px", padding: "30px", position: "relative", overflow: "hidden", minHeight: "150px" }}>
            <div aria-hidden="true" style={{ position: "absolute", top: "-60px", right: "-40px", width: "260px", height: "260px", background: "radial-gradient(circle, rgba(195,143,43,0.22), transparent 64%)" }} />
            <span className="mono-label" style={{ color: "var(--brand)", position: "relative" }}>{t("Ink + gold accent", "Encre + accent doré")}</span>
            <div className="h-display" style={{ fontSize: "30px", color: "#fff", marginTop: "12px", position: "relative" }}>{t("Tell us where it", "Dites-nous où ça")} <span className="gold">{t("hurts.", "coince.")}</span></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "16px" }}>
            <div style={{ background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "12px", padding: "24px", boxShadow: "var(--shadow-sm)" }}>
              <span style={{ display: "inline-block", width: "26px", height: "3px", background: "var(--brand)" }} />
              <div className="h-display" style={{ fontSize: "22px", color: "var(--ink-950)", marginTop: "14px" }}>{t("Cream + white card", "Crème + carte blanche")}</div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--ink-600)", marginTop: "8px" }}>{t("Calm, editorial, premium.", "Calme, éditorial, haut de gamme.")}</p>
            </div>
            <div style={{ background: "var(--brand)", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-950)" }}>{t("Gold fill", "Aplat doré")}</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 500, color: "var(--ink-950)" }}>{t("Ink text on gold", "Texte encre sur or")}</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  /* ---------------- 07 · TYPOGRAPHY ---------------- */
  {
    section: { en: "04 — Typography", fr: "04 — Typographie" }, tone: "ink",
    render: ({ SpreadHead, SpecRow }) => (
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "0.85fr 1.3fr", gap: "56px", alignItems: "center" }}>
        <div>
          <SpreadHead kicker={t("04 — Typography", "04 — Typographie")} size={46}
            title={<>{t("Geometric &", "Géométrique et")} <Gold>{t("exact.", "exact.")}</Gold></>}
            lead={t(
              "Jost carries the display voice — geometric, Futura-family, matched to the wordmark. Manrope handles body. JetBrains Mono carries data, labels, and eyebrows.",
              "Jost porte la voix d'affichage — géométrique, de la famille Futura, accordée au logotype. Manrope assure le corps de texte. JetBrains Mono porte les données, les étiquettes et les surtitres."
            )} />
          <div style={{ marginTop: "26px", display: "grid", gap: "0" }}>
            <SpecRow k={t("Display", "Affichage")} v="Jost · 300–500" />
            <SpecRow k={t("Body", "Corps")} v="Manrope · 400–700" />
            <SpecRow k={t("Mono / labels", "Mono / étiquettes")} v="JetBrains Mono" />
            <SpecRow k={t("Eyebrow tracking", "Interlettrage surtitre")} v={t("0.22em · UPPER", "0,22em · CAPS")} />
          </div>
        </div>
        <div style={{ display: "grid", gap: "20px" }}>
          <div style={{ borderBottom: "1px solid var(--border-ondark)", paddingBottom: "18px" }}>
            <span className="mono-label" style={{ color: "var(--brand)" }}>{t("Jost · Display", "Jost · Affichage")}</span>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "76px", lineHeight: 0.95, letterSpacing: "-0.03em", color: "#fff", marginTop: "8px" }}>Aa Gg Mavico</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
            <div>
              <span className="mono-label">{t("Manrope · Body", "Manrope · Corps")}</span>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.55, color: "var(--ink-200)", marginTop: "10px" }}>
                {t(
                  "Sharp thinking, delivered plainly. We build the commercial, operational, and contract frameworks that drive sustainable performance.",
                  "Une pensée affûtée, exprimée simplement. Nous bâtissons les cadres commerciaux, opérationnels et contractuels d'une performance durable."
                )}
              </p>
            </div>
            <div>
              <span className="mono-label">{t("JetBrains Mono · Data", "JetBrains Mono · Données")}</span>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "15px", lineHeight: 1.7, color: "var(--ink-200)", marginTop: "10px" }}>
                {t("+31% revenue", "+31 % revenus")}<br />{t("−12 cycle days", "−12 jours de cycle")}<br />{t("3.4× ROI", "3,4× RCI")}
              </div>
            </div>
          </div>
          <div>
            <span className="mono-label" style={{ marginBottom: "10px", display: "block" }}>{t("Type scale", "Échelle typographique")}</span>
            <div style={{ display: "flex", alignItems: "baseline", gap: "18px", flexWrap: "wrap" }}>
              {[["88", 40], ["64", 32], ["48", 26], ["36", 22], ["28", 19], ["22", 16], ["16", 14]].map(([px, render]) => (
                <span key={px} style={{ display: "inline-flex", alignItems: "baseline", gap: "5px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: render + "px", color: "#fff" }}>Ag</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--ink-400)" }}>{px}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  /* ---------------- 08 · GRAPHIC LANGUAGE ---------------- */
  {
    section: { en: "05 — Graphic language", fr: "05 — Langage graphique" }, tone: "soft",
    render: ({ SpreadHead }) => {
      const Icon = ({ d }) => (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
      );
      const icons = [
        <path d="M3 3v18h18M7 14l4-4 3 3 5-6" />,
        <g><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></g>,
        <g><path d="M4 7h16M4 12h16M4 17h10" /></g>,
        <g><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 12l2 2 4-4" /></g>,
        <g><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M12 12v9" /></g>,
        <g><path d="M3 12h18M12 3v18" /><circle cx="12" cy="12" r="4" /></g>,
      ];
      return (
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
          <div>
            <SpreadHead kicker={t("05 — Graphic language", "05 — Langage graphique")} size={46}
              title={<>{t("The gold", "La barre")} <Gold>{t("bar.", "dorée.")}</Gold></>}
              lead={t(
                "Drawn straight from the wordmark's accent, the bar is the most reusable device in the system. It leads eyebrows, tops cards, rules section steps, and divides content.",
                "Tirée directement de l'accent du logotype, la barre est l'élément le plus réutilisable du système. Elle ouvre les surtitres, coiffe les cartes, souligne les étapes et divise le contenu."
              )} />
            <div style={{ marginTop: "30px", display: "grid", gap: "18px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ width: "26px", height: "3px", background: "var(--brand)" }} />
                <span className="mono-label" style={{ color: "var(--brand)" }}>{t("Eyebrow lead bar", "Barre de surtitre")}</span>
              </div>
              <div style={{ background: "var(--ink-800)", border: "1px solid var(--border-ondark)", borderTop: "3px solid var(--brand)", borderRadius: "0 0 10px 10px", padding: "18px 20px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 500, color: "#fff" }}>{t("Card top accent", "Accent haut de carte")}</span>
              </div>
              <div style={{ borderLeft: "3px solid var(--brand)", paddingLeft: "18px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 500, color: "#fff" }}>{t("Step / quote left rule", "Filet gauche d'étape / citation")}</span>
              </div>
            </div>
          </div>
          <div>
            <span className="mono-label" style={{ marginBottom: "16px", display: "block" }}>{t("Iconography — Lucide-style · 1.6px stroke · gold", "Iconographie — style Lucide · trait 1,6 px · or")}</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "14px" }}>
              {icons.map((d, i) => (
                <div key={i} style={{ background: "var(--ink-950)", border: "1px solid var(--border-ondark)", borderRadius: "10px", height: "104px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon d={d} />
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "13.5px", lineHeight: 1.5, color: "var(--ink-300)", marginTop: "18px" }}>
              {t(
                "Thin-stroke line icons on a 24px grid, rounded caps and joins. Gold for accents and feature glyphs; inherit text color in UI chrome. No emoji, no unicode-glyph icons — real SVG only.",
                "Icônes linéaires à trait fin sur grille de 24 px, extrémités et jonctions arrondies. Or pour les accents et les pictogrammes; couleur du texte dans l'interface. Pas d'émojis ni de glyphes Unicode — du vrai SVG seulement."
              )}
            </p>
          </div>
        </div>
      );
    },
  },

  /* ---------------- 09 · IMAGERY ---------------- */
  {
    section: { en: "06 — Imagery", fr: "06 — Imagerie" }, tone: "ink",
    render: ({ SpreadHead, SpecRow }) => (
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "0.85fr 1.3fr", gap: "56px", alignItems: "center" }}>
        <div>
          <SpreadHead kicker={t("06 — Imagery", "06 — Imagerie")} size={46}
            title={<>{t("Warm, editorial,", "Chaleureuse, éditoriale,")} <Gold>{t("real.", "vraie.")}</Gold></>}
            lead={t(
              "The brand leans typographic — most surfaces are type and the gold bar on ink. Where photography appears it should be warm-toned and real: people in rooms, on the deals, on the ground. Never stock handshakes.",
              "La marque est avant tout typographique — la plupart des surfaces sont du texte et la barre dorée sur encre. Quand il y a de la photo, elle doit être chaleureuse et vraie : des gens dans la pièce, sur les ententes, sur le terrain. Jamais de poignées de main de banque d'images."
            )} />
          <div style={{ marginTop: "26px", display: "grid", gap: "0" }}>
            <SpecRow k={t("Treatment", "Traitement")} v={t("Warm · editorial", "Chaleureux · éditorial")} />
            <SpecRow k={t("Avoid", "À éviter")} v={t("Stock · gradients · blobs", "Banques d'images · dégradés · taches")} />
            <SpecRow k={t("Permitted glow", "Lueur permise")} v={t("Faint gold radial only", "Léger halo doré seulement")} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gridTemplateRows: "1fr 1fr", gap: "14px", height: "440px" }}>
          <image-slot id="bb-img-1" shape="rounded" radius="10" placeholder={t("Drop hero photo", "Déposez la photo principale")} style={{ display: "block", width: "100%", height: "100%", gridRow: "span 2", border: "1px solid var(--border-ondark)" }}></image-slot>
          <image-slot id="bb-img-2" shape="rounded" radius="10" placeholder={t("Drop photo", "Déposez une photo")} style={{ display: "block", width: "100%", height: "100%", border: "1px solid var(--border-ondark)" }}></image-slot>
          <image-slot id="bb-img-3" shape="rounded" radius="10" placeholder={t("Drop photo", "Déposez une photo")} style={{ display: "block", width: "100%", height: "100%", border: "1px solid var(--border-ondark)" }}></image-slot>
        </div>
      </div>
    ),
  },
];

window.VISUAL_SPREADS = VISUAL_SPREADS;
