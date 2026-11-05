import type { Feature, GatedText, Href, RichText, SiteIconName } from "../shared";

/** SEO-Metadaten der Startseite. */
export type HomeMeta = {
  title: string;
  description: string;
  keywords?: string[];
};

export type HomeHeroContent = {
  badge: string;
  /** Überschrift: `{before} <Verlauf>{highlight}</Verlauf> {connector} <nowrap>{end}</nowrap>` */
  title: { before: string; highlight: string; connector: string; end: string };
  subtitle: string;
  primaryCta: string;
  demoCta: string;
  checks: string[];
  rating: string;
  /** „Bereits von <b>500+ Studios</b> getestet“ */
  tested: { before: string; highlight: string; after: string };
  /** Locale für die Wochentage im animierten Kalender, z. B. "de-DE" */
  calendarLocale: string;
  newBookingLabel: string;
  image: { src: string; alt: string };
  /** Link auf „Funktionen live testen“; fehlt die Seite in der Sprache, ist das Bild nicht verlinkt. */
  liveDemo: { href: Href; label: string };
};

export type SocialProofContent = {
  rating: string;
  allReviews: string;
  tested: { before: string; highlight: string; after: string };
  reviews: { text: string; name: string; studio: string }[];
  /** Hinweis unter den Bewertungen, z. B. „Aus dem Deutschen übersetzt.“ */
  note?: string;
};

export type TimelineStep = {
  time: string;
  module: string;
  title: string;
  text: string;
  meta: string;
  href: Href;
  icon: SiteIconName;
  /** Tailwind-Klassen der Icon-Kachel */
  tone: string;
  feature?: Feature;
};

export type StudioDayContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: TimelineStep[];
};

export type HomeFeatureItem = {
  href: Href;
  icon: SiteIconName;
  label: string;
  desc: string;
  /** Tailwind-Klassen der Icon-Kachel */
  color: string;
  feature?: Feature;
};

export type HomeFeaturesContent = {
  title: string;
  subtitle: string;
  items: HomeFeatureItem[];
  cta: string;
  ctaNote: string;
};

/** Produktvideo; nur setzen, wenn es ein Video in dieser Sprache gibt. */
export type ProductVideoContent = {
  title: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
  posterAlt: string;
  playLabel: string;
  playAriaPrefix: string;
  unsupported: string;
};

export type PricingPlanContent = {
  name: string;
  /** z. B. "€39" bzw. "₺1.490" */
  monthlyPrice: string;
  yearlyPrice: string;
  /** z. B. "€35/Monat • Spare €47/Jahr" */
  yearlyHint: string;
  description: string;
  included: GatedText[];
  cta: string;
};

export type PricingContent = {
  eyebrow: string;
  titleBefore: string;
  /** Wird direkt hinter `titleBefore` im Verlauf ausgegeben (führendes Leerzeichen mitgeben). */
  titleHighlight: string;
  subtitle: string;
  monthly: string;
  yearly: string;
  saveBadge: string;
  perMonth: string;
  perYear: string;
  vatNote: string;
  basic: PricingPlanContent & { excluded: GatedText[] };
  booking: PricingPlanContent & { popular: string };
  /** Kassen-Add-on (DACH-only). */
  addon?: {
    feature?: Feature;
    badge: string;
    name: string;
    tag: string;
    description: string;
    monthlyPrice: string;
    yearlyPrice: string;
    note: string;
    link: { href: Href; label: string };
  };
  trial: { title: string; text: string; points: string[] };
};

export type FaqItem = {
  question: string;
  answer: RichText;
  feature?: Feature;
};

export type FaqContent = {
  badge: string;
  titleBefore: string;
  /** Wird direkt hinter `titleBefore` im Verlauf ausgegeben (führendes Leerzeichen mitgeben). */
  titleHighlight: string;
  subtitle: string;
  items: FaqItem[];
  contactTitle: string;
  contactText: string;
  demoCta: string;
};

export type HomeCtaContent = {
  ariaLabel: string;
  title: string;
  subtitle: string;
  checks: string[];
  primaryCta: string;
  demoCta: string;
  note: string;
};

export type HomeSeoContent = {
  ariaLabel: string;
  intro: RichText;
  links: { href: Href; label: string; feature?: Feature }[];
};

/** JSON-LD der Startseite. `faq` fehlt → wird aus `faq.items` erzeugt. */
export type HomeSchemaContent = {
  software: Record<string, unknown>;
  // Kein eigenes FAQ-Schema: FAQPage wird aus den sichtbaren `faq.items` erzeugt (HomeSchemas).
};

/** Alle Inhalte der Startseite in einer Sprache. */
export type HomeContent = {
  meta: HomeMeta;
  schema: HomeSchemaContent;
  hero: HomeHeroContent;
  socialProof: SocialProofContent;
  studioDay: StudioDayContent;
  features: HomeFeaturesContent;
  /** Nur mit Video in dieser Sprache (die deutschen Videos sind deutsch). */
  video?: ProductVideoContent;
  pricing: PricingContent;
  faq: FaqContent;
  cta: HomeCtaContent;
  seo: HomeSeoContent;
};
