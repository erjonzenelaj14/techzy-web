export default function Work() {
  const items = [
    { id: "TZ-001", client: "AI AGENT PLATFORM", year: "2026", tag: "BACKEND + AI" },
    { id: "TZ-002", client: "E-COMMERCE REBUILD", year: "2025", tag: "FULLSTACK" },
    { id: "TZ-003", client: "CLOUD MIGRATION", year: "2025", tag: "AWS + DEVOPS" },
  ];

  return (
    <section className="section-pad" id="work" style={{ paddingTop: 80 }}>
      <div className="section-head reveal">
        <div className="section-index">
          <div className="eyebrow">/ 01 — Selected work</div>
          <div className="eyebrow" style={{ color: "var(--lime)" }}>Featured projects</div>
        </div>
        <h2 className="section-title">
          Recent<br />engagements.
        </h2>
      </div>
      <div style={{ display: "grid", gap: 16 }}>
        {items.map((it, idx) => (
          <a
            key={it.id}
            href="#work"
            className="reveal"
            onClick={(e) => e.preventDefault()}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 1fr 120px 40px",
              gap: 24,
              alignItems: "center",
              padding: "28px 8px",
              borderTop: "1px solid var(--hairline)",
              borderBottom: idx === items.length - 1 ? "1px solid var(--hairline)" : "none",
              transition: "padding 240ms ease, background 240ms ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(55,255,139,0.03)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <span className="eyebrow" style={{ color: "var(--muted)" }}>{it.id}</span>
            <span style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 600, letterSpacing: "-0.03em" }}>
              {it.client}
            </span>
            <span className="eyebrow" style={{ color: "var(--muted)" }}>{it.tag}</span>
            <span className="eyebrow">{it.year}</span>
            <span style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--lime)", fontSize: 20 }}>→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
