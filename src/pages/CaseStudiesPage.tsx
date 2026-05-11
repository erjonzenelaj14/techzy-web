import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/seo";

const CaseStudiesPage = () => {
  const related = [
    { href: routes.home, name: "Home" },
    { href: routes.services, name: "Services" },
    { href: routes.softwareEngineeringStudio, name: "Software engineering studio" },
    { href: routes.solutions, name: "Solutions" },
    { href: routes.contact, name: "Contact" },
  ];

  const studies = [
    {
      title: "API-first commerce backbone",
      summary: "Stabilized order flows and integrations for a multi-region retailer—DevOps, AWS, and Node.js services.",
    },
    {
      title: "SaaS analytics relaunch",
      summary: "Rebuilt customer-facing reporting with React and API aggregation layers owned by a small TechZy squad.",
    },
    {
      title: "AI-assisted operations",
      summary: "Automation hooks and guard-railed agents sitting on existing internal APIs without risky rewrites.",
    },
  ];

  return (
    <MainLayout>
      <SeoHead
        title="Case studies — TechZy software engineering studio"
        description="Representative case studies from TechZy’s software engineering studio: API programs, SaaS rebuilds, AWS and DevOps hardening, and AI automation. Link through to services, solutions, and contact."
        path={routes.caseStudies}
        related={related}
      />
      <article className="container px-6 md:px-8 pt-24 md:pt-32 pb-24">
        <header className="max-w-3xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Case studies</p>
          <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-tighter mb-6">
            Proof from our software engineering studio
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            These summaries illustrate how we connect{" "}
            <Link to={routes.services} className="text-primary hover:underline">
              services
            </Link>{" "}
            to measurable outcomes. Pair them with the{" "}
            <Link to={routes.softwareEngineeringStudio} className="text-primary hover:underline">
              software engineering studio
            </Link>{" "}
            positioning page and the broader{" "}
            <Link to={routes.solutions} className="text-primary hover:underline">
              solutions
            </Link>{" "}
            catalog when you brief stakeholders.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mb-16">
          {studies.map((s) => (
            <section
              key={s.title}
              className="rounded-2xl border border-border/60 bg-card/30 p-8 flex flex-col justify-between"
            >
              <div>
                <h2 className="font-mono text-lg font-medium mb-3">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
              </div>
              <Link to={routes.contact} className="font-mono text-xs text-primary mt-6 inline-flex hover:underline">
                Request the full narrative →
              </Link>
            </section>
          ))}
        </div>

        <Button asChild size="lg" className="rounded-full font-mono">
          <Link to={routes.contact}>Plan your next case study with us</Link>
        </Button>
      </article>
    </MainLayout>
  );
};

export default CaseStudiesPage;
