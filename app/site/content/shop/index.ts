import type { SiteMarket } from "../shared";
import type { ShopContent } from "./types";
import { shopDe } from "./de";
import { shopEn } from "./en";
import { shopTr } from "./tr";
import { shopNl } from "./nl";
import { shopIt } from "./it";
import { shopPl } from "./pl";
import { shopEs } from "./es";
import { shopFr } from "./fr";

const content: Record<SiteMarket, ShopContent> = {
  de: shopDe,
  en: shopEn,
  tr: shopTr,
  nl: shopNl,
  it: shopIt,
  pl: shopPl,
  es: shopEs,
  fr: shopFr,
};

export function getShopContent(market: SiteMarket): ShopContent {
  return content[market];
}

export type { ShopContent } from "./types";
