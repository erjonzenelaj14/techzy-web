import { Server, Code2, Smartphone, Database, Cloud, Plug } from "lucide-react";

const services = [
  { n: "01", icon: Server, title: "Backend", tags: [".NET", "Java", "Python"], desc: "Robust server-side systems engineered for scale, security and long-term maintainability." },
  { n: "02", icon: Code2, title: "Frontend", tags: ["Angular", "React", "Next.js"], desc: "Modern web interfaces built with the frameworks shaping today's product landscape." },
  { n: "03", icon: Smartphone, title: "Mobile", tags: ["Ionic", "Angular", "React Native"], desc: "Cross-platform mobile apps that feel native on both iOS and Android." },
  { n: "04", icon: Database, title: "Databases", tags: ["PostgreSQL", "SQL Server"], desc: "Relational data layers designed for performance, integrity and clean evolution." },
  { n: "05", icon: Cloud, title: "Cloud", tags: ["Azure", "AWS"], desc: "Cloud-native infrastructure across the two ecosystems enterprises actually run on." },
  { n: "06", icon: Plug, title: "Integrations", tags: ["Magento", "Shopify"], desc: "E-commerce integrations that connect your storefront to the systems behind it." },
];

const Services = () => {
  return (
    <section id="work" className="py-32 md:py-40">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">— Capabilities</p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-mono text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05]">
              Six disciplines.<br />
              <span className="text-muted-foreground italic font-light">One senior team.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-border/60">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={
                "group relative p-8 md:p-10 border-b border-border/60 transition-colors hover:bg-card/40 " +
                ((i % 3 !== 2) ? "lg:border-r " : "") +
                ((i % 2 === 0) ? "md:border-r lg:border-r " : "")
              }
            >
              <div className="flex items-start justify-between mb-12">
                <span className="font-mono text-xs text-muted-foreground/60 tracking-widest">{s.n}</span>
                <s.icon className="h-5 w-5 text-primary/80 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="font-mono text-2xl font-medium mb-4 tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xs">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-border/60 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
