import type { SiteMarket } from "../shared";
import type { ClientWorkflowsContent } from "./types";
import { clientWorkflowsDe } from "./de";
import { clientWorkflowsEn } from "./en";
import { clientWorkflowsTr } from "./tr";
import { clientWorkflowsNl } from "./nl";
import { clientWorkflowsIt } from "./it";
import { clientWorkflowsPl } from "./pl";
import { clientWorkflowsEs } from "./es";
import { clientWorkflowsFr } from "./fr";

const content: Record<SiteMarket, ClientWorkflowsContent> = {
  de: clientWorkflowsDe,
  en: clientWorkflowsEn,
  tr: clientWorkflowsTr,
  nl: clientWorkflowsNl,
  it: clientWorkflowsIt,
  pl: clientWorkflowsPl,
  es: clientWorkflowsEs,
  fr: clientWorkflowsFr,
};

export function getClientWorkflowsContent(market: SiteMarket): ClientWorkflowsContent {
  return content[market];
}

export type { ClientWorkflowsContent } from "./types";
