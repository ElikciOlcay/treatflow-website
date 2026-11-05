import type { SiteMarket } from "../shared";
import type { FormsContent } from "./types";
import { formsDe } from "./de";
import { formsEn } from "./en";
import { formsTr } from "./tr";
import { formsNl } from "./nl";
import { formsIt } from "./it";
import { formsPl } from "./pl";
import { formsEs } from "./es";
import { formsFr } from "./fr";

const content: Record<SiteMarket, FormsContent> = {
  de: formsDe,
  en: formsEn,
  tr: formsTr,
  nl: formsNl,
  it: formsIt,
  pl: formsPl,
  es: formsEs,
  fr: formsFr,
};

export function getFormsContent(market: SiteMarket): FormsContent {
  return content[market];
}

export type { FormsContent } from "./types";
