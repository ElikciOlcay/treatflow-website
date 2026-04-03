import type { Metadata } from 'next';
import Link from 'next/link';
import {
    Calendar, Users, ClipboardCheck, FileText, Link2, Bell, Shield,
    ArrowRight, CheckCircle, BarChart3, ShoppingBag
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Alle Funktionen der Kosmetikstudio Software',
    description: 'Entdecke alle Funktionen von Treatflow: Terminkalender, Online-Buchungen, digitale Kundenkartei, Formulare, Behandlungsdokumentation, NiSV-Dokumentation und automatische Erinnerungen.',
    keywords: [
        'Kosmetikstudio Software Funktionen',
        'Treatflow Funktionen',
        'Terminkalender Kosmetik',
        'Kundenkartei Software',
        'Online-Buchungssystem Kosmetik',
        'Behandlungsdokumentation',
        'NiSV Dokumentation',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/funktionen',
    },
    openGraph: {
        title: 'Alle Funktionen | Treatflow Kosmetikstudio Software',
        description: 'Entdecke alle Funktionen von Treatflow: Terminkalender, Online-Buchungen, Kundenkartei, Formulare, Dokumentation und mehr.',
        url: 'https://www.treatflow.io/funktionen',
    },
};

const kernfunktionen = [
    {
        href: '/terminkalender',
        icon: Calendar,
        title: 'Terminkalender',
        description: 'Übersichtliche Tages-, Wochen- und Monatsansicht. Drag & Drop, Mitarbeiterkalender und automatische Terminkonflikte erkennen.',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        border: 'border-indigo-200 hover:border-indigo-400',
        highlights: ['Tages-/Wochen-/Monatsansicht', 'Drag & Drop', 'Mitarbeiterkalender'],
    },
    {
        href: '/online-buchungen',
        icon: Link2,
        title: 'Online-Buchungen',
        description: 'Persönlicher Buchungslink für dein Studio. Kunden buchen rund um die Uhr - Bestätigungen und Erinnerungen automatisch.',
        color: 'text-rose-600',
        bg: 'bg-rose-50',
        border: 'border-rose-200 hover:border-rose-400',
        highlights: ['24/7 Buchungslink', 'Automatische Bestätigungen', 'Keine Doppelbuchungen'],
    },
    {
        href: '/kundenverwaltung',
        icon: Users,
        title: 'Kundenverwaltung',
        description: 'Digitale Kundenkartei mit Behandlungshistorie, Vorher-Nachher-Fotos, Allergien und Notizen. Alles an einem Ort.',
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        border: 'border-emerald-200 hover:border-emerald-400',
        highlights: ['Unbegrenzte Kunden', 'Fotos & Notizen', 'DSGVO-konform'],
    },
    {
        href: '/formulare',
        icon: ClipboardCheck,
        title: 'Formulare & Anamnese',
        description: 'Digitale Anamnesebögen und Einwilligungserklärungen. Kunden füllen sie vorab auf dem Smartphone aus - papierfrei und rechtssicher.',
        color: 'text-orange-600',
        bg: 'bg-orange-50',
        border: 'border-orange-200 hover:border-orange-400',
        highlights: ['Digitale Anamnese', 'Vorab per Link senden', 'Papierfrei'],
    },
    {
        href: '/behandlungsdokumentation',
        icon: FileText,
        title: 'Behandlungsdokumentation',
        description: 'Dokumentiere jede Behandlung digital: Fotos, verwendete Produkte, Notizen und Ergebnisse. Perfekt für Nachbehandlungen.',
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-200 hover:border-blue-400',
        highlights: ['Fotos & Produkte', 'Behandlungsverläufe', 'Lückenlose Doku'],
    },
    {
        href: '/nachrichtenautomatisierung',
        icon: Bell,
        title: 'Automatische Erinnerungen',
        description: 'SMS- und E-Mail-Erinnerungen vor jedem Termin. Reduziere No-Shows um bis zu 80% - ganz automatisch.',
        color: 'text-purple-600',
        bg: 'bg-purple-50',
        border: 'border-purple-200 hover:border-purple-400',
        highlights: ['SMS & E-Mail', 'Bis 80% weniger No-Shows', 'Konfigurierbare Zeiten'],
    },
    {
        href: '/nisv-dokumentation',
        icon: Shield,
        title: 'NiSV-Dokumentation',
        description: 'NiSV-konforme Beratungsprotokolle, Behandlungsdokumentation und Einwilligungserklärungen - alles digital und rechtssicher.',
        color: 'text-teal-600',
        bg: 'bg-teal-50',
        border: 'border-teal-200 hover:border-teal-400',
        highlights: ['NiSV-konform', 'Beratungsprotokolle', 'Rechtssicher'],
    },
    {
        href: '/shop',
        icon: ShoppingBag,
        title: 'Produktverkauf & Lager',
        description: 'Verkaufe Pflegeprodukte direkt an deine Kunden. Lagerbestand verwalten, Verkäufe dokumentieren und Zusatzumsatz steigern.',
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-200 hover:border-amber-400',
        highlights: ['Produktverkauf', 'Lagerverwaltung', 'Umsatz steigern'],
    },
];

const vorteile = [
    'All-in-One: Alle Funktionen in einer Plattform',
    'DSGVO-konform mit EU-Servern',
    'Keine versteckten Kosten oder Provisionen',
    '14 Tage kostenlos testen, keine Kreditkarte',
    'Kostenloser Support und Onboarding',
    'Made in Austria',
];

export default function FunktionenPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Funktionen' },
                ])) }}
            />

            {/* Hero */}
            <section className="pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <Breadcrumbs items={[{ label: 'Funktionen' }]} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Alle <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Funktionen</span> auf einen Blick
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Treatflow vereint Terminkalender, Online-Buchungen, Kundenkartei, Formulare und Dokumentation in einer Plattform - speziell für Kosmetikstudios entwickelt.
                        </p>
                    </div>
                </div>
            </section>

            {/* Kernfunktionen Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            8 Kernfunktionen für dein Studio
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Jede Funktion ist auf die Bedürfnisse von Kosmetikstudios zugeschnitten.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {kernfunktionen.map((feature) => (
                            <Link
                                key={feature.href}
                                href={feature.href}
                                className={`group block border rounded-2xl p-8 transition-all duration-200 hover:shadow-lg ${feature.border}`}
                            >
                                <div className={`w-14 h-14 ${feature.bg} rounded-xl flex items-center justify-center mb-5`}>
                                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 mb-5 leading-relaxed">
                                    {feature.description}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {feature.highlights.map((h) => (
                                        <li key={h} className="flex items-center text-sm text-gray-700">
                                            <CheckCircle className={`h-4 w-4 ${feature.color} mr-2 flex-shrink-0`} />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                                <span className="inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                                    Mehr erfahren
                                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vorteile */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
                            Warum Treatflow?
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4 text-left">
                            {vorteile.map((v) => (
                                <div key={v} className="flex items-start gap-3 p-4">
                                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </div>
    );
}
