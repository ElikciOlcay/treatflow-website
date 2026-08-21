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
import { APP_REGISTER_BY_MARKET } from "../market-access";

function selfServeCtaLabel(lang: string): string {
  if (lang === "nl") return "Gratis proberen";
  if (lang === "fi") return "Aloita ilmainen kokeilu";
  return "Start free trial";
}

function selfServePricingSubtitle(lang: string): string {
  if (lang === "nl") {
    return "Kies het plan dat bij jouw studio past. Start direct met 14 dagen gratis – geen creditcard nodig.";
  }
  if (lang === "fi") {
    return "Valitse studioosi sopiva paketti. Aloita suoraan 14 päivän ilmaisella kokeilulla – ei luottokorttia.";
  }
  return "Choose the plan that fits your studio. Start your 14-day free trial – no credit card required.";
}

function selfServeFeatureCta(lang: string): Pick<
  FeaturePageProps,
  "earlyAccessHref" | "primaryCta" | "bottomTitle" | "bottomText"
> {
  if (lang === "nl") {
    return {
      earlyAccessHref: "",
      primaryCta: "14 dagen gratis proberen",
      bottomTitle: "Klaar om te starten?",
      bottomText:
        "Start je gratis proefperiode – geen creditcard, opzeggen wanneer je wilt.",
    };
  }
  if (lang === "fi") {
    return {
      earlyAccessHref: "",
      primaryCta: "Kokeile 14 päivää ilmaiseksi",
      bottomTitle: "Valmis aloittamaan?",
      bottomText:
        "Aloita ilmainen kokeilu – ei luottokorttia, peruuta milloin tahansa.",
    };
  }
  return {
    earlyAccessHref: "",
    primaryCta: "Start 14-day free trial",
    bottomTitle: "Ready to get started?",
    bottomText:
      "Start your free trial – no credit card required, cancel anytime.",
  };
}

export function isNlFiMarket(market: string): market is "nl" | "fi" {
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
    earlyAccessHref: APP_REGISTER_BY_MARKET[market],
    cta: selfServeCtaLabel(lang),
    subtitle: selfServePricingSubtitle(lang),
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
  const lang = marketLanguage[market];
  const cta = selfServeFeatureCta(lang);
  if (isNlFiMarket(market)) {
    return {
      ...getExtraFeaturePageNlFi(market, key),
      ...cta,
      earlyAccessHref: APP_REGISTER_BY_MARKET[market],
    };
  }
  return {
    ...remapEnPaths(getExtraFeaturePage("en", key), market),
    ...cta,
    earlyAccessHref: APP_REGISTER_BY_MARKET[market],
  };
}
