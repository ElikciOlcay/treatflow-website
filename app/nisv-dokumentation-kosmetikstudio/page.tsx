import { Shield, FileText, ArrowRight, CheckCircle, Clock, Star, Users, Camera, ClipboardCheck, AlertTriangle, Zap, BookOpen, Scale, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'NiSV-Dokumentation Kosmetikstudio - Rechtssicher dokumentieren | Treatflow',
    description: 'NiSV-konforme Behandlungsdokumentation für Kosmetikstudios. Digitale Dokumentation für Laser, IPL und nichtionisierende Strahlung. Rechtssicher und DSGVO-konform. Jetzt testen.',
    keywords: [
        'NiSV Dokumentation Kosmetik',
        'Behandlungsdokumentation Kosmetik',
        'Dokumentation Kosmetikstudio',
        'NiSV Kosmetik Dokumentation',
        'NiSV konforme Dokumentation',
        'Behandlungsdokumentation digital',
        'NiSV Pflichten Kosmetik',
        'Dokumentationspflicht NiSV',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/nisv-dokumentation-kosmetikstudio',
    },
    openGraph: {
        title: 'NiSV-Dokumentation Kosmetikstudio - Rechtssicher dokumentieren | Treatflow',
        description: 'NiSV-konforme Behandlungsdokumentation für Kosmetikstudios. Digitale Dokumentation für Laser, IPL und nichtionisierende Strahlung.',
        url: 'https://www.treatflow.io/nisv-dokumentation-kosmetikstudio',
        images: [
            {
                url: '/images/branchen/hero-kosmetikstudio.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow NiSV-Dokumentation für Kosmetikstudios',
            },
        ],
    },
};

const nisvInfoCards = [
    {
        icon: Scale,
        title: 'Gesetzliche Pflicht',
        description: 'Seit 2021 für alle NiSV-relevanten Geräte',
    },
    {
        icon: FileText,
        title: 'Dokumentation jeder Behandlung',
        description: 'Parameter, Ergebnisse, Hautreaktion',
    },
    {
        icon: AlertTriangle,
        title: 'Bußgelder bei Verstoß',
        description: 'Bis zu 50.000 EUR Strafe möglich',
    },
    {
        icon: Clock,
        title: 'Aufbewahrungspflicht',
        description: 'Dokumentation muss jahrelang aufbewahrt werden',
    },
];

const painPoints = [
    {
        icon: FileText,
        title: 'Unvollständige Dokumentation',
        description: 'Auf Papier werden Felder vergessen, Angaben fehlen oder sind unleserlich. Bei einer Prüfung kann das teuer werden.',
    },
    {
        icon: Clock,
        title: 'Zeitaufwand pro Behandlung',
        description: 'Jede Behandlung einzeln handschriftlich dokumentieren kostet dich 10-15 Minuten. Bei mehreren Kunden am Tag summiert sich das.',
    },
    {
        icon: AlertTriangle,
        title: 'Keine Nachweisbarkeit',
        description: 'Papier kann verloren gehen, beschädigt werden oder ist nicht auffindbar. Im Streitfall fehlt der Nachweis.',
    },
    {
        icon: Shield,
        title: 'DSGVO-Probleme',
        description: 'Medizinische Dokumentation auf Papier sicher aufbewahren und nach Frist löschen - das ist in der Praxis kaum umzusetzen.',
    },
];

const solutions = [
    {
        icon: ClipboardCheck,
        title: 'Geführte Dokumentation',
        description: 'Treatflow führt dich Schritt für Schritt durch die Dokumentation. Pflichtfelder stellen sicher, dass keine Angabe fehlt.',
        gradient: 'from-indigo-500 to-purple-600',
        bg: 'from-indigo-50 to-purple-50',
    },
    {
        icon: Camera,
        title: 'Foto-Dokumentation',
        description: 'Behandlungszonen und Hautzustände direkt fotografieren und der Dokumentation hinzufügen. Vorher-Nachher-Vergleiche inklusive.',
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-50',
    },
    {
        icon: Shield,
        title: 'NiSV-konforme Vorlagen',
        description: 'Fertige Dokumentationsvorlagen für Laser, IPL, Radiofrequenz und Ultraschall. Alle relevanten Parameter sind vorausgefüllt.',
        gradient: 'from-orange-500 to-red-600',
        bg: 'from-orange-50 to-red-50',
    },
    {
        icon: Users,
        title: 'Automatische Zuordnung',
        description: 'Jede Dokumentation wird automatisch dem Kundenprofil zugeordnet. Du findest alle Behandlungen chronologisch sortiert.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
    {
        icon: BookOpen,
        title: 'Revisionssichere Archivierung',
        description: 'Alle Dokumentationen werden unveränderbar gespeichert und sind jederzeit abrufbar. Perfekt für Audits und Prüfungen.',
        gradient: 'from-pink-500 to-rose-600',
        bg: 'from-pink-50 to-rose-50',
    },
    {
        icon: Zap,
        title: 'Zeitsparend dokumentieren',
        description: 'Was vorher 15 Minuten dauerte, erledigst du in 2-3 Minuten. Vorausgefüllte Felder und Vorlagen beschleunigen die Dokumentation.',
        gradient: 'from-violet-500 to-purple-600',
        bg: 'from-violet-50 to-purple-50',
    },
];

const stats = [
    { value: 'NiSV', label: 'konform', description: 'nach aktueller Verordnung' },
    { value: '80%', label: 'schneller dokumentieren', description: 'im Vergleich zu Papier' },
    { value: '100%', label: 'revisionssicher', description: 'unveränderbare Archivierung' },
    { value: 'DSGVO', label: 'konform', description: 'EU-Datenspeicherung' },
];

const checklistLeft = [
    'Gerätetyp und Modell',
    'Behandlungsparameter (Energie, Wellenlänge, Frequenz)',
    'Behandlungszone und -fläche',
    'Hautzustand vor der Behandlung',
    'Aufklärung und Einwilligung',
];

const checklistRight = [
    'Durchgeführte Maßnahmen',
    'Hautreaktion nach der Behandlung',
    'Verwendete Kühlungsmethoden',
    'Nachsorgeempfehlungen',
    'Name des Behandlers und Datum',
];

const clusterLinks = [
    {
        href: '/kosmetikstudio-software',
        title: 'Kosmetikstudio Software',
        description: 'Die All-in-One Lösung für dein Studio',
    },
    {
        href: '/terminsoftware-kosmetikstudio',
        title: 'Terminsoftware',
        description: 'Online-Buchungen und Terminkalender',
    },
    {
        href: '/kundenkartei-kosmetikstudio',
        title: 'Digitale Kundenkartei',
        description: 'Alle Kundendaten immer griffbereit',
    },
    {
        href: '/anamnesebogen-kosmetikstudio',
        title: 'Digitale Anamnesebögen',
        description: 'Formulare, Einwilligungen und Anamnese digital',
    },
];

const features = [
    'NiSV-konforme Vorlagen',
    'Geführte Dokumentation mit Pflichtfeldern',
    'Foto-Dokumentation mit Vorher-Nachher',
    'Behandlungsparameter erfassen',
    'Automatische Zuordnung zum Kundenprofil',
    'Revisionssichere Archivierung',
    'Behandlungshistorie pro Kundin',
    'PDF-Export für Prüfungen',
    'Individuelle Vorlagen erstellen',
    'Mehrere Behandler dokumentieren',
    'DSGVO-konforme Speicherung',
    'Aufbewahrungsfristen automatisch',
];

const faqs = [
    {
        q: 'Welche Geräte fallen unter die NiSV?',
        a: 'Alle Geräte, die nichtionisierende Strahlung nutzen: Laser, IPL, Ultraschall, Radiofrequenz, hochfrequente elektromagnetische Felder. Wenn du solche Geräte einsetzt, bist du zur Dokumentation verpflichtet.',
    },
    {
        q: 'Was passiert, wenn ich nicht NiSV-konform dokumentiere?',
        a: 'Bei Verstößen gegen die NiSV drohen Bußgelder bis zu 50.000 EUR. Zudem haftest du bei Behandlungsschäden ohne lückenlose Dokumentation persönlich.',
    },
    {
        q: 'Wie lange muss die Dokumentation aufbewahrt werden?',
        a: 'Die NiSV schreibt keine explizite Frist vor, aber analog zur medizinischen Dokumentation empfehlen Experten eine Aufbewahrung von mindestens 10 Jahren.',
    },
    {
        q: 'Sind die Treatflow-Vorlagen wirklich NiSV-konform?',
        a: 'Ja, unsere Vorlagen wurden anhand der NiSV-Anforderungen erstellt und enthalten alle Pflichtfelder für die verschiedenen Behandlungsarten.',
    },
    {
        q: 'Kann ich auch eigene Dokumentationsvorlagen erstellen?',
        a: 'Ja, du kannst eigene Vorlagen mit individuellen Feldern erstellen und für verschiedene Geräte und Behandlungen nutzen.',
    },
    {
        q: 'Was kostet die NiSV-Dokumentation?',
        a: 'Die NiSV-konforme Behandlungsdokumentation ist in jedem Treatflow-Plan enthalten. Du kannst 14 Tage kostenlos testen - ab 39 EUR/Monat.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
        },
    })),
};

