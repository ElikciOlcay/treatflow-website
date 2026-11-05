import type { SiteMarket } from "../shared";
import type { TreatmentDocumentationContent } from "./types";
import { treatmentDocumentationDe } from "./de";
import { treatmentDocumentationEn } from "./en";
import { treatmentDocumentationTr } from "./tr";
import { treatmentDocumentationNl } from "./nl";
import { treatmentDocumentationIt } from "./it";
import { treatmentDocumentationPl } from "./pl";
import { treatmentDocumentationEs } from "./es";
import { treatmentDocumentationFr } from "./fr";

const content: Record<SiteMarket, TreatmentDocumentationContent> = {
  de: treatmentDocumentationDe,
  en: treatmentDocumentationEn,
  tr: treatmentDocumentationTr,
  nl: treatmentDocumentationNl,
  it: treatmentDocumentationIt,
  pl: treatmentDocumentationPl,
  es: treatmentDocumentationEs,
  fr: treatmentDocumentationFr,
};

export function getTreatmentDocumentationContent(market: SiteMarket): TreatmentDocumentationContent {
  return content[market];
}

export type { TreatmentDocumentationContent } from "./types";
