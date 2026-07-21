import "server-only";
import type { Locale } from "./config";

const dictionaries = {
  de: () => import("./dictionaries/de.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  es: () => import("./dictionaries/es.json").then((m) => m.default),
  it: () => import("./dictionaries/it.json").then((m) => m.default),
  fr: () => import("./dictionaries/fr.json").then((m) => m.default),
} as const;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  if (locale === "en") return dictionaries.en();
  if (locale === "es") return dictionaries.es();
  if (locale === "it") return dictionaries.it();
  if (locale === "fr") return dictionaries.fr();
  return dictionaries.de() as Promise<Dictionary>;
}
