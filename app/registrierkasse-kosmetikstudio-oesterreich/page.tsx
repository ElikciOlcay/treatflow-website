import {
    ShieldCheck, Receipt, FileText, ArrowRight, Lock, RefreshCcw, Mail, MapPin,
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Script from 'next/script';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import AiAnswerCapsule from '../components/AiAnswerCapsule';

export const metadata = {
    title: 'Registrierkasse Kosmetikstudio Österreich – RKSV | Treatflow',
    description: 'RKSV-konforme Registrierkasse für Kosmetikstudios in Österreich: Belege, DEP7-Export, FinanzOnline-ready. Software aus Salzburg. Ab 39 €/Monat, 14 Tage testen.',
    keywords: [
        'Registrierkasse Kosmetikstudio Österreich', 'RKSV Kasse Österreich',
        'Registrierkassenpflicht Kosmetik', 'Kassensystem Kosmetikstudio Österreich',
        'FinanzOnline Kasse', 'DEP7 Export', 'Registrierkasse Beauty Studio',
        'Kasse Kosmetikstudio Wien', 'Kasse Kosmetikstudio Salzburg', 'Software aus Salzburg',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/registrierkasse-kosmetikstudio-oesterreich',
    },
    openGraph: {
        type: 'website',
        locale: 'de_AT',
        siteName: 'Treatflow',
        title: 'Registrierkasse Kosmetikstudio Österreich – RKSV | Treatflow',
        description: 'RKSV-konforme Registrierkasse für Kosmetikstudios in Österreich: Belege, DEP7-Export, FinanzOnline. Software aus Salzburg.',
        url: 'https://www.treatflow.io/registrierkasse-kosmetikstudio-oesterreich',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Registrierkasse Kosmetikstudio Österreich – RKSV | Treatflow',
        description: 'RKSV-konforme Registrierkasse für Kosmetikstudios in Österreich: Belege, DEP7-Export, FinanzOnline. Software aus Salzburg.',
    },
};

const faqData = [
    {
        question: 'Brauche ich als Kosmetikstudio in Österreich eine Registrierkasse?',
        answer: 'Die Registrierkassenpflicht greift nach RKSV ab 15.000 € Jahresumsatz, davon über 7.500 € in bar. Sobald du darüber liegst, brauchst du eine manipulationssichere Registrierkasse mit Signatureinrichtung. Treatflow erfüllt die RKSV automatisch über Fiskaly.',
    },
    {
        question: 'Ist Treatflow RKSV-konform?',
        answer: 'Ja. Jeder Barumsatz wird über eine Fiskaly-Sicherheitseinrichtung signiert. Treatflow erstellt automatisch Start-, Monats-, Jahres- und Schlussbeleg und versieht jeden Beleg mit dem maschinenlesbaren QR-Code.',
    },
    {
        question: 'Was ist der DEP7-Export und wie funktioniert FinanzOnline?',
        answer: 'Das Datenerfassungsprotokoll (DEP7) ist das Exportformat aller Barumsätze nach RKSV. Treatflow erzeugt den DEP7-Export auf Knopfdruck und erinnert dich quartalsweise daran. Damit hast du alle Daten in der geforderten Struktur für die Finanzbehörde bzw. deinen Steuerberater bereit.',
    },
    {
        question: 'Was kostet die Registrierkasse?',
        answer: 'Die Kasse ist ein Add-on zum Booking-Plan und kostet 39 €/Monat (zzgl. USt.), jährlich 35 €/Monat. Einmalig kommen 149 € Einrichtungsgebühr für die RKSV-Provisionierung hinzu. Es gibt keine Transaktionsgebühren.',
    },
    {
        question: 'Ist Treatflow eine österreichische Software?',
        answer: 'Ja, Treatflow wird in Salzburg entwickelt und betreut – persönliche Einrichtung und Support aus Österreich. Ideal für Studios in Wien, Salzburg, Graz, Linz und Innsbruck.',
    },
    {
        question: 'Brauche ich zusätzliche Hardware?',
        answer: 'Nein. Treatflow ist cloudbasiert und läuft im Browser auf Tablet, Laptop oder Smartphone. Belege druckst du als PDF oder sendest sie per E-Mail. Optionale Hardware wie Bondrucker lässt sich ergänzen.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
};

const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Treatflow Registrierkasse – Österreich (RKSV)',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Point of Sale / Registrierkasse',
    operatingSystem: 'Web',
    url: 'https://www.treatflow.io/registrierkasse-kosmetikstudio-oesterreich',
    description:
        'RKSV-konforme Registrierkasse für Kosmetikstudios in Österreich: Signatur über Fiskaly, Start-/Monats-/Jahres-/Schlussbeleg, DEP7-Export. Software aus Salzburg.',
    brand: { '@type': 'Brand', name: 'Treatflow' },
    offers: {
        '@type': 'Offer',
        name: 'Kasse Add-on',
        price: '39',
        priceCurrency: 'EUR',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        description: 'Add-on zum Booking-Plan, 39 €/Monat zzgl. einmalig 149 € Einrichtung.',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.6',
        reviewCount: '19',
        bestRating: '5',
    },
};

export default function RegistrierkasseOesterreichPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kassensystem', href: '/kassensystem-kosmetikstudio' },
                    { label: 'Österreich' },
                ])) }}
            />
            <Script
                id="kasse-at-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="kasse-at-product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            {/* Hero */}
            <section className="pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <Breadcrumbs items={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kassensystem', href: '/kassensystem-kosmetikstudio' },
                    { label: 'Österreich' },
                ]} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <span className="mr-2">🇦🇹</span>
                            Registrierkasse für Österreich
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight break-words hyphens-auto" lang="de">
                            Registrierkasse für Kosmetikstudios in{' '}
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Österreich</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
                            RKSV-konform, mit DEP7-Export und Signatureinrichtung über Fiskaly. Einfach
                            zu bedienen, kassieren direkt aus dem Termin – entwickelt und betreut in Salzburg.
                        </p>
                        <AiAnswerCapsule
                            className="mb-10"
                            question="Welche Registrierkasse ist für Kosmetikstudios in Österreich geeignet?"
                            answer="In Österreich gilt ab 15.000 € Jahresumsatz (davon über 7.500 € bar) die Registrierkassenpflicht nach RKSV. Treatflow signiert jeden Barumsatz über eine Fiskaly-Sicherheitseinrichtung, erstellt Start-, Monats-, Jahres- und Schlussbeleg und erzeugt den DEP7-Export. Du kassierst direkt aus dem Terminkalender. Die Software wird in Salzburg entwickelt und kostet 39 €/Monat als Add-on, ohne Transaktionsgebühren."
                        />
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
                                Demo buchen
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* RKSV-Anforderungen */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Was die RKSV für dein Studio bedeutet
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Treatflow erfüllt die Registrierkassensicherheitsverordnung automatisch –
                            ohne dass du dich um Zertifikate kümmern musst.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { t: 'Registrierkassenpflicht', d: 'Pflicht ab 15.000 € Jahresumsatz und über 7.500 € Barumsatz. Treatflow ist ab dem ersten Beleg RKSV-konform.' },
                            { t: 'Signatureinrichtung', d: 'Jeder Barumsatz wird über die Fiskaly-Sicherheitseinrichtung manipulationssicher signiert.' },
                            { t: 'Belege automatisch', d: 'Start-, Monats-, Jahres- und Schlussbeleg laufen automatisch – mit maschinenlesbarem QR-Code.' },
                            { t: 'DEP7 & FinanzOnline', d: 'DEP7-Export auf Knopfdruck mit quartalsweiser Erinnerung – bereit für die Finanzbehörde.' },
                        ].map((item) => (
                            <div key={item.t} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.t}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-400 text-center mt-8 max-w-2xl mx-auto">
                        Hinweis: Dieser Überblick ersetzt keine steuerliche Beratung. Für deine
                        individuelle Situation wende dich bitte an deine Steuerberatung.
                    </p>
                </div>
            </section>

            {/* Made in Salzburg */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-gray-200 p-8 sm:p-10 bg-white">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">Software aus Salzburg, Support aus Österreich</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Treatflow wird in Salzburg entwickelt und betreut. Du erreichst ein
                                    Team, das die österreichischen Vorgaben und den Studio-Alltag kennt –
                                    mit persönlicher Einrichtung und Support. Ideal für Studios in:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Wien', 'Salzburg', 'Graz', 'Linz', 'Innsbruck', 'Klagenfurt'].map((city) => (
                                        <span key={city} className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium">{city}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vorteile */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Warum Treatflow als Registrierkasse?</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, t: 'RKSV inklusive', d: 'Signatur über Fiskaly ohne eigene Hardware.' },
                            { icon: RefreshCcw, t: 'Alles verbunden', d: 'Kasse, Termine und Kundenkartei in einer Plattform.' },
                            { icon: Lock, t: 'Keine Provision', d: 'Fester Add-on-Preis statt Gebühren pro Verkauf.' },
                            { icon: Mail, t: 'Digitale Belege', d: 'Beleg per E-Mail oder PDF – papierlos.' },
                        ].map((b) => (
                            <div key={b.t} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <b.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{b.t}</h3>
                                <p className="text-gray-600 text-sm">{b.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Preis */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Kasse als Add-on zum Booking-Plan</h2>
                        <div className="text-4xl font-bold mb-1">39 €<span className="text-lg text-indigo-200">/Monat</span></div>
                        <p className="text-indigo-200 text-sm mb-1">jährlich 35 €/Monat · zzgl. USt.</p>
                        <p className="text-indigo-200 text-sm mb-6">einmalig 149 € Einrichtung (RKSV-Provisionierung)</p>
                        <Link href="/preise" className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                            Alle Preise ansehen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Verwandte Funktionen */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Weiterführende Seiten</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { href: '/kassensystem-kosmetikstudio', t: 'Kassensystem im Detail', d: 'RKSV, TSE & Exporte erklärt', icon: Receipt },
                            { href: '/kosmetikstudio-kasse', t: 'Kosmetikstudio Kasse', d: 'Die Kasse im Überblick', icon: Receipt },
                            { href: '/kasse-mit-kundenkartei-kosmetikstudio', t: 'Kasse mit Kundenkartei', d: 'Verkauf + Kundendaten verbunden', icon: FileText },
                            { href: '/kosmetikstudio-software-oesterreich', t: 'Kosmetikstudio Software Österreich', d: 'Alle Funktionen für AT', icon: FileText },
                            { href: '/kosmetikstudio-software-wien', t: 'Kosmetikstudio Software Wien', d: 'Für Studios in Wien', icon: MapPin },
                            { href: '/preise', t: 'Preise', d: 'Pläne und Kasse-Add-on', icon: Receipt },
                        ].map((item) => (
                            <Link key={item.href} href={item.href} className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                                <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">{item.t}</span>
                                <span className="text-sm text-gray-600 block mb-2">{item.d}</span>
                                <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <SocialProofBar />

            {/* FAQ */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Häufige Fragen – Registrierkasse Österreich
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {faqData.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-6 bg-white">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 break-words hyphens-auto" lang="de">
                        RKSV-konform kassieren – einfach aus Salzburg
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und schalte die Registrierkasse als Add-on dazu.
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
                        <Link href="/preise" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200">
                            Preise ansehen
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
