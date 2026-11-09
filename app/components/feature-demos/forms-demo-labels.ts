import type { DemoLabels } from './shared';

export type FormsDemoText = {
    sr: string;
    steps: readonly [string, string, string, string];
    stepAria: string;
    client: string;
    initials: string;
    formName: string;
    // 1 – Link per E-Mail
    inbox: string;
    now: string;
    subject: string;
    mailBody: string;
    formMeta: string;
    openForm: string;
    booked: string;
    bookedMeta: string;
    linkSent: string;
    // 2 – Anamnese
    pages: readonly [string, string];
    nameLabel: string;
    medsQ: string;
    allergyLabel: string;
    allergyValue: string;
    pregnantQ: string;
    yes: string;
    no: string;
    next: string;
    // 3 – Unterschrift
    consentTitle: string;
    consentText: string;
    consentCheck: string;
    signature: string;
    submit: string;
    // 4 – Kundenakte
    thanks: string;
    received: string;
    signedAt: string;
    copyByMail: string;
    profile: string;
    completed: string;
};

export const FORMS_LABELS: DemoLabels<FormsDemoText> = {
    de: {
        sr: 'Beispiel für ein digitales Formular mit Treatflow: Nach der Buchung bekommt die Kundin den Formular-Link per E-Mail, füllt die Anamnese am Handy aus, unterschreibt mit dem Finger und das Formular landet automatisch in ihrem Kundenprofil.',
        steps: ['Link', 'Anamnese', 'Signatur', 'Akte'],
        stepAria: 'Schritt',
        client: 'Lena Wagner', initials: 'LW', formName: 'Anamnese Microneedling',
        inbox: 'Posteingang', now: 'jetzt', subject: 'Dein Formular für Donnerstag',
        mailBody: 'Hallo Lena, bitte fülle vor deinem Termin am Do., 14:00 kurz dieses Formular aus.',
        formMeta: '2 Seiten · ca. 3 Min.', openForm: 'Formular ausfüllen',
        booked: 'Termin gebucht', bookedMeta: 'Do., 14:00 · Microneedling', linkSent: 'Formular-Link per E-Mail',
        pages: ['Seite 1 von 2', 'Seite 2 von 2'],
        nameLabel: 'Vor- und Nachname', medsQ: 'Nimmst du regelmäßig Medikamente?',
        allergyLabel: 'Allergien oder Unverträglichkeiten', allergyValue: 'Keine bekannt',
        pregnantQ: 'Bist du schwanger oder stillst du?', yes: 'Ja', no: 'Nein', next: 'Weiter',
        consentTitle: 'Aufklärung & Einwilligung',
        consentText: 'Ich wurde über Ablauf, Risiken und Nachsorge aufgeklärt und willige in die Behandlung ein.',
        consentCheck: 'Gelesen und verstanden', signature: 'Unterschrift', submit: 'Absenden',
        thanks: 'Danke, Lena!', received: 'Dein Formular ist bei Studio Aurora angekommen.',
        signedAt: 'Unterschrieben · heute, 18:42', copyByMail: 'Kopie als PDF per E-Mail',
        profile: 'Kundenprofil', completed: 'Abgeschlossen',
    },
    en: {
        sr: 'Example of a digital form in Treatflow: after booking, the client gets the form link by email, completes the intake form on her phone, signs with her finger, and the form is saved to her client profile automatically.',
        steps: ['Link', 'Form', 'Signature', 'Saved'],
        stepAria: 'Step',
        client: 'Emma Collins', initials: 'EC', formName: 'Microneedling intake form',
        inbox: 'Inbox', now: 'now', subject: 'Your form for Thursday',
        mailBody: 'Hi Emma, please fill in this short form before your appointment on Thu at 14:00.',
        formMeta: '2 pages · approx. 3 min', openForm: 'Fill in form',
        booked: 'Appointment booked', bookedMeta: 'Thu 14:00 · Microneedling', linkSent: 'Form link sent by email',
        pages: ['Page 1 of 2', 'Page 2 of 2'],
        nameLabel: 'Full name', medsQ: 'Do you take any regular medication?',
        allergyLabel: 'Allergies or intolerances', allergyValue: 'None known',
        pregnantQ: 'Are you pregnant or breastfeeding?', yes: 'Yes', no: 'No', next: 'Next',
        consentTitle: 'Information & consent',
        consentText: 'I have been informed about the procedure, risks and aftercare and consent to the treatment.',
        consentCheck: 'Read and understood', signature: 'Signature', submit: 'Submit',
        thanks: 'Thank you, Emma!', received: 'Your form has reached Studio Aurora.',
        signedAt: 'Signed · today, 18:42', copyByMail: 'PDF copy sent by email',
        profile: 'Client profile', completed: 'Completed',
    },
    tr: {
        sr: "Treatflow ile dijital form örneği: Randevudan sonra müşteri form bağlantısını e-postayla alır, anamnez formunu telefonunda doldurur, parmağıyla imzalar ve form otomatik olarak müşteri profiline kaydedilir.",
        steps: ['Bağlantı', 'Anamnez', 'İmza', 'Kayıt'],
        stepAria: 'Adım',
        client: 'Elif Yılmaz', initials: 'EY', formName: 'Microneedling anamnez formu',
        inbox: 'Gelen kutusu', now: 'şimdi', subject: 'Perşembe randevun için form',
        mailBody: "Merhaba Elif, lütfen Per. 14:00'teki randevundan önce bu kısa formu doldur.",
        formMeta: '2 sayfa · yakl. 3 dk.', openForm: 'Formu doldur',
        booked: 'Randevu alındı', bookedMeta: 'Per. 14:00 · Microneedling', linkSent: 'Form linki e-postayla',
        pages: ['Sayfa 1 / 2', 'Sayfa 2 / 2'],
        nameLabel: 'Ad soyad', medsQ: 'Düzenli ilaç kullanıyor musun?',
        allergyLabel: 'Alerji veya hassasiyetler', allergyValue: 'Bilinen yok',
        pregnantQ: 'Hamile misin veya emziriyor musun?', yes: 'Evet', no: 'Hayır', next: 'İleri',
        consentTitle: 'Bilgilendirme ve onay',
        consentText: 'Uygulama, riskler ve sonrası bakım hakkında bilgilendirildim ve uygulamaya onay veriyorum.',
        consentCheck: 'Okudum ve anladım', signature: 'İmza', submit: 'Gönder',
        thanks: 'Teşekkürler, Elif!', received: "Formun Studio Aurora'ya ulaştı.",
        signedAt: 'İmzalandı · bugün 18:42', copyByMail: 'PDF kopyası e-postayla',
        profile: 'Müşteri profili', completed: 'Tamamlandı',
    },
    nl: {
        sr: 'Voorbeeld van een digitaal formulier in Treatflow: na de boeking krijgt de klant de formulierlink per e-mail, vult het intakeformulier in op haar telefoon, tekent met haar vinger en het formulier wordt automatisch in haar klantprofiel opgeslagen.',
        steps: ['Link', 'Intake', 'Tekenen', 'Dossier'],
        stepAria: 'Stap',
        client: 'Sanne de Vries', initials: 'SV', formName: 'Intakeformulier microneedling',
        inbox: 'Inbox', now: 'nu', subject: 'Je formulier voor donderdag',
        mailBody: 'Hoi Sanne, vul vóór je afspraak op do 14:00 even dit korte formulier in.',
        formMeta: "2 pagina's · ca. 3 min.", openForm: 'Formulier invullen',
        booked: 'Afspraak geboekt', bookedMeta: 'do 14:00 · Microneedling', linkSent: 'Formulierlink per e-mail',
        pages: ['Pagina 1 van 2', 'Pagina 2 van 2'],
        nameLabel: 'Voor- en achternaam', medsQ: 'Gebruik je regelmatig medicijnen?',
        allergyLabel: 'Allergieën of overgevoeligheden', allergyValue: 'Geen bekend',
        pregnantQ: 'Ben je zwanger of geef je borstvoeding?', yes: 'Ja', no: 'Nee', next: 'Volgende',
        consentTitle: 'Informatie & toestemming',
        consentText: "Ik ben geïnformeerd over de behandeling, risico's en nazorg en geef toestemming voor de behandeling.",
        consentCheck: 'Gelezen en begrepen', signature: 'Handtekening', submit: 'Versturen',
        thanks: 'Bedankt, Sanne!', received: 'Je formulier is aangekomen bij Studio Aurora.',
        signedAt: 'Ondertekend · vandaag 18:42', copyByMail: 'Kopie als pdf per e-mail',
        profile: 'Klantprofiel', completed: 'Afgerond',
    },
    it: {
        sr: "Esempio di modulo digitale con Treatflow: dopo la prenotazione la cliente riceve il link al modulo via e-mail, compila l'anamnesi sul suo smartphone, firma con il dito e il modulo viene salvato automaticamente nella sua scheda cliente.",
        steps: ['Link', 'Anamnesi', 'Firma', 'Scheda'],
        stepAria: 'Passo',
        client: 'Giulia Rossi', initials: 'GR', formName: 'Anamnesi microneedling',
        inbox: 'In arrivo', now: 'ora', subject: 'Il tuo modulo per giovedì',
        mailBody: 'Ciao Giulia, prima del tuo appuntamento di gio alle 14:00 compila questo breve modulo.',
        formMeta: '2 pagine · circa 3 min', openForm: 'Compila il modulo',
        booked: 'Appuntamento prenotato', bookedMeta: 'gio 14:00 · Microneedling', linkSent: 'Link al modulo via e-mail',
        pages: ['Pagina 1 di 2', 'Pagina 2 di 2'],
        nameLabel: 'Nome e cognome', medsQ: 'Assumi farmaci regolarmente?',
        allergyLabel: 'Allergie o intolleranze', allergyValue: 'Nessuna nota',
        pregnantQ: 'Sei incinta o stai allattando?', yes: 'Sì', no: 'No', next: 'Avanti',
        consentTitle: 'Informativa e consenso',
        consentText: 'Sono stata informata su procedura, rischi e cure successive e acconsento al trattamento.',
        consentCheck: 'Letto e compreso', signature: 'Firma', submit: 'Invia',
        thanks: 'Grazie, Giulia!', received: 'Il tuo modulo è arrivato a Studio Aurora.',
        signedAt: 'Firmato · oggi, 18:42', copyByMail: 'Copia in PDF via e-mail',
        profile: 'Scheda cliente', completed: 'Completato',
    },
    pl: {
        sr: 'Przykład formularza cyfrowego w Treatflow: po rezerwacji klientka dostaje link do formularza e-mailem, wypełnia wywiad na telefonie, podpisuje się palcem, a formularz automatycznie trafia do jej profilu klienta.',
        steps: ['Link', 'Wywiad', 'Podpis', 'Karta'],
        stepAria: 'Krok',
        client: 'Zofia Nowak', initials: 'ZN', formName: 'Wywiad – mikronakłuwanie',
        inbox: 'Odebrane', now: 'teraz', subject: 'Twój formularz na czwartek',
        mailBody: 'Cześć Zofia, wypełnij proszę przed wizytą w czw. o 14:00 ten krótki formularz.',
        formMeta: '2 strony · ok. 3 min', openForm: 'Wypełnij formularz',
        booked: 'Wizyta zarezerwowana', bookedMeta: 'czw. 14:00 · Mikronakłuwanie', linkSent: 'Link do formularza e-mailem',
        pages: ['Strona 1 z 2', 'Strona 2 z 2'],
        nameLabel: 'Imię i nazwisko', medsQ: 'Czy przyjmujesz regularnie leki?',
        allergyLabel: 'Alergie lub nietolerancje', allergyValue: 'Brak znanych',
        pregnantQ: 'Czy jesteś w ciąży lub karmisz piersią?', yes: 'Tak', no: 'Nie', next: 'Dalej',
        consentTitle: 'Informacja i zgoda',
        consentText: 'Zostałam poinformowana o przebiegu zabiegu, ryzyku i pielęgnacji po zabiegu i wyrażam zgodę na zabieg.',
        consentCheck: 'Przeczytałam i rozumiem', signature: 'Podpis', submit: 'Wyślij',
        thanks: 'Dziękujemy, Zofia!', received: 'Twój formularz dotarł do Studio Aurora.',
        signedAt: 'Podpisano · dziś, 18:42', copyByMail: 'Kopia PDF e-mailem',
        profile: 'Profil klienta', completed: 'Zakończony',
    },
    es: {
        sr: 'Ejemplo de formulario digital con Treatflow: tras la reserva, la clienta recibe el enlace al formulario por e-mail, rellena la anamnesis en su móvil, firma con el dedo y el formulario se guarda automáticamente en su ficha de cliente.',
        steps: ['Enlace', 'Anamnesis', 'Firma', 'Ficha'],
        stepAria: 'Paso',
        client: 'Lucía García', initials: 'LG', formName: 'Anamnesis microneedling',
        inbox: 'Recibidos', now: 'ahora', subject: 'Tu formulario para el jueves',
        mailBody: 'Hola Lucía, antes de tu cita del jue. a las 14:00, rellena este breve formulario.',
        formMeta: '2 páginas · aprox. 3 min', openForm: 'Rellenar formulario',
        booked: 'Cita reservada', bookedMeta: 'jue. 14:00 · Microneedling', linkSent: 'Enlace enviado por e-mail',
        pages: ['Página 1 de 2', 'Página 2 de 2'],
        nameLabel: 'Nombre y apellidos', medsQ: '¿Tomas medicación de forma habitual?',
        allergyLabel: 'Alergias o intolerancias', allergyValue: 'Ninguna conocida',
        pregnantQ: '¿Estás embarazada o en periodo de lactancia?', yes: 'Sí', no: 'No', next: 'Siguiente',
        consentTitle: 'Información y consentimiento',
        consentText: 'He sido informada sobre el procedimiento, los riesgos y los cuidados posteriores y doy mi consentimiento.',
        consentCheck: 'Leído y entendido', signature: 'Firma', submit: 'Enviar',
        thanks: '¡Gracias, Lucía!', received: 'Tu formulario ha llegado a Studio Aurora.',
        signedAt: 'Firmado · hoy, 18:42', copyByMail: 'Copia en PDF por e-mail',
        profile: 'Ficha de cliente', completed: 'Completado',
    },
    fr: {
        sr: "Exemple de formulaire numérique avec Treatflow : après la réservation, la cliente reçoit le lien du formulaire par e-mail, remplit l'anamnèse sur son téléphone, signe du doigt et le formulaire est enregistré automatiquement dans sa fiche client.",
        steps: ['Lien', 'Anamnèse', 'Signature', 'Dossier'],
        stepAria: 'Étape',
        client: 'Camille Martin', initials: 'CM', formName: 'Anamnèse microneedling',
        inbox: 'Boîte de réception', now: 'maintenant', subject: 'Ton formulaire pour jeudi',
        mailBody: 'Bonjour Camille, merci de remplir ce court formulaire avant ton rendez-vous jeu. à 14h00.',
        formMeta: '2 pages · env. 3 min', openForm: 'Remplir le formulaire',
        booked: 'Rendez-vous réservé', bookedMeta: 'jeu. 14h00 · Microneedling', linkSent: 'Lien envoyé par e-mail',
        pages: ['Page 1 sur 2', 'Page 2 sur 2'],
        nameLabel: 'Prénom et nom', medsQ: 'Prends-tu des médicaments régulièrement ?',
        allergyLabel: 'Allergies ou intolérances', allergyValue: 'Aucune connue',
        pregnantQ: 'Es-tu enceinte ou allaites-tu ?', yes: 'Oui', no: 'Non', next: 'Suivant',
        consentTitle: 'Information et consentement',
        consentText: "J'ai été informée du déroulement, des risques et des soins après la séance, et je consens au soin.",
        consentCheck: 'Lu et compris', signature: 'Signature', submit: 'Envoyer',
        thanks: 'Merci, Camille !', received: 'Ton formulaire est bien arrivé chez Studio Aurora.',
        signedAt: "Signé · aujourd'hui, 18h42", copyByMail: 'Copie PDF par e-mail',
        profile: 'Fiche client', completed: 'Terminé',
    },
};
