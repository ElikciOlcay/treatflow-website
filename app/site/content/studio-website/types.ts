import type { SiteIconName } from "../shared";

/**
 * Website für Kosmetikstudios / Studio website – eigenes 9-Sektionen-Layout
 * (Hero, Demo, Warum, Leistungen, Treatflow-Vorteil, Preis, Prozess, FAQ, CTA).
 */
export type StudioWebsiteContent = {
  meta: {
    title: string;
    description: string;
    keywords?: string[];
    /** Nur DE: eigenes OpenGraph (andere Sprachen: buildPageMetadata). */
    openGraph?: { title: string; description: string; image: { url: string; alt: string } };
  };
  schema: {
    serviceName: string;
    serviceDescription: string;
    serviceType: string;
    /** ISO-Ländercodes; fehlt = kein `areaServed` */
    areaServed?: string[];
    priceDescription: string;
  };
  /** `mailto:`-Link mit Betreff in der Sprache */
  emailHref: string;
  hero: {
    badge: string;
    /** `{before} <Akzent>{highlight}</Akzent>{after}` – Leerzeichen nach `before` wird ergänzt */
    title: { before: string; highlight: string; after?: string };
    lead: string;
    sub: string;
    primaryCta: string;
    emailCta: string;
    checks: string[];
  };
  demo: {
    badge: string;
    title: string;
    description: string;
    href: string;
    imageAlt: string;
    overlayLabel: string;
    overlayTitle: string;
    hoverCta: string;
    cardTitle: string;
    cardText: string;
    cardCta: string;
  };
  why: {
    title: string;
    description: string;
    stats: { value: string; label: string; desc: string }[];
  };
  services: {
    title: string;
    description: string;
    items: { icon: SiteIconName; title: string; desc: string }[];
  };
  advantage: {
    badge: string;
    title: string;
    description: string;
    points: string[];
    boxTitle: string;
    boxText: string;
    creditAmount: string;
    creditLabel: string;
    creditNote: string;
  };
  pricing: {
    title: string;
    description: string;
    badge: string;
    /** `{prefix} {amount} {currency}` – `prefix` darf leer sein */
    price: { prefix: string; amount: string; currency: string };
    note: string;
    points: string[];
    customerLabel: string;
    customerText: string;
    cta: string;
    footnote: string;
  };
  process: {
    title: string;
    description: string;
    steps: { step: string; title: string; desc: string }[];
  };
  faq: {
    title: string;
    description: string;
    items: { question: string; answer: string }[];
    /** Nur die ersten N Fragen ins FAQ-Schema (DE: 5 wie bisher); fehlt = alle */
    schemaCount?: number;
  };
  cta: {
    title: string;
    description: string;
    primary: string;
    email: string;
    checks: string[];
  };
};
