import type { DemoLabels } from './shared';

export type OnlineBookingDemoText = {
    sr: string;
    steps: string[];
    stepAria: string;
    bookOnline: string;
    open247: string;
    noCommission: string;
    // 1 – Leistung (drei Leistungen, die zweite wird gewählt)
    chooseService: string;
    services: string[];
    minUnit: string;
    next: string;
    // 2 – Termin
    chooseTime: string;
    anyStaff: string;
    /** erste Person wird bei „Beliebig“ automatisch zugewiesen */
    staff: string[];
    /** Di–Sa, 10.–14. */
    weekdays: string[];
    freeTimes: string;
    // 3 – Kontakt
    contact: string;
    fields: string[];
    /** Name, E-Mail, Telefon */
    customer: string[];
    consent: string;
    submit: string;
    // 4 – Gebucht
    booked: string;
    confirm: string;
    reminder: string;
    date: string;
    calendar: string;
    newBadge: string;
    existingCustomer: string;
};

export const ONLINE_BOOKING_LABELS: DemoLabels<OnlineBookingDemoText> = {
    de: {
        sr: 'Beispiel für die Online-Buchung mit Treatflow: Eine Kundin wählt auf der Buchungsseite des Studios eine Leistung und einen freien Termin und gibt ihre Kontaktdaten ein. Die Buchung ist sofort bestätigt und steht direkt im Kalender des Studios – ohne Provision.',
        steps: ['Leistung', 'Termin', 'Kontakt', 'Gebucht'], stepAria: 'Schritt',
        bookOnline: 'Online-Termin buchen', open247: '24/7 buchbar', noCommission: 'Keine Provision',
        chooseService: 'Leistung wählen', services: ['Gesichtsbehandlung', 'Hydrafacial', 'Wimpernlifting'], minUnit: 'Min.', next: 'Weiter',
        chooseTime: 'Termin wählen', anyStaff: 'Beliebig', staff: ['Elif', 'Jana'], weekdays: ['Di', 'Mi', 'Do', 'Fr', 'Sa'], freeTimes: 'Freie Zeiten',
        contact: 'Kontaktdaten', fields: ['Name', 'E-Mail', 'Telefon'], customer: ['Lena Wagner', 'lena@beispiel.de', '+49 151 23456789'],
        consent: 'Datenschutz & AGB akzeptiert', submit: 'Buchung abschließen',
        // WhatsApp gibt es nur im deutschsprachigen Markt
        booked: 'Termin gebucht!', confirm: 'Bestätigung per E-Mail & WhatsApp', reminder: 'Erinnerung vor dem Termin',
        date: 'Do, 12. Nov.', calendar: 'Kalender', newBadge: 'Neu · online gebucht', existingCustomer: 'Sarah K.',
    },
    en: {
        sr: "Example of online booking with Treatflow: a client picks a treatment and a free time on the studio's booking page and enters her contact details. The booking is confirmed instantly and appears straight in the studio's calendar – with no commission.",
        steps: ['Treatment', 'Time', 'Details', 'Booked'], stepAria: 'Step',
        bookOnline: 'Book an appointment online', open247: 'Bookable 24/7', noCommission: 'No commission',
        chooseService: 'Choose a treatment', services: ['Facial', 'Hydrafacial', 'Lash lift'], minUnit: 'min', next: 'Continue',
        chooseTime: 'Choose a time', anyStaff: 'Anyone', staff: ['Sophie', 'Chloe'], weekdays: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat'], freeTimes: 'Available times',
        contact: 'Contact details', fields: ['Name', 'Email', 'Phone'], customer: ['Emily Clarke', 'emily@example.com', '+44 7700 900123'],
        consent: 'Privacy policy & terms accepted', submit: 'Complete booking',
        booked: 'Appointment booked!', confirm: 'Confirmation by email', reminder: 'Reminder before the appointment',
        date: 'Thu 12 Nov', calendar: 'Calendar', newBadge: 'New · booked online', existingCustomer: 'Grace T.',
    },
    tr: {
        sr: 'Treatflow ile online randevu örneği: Müşteri, salonun randevu sayfasında bir hizmet ve boş bir saat seçip iletişim bilgilerini girer. Randevu anında onaylanır ve doğrudan salonun takvimine düşer – komisyon yok.',
        steps: ['Hizmet', 'Saat', 'Bilgiler', 'Onay'], stepAria: 'Adım',
        bookOnline: 'Online randevu al', open247: '7/24 randevu', noCommission: 'Komisyon yok',
        chooseService: 'Hizmet seçin', services: ['Cilt bakımı', 'Hydrafacial', 'Kirpik lifting'], minUnit: 'dk', next: 'Devam',
        chooseTime: 'Saat seçin', anyStaff: 'Fark etmez', staff: ['Ayşe', 'Merve'], weekdays: ['Sal', 'Çar', 'Per', 'Cum', 'Cmt'], freeTimes: 'Boş saatler',
        contact: 'İletişim bilgileri', fields: ['Ad Soyad', 'E-posta', 'Telefon'], customer: ['Elif Yılmaz', 'elif@ornek.com', '+90 532 123 45 67'],
        consent: 'Gizlilik ve koşullar kabul edildi', submit: 'Randevuyu tamamla',
        booked: 'Randevu alındı!', confirm: 'E-posta ile onay', reminder: 'Randevudan önce hatırlatma',
        date: '12 Kas Per', calendar: 'Takvim', newBadge: 'Yeni · online alındı', existingCustomer: 'Selin K.',
    },
    nl: {
        sr: 'Voorbeeld van online boeken met Treatflow: een klant kiest op de boekingspagina van de salon een behandeling en een vrije tijd en vult haar gegevens in. De boeking is meteen bevestigd en staat direct in de agenda van de salon – zonder commissie.',
        steps: ['Behandeling', 'Tijd', 'Gegevens', 'Geboekt'], stepAria: 'Stap',
        bookOnline: 'Online afspraak maken', open247: '24/7 boekbaar', noCommission: 'Geen commissie',
        chooseService: 'Kies een behandeling', services: ['Gezichtsbehandeling', 'Hydrafacial', 'Wimperlifting'], minUnit: 'min', next: 'Verder',
        chooseTime: 'Kies een tijd', anyStaff: 'Geen voorkeur', staff: ['Lotte', 'Fleur'], weekdays: ['di', 'wo', 'do', 'vr', 'za'], freeTimes: 'Vrije tijden',
        contact: 'Contactgegevens', fields: ['Naam', 'E-mail', 'Telefoon'], customer: ['Sanne de Vries', 'sanne@voorbeeld.nl', '+31 6 12345678'],
        consent: 'Privacy & voorwaarden geaccepteerd', submit: 'Boeking afronden',
        booked: 'Afspraak geboekt!', confirm: 'Bevestiging per e-mail', reminder: 'Herinnering vóór de afspraak',
        date: 'do 12 nov', calendar: 'Agenda', newBadge: 'Nieuw · online geboekt', existingCustomer: 'Emma J.',
    },
    it: {
        sr: "Esempio di prenotazione online con Treatflow: una cliente sceglie un trattamento e un orario libero sulla pagina di prenotazione del centro e inserisce i suoi dati. La prenotazione è confermata subito e compare direttamente nell'agenda del centro, senza commissioni.",
        steps: ['Trattamento', 'Orario', 'Dati', 'Prenotato'], stepAria: 'Passo',
        bookOnline: 'Prenota online', open247: 'Prenotabile 24/7', noCommission: 'Zero commissioni',
        chooseService: 'Scegli un trattamento', services: ['Trattamento viso', 'Hydrafacial', 'Laminazione ciglia'], minUnit: 'min', next: 'Avanti',
        chooseTime: 'Scegli un orario', anyStaff: 'Qualsiasi', staff: ['Chiara', 'Martina'], weekdays: ['mar', 'mer', 'gio', 'ven', 'sab'], freeTimes: 'Orari liberi',
        contact: 'Dati di contatto', fields: ['Nome', 'E-mail', 'Telefono'], customer: ['Giulia Rossi', 'giulia@esempio.it', '+39 333 123 4567'],
        consent: 'Privacy e condizioni accettate', submit: 'Conferma prenotazione',
        booked: 'Appuntamento prenotato!', confirm: 'Conferma via e-mail', reminder: "Promemoria prima dell'appuntamento",
        date: 'gio 12 nov', calendar: 'Agenda', newBadge: 'Nuovo · prenotato online', existingCustomer: 'Francesca B.',
    },
    pl: {
        sr: 'Przykład rezerwacji online w Treatflow: klientka wybiera na stronie rezerwacji salonu zabieg i wolny termin, a potem podaje swoje dane. Rezerwacja jest od razu potwierdzona i trafia prosto do kalendarza salonu – bez prowizji.',
        steps: ['Zabieg', 'Termin', 'Dane', 'Gotowe'], stepAria: 'Krok',
        bookOnline: 'Zarezerwuj wizytę online', open247: 'Rezerwacje 24/7', noCommission: 'Bez prowizji',
        chooseService: 'Wybierz zabieg', services: ['Zabieg na twarz', 'Hydrafacial', 'Laminacja rzęs'], minUnit: 'min', next: 'Dalej',
        chooseTime: 'Wybierz termin', anyStaff: 'Dowolna osoba', staff: ['Kasia', 'Ola'], weekdays: ['wt', 'śr', 'czw', 'pt', 'sob'], freeTimes: 'Wolne terminy',
        contact: 'Dane kontaktowe', fields: ['Imię i nazwisko', 'E-mail', 'Telefon'], customer: ['Anna Nowak', 'anna@przyklad.pl', '+48 512 345 678'],
        consent: 'Prywatność i regulamin zaakceptowane', submit: 'Zarezerwuj',
        booked: 'Wizyta zarezerwowana!', confirm: 'Potwierdzenie e-mailem', reminder: 'Przypomnienie przed wizytą',
        date: 'czw., 12 lis', calendar: 'Kalendarz', newBadge: 'Nowa · rezerwacja online', existingCustomer: 'Zofia K.',
    },
    es: {
        sr: 'Ejemplo de reserva online con Treatflow: una clienta elige un tratamiento y una hora libre en la página de reservas del centro e introduce sus datos. La reserva se confirma al instante y aparece directamente en la agenda del centro, sin comisiones.',
        steps: ['Tratamiento', 'Hora', 'Datos', 'Reservado'], stepAria: 'Paso',
        bookOnline: 'Reserva tu cita online', open247: 'Reservas 24/7', noCommission: 'Sin comisiones',
        chooseService: 'Elige un tratamiento', services: ['Tratamiento facial', 'Hydrafacial', 'Lifting de pestañas'], minUnit: 'min', next: 'Continuar',
        chooseTime: 'Elige una hora', anyStaff: 'Cualquiera', staff: ['Carmen', 'Laura'], weekdays: ['mar', 'mié', 'jue', 'vie', 'sáb'], freeTimes: 'Horas libres',
        contact: 'Datos de contacto', fields: ['Nombre', 'Email', 'Teléfono'], customer: ['Lucía García', 'lucia@ejemplo.es', '+34 612 345 678'],
        consent: 'Privacidad y condiciones aceptadas', submit: 'Confirmar reserva',
        booked: '¡Cita reservada!', confirm: 'Confirmación por email', reminder: 'Recordatorio antes de la cita',
        date: 'jue, 12 nov', calendar: 'Agenda', newBadge: 'Nueva · reservada online', existingCustomer: 'María L.',
    },
    fr: {
        sr: "Exemple de réservation en ligne avec Treatflow : une cliente choisit une prestation et un créneau libre sur la page de réservation de l'institut, puis saisit ses coordonnées. La réservation est confirmée immédiatement et apparaît directement dans l'agenda de l'institut – sans commission.",
        steps: ['Prestation', 'Créneau', 'Coordonnées', 'Réservé'], stepAria: 'Étape',
        bookOnline: 'Réserver en ligne', open247: 'Réservable 24h/24', noCommission: 'Sans commission',
        chooseService: 'Choisir une prestation', services: ['Soin du visage', 'Hydrafacial', 'Rehaussement de cils'], minUnit: 'min', next: 'Continuer',
        chooseTime: 'Choisir un créneau', anyStaff: 'Peu importe', staff: ['Léa', 'Chloé'], weekdays: ['mar', 'mer', 'jeu', 'ven', 'sam'], freeTimes: 'Créneaux libres',
        contact: 'Coordonnées', fields: ['Nom', 'E-mail', 'Téléphone'], customer: ['Camille Martin', 'camille@exemple.fr', '+33 6 12 34 56 78'],
        consent: 'Confidentialité et CGV acceptées', submit: 'Confirmer la réservation',
        booked: 'Rendez-vous réservé !', confirm: 'Confirmation par e-mail', reminder: 'Rappel avant le rendez-vous',
        date: 'jeu. 12 nov.', calendar: 'Agenda', newBadge: 'Nouveau · réservé en ligne', existingCustomer: 'Julie B.',
    },
};
