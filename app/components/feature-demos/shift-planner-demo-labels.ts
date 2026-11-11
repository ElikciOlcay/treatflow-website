import type { DemoLabels } from './shared';

export type ShiftPlannerDemoText = {
    sr: string;
    steps: string[];
    stepAria: string;
    title: string;
    /** Kalenderwoche mit Zeitraum, Mo 16.–Fr 20. November */
    week: string;
    today: string;
    copyWeek: string;
    templatesButton: string;
    /** drei Mitarbeiterinnen, Mo–Fr */
    staff: string[];
    weekdays: string[];
    off: string;
    /** Wochensumme, `{n}` = Stunden */
    hours: string;
    /** Schichtvorlagen: Früh, Spät, Ganztags */
    templatesTitle: string;
    templates: string[];
    absenceTitle: string;
    vacation: string;
    absenceRange: string;
    absenceNote: string;
    bookingTitle: string;
    bookingDay: string;
    bookingNote: string;
};

export const SHIFT_PLANNER_LABELS: DemoLabels<ShiftPlannerDemoText> = {
    de: {
        sr: 'Beispiel für den Schichtplaner von Treatflow: Die Woche des Teams wird geplant, eine Schicht kommt per Vorlage dazu, Urlaub wird eingetragen, und die Online-Buchung bietet danach nur Zeiten innerhalb der geplanten Schichten an.',
        steps: ['Woche planen', 'Vorlage wählen', 'Urlaub eintragen', 'Online buchbar'], stepAria: 'Schritt',
        title: 'Schichtplan', week: 'KW 47 · 16.–20. Nov.', today: 'Heute', copyWeek: 'Vorwoche kopieren', templatesButton: 'Vorlagen',
        staff: ['Mara', 'Jana', 'Elif'], weekdays: ['Mo', 'Di', 'Mi', 'Do', 'Fr'], off: 'Frei', hours: '{n} Std.',
        templatesTitle: 'Schichtvorlagen', templates: ['Früh', 'Spät', 'Ganztags'],
        absenceTitle: 'Abwesenheit eingetragen', vacation: 'Urlaub', absenceRange: 'Do, 19. – Fr, 20. Nov.', absenceNote: 'Nicht online buchbar',
        bookingTitle: 'Online-Buchung', bookingDay: 'Do, 19. Nov.', bookingNote: 'Nur Zeiten in geplanten Schichten',
    },
    en: {
        sr: 'Example of the Treatflow shift planner: the team’s week is planned, a shift is added from a template, a holiday is entered, and online booking then only offers times within planned shifts.',
        steps: ['Plan the week', 'Pick a template', 'Add a holiday', 'Bookable online'], stepAria: 'Step',
        title: 'Shift plan', week: 'Wk 47 · 16–20 Nov', today: 'Today', copyWeek: 'Copy last week', templatesButton: 'Templates',
        staff: ['Sophie', 'Chloe', 'Hannah'], weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], off: 'Off', hours: '{n} h',
        templatesTitle: 'Shift templates', templates: ['Early', 'Late', 'Full day'],
        absenceTitle: 'Absence added', vacation: 'Holiday', absenceRange: 'Thu 19 – Fri 20 Nov', absenceNote: 'Not bookable online',
        bookingTitle: 'Online booking', bookingDay: 'Thu 19 Nov', bookingNote: 'Only times within planned shifts',
    },
    tr: {
        sr: 'Treatflow vardiya planlayıcısı örneği: Ekibin haftası planlanır, bir vardiya şablondan eklenir, izin girilir ve online randevu artık yalnızca planlanan vardiyalar içindeki saatleri sunar.',
        steps: ['Haftayı planlayın', 'Şablon seçin', 'İzin girin', 'Online randevu'], stepAria: 'Adım',
        title: 'Vardiya planı', week: '47. hafta · 16–20 Kasım', today: 'Bugün', copyWeek: 'Önceki haftayı kopyala', templatesButton: 'Şablonlar',
        staff: ['Ayşe', 'Merve', 'Zeynep'], weekdays: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum'], off: 'İzinli', hours: '{n} sa',
        templatesTitle: 'Vardiya şablonları', templates: ['Sabah', 'Akşam', 'Tam gün'],
        absenceTitle: 'Devamsızlık eklendi', vacation: 'Yıllık izin', absenceRange: '19 Kasım Per – 20 Kasım Cum', absenceNote: 'Online randevuya kapalı',
        bookingTitle: 'Online randevu', bookingDay: '19 Kasım Per', bookingNote: 'Yalnızca planlı vardiya saatleri',
    },
    nl: {
        sr: 'Voorbeeld van de roosterplanner van Treatflow: de week van het team wordt gepland, een dienst komt erbij via een sjabloon, vakantie wordt ingevoerd en online boeken biedt daarna alleen tijden binnen geplande diensten aan.',
        steps: ['Week plannen', 'Sjabloon kiezen', 'Vakantie invoeren', 'Online boekbaar'], stepAria: 'Stap',
        title: 'Rooster', week: 'Wk 47 · 16–20 nov.', today: 'Vandaag', copyWeek: 'Vorige week kopiëren', templatesButton: 'Sjablonen',
        staff: ['Lotte', 'Fleur', 'Iris'], weekdays: ['ma', 'di', 'wo', 'do', 'vr'], off: 'Vrij', hours: '{n} u',
        templatesTitle: 'Dienstsjablonen', templates: ['Vroeg', 'Laat', 'Hele dag'],
        absenceTitle: 'Afwezigheid ingevoerd', vacation: 'Vakantie', absenceRange: 'do 19 – vr 20 nov.', absenceNote: 'Niet online boekbaar',
        bookingTitle: 'Online boeken', bookingDay: 'do 19 nov.', bookingNote: 'Alleen tijden binnen geplande diensten',
    },
    it: {
        sr: 'Esempio del pianificatore turni di Treatflow: si pianifica la settimana del team, si aggiunge un turno da un modello, si inseriscono le ferie e la prenotazione online propone solo orari all’interno dei turni pianificati.',
        steps: ['Pianifica la settimana', 'Scegli un modello', 'Inserisci le ferie', 'Prenotabile online'], stepAria: 'Passo',
        title: 'Piano turni', week: 'Sett. 47 · 16–20 nov', today: 'Oggi', copyWeek: 'Copia settimana precedente', templatesButton: 'Modelli',
        staff: ['Chiara', 'Martina', 'Sara'], weekdays: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven'], off: 'Libero', hours: '{n} h',
        templatesTitle: 'Modelli di turno', templates: ['Mattina', 'Pomeriggio', 'Giornata intera'],
        absenceTitle: 'Assenza inserita', vacation: 'Ferie', absenceRange: 'Gio 19 – Ven 20 nov', absenceNote: 'Non prenotabile online',
        bookingTitle: 'Prenotazione online', bookingDay: 'Gio 19 nov', bookingNote: 'Solo orari nei turni pianificati',
    },
    pl: {
        sr: 'Przykład planera grafiku w Treatflow: planowany jest tydzień zespołu, zmiana zostaje dodana z szablonu, wpisany zostaje urlop, a rezerwacja online proponuje potem tylko godziny w zaplanowanych zmianach.',
        steps: ['Zaplanuj tydzień', 'Wybierz szablon', 'Wpisz urlop', 'Rezerwacja online'], stepAria: 'Krok',
        title: 'Grafik', week: 'Tydz. 47 · 16–20 lis', today: 'Dziś', copyWeek: 'Kopiuj poprzedni tydzień', templatesButton: 'Szablony',
        staff: ['Kasia', 'Ola', 'Magda'], weekdays: ['Pn', 'Wt', 'Śr', 'Cz', 'Pt'], off: 'Wolne', hours: '{n} godz.',
        templatesTitle: 'Szablony zmian', templates: ['Ranna', 'Popołudniowa', 'Cały dzień'],
        absenceTitle: 'Nieobecność dodana', vacation: 'Urlop', absenceRange: 'Cz 19 – Pt 20 lis', absenceNote: 'Niedostępna online',
        bookingTitle: 'Rezerwacja online', bookingDay: 'Cz, 19 lis', bookingNote: 'Tylko godziny w zaplanowanych zmianach',
    },
    es: {
        sr: 'Ejemplo del planificador de turnos de Treatflow: se planifica la semana del equipo, se añade un turno desde una plantilla, se registran unas vacaciones y la reserva online solo ofrece horas dentro de los turnos planificados.',
        steps: ['Planifica la semana', 'Elige una plantilla', 'Registra vacaciones', 'Reservable online'], stepAria: 'Paso',
        title: 'Cuadrante', week: 'Sem. 47 · 16–20 nov', today: 'Hoy', copyWeek: 'Copiar semana anterior', templatesButton: 'Plantillas',
        staff: ['Carmen', 'Laura', 'Elena'], weekdays: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'], off: 'Libre', hours: '{n} h',
        templatesTitle: 'Plantillas de turno', templates: ['Mañana', 'Tarde', 'Jornada completa'],
        absenceTitle: 'Ausencia registrada', vacation: 'Vacaciones', absenceRange: 'Jue 19 – Vie 20 nov', absenceNote: 'No reservable online',
        bookingTitle: 'Reserva online', bookingDay: 'Jue 19 nov', bookingNote: 'Solo horas dentro de los turnos',
    },
    fr: {
        sr: 'Exemple du planning d’équipe de Treatflow : la semaine de l’équipe est planifiée, un créneau est ajouté depuis un modèle, des congés sont saisis, et la réservation en ligne ne propose ensuite que des horaires dans les créneaux planifiés.',
        steps: ['Planifier la semaine', 'Choisir un modèle', 'Saisir des congés', 'Réservable en ligne'], stepAria: 'Étape',
        title: 'Planning', week: 'Sem. 47 · 16–20 nov.', today: 'Aujourd’hui', copyWeek: 'Copier la semaine précédente', templatesButton: 'Modèles',
        staff: ['Léa', 'Chloé', 'Manon'], weekdays: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'], off: 'Repos', hours: '{n} h',
        templatesTitle: 'Modèles de créneau', templates: ['Matin', 'Soir', 'Journée'],
        absenceTitle: 'Absence saisie', vacation: 'Congés', absenceRange: 'Jeu 19 – Ven 20 nov.', absenceNote: 'Non réservable en ligne',
        bookingTitle: 'Réservation en ligne', bookingDay: 'Jeu 19 nov.', bookingNote: 'Uniquement dans les créneaux planifiés',
    },
};
