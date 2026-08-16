import {
    Calendar,
    Users,
    FileText,
    ClipboardCheck,
    Bell,
    Sparkles,
    CheckCircle,
    Star,
} from 'lucide-react';

export const heroBullets = [
    'Termine, Kundenkartei & Formulare in einer App',
    'In 5 Minuten eingerichtet – wir helfen dir persönlich',
    '14 Tage kostenlos – keine Kreditkarte nötig',
];

export const painSolutionPairs = [
    {
        pain: 'Kundendaten liegen in Papierkarten, WhatsApp und Notizen',
        solution: 'Alle Kundendaten zentral in der digitalen Kundenkartei – jederzeit abrufbar.',
    },
    {
        pain: 'Anamnese und Einwilligungen werden ausgedruckt oder vergessen',
        solution: 'Digitale Formulare vor dem Termin – Kunden füllen selbst aus, du sparst Zeit.',
    },
    {
        pain: 'Termine werden manuell bestätigt und No-Shows kosten Umsatz',
        solution: 'Online-Buchung plus automatische SMS- & E-Mail-Erinnerungen.',
    },
    {
        pain: 'Behandlungsdokumentation kostet nach jeder Behandlung extra Zeit',
        solution: 'Schnelle digitale Doku mit Vorlagen – direkt in der Kundenakte.',
    },
    {
        pain: 'Dein Studio wirkt weniger digital, als es eigentlich ist',
        solution: 'Mit Online-Buchung, digitalen Formularen und strukturierter Kundenakte trittst du professioneller auf.',
    },
];

export const steps = [
    {
        num: '1',
        title: 'Account erstellen',
        desc: 'In 2 Minuten registrieren – ohne Kreditkarte, ohne Risiko.',
    },
    {
        num: '2',
        title: 'Studio einrichten',
        desc: 'Behandlungen anlegen, Formulare wählen. Wir helfen dir persönlich.',
    },
    {
        num: '3',
        title: 'Loslegen',
        desc: 'Buchungslink teilen, Kunden verwalten, digital dokumentieren.',
    },
];

export const featuredTestimonial = {
    text: 'Unschlagbar im Preis und intuitiv zu bedienen. Mein Wunsch nach einer Lexware Office Anbindung wurde innerhalb eines Tages umgesetzt!',
    name: 'Stefanie Ruschmann',
    studio: 'Local Guide',
    source: 'Google Bewertung',
    initials: 'SR',
    color: 'bg-teal-600',
};

export const problemCards = [
    'Kundendaten liegen in Papierkarten, WhatsApp und Notizen',
    'Anamnese und Einwilligungen werden ausgedruckt oder vergessen',
    'Termine werden manuell bestätigt',
    'Behandlungsdokumentation kostet nach jeder Behandlung extra Zeit',
    'Kunden vergessen Termine und erscheinen nicht',
];

