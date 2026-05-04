import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Work", num: "01" },
  { href: "#studio", label: "Studio", num: "02" },
  { href: "#contact", label: "Contact", num: "03" },
];

const Nav = () => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (v[0]) setActive(`#${v[0].target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const click = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container flex h-20 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold tracking-widest uppercase">
          Tech<span className="text-primary">Zy</span>
          <span className="ml-2 text-muted-foreground/60 font-normal">/ studio</span>
        </a>

        <div className="hidden md:flex items-center gap-1 bg-background/40 backdrop-blur-xl border border-border/60 rounded-full px-2 py-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => click(e, l.href)}
              className={cn(
                "font-mono text-xs px-4 py-2 rounded-full transition-all flex items-center gap-2",
                active === l.href
                  ? "bg-primary/15 text-foreground shadow-[0_0_20px_-5px_hsl(var(--primary))]"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span className="text-primary/70 text-[10px]">{l.num}</span>
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild size="sm" variant="outline" className="rounded-full font-mono border-primary/40 bg-background/40 backdrop-blur-xl hover:bg-primary/10">
            <a href="#contact" onClick={(e) => click(e, "#contact")}>Let's talk →</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu" className="bg-background/40 backdrop-blur-xl border border-border/60 rounded-full">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-border">
            <div className="mt-12 flex flex-col gap-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={(e) => click(e, l.href)}
                  className={cn("font-mono text-2xl flex items-baseline gap-3", active === l.href ? "text-primary" : "text-foreground")}>
                  <span className="text-primary/60 text-sm">{l.num}</span>
                  {l.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Nav;
