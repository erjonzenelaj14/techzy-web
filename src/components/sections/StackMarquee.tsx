const stack = [
  "TypeScript", "React", "Next.js", "Node.js", "Python", "Go", "Rust",
  "PostgreSQL", "Redis", "GraphQL", "tRPC", "AWS", "GCP", "Kubernetes",
  "Docker", "Terraform", "React Native", "Swift", "Kotlin", "OpenAI",
  "LangChain", "Tailwind", "Prisma", "Stripe",
];

const StackMarquee = () => {
  const items = [...stack, ...stack];
  return (
    <section className="py-20 overflow-hidden border-b border-border">
      <div className="container mb-10">
        <p className="font-mono text-sm text-muted-foreground text-center">
          {"// the tools we reach for"}
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
          {items.map((s, i) => (
            <span
              key={i}
              className="font-mono text-2xl md:text-3xl text-muted-foreground hover:text-primary transition-colors"
            >
              {s}
              <span className="ml-12 text-primary/40">/</span>
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default StackMarquee;