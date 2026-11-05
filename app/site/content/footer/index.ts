import type { SiteMarket } from "../shared";
import type { FooterContent } from "./types";
import { footerDe } from "./de";
import { footerEn } from "./en";
import { footerTr } from "./tr";
import { footerNl } from "./nl";
import { footerIt } from "./it";
import { footerPl } from "./pl";
import { footerEs } from "./es";
import { footerFr } from "./fr";

const footer: Record<SiteMarket, FooterContent> = {
  de: footerDe,
  en: footerEn,
  tr: footerTr,
  nl: footerNl,
  it: footerIt,
  pl: footerPl,
  es: footerEs,
  fr: footerFr,
};

export function getFooterContent(market: SiteMarket): FooterContent {
  return footer[market];
}

export type { FooterContent } from "./types";
