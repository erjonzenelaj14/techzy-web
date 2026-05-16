function smoothScroll(e: React.MouseEvent, id: string) {
  e.preventDefault();
  const target = document.getElementById(id);
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow"></div>
      <div className="hero-top">
        <div>
          <div className="eyebrow">→ Software engineering studio · Est. 2019</div>
          <div className="eyebrow" style={{ marginTop: 6, opacity: 0.6 }}>
            [ Remote · EU / US ]
          </div>
        </div>
        <div className="meta-right">
          <div className="eyebrow">[ Available · Q3 2026 ]</div>
          <div className="eyebrow" style={{ opacity: 0.6 }}>
            v.2026.05
          </div>
        </div>
      </div>

      <h1 className="hero-headline">
        Craft,<br />
        <span className="lime">speed,</span><br />
        <span className="out">ownership.</span>
      </h1>

      <div className="hero-bottom">
        <p className="hero-sub">
          Senior engineers delivering web, mobile, AI, and cloud software
          with craft. No handoffs. No bloat. No fog.
        </p>
        <div className="hero-cta-cluster">
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => smoothScroll(e, "contact")}
          >
            Get in touch <span className="arr">→</span>
          </a>
          <a
            href="#services"
            className="btn-ghost"
            onClick={(e) => smoothScroll(e, "services")}
          >
            See what we do ↓
          </a>
        </div>
      </div>
    </section>
  );
}
