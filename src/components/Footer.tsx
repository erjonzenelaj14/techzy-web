export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        <div className="reveal">
          <h2 className="footer-headline">
            Let's <span className="uline">build</span><br /> something.
          </h2>
        </div>

        <div className="footer-col">
          <h4>Sitemap</h4>
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#process">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Elsewhere</h4>
          <ul>
            <li><a href="https://github.com/erjonzenelaj14" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/erjonzenelaj/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Currently</h4>
          <div className="status"><span className="pulse"></span> Accepting projects</div>
          <div style={{ marginTop: 14, fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "var(--muted)", lineHeight: 1.6 }}>
            Remote · EU / US<br />
            Engineered with care
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="mailto:hello@techzy.dev" className="footer-email">
          hello@techzy.dev <span className="arr">↗</span>
        </a>
        <span>© 2026 TechZy Studio</span>
        <span>Privacy</span>
        <span>Terms</span>
      </div>
    </footer>
  );
}
