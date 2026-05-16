import { Fragment } from 'react';

export default function Clients() {
  const names = ["REACT", "NODE.JS", "AWS", "AI AGENTS", ".NET", "NEXT.JS", "POSTGRESQL", "DEVOPS", "AZURE"];
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
