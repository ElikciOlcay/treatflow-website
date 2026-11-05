import type { SiteMarket } from "../shared";
import type { NavigationContent } from "./types";
import { navigationDe } from "./de";
import { navigationEn } from "./en";
import { navigationTr } from "./tr";
import { navigationNl } from "./nl";
import { navigationIt } from "./it";
import { navigationPl } from "./pl";
import { navigationEs } from "./es";
import { navigationFr } from "./fr";

const navigation: Record<SiteMarket, NavigationContent> = {
  de: navigationDe,
  en: navigationEn,
  tr: navigationTr,
  nl: navigationNl,
  it: navigationIt,
  pl: navigationPl,
  es: navigationEs,
  fr: navigationFr,
};

export function getNavigationContent(market: SiteMarket): NavigationContent {
  return navigation[market];
}

export type { NavigationContent } from "./types";
