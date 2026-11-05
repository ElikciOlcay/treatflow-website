import type { SiteMarket } from "../shared";
import type { MessagingContent } from "./types";
import { messagingDe } from "./de";
import { messagingEn } from "./en";
import { messagingTr } from "./tr";
import { messagingNl } from "./nl";
import { messagingIt } from "./it";
import { messagingPl } from "./pl";
import { messagingEs } from "./es";
import { messagingFr } from "./fr";

const content: Record<SiteMarket, MessagingContent> = {
  de: messagingDe,
  en: messagingEn,
  tr: messagingTr,
  nl: messagingNl,
  it: messagingIt,
  pl: messagingPl,
  es: messagingEs,
  fr: messagingFr,
};

export function getMessagingContent(market: SiteMarket): MessagingContent {
  return content[market];
}

export type { MessagingContent } from "./types";
