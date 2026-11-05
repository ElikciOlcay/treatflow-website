import type { SiteMarket } from "../shared";
import type { PricingPageContent } from "./types";
import { pricingDe } from "./de";
import { pricingEn } from "./en";
import { pricingTr } from "./tr";
import { pricingNl } from "./nl";
import { pricingIt } from "./it";
import { pricingPl } from "./pl";
import { pricingEs } from "./es";
import { pricingFr } from "./fr";

const content: Record<SiteMarket, PricingPageContent> = {
  de: pricingDe,
  en: pricingEn,
  tr: pricingTr,
  nl: pricingNl,
  it: pricingIt,
  pl: pricingPl,
  es: pricingEs,
  fr: pricingFr,
};

export function getPricingPageContent(market: SiteMarket): PricingPageContent {
  return content[market];
}

export type { PricingPageContent } from "./types";
