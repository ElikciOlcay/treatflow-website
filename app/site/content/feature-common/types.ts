import type { Feature, GatedText, Href, SiteIconName } from "../shared";
import type { ProductVideoContent } from "../home/types";

/**
 * Wiederkehrende Texte der Funktions-/Branchen-Bausteine
 * (FeatureHero, FeatureSections, CTASection, QuickFacts, ContentAttribution).
 * Ohne `market` rendern die Bausteine Deutsch (= bisherige feste Texte).
 */
export type FeatureCommonContent = {
  /** sr-only-Label des Haus-Icons in den Breadcrumbs */
  breadcrumbHome: string;
  /** Breadcrumb „Funktionen“ (Link auf die Funktionsübersicht) */
  breadcrumbFeatures: string;
  hero: {
    /** Standard-Button „14 Tage gratis testen“ */
    primaryCta: string;
    /** Vertrauenszeile unter den Buttons */
    trust: string[];
    /** „4,6/5 auf Google · 500+ Studios“ */
    rating: string;
    /** Überschrift über den KI-Antwortkapseln („Kurz erklärt“) */
    shortExplained: string;
  };
  /** Standard-Überschriften der Abschnitte */
  sections: {
    understand: string;
    howItWorks: string;
    cards: string;
    faq: string;
    related: string;
  };
  /** Abschluss-CTA der Funktionsseiten (FeaturePageCta) */
  pageCta: {
    primary: string;
    secondary: string;
    secondaryHref: Href;
  };
  /** Sichtbare Autor-/Datumszeile */
  attribution: {
    updated: string;
    by: string;
    created: string;
    /** Intl-Locale fürs Datum, z. B. "de-DE" */
    dateLocale: string;
    jobTitles: { olcay: string; goekce: string };
    /** Ziel des Autor-Links (DE: absolute URL wie bisher) */
    authorHref: Href;
  };
  /** Großer Abschluss-Block (CTASection) */
  ctaSection: {
    title: string;
    text: string;
    primary: string;
    demo: string;
  };
  /** Fakten-Box (QuickFacts) */
  quickFacts: {
    ariaLabel: string;
    title: string;
    subtitle: string;
    facts: { icon: SiteIconName; value: string; label: string; color: string }[];
  };
  /** `inLanguage` im WebPage-Schema */
  schemaLanguage: string;
};

/** Hero-Überschrift: `{before}<Akzent>{highlight}</Akzent>{after}` */
export type FeatureTitle = { before: string; highlight: string; after?: string };

/**
 * Gemeinsamer Inhaltstyp der Funktionsseiten im Hero/Sections-Layout
 * (Terminkalender, Online-Buchungen, Kundenverwaltung …).
 */
export type FeaturePageContent = {
  meta: {
    title: string;
    description: string;
    keywords?: string[];
    /** Nur DE: eigenes OpenGraph (Andere Sprachen: buildPageMetadata). */
    openGraph?: { title: string; description: string; image: { url: string; alt: string } };
  };
  dates: { modified: string; published: string };
  schema: {
    /** Präfix der Script-IDs, z. B. "terminkalender" */
    id: string;
    webPage: { name: string; description: string };
    software?: {
      name: string;
      description: string;
      featureList?: string[];
      price: string;
      currency: string;
      rating?: boolean;
    };
  };
  /** Letzter Breadcrumb (Seitenname) */
  breadcrumb: string;
  hero: {
    eyebrow: string;
    eyebrowIcon: SiteIconName;
    title: FeatureTitle;
    description: string;
    chips: GatedText[];
    /** Fehlt die Zielseite in der Sprache, entfällt der Button. */
    secondaryCta?: { label: string; href: Href };
    capsules: { question: string; answer: string; feature?: Feature }[];
    image: { src: string; alt: string };
  };
  /** Nur mit Video in dieser Sprache. */
  video?: ProductVideoContent;
  understand: {
    title: string;
    description?: string;
    items: { icon: SiteIconName; title: string; text: string; feature?: Feature }[];
  };
  howItWorks: {
    title?: string;
    description?: string;
    steps: { title: string; text: string; feature?: Feature }[];
  };
  cards: {
    title?: string;
    description?: string;
    items: {
      icon: SiteIconName;
      title: string;
      text: string;
      points?: GatedText[];
      feature?: Feature;
    }[];
  };
  faq: {
    title: string;
    items: { question: string; answer: string; feature?: Feature }[];
  };
  related: {
    title?: string;
    items: { href: Href; title: string; description: string; feature?: Feature }[];
  };
  cta: {
    title: string;
    description: string;
    /** Fehlt die Zielseite, wird der Standard („Preise ansehen“) genutzt. */
    secondary?: { label: string; href: Href };
  };
};
