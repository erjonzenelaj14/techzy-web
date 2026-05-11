import MainLayout from "@/components/MainLayout";
import SeoHead from "@/components/SeoHead";
import Hero from "@/components/sections/Hero";
import ReadabilityIntro from "@/components/sections/ReadabilityIntro";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { routes } from "@/lib/seo";

const related = [
  { href: routes.services, name: "Services" },
  { href: routes.softwareEngineeringStudio, name: "Software engineering studio" },
  { href: routes.solutions, name: "Solutions" },
  { href: routes.caseStudies, name: "Case studies" },
  { href: routes.contact, name: "Contact" },
] as const;

const Index = () => {
  return (
    <MainLayout>
      <SeoHead
        title="TechZy — Software engineering studio | Building web, mobile, AI & cloud software that ships"
        description="TechZy is a software engineering studio for senior web, mobile, AI, and cloud delivery—AI agents, API development, AWS, DevOps, Next.js, Node.js, and React SaaS. Small team, clear ownership. Browse case studies, then get in touch for a plan and quote."
        path="/"
        related={[...related]}
      />
      <Hero />
      <ReadabilityIntro />
      <Services />
      <About />
      <Contact />
    </MainLayout>
  );
};

export default Index;
