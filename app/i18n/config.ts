// Zentrale i18n-Konfiguration der Marketing-Website.
// Deutsch bleibt die Standardsprache und wird ohne URL-Prefix auf Root ausgeliefert
// (erhaelt bestehende SEO-URLs). Weitere Sprachen laufen unter /<locale>/...
// Neue Sprache hinzufuegen: hier ergaenzen + Dictionary + /<locale>-Subtree anlegen.

/** Aktive UI-/Routing-Locales auf der Website. */
export const locales = ["de", "en", "es", "it", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export const BASE_URL = "https://www.treatflow.io";

// Anzeigenamen fuer Sprachumschalter
export const localeLabels: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  es: "Español",
  it: "Italiano",
  fr: "Français",
};

// Locales, die im Sprachumschalter (Navigation oben) angeboten werden.
export const switchableLocales: Locale[] = ["de", "en", "es", "it", "fr"];

/** URL-Prefix je Locale (de = Root ohne Prefix). */
export const localePathPrefix: Record<Locale, string> = {
  de: "",
  en: "/en",
  es: "/es",
  it: "/it",
  fr: "/fr",
};

// Laender, die standardmaessig die deutsche Seite sehen sollen (DACH).
export const GERMAN_SPEAKING_COUNTRIES = ["DE", "AT", "CH"] as const;

export const SPANISH_SPEAKING_COUNTRIES = [
  "ES",
  "MX",
  "AR",
  "CO",
  "CL",
  "PE",
  "UY",
  "PY",
  "BO",
  "EC",
  "VE",
  "CR",
  "PA",
  "GT",
  "HN",
  "SV",
  "NI",
  "DO",
  "CU",
] as const;

export const ITALIAN_SPEAKING_COUNTRIES = ["IT", "SM", "VA"] as const;

// CH bleibt bei DACH (Deutsch). BE/LU/CA gehen auf FR.
export const FRENCH_SPEAKING_COUNTRIES = ["FR", "BE", "LU", "MC", "CA"] as const;

// Cookie-Name fuer die gespeicherte Sprachpraeferenz des Besuchers.
export const LOCALE_COOKIE = "tf_locale";

/** Hreflang-Werte gemaess BCP 47 (nicht identisch mit URL-Pfad). */
export const hreflangTags: Record<Locale, string> = {
  de: "de",
  en: "en",
  es: "es",
  it: "it",
  fr: "fr",
};

/** HTML lang Attribut je Locale. */
export const htmlLangTags: Record<Locale, string> = {
  de: "de",
  en: "en",
  es: "es",
  it: "it",
  fr: "fr",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function localeHomePath(locale: Locale): string {
  return localePathPrefix[locale] || "/";
}

export function buildLocaleUrl(locale: Locale, path = ""): string {
  const prefix = localePathPrefix[locale];
  const normalized = path.startsWith("/") ? path : path ? `/${path}` : "";
  if (!prefix) {
    return `${BASE_URL}${normalized || ""}`;
  }
  return `${BASE_URL}${prefix}${normalized}`;
}
