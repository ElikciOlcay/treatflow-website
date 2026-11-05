import type { SiteLanguage } from "@/app/i18n/config";
import { featureAvailable, type Feature } from "@/app/i18n/feature-availability";
import type { Href } from "@/app/i18n/site-pages";

export type { Feature } from "@/app/i18n/feature-availability";
export type { Href, PageRef, SitePageKey } from "@/app/i18n/site-pages";
export type { SiteIconName } from "../icons";

/** Website-Sprache: "de" (Root) oder ein Präfix-Markt (/en, /tr, …). */
export type SiteMarket = SiteLanguage;

/** Link innerhalb eines Fließtexts. */
export type RichLink = { text: string; href: Href };

/**
 * Fließtext mit optionalen Links: entweder reiner Text oder eine Folge aus
 * Textstücken und Links, z. B. `["Mehr zur ", { text: "Kundenkartei", href: { page: "client-records" } }, "."]`.
 * Links, die es in einer Sprache nicht gibt, werden als reiner Text ausgegeben.
 */
export type RichText = string | ReadonlyArray<string | RichLink>;

/** Text, der nur angezeigt wird, wenn die Funktion im Markt verfügbar ist. */
export type GatedText = string | { text: string; feature: Feature };

export function gatedTexts(items: readonly GatedText[], market: SiteMarket): string[] {
  return items.flatMap((item) => {
    if (typeof item === "string") return [item];
    return featureAvailable(item.feature, market) ? [item.text] : [];
  });
}

/** Reiner Text (z. B. für JSON-LD). */
export function richTextToPlain(text: RichText): string {
  if (typeof text === "string") return text;
  return text.map((part) => (typeof part === "string" ? part : part.text)).join("");
}
