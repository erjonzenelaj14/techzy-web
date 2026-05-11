import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/seo";

const SolutionsPage = () => {
  const related = [
    { href: routes.home, name: "Home" },
    { href: routes.services, name: "Services" },
    { href: routes.softwareEngineeringStudio, name: "Software engineering studio" },
    { href: routes.caseStudies, name: "Case studies" },
    { href: routes.contact, name: "Contact" },
  ];

  return (
    <MainLayout>
      <SeoHead
        title="Solutions — software engineering studio delivery | TechZy"
        description="Solution paths from TechZy’s software engineering studio: greenfield SaaS, modernization, AI automation on your stack, AWS and DevOps, and high-trust API programs—linked to services and case studies."
        path={routes.solutions}
        related={related}
      />
      <article className="container px-6 md:px-8 pt-24 md:pt-32 pb-24 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Solutions</p>
        <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-tighter mb-8">
          Solution patterns from a software engineering studio
        </h1>
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p>
            We package the same senior engineering studio into repeatable solution shapes:{" "}
            <strong className="text-foreground">new product bets</strong>,{" "}
            <strong className="text-foreground">incremental modernization</strong>, and{" "}
            <strong className="text-foreground">platform hardening</strong>. Each path pulls from the delivery lanes on
            our{" "}
            <Link to={routes.services} className="text-primary hover:underline">
              services page
            </Link>{" "}
            and is anchored by the positioning on our{" "}
            <Link to={routes.softwareEngineeringStudio} className="text-primary hover:underline">
              software engineering studio
            </Link>{" "}
            page so authority flows across the silo.
          </p>
          <p>
            Expect embedded API design, pragmatic AI automation, AWS foundations, DevOps that matches your risk profile,
            and frontend stacks centered on Next.js, React, and Node.js when we own the interface layer.
          </p>
          <p>
            See how we tell the story with{" "}
            <Link to={routes.caseStudies} className="text-primary hover:underline">
              case studies
            </Link>{" "}
            and meet the team on{" "}
            <Link to={routes.about} className="text-primary hover:underline">
              about
            </Link>
            .
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild className="rounded-full font-mono">
            <Link to={routes.contact}>Start a solutions conversation</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full font-mono border-primary/40">
            <Link to={routes.services}>View services</Link>
          </Button>
        </div>
      </article>
    </MainLayout>
  );
};

export default SolutionsPage;
