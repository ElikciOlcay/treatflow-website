import "server-only";
import type { Language, Market } from "./config";
import { getMarketLanguage } from "./config";

const dictionaries = {
  de: () => import("./dictionaries/de.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  tr: () => import("./dictionaries/tr.json").then((m) => m.default),
  nl: () => import("./dictionaries/nl.json").then((m) => m.default),
  it: () => import("./dictionaries/it.json").then((m) => m.default),
  pl: () => import("./dictionaries/pl.json").then((m) => m.default),
  es: () => import("./dictionaries/es.json").then((m) => m.default),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
  fi: () => import("./dictionaries/fi.json").then((m) => m.default),
} as const;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export async function getDictionaryByLanguage(
  language: Language
): Promise<Dictionary> {
  const loader = dictionaries[language] ?? dictionaries.de;
  return loader() as Promise<Dictionary>;
}

/** Dictionary fuer einen Markt. */
export async function getDictionaryForMarket(
  market: Market
): Promise<Dictionary> {
  return getDictionaryByLanguage(getMarketLanguage(market));
}

/** @deprecated – nutze getDictionaryForMarket oder getDictionaryByLanguage */
export async function getDictionary(
  localeOrMarket: Market | Language
): Promise<Dictionary> {
  if (localeOrMarket in dictionaries) {
    return getDictionaryByLanguage(localeOrMarket as Language);
  }
  return getDictionaryForMarket(localeOrMarket as Market);
}
