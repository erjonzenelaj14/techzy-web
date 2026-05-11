import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/seo";

const capabilityItems = [
  "AI agents and automation",
  "Cloud solutions and DevOps",
  "API development and integrations (Stripe, AWS)",
  "Web, mobile, and SaaS development",
];

/**
 * Scannable value copy immediately below the hero for readers and crawlers.
 */
const ReadabilityIntro = () => {
  return (
    <section
      className="relative border-t border-border/60 bg-background/40 py-16 md:py-24"
      aria-labelledby="overview-heading"
    >
      <div className="container px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Plain-language overview</p>
          <h2 id="overview-heading" className="font-mono text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-foreground mb-6">
            How we help teams ship
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-14">
            <strong className="font-medium text-foreground">TechZy — Software engineering studio building software that ships.</strong>{" "}
            We are a senior software engineering studio delivering web, mobile, AI, and cloud solutions with craft and
            speed.
          </p>

          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">What we do</h3>
          <p className="text-muted-foreground leading-relaxed mb-12">
            We partner with teams to design, build, and deploy reliable software — from AI agents to scalable APIs and
            cloud-native systems. Our services include web and mobile development, Next.js and Node.js stacks, DevOps,
            and SaaS scaling.
          </p>

          <div className="rounded-2xl border border-border/60 bg-card/20 p-6 md:p-8 mb-14">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-3">What we deliver</h3>
            <p className="text-muted-foreground leading-relaxed md:text-lg">
              Discover how our approach combines craft with modern tech for measurable outcomes—clear milestones,
              readable systems, and launches you can stand behind in front of customers and investors.
            </p>
          </div>

          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">Capabilities</h3>
          <ul className="grid gap-3 sm:grid-cols-2 mb-14 text-sm md:text-base text-foreground/95">
            {capabilityItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-border/60 bg-card/30 p-8 md:p-10">
            <h3 className="font-mono text-lg md:text-xl font-medium text-foreground mb-4">Start a project</h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Tell us about your goals and the problems you want to solve. We respond with a plan and a transparent
              quote.
            </p>
            <Button asChild size="lg" className="rounded-full font-mono group">
              <Link to={routes.contact}>
                Request a consultation
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadabilityIntro;
