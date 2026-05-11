import { Link } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import SeoHead from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/seo";

const SoftwareEngineeringStudioPage = () => {
  const related = [
    { href: routes.home, name: "Home" },
    { href: routes.services, name: "Services" },
    { href: routes.solutions, name: "Solutions" },
    { href: routes.caseStudies, name: "Case studies" },
    { href: routes.about, name: "About" },
    { href: routes.contact, name: "Contact" },
  ];

  return (
    <MainLayout>
      <SeoHead
        title="Software engineering studio — TechZy | AI, APIs, cloud, DevOps"
        description="TechZy is a software engineering studio focused on AI automation, API and AWS development, DevOps, and Next.js / Node.js / React SaaS. From this pillar page, explore services, solutions, and how we ship with your team."
        path={routes.softwareEngineeringStudio}
        related={related}
      />
      <article className="container px-6 md:px-8 pt-24 md:pt-32 pb-24">
        <header className="max-w-3xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Software engineering studio</p>
          <h1 className="font-mono text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05] mb-8">
            Software engineering studio for web, AI, and cloud products
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            TechZy operates as a senior software engineering studio: small teams, production-first delivery, and clear
            ownership from discovery through launch. We anchor engagements around APIs, cloud-native AWS work, DevOps
            pipelines, and modern frontends—typically Next.js, React, and Node.js—for responsive websites and SaaS.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mb-16">
          <section className="rounded-2xl border border-border/60 bg-card/40 p-8">
            <h2 className="font-mono text-xl font-medium mb-4">Topic coverage</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We intentionally interlink this software engineering studio page with{" "}
              <Link to={routes.services} className="text-primary hover:underline">
                services
              </Link>
              ,{" "}
              <Link to={routes.solutions} className="text-primary hover:underline">
                solution patterns
              </Link>
              , and{" "}
              <Link to={routes.caseStudies} className="text-primary hover:underline">
                case studies
              </Link>{" "}
              so search engines and visitors can move through a simple silo: positioning → capabilities → proof →
              conversation.
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
              <li>AI agents and automation layered on your existing APIs</li>
              <li>AWS development, infrastructure as code, and observability-minded DevOps</li>
              <li>Product engineering with Next.js, Node.js, and React for SaaS teams</li>
            </ul>
          </section>
          <section className="rounded-2xl border border-border/60 bg-card/40 p-8">
            <h2 className="font-mono text-xl font-medium mb-4">Navigate the studio</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Use these internal links to distribute relevance across the main service surfaces of the site.
            </p>
            <ul className="space-y-3 font-mono text-sm">
              <li>
                <Link to={routes.services} className="text-primary hover:underline">
                  Services overview →
                </Link>
              </li>
              <li>
                <Link to={routes.solutions} className="text-primary hover:underline">
                  Solutions & engagement models →
                </Link>
              </li>
              <li>
                <Link to={routes.caseStudies} className="text-primary hover:underline">
                  Case studies →
                </Link>
              </li>
              <li>
                <Link to={routes.about} className="text-primary hover:underline">
                  About the team →
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-full font-mono">
            <Link to={routes.contact}>Talk with our software engineering studio</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full font-mono border-primary/40">
            <Link to={routes.home}>Return home</Link>
          </Button>
        </div>
      </article>
    </MainLayout>
  );
};

export default SoftwareEngineeringStudioPage;
