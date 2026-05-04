const team = [
  { initials: "AL", name: "Alex Larsen", role: "Founder, Principal Engineer" },
  { initials: "MR", name: "Maya Rao", role: "Engineering Lead" },
  { initials: "JP", name: "Julien Pereira", role: "Design Engineer" },
  { initials: "SK", name: "Sana Kim", role: "AI Engineer" },
];

const principles = [
  { k: "No handoffs", v: "The engineer you meet writes the code." },
  { k: "Production from week one", v: "Real environments, real data, real users." },
  { k: "Small surface area", v: "Less code. Less ceremony. Less to break." },
  { k: "Stay close", v: "We don't disappear at launch — we sharpen." },
];

const About = () => {
  return (
    <section id="studio" className="py-32 md:py-40 border-t border-border/60">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 mb-24">
          <div className="col-span-12 lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">— Studio</p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-mono text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05] mb-10">
              A studio built around<br />
              <span className="text-muted-foreground italic font-light">senior engineers,</span> not slide decks.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              TechZy is intentionally small. Every project is staffed by the people you meet —
              and we'd rather ship one sharp product than juggle ten mediocre ones.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden mb-24">
          {principles.map((p, i) => (
            <div key={p.k} className="bg-background/60 backdrop-blur-md p-8">
              <div className="font-mono text-xs text-primary/80 mb-6">P/0{i + 1}</div>
              <h4 className="font-mono text-lg font-medium mb-2">{p.k}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.v}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">The people</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="group">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-card via-secondary/40 to-background border border-border/60 flex items-center justify-center mb-4 group-hover:border-primary/60 transition-colors">
                  <span className="font-mono text-3xl text-primary/80 group-hover:text-primary transition-colors">{m.initials}</span>
                </div>
                <div className="font-mono text-sm font-medium">{m.name}</div>
                <div className="font-mono text-xs text-muted-foreground mt-1">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
