import type { SiteMarket } from "../shared";
import type { StudioWebsiteContent } from "./types";
import { studioWebsiteDe } from "./de";
import { studioWebsiteEn } from "./en";
import { studioWebsiteTr } from "./tr";
import { studioWebsiteNl } from "./nl";
import { studioWebsiteIt } from "./it";
import { studioWebsitePl } from "./pl";
import { studioWebsiteEs } from "./es";
import { studioWebsiteFr } from "./fr";

const content: Record<SiteMarket, StudioWebsiteContent> = {
  de: studioWebsiteDe,
  en: studioWebsiteEn,
  tr: studioWebsiteTr,
  nl: studioWebsiteNl,
  it: studioWebsiteIt,
  pl: studioWebsitePl,
  es: studioWebsiteEs,
  fr: studioWebsiteFr,
};

export function getStudioWebsiteContent(market: SiteMarket): StudioWebsiteContent {
  return content[market];
}

export type { StudioWebsiteContent } from "./types";
