import type { ComponentType } from 'react';
import type { SitePageKey } from '@/app/i18n/site-pages';
import type { FeatureDemoProps } from './shared';
import TreatflowPayDemo from './TreatflowPayDemo';
import MessagingDemo from './MessagingDemo';
import ClientWorkflowsDemo from './ClientWorkflowsDemo';
import FormsDemo from './FormsDemo';
import AppointmentCalendarDemo from './AppointmentCalendarDemo';
import OnlineBookingDemo from './OnlineBookingDemo';
import ClientRecordsDemo from './ClientRecordsDemo';
import TreatmentDocumentationDemo from './TreatmentDocumentationDemo';

/**
 * Animierte Hero-Szene je Funktionsseite (alle Sprachen). Seiten ohne Eintrag zeigen weiter das Hero-Bild.
 * Mit Szene wandert das Bild als echter Screenshot in einen eigenen Abschnitt darunter.
 */
export const featureDemos: Partial<Record<SitePageKey, ComponentType<FeatureDemoProps>>> = {
    'treatflow-pay': TreatflowPayDemo,
    messaging: MessagingDemo,
    'customer-workflows': ClientWorkflowsDemo,
    forms: FormsDemo,
    'appointment-calendar': AppointmentCalendarDemo,
    'online-booking': OnlineBookingDemo,
    'client-records': ClientRecordsDemo,
    'treatment-documentation': TreatmentDocumentationDemo,
};

/** Überschrift über dem Screenshot, wenn der Hero eine Szene zeigt. */
export const screenshotEyebrow: Record<string, string> = {
    de: 'So sieht es in Treatflow aus',
    en: 'How it looks in Treatflow',
    tr: "Treatflow'da böyle görünüyor",
    nl: 'Zo ziet het eruit in Treatflow',
    it: 'Ecco come appare in Treatflow',
    pl: 'Tak to wygląda w Treatflow',
    es: 'Así se ve en Treatflow',
    fr: 'Voici à quoi ça ressemble dans Treatflow',
};
