import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, CheckCircle,
    Clock, Star, Zap, TrendingUp, ClipboardCheck, Stethoscope, Syringe
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import { generateFaqSchema } from '@/lib/schema';
import { buildHreflangAlternates } from '@/app/i18n/seo';

const breadcrumbItems = [{ label: 'Branchen' }, { label: 'Ästhetische Medizin Software' }];

const faqs = [
    {
        question: 'Ist Treatflow für medizinisch-ästhetische Behandlungen geeignet?',
        answer: 'Ja, Treatflow unterstützt die Dokumentation von Botox, Fillern, Mesotherapie, PRP und weiteren ästhetischen Behandlungen. Die Formulare sind flexibel anpassbar.',
    },
    {
        question: 'Kann ich Chargennummern von Produkten dokumentieren?',
        answer: 'Ja, du kannst bei jeder Behandlung die verwendeten Produkte mit Chargennummern und Dosierungen dokumentieren. So ist die Rückverfolgbarkeit jederzeit gewährleistet.',
    },
    {
        question: 'Erfüllt die Software die Anforderungen der NiSV?',
        answer: 'Ja, Treatflow unterstützt die NiSV-konforme Dokumentation für nicht-invasive Anwendungen wie Laser, IPL und Ultraschall-Behandlungen.',
    },
    {
        question: 'Können Patienten Formulare vorab digital ausfüllen?',
        answer: 'Ja, du kannst deinen Patienten einen Link senden. Sie füllen Anamnesebogen und Einwilligungen bequem vorab aus und unterschreiben digital.',
    },
    {
        question: 'Ist Treatflow DSGVO-konform für Patientendaten?',
        answer: 'Absolut. Alle Daten werden verschlüsselt in EU-Rechenzentren gespeichert. Treatflow erfüllt alle Anforderungen der DSGVO für sensible Gesundheitsdaten.',
    },
    {
        question: 'Bietet Treatflow eine Online-Terminbuchung für Ästhetikkliniken?',
        answer: 'Treatflow bietet eine integrierte Online-Terminbuchung speziell für Ästhetikkliniken und ästhetische Praxen. Patienten buchen Beratungs- und Behandlungstermine rund um die Uhr über einen persönlichen Buchungslink, automatische Bestätigungen und Erinnerungen per E-Mail und SMS sind inklusive.',
    },
    {
        question: 'Sind digitale Einwilligungserklärungen in Treatflow integriert?',
        answer: 'Treatflow vereint Aufklärungs- und Einwilligungserklärungen direkt mit der Patientenakte. Patienten füllen Formulare vorab digital aus und unterschreiben rechtssicher per Touchscreen – lückenlos dokumentiert und jederzeit abrufbar.',
    },
    {
        question: 'Ist Treatflow als Software für Ästhetikkliniken in Deutschland, Österreich und der Schweiz geeignet?',
        answer: 'Treatflow ist eine in der DACH-Region entwickelte Praxissoftware für ästhetische Medizin mit Behandlungsdokumentation, digitalen Einwilligungen, Patientenverwaltung und Online-Buchung. Die Daten liegen DSGVO-konform auf EU-Servern, und die Software ist für Kliniken in Deutschland, Österreich und der Schweiz geeignet.',
    },
    {
        question: 'Wie dokumentiere ich Behandlungsverläufe in Treatflow?',
        answer: 'Treatflow bildet Behandlungsverläufe lückenlos ab: mit Behandlungsvorlagen, dokumentierten Parametern, Vorher-Nachher-Fotos und der kompletten Historie je Patient. So sind mehrstufige Behandlungen jederzeit nachvollziehbar.',
    },
    {
        question: 'Welche Möglichkeiten bietet Treatflow für digitale Anamnesebögen?',
        answer: 'Treatflow enthält digitale Anamnesebögen mit einem Formular-Marktplatz, individuell anpassbaren Vorlagen und einem KI-Formular-Generator. Patienten füllen sie vorab per Link aus und unterschreiben digital – papierfrei und DSGVO-konform.',
    },
    {
        question: 'Wie verwalte ich Mitarbeiter und werte Umsätze in Treatflow aus?',
        answer: 'Treatflow verwaltet Mitarbeiter mit eigenen Kalendern, Arbeitszeiten und Leistungen. In den Statistiken siehst du Umsätze und Termine – auch gefiltert pro Mitarbeiter – und behältst so die Leistung deines Teams im Blick.',
    },
    {
        question: 'Welche Zahlungsfunktionen bietet die Treatflow Kasse?',
        answer: 'Mit der Treatflow Kasse kassierst du bar, per Karte (SumUp oder Stripe Terminal), Gutschein oder Überweisung – TSE- und RKSV-konform. Belege werden automatisch erstellt und lassen sich als PDF drucken oder per E-Mail versenden.',
    },
    {
        question: 'Wie hilft Treatflow beim Marketing meiner Ästhetikpraxis?',
        answer: 'Treatflow automatisiert Terminerinnerungen, Geburtstagsgrüße und Nachsorge-Nachrichten per E-Mail und SMS. Rabattcodes und ein Empfehlungsprogramm helfen zusätzlich, neue Patienten zu gewinnen und bestehende zu binden.',
    },
    {
        question: 'Welche Auswertungen und Reports bietet Treatflow?',
        answer: 'Das Statistik-Dashboard von Treatflow wertet Umsatz, Termine, Kunden, Leistungen und Produktverkäufe aus – mit Filtern nach Zeitraum, Mitarbeiter und Leistung. So hast du alle Kennzahlen deiner Klinik auf einen Blick.',
    },
    {
        question: 'Welche KI-Funktionen bietet Treatflow?',
        answer: 'Treatflow setzt KI dort ein, wo sie Zeit spart: Behandlungen lassen sich per Sprache diktieren, die KI schreibt die Dokumentation mit und verbessert den Text. Auch Formulare erstellst du mit dem KI-Generator in Sekunden.',
    },
];

export const metadata = {
    title: {
        absolute: 'Software ästhetische Medizin: Doku, Einwilligung & Termine | Treatflow',
    },
    description: 'Software für Ästhetikkliniken: Behandlungsdokumentation, digitale Einwilligungen, Patientenakte & Online-Termine. NiSV- & DSGVO-konform, EU-Server. 14 Tage gratis.',
    keywords: [
        'Ästhetische Medizin Software',
        'Software ästhetische Praxis',
        'Botox Dokumentation Software',
        'Filler Dokumentation Software',
        'Ästhetische Klinik Software',
        'Praxissoftware ästhetische Medizin',
        'Schönheitsklinik Software',
        'Ästhetik Praxis Verwaltung',
        'Patientenverwaltung ästhetische Medizin',
        'Einwilligung ästhetische Behandlung',
        'Ästhetische Medizin Terminbuchung',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/aesthetische-medizin-software',
        ...buildHreflangAlternates('aesthetic-clinic-software'),
    },
    openGraph: {
        title: 'Software für ästhetische Medizin: Doku & Praxis',
        description: 'Behandlungsdokumentation, digitale Einwilligungen und Patientenverwaltung für ästhetische Praxen.',
        url: 'https://www.treatflow.io/aesthetische-medizin-software',
        images: [
            {
                url: '/images/og-aesthetik-software.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Software für ästhetische Medizin',
            },
        ],
    },
};

