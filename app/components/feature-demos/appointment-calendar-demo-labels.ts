import type { DemoLabels } from './shared';

export type AppointmentCalendarDemoText = {
    sr: string;
    steps: string[];
    stepAria: string;
    title: string;
    date: string;
    today: string;
    day: string;
    team: string;
    rooms: string;
    /** drei Mitarbeiterinnen, sechs Kundinnen (kurz), fünf Leistungen */
    staff: string[];
    customers: string[];
    services: string[];
    newCustomer: string;
    newBadge: string;
    notifTitle: string;
    notifVia: string;
    moved: string;
    notify: string;
    yes: string;
    no: string;
    /** Kennzeichnung der Einzel-Ansicht und Hinweis, wenn das Team dazukommt */
    solo: string;
    teamTitle: string;
    teamText: string;
};

export const APPOINTMENT_CALENDAR_LABELS: DemoLabels<AppointmentCalendarDemoText> = {
    de: {
        sr: 'Beispiel für den Terminkalender von Treatflow: Zuerst der Tag eines Einzelstudios. Eine neue Online-Buchung landet direkt im Kalender, und ein Termin wird per Drag & Drop verschoben. Danach wechselt die Ansicht zum Team mit einer Spalte pro Mitarbeiterin.',
        steps: ['Dein Tag', 'Neue Buchung', 'Verschieben', 'Mit Team'], stepAria: 'Schritt',
        title: 'Kalender', date: 'Do, 12. Nov.', today: 'Heute', day: 'Tag', team: 'Team', rooms: 'Räume',
        staff: ['Mara', 'Jana', 'Elif'],
        customers: ['Sarah K.', 'Julia M.', 'Nina B.', 'Anna S.', 'Laura H.', 'Sophie F.'],
        services: ['Hydrafacial', 'Gesichtsbehandlung', 'Wimpernlifting', 'Microneedling', 'Laser'],
        newCustomer: 'Lena Wagner', newBadge: 'Neu · online gebucht', notifTitle: 'Neue Buchung', notifVia: 'über deinen Buchungslink',
        moved: 'Termin verschoben', notify: 'Kundin informieren?', yes: 'Ja', no: 'Nein',
        solo: 'Einzelstudio', teamTitle: 'Dein Studio wächst?', teamText: 'Jede Mitarbeiterin bekommt ihre eigene Spalte.',
    },
    en: {
        sr: 'Example of the Treatflow appointment calendar: first the day of a solo studio. A new online booking lands straight in the calendar and an appointment is moved by drag & drop. Then the view switches to a team with one column per team member.',
        steps: ['Your day', 'New booking', 'Reschedule', 'With a team'], stepAria: 'Step',
        title: 'Calendar', date: 'Thu 12 Nov', today: 'Today', day: 'Day', team: 'Team', rooms: 'Rooms',
        staff: ['Sophie', 'Chloe', 'Hannah'],
        customers: ['Grace T.', 'Olivia L.', 'Amelia P.', 'Jessica R.', 'Lucy W.', 'Ella B.'],
        services: ['Hydrafacial', 'Facial', 'Lash lift', 'Microneedling', 'Laser'],
        newCustomer: 'Emily Clarke', newBadge: 'New · booked online', notifTitle: 'New booking', notifVia: 'via your booking link',
        moved: 'Appointment moved', notify: 'Notify the client?', yes: 'Yes', no: 'No',
        solo: 'Solo studio', teamTitle: 'Growing your studio?', teamText: 'Every team member gets their own column.',
    },
    tr: {
        sr: 'Treatflow randevu takvimi örneği: Önce tek kişilik bir salonun günü. Yeni bir online randevu doğrudan takvime düşer ve bir randevu sürükle-bırak ile taşınır. Ardından görünüm, her çalışan için ayrı sütunlu ekip görünümüne geçer.',
        steps: ['Gününüz', 'Yeni randevu', 'Taşıma', 'Ekiple'], stepAria: 'Adım',
        title: 'Takvim', date: '12 Kas Per', today: 'Bugün', day: 'Gün', team: 'Ekip', rooms: 'Odalar',
        staff: ['Ayşe', 'Merve', 'Zeynep'],
        customers: ['Selin K.', 'Ebru B.', 'Deniz M.', 'Aslı S.', 'Melis T.', 'Ece L.'],
        services: ['Hydrafacial', 'Cilt bakımı', 'Kirpik lifting', 'Microneedling', 'Lazer'],
        newCustomer: 'Elif Yılmaz', newBadge: 'Yeni · online alındı', notifTitle: 'Yeni randevu', notifVia: 'randevu linkinizden',
        moved: 'Randevu taşındı', notify: 'Müşteri bilgilendirilsin mi?', yes: 'Evet', no: 'Hayır',
        solo: 'Tek kişilik salon', teamTitle: 'Salonunuz büyüyor mu?', teamText: 'Her çalışan kendi sütununu alır.',
    },
    nl: {
        sr: 'Voorbeeld van de Treatflow-agenda: eerst de dag van een solosalon. Een nieuwe online boeking verschijnt direct in de agenda en een afspraak wordt met slepen verplaatst. Daarna schakelt de weergave naar een team met een kolom per medewerker.',
        steps: ['Je dag', 'Nieuwe boeking', 'Verplaatsen', 'Met team'], stepAria: 'Stap',
        title: 'Agenda', date: 'do 12 nov', today: 'Vandaag', day: 'Dag', team: 'Team', rooms: 'Ruimtes',
        staff: ['Lotte', 'Fleur', 'Iris'],
        customers: ['Emma J.', 'Anouk B.', 'Lisa V.', 'Eva D.', 'Noor K.', 'Femke S.'],
        services: ['Hydrafacial', 'Gezichtsbehandeling', 'Wimperlifting', 'Microneedling', 'Laser'],
        newCustomer: 'Sanne de Vries', newBadge: 'Nieuw · online geboekt', notifTitle: 'Nieuwe boeking', notifVia: 'via je boekingslink',
        moved: 'Afspraak verplaatst', notify: 'Klant informeren?', yes: 'Ja', no: 'Nee',
        solo: 'Solosalon', teamTitle: 'Groeit je salon?', teamText: 'Elke medewerker krijgt een eigen kolom.',
    },
    it: {
        sr: "Esempio dell'agenda di Treatflow: prima la giornata di un centro gestito da sola. Una nuova prenotazione online arriva direttamente in agenda e un appuntamento viene spostato trascinandolo. Poi la vista passa al team, con una colonna per ogni collaboratrice.",
        steps: ['La tua giornata', 'Prenotazione', 'Sposta', 'Con il team'], stepAria: 'Passo',
        title: 'Agenda', date: 'gio 12 nov', today: 'Oggi', day: 'Giorno', team: 'Team', rooms: 'Cabine',
        staff: ['Chiara', 'Martina', 'Sara'],
        customers: ['Francesca B.', 'Alessia R.', 'Elena C.', 'Sofia M.', 'Valentina G.', 'Beatrice P.'],
        services: ['Hydrafacial', 'Trattamento viso', 'Laminazione ciglia', 'Microneedling', 'Laser'],
        newCustomer: 'Giulia Rossi', newBadge: 'Nuovo · prenotato online', notifTitle: 'Nuova prenotazione', notifVia: 'dal tuo link di prenotazione',
        moved: 'Appuntamento spostato', notify: 'Avvisare la cliente?', yes: 'Sì', no: 'No',
        solo: 'Da sola', teamTitle: 'Il tuo centro cresce?', teamText: 'Ogni collaboratrice ha la sua colonna.',
    },
    pl: {
        sr: 'Przykład kalendarza Treatflow: najpierw dzień salonu prowadzonego w pojedynkę. Nowa rezerwacja online od razu trafia do kalendarza, a wizyta zostaje przeciągnięta na inną godzinę. Potem widok przełącza się na zespół z osobną kolumną dla każdej pracowniczki.',
        steps: ['Twój dzień', 'Nowa rezerwacja', 'Przesuwanie', 'Z zespołem'], stepAria: 'Krok',
        title: 'Kalendarz', date: 'czw., 12 lis', today: 'Dziś', day: 'Dzień', team: 'Zespół', rooms: 'Gabinety',
        staff: ['Kasia', 'Ola', 'Magda'],
        customers: ['Zofia K.', 'Maja W.', 'Julia L.', 'Natalia Z.', 'Ewa D.', 'Marta S.'],
        services: ['Hydrafacial', 'Zabieg na twarz', 'Laminacja rzęs', 'Mikroigłowanie', 'Laser'],
        newCustomer: 'Anna Nowak', newBadge: 'Nowa · rezerwacja online', notifTitle: 'Nowa rezerwacja', notifVia: 'przez Twój link do rezerwacji',
        moved: 'Wizyta przesunięta', notify: 'Powiadomić klientkę?', yes: 'Tak', no: 'Nie',
        solo: 'Jednoosobowy salon', teamTitle: 'Twój salon rośnie?', teamText: 'Każda pracowniczka ma własną kolumnę.',
    },
    es: {
        sr: 'Ejemplo de la agenda de Treatflow: primero el día de un centro unipersonal. Una nueva reserva online aparece directamente en la agenda y una cita se mueve arrastrándola. Después la vista cambia al equipo, con una columna por profesional.',
        steps: ['Tu día', 'Nueva reserva', 'Mover', 'Con equipo'], stepAria: 'Paso',
        title: 'Agenda', date: 'jue, 12 nov', today: 'Hoy', day: 'Día', team: 'Equipo', rooms: 'Cabinas',
        staff: ['Carmen', 'Laura', 'Elena'],
        customers: ['María L.', 'Paula R.', 'Sofía M.', 'Marta G.', 'Ana P.', 'Irene S.'],
        services: ['Hydrafacial', 'Tratamiento facial', 'Lifting de pestañas', 'Microneedling', 'Láser'],
        newCustomer: 'Lucía García', newBadge: 'Nueva · reservada online', notifTitle: 'Nueva reserva', notifVia: 'desde tu enlace de reservas',
        moved: 'Cita movida', notify: '¿Avisar a la clienta?', yes: 'Sí', no: 'No',
        solo: 'Centro unipersonal', teamTitle: '¿Tu centro crece?', teamText: 'Cada profesional tiene su propia columna.',
    },
    fr: {
        sr: "Exemple de l'agenda Treatflow : d'abord la journée d'un institut en solo. Une nouvelle réservation en ligne arrive directement dans l'agenda et un rendez-vous est déplacé par glisser-déposer. Ensuite, la vue passe à l'équipe, avec une colonne par collaboratrice.",
        steps: ['Votre journée', 'Réservation', 'Déplacer', 'En équipe'], stepAria: 'Étape',
        title: 'Agenda', date: 'jeu. 12 nov.', today: "Aujourd'hui", day: 'Jour', team: 'Équipe', rooms: 'Cabines',
        staff: ['Léa', 'Chloé', 'Manon'],
        customers: ['Julie B.', 'Emma R.', 'Inès L.', 'Sarah D.', 'Louise M.', 'Clara P.'],
        services: ['Hydrafacial', 'Soin du visage', 'Rehaussement de cils', 'Microneedling', 'Laser'],
        newCustomer: 'Camille Martin', newBadge: 'Nouveau · réservé en ligne', notifTitle: 'Nouvelle réservation', notifVia: 'via votre lien de réservation',
        moved: 'Rendez-vous déplacé', notify: 'Prévenir la cliente ?', yes: 'Oui', no: 'Non',
        solo: 'Institut en solo', teamTitle: 'Votre institut grandit ?', teamText: 'Chaque collaboratrice a sa propre colonne.',
    },
};
