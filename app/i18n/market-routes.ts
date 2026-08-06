import { marketPathPrefix, type Market, type PrefixedMarket } from "./config";

/**
 * Alle Non-DE-Maerkte nutzen dieselben EN-Slugs unter /{market}/...
 * (DE behält lokalisierte Root-URLs).
 */
export const EN_SLUGS = {
  home: "",
  pricing: "pricing",
  contact: "contact",
  "early-access": "early-access",
  about: "about",
  privacy: "privacy",
  terms: "terms",
  "appointment-calendar": "appointment-calendar",
  "online-booking": "online-booking",
  "client-records": "client-records",
  forms: "forms",
  "treatment-documentation": "treatment-documentation",
  "point-of-sale": "point-of-sale",
  vouchers: "vouchers",
  messaging: "messaging",
  integrations: "integrations",
  features: "features",
  shop: "shop",
  "studio-website": "studio-website",
  "beauty-salon-software": "beauty-salon-software",
  "aesthetic-clinic-software": "aesthetic-clinic-software",
  "laser-hair-removal-software": "laser-hair-removal-software",
  "permanent-makeup-software": "permanent-makeup-software",
  "tattoo-studio-software": "tattoo-studio-software",
  "nail-salon-software": "nail-salon-software",
  "lash-studio-software": "lash-studio-software",
  "spa-wellness-software": "spa-wellness-software",
  "massage-software": "massage-software",
} as const;

export type MarketPageSlug = keyof typeof EN_SLUGS;

export function marketBase(market: PrefixedMarket | Market): string {
  if (market === "de") return "";
  return marketPathPrefix[market] || `/${market}`;
}

export function marketPath(
  market: PrefixedMarket | Market,
  slug: string
): string {
  const base = marketBase(market);
  if (!slug) return base || "/";
  return `${base}/${slug}`;
}

export function marketPagePath(
  market: PrefixedMarket | Market,
  key: MarketPageSlug
): string {
  return marketPath(market, EN_SLUGS[key]);
}
