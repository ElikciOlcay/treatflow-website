import { Metadata } from 'next';
import Image from 'next/image';
import {
    FileText, Users, ClipboardCheck, PenLine, FolderLock, Calendar,
    MapPin, ShieldCheck, CheckCircle, ArrowRight, Clock, Search, Files, Stethoscope,
} from 'lucide-react';
import DemoAnfrageForm from './DemoAnfrageForm';

export const metadata: Metadata = {
    title: 'Dokumentationssoftware für Heilmasseure in Österreich | Treatflow',
    description: 'Treatflow unterstützt Heilmasseure in Österreich bei digitaler Behandlungsdokumentation, ärztlicher Anordnung, Verlaufseinträgen und Praxisorganisation.',
    keywords: [
        'Dokumentationssoftware Heilmasseur',
        'Heilmasseur Dokumentation Österreich',
        'Software für Heilmasseure',
        'Behandlungsdokumentation Heilmassage',
        'digitale Patientenkartei Heilmasseur',
        'Heilmassage Software Österreich',
        'Heilmasseur Salzburg Software',
    ],
    robots: 'index, follow',
    alternates: {
        canonical: 'https://www.treatflow.io/landing/heilmasseur-software-oesterreich',
    },
    openGraph: {
        title: 'Digitale Dokumentation für Heilmasseure in Österreich',
        description: 'Behandlungen, ärztliche Anordnungen und Verlaufsnotizen sauber dokumentieren – entwickelt in Salzburg für den Praxisalltag.',
        url: 'https://www.treatflow.io/landing/heilmasseur-software-oesterreich',
        siteName: 'Treatflow',
        locale: 'de_AT',
        type: 'website',
    },
};

const problemPoints = [
    'Ärztliche Anordnungen liegen separat ab',
    'Verlaufseinträge sind schwer auffindbar',
    'Unterschriften und Nachweise müssen sauber gespeichert werden',
    'Papierordner wachsen und sind unübersichtlich',
];

const solutionCards = [
    {
        icon: FileText,
        title: 'Ärztliche Anordnung hinterlegen',
        description: 'Upload oder Erfassung der ärztlichen Anordnung direkt beim Kunden/Patienten.',
    },
    {
        icon: ClipboardCheck,
        title: 'Behandlungsverlauf dokumentieren',
        description: 'Pro Termin festhalten: Datum, Dauer, behandelte Region, angewandte Technik, Reaktion und Notizen.',
    },
    {
        icon: Users,
        title: 'Digitale Kundenkartei',
        description: 'Stammdaten, Beschwerden, Verlauf und Dokumente übersichtlich speichern.',
    },
    {
        icon: PenLine,
        title: 'Digitale Signatur',
        description: 'Behandlungen oder Formulare direkt digital bestätigen lassen.',
    },
    {
        icon: FolderLock,
        title: 'Sichere Ablage',
        description: 'Dokumente strukturiert speichern und schnell wiederfinden.',
    },
    {
        icon: Calendar,
        title: 'Praxisorganisation',
        description: 'Optional mit Terminverwaltung, Online-Buchung und Erinnerungen kombinieren.',
    },
];

const featureList = [
    'Kunden-/Patientenkartei',
    'Anamnese und Beschwerden',
    'Behandlungsdokumentation pro Termin',
    'Ärztliche Anordnung als Datei oder Eintrag',
    'Foto- und Dokumentenablage',
    'Digitale Unterschrift',
    'Exportmöglichkeiten',
    'Terminverwaltung optional',
    'Automatische Erinnerungen optional',
];

const faqs = [
    {
        q: 'Ist Treatflow speziell für Heilmasseure geeignet?',
        a: 'Ja, wir erweitern Treatflow gezielt um Vorlagen für Heilmasseure in Österreich.',
    },
    {
        q: 'Kann ich ärztliche Anordnungen speichern?',
        a: 'Ja, Dokumente können beim Kunden/Patienten hinterlegt werden.',
    },
    {
        q: 'Kann ich jede Behandlung dokumentieren?',
        a: 'Ja, pro Termin können Verlauf, Tätigkeit, Dauer, Region und Notizen erfasst werden.',
    },
    {
        q: 'Gibt es digitale Unterschriften?',
        a: 'Ja, Formulare und Bestätigungen können digital unterschrieben werden.',
    },
    {
        q: 'Kommt ihr auch vor Ort?',
        a: 'Im Raum Salzburg und Umgebung bieten wir aktuell kostenlose Vor-Ort-Demos für ausgewählte Praxen an.',
    },
    {
        q: 'Was kostet Treatflow?',
        a: 'Die Preise starten je nach Funktionsumfang. Für Pilotpraxen kann ein individuelles Einführungsangebot angeboten werden.',
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

const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Treatflow – Dokumentationssoftware für Heilmasseure',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://www.treatflow.io/landing/heilmasseur-software-oesterreich',
    description: 'Digitale Behandlungsdokumentation, Kunden-/Patientenkartei und Praxisorganisation für Heilmasseure in Österreich.',
    author: {
        '@type': 'Organization',
        name: 'Treatflow',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Bahnhofstrasse 17',
            postalCode: '5500',
            addressLocality: 'Bischofshofen',
            addressCountry: 'AT',
        },
    },
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
        description: '14 Tage kostenlose Testversion',
    },
};

