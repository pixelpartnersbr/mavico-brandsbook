/* ============================================================
   MAVICO Brand Book — assemble + render
   ============================================================ */
const ALL_SPREADS = [
  ...window.FOUNDATION_SPREADS,
  ...window.VISUAL_SPREADS,
  ...window.SYSTEM_SPREADS,
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <window.BrandBook spreads={ALL_SPREADS} />
);
