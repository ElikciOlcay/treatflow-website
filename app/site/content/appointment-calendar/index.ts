import type { SiteMarket } from "../shared";
import type { AppointmentCalendarContent } from "./types";
import { appointmentCalendarDe } from "./de";
import { appointmentCalendarEn } from "./en";
import { appointmentCalendarTr } from "./tr";
import { appointmentCalendarNl } from "./nl";
import { appointmentCalendarIt } from "./it";
import { appointmentCalendarPl } from "./pl";
import { appointmentCalendarEs } from "./es";
import { appointmentCalendarFr } from "./fr";

const content: Record<SiteMarket, AppointmentCalendarContent> = {
  de: appointmentCalendarDe,
  en: appointmentCalendarEn,
  tr: appointmentCalendarTr,
  nl: appointmentCalendarNl,
  it: appointmentCalendarIt,
  pl: appointmentCalendarPl,
  es: appointmentCalendarEs,
  fr: appointmentCalendarFr,
};

export function getAppointmentCalendarContent(market: SiteMarket): AppointmentCalendarContent {
  return content[market];
}

export type { AppointmentCalendarContent } from "./types";