export default function HeilmasseurSoftwareOesterreichPage() {
    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
            />

            {/* Minimale Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Image
                            src="/images/logos/treatflow-logo.svg"
                            alt="Treatflow"
                            width={120}
                            height={32}
                            className="h-8 w-auto"
                            priority
                        />
                        <a
                            id="cta-nav-demo"
                            href="#demo-anfrage"
                            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
                        >
                            Demo vereinbaren
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-sky-50 via-white to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <MapPin className="h-4 w-4 mr-2" />
                        Software aus Salzburg · Für Heilmasseure in Österreich · 14 Tage testbar
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        Digitale Dokumentation für{' '}
                        <span className="text-blue-700">Heilmasseure</span> in Österreich
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        Treatflow hilft Ihnen, Behandlungen, ärztliche Anordnungen und Verlaufsnotizen
                        sauber und übersichtlich zu dokumentieren – entwickelt in Salzburg für den Praxisalltag.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            id="cta-hero-demo"
                            href="#demo-anfrage"
                            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center justify-center"
                        >
                            Kostenlose Vor-Ort-Demo vereinbaren
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            id="cta-hero-mehr"
                            href="#loesung"
                            className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-700 hover:text-blue-700 transition-colors duration-200"
                        >
                            Mehr erfahren
                        </a>
                    </div>
                    <p className="text-sm text-slate-500 mt-4">Unverbindlich. Ohne Kreditkarte.</p>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Dokumentation kostet Zeit – sollte aber nicht kompliziert sein
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Viele Heilmasseure arbeiten noch mit Papier, Word-Dokumenten oder verstreuten Notizen.
                            Das kostet Zeit, erschwert die Übersicht und macht es mühsam, Behandlungsverläufe
                            später nachzuvollziehen.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
                        {problemPoints.map((point, index) => (
                            <div key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="flex-shrink-0 w-10 h-10 bg-slate-200 rounded-xl flex items-center justify-center">
                                    {index === 0 && <Files className="h-5 w-5 text-slate-600" />}
                                    {index === 1 && <Search className="h-5 w-5 text-slate-600" />}
                                    {index === 2 && <PenLine className="h-5 w-5 text-slate-600" />}
                                    {index === 3 && <Clock className="h-5 w-5 text-slate-600" />}
                                </div>
                                <p className="text-slate-700 font-medium pt-2">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section id="loesung" className="py-20 bg-sky-50/60 scroll-mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Alles Wichtige an einem Ort
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {solutionCards.map((card, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-blue-100 shadow-sm">
                                <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-5">
                                    <card.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <MapPin className="h-4 w-4 mr-2" />
                        Salzburg · Pongau · Pinzgau · Österreich
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                        Aus Salzburg – für Praxen in Österreich
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        Wir kennen die Anforderungen kleiner Praxen und entwickeln Treatflow gemeinsam
                        mit Anwendern aus der Praxis. Aktuell suchen wir Heilmasseure aus Salzburg und
                        Umgebung, denen wir die Lösung kostenlos vor Ort zeigen und Feedback einholen dürfen.
                    </p>
                    <a
                        id="cta-local-demo"
                        href="#demo-anfrage"
                        className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200"
                    >
                        Ich möchte eine kurze Demo
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </section>

            {/* Feature Detail Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Funktionen für Ihren Praxisalltag
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {featureList.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100">
                                <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0" />
                                <span className="text-slate-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance Hinweis */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-sky-50 border border-sky-100 rounded-2xl p-8 sm:p-10">
                        <div className="flex items-start gap-5">
                            <div className="flex-shrink-0 w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center">
                                <ShieldCheck className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                                    Für nachvollziehbare Dokumentation im Praxisalltag
                                </h2>
                                <p className="text-slate-600 leading-relaxed">
                                    Treatflow unterstützt Heilmasseure dabei, relevante Informationen wie
                                    ärztliche Anordnung, Zustand, Behandlungsverlauf sowie Art und Umfang
                                    der Tätigkeit strukturiert zu erfassen. Die Software ersetzt keine
                                    individuelle Rechtsberatung, hilft aber dabei, Dokumentation einheitlich
                                    und übersichtlich umzusetzen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Demo Offer + Form */}
            <section id="demo-anfrage" className="py-20 bg-gradient-to-b from-sky-50 to-white scroll-mt-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="lg:pt-6">
                            <div className="inline-flex items-center bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Stethoscope className="h-4 w-4 mr-2" />
                                Kostenlos und unverbindlich
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                                Kostenlose 20-Minuten-Demo vor Ort
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-8">
                                Wir zeigen Ihnen Treatflow direkt in Ihrer Praxis oder online.
                                Ohne Verpflichtung. Sie sehen, wie eine digitale Behandlungsdokumentation
                                aussehen kann und ob sie zu Ihrem Alltag passt.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0" />
                                    Persönlich vor Ort im Raum Salzburg oder online
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0" />
                                    20 Minuten, auf Ihren Praxisalltag zugeschnitten
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle className="h-5 w-5 text-blue-700 flex-shrink-0" />
                                    Im Anschluss 14 Tage kostenlos testbar
                                </li>
                            </ul>
                        </div>
                        <DemoAnfrageForm />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Häufige Fragen
                        </h2>
                    </div>
                    <div className="space-y-5">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-slate-200 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Bereit für weniger Papier und bessere Übersicht?
                    </h2>
                    <a
                        id="cta-final-demo"
                        href="#demo-anfrage"
                        className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-sky-50 transition-colors duration-200"
                    >
                        Kostenlose Demo vereinbaren
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                    <p className="text-sm text-slate-400 mt-6">
                        Software aus Salzburg · Für Heilmasseure in Österreich · 14 Tage testbar
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-slate-950 text-slate-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <Image
                            src="/images/logos/treatflow-logo.png"
                            alt="Treatflow Logo"
                            width={120}
                            height={32}
                            className="h-7 w-auto"
                        />
                        <div className="flex items-center gap-6 text-sm">
                            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
                            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
                        </div>
                        <p className="text-xs">&copy; {new Date().getFullYear()} Treatflow</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