const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Treatflow',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'NiSV-konforme Behandlungsdokumentation für Kosmetikstudios. Digitale Dokumentation für Laser, IPL und nichtionisierende Strahlung.',
    offers: {
        '@type': 'Offer',
        price: '39',
        priceCurrency: 'EUR',
        priceValidUntil: '2026-12-31',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '120',
    },
};

export default function NisvDokumentationKosmetikstudioPage() {
    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Shield className="h-4 w-4 mr-2" />
                            NiSV-Dokumentation für Kosmetikstudios
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            NiSV-konforme Dokumentation für dein{' '}
                            <span className="text-indigo-600">Kosmetikstudio</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Die NiSV verpflichtet dich zur lückenlosen Dokumentation jeder Behandlung mit nichtionisierender Strahlung. Treatflow macht das einfach: digital, rechtssicher und zeitsparend.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
                            >
                                14 Tage kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200"
                            >
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <img
                            src="/images/branchen/hero-kosmetikstudio.jpg"
                            alt="NiSV-konforme Dokumentation im Kosmetikstudio"
                            className="w-full rounded-2xl shadow-xl object-cover aspect-[21/9]"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* NiSV-Erklärung Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Was ist die NiSV und warum betrifft sie dein Studio?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Die Verordnung zum Schutz vor schädlichen Wirkungen nichtionisierender Strahlung bei der Anwendung am Menschen (NiSV) ist seit 2021 in Kraft. Sie verpflichtet alle Studios, die mit Laser, IPL, Ultraschall, Radiofrequenz oder hochfrequenten elektromagnetischen Feldern arbeiten, zur lückenlosen Dokumentation jeder Behandlung.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {nisvInfoCards.map((card, index) => (
                            <div key={index} className="p-6 rounded-2xl border border-gray-200 bg-gray-50 text-center">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <card.icon className="h-6 w-6 text-indigo-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
                                <p className="text-gray-600 text-sm">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Warum NiSV-Dokumentation auf Papier riskant ist
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {painPoints.map((point, index) => (
                            <div key={index} className="flex gap-5 p-6 rounded-2xl bg-red-50/50 border border-red-100">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                    <point.icon className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                                    <p className="text-gray-600">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            NiSV-Dokumentation mit Treatflow - einfach und sicher
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <div key={index} className={`bg-gradient-to-br ${solution.bg} p-8 rounded-2xl`}>
                                <div className={`w-12 h-12 bg-gradient-to-r ${solution.gradient} rounded-lg flex items-center justify-center mb-6`}>
                                    <solution.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-indigo-100 mb-1">{stat.label}</div>
                                <div className="text-sm text-indigo-200">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Was muss dokumentiert werden Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Was muss laut NiSV dokumentiert werden?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {checklistLeft.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                                    <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {checklistRight.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                                    <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Links Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Treatflow - mehr als nur NiSV-Dokumentation
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {clusterLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all duration-200"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200 flex items-center">
                                    {link.title}
                                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                </h3>
                                <p className="text-gray-600 text-sm">{link.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Checklist */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Alle Dokumentations-Funktionen im Überblick
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                                <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-indigo-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Dokumentiere NiSV-konform - ab heute digital
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und erlebe, wie einfach NiSV-konforme Dokumentation sein kann.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
                        >
                            Beratung buchen
                        </a>
                    </div>
                    <p className="text-sm text-indigo-200 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Häufige Fragen zur NiSV-Dokumentation
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
