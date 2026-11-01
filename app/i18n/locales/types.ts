import type { HomePageIntlContent } from "@/app/components/HomePageIntl";
import type { FeaturePageProps } from "@/app/components/FeaturePageEn";
import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";
import type { EnComparisonContent } from "@/app/components/EnComparisonPage";
import type { PricingIntlCopy } from "../markets/pricing-intl";
import type { FeaturesOverviewContent } from "../markets/features-overview";
import type { AboutCopy, ContactCopy } from "../markets/static-pages-nl-fi";
import type { CoreKey } from "../markets/core-feature-pages";
import type { IndustryPageKey } from "../industry-slugs";

/**
 * Inhalte einer Website-Sprache mit eigenem Bundle (NL/IT/PL/ES/FR).
 *
 * Regeln fuer alle Texte:
 * - Interne Links immer als EN-Pfad schreiben (`/en/online-booking`, `/en/pricing`).
 *   `market-content.ts` mappt sie auf `/{lang}/<lokaler-slug>`.
 * - Registrierungs-/CTA-Links (`earlyAccessHref`) setzt der Getter; Platzhalter "" ist ok.
 * - Fakten wie in `public/llms-en.txt`: 14 Tage gratis, keine Kreditkarte, keine
 *   Buchungsprovision, EU-Hosting (Frankfurt), Preise in EUR.
 * - Kasse/POS, Treatflow Pay und TSE/RKSV sind DACH-only und werden nicht beworben.
 */

/** Seite ohne Registrierungslink (setzt der Getter). */
export type FeatureContent = Omit<FeaturePageProps, "earlyAccessHref">;

export type PageMeta = { title: string; description: string; keywords?: string[] };

/** Extra-Funktionsseiten, die ausserhalb DACH live sind. */
export type IntlExtraFeatureKey =
  | "vouchers"
  | "messaging"
  | "integrations"
  | "shop"
  | "studio-website";

export type ComparisonKey =
  | "treatflow-vs-fresha"
  | "treatflow-vs-treatwell"
  | "software-comparison";

export type LegalCopy = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  sections: { heading: string; html: string }[];
};

export type LocaleSiteContent = {
  home: HomePageIntlContent;
  homeMeta: PageMeta;
  pricing: PricingIntlCopy;
  pricingKeywords: string[];
  featuresMeta: PageMeta;
  featuresOverview: FeaturesOverviewContent;
  coreFeatures: Record<CoreKey, FeatureContent>;
  extraFeatures: Record<IntlExtraFeatureKey, FeatureContent>;
  industries: Record<IndustryPageKey, InternationalPageContent>;
  comparisons: Record<ComparisonKey, EnComparisonContent & { keywords: string[] }>;
  about: AboutCopy;
  contact: ContactCopy;
  privacy: LegalCopy;
  terms: LegalCopy;
};
