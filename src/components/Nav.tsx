import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Team", id: "process" },
  { label: "Clients", id: "clients" },
  { label: "Contact", id: "contact" },
];

function smoothScroll(e: React.MouseEvent, id: string) {
  e.preventDefault();
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#top" className="nav-logo" onClick={(e) => smoothScroll(e, "top")}>
        <span className="nav-logo-text">
          TechZy
          <span className="hover-text" aria-hidden="true">TechZy</span>
        </span>
        <span className="dot"></span>
        <small>studio / 19</small>
      </a>
      <ul className="nav-links">
        {NAV_LINKS.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className="nav-link"
              onClick={(e) => smoothScroll(e, l.id)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="nav-cta"
        onClick={(e) => smoothScroll(e, "contact")}
      >
        Get in touch <span className="arr">→</span>
      </a>
    </nav>
  );
}
