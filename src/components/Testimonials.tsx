import { useState, useEffect } from 'react';

const PRINCIPLES = [
  {
    text: "The engineer you meet writes the code. No handoffs to juniors, no bait-and-switch on staffing. Direct access, fast decisions.",
    name: "No handoffs",
    role: "STUDIO PRINCIPLE · 01",
  },
  {
    text: "Real code shipping to real environments from day one. Not slides, not wireframes — working software your team can test and trust.",
    name: "Production from week one",
    role: "STUDIO PRINCIPLE · 02",
  },
  {
    text: "Fewer moving parts means fewer surprises. We keep the architecture tight, readable, and something your team actually wants to maintain.",
    name: "Small surface area",
    role: "STUDIO PRINCIPLE · 03",
  },
  {
    text: "We don't disappear at launch. Senior engineers stay embedded in your workflow — sharpening, optimizing, and shipping what's next.",
    name: "Stay close",
    role: "STUDIO PRINCIPLE · 04",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState("active");

  useEffect(() => {
    const t = setInterval(() => advance(), 6500);
    return () => clearInterval(t);
  });

  function advance(to?: number) {
    setPhase("exit");
    setTimeout(() => {
      setI((cur) => (typeof to === "number" ? to : (cur + 1) % PRINCIPLES.length));
      setPhase("enter");
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase("active")));
    }, 450);
  }

  const q = PRINCIPLES[i];

  return (
    <section className="testimonials" id="process">
      <div className="reveal" style={{ marginBottom: 32 }}>
        <div className="eyebrow" style={{ color: "var(--muted)" }}>/ 03 — How we work</div>
      </div>
      <span className="quote-mark">"</span>
      <div className="quote-wrap">
        <p className={`quote-text ${phase}`} key={i}>
          {q.text}
        </p>
      </div>
      <div className="quote-attr">
        <div className="quote-divider"></div>
        <div className="quote-name">{q.name}</div>
        <div className="quote-role">{q.role}</div>
      </div>
      <div className="quote-pager" role="tablist">
        {PRINCIPLES.map((_, idx) => (
          <button
            key={idx}
            className={idx === i ? "active" : ""}
            aria-label={`Principle ${idx + 1}`}
            onClick={() => advance(idx)}
          ></button>
        ))}
      </div>
    </section>
  );
}
