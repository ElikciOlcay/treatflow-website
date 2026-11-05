import type { SiteMarket } from "../shared";
import type { OnlineBookingContent } from "./types";
import { onlineBookingDe } from "./de";
import { onlineBookingEn } from "./en";
import { onlineBookingTr } from "./tr";
import { onlineBookingNl } from "./nl";
import { onlineBookingIt } from "./it";
import { onlineBookingPl } from "./pl";
import { onlineBookingEs } from "./es";
import { onlineBookingFr } from "./fr";

const content: Record<SiteMarket, OnlineBookingContent> = {
  de: onlineBookingDe,
  en: onlineBookingEn,
  tr: onlineBookingTr,
  nl: onlineBookingNl,
  it: onlineBookingIt,
  pl: onlineBookingPl,
  es: onlineBookingEs,
  fr: onlineBookingFr,
};

export function getOnlineBookingContent(market: SiteMarket): OnlineBookingContent {
  return content[market];
}

export type { OnlineBookingContent } from "./types";
