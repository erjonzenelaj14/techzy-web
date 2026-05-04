import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container py-12 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="font-mono text-lg font-semibold">
            <span className="text-primary">{"</"}</span>TechZy<span className="text-primary">{">"}</span>
          </div>
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} TechZy. Built with care.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#services" className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#about" className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="social link"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;