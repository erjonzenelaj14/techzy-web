const steps = [
  { n: "01", title: "Discover", desc: "We dig into the problem, the constraints, and the people. No assumptions." },
  { n: "02", title: "Design", desc: "Lightweight prototypes and architecture decisions you can actually defend." },
  { n: "03", title: "Build", desc: "Tight iteration cycles, clean commits, and code you'll be glad to inherit." },
  { n: "04", title: "Ship", desc: "Production from week one. Real users, real feedback, real data." },
  { n: "05", title: "Iterate", desc: "We stay close after launch — measuring, refining, and shipping the next version." },
];

const Process = () => {
  return (
    <section id="process" className="py-32 bg-card/30 border-y border-border">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-primary mb-4">{"// 02 — process"}</p>
          <h2 className="font-mono text-4xl md:text-5xl font-semibold tracking-tight">
            How we work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple loop, run with discipline. Less ceremony, more shipping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col gap-3">
              <div className="font-mono text-sm text-primary">{s.n}</div>
              <div className="h-px w-full bg-border" />
              <h3 className="font-mono text-xl font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;