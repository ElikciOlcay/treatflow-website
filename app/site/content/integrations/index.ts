import type { SiteMarket } from "../shared";
import type { IntegrationsContent } from "./types";
import { integrationsDe } from "./de";
import { integrationsEn } from "./en";
import { integrationsTr } from "./tr";
import { integrationsNl } from "./nl";
import { integrationsIt } from "./it";
import { integrationsPl } from "./pl";
import { integrationsEs } from "./es";
import { integrationsFr } from "./fr";

const content: Record<SiteMarket, IntegrationsContent> = {
  de: integrationsDe,
  en: integrationsEn,
  tr: integrationsTr,
  nl: integrationsNl,
  it: integrationsIt,
  pl: integrationsPl,
  es: integrationsEs,
  fr: integrationsFr,
};

export function getIntegrationsContent(market: SiteMarket): IntegrationsContent {
  return content[market];
}

export type { IntegrationsContent } from "./types";
