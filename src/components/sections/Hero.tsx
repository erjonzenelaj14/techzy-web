import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full animate-orb-pulse pointer-events-none blur-3xl opacity-70"
        style={{ background: "var(--gradient-orb)" }}
        aria-hidden
      />

      <div className="container relative z-10 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md font-mono text-xs text-primary mb-8 animate-fade-in">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Engineering studio · shipping since 2019</span>
        </div>

        <h1 className="mx-auto max-w-5xl font-mono font-semibold text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-gradient animate-fade-up">
          Software that thinks.<br />
          <span className="text-primary">Systems that scale.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up [animation-delay:120ms]">
          A small senior team designing and engineering web, mobile, and AI
          products for teams that care about craft.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-up [animation-delay:240ms]">
          <Button asChild size="lg" className="rounded-full font-mono shadow-[0_0_40px_-8px_hsl(var(--primary))]">
            <a href="#services">
              Explore our work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full font-mono border-primary/30 bg-background/40 backdrop-blur-md hover:bg-primary/10 hover:text-foreground"
          >
            <a href="#contact">Start a project</a>
          </Button>
        </div>

        <div className="mt-24 flex justify-center animate-fade-in [animation-delay:600ms]">
          <div className="flex flex-col items-center gap-2 text-muted-foreground/60 font-mono text-xs">
            <span>scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
