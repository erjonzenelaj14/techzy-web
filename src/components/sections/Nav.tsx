import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/seo";

const navLinks: Array<{
  to: string;
  label: string;
  end?: boolean;
  linkTitle?: string;
}> = [
  { to: routes.home, label: "Home", end: true },
  { to: routes.services, label: "Services" },
  {
    to: routes.softwareEngineeringStudio,
    label: "Software engineering studio",
    linkTitle: "Software engineering studio pillar page — TechZy",
  },
  { to: routes.solutions, label: "Solutions" },
  { to: routes.caseStudies, label: "Case studies" },
  { to: routes.about, label: "About" },
  { to: routes.contact, label: "Contact" },
];

const Nav = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hashActive, setHashActive] = useState<string>("");

  useEffect(() => {
    if (location.pathname !== "/") {
      setHashActive("");
      return;
    }
    const ids = ["work", "studio", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (v[0]) setHashActive(`#${v[0].target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [location.pathname]);

  const isActive = (to: string) => {
    if (to === routes.home) {
      return location.pathname === "/" && !hashActive;
    }
    if (to === routes.services && location.pathname === "/" && hashActive === "#work") {
      return true;
    }
    if (to === routes.about && location.pathname === "/" && hashActive === "#studio") {
      return true;
    }
    if (to === routes.contact && location.pathname === "/" && hashActive === "#contact") {
      return true;
    }
    return location.pathname === to || location.pathname.startsWith(`${to}/`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container flex h-20 items-center justify-between gap-3 px-6 md:px-8" aria-label="Primary navigation">
        <Link to={routes.home} className="font-mono text-sm font-semibold tracking-widest uppercase shrink-0">
          Tech<span className="text-primary">Zy</span>
          <span className="ml-2 text-muted-foreground/60 font-normal hidden sm:inline">/ studio</span>
        </Link>

        <div className="hidden lg:flex flex-1 justify-center min-w-0">
          <ul className="flex items-center gap-0.5 bg-background/40 backdrop-blur-xl border border-border/60 rounded-full px-1.5 py-1.5 max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden list-none m-0 p-0">
            {navLinks.map((l) => (
              <li key={l.to} className="shrink-0">
                <Link
                  to={l.to}
                  title={l.linkTitle}
                  className={cn(
                    "font-mono text-[10px] xl:text-xs px-2 xl:px-2.5 py-2 rounded-full transition-all whitespace-nowrap block",
                    isActive(l.to)
                      ? "bg-primary/15 text-foreground shadow-[0_0_20px_-5px_hsl(var(--primary))]"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block shrink-0">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full font-mono border-primary/40 bg-background/40 backdrop-blur-xl hover:bg-primary/10"
          >
            <Link to={routes.contact}>Let's talk →</Link>
          </Button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="bg-background/40 backdrop-blur-xl border border-border/60 rounded-full"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-border w-[min(100vw-2rem,20rem)]">
            <nav aria-label="Mobile navigation">
              <ul className="mt-12 flex flex-col gap-5 list-none m-0 p-0">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "font-mono text-xl block",
                        isActive(l.to) ? "text-primary" : "text-foreground",
                      )}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Button asChild className="rounded-full font-mono mt-4 w-full">
                    <Link to={routes.contact} onClick={() => setMobileOpen(false)}>
                      Contact
                    </Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Nav;
