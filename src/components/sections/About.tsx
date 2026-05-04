const team = [
  { initials: "AL", name: "Alex Larsen", role: "Founder · Principal Engineer", bio: "15 years building products from zero to scale." },
  { initials: "MR", name: "Maya Rao", role: "Engineering Lead", bio: "Distributed systems, payments, and platform work." },
  { initials: "JP", name: "Julien Pereira", role: "Design Engineer", bio: "Bridges design and code. Cares about every pixel." },
  { initials: "SK", name: "Sana Kim", role: "AI Engineer", bio: "LLM applications, retrieval, and evaluation pipelines." },
];

const About = () => {
  return (
    <section id="about" className="py-32">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <p className="font-mono text-sm text-primary mb-4">{"// 03 — about"}</p>
          <h2 className="font-mono text-4xl md:text-5xl font-semibold tracking-tight">
            Small team.<br />Senior engineers.<br />Real ownership.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              TechZy is a tight-knit studio of engineers and designers who'd rather ship one
              great product than juggle ten mediocre ones.
            </p>
            <p>
              We pick problems worth solving, work directly with the people who care about
              them, and stay long after launch to make sure the thing actually works.
            </p>
            <p>
              No account managers. No handoffs. Just senior people doing the work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="glow-border rounded-xl bg-card p-6 flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-mono text-sm font-semibold text-primary-foreground">
                {m.initials}
              </div>
              <div>
                <div className="font-mono font-semibold">{m.name}</div>
                <div className="font-mono text-xs text-primary mt-0.5">{m.role}</div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;