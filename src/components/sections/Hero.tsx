import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24">
      <div className="container">
        {/* Top status row */}
        <div className="flex items-center justify-between mb-16 md:mb-32 mt-32 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span>Available · Q3 2026</span>
          </div>
          <div className="hidden md:block">EST · 2019</div>
          <div className="hidden md:block">v.04</div>
        </div>

        {/* Headline grid */}
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="font-mono font-medium text-[11vw] md:text-[7.5vw] leading-[0.95] tracking-tighter">
              <span className="block text-foreground">Engineering</span>
              <span className="block text-primary italic font-light">precision</span>
              <span className="block text-foreground">at speed.</span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:pb-6">
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm">
              TechZy is an engineering studio crafting resilient web, mobile and AI systems for teams that ship.
            </p>
            <a href="#work" className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-foreground w-fit">
              <span className="border-b border-primary/40 pb-1 group-hover:border-primary transition-colors">Browse capabilities</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
