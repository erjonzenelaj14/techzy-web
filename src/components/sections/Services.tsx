import { Link } from "react-router-dom";
import { Server, Code2, Smartphone, Database, Cloud, Plug } from "lucide-react";
import { routes } from "@/lib/seo";

const services = [
  { n: "01", icon: Server, title: "Backend", tags: [".NET", "Java", "Python", "Node.js"], desc: "API development and robust server-side systems—Node.js services, secure integrations, and foundations that scale with your SaaS roadmap." },
  { n: "02", icon: Code2, title: "Frontend", tags: ["Angular", "React", "Next.js"], desc: "Responsive websites and product UIs with Next.js, React, and modern tooling—fast, accessible, and ready for growth." },
  { n: "03", icon: Smartphone, title: "Mobile", tags: ["Ionic", "Angular", "React Native"], desc: "Cross-platform mobile apps that feel native on both iOS and Android." },
  { n: "04", icon: Database, title: "Databases", tags: ["PostgreSQL", "SQL Server"], desc: "Relational data layers designed for performance, integrity and clean evolution." },
  { n: "05", icon: Cloud, title: "Cloud", tags: ["Azure", "AWS"], desc: "AWS development, DevOps services, and cloud-native architecture—pipelines, deployments, and runbooks your team can trust." },
  { n: "06", icon: Plug, title: "Integrations", tags: ["Magento", "Shopify"], desc: "AI automation and AI agents wired to your APIs—plus Magento, Shopify, and legacy systems that need to stay in sync." },
];

const Services = () => {
  return (
    <section id="work" className="py-32 md:py-40">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Core capabilities</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We specialize in AI agents, AI automation, API development, AWS development, DevOps services, and Next.js,
              Node.js, and React development for responsive websites and SaaS platforms. See how we frame engagements on
              our{" "}
              <Link to={routes.softwareEngineeringStudio} className="text-primary hover:underline font-mono text-[13px]">
                software engineering studio
              </Link>{" "}
              page, or open the dedicated{" "}
              <Link to={routes.services} className="text-primary hover:underline font-mono text-[13px]">
                services
              </Link>{" "}
              URL for crawlers.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground/80 mb-4">— Studio delivery</p>
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