const painPoints = [
    {
        icon: FileText,
        title: 'Umfangreiche Dokumentationspflicht',
        description: 'Jede ästhetische Behandlung muss detailliert dokumentiert werden - Produkte, Dosierungen, Injektionspunkte und Aufklärung.',
    },
    {
        icon: Shield,
        title: 'Rechtssichere Einwilligungen',
        description: 'Patienten müssen vor invasiven Behandlungen umfassend aufgeklärt werden. Fehlende oder unvollständige Dokumentation kann rechtliche Folgen haben.',
    },
    {
        icon: Users,
        title: 'Komplexe Patientenhistorien',
        description: 'Vorbehandlungen, Medikamente, Allergien und Behandlungspläne - die Patientenakte in der Ästhetik ist komplex und muss jederzeit abrufbar sein.',
    },
    {
        icon: Clock,
        title: 'Nachsorge und Follow-ups',
        description: 'Nach Hyaluron, Botox oder anderen Behandlungen sind Nachsorge-Termine und Kontrollen wichtig. Die Koordination bindet wertvolle Zeit.',
    },
];

const solutions = [
    {
        icon: ClipboardCheck,
        title: 'Strukturierte Dokumentation',
        description: 'Dokumentiere jede Behandlung strukturiert - Produkte, Dosierungen, Injektionspunkte und Ergebnisse. Alles digital und jederzeit abrufbar.',
        gradient: 'from-teal-500 to-emerald-600',
        bg: 'from-teal-50 to-emerald-50',
    },
    {
        icon: FileText,
        title: 'Digitale Aufklärung & Einwilligung',
        description: 'Professionelle Aufklärungsbögen für ästhetische Eingriffe. Patienten unterschreiben digital - rechtssicher und lückenlos dokumentiert.',
        gradient: 'from-indigo-500 to-blue-600',
        bg: 'from-indigo-50 to-blue-50',
    },
    {
        icon: Users,
        title: 'Umfassende Patientenakte',
        description: 'Alle Behandlungen, Produkte, Fotos und Dokumente in einer digitalen Patientenakte. Vollständige Historie auf einen Blick.',
        gradient: 'from-violet-500 to-purple-600',
        bg: 'from-violet-50 to-purple-50',
    },
    {
        icon: Calendar,
        title: 'Online-Terminbuchung',
        description: 'Patienten buchen Beratungstermine und Behandlungen online. Du definierst Verfügbarkeiten, das System verhindert Doppelbuchungen.',
        gradient: 'from-orange-500 to-amber-600',
        bg: 'from-orange-50 to-amber-50',
    },
    {
        icon: Bell,
        title: 'Automatische Nachsorge',
        description: 'Sende automatisch Nachsorge-Hinweise, Kontrolltermin-Erinnerungen und Follow-up Nachrichten nach Behandlungen.',
        gradient: 'from-pink-500 to-rose-600',
        bg: 'from-pink-50 to-rose-50',
    },
    {
        icon: Syringe,
        title: 'Produkt- und Chargendokumentation',
        description: 'Dokumentiere verwendete Produkte mit Chargennummern. Lückenlose Rückverfolgbarkeit für maximale Sicherheit.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
];

const stats = [
    { value: '100%', label: 'digital dokumentiert', description: 'lückenlose Behandlungsdokumentation' },
    { value: '80%', label: 'weniger Verwaltung', description: 'durch digitale Formulare' },
    { value: '24/7', label: 'online buchbar', description: 'für Beratung und Behandlung' },
    { value: 'EU', label: 'Datenspeicherung', description: 'DSGVO-konform verschlüsselt' },
];

export default function AesthetischeMedizinSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="breadcrumb-schema-aesthetik"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
            />
            <Script
                id="softwareapplication-schema-aesthetik"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Treatflow – Software für ästhetische Medizin',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        url: 'https://www.treatflow.io/aesthetische-medizin-software',
                        description: 'Praxissoftware für ästhetische Medizin mit Behandlungsdokumentation, digitalen Einwilligungen, Patientenverwaltung und Online-Buchung. NiSV- und DSGVO-konform.',
                        offers: { '@type': 'Offer', price: '39', priceCurrency: 'EUR', description: '14 Tage kostenlose Testversion' },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.6',
                            reviewCount: '19',
                            bestRating: '5',
                        },
                    }),
                }}
            />
            <Navigation />
            <Breadcrumbs items={breadcrumbItems} />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Stethoscope className="h-4 w-4 mr-2" />
                            Software für ästhetische Praxen
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Software für{' '}
                            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                                ästhetische Medizin
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Behandlungsdokumentation, digitale Einwilligungen und Patientenverwaltung -
                            die moderne Praxislösung für ästhetische Kliniken und Praxen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center"
                            >
                                14 Tage kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-teal-600 hover:text-teal-600 transition-colors duration-200"
                            >
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/lifestyle/aesthetik-medizin-beratung.png"
                                alt="Ästhetische Medizin – professionelle Beratung mit digitaler Dokumentation"
                                fill
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Herausforderungen in ästhetischen Praxen
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Hohe Dokumentationsanforderungen, sensible Patientendaten und komplexe Behandlungspläne prägen den Alltag.
                        </p>
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
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            So unterstützt Treatflow deine Praxis
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Entwickelt für die speziellen Anforderungen der ästhetischen Medizin.
                        </p>
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
            <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-lg font-semibold text-teal-100 mb-1">{stat.label}</div>
                                <div className="text-sm text-teal-200">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature List Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Alle Funktionen für ästhetische Praxen
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Strukturierte Behandlungsdokumentation',
                            'Digitale Aufklärung mit Unterschrift',
                            'Produkt- und Chargendokumentation',
                            'Vorher-Nachher Fotodokumentation',
                            'Umfassende Patientenakte',
                            'Online-Terminbuchung',
                            'Automatische Terminerinnerungen per SMS',
                            'Follow-up Nachrichten nach Behandlungen',
                            'Kontrolltermin-Erinnerungen',
                            'NiSV-konforme Dokumentation',
                            'DSGVO-konform mit EU-Hosting',
                            'Mobil optimiert für Tablet und Desktop',
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Verwandte Seiten / Cluster-Verlinkung */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Weitere Funktionen für dein Studio
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Treatflow vereint Terminkalender, Kundenverwaltung, Formulare und Dokumentation in einer Plattform.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/kosmetikstudio-software" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Kosmetikstudio Software</span>
                            <span className="text-sm text-gray-600 block mb-2">All-in-One für Studios</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/terminkalender" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Terminsoftware</span>
                            <span className="text-sm text-gray-600 block mb-2">Online-Buchung & Kalender</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/kundenverwaltung" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Kundenkartei</span>
                            <span className="text-sm text-gray-600 block mb-2">Kundendaten & Historie</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/nisv-dokumentation-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">NiSV-Dokumentation</span>
                            <span className="text-sm text-gray-600 block mb-2">Rechtssicher dokumentieren</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/online-buchungen" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Online-Terminbuchung</span>
                            <span className="text-sm text-gray-600 block mb-2">Kunden buchen 24/7 online</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/sms-erinnerungen-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">SMS-Erinnerungen</span>
                            <span className="text-sm text-gray-600 block mb-2">Weniger No-Shows durch Erinnerungen</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/behandlungsdokumentation-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Behandlungsdokumentation</span>
                            <span className="text-sm text-gray-600 block mb-2">NiSV-konforme Dokumentation</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                        <Link href="/digitale-anamnese-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Anamnese</span>
                            <span className="text-sm text-gray-600 block mb-2">Formulare vorab per Link ausfüllen</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                        </Link>
                    </div>
                </div>
            </section>

            <SocialProofBar />

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für eine moderne Praxisverwaltung?
                    </h2>
                    <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und erlebe, wie digital und effizient deine Praxis arbeiten kann.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200"
                        >
                            Beratung buchen
                        </a>
                    </div>
                    <p className="text-sm text-teal-200 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <Script
                    id="faq-schema-aesthetik"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
                />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Häufige Fragen
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
