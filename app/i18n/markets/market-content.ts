import type { PrefixedMarket } from "../config";
import { marketLanguage } from "../config";
import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";
import type { FeaturePageProps } from "@/app/components/FeaturePageEn";
import type { PricingIntlCopy } from "./pricing-intl";
import { getPricingIntlCopy, type PricingLocale } from "./pricing-intl";
import { getIndustryPage, type IndustryPageKey } from "./industry-pages-intl";
import { getExtraFeaturePage } from "./extra-feature-pages-intl";
import { getExtraFeaturePageNlFi } from "./extra-feature-pages-nl-fi";
import { getIndustryPageNlFi } from "./industry-pages-nl-fi";
import type { ExtraFeatureKey } from "../feature-slugs";

export function isNlFiMarket(
  market: PrefixedMarket
): market is "nl" | "fi" {
  return market === "nl" || market === "fi";
}

/** Ersetzt /en/... Pfade durch /{market}/... (Icons & Funktionen bleiben erhalten). */
export function remapEnPaths<T>(value: T, market: PrefixedMarket): T {
  if (typeof value === "string") {
    if (value === "/en") return `/${market}` as T;
    if (value.startsWith("/en/")) {
      return value.replace(/^\/en/, `/${market}`) as T;
    }
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((item) => remapEnPaths(item, market)) as T;
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      out[key] = remapEnPaths(child, market);
    }
    return out as T;
  }
  return value;
}

export function getMarketPricingCopy(market: PrefixedMarket): PricingIntlCopy {
  const lang = marketLanguage[market];
  const pricingLocale: PricingLocale =
    lang === "nl" || lang === "fi" ? lang : "en";
  const copy = getPricingIntlCopy(pricingLocale);
  return {
    ...remapEnPaths(copy, market),
    earlyAccessHref: `/${market}/early-access`,
  };
}

export function getMarketIndustryPage(
  market: PrefixedMarket,
  key: IndustryPageKey
): InternationalPageContent {
  if (isNlFiMarket(market)) {
    return getIndustryPageNlFi(market, key, market);
  }
  const page = getIndustryPage("en", key);
  return {
    ...remapEnPaths(page, market),
    locale: market,
  };
}

export function getMarketExtraFeaturePage(
  market: PrefixedMarket,
  key: ExtraFeatureKey
): FeaturePageProps {
  if (isNlFiMarket(market)) {
    return {
      ...getExtraFeaturePageNlFi(market, key),
      earlyAccessHref: `/${market}/early-access`,
    };
  }
  return remapEnPaths(getExtraFeaturePage("en", key), market);
}
