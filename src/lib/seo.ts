export const SITE_ORIGIN = "https://techzy.services";

export const routes = {
  home: "/",
  services: "/services",
  softwareEngineeringStudio: "/software-engineering-studio",
  solutions: "/solutions",
  caseStudies: "/case-studies",
  about: "/about",
  contact: "/contact",
} as const;

export type RelatedPage = { href: string; name: string };

function setMeta(attr: "name" | "property", key: string, content: string) {
  const selector = attr === "name" ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function applyPageSeo(
  title: string,
  description: string,
  path: string,
  related: RelatedPage[] = [],
) {
  const url = `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;

  document.title = title;

  setMeta("name", "description", description);
  setLink("canonical", url);

  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:url", url);
  setMeta("property", "og:type", "website");
  setMeta("property", "og:image", `${SITE_ORIGIN}/og-image.svg`);

  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setMeta("name", "twitter:image", `${SITE_ORIGIN}/og-image.svg`);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      name: "TechZy",
      url: SITE_ORIGIN,
    },
    {
      "@type": "WebPage",
      "@id": url,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      ...(related.length
        ? {
            relatedLink: related.map((p) => `${SITE_ORIGIN}${p.href.startsWith("/") ? p.href : `/${p.href}`}`),
          }
        : {}),
    },
  ];

  const json = { "@context": "https://schema.org", "@graph": graph };

  const scriptId = "techzy-jsonld";
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(json);
}
