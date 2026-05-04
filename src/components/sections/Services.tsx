import {
  Code2,
  Smartphone,
  Sparkles,
  Cloud,
  Plug,
  Compass,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Applications",
    description: "Production-grade React, TypeScript, and Node systems built to scale and last.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native-feeling iOS and Android apps with React Native and Swift / Kotlin where it matters.",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description: "LLM-powered features, RAG pipelines, and automations that remove real work from real teams.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, GCP, and Kubernetes infrastructure that's observable, repeatable, and quiet at 3am.",
  },
  {
    icon: Plug,
    title: "APIs & Integrations",
    description: "Robust REST and GraphQL APIs and integrations with the systems your business already runs on.",
  },
  {
    icon: Compass,
    title: "Technical Consulting",
    description: "Architecture reviews, team augmentation, and pragmatic guidance from senior engineers.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-sm text-primary mb-4">{"// 01 — services"}</p>
          <h2 className="font-mono text-4xl md:text-5xl font-semibold tracking-tight">
            What we build
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            End-to-end product engineering across the stack. Pick a slice or hand us the whole thing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-background hover:bg-card transition-colors p-8 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-mono text-xl font-semibold">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;