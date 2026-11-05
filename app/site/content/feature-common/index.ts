import type { SiteMarket } from "../shared";
import type { FeatureCommonContent } from "./types";
import { featureCommonDe } from "./de";
import { featureCommonEn } from "./en";
import { featureCommonTr } from "./tr";
import { featureCommonNl } from "./nl";
import { featureCommonIt } from "./it";
import { featureCommonPl } from "./pl";
import { featureCommonEs } from "./es";
import { featureCommonFr } from "./fr";

const common: Record<SiteMarket, FeatureCommonContent> = {
  de: featureCommonDe,
  en: featureCommonEn,
  tr: featureCommonTr,
  nl: featureCommonNl,
  it: featureCommonIt,
  pl: featureCommonPl,
  es: featureCommonEs,
  fr: featureCommonFr,
};

/** Gemeinsame Texte der Funktions-Bausteine; ohne Markt = Deutsch. */
export function getFeatureCommon(market: SiteMarket = "de"): FeatureCommonContent {
  return common[market];
}

export type { FeatureCommonContent, FeaturePageContent, FeatureTitle } from "./types";
