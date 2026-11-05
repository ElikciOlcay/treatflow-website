import type { SiteMarket } from "../shared";
import type { TreatflowPayContent } from "./types";
import { treatflowPayDe } from "./de";
import { treatflowPayEn } from "./en";
import { treatflowPayNl } from "./nl";
import { treatflowPayIt } from "./it";
import { treatflowPayPl } from "./pl";
import { treatflowPayEs } from "./es";
import { treatflowPayFr } from "./fr";

const content: Record<Exclude<SiteMarket, "tr">, TreatflowPayContent> = {
  de: treatflowPayDe,
  en: treatflowPayEn,
  nl: treatflowPayNl,
  it: treatflowPayIt,
  pl: treatflowPayPl,
  es: treatflowPayEs,
  fr: treatflowPayFr,
};

/** `null` in TR: Seite gibt es dort nicht (feature "pay"). */
export function getTreatflowPayContent(market: SiteMarket): TreatflowPayContent | null {
  if (market === "tr") return null;
  return content[market];
}

export type { TreatflowPayContent } from "./types";
