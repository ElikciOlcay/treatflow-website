import type { PrefixedMarket } from "./config";
import { marketPathPrefix } from "./config";
import { EN_SLUGS } from "./market-routes";
import {
  industrySlugs,
  type IndustryPageKey,
} from "./industry-slugs";
import {
  extraFeatureSlugs,
  type ExtraFeatureKey,
} from "./feature-slugs";

/** @deprecated – alle Non-DE-Maerkte nutzen EN-Slugs unter /{market}/ */
export type IntlLocale = PrefixedMarket;

export { extraFeatureSlugs, industrySlugs };
export type { ExtraFeatureKey, IndustryPageKey };

export const coreFeatureSlugs = {
  "appointment-calendar": EN_SLUGS["appointment-calendar"],
  "online-booking": EN_SLUGS["online-booking"],
  "client-records": EN_SLUGS["client-records"],
  forms: EN_SLUGS.forms,
  "treatment-documentation": EN_SLUGS["treatment-documentation"],
} as const;

export type CoreFeatureKey = keyof typeof coreFeatureSlugs;
export type FeatureNavKey = CoreFeatureKey | ExtraFeatureKey;

export const productSlugs = {
  pricing: EN_SLUGS.pricing,
  contact: EN_SLUGS.contact,
  about: EN_SLUGS.about,
  privacy: EN_SLUGS.privacy,
  terms: EN_SLUGS.terms,
  "early-access": EN_SLUGS["early-access"],
} as const;

export function intlBase(market: PrefixedMarket): string {
  return marketPathPrefix[market] || `/${market}`;
}

export function intlPath(market: PrefixedMarket, slug: string): string {
  const base = intlBase(market);
  if (!slug) return base;
  return `${base}/${slug}`;
}

export function industryPath(
  market: PrefixedMarket,
  key: IndustryPageKey
): string {
  // Industry slugs file still keyed by en – use EN slug for all markets
  const slug = industrySlugs[key].en;
  return intlPath(market, slug);
}

export function coreFeaturePath(
  market: PrefixedMarket,
  key: CoreFeatureKey
): string {
  return intlPath(market, coreFeatureSlugs[key]);
}

export function extraFeaturePath(
  market: PrefixedMarket,
  key: ExtraFeatureKey
): string {
  const slug = extraFeatureSlugs[key].en;
  return intlPath(market, slug);
}

export function productPath(
  market: PrefixedMarket,
  key: keyof typeof productSlugs
): string {
  return intlPath(market, productSlugs[key]);
}
