import MainLayout from "@/components/MainLayout";
import SeoHead from "@/components/SeoHead";
import Contact from "@/components/sections/Contact";
import { routes } from "@/lib/seo";

const ContactPage = () => {
  const related = [
    { href: routes.home, name: "Home" },
    { href: routes.softwareEngineeringStudio, name: "Software engineering studio" },
    { href: routes.services, name: "Services" },
    { href: routes.solutions, name: "Solutions" },
    { href: routes.caseStudies, name: "Case studies" },
  ];

  return (
    <MainLayout>
      <SeoHead
        title="Contact — TechZy software engineering studio"
        description="Contact TechZy’s software engineering studio for AI, API, AWS, DevOps, and SaaS engagements. We respond within one business day."
        path={routes.contact}
        related={related}
      />
      <div className="pt-8">
        <Contact />
      </div>
    </MainLayout>
  );
};

export default ContactPage;
