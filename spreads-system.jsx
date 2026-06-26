/* ============================================================
   MAVICO Brand Book — system spreads (bilingual via global t())
   voice · components & UI · layout & spacing · applications · governance
   ============================================================ */
const DSB = window.MavicoDesignSystem_269fd1;
const { Logo, Eyebrow, Badge, Button, Card, Stat, Input, Select, Checkbox, Switch, Accordion } = DSB;

const SYSTEM_SPREADS = [
  /* ---------------- 10 · VOICE & TONE ---------------- */
  {
    section: { en: "07 — Voice & tone", fr: "07 — Voix et ton" }, tone: "paper",
    render: ({ SpreadHead }) => {
      const says = [
        t("Clarity in complexity.", "La clarté dans la complexité."),
        t("No thick decks. A method that moves.", "Pas de présentations interminables. Une méthode qui avance."),
        t("Tell us where it hurts.", "Dites-nous où ça coince."),
        t("Senior people, in the room.", "Des gens d'expérience, dans la pièce."),
      ];
      const pairs = [
        [t("Say", "À dire"), t("Don't say", "À ne pas dire")],
        [t("We build the revenue cadence.", "Nous installons la cadence des revenus."), t("We leverage synergistic best-in-class solutions.", "Nous misons sur des solutions synergiques de calibre mondial.")],
        [t("+31% sponsorship revenue.", "+31 % de revenus de commandites."), t("Significant revenue uplift potential.", "Potentiel d'augmentation significative des revenus.")],
        [t("We'll tell you honestly if there's a fit.", "On vous dira honnêtement si le courant passe."), t("We'd love to explore a partnership opportunity!", "Nous adorerions explorer une occasion de partenariat!")],
      ];
      return (
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
          <div>
            <SpreadHead kicker={t("07 — Voice & tone", "07 — Voix et ton")} size={46}
              title={<>{t("Plain-spoken,", "Direct,")} <Gold>{t("senior.", "expérimenté.")}</Gold></>}
              lead={t(
                "The brand sounds like a partner talking, not a brochure. First-person plural to second person. Short declarative sentences. Confident claims backed by numbers. Direct, a little blunt — never salesy.",
                "La marque parle comme un partenaire, pas comme une brochure. Du « nous » au « vous ». Des phrases courtes et affirmatives. Des affirmations assurées, appuyées par des chiffres. Direct, un brin cassant — jamais racoleur."
              )} />
            <div style={{ marginTop: "26px", display: "grid", gap: "10px" }}>
              {says.map((s) => (
                <div key={s} style={{ borderLeft: "3px solid var(--brand)", paddingLeft: "16px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 500, color: "var(--ink-950)", lineHeight: 1.2 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "var(--white)", border: "1px solid var(--border-subtle)", borderRadius: "12px", padding: "10px 26px 18px", boxShadow: "var(--shadow-sm)" }}>
            {pairs.map(([a, b], i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", padding: "16px 0", borderBottom: i < pairs.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
                {i === 0 ? (
                  <React.Fragment>
                    <span className="mono-label" style={{ color: "var(--success-600)" }}>✓ {a}</span>
                    <span className="mono-label" style={{ color: "var(--error-600)" }}>✕ {b}</span>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--ink-900)", lineHeight: 1.4 }}>{a}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--ink-400)", lineHeight: 1.4, textDecoration: "line-through", textDecorationColor: "rgba(197,64,59,0.5)" }}>{b}</span>
                  </React.Fragment>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    },
  },

  /* ---------------- 11 · COMPONENTS & UI ---------------- */
  {
    section: { en: "08 — Components & UI", fr: "08 — Composants et UI" }, tone: "ink",
    render: ({ SpreadHead, Arrow }) => (
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "0.82fr 1.4fr", gap: "52px", alignItems: "center" }}>
        <div>
          <SpreadHead kicker={t("08 — Components", "08 — Composants")} size={46}
            title={<>{t("One kit, built", "Une trousse,")} <Gold>{t("in.", "intégrée.")}</Gold></>}
            lead={t(
              "Every interface is composed from the same component set — buttons, cards, badges, stats, inputs, and disclosures — so the product and the marketing feel like one brand.",
              "Chaque interface est composée de la même trousse — boutons, cartes, étiquettes, statistiques, champs et accordéons — pour que le produit et le marketing ne fassent qu'une marque."
            )} />
          <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Button variant="primary" size="md" iconRight={<Arrow s={14} />}>{t("Book a call", "Réserver un appel")}</Button>
            <Button variant="outline" size="md" onDark>{t("Our work", "Nos réalisations")}</Button>
            <Button variant="ghost" size="md" onDark>{t("Learn more", "En savoir plus")}</Button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <Card accent padding="20px">
            <Eyebrow>{t("Strategy", "Stratégie")}</Eyebrow>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "19px", fontWeight: 500, color: "var(--ink-950)", margin: "12px 0 6px" }}>{t("Light card", "Carte claire")}</div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--ink-600)", margin: 0 }}>{t("Gold top bar, soft shadow, slightly rounded.", "Barre dorée en haut, ombre douce, coins légèrement arrondis.")}</p>
            <div style={{ marginTop: "14px", display: "flex", gap: "8px" }}>
              <Badge tone="brand">{t("Featured", "En vedette")}</Badge>
              <Badge tone="success" solid>{t("Live", "En direct")}</Badge>
            </div>
          </Card>
          <Card tone="ink" accent padding="20px" style={{ borderColor: "var(--border-ondark)" }}>
            <Eyebrow onDark>{t("Operations", "Opérations")}</Eyebrow>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "19px", fontWeight: 500, color: "#fff", margin: "12px 0 14px" }}>{t("Ink card", "Carte encre")}</div>
            <div style={{ display: "flex", gap: "26px" }}>
              <Stat value="240" suffix="+" label={t("Engagements", "Mandats")} onDark />
              <Stat value="3.4" suffix="x" label={t("Avg. ROI", "RCI moyen")} onDark />
            </div>
          </Card>
          <div style={{ background: "var(--ink-800)", border: "1px solid var(--border-ondark)", borderRadius: "10px", padding: "18px", display: "grid", gap: "10px" }}>
            <Input label={t("Work email", "Courriel professionnel")} placeholder="you@club.com" onDark />
            <div style={{ display: "flex", gap: "16px", alignItems: "center", marginTop: "2px" }}>
              <Checkbox label={t("Subscribe", "S'abonner")} defaultChecked onDark />
              <Switch label={t("Annual", "Annuel")} defaultChecked onDark />
            </div>
          </div>
          <div style={{ background: "var(--ink-800)", border: "1px solid var(--border-ondark)", borderRadius: "10px", padding: "8px 18px" }}>
            <Accordion onDark items={[
              { q: t("How do engagements start?", "Comment débute un mandat?"), a: t("With a free 30-minute discovery call — no pitch.", "Par un appel-découverte gratuit de 30 minutes — sans baratin.") },
              { q: t("Are you bilingual?", "Êtes-vous bilingues?"), a: t("Yes — every engagement in English or French.", "Oui — chaque mandat en français ou en anglais.") },
            ]} defaultOpen={0} />
          </div>
        </div>
      </div>
    ),
  },

  /* ---------------- 12 · LAYOUT & SPACING ---------------- */
  {
    section: { en: "09 — Layout & spacing", fr: "09 — Mise en page" }, tone: "soft",
    render: ({ SpreadHead, SpecRow }) => (
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "center" }}>
        <div>
          <SpreadHead kicker={t("09 — Layout & spacing", "09 — Mise en page et espacement")} size={46}
            title={<>{t("A 4px grid,", "Une grille de 4 px,")} <Gold>{t("airy.", "aérée.")}</Gold></>}
            lead={t(
              "Everything sits on a 4px base. Spacing is generous to support the bold, high-contrast feel. Max content width 1440px; fluid page gutters. Grids use gap — never margins between siblings.",
              "Tout repose sur une base de 4 px. L'espacement est généreux pour soutenir le ton affirmé et contrasté. Largeur de contenu max. 1440 px; gouttières fluides. Les grilles utilisent « gap » — jamais de marges entre éléments voisins."
            )} />
          <div style={{ marginTop: "26px", display: "grid", gap: "0" }}>
            <SpecRow k={t("Base grid", "Grille de base")} v="4px" />
            <SpecRow k={t("Max content width", "Largeur de contenu max.")} v="1440px" />
            <SpecRow k={t("Page gutter", "Gouttière de page")} v="clamp(20 / 5vw / 80)" />
            <SpecRow k={t("Card radius", "Rayon des cartes")} v="10px (--radius-lg)" />
            <SpecRow k={t("Button / input radius", "Rayon boutons / champs")} v="4px (--radius-sm)" />
          </div>
        </div>
        <div style={{ display: "grid", gap: "18px" }}>
          <div>
            <span className="mono-label" style={{ display: "block", marginBottom: "12px" }}>{t("Spacing scale (rem · px)", "Échelle d'espacement (rem · px)")}</span>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
              {[["1", 4], ["2", 8], ["3", 12], ["4", 16], ["5", 24], ["6", 32], ["7", 40], ["8", 48], ["9", 64]].map(([ti, px]) => (
                <div key={ti} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "20px", height: px + "px", background: "var(--brand)", borderRadius: "3px", opacity: 0.85 }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--ink-400)" }}>{px}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="mono-label" style={{ display: "block", marginBottom: "12px" }}>{t("12-column grid · gap, not margins", "Grille à 12 colonnes · gap, pas de marges")}</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gap: "6px" }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} style={{ height: "70px", background: "var(--ink-800)", border: "1px solid var(--border-ondark)", borderTop: "3px solid rgba(195,143,43,0.5)", borderRadius: "0 0 4px 4px" }} />
              ))}
            </div>
          </div>
          <div>
            <span className="mono-label" style={{ display: "block", marginBottom: "12px" }}>{t("Corner family", "Famille de rayons")}</span>
            <div style={{ display: "flex", gap: "12px" }}>
              {[["sm · 4", "4px"], ["md · 6", "6px"], ["lg · 10", "10px"], ["xl · 14", "14px"], ["full", "9999px"]].map(([ti, r]) => (
                <div key={ti} style={{ flex: 1, height: "48px", background: "var(--ink-800)", border: "1px solid var(--border-ondark)", borderRadius: r, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--ink-300)" }}>{ti}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },

  /* ---------------- 13 · APPLICATIONS ---------------- */
  {
    section: { en: "10 — Applications", fr: "10 — Applications" }, tone: "ink",
    render: ({ SpreadHead }) => (
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "0.8fr 1.4fr", gap: "52px", alignItems: "center" }}>
        <div>
          <SpreadHead kicker={t("10 — Applications", "10 — Applications")} size={46}
            title={<>{t("In the", "Dans le")} <Gold>{t("world.", "monde.")}</Gold></>}
            lead={t(
              "The system holds up across touchpoints — a business card, a social tile, signage. Same ink, same gold bar, same restraint.",
              "Le système tient sur tous les points de contact — carte d'affaires, tuile sociale, affichage. Même encre, même barre dorée, même retenue."
            )} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gridTemplateRows: "auto auto", gap: "16px" }}>
          <div style={{ background: "var(--ink-950)", border: "1px solid var(--border-ondark)", borderRadius: "10px", padding: "24px", aspectRatio: "1.75 / 1", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Logo tone="light" size={22} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 500, color: "#fff" }}>Stefano Maviglia</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brand)", marginTop: "4px" }}>{t("Founder", "Fondateur")}</div>
            </div>
          </div>
          <div style={{ background: "var(--brand)", borderRadius: "10px", padding: "24px", aspectRatio: "1 / 1", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-950)" }}>{t("The brief", "Le mémo")}</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 500, color: "var(--ink-950)", lineHeight: 1.05, letterSpacing: "-0.02em" }}>{t("Senior people, in the room.", "Des gens d'expérience, dans la pièce.")}</span>
          </div>
          <div style={{ gridColumn: "1 / -1", background: "var(--ink-50)", borderRadius: "10px", padding: "22px 26px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Logo tone="dark" size={24} />
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "40px", height: "3px", background: "var(--brand)" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-600)" }}>Ottawa · Montréal · Toronto</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  /* ---------------- 14 · GOVERNANCE / BACK ---------------- */
  {
    section: { en: "11 — Governance", fr: "11 — Gouvernance" }, tone: "ink",
    render: ({ SpreadHead, SpecRow }) => (
      <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: "24px" }}>
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-120px", left: "-100px", width: "520px", height: "520px", background: "radial-gradient(circle, rgba(195,143,43,0.16), transparent 64%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px" }}>
          <div>
            <SpreadHead kicker={t("11 — Governance", "11 — Gouvernance")} size={46}
              title={<>{t("Keep it", "Gardez-la")} <Gold>{t("sharp.", "nette.")}</Gold></>}
              lead={t(
                "The brand stays strong when it stays consistent. When in doubt, choose restraint: more space, less gold, plainer words.",
                "La marque reste forte quand elle reste cohérente. Dans le doute, choisissez la retenue : plus d'espace, moins d'or, des mots plus simples."
              )} />
          </div>
          <div style={{ alignSelf: "center", display: "grid", gap: "0" }}>
            <SpecRow k={t("Logo & assets", "Logo et fichiers")} v="brand-book/assets" />
            <SpecRow k={t("Design tokens", "Jetons de design")} v={t("_ds · CSS variables", "_ds · variables CSS")} />
            <SpecRow k={t("Fonts", "Polices")} v="Jost · Manrope · JetBrains Mono" />
            <SpecRow k={t("Steward", "Responsable")} v="solutions@mavico.ca" />
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid var(--border-ondark)", paddingTop: "26px" }}>
          <div>
            <Logo tone="light" size={34} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--ink-400)", marginTop: "12px", maxWidth: "44ch" }}>
              {t("© 2026 Mavico — Sports Operations Consulting. Bilingual EN / FR.", "© 2026 Mavico — Conseil en opérations sportives. Bilingue FR / EN.")}
            </p>
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 500, color: "#fff", letterSpacing: "-0.02em" }}>{t("Clarity in", "La clarté dans la")} <span className="gold">{t("complexity.", "complexité.")}</span></span>
        </div>
      </div>
    ),
  },
];

window.SYSTEM_SPREADS = SYSTEM_SPREADS;
