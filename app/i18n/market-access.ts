import {
  marketLanguage,
  marketPathPrefix,
  markets,
  type Market,
  type PrefixedMarket,
} from "./config";

/**
 * Alle Maerkte: Self-Serve-Registrierung wie auf der deutschen Seite.
 * Early Access entfaellt.
 */
export type AccessMode = "self_serve";

export const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ||
  "https://app.treatflow.io";

/** Sprachen, die die App aktuell per ?lang= zuverlaessig uebernimmt. */
export type AppHandoffLanguage = "de" | "en";

/**
 * Website-Markt-/Dictionary-Sprache → App-?lang=.
 * nl/fi fallen vorerst auf en, bis die App-UI dafuer fertig ist.
 */
export function toAppLanguage(
  language: string | null | undefined
): AppHandoffLanguage {
  return language === "de" ? "de" : "en";
}

export function getAppLanguageForMarket(market: Market): AppHandoffLanguage {
  return toAppLanguage(marketLanguage[market]);
}

/** Baut App-URLs inkl. Sprach-Handoff (?lang=). */
export function buildAppUrl(
  path: string,
  options?: {
    lang?: AppHandoffLanguage | string | null;
    market?: Market;
    params?: Record<string, string | undefined | null>;
  }
): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(`${APP_BASE_URL}${normalizedPath}`);

  const lang =
    options?.lang != null
      ? toAppLanguage(options.lang)
      : options?.market
        ? getAppLanguageForMarket(options.market)
        : "de";

  url.searchParams.set("lang", lang);

  if (options?.params) {
    for (const [key, value] of Object.entries(options.params)) {
      if (value != null && value !== "") {
        url.searchParams.set(key, value);
      }
    }
  }

  return url.toString();
}

export function getAccessMode(_market?: Market): AccessMode {
  return "self_serve";
}

export function allowsSelfServeRegistration(_market?: Market): boolean {
  return true;
}

/** Primaerer CTA: immer App-Registrierung mit passender Sprache. */
export function getPrimaryCtaPath(market: Market | string): string {
  return buildAppUrl("/auth/register", { market: resolveMarket(market) });
}

/** CTAs zur App oeffnen extern (app.treatflow.io). */
export function isExternalCta(_market?: Market | string): boolean {
  return true;
}

/** Locale-/Markt-Strings → aktive Site-Sprache (de | en). */
function resolveMarket(value: string): Market {
  if (value === "de") return "de";
  if (isMarketLike(value)) {
    return value === "de" ? "de" : "en";
  }
  return "en";
}

function buildLoginMap(): Record<Market, string> {
  return Object.fromEntries(
    markets.map((market) => [
      market,
      buildAppUrl("/auth/login", { market }),
    ])
  ) as Record<Market, string>;
}

function buildRegisterMap(): Record<Market, string> {
  return Object.fromEntries(
    markets.map((market) => [
      market,
      buildAppUrl("/auth/register", { market }),
    ])
  ) as Record<Market, string>;
}

export const APP_LOGIN_BY_MARKET: Record<Market, string> = buildLoginMap();
export const APP_REGISTER_BY_MARKET: Record<Market, string> = buildRegisterMap();

/** DACH-Default fuer deutsche Marketing-Seiten. */
export const APP_REGISTER_URL = APP_REGISTER_BY_MARKET.de;
export const APP_LOGIN_URL = APP_LOGIN_BY_MARKET.de;

/** @deprecated use APP_LOGIN_BY_MARKET */
export const APP_LOGIN_BY_LOCALE = APP_LOGIN_BY_MARKET;

/** @deprecated Alias – Early Access gibt es nicht mehr. */
export function getEarlyAccessPath(market: Market | string): string {
  return getPrimaryCtaPath(market);
}

function isMarketLike(value: string): value is Market {
  return value in marketPathPrefix;
}

/** Hilfs-Typ fuer Call-Sites die PrefixedMarket uebergeben. */
export type MarketAccessInput = Market | PrefixedMarket;
