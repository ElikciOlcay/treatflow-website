import type { SiteMarket } from "../shared";
import type { ShiftPlannerContent } from "./types";
import { shiftPlannerDe } from "./de";
import { shiftPlannerEn } from "./en";
import { shiftPlannerTr } from "./tr";
import { shiftPlannerNl } from "./nl";
import { shiftPlannerIt } from "./it";
import { shiftPlannerPl } from "./pl";
import { shiftPlannerEs } from "./es";
import { shiftPlannerFr } from "./fr";

const content: Record<SiteMarket, ShiftPlannerContent> = {
  de: shiftPlannerDe,
  en: shiftPlannerEn,
  tr: shiftPlannerTr,
  nl: shiftPlannerNl,
  it: shiftPlannerIt,
  pl: shiftPlannerPl,
  es: shiftPlannerEs,
  fr: shiftPlannerFr,
};

export function getShiftPlannerContent(market: SiteMarket): ShiftPlannerContent {
  return content[market];
}

export type { ShiftPlannerContent } from "./types";
