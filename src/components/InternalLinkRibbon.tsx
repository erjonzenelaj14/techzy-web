import { Link } from "react-router-dom";
import { routes } from "@/lib/seo";

/**
 * Visible internal links for crawlability and silo navigation (keyword-aware labels).
 */
const InternalLinkRibbon = ({ className = "" }: { className?: string }) => {
  return (
    <nav
      aria-label="Footer: About, services, contact, and site pages"
      className={`flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground ${className}`}
    >
      <Link to={routes.home} className="hover:text-primary transition-colors">
        Home
      </Link>
      <span className="text-border" aria-hidden>
        ·
      </span>
      <Link to={routes.services} className="hover:text-primary transition-colors">
        Services
      </Link>
      <span className="text-border" aria-hidden>
        ·
      </span>
      <Link
        to={routes.softwareEngineeringStudio}
        className="hover:text-primary transition-colors text-foreground/90"
      >
        Software engineering studio
      </Link>
      <span className="text-border" aria-hidden>
        ·
      </span>
      <Link to={routes.solutions} className="hover:text-primary transition-colors">
        Solutions
      </Link>
      <span className="text-border" aria-hidden>
        ·
      </span>
      <Link to={routes.caseStudies} className="hover:text-primary transition-colors">
        Case studies
      </Link>
      <span className="text-border" aria-hidden>
        ·
      </span>
      <Link to={routes.about} className="hover:text-primary transition-colors">
        About
      </Link>
      <span className="text-border" aria-hidden>
        ·
      </span>
      <Link to={routes.contact} className="hover:text-primary transition-colors">
        Contact
      </Link>
    </nav>
  );
};

export default InternalLinkRibbon;
