import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/seo";

const focusChips: { label: string; to: string; hint: string }[] = [
  { label: "AI agents", to: routes.softwareEngineeringStudio, hint: "Automation and agents on your stack" },
  { label: "API development", to: routes.services, hint: "Contracts, integrations, reliability" },
  { label: "AWS development", to: routes.services, hint: "Cloud-native delivery and DevOps" },
];

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex flex-col pb-16 md:pb-24 overflow-hidden">
      <div className="container px-6 md:px-8">
        {/* Top status row */}
        <div
          className="flex items-center justify-between mb-8 sm:mb-10 md:mb-12 mt-24 sm:mt-26 md:mt-28 font-mono text-xs uppercase tracking-widest text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0s" }}
        >
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
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="font-mono font-medium tracking-tighter">
              <span
                className="block text-xl sm:text-2xl md:text-3xl font-medium text-foreground normal-case tracking-tight mb-3 md:mb-4 max-w-3xl leading-snug animate-fade-up"
                style={{ animationDelay: "0.06s" }}
              >
                TechZy — Software engineering studio building software that ships
              </span>
              <span
                className="block text-[11vw] md:text-[7.5vw] leading-[0.95] animate-fade-up"
                style={{ animationDelay: "0.12s" }}
              >
                <span className="block text-foreground">Craft,</span>
                <span className="block text-primary italic font-light">speed,</span>
                <span className="block text-foreground">ownership.</span>
              </span>
            </h1>
            <p
              className="mt-6 font-sans text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Senior engineers delivering web, mobile, AI, and cloud software with craft.
            </p>

            {/* Interactive focus chips */}
            <div
              className="mt-6 flex flex-wrap gap-2 animate-fade-up"
              style={{ animationDelay: "0.26s" }}
              role="group"
              aria-label="Focus areas"
            >
              {focusChips.map((c) => (
                <Link
                  key={c.label}
                  to={c.to}
                  title={c.hint}
                  className="font-mono text-[11px] uppercase tracking-wider px-3 py-2 rounded-full border border-primary/35 bg-primary/5 text-foreground hover:bg-primary/15 hover:border-primary/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {c.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.32s" }}>
              <Button asChild size="lg" variant="outline" className="rounded-full font-mono border-primary/40 bg-background/40 backdrop-blur-xl hover:bg-primary/10">
                <Link to={routes.caseStudies}>
                  View case studies
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="rounded-full font-mono group shadow-[0_0_24px_-8px_hsl(var(--primary))]">
                <Link to={routes.contact}>
                  Get in touch
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Button>
            </div>

            {/* Social proof */}
            <div
              className="mt-12 rounded-2xl border border-border/50 bg-card/20 px-5 py-4 md:px-6 md:py-5 backdrop-blur-sm max-w-xl animate-fade-up"
              style={{ animationDelay: "0.38s" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">Teams we work with</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Senior-only bench · No bait-and-switch on staffing · Products shipped across EU & US since 2019.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 lg:pb-6 animate-fade-up" style={{ animationDelay: "0.24s" }}>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm">
              Senior team shipping scalable software, APIs, AWS and cloud deployments, DevOps, and SaaS—for partners who
              care about craft.
            </p>
            <Link
              to={routes.services}
              className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-foreground w-fit lg:ml-0"
            >
              <span className="border-b border-primary/40 pb-1 group-hover:border-primary transition-colors">
                Browse capabilities
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
