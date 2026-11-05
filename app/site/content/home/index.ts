import type { SiteMarket } from "../shared";
import type { HomeContent } from "./types";
import { homeDe } from "./de";
import { homeEn } from "./en";
import { homeTr } from "./tr";
import { homeNl } from "./nl";
import { homeIt } from "./it";
import { homePl } from "./pl";
import { homeEs } from "./es";
import { homeFr } from "./fr";

const home: Record<SiteMarket, HomeContent> = {
  de: homeDe,
  en: homeEn,
  tr: homeTr,
  nl: homeNl,
  it: homeIt,
  pl: homePl,
  es: homeEs,
  fr: homeFr,
};

export function getHomeContent(market: SiteMarket): HomeContent {
  return home[market];
}

export type { HomeContent } from "./types";
