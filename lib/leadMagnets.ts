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
        highlight: 'kostenlos als PDF',
        description:
            'Prüfe in 15 Minuten, ob Beratung, Einwilligung, Dokumentation und Gerätebuch bei Laser, IPL und ähnlichen Anwendungen sitzen.',
        badge: 'Kostenlose Checkliste',
        buttonText: 'NiSV-Checkliste herunterladen',
        successTitle: 'Deine NiSV-Checkliste ist bereit!',
        formTitle: 'Checkliste kostenlos herunterladen',
        formHint: 'Trage deine E-Mail ein und erhalte die PDF sofort.',
        bullets: [
            'Checkliste für Beratung, Aufklärung und Einwilligung',
            'Dokumentation pro Behandlung inkl. Geräteparameter',
            'Gerätebuch, Schulung und Aufbewahrung im Blick',
            'Für Laser-, IPL- und PMU-Studios geeignet',
        ],
        definitionTitle: 'Was ist eine NiSV-Checkliste?',
        definition:
            'Die NiSV-Checkliste ist eine praktische Übersicht der Pflichten aus der Verordnung zum Schutz vor schädlichen Wirkungen nichtionisierender Strahlung. Sie hilft Studios, Beratung, Einwilligung, Behandlungsdokumentation und Gerätenachweise vor einer Kontrolle zu prüfen.',
        contentsTitle: 'Das steckt in der Checkliste',
        contents: [
            'Welche Anwendungen unter die NiSV fallen',
            'Beratung und Aufklärung vor der ersten Behandlung',
            'Einwilligung und Kontraindikationen',
            'Dokumentation von Parametern, Hauttyp und Verlauf',
            'Gerätebuch, Wartung und Einweisung',
            'Aufbewahrung und Verantwortlichkeiten im Team',
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
        highlight: 'zum Ausdrucken',
        description:
            'Eine saubere Karteikarte für Stammdaten, Anamnese-Kurzinfo, Behandlungshistorie und nächste Termine – als Start, bis alles digital läuft.',
        badge: 'Kostenlose Vorlage',
        buttonText: 'Kundenkartei-Vorlage herunterladen',
        successTitle: 'Deine Kundenkartei-Vorlage ist bereit!',
        formTitle: 'Vorlage kostenlos herunterladen',
        formHint: 'Trage deine E-Mail ein und erhalte die PDF sofort.',
        bullets: [
            'Stammdaten, Kontakt und Einwilligungen auf einer Seite',
            'Platz für Behandlungshistorie und Produkte',
            'Hinweise zu Allergien und Besonderheiten',
            'Für Einzelstudios und kleine Teams',
        ],
        definitionTitle: 'Was gehört in eine Kundenkartei?',
        definition:
            'Eine Kundenkartei sammelt Stammdaten, relevante Gesundheitsinfos, Einwilligungen und die Behandlungshistorie. So siehst du vor dem Termin, was zuletzt gemacht wurde, welche Produkte vertragen wurden und was als Nächstes geplant ist.',
        contentsTitle: 'Das steckt in der Vorlage',
        contents: [
            'Stammdaten und Kontaktdaten',
            'Kurz-Anamnese und Allergien',
            'Einwilligungs- und Datenschutz-Haken',
            'Behandlungstabelle mit Datum, Leistung, Notiz',
            'Produktempfehlungen und nächster Termin',
            'Interner Vermerk für das Team',
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
        highlight: 'weniger leere Stühle',
        description:
            'Erinnerungs-Texte, Absageregeln und eine Wochen-Checkliste, mit der du verpasste Termine senkst – ohne unfreundlich zu wirken.',
        badge: 'Kostenloses Playbook',
        buttonText: 'No-Show-Playbook herunterladen',
        successTitle: 'Dein No-Show-Playbook ist bereit!',
        formTitle: 'Playbook kostenlos herunterladen',
        formHint: 'Trage deine E-Mail ein und erhalte die PDF sofort.',
        bullets: [
            'Fertige Texte für Bestätigung und Erinnerung',
            'Klare Absage- und Storno-Regeln zum Anpassen',
            'Checkliste für die erste Woche',
            'Für SMS, E-Mail und WhatsApp-Grenzen',
        ],
        definitionTitle: 'Was ist ein No-Show-Playbook?',
        definition:
            'Ein No-Show-Playbook ist eine kurze Betriebsanleitung gegen leere Stühle: Wann du bestätigst, wann du erinnerst, wie Kundinnen absagen und was du bei wiederholten Ausfällen tust. Ziel ist weniger Umsatzverlust bei gleichbleibend freundlichem Ton.',
        contentsTitle: 'Das steckt im Playbook',
        contents: [
            'Ursachen für No-Shows im Studioalltag',
            'Buchungsbestätigung direkt nach dem Termin',
            'Erinnerung 24–48 Stunden vorher',
            'Textbausteine für SMS und E-Mail',
            'Absagefrist und Nachbesetzung',
            'Umgang mit Wiederholungstätern',
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
        highlight: 'klar und anpassbar',
        description:
            'Eine strukturierte Preisliste mit Kategorien, Ab-Preisen und Hinweistexten – zum Ausdrucken oder als Vorlage für deine Website.',
        badge: 'Kostenlose Vorlage',
        buttonText: 'Preislisten-Vorlage herunterladen',
        successTitle: 'Deine Preislisten-Vorlage ist bereit!',
        formTitle: 'Vorlage kostenlos herunterladen',
        formHint: 'Trage deine E-Mail ein und erhalte die PDF sofort.',
        bullets: [
            'Kategorien für Gesicht, Körper, Nägel, Wimpern',
            'Felder für Festpreis, Ab-Preis und Dauer',
            'Hinweistexte zu Beratung und Paketen',
            'Zum Ausdrucken oder als Website-Vorlage',
        ],
        definitionTitle: 'Warum eine klare Preisliste hilft',
        definition:
            'Eine gute Preisliste nimmt Unsicherheit. Kundinnen sehen Leistung, Dauer und Preis auf einen Blick. Du wirkst professioneller, reduzierst Preisgespräche an der Rezeption und kannst Erhöhungen sauber kommunizieren.',
        contentsTitle: 'Das steckt in der Vorlage',
        contents: [
            'Studio-Kopf mit Name und Gültigkeitsdatum',
            'Tabellen für Leistungen, Dauer und Preis',
            'Ab-Preise für variable Behandlungen',
            'Pakete, Serien und Gutscheine',
            'Kurzer Text zur Preiserhöhung',
            'Platz für AGB-Hinweis und Beratung',
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
