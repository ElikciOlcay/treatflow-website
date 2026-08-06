// Laender-Maerkte (Phorest-Modell): Auswahl nach Land, nicht nach Sprache.
// DE bleibt ohne URL-Prefix auf Root (bestehende SEO-URLs).
// Weitere Maerkte: /us, /nl, /uk, /fi, /ie, /ca, /au, /ae

/** Aktive Laender-Maerkte auf der Website. */
export const markets = [
  "de",
  "us",
  "nl",
  "uk",
  "fi",
  "ie",
  "ca",
  "au",
  "ae",
] as const;

export type Market = (typeof markets)[number];

/** Sprachen fuer Dictionaries / html lang (nicht gleich URL). */
export const languages = ["de", "en", "nl", "fi"] as const;
export type Language = (typeof languages)[number];

/** @deprecated Alias – Routing nutzt Market. Bleibt fuer schrittweise Migration. */
export type Locale = Market;

export const defaultMarket: Market = "de";
export const defaultLocale: Market = "de";

export const BASE_URL = "https://www.treatflow.io";

/** Anzeigenamen im Laender-Switcher (wie Phorest: Mischform Land/Sprache). */
export const marketLabels: Record<Market, string> = {
  de: "Deutsch",
  us: "United States",
  nl: "Nederlands",
  uk: "United Kingdom",
  fi: "Suomi",
  ie: "Ireland",
  ca: "Canada",
  au: "Australia",
  ae: "UAE",
};

export const localeLabels = marketLabels;

/** ISO-3166 Flaggen-Emoji je Markt. */
export const marketFlags: Record<Market, string> = {
  de: "🇩🇪",
  us: "🇺🇸",
  nl: "🇳🇱",
  uk: "🇬🇧",
  fi: "🇫🇮",
  ie: "🇮🇪",
  ca: "🇨🇦",
  au: "🇦🇺",
  ae: "🇦🇪",
};

/** Maerkte im Switcher (alle). */
export const switchableMarkets: Market[] = [...markets];
export const switchableLocales = switchableMarkets;

/** Sprache je Markt. */
export const marketLanguage: Record<Market, Language> = {
  de: "de",
  us: "en",
  nl: "nl",
  uk: "en",
  fi: "fi",
  ie: "en",
  ca: "en",
  au: "en",
  ae: "en",
};

/** URL-Prefix je Markt (de = Root ohne Prefix). */
export const marketPathPrefix: Record<Market, string> = {
  de: "",
  us: "/us",
  nl: "/nl",
  uk: "/uk",
  fi: "/fi",
  ie: "/ie",
  ca: "/ca",
  au: "/au",
  ae: "/ae",
};

export const localePathPrefix = marketPathPrefix;

/** Geo → Markt (ISO country codes). */
export const GERMAN_SPEAKING_COUNTRIES = ["DE", "AT", "CH", "LI"] as const;

export const MARKET_BY_COUNTRY: Record<string, Market> = {
  DE: "de",
  AT: "de",
  CH: "de",
  LI: "de",
  US: "us",
  NL: "nl",
  GB: "uk",
  UK: "uk",
  FI: "fi",
  IE: "ie",
  CA: "ca",
  AU: "au",
  AE: "ae",
};

/** Cookie fuer gespeicherte Markt-Praeferenz. */
export const MARKET_COOKIE = "tf_market";
/** Legacy Cookie-Name (wird in Middleware migriert). */
export const LOCALE_COOKIE = MARKET_COOKIE;

/** Hreflang BCP 47 je Markt (laenderspezifisch fuer SEO). */
export const hreflangTags: Record<Market, string> = {
  de: "de-DE",
  us: "en-US",
  nl: "nl-NL",
  uk: "en-GB",
  fi: "fi-FI",
  ie: "en-IE",
  ca: "en-CA",
  au: "en-AU",
  ae: "en-AE",
};

/** HTML lang Attribut. */
export const htmlLangTags: Record<Market, string> = {
  de: "de",
  us: "en",
  nl: "nl",
  uk: "en-GB",
  fi: "fi",
  ie: "en-IE",
  ca: "en-CA",
  au: "en-AU",
  ae: "en",
};

/** OpenGraph locale. */
export const ogLocaleTags: Record<Market, string> = {
  de: "de_DE",
  us: "en_US",
  nl: "nl_NL",
  uk: "en_GB",
  fi: "fi_FI",
  ie: "en_IE",
  ca: "en_CA",
  au: "en_AU",
  ae: "en_AE",
};

/** Waehrungshinweis fuer Copy (Display, nicht Checkout). */
export const marketCurrency: Record<Market, string> = {
  de: "EUR",
  us: "USD",
  nl: "EUR",
  uk: "GBP",
  fi: "EUR",
  ie: "EUR",
  ca: "CAD",
  au: "AUD",
  ae: "AED",
};

/** Britisches vs. amerikanisches Englisch. */
export const englishVariant: Record<Market, "us" | "gb" | null> = {
  de: null,
  us: "us",
  nl: null,
  uk: "gb",
  fi: null,
  ie: "gb",
  ca: "us",
  au: "gb",
  ae: "us",
};

/** Prefixed Maerkte (alles ausser DE). */
export const prefixedMarkets = markets.filter((m) => m !== "de") as Exclude<
  Market,
  "de"
>[];

export type PrefixedMarket = (typeof prefixedMarkets)[number];

export function isMarket(value: string | undefined | null): value is Market {
  return !!value && (markets as readonly string[]).includes(value);
}

/** @deprecated use isMarket */
export function isLocale(value: string | undefined | null): value is Market {
  return isMarket(value);
}

export function isPrefixedMarket(
  value: string | undefined | null
): value is PrefixedMarket {
  return !!value && (prefixedMarkets as readonly string[]).includes(value);
}

export function marketHomePath(market: Market): string {
  return marketPathPrefix[market] || "/";
}

export function localeHomePath(market: Market): string {
  return marketHomePath(market);
}

export function buildMarketUrl(market: Market, path = ""): string {
  const prefix = marketPathPrefix[market];
  const normalized = path.startsWith("/") ? path : path ? `/${path}` : "";
  if (!prefix) {
    return `${BASE_URL}${normalized || ""}`;
  }
  return `${BASE_URL}${prefix}${normalized}`;
}

export function buildLocaleUrl(market: Market, path = ""): string {
  return buildMarketUrl(market, path);
}

export function getMarketLanguage(market: Market): Language {
  return marketLanguage[market];
}
