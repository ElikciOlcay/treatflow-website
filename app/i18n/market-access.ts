import { marketPathPrefix, type Market, type PrefixedMarket } from "./config";

/**
 * Markt-Zugang: DACH darf sich selbst registrieren.
 * Alle anderen Maerkte starten ueber Early-Access-Anfrage (kein Self-Serve-Signup).
 */
export type AccessMode = "self_serve" | "request_access";

export function getAccessMode(market: Market): AccessMode {
  return market === "de" ? "self_serve" : "request_access";
}

export function allowsSelfServeRegistration(market: Market): boolean {
  return getAccessMode(market) === "self_serve";
}

/** Primaerer CTA-Pfad fuer den jeweiligen Markt. */
export function getPrimaryCtaPath(market: Market | string): string {
  const resolved = resolveMarket(market);
  if (allowsSelfServeRegistration(resolved)) {
    return "https://app.treatflow.io/auth/register";
  }
  const prefix = marketPathPrefix[resolved];
  return prefix ? `${prefix}/early-access` : "/us/early-access";
}

export function isExternalCta(market: Market | string): boolean {
  return allowsSelfServeRegistration(resolveMarket(market));
}

/** Legacy Locale-Strings (en) → Default-Markt us. */
function resolveMarket(value: string): Market {
  if (isMarketLike(value)) return value;
  if (value === "en") return "us";
  return "us";
}

export const APP_LOGIN_BY_MARKET: Record<Market, string> = {
  de: "https://app.treatflow.io/auth/login",
  us: "https://app.treatflow.io/auth/login?lang=en",
  nl: "https://app.treatflow.io/auth/login?lang=en",
  uk: "https://app.treatflow.io/auth/login?lang=en",
  fi: "https://app.treatflow.io/auth/login?lang=en",
  ie: "https://app.treatflow.io/auth/login?lang=en",
  ca: "https://app.treatflow.io/auth/login?lang=en",
  au: "https://app.treatflow.io/auth/login?lang=en",
  ae: "https://app.treatflow.io/auth/login?lang=en",
};

/** @deprecated use APP_LOGIN_BY_MARKET */
export const APP_LOGIN_BY_LOCALE = APP_LOGIN_BY_MARKET;

function isMarketLike(value: string): value is Market {
  return value in marketPathPrefix;
}

/** Hilfs-Typ fuer Call-Sites die PrefixedMarket uebergeben. */
export type MarketAccessInput = Market | PrefixedMarket;
