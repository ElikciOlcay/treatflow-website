import type { SiteMarket } from "../shared";
import type { TryFeaturesContent } from "./types";
import { tryFeaturesDe } from "./de";
import { tryFeaturesEn } from "./en";
import { tryFeaturesTr } from "./tr";
import { tryFeaturesNl } from "./nl";
import { tryFeaturesIt } from "./it";
import { tryFeaturesPl } from "./pl";
import { tryFeaturesEs } from "./es";
import { tryFeaturesFr } from "./fr";

const content: Record<SiteMarket, TryFeaturesContent> = {
  de: tryFeaturesDe,
  en: tryFeaturesEn,
  tr: tryFeaturesTr,
  nl: tryFeaturesNl,
  it: tryFeaturesIt,
  pl: tryFeaturesPl,
  es: tryFeaturesEs,
  fr: tryFeaturesFr,
};

export function getTryFeaturesContent(market: SiteMarket): TryFeaturesContent {
  return content[market];
}

export type { TryFeaturesContent, LiveDemosContent } from "./types";
