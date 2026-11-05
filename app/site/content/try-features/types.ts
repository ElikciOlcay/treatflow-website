import type { Href } from "../shared";

/**
 * Seite „Funktionen live testen“ (DE /funktionen-live-testen, EN /en/try-features …).
 * Alles serialisierbar: die Demo-Texte gehen an Client-Komponenten (app/components/live-demo/*).
 * Platzhalter in Texten: {name}, {treatment}, {time}, {end}, {recipient}.
 */

/** Texte des Buchungsfensters (BookingPanel). */
export type BookingPanelStrings = {
  /** Intl-Locale für Wochentage/Datum, z. B. "de-DE" */
  dateLocale: string;
  /** Beispiel-Behandlungen (Reihenfolge fest: Gesicht, Laser, Wimpern) */
  treatments: { name: string; minutes: number; price: string }[];
  /** Einheit hinter der Dauer, z. B. "Min" */
  minutesUnit: string;
  /** Anhang hinter Uhrzeiten inkl. Leerzeichen (" Uhr") oder "" */
  timeSuffix: string;
  /** Label für den heutigen Tag im Fließtext („heute“) */
  today: string;
  legend: { high: string; medium: string; low: string; full: string };
  /** Vorausgefüllte Beispielkundin */
  customer: { name: string; email: string; phone: string };
  stepTreatment: string;
  stepDay: string;
  stepTime: string;
  /** aria-Zusatz für ausgebuchte/geschlossene Tage (mit führendem Komma) */
  fullAria: string;
  closedAria: string;
  fewLeft: string;
  next: string;
  footnote: string;
  change: string;
  stepDetails: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  submit: string;
  disclaimer: string;
  bookedTitle: string;
  bookedInCalendar: string;
  /** „Bestätigung an “ (vor der E-Mail-Adresse) */
  bookedConfirmationTo: string;
  continueLabel: string;
  bookAnother: string;
};

/** Tagesansicht des Studio-Kalenders (StudioCalendarDemo). */
export type CalendarStrings = {
  /** Überschrift, wenn heute gebucht wurde („Heute“) */
  todayTitle: string;
  dayView: string;
  newBadge: string;
  /** aria-label des neuen Termins */
  newAria: string;
  /** Mitarbeiterinnen (Reihenfolge = Spalten: Gesicht, Wimpern, Laser) */
  staff: { name: string; initials: string }[];
  /** Bestehende Termine, 8 Stück in fester Reihenfolge (Zeiten stehen in der Komponente) */
  existing: { title: string; customer: string }[];
};

/** Abschnitt nach der Buchung: Kalender + verschickte Nachrichten (BookingMessages). */
export type BookingMessagesStrings = {
  eyebrow: string;
  /** Überschrift vor/nach dem Vornamen der Kundin */
  titleBefore: string;
  titleAfter: string;
  sentTitle: string;
  emailTitle: string;
  /** Nur DACH: fehlt der Wert, entfällt die WhatsApp-Zeile */
  whatsappTitle?: string;
  reminderTitle: string;
  reminderWhen: string;
  footnote: string;
  deliveredTo: string;
  sending: string;
  waiting: string;
  nextEyebrow: string;
  nextTitle: string;
};

/** KI-Diktat (DictationPanel). */
export type DictationStrings = {
  /** Sprache der Browser-Spracherkennung, z. B. "de-DE" */
  speechLang: string;
  /**
   * Sprache für den Demo-Endpunkt der App (wird als `locale` mitgeschickt).
   * Fehlt bei DE (Body bleibt wie bisher).
   */
  apiLocale?: string;
  /**
   * Fehlermeldungen des Servers anzeigen (die sind deutsch) – nur DE.
   * Sonst werden die eigenen Texte unten genutzt.
   */
  useServerErrors: boolean;
  example: string;
  title: string;
  steps: string[];
  placeholder: string;
  textareaAria: string;
  startAria: string;
  stopAria: string;
  insertExample: string;
  listening: string;
  typeHint: string;
  unsupported: string;
  micDenied: string;
  noSpeech: string;
  network: string;
  empty: string;
  unavailable: string;
  rateLimited: string;
  refine: string;
  refining: string;
  disclaimer: string;
  resultTitle: string;
  resultNote: string;
  nextForms: string;
  again: string;
};

export type DemoSectionStrings = {
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  link: { href: Href; label: string };
  frameSubtitle: string;
};

/** Alle Texte der beiden interaktiven Demos (LiveDemos + Unterkomponenten). */
export type LiveDemosContent = {
  studioName: string;
  liveBadge: string;
  booking: DemoSectionStrings;
  dictation: DemoSectionStrings;
  bookingPanel: BookingPanelStrings;
  messages: BookingMessagesStrings;
  calendar: CalendarStrings;
  dictationPanel: DictationStrings;
};

export type TryFeaturesContent = {
  meta: {
    title: string;
    description: string;
    keywords?: string[];
    openGraph: { title: string; description: string };
  };
  /** Letzter Breadcrumb (JSON-LD) */
  breadcrumb: string;
  /** Sprungziele (ids der Sektionen) */
  anchors: { booking: string; dictation: string; forms: string };
  hero: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    intro: string;
    jumpBooking: string;
    jumpDictation: string;
    jumpForms: string;
  };
  demos: LiveDemosContent;
  /** Formular-Sektion; nur sichtbar, wenn es `try-forms` in der Sprache gibt */
  forms: {
    eyebrow: string;
    title: string;
    text: string;
    /** „ Seiten · “ zwischen Seiten- und Feldanzahl */
    pagesSeparator: string;
    /** „ Felder“ hinter der Feldanzahl */
    fieldsSuffix: string;
    fillCta: string;
    allLink: string;
  };
  cta: { title: string; description: string; secondaryLabel: string };
};
