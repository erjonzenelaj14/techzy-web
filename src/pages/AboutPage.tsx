import MainLayout from "@/components/MainLayout";
import SeoHead from "@/components/SeoHead";
import About from "@/components/sections/About";
import { routes } from "@/lib/seo";

const AboutPage = () => {
  const related = [
    { href: routes.home, name: "Home" },
    { href: routes.softwareEngineeringStudio, name: "Software engineering studio" },
    { href: routes.services, name: "Services" },
    { href: routes.solutions, name: "Solutions" },
    { href: routes.contact, name: "Contact" },
  ];

  return (
    <MainLayout>
      <SeoHead
        title="About — TechZy software engineering studio team"
        description="Meet the senior software engineering studio behind TechZy: principles, team, and how we work with product leaders. Links to services, solutions, and contact."
        path={routes.about}
        related={related}
      />
      <div className="pt-8">
        <About />
      </div>
    </MainLayout>
  );
};

export default AboutPage;
