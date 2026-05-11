import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/seo";

const StickyContactCta = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8 pointer-events-none">
      <Button
        asChild
        size="lg"
        className="pointer-events-auto rounded-full font-mono shadow-lg shadow-primary/25 hover:shadow-primary/40 gap-2"
      >
        <Link to={routes.contact} aria-label="Contact us — go to contact page">
          <MessageCircle className="h-4 w-4" aria-hidden />
          Contact Us
        </Link>
      </Button>
    </div>
  );
};

export default StickyContactCta;
