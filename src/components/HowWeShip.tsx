import { useEffect, useState } from 'react';

const STEPS = [
  { num: "01", title: "No handoffs", desc: "One team from start to deploy. No telephone game between designers, devs, and ops." },
  { num: "02", title: "Production from week one", desc: "Real code shipping to real environments from day one. Not slides — software." },
  { num: "03", title: "Small surface area", desc: "Fewer moving parts, fewer surprises. We keep the architecture tight and readable." },
  { num: "04", title: "Stay close", desc: "Senior engineers embedded in your workflow. Direct access, fast decisions, no layers." },
];

export default function HowWeShip() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % STEPS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <section className="section-pad how-we-ship" id="how-we-ship">
      <div className="section-head reveal">
        <div className="section-index">
          <div className="eyebrow">/ 03 — How we work</div>
        </div>
        <h2 className="section-title">
          How we help<br />teams ship.
        </h2>
      </div>

      <div className="step-dots">
        {STEPS.map((s, i) => (
          <button
            key={i}
            className={`step-dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Step ${s.num}`}
          >
            <span className="step-dot-num">{s.num}</span>
          </button>
        ))}
      </div>

      <div className="step-cards">
        {STEPS.map((s, i) => (
          <div
            key={s.num}
            className={`step-card ${i === active ? "step-card-active" : "step-card-inactive"}`}
            onClick={() => setActive(i)}
          >
            <div className="step-card-bar"></div>
            <div className="step-card-content">
              <span className="step-num">{s.num}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
