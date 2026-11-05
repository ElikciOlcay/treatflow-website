import type { Feature } from "../shared";

/**
 * Inhalte der Preisseite (DE `/preise`, sonst `/{lang}/pricing` lokalisiert).
 * Die Preiskarten selbst kommen aus `home/<lang>.ts` (`pricing`, PricingSection).
 */
export type PricingPageContent = {
  meta: {
    title: string;
    description: string;
    keywords?: string[];
    /** Nur DE: eigenes OpenGraph (andere Sprachen: buildPageMetadata). */
    openGraph?: { title: string; description: string };
  };
  dates: { modified: string; published: string };
  /** Letzter Breadcrumb (Seitenname) */
  breadcrumb: string;
  capsule: { question: string; answer: string };
  schema: {
    webPage: { name: string; description: string };
    priceValidUntil: string;
    offers: { name: string; price: string; currency: string; description?: string; feature?: Feature }[];
  };
  comparison: {
    title: string;
    subtitle: string;
    vatNote: string;
    featureLabel: string;
    basicLabel: string;
    bookingLabel: string;
    rows: { label: string; basic: boolean; booking: boolean; feature?: Feature }[];
    cta: string;
  };
  why: {
    title: string;
    subtitle: string;
    stats: { value: string; label: string }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: { question: string; answer: string; feature?: Feature }[];
  };
};
