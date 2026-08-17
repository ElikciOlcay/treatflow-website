export type LeadMagnet = {
    slug: string;
    leadSource: string;
    downloadUrl: string;
    title: string;
    highlight: string;
    description: string;
    badge: string;
    buttonText: string;
    successTitle: string;
    formTitle: string;
    formHint: string;
    bullets: string[];
    definitionTitle: string;
    definition: string;
    contentsTitle: string;
    contents: string[];
    audienceTitle: string;
    audience: { name: string; desc: string }[];
    faqs: { question: string; answer: string }[];
    relatedHref: string;
    relatedLabel: string;
    keywords: string[];
};

export const SHORT_DISCLAIMER =
    'Diese Vorlage dient als Orientierungshilfe und ersetzt keine individuelle rechtliche oder fachliche Beratung.';

export const leadMagnets: LeadMagnet[] = [
    {
        slug: 'nisv-checkliste-kosmetikstudio-pdf',
        leadSource: 'NiSV-Checkliste Kosmetikstudio PDF',
        downloadUrl: '/downloads/nisv-checkliste-kosmetikstudio.pdf',
        title: 'NiSV-Checkliste für Kosmetikstudios',
        highlight: '6-Seiten-Playbook',
        description:
            'Geräte-Radar, 12-Punkte-Checkliste, Dokumentations-Standard und 30-Tage-Plan – damit du vor einer Kontrolle weißt, was fehlt.',
        badge: 'Kostenloses Playbook',
        buttonText: 'NiSV-Playbook herunterladen',
        successTitle: 'Dein NiSV-Playbook ist bereit!',
        formTitle: 'Playbook kostenlos herunterladen',
        formHint: 'Trage deine E-Mail ein und erhalte die PDF sofort.',
        bullets: [
            'Geräte-Radar für Laser, IPL, US, RF und Plasma',
            '12-Punkte-Checkliste inkl. Fachkunde und Anzeige',
            'Was in der Dokumentation wirklich zählt',
            'Arbeitsblatt mit Fristen und Zuständigkeiten',
        ],
        definitionTitle: 'Was ist eine NiSV-Checkliste?',
        definition:
            'Die NiSV-Checkliste ist eine praktische Übersicht der Pflichten aus der Verordnung zum Schutz vor schädlichen Wirkungen nichtionisierender Strahlung. Sie hilft Studios, Beratung, Einwilligung, Behandlungsdokumentation und Gerätenachweise vor einer Kontrolle zu prüfen.',
        contentsTitle: 'Das steckt im Playbook',
        contents: [
            'Warum NiSV im Studio-Alltag ankommt',
            'Geräte-Radar zum Ankreuzen',
            '12-Punkte-Checkliste vor der Kontrolle',
            'Dokumentation, die in 30 Minuten auffindbar ist',
            'Häufige Lücken und wie Studios sie schließen',
            '30-Tage-Plan mit Verantwortlichen und Fristen',
        ],
        audienceTitle: 'Für diese Studios gedacht',
        audience: [
            { name: 'Laser & IPL', desc: 'Haarentfernung, Hautverjüngung, Pigment' },
            { name: 'Permanent Makeup', desc: 'PMU, Microblading, Lidstrich' },
            { name: 'Ästhetik', desc: 'Ultraschall, Radiofrequenz, HIFU' },
            { name: 'Kosmetik mit Geräten', desc: 'NiSV-relevante Anwendungen im Studio' },
        ],
        faqs: [
            {
                question: 'Ist die Checkliste ein Ersatz für die NiSV-Dokumentation?',
                answer:
                    'Nein. Sie hilft dir, Lücken zu finden. Die eigentliche Dokumentation gehört in die Kundenakte und ins Gerätebuch.',
            },
            {
                question: 'Für welche Behandlungen gilt die NiSV?',
                answer:
                    'Unter anderem für Laser, IPL, intensive Lichtquellen, Ultraschall und vergleichbare Anwendungen zu kosmetischen Zwecken. Die genaue Einordnung hängt vom Gerät und der Anwendung ab.',
            },
            {
                question: 'Kann ich die Liste an mein Studio anpassen?',
                answer:
                    'Ja. Streiche Punkte, die du nicht anbietest, und ergänze gerätespezifische Felder.',
            },
            {
                question: 'Wie oft sollte ich die Checkliste durchgehen?',
                answer:
                    'Vor der ersten NiSV-Anwendung, nach neuen Geräten und mindestens einmal im Jahr vor einer möglichen Kontrolle.',
            },
        ],
        relatedHref: '/nisv-dokumentation-kosmetikstudio',
        relatedLabel: 'NiSV-Dokumentation digital',
        keywords: [
            'nisv checkliste',
            'nisv dokumentation kosmetikstudio',
            'nisv vorlage pdf',
            'laser dokumentation checkliste',
        ],
    },
    {
        slug: 'kundenkartei-vorlage-kosmetikstudio-pdf',
        leadSource: 'Kundenkartei Vorlage Kosmetikstudio PDF',
        downloadUrl: '/downloads/kundenkartei-vorlage-kosmetikstudio.pdf',
        title: 'Kundenkartei-Vorlage für Kosmetikstudios',
        highlight: '7-Seiten-Playbook',
        description:
            'Pflichtfelder, druckbare Stammkarte, Verlaufsseite, DSGVO-Minimum und ein 14-Tage-Plan fürs Team – nicht nur ein leeres Formular.',
        badge: 'Kostenloses Playbook',
        buttonText: 'Kundenkartei-Playbook herunterladen',
        successTitle: 'Dein Kundenkartei-Playbook ist bereit!',
        formTitle: 'Playbook kostenlos herunterladen',
        formHint: 'Trage deine E-Mail ein und erhalte die PDF sofort.',
        bullets: [
            'Die 5 Schichten einer Kartei, die das Team nutzt',
            'Druckbare Stammkarte plus Verlaufsseite',
            'DSGVO-Check für den Studio-Alltag',
            '14-Tage-Einführung ohne Chaos',
        ],
        definitionTitle: 'Was gehört in eine Kundenkartei?',
        definition:
            'Eine Kundenkartei sammelt Stammdaten, relevante Gesundheitsinfos, Einwilligungen und die Behandlungshistorie. So siehst du vor dem Termin, was zuletzt gemacht wurde, welche Produkte vertragen wurden und was als Nächstes geplant ist.',
        contentsTitle: 'Das steckt im Playbook',
        contents: [
            'Die 5 Schichten einer guten Kartei',
            'Pflichtfelder vs. Nice-to-have',
            'Druckvorlage Stammkarte',
            'Verlaufsseite mit Notiz-Regel',
            'DSGVO-Check für den Alltag',
            '14-Tage-Einführung im Team',
        ],
        audienceTitle: 'Für diese Studios gedacht',
        audience: [
            { name: 'Kosmetikstudios', desc: 'Gesicht, Körper, Anti-Aging' },
            { name: 'Nagel- und Lash-Studios', desc: 'Wiederkehrende Termine und Vorlieben' },
            { name: 'PMU', desc: 'Vorher-Nachher und Nachsorge' },
            { name: 'Starter-Studios', desc: 'Struktur, bevor die Software steht' },
        ],
        faqs: [
            {
                question: 'Darf ich Kundendaten auf Papier führen?',
                answer:
                    'Ja, wenn du sie sicher aufbewahrst, nur Berechtigte Zugriff haben und die DSGVO-Pflichten erfüllst. Digital ist die Suche und die Aufbewahrung meist einfacher.',
            },
            {
                question: 'Wie lange muss ich die Kartei aufbewahren?',
                answer:
                    'Je nach Dokumententyp gelten unterschiedliche Fristen. Behandlungs- und Einwilligungsunterlagen solltest du in der Regel mehrere Jahre aufbewahren.',
            },
            {
                question: 'Kann ich die Vorlage digital ausfüllen?',
                answer:
                    'Ja, du kannst die PDF am Tablet nutzen. Für Fotos, Verlauf und automatische Formulare eignet sich eine Studio-Software besser.',
            },
        ],
        relatedHref: '/kundenkartei-software',
        relatedLabel: 'Digitale Kundenkartei',
        keywords: [
            'kundenkartei vorlage',
            'kundenkartei kosmetikstudio pdf',
            'kundendaten kosmetik vorlage',
        ],
    },
    {
        slug: 'no-show-playbook-kosmetikstudio-pdf',
        leadSource: 'No-Show-Playbook Kosmetikstudio PDF',
        downloadUrl: '/downloads/no-show-playbook-kosmetikstudio.pdf',
        title: 'No-Show-Playbook für Kosmetikstudios',
        highlight: '8 Seiten mit Skripten',
        description:
            'Kostenrechner, 3-Stufen-System, fertige SMS- und Call-Texte, Anzahlungsregeln und ein 30-Tage-Plan – damit der Kalender voll bleibt.',
        badge: 'Kostenloses Playbook',
        buttonText: 'No-Show-Playbook herunterladen',
        successTitle: 'Dein No-Show-Playbook ist bereit!',
        formTitle: 'Playbook kostenlos herunterladen',
        formHint: 'Trage deine E-Mail ein und erhalte die PDF sofort.',
        bullets: [
            'Rechenblatt: Was No-Shows im Monat kosten',
            '3-Stufen-System: erinnern, absichern, nachfassen',
            'Fertige SMS-, Mail- und Rezeptions-Skripte',
            'Anzahlung und Ausfallhonorar ohne Drama',
        ],
        definitionTitle: 'Was ist ein No-Show-Playbook?',
        definition:
            'Ein No-Show-Playbook ist eine kurze Betriebsanleitung gegen leere Stühle: Wann du bestätigst, wann du erinnerst, wie Kundinnen absagen und was du bei wiederholten Ausfällen tust. Ziel ist weniger Umsatzverlust bei gleichbleibend freundlichem Ton.',
        contentsTitle: 'Das steckt im Playbook',
        contents: [
            'Was ein No-Show wirklich kostet',
            'Die vier Ursachen im Studio',
            'Das 3-Stufen-System',
            'Erinnerungsstrecke zum Kopieren',
            'Anzahlung und Ausfallhonorar',
            '30-Tage-Umsetzung im Team',
        ],
        audienceTitle: 'Für diese Studios gedacht',
        audience: [
            { name: 'Einzelunternehmerinnen', desc: 'Jeder leere Slot tut weh' },
            { name: 'Teams', desc: 'Einheitliche Texte für alle Mitarbeiterinnen' },
            { name: 'Online-Buchung', desc: 'Automatische Erinnerungen aufsetzen' },
            { name: 'Hochpreis-Behandlungen', desc: 'Lange Slots besser absichern' },
        ],
        faqs: [
            {
                question: 'Darf ich bei No-Show eine Gebühr verlangen?',
                answer:
                    'Das hängt von deinen AGB, der vorherigen Information und dem Einzelfall ab. Das Playbook hilft bei der Kommunikation, ersetzt aber keine Rechtsberatung.',
            },
            {
                question: 'Reichen Erinnerungen wirklich?',
                answer:
                    'In den meisten Studios ist das der größte Hebel. Viele No-Shows entstehen durch Vergessen, nicht durch Absicht.',
            },
            {
                question: 'Soll ich per WhatsApp erinnern?',
                answer:
                    'Nur mit klarer Einwilligung und Trennung von privatem Chat. Professioneller sind SMS oder E-Mail aus der Studio-Software.',
            },
        ],
        relatedHref: '/sms-erinnerungen-kosmetikstudio',
        relatedLabel: 'SMS-Erinnerungen',
        keywords: [
            'no show kosmetikstudio',
            'termnierinnerung vorlage',
            'no show reduzieren checkliste',
        ],
    },
    {
        slug: 'preisliste-vorlage-kosmetikstudio-pdf',
        leadSource: 'Preisliste Vorlage Kosmetikstudio PDF',
        downloadUrl: '/downloads/preisliste-vorlage-kosmetikstudio.pdf',
        title: 'Preislisten-Vorlage für Kosmetikstudios',
        highlight: '8-Seiten-Kalkulation',
        description:
            'Minutenpreis, Listen-Logik, Pakete, Erhöhungstexte und druckbare Vorlagen – damit die Preise sich rechnen, nicht nur hübsch aussehen.',
        badge: 'Kostenloses Playbook',
        buttonText: 'Preislisten-Playbook herunterladen',
        successTitle: 'Dein Preislisten-Playbook ist bereit!',
        formTitle: 'Playbook kostenlos herunterladen',
        formHint: 'Trage deine E-Mail ein und erhalte die PDF sofort.',
        bullets: [
            'Untergrenze und Minutenpreis rechnen',
            'Kernleistungen, Add-ons, Pakete, Mitgliedschaft',
            'Texte für Preiserhöhung an Rezeption und Website',
            'Druckvorlage plus 90-Tage-Review',
        ],
        definitionTitle: 'Warum eine klare Preisliste hilft',
        definition:
            'Eine gute Preisliste nimmt Unsicherheit. Kundinnen sehen Leistung, Dauer und Preis auf einen Blick. Du wirkst professioneller, reduzierst Preisgespräche an der Rezeption und kannst Erhöhungen sauber kommunizieren.',
        contentsTitle: 'Das steckt im Playbook',
        contents: [
            'Minutenpreis und Untergrenze rechnen',
            'Listen-Logik: Kern, Add-ons, Pakete',
            'Preiserhöhung in 5 Schritten',
            'Texte für Website und Rezeption',
            'Druckvorlage für Liste und Pakete',
            '90-Tage-Review der Deckungsbeiträge',
        ],
        audienceTitle: 'Für diese Studios gedacht',
        audience: [
            { name: 'Kosmetikstudios', desc: 'Gesichts- und Körperbehandlungen' },
            { name: 'Nagel- und Lash-Studios', desc: 'Viele kleine Positionen' },
            { name: 'Neue Studios', desc: 'Erste Preisliste strukturiert aufsetzen' },
            { name: 'Wachsende Teams', desc: 'Einheitliche Preise im Kalender' },
        ],
        faqs: [
            {
                question: 'Muss ich alle Preise öffentlich machen?',
                answer:
                    'Transparente Preise helfen bei der Buchung. Manche Studios zeigen Ab-Preise und klären den Endpreis in der Beratung.',
            },
            {
                question: 'Wie gehe ich mit Preiserhöhungen um?',
                answer:
                    'Datum auf der Liste aktualisieren, Stammkundinnen früh informieren und den Nutzen kurz erklären. Die Vorlage hat dafür einen Hinweisblock.',
            },
            {
                question: 'Kann ich die Liste in Treatflow übernehmen?',
                answer:
                    'Ja. Leistungen, Dauer und Preise pflegst du einmal in der Software – für Kalender, Online-Buchung und Kasse.',
            },
        ],
        relatedHref: '/preise',
        relatedLabel: 'Treatflow Preise',
        keywords: [
            'preisliste kosmetikstudio vorlage',
            'preisliste kosmetik pdf',
            'leistungen preise vorlage',
        ],
    },
];

export function getLeadMagnet(slug: string) {
    return leadMagnets.find((magnet) => magnet.slug === slug);
}
