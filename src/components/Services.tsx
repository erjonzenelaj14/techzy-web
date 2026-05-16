const SERVICES = [
  {
    idx: "/01",
    title: "Backend & APIs",
    desc: "Robust services and APIs built with .NET, Java, Python, and Node.js.",
    tags: [".NET", "JAVA", "PYTHON", "NODE.JS"],
  },
  {
    idx: "/02",
    title: "Frontend & Web",
    desc: "Responsive web apps and marketing sites with Angular, React, and Next.js.",
    tags: ["ANGULAR", "REACT", "NEXT.JS"],
  },
  {
    idx: "/03",
    title: "Cloud & DevOps",
    desc: "Infrastructure, CI/CD, and managed databases on Azure and AWS.",
    tags: ["AWS", "AZURE", "POSTGRESQL", "SQL SERVER"],
  },
  {
    idx: "/04",
    title: "AI & Integrations",
    desc: "AI agents, platform integrations, and mobile apps that ship fast.",
    tags: ["AI AGENTS", "SHOPIFY", "IONIC", "REACT NATIVE"],
  },
];

export default function Services() {
  return (
    <section className="section-pad" id="services">
      <div className="section-head reveal">
        <div className="section-index">
          <div className="eyebrow">/ 02 — Services</div>
          <div className="eyebrow" style={{ color: "var(--lime)" }}>06 disciplines</div>
        </div>
        <h2 className="section-title">
          A small team.<br />A full stack of tools.
        </h2>
      </div>

      <div className="services-grid">
        {SERVICES.map((s) => (
          <div className="service-card reveal" key={s.idx}>
            <div className="service-top">
              <span className="service-index">{s.idx}</span>
              <span className="service-arr">↗</span>
            </div>
            <div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span className="service-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
