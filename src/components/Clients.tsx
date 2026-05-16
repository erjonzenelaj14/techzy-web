import { Fragment } from 'react';

export default function Clients() {
  const names = ["ALEX LARSEN", "MAYA RAO", "JULIEN PEREIRA", "SANA KIM", "TECHZY STUDIO", ".NET", "REACT", "AWS", "AI AGENTS"];
  const doubled = [...names, ...names];

  return (
    <section className="clients" id="clients">
      <div className="clients-track">
        <span>
          {doubled.map((n, i) => (
            <Fragment key={i}>
              {n}<span className="sep">✦</span>
            </Fragment>
          ))}
        </span>
      </div>
    </section>
  );
}
