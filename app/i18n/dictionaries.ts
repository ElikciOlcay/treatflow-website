import "server-only";
import type { Language, Market } from "./config";
import { getMarketLanguage } from "./config";

const dictionaries = {
  de: () => import("./dictionaries/de.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  nl: () => import("./dictionaries/nl.json").then((m) => m.default),
  fi: () => import("./dictionaries/fi.json").then((m) => m.default),
} as const;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export async function getDictionaryByLanguage(
  language: Language
): Promise<Dictionary> {
  if (language === "nl") return dictionaries.nl();
  if (language === "fi") return dictionaries.fi();
  if (language === "en") return dictionaries.en();
  return dictionaries.de() as Promise<Dictionary>;
}

/** Dictionary fuer einen Laender-Markt. */
export async function getDictionaryForMarket(
  market: Market
): Promise<Dictionary> {
  return getDictionaryByLanguage(getMarketLanguage(market));
}

/** @deprecated – nutze getDictionaryForMarket oder getDictionaryByLanguage */
export async function getDictionary(
  localeOrMarket: Market | Language | "es" | "it" | "fr"
): Promise<Dictionary> {
  if (localeOrMarket === "es" || localeOrMarket === "it" || localeOrMarket === "fr") {
    return dictionaries.en();
  }
  if (localeOrMarket === "nl" || localeOrMarket === "fi" || localeOrMarket === "en" || localeOrMarket === "de") {
    // Could be language OR market (nl/fi/de are both)
    if (localeOrMarket === "en") return dictionaries.en();
    return getDictionaryByLanguage(localeOrMarket as Language);
  }
  return getDictionaryForMarket(localeOrMarket as Market);
}