export const featureCards = [
    {
        icon: Users,
        title: 'Digitale Kundenkartei',
        description: 'Alle Kundendaten, Behandlungshistorie und Notizen zentral und jederzeit abrufbar.',
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-50',
    },
    {
        icon: Calendar,
        title: 'Online-Terminbuchung & Kalender',
        description: 'Kunden buchen selbst über deinen Link – du behältst den Überblick im Kalender.',
        gradient: 'from-indigo-500 to-purple-600',
        bg: 'from-indigo-50 to-purple-50',
    },
    {
        icon: ClipboardCheck,
        title: 'Digitale Anamnese & Einwilligungen',
        description: 'Formulare digital ausfüllen lassen – vor dem Termin oder am Tablet im Studio.',
        gradient: 'from-orange-500 to-red-600',
        bg: 'from-orange-50 to-red-50',
    },
    {
        icon: FileText,
        title: 'Behandlungsdokumentation',
        description: 'Jede Behandlung sauber dokumentieren – mit Notizen, Fotos und Vorlagen.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
    {
        icon: Bell,
        title: 'SMS- & E-Mail-Erinnerungen',
        description: 'Automatische Erinnerungen reduzieren No-Shows und sparen dir Nachfass-Arbeit.',
        gradient: 'from-pink-500 to-rose-600',
        bg: 'from-pink-50 to-rose-50',
    },
    {
        icon: Sparkles,
        title: 'Vorlagen für Kosmetik, Laser/IPL und apparative Behandlungen',
        description: 'Fertige Formular- und Dokumentationsvorlagen für typische Studio-Behandlungen.',
        gradient: 'from-violet-500 to-purple-600',
        bg: 'from-violet-50 to-purple-50',
    },
];

export const screenshotBlocks = [
    {
        title: 'Kalender & Onlinebuchung',
        benefit: 'Kunden buchen selbst – du siehst alle Termine auf einen Blick und vermeidest Doppelbuchungen.',
        image: '/images/mockups/kalender-overview.png',
        alt: 'Treatflow Terminkalender mit Online-Buchung für Kosmetikstudios',
    },
    {
        title: 'Kundenkartei',
        benefit: 'Behandlungshistorie, Anamnese und Notizen sofort griffbereit – ohne Zettelwirtschaft.',
        image: '/images/mockups/kundenverwaltung-overview.png',
        alt: 'Digitale Kundenkartei für Kosmetikstudios in Treatflow',
    },
    {
        title: 'Digitale Formulare',
        benefit: 'Anamnese und Einwilligungen digital – Kunden füllen vor dem Termin aus, du sparst Zeit.',
        image: '/images/mockups/formulare-marketplace.png',
        alt: 'Digitale Anamnese- und Einwilligungsformulare für Kosmetikstudios',
    },
    {
        title: 'Behandlungsdokumentation',
        benefit: 'Nach jeder Behandlung schnell dokumentieren – professionell und nachvollziehbar.',
        image: '/images/mockups/dokumentation-hero.png',
        alt: 'Behandlungsdokumentation für Kosmetikstudios in Treatflow',
    },
];

export const benefits = [
    'Weniger Papierkram',
    'Schnellere Dokumentation',
    'Professioneller Eindruck beim Kunden',
    'Weniger No-Shows durch Erinnerungen',
    'Alle Kundendaten an einem Ort',
    'Persönliche Unterstützung beim Start',
    'DSGVO-konform mit EU-Servern',
    'Entwickelt für Studios im deutschsprachigen Raum',
];

export const basicFeatures = [
    'Kundenverwaltung',
    'Digitale Formulare',
    'Anamnese & Einwilligungen',
    'Behandlungsdokumentation',
    'Vorlagen',
    'E-Mail Support',
];

export const bookingFeatures = [
    'Alles aus Basic',
    'Kalender',
    'Online-Buchungslink',
    'SMS- & E-Mail-Erinnerungen',
    'Automatisierungen',
    'Priority Support',
];

/** Echte Google-Bewertungen – Kurzfassung für schnelle Lesbarkeit */
export const testimonials = [
    {
        text: 'Treatflow ist die ultimative Lösung für meine Praxis. Unschlagbar im Preis und intuitiv zu bedienen. Die Online-Terminbuchung mit automatischem Versand von Anamnese- und Aufklärungsbögen erspart so viel Zettelwirtschaft! Mein Wunsch nach einer Lexware Office Anbindung wurde innerhalb eines Tages umgesetzt!',
        shortText: 'Unschlagbar im Preis und intuitiv zu bedienen. Mein Wunsch wurde innerhalb eines Tages umgesetzt!',
        name: 'Stefanie Ruschmann',
        studio: 'Local Guide',
        source: 'Google Bewertung',
        initials: 'SR',
        color: 'bg-teal-600',
    },
    {
        text: 'Wir sind mehr als zufrieden mit Treatflow! Olcay antwortet immer extrem schnell und setzt Anpassungen am System so schnell wie möglich nach unseren Bedürfnissen um. Der Support ist wirklich herausragend – immer nett, freundlich und lösungsorientiert. Klare Empfehlung für jeden, der ein zuverlässiges System mit top Service sucht!',
        shortText: 'Support ist herausragend – immer nett, freundlich und lösungsorientiert. Klare Empfehlung!',
        name: 'Velura Saarburg',
        studio: 'Laser-Haarentfernung',
        source: 'Google Bewertung',
        initials: 'VS',
        color: 'bg-amber-600',
    },
    {
        text: 'Hab von Phorest zu Treatflow gewechselt. Ich bin super zufrieden. Preisleistung ist super. Bei Phorest war ich bei ca. 300 EUR im Monat, bei Treatflow unter 100 EUR. Das Team ist super schnell und freundlich. Kann ich mit bestem Gewissen empfehlen.',
        shortText: 'Von Phorest gewechselt – Preisleistung ist super. Kann ich mit bestem Gewissen empfehlen.',
        name: 'Sharon Ulbrich-Decker',
        studio: 'Kosmetikstudio',
        source: 'Google Bewertung',
        initials: 'SU',
        color: 'bg-rose-500',
    },
];

export const faqs = [
    {
        q: 'Kann ich Treatflow kostenlos testen?',
        a: 'Ja. Du kannst Treatflow 14 Tage lang kostenlos und unverbindlich testen – mit allen Funktionen des gewählten Plans.',
    },
    {
        q: 'Brauche ich eine Kreditkarte?',
        a: 'Nein. Für den kostenlosen Testzeitraum ist keine Kreditkarte erforderlich.',
    },
    {
        q: 'Was passiert nach den 14 Tagen?',
        a: 'Nach dem Testzeitraum entscheidest du, ob du einen Plan buchen möchtest. Es gibt keine automatische Abbuchung ohne deine Zustimmung.',
    },
    {
        q: 'Hilft ihr mir beim Einrichten?',
        a: 'Ja. Unser Team unterstützt dich persönlich beim Start – von der Einrichtung bis zu den ersten Formularen.',
    },
    {
        q: 'Wie schnell bin ich startklar?',
        a: 'Die Grundeinrichtung dauert nur wenige Minuten. Behandlungen anlegen, Formulare wählen, Buchungslink teilen – und du bist startklar.',
    },
    {
        q: 'Kann ich bestehende Kunden importieren?',
        a: 'Ja. Bestehende Kundendaten kannst du importieren, damit du nicht bei null anfangen musst.',
    },
    {
        q: 'Ist Treatflow DSGVO-konform?',
        a: 'Ja. Alle Daten werden verschlüsselt auf EU-Servern gespeichert. Treatflow erfüllt die Anforderungen der DSGVO.',
    },
    {
        q: 'Kann ich monatlich kündigen?',
        a: 'Ja. Treatflow ist monatlich kündbar – ohne langfristige Bindung.',
    },
];

export function GoogleStars({ size = 'md' }: { size?: 'sm' | 'md' }) {
    const iconSize = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';
    return (
        <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={`${iconSize} fill-current`} />
            ))}
        </div>
    );
}

export function TrustLine() {
    const items = [
        'Ohne Kreditkarte',
        'In wenigen Minuten startklar',
        'Persönliche Hilfe beim Einrichten',
        'DSGVO-konform',
    ];

    return (
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-sm text-gray-500">
            {items.map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                    {item}
                </span>
            ))}
        </div>
    );
}
