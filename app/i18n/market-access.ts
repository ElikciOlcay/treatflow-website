import { localePathPrefix, type Locale } from "./config";

/**
 * Markt-Zugang: DACH darf sich selbst registrieren.
 * Alle anderen Locales starten über Early-Access-Anfrage (kein Self-Serve-Signup).
 */
export type AccessMode = "self_serve" | "request_access";

export function getAccessMode(locale: Locale): AccessMode {
  return locale === "de" ? "self_serve" : "request_access";
}

export function allowsSelfServeRegistration(locale: Locale): boolean {
  return getAccessMode(locale) === "self_serve";
}

/** Primärer CTA-Pfad für den jeweiligen Markt. */
export function getPrimaryCtaPath(locale: Locale): string {
  if (allowsSelfServeRegistration(locale)) {
    return "https://app.treatflow.io/auth/register";
  }
  const prefix = localePathPrefix[locale];
  const earlyAccessSlug: Partial<Record<Locale, string>> = {
    en: "early-access",
    es: "acceso-anticipado",
    it: "accesso-anticipato",
    fr: "acces-anticipe",
  };
  const slug = earlyAccessSlug[locale] ?? "early-access";
  return prefix ? `${prefix}/${slug}` : `/${slug}`;
}

export function isExternalCta(locale: Locale): boolean {
  return allowsSelfServeRegistration(locale);
}

export const APP_LOGIN_BY_LOCALE: Partial<Record<Locale, string>> = {
  de: "https://app.treatflow.io/auth/login",
  en: "https://app.treatflow.io/auth/login?lang=en",
  es: "https://app.treatflow.io/auth/login?lang=en",
  it: "https://app.treatflow.io/auth/login?lang=en",
  fr: "https://app.treatflow.io/auth/login?lang=en",
};
