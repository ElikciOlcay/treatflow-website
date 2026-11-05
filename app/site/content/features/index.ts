import type { SiteMarket } from "../shared";
import type { FeaturesOverviewContent } from "./types";
import { featuresDe } from "./de";
import { featuresEn } from "./en";
import { featuresTr } from "./tr";
import { featuresNl } from "./nl";
import { featuresIt } from "./it";
import { featuresPl } from "./pl";
import { featuresEs } from "./es";
import { featuresFr } from "./fr";

const content: Record<SiteMarket, FeaturesOverviewContent> = {
  de: featuresDe,
  en: featuresEn,
  tr: featuresTr,
  nl: featuresNl,
  it: featuresIt,
  pl: featuresPl,
  es: featuresEs,
  fr: featuresFr,
};

export function getFeaturesContent(market: SiteMarket): FeaturesOverviewContent {
  return content[market];
}

export type { FeaturesOverviewContent, FeaturesGridItem } from "./types";
