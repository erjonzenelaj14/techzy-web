import { ArrowRight } from "lucide-react";
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
          <p className="font-mono text-sm text-primary mb-6 animate-fade-in">
            {"// Engineering studio — est. 2019"}
          </p>
          <h1 className="font-mono font-semibold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-gradient animate-fade-up">
            We build software<br />that ships.
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up [animation-delay:120ms]">
            A small senior team designing and engineering web, mobile, and AI products
            for teams that care about craft.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:240ms]">
            <Button asChild size="lg" className="rounded-full font-mono">
              <a href="#services">
                See what we do <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full font-mono border-border bg-transparent hover:bg-card"
            >
              <a href="#contact">Start a project</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};

export default Hero;