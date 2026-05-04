import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-lg font-semibold tracking-tight">
          <span className="text-primary">{"</"}</span>TechZy<span className="text-primary">{">"}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-full font-mono">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border">
            <div className="mt-10 flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-mono text-lg text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <Button asChild className="rounded-full font-mono mt-4">
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Nav;