import type { SiteMarket } from "../shared";
import type { ClientRecordsContent } from "./types";
import { clientRecordsDe } from "./de";
import { clientRecordsEn } from "./en";
import { clientRecordsTr } from "./tr";
import { clientRecordsNl } from "./nl";
import { clientRecordsIt } from "./it";
import { clientRecordsPl } from "./pl";
import { clientRecordsEs } from "./es";
import { clientRecordsFr } from "./fr";

const content: Record<SiteMarket, ClientRecordsContent> = {
  de: clientRecordsDe,
  en: clientRecordsEn,
  tr: clientRecordsTr,
  nl: clientRecordsNl,
  it: clientRecordsIt,
  pl: clientRecordsPl,
  es: clientRecordsEs,
  fr: clientRecordsFr,
};

export function getClientRecordsContent(market: SiteMarket): ClientRecordsContent {
  return content[market];
}

export type { ClientRecordsContent } from "./types";
