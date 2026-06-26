/* ============================================================
   MAVICO Brand Book — core (scaler, Spread chrome, nav, helpers)
   Exports primitives + the SPREADS registry to window.
   ============================================================ */
const DS = window.MavicoDesignSystem_269fd1;
const { Logo, Eyebrow, Badge, Button } = DS;

/* ---------- i18n: global translate, reads current language ---------- */
window.__lang = window.__lang || "en";
function t(en, fr) { return window.__lang === "fr" ? fr : en; }

/* ---------- icons ---------- */
function Arrow({ s = 16 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function Download({ s = 14 }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block" }}>
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
    </svg>
  );
}

/* ---------- shared layout bits ---------- */
function Kicker({ children, plain }) {
  return <span className={"kick" + (plain ? " kick--plain" : "")}>{children}</span>;
}
function H({ children, size = 54, style = {} }) {
  return <h2 className="h-display" style={{ fontSize: size + "px", ...style }}>{children}</h2>;
}
function Gold({ children }) { return <span className="gold">{children}</span>; }

/* spread head: kicker + big title side-by-side block */
function SpreadHead({ kicker, title, lead, size = 50, style = {} }) {
  return (
    <div style={style}>
      <Kicker>{kicker}</Kicker>
      <H size={size} style={{ marginTop: "20px" }}>{title}</H>
      {lead && <p className="lead" style={{ marginTop: "18px" }}>{lead}</p>}
    </div>
  );
}

/* ---------- the spread frame + chrome ---------- */
function Spread({ idx, total, section, tone = "ink", children }) {
  const cls = "spread" + (tone === "paper" ? " spread--paper" : tone === "soft" ? " spread--soft" : "");
  const num = String(idx).padStart(2, "0");
  const tot = String(total).padStart(2, "0");
  const onDark = tone !== "paper";
  return (
    <div className="frame" data-spread={idx} data-section={section}>
      <section className={cls}>
        <div className="pad">{children}</div>
        <div className="foot">
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
            <Logo tone={onDark ? "light" : "dark"} size={16} /> · {t("Brand Book", "Guide de marque")}
          </span>
          <span>{section}</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
            <span className="dot" /> {num} / {tot}
          </span>
        </div>
      </section>
    </div>
  );
}

/* ---------- swatch ---------- */
function Swatch({ hex, name, token, role, onDark, big }) {
  const textOnSwatch = ["#FFFFFF", "#FAF4E6", "#F3E6C4", "#F7F4EE", "#ECE8E0", "#D9D3C8", "#E8CF94"].includes(hex.toUpperCase()) ? "#0D0D0C" : "#FFFFFF";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{
        height: big ? "150px" : "92px", borderRadius: "8px", background: hex,
        border: "1px solid " + (onDark ? "rgba(255,255,255,0.12)" : "rgba(13,13,12,0.12)"),
        display: "flex", alignItems: "flex-end", padding: "12px",
      }}>
        {role && <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.06em", color: textOnSwatch, opacity: 0.85 }}>{role}</span>}
      </div>
      <div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: "14px", fontWeight: 600, color: onDark ? "var(--white)" : "var(--ink-950)" }}>{name}</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: onDark ? "var(--ink-400)" : "var(--ink-500)", marginTop: "3px" }}>{hex}</div>
        {token && <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--brand)", marginTop: "2px" }}>{token}</div>}
      </div>
    </div>
  );
}

/* ---------- numbered principle / spec ---------- */
function SpecRow({ k, v, onDark = true }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", gap: "24px", alignItems: "baseline",
      padding: "13px 0", borderBottom: "1px solid " + (onDark ? "var(--border-ondark)" : "var(--border-subtle)"),
    }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", letterSpacing: "0.04em", color: onDark ? "var(--ink-300)" : "var(--ink-600)" }}>{k}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: onDark ? "var(--white)" : "var(--ink-950)", textAlign: "right" }}>{v}</span>
    </div>
  );
}

/* ---------- side nav ---------- */
function BookNav({ items, active, onJump }) {
  return (
    <nav className="booknav" aria-label="Brand book sections">
      {items.map((it, i) => (
        <button key={i} className={active === i ? "active" : ""} onClick={() => onJump(i)}>
          <span className="bar" />
          <span className="num">{String(i).padStart(2, "0")}</span>
          <span className="lbl">{it.section}</span>
        </button>
      ))}
    </nav>
  );
}

/* ---------- the App: scaler + nav wiring ---------- */
function BrandBook({ spreads }) {
  const [active, setActive] = React.useState(0);
  const [lang, setLang] = React.useState(() => {
    try { return localStorage.getItem("mavico-bb-lang") || "en"; } catch (e) { return "en"; }
  });
  React.useEffect(() => {
    try { localStorage.setItem("mavico-bb-lang", lang); } catch (e) {}
    document.documentElement.lang = lang === "fr" ? "fr" : "en";
  }, [lang]);
  window.__lang = lang;
  const L = (v) => (v && typeof v === "object" && "en" in v) ? (v[lang] || v.en) : v;

  // scale spreads to fit viewport width
  React.useEffect(() => {
    const fit = () => {
      const margin = window.innerWidth < 760 ? 24 : 128;
      const avail = Math.min(window.innerWidth - margin, 1440);
      const s = Math.max(0.2, Math.min(1, avail / 1440));
      document.documentElement.style.setProperty("--bs", s.toFixed(4));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  // active-section tracking
  React.useEffect(() => {
    const frames = [...document.querySelectorAll(".frame")];
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(Number(e.target.getAttribute("data-spread")));
      });
    }, { threshold: 0.5 });
    frames.forEach((f) => io.observe(f));
    return () => io.disconnect();
  }, []);

  const jump = (i) => {
    const el = document.querySelector(`.frame[data-spread="${i}"]`);
    if (el) window.scrollTo({ top: el.offsetTop - 28, behavior: "smooth" });
  };

  const total = spreads.length;
  return (
    <React.Fragment>
      <div className="actions">
        <div className="langtog" role="group" aria-label="Language / Langue">
          <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
          <button className={lang === "fr" ? "on" : ""} onClick={() => setLang("fr")} aria-pressed={lang === "fr"}>FR</button>
        </div>
        <button onClick={() => window.print()}><Download /> {t("Save PDF", "PDF")}</button>
      </div>
      <BookNav items={spreads.map((s) => ({ section: L(s.section) }))} active={active} onJump={jump} />
      <div className="book">
        {spreads.map((sp, i) => (
          <Spread key={i} idx={i} total={total - 1} section={L(sp.section)} tone={sp.tone}>
            {sp.render({ Kicker, H, Gold, SpreadHead, Swatch, SpecRow, Arrow, t, lang })}
          </Spread>
        ))}
      </div>
    </React.Fragment>
  );
}

Object.assign(window, {
  Arrow, Download, Kicker, H, Gold, SpreadHead, Spread, Swatch, SpecRow, BookNav, BrandBook, t,
});
