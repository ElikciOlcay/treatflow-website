import { CheckCircle, X, Euro, TrendingDown, ArrowRight, ChevronDown } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import PricingSection from '../components/PricingSection';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';

export const metadata = {
    title: 'Preise: Kosmetikstudio Software ab 39€/Monat',
    description: 'Transparente Preise für Treatflow: Basic ab 39€/Monat, Booking ab 59€/Monat. 14 Tage kostenlos testen, keine Kreditkarte, keine versteckten Kosten. Jetzt Preise vergleichen.',
    keywords: ['Kosmetikstudio Software Preise', 'Treatflow Preise', 'Kosmetikstudio Software Kosten', 'Beauty Software Preis', 'Studio Software günstig'],
    alternates: {
        canonical: 'https://www.treatflow.io/preise',
    },
    openGraph: {
        title: 'Preise: Kosmetikstudio Software ab 39€/Monat | Treatflow',
        description: 'Transparente Preise für Treatflow: Basic ab 39€/Monat, Booking ab 59€/Monat. 14 Tage kostenlos testen, keine Kreditkarte, keine versteckten Kosten.',
        url: 'https://www.treatflow.io/preise',
    },
};

const faqData = [
    {
        question: 'Was kostet Treatflow?',
        answer: 'Treatflow gibt es in zwei Plänen: Basic ab 39€/Monat für Kundenverwaltung, Formulare und Dokumentation. Booking ab 59€/Monat mit zusätzlichem Terminkalender, Online-Buchungen und automatischen Erinnerungen. Beide Pläne können 14 Tage kostenlos getestet werden.',
    },
    {
        question: 'Gibt es versteckte Kosten?',
        answer: 'Nein. Treatflow arbeitet mit transparenten Festpreisen ohne Provisionen, Setup-Gebühren oder versteckte Zusatzkosten. Was du siehst, ist was du zahlst.',
    },
    {
        question: 'Kann ich jederzeit kündigen?',
        answer: 'Ja. Bei monatlicher Zahlung kannst du jederzeit zum Ende des Abrechnungszeitraums kündigen. Es gibt keine Mindestvertragslaufzeit.',
    },
    {
        question: 'Gibt es kostenlose Kosmetikstudio Software?',
        answer: 'Einige Anbieter wie Fresha bieten kostenlose Basisversionen, verdienen aber an Payment-Gebühren und Premium-Features. Treatflow bietet transparente Festpreise ohne versteckte Kosten - ab 39€/Monat mit vollem Funktionsumfang.',
    },
    {
        question: 'Lohnt sich der Booking-Plan?',
        answer: 'Wenn du Online-Buchungen, automatische Terminerinnerungen per SMS und einen digitalen Terminkalender benötigst, ja. Studios mit dem Booking-Plan berichten von bis zu 80% weniger No-Shows und deutlich weniger Telefonaufwand.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Treatflow',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: [
        {
            '@type': 'Offer',
            name: 'Basic',
            price: '39',
            priceCurrency: 'EUR',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock',
        },
        {
            '@type': 'Offer',
            name: 'Booking',
            price: '59',
            priceCurrency: 'EUR',
            priceValidUntil: '2026-12-31',
            availability: 'https://schema.org/InStock',
        },
    ],
};

const featureComparison = [
    { feature: 'Kundenverwaltung', basic: true, booking: true },
    { feature: 'Formulare & Anamnese', basic: true, booking: true },
    { feature: 'Behandlungsdokumentation', basic: true, booking: true },
    { feature: 'NiSV-Dokumentation', basic: true, booking: true },
    { feature: 'Vorlagen für Anamnesen', basic: true, booking: true },
    { feature: 'E-Mail Support', basic: true, booking: true },
    { feature: 'Terminkalender', basic: false, booking: true },
    { feature: 'Online-Buchungssystem', basic: false, booking: true },
    { feature: 'SMS & E-Mail Automatisierung', basic: false, booking: true },
    { feature: 'Priority Support', basic: false, booking: true },
    { feature: 'Erweiterte Einstellungen', basic: false, booking: true },
];

export default function PreisePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateBreadcrumbSchema([{ label: 'Preise' }])),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            {/* Hero Section */}
            <section className="pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <Breadcrumbs items={[{ label: 'Preise' }]} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Euro className="h-4 w-4 mr-2" />
                            Faire Preise
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Transparente Preise -
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> keine versteckten Kosten</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Wähle das Paket, das zu deinem Studio passt. Beide Pläne inklusive 14 Tage kostenloser Testphase.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <PricingSection />

            {/* Feature Comparison Table */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Was ist enthalten?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Vergleiche die beiden Pläne im Detail und finde den passenden für dein Studio.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="grid grid-cols-3 bg-gray-900 text-white">
                            <div className="p-4 sm:p-6 font-semibold text-sm sm:text-base">Feature</div>
                            <div className="p-4 sm:p-6 text-center font-semibold text-sm sm:text-base">Basic (39€)</div>
                            <div className="p-4 sm:p-6 text-center font-semibold text-sm sm:text-base bg-indigo-600">Booking (59€)</div>
                        </div>
                        {featureComparison.map((row, index) => (
                            <div
                                key={row.feature}
                                className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100 last:border-b-0`}
                            >
                                <div className="p-4 sm:p-5 text-sm sm:text-base text-gray-700 font-medium">
                                    {row.feature}
                                </div>
                                <div className="p-4 sm:p-5 flex justify-center items-center">
                                    {row.basic ? (
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                    ) : (
                                        <X className="h-5 w-5 text-gray-300" />
                                    )}
                                </div>
                                <div className="p-4 sm:p-5 flex justify-center items-center">
                                    {row.booking ? (
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                    ) : (
                                        <X className="h-5 w-5 text-gray-300" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors text-center flex items-center justify-center"
                        >
                            14 Tage kostenlos testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Savings Comparison */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <TrendingDown className="h-4 w-4 mr-2" />
                            Spare bares Geld
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Spare mit Treatflow
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Studios sparen durchschnittlich 200€+ pro Monat im Vergleich zu provisionsbasierten Modellen wie Treatwell.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Treatwell */}
                        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
                            <div className="text-center">
                                <p className="text-sm font-semibold text-red-600 mb-2 uppercase tracking-wide">Provisionsbasiert (z.B. Treatwell)</p>
                                <div className="text-5xl font-bold text-red-600 mb-4">875€</div>
                                <p className="text-sm text-gray-600 mb-6">pro Monat bei 50 Neukunden</p>
                                <div className="bg-white rounded-xl p-4 text-left space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">50 Neukunden/Monat</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">x 50€ Durchschnittsumsatz</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">x 35% Provision</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-2 flex justify-between text-sm font-bold">
                                        <span className="text-red-600">= 875€ Kosten</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Treatflow */}
                        <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8 relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                                Spare 816€/Monat
                            </div>
                            <div className="text-center">
                                <p className="text-sm font-semibold text-green-700 mb-2 uppercase tracking-wide">Treatflow Festpreis</p>
                                <div className="text-5xl font-bold text-green-600 mb-4">59€</div>
                                <p className="text-sm text-gray-600 mb-6">pro Monat - unabhängig von Buchungen</p>
                                <div className="bg-white rounded-xl p-4 text-left space-y-2">
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                        <span className="text-gray-600">Keine Provision pro Buchung</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                        <span className="text-gray-600">Keine Setup-Gebühren</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                        <span className="text-gray-600">Fixkosten, egal wie viele Kunden</span>
                                    </div>
                                    <div className="flex items-center text-sm">
                                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                        <span className="text-gray-600">100% deines Umsatzes bleibt bei dir</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Häufige Fragen zu Preisen
                        </h2>
                        <p className="text-lg text-gray-600">
                            Alles, was du über Treatflow-Preise wissen musst.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <details
                                key={index}
                                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                            >
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                        {item.question}
                                    </h3>
                                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                    {item.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </div>
    );
}
