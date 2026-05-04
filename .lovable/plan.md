
# TechZy — Marketing Site Plan

A stunning, single-page marketing site for TechZy, a programming company. The design will quietly signal credibility, technical depth, and execution quality — appealing to recruiters and B2B prospects without explicitly addressing either audience.

## Design Direction

- **Palette (Midnight Indigo):** background `#0a0a1a`, surface `#141432`, deep accent `#1e1e5a`, electric indigo `#4f46e5`. Soft white text, muted slate for secondary copy. Subtle indigo glows and gradient washes.
- **Typography:** JetBrains Mono for headings and labels (technical, confident), Work Sans for body (clean, readable). Tight tracking on display sizes, generous line-height in body.
- **Layout:** Full-width stacked sections with strong vertical rhythm, generous whitespace, and a sticky minimal nav. Each section gets a distinct visual treatment so scrolling feels like a guided tour.
- **Motion:** Smooth scroll reveals, subtle parallax on the hero, animated gradient glow behind the headline, hover lifts on cards, animated number counters in the stats band, marquee for the tech stack.

## Page Sections (top to bottom)

1. **Sticky Nav** — TechZy wordmark left; links: Services, About, Contact; small "Get in touch" pill button (indigo).
2. **Hero** — Full-viewport. Mono eyebrow ("// Engineering studio"), large display headline (e.g. "We build software that ships."), short supporting line, two CTAs ("See our work" → scrolls to Services, "Start a project" → Contact). Animated indigo gradient orb + faint code-grid background.
3. **Trust strip / Stats band** — Animated counters: years shipping, projects delivered, technologies mastered, client retention %. Tight horizontal band on `#141432`.
4. **Services** — Full-width section with 4–6 cards in a clean grid (within the full-width band): Web Applications, Mobile Apps, AI & Automation, Cloud & DevOps, API & Integrations, Technical Consulting. Each card: mono icon, title, two-line description, subtle indigo border-glow on hover.
5. **Approach / Process** — Numbered horizontal steps (Discover → Design → Build → Ship → Iterate) with mono numerals and short descriptions. Reinforces engineering rigor.
6. **Tech Stack Marquee** — Infinite-scroll row of technology names in JetBrains Mono (TypeScript, React, Node, Python, Go, Postgres, AWS, Kubernetes, etc.). Communicates breadth without bragging.
7. **About / Team** — Two-column section. Left: short company narrative — small senior team, craft-driven, ship-focused, long-term partnerships. Right: 3–4 team member cards (avatar placeholder, name, role, one-line bio). Tone is confident and human; subtly conveys hireable talent and partnership-ready maturity.
8. **Contact** — Centered form: Name, Email, Company (optional), Message, submit button. On submit: client-side validation + success toast (no backend in v1). Below the form: email address and location line.
9. **Footer** — Wordmark, small nav repeat, social placeholders (GitHub, LinkedIn, X), copyright.

## Copy Tone

Concise, technical, understated. Short sentences. No marketing fluff, no buzzwords like "synergy" or "disrupt". Examples: "Small team. Senior engineers. Real ownership." / "We pick problems worth solving and ship them well."

## Responsive

Mobile-first. Hero scales gracefully, nav collapses to a sheet menu, grids reflow to single column, marquee remains performant.

## Out of Scope (v1)

- No backend / contact form delivery (toast confirmation only — can wire up Lovable Cloud later).
- No CMS, blog, or case-study detail pages.
- No auth or admin area.

## Technical Notes

- Update `src/index.css` design tokens (HSL) to the Midnight Indigo palette; add JetBrains Mono + Work Sans via Google Fonts in `index.html`; extend `tailwind.config.ts` with `font-mono` (JetBrains Mono) and `font-sans` (Work Sans), plus indigo glow utilities and keyframes (marquee, gradient-pulse, fade-up).
- Replace `src/pages/Index.tsx` placeholder with composed section components under `src/components/sections/` (Nav, Hero, Stats, Services, Process, StackMarquee, About, Contact, Footer).
- Use existing shadcn `Button`, `Card`, `Input`, `Textarea`, `Sheet` (mobile nav), `useToast` for the contact form confirmation.
- All colors via semantic tokens — no hardcoded hex in components.
