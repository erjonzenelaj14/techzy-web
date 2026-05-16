import { useState, useEffect } from 'react';

const QUOTES = [
  {
    text: "TechZy didn't just build the backend — they gave us a system that the whole engineering team actually wants to maintain.",
    name: "Alex Larsen",
    role: "FOUNDER · TECHZY STUDIO",
  },
  {
    text: "Production from week one. No handoffs, no delays — just senior engineers shipping code that works.",
    name: "Maya Rao",
    role: "ENGINEERING LEAD · TECHZY STUDIO",
  },
  {
    text: "Small surface area, high fidelity. They stay close to the code and the result speaks for itself.",
    name: "Julien Pereira",
    role: "DESIGN ENGINEER · TECHZY STUDIO",
  },
  {
    text: "It's rare to find a team this small that ships at this speed. AI, cloud, fullstack — all covered.",
    name: "Sana Kim",
    role: "AI ENGINEER · TECHZY STUDIO",
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
      setI((cur) => (typeof to === "number" ? to : (cur + 1) % QUOTES.length));
      setPhase("enter");
      requestAnimationFrame(() => requestAnimationFrame(() => setPhase("active")));
    }, 450);
  }

  const q = QUOTES[i];

  return (
    <section className="testimonials" id="process">
      <div className="reveal" style={{ marginBottom: 32 }}>
        <div className="eyebrow" style={{ color: "var(--muted)" }}>/ 03 — Meet the team</div>
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
        {QUOTES.map((_, idx) => (
          <button
            key={idx}
            className={idx === i ? "active" : ""}
            aria-label={`Quote ${idx + 1}`}
            onClick={() => advance(idx)}
          ></button>
        ))}
      </div>
    </section>
  );
}
