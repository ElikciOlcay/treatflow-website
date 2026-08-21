// Website-Sprachen zuerst: Deutsch (Root) und Englisch (/en).
// Alte Laender-Maerkte (/us, /uk, /nl, …) bleiben im Typ fuer Redirects,
// sind aber nicht mehr im Sprach-Switcher.

/** Alle bekannten Markt-/Pfad-Codes (inkl. Legacy). */
export const markets = [
  "de",
  "en",
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

/** Aktive Site-Sprachen (Switcher + Canonical). */
export const siteLanguages = ["de", "en"] as const;
export type SiteLanguage = (typeof siteLanguages)[number];

/** Sprachen fuer Dictionaries / html lang. */
export const languages = ["de", "en", "nl", "fi"] as const;
export type Language = (typeof languages)[number];

/** @deprecated Alias – Routing nutzt Market. */
export type Locale = Market;

export const defaultMarket: Market = "de";
export const defaultLocale: Market = "de";
export const defaultEnglishMarket: Market = "en";

export const BASE_URL = "https://www.treatflow.io";

/** Anzeigenamen (Switcher: nur DE/EN). */
export const marketLabels: Record<Market, string> = {
  de: "Deutsch",
  en: "English",
  us: "English",
  nl: "English",
  uk: "English",
  fi: "English",
  ie: "English",
  ca: "English",
  au: "English",
  ae: "English",
};

export const localeLabels = marketLabels;

/** Kurze Badges im Switcher (keine Laenderflaggen). */
export const marketFlags: Record<Market, string> = {
  de: "DE",
  en: "EN",
  us: "EN",
  nl: "EN",
  uk: "EN",
  fi: "EN",
  ie: "EN",
  ca: "EN",
  au: "EN",
  ae: "EN",
};

/** Nur Deutsch und Englisch im Switcher. */
export const switchableMarkets: Market[] = ["de", "en"];
export const switchableLocales = switchableMarkets;

/** Sprache je Markt. */
export const marketLanguage: Record<Market, Language> = {
  de: "de",
  en: "en",
  us: "en",
  nl: "en",
  uk: "en",
  fi: "en",
  ie: "en",
  ca: "en",
  au: "en",
  ae: "en",
};

/** URL-Prefix (de = Root, en = /en). */
export const marketPathPrefix: Record<Market, string> = {
  de: "",
  en: "/en",
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

/** Legacy-Laender → kanonisches Englisch. */
export const LEGACY_COUNTRY_MARKETS = [
  "us",
  "nl",
  "uk",
  "fi",
  "ie",
  "ca",
  "au",
  "ae",
] as const;

export type LegacyCountryMarket = (typeof LEGACY_COUNTRY_MARKETS)[number];

export function isLegacyCountryMarket(
  value: string | undefined | null
): value is LegacyCountryMarket {
  return !!value && (LEGACY_COUNTRY_MARKETS as readonly string[]).includes(value);
}

/** Geo → bevorzugte Site-Sprache (nur de/en). */
export const GERMAN_SPEAKING_COUNTRIES = ["DE", "AT", "CH", "LI"] as const;

export const MARKET_BY_COUNTRY: Record<string, Market> = {
  DE: "de",
  AT: "de",
  CH: "de",
  LI: "de",
};

/** Cookie fuer Sprachpraeferenz (de | en). */
export const MARKET_COOKIE = "tf_market";
export const LOCALE_COOKIE = MARKET_COOKIE;

/** Hreflang – kanonisch nur de + en. */
export const hreflangTags: Record<Market, string> = {
  de: "de",
  en: "en",
  us: "en",
  nl: "en",
  uk: "en",
  fi: "en",
  ie: "en",
  ca: "en",
  au: "en",
  ae: "en",
};

export const htmlLangTags: Record<Market, string> = {
  de: "de",
  en: "en",
  us: "en",
  nl: "en",
  uk: "en",
  fi: "en",
  ie: "en",
  ca: "en",
  au: "en",
  ae: "en",
};

export const ogLocaleTags: Record<Market, string> = {
  de: "de_DE",
  en: "en_US",
  us: "en_US",
  nl: "en_US",
  uk: "en_US",
  fi: "en_US",
  ie: "en_US",
  ca: "en_US",
  au: "en_US",
  ae: "en_US",
};

export const marketCurrency: Record<Market, string> = {
  de: "EUR",
  en: "EUR",
  us: "USD",
  nl: "EUR",
  uk: "GBP",
  fi: "EUR",
  ie: "EUR",
  ca: "CAD",
  au: "AUD",
  ae: "AED",
};

export const englishVariant: Record<Market, "us" | "gb" | null> = {
  de: null,
  en: "us",
  us: "us",
  nl: null,
  uk: "gb",
  fi: null,
  ie: "gb",
  ca: "us",
  au: "gb",
  ae: "us",
};

/**
 * Prefixed Maerkte die noch gerendert werden.
 * Aktiv: nur /en. Legacy-Laender werden nach /en umgeleitet.
 */
export const prefixedMarkets = ["en"] as const satisfies readonly Market[];

export type PrefixedMarket = (typeof prefixedMarkets)[number];

/** Alle prefixed Pfad-Codes inkl. Legacy (fuer Redirect-Erkennung). */
export const allPrefixedMarketCodes = markets.filter(
  (m): m is Exclude<Market, "de"> => m !== "de"
);

export function isMarket(value: string | undefined | null): value is Market {
  return !!value && (markets as readonly string[]).includes(value);
}

export function isLocale(value: string | undefined | null): value is Market {
  return isMarket(value);
}

export function isPrefixedMarket(
  value: string | undefined | null
): value is PrefixedMarket {
  return !!value && (prefixedMarkets as readonly string[]).includes(value);
}

export function isPrefixedMarketPath(
  value: string | undefined | null
): boolean {
  return !!value && (allPrefixedMarketCodes as readonly string[]).includes(value);
}

/** Cookie-/Legacy-Wert → aktive Site-Sprache. */
export function resolveSiteMarket(value: string | null | undefined): Market {
  if (!value) return defaultMarket;
  if (value === "de") return "de";
  if (value === "en" || isLegacyCountryMarket(value)) return "en";
  if (value === "es" || value === "it" || value === "fr") return "en";
  return defaultMarket;
}

/**
 * Content-Lookup: Englisch nutzt die bestehende US-Content-Basis,
 * ohne laenderspezifische URL.
 */
export function resolveContentMarket(market: Market): Market {
  if (market === "en") return "us";
  if (isLegacyCountryMarket(market)) return market;
  return market;
}

export function marketHomePath(market: Market): string {
  const resolved = resolveSiteMarket(market);
  return marketPathPrefix[resolved] || "/";
}

export function localeHomePath(market: Market): string {
  return marketHomePath(market);
}

export function buildMarketUrl(market: Market, path = ""): string {
  const resolved = resolveSiteMarket(market);
  const prefix = marketPathPrefix[resolved];
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
  return marketLanguage[resolveSiteMarket(market)];
}
