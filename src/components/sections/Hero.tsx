import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden />

      {/* Glowing orb */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full animate-orb-pulse pointer-events-none"
        style={{ background: "var(--gradient-orb)" }}
        aria-hidden
      />

      <div className="container relative z-10 py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs tracking-wide text-muted-foreground">
              Engineering studio — est. 2019
            </span>
          </div>
          <h1 className="font-mono font-semibold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-gradient animate-fade-up">
            We build software<br />that ships.
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up [animation-delay:120ms]">
            A small senior team designing and engineering web, mobile, and AI products
            for teams that care about craft.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:240ms]">
            <Button asChild size="lg" className="rounded-full font-mono shadow-[0_0_40px_-10px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_60px_-5px_hsl(var(--primary)/0.8)] transition-shadow">
              <a href="#services">
                See what we do <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full font-mono border-border bg-card/40 backdrop-blur hover:bg-card hover:border-primary/60"
            >
              <a href="#contact"><Sparkles className="mr-2 h-4 w-4" /> Start a project</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-fade-in [animation-delay:600ms]">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};

export default Hero;