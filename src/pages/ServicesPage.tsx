import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import SeoHead from "@/components/SeoHead";
import Services from "@/components/sections/Services";
import { routes } from "@/lib/seo";

const ServicesPage = () => {
  const related = [
    { href: routes.home, name: "Home" },
    { href: routes.softwareEngineeringStudio, name: "Software engineering studio" },
    { href: routes.solutions, name: "Solutions" },
    { href: routes.caseStudies, name: "Case studies" },
    { href: routes.contact, name: "Contact" },
  ];

  return (
    <MainLayout>
      <SeoHead
        title="Software engineering studio services — TechZy"
        description="Explore TechZy services: AI agents, AI automation, API development, AWS development, DevOps, and Next.js, Node.js, and React delivery for SaaS and responsive web. Tie back to our software engineering studio engagement model."
        path={routes.services}
        related={related}
      />
      <article className="pt-24 md:pt-28">
        <div className="container px-6 md:px-8 pb-8 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Services</p>
          <h1 className="font-mono text-3xl md:text-5xl font-medium tracking-tighter mb-6">
            How our software engineering studio delivers
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This page collects our core delivery lanes—backend, frontend, mobile, data, cloud, and integrations—so crawl
            paths and people share one canonical services URL. Pair it with our{" "}
            <Link to={routes.softwareEngineeringStudio} className="text-primary hover:underline">
              software engineering studio
            </Link>{" "}
            overview and the wider{" "}
            <Link to={routes.solutions} className="text-primary hover:underline">
              solutions
            </Link>{" "}
            we ship for product teams.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ready to scope something?{" "}
            <Link to={routes.contact} className="text-primary font-mono hover:underline">
              Contact the studio
            </Link>{" "}
            or browse{" "}
            <Link to={routes.caseStudies} className="text-primary font-mono hover:underline">
              case studies
            </Link>
            .
          </p>
        </div>
        <Services />
      </article>
    </MainLayout>
  );
};

export default ServicesPage;
