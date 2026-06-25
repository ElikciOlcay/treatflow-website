import {
    ShieldCheck, Receipt, FileText, CheckCircle, ArrowRight, Lock, RefreshCcw, Mail,
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Script from 'next/script';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import AiAnswerCapsule from '../components/AiAnswerCapsule';

export const metadata = {
    title: 'Kassensystem Kosmetikstudio Deutschland – TSE | Treatflow',
    description: 'TSE-konformes Kassensystem (KassenSichV) für Kosmetik- und Laser-Studios in Deutschland: Belegausgabepflicht, DSFinV-K-Export, Fiskaly-TSE. Ab 39 €/Monat, 14 Tage testen.',
    keywords: [
        'Kassensystem Kosmetikstudio Deutschland', 'TSE Kasse Kosmetikstudio',
        'KassenSichV Kasse', 'Fiskaly Kasse Kosmetikstudio', 'DSFinV-K Export',
        'GoBD konforme Kasse', 'Belegausgabepflicht Kosmetik', 'Kassensystem Beauty Studio Deutschland',
        'Kassensystem Laserstudio', 'Kasse Kosmetik Deutschland',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/kassensystem-kosmetikstudio-deutschland',
    },
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        siteName: 'Treatflow',
        title: 'Kassensystem Kosmetikstudio Deutschland – TSE | Treatflow',
        description: 'TSE-konformes Kassensystem (KassenSichV) für Kosmetikstudios in Deutschland: Belegausgabe, DSFinV-K-Export, Fiskaly. Ab 39 €/Monat.',
        url: 'https://www.treatflow.io/kassensystem-kosmetikstudio-deutschland',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kassensystem Kosmetikstudio Deutschland – TSE | Treatflow',
        description: 'TSE-konformes Kassensystem (KassenSichV) für Kosmetikstudios in Deutschland: Belegausgabe, DSFinV-K-Export, Fiskaly.',
    },
};

const faqData = [
    {
        question: 'Braucht mein Kosmetikstudio in Deutschland eine TSE-Kasse?',
        answer: 'Sobald du ein elektronisches Kassensystem einsetzt, muss es seit der Kassensicherungsverordnung (KassenSichV) eine zertifizierte technische Sicherheitseinrichtung (TSE) besitzen. Treatflow signiert jeden Verkauf automatisch über eine zertifizierte TSE – du musst dich nicht selbst um TSE oder Zertifikat kümmern.',
    },
    {
        question: 'Was ist die Belegausgabepflicht?',
        answer: 'Seit 2020 muss in Deutschland für jeden Verkauf ein Beleg bereitgestellt werden. Mit Treatflow erfüllst du das automatisch: Du druckst den Beleg als PDF oder sendest ihn per E-Mail an die Kundin.',
    },
    {
        question: 'Was ist DSFinV-K und kann mein Steuerberater exportieren?',
        answer: 'DSFinV-K (Digitale Schnittstelle der Finanzverwaltung für Kassensysteme) ist das standardisierte Exportformat, das Betriebsprüfer bei einer Kassennachschau verlangen. Treatflow erzeugt den DSFinV-K-Export auf Knopfdruck. Zusätzlich gibt es CSV-Exporte und einen Steuerberater-Kassenbericht als PDF/CSV.',
    },
    {
        question: 'Wer stellt die TSE bereit?',
        answer: 'Treatflow nutzt Fiskaly als zertifizierte Sicherheitseinrichtung. Die TSE wird im Rahmen der einmaligen Einrichtung provisioniert – ohne dass du eine eigene Hardware-TSE kaufen oder warten musst.',
    },
    {
        question: 'Was kostet das Kassensystem in Deutschland?',
        answer: 'Die Kasse ist ein Add-on zum Booking-Plan und kostet 39 €/Monat (zzgl. MwSt.), jährlich 35 €/Monat. Einmalig kommen 149 € Einrichtungsgebühr für die TSE-Provisionierung hinzu. Es gibt keine Transaktionsgebühren.',
    },
    {
        question: 'Für welche Studios in Deutschland eignet sich die Kasse?',
        answer: 'Für Kosmetikstudios, Laser- und IPL-Studios, Beauty-Salons, Nagel- und Lash-Studios sowie ästhetische Praxen. Gerade Laser-Studios profitieren von der Kombination aus TSE-Kasse, NiSV-Dokumentation und Kundenkartei in einer Plattform.',
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
    name: 'Treatflow Kasse – Deutschland (TSE)',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Point of Sale / Kassensoftware',
    operatingSystem: 'Web',
    url: 'https://www.treatflow.io/kassensystem-kosmetikstudio-deutschland',
    description:
        'TSE-konforme Kassensoftware nach KassenSichV für Kosmetik- und Laser-Studios in Deutschland: Belegausgabe, DSFinV-K-Export, Fiskaly-TSE, kassieren aus dem Termin.',
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

export default function KassensystemDeutschlandPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kassensystem', href: '/kassensystem-kosmetikstudio' },
                    { label: 'Deutschland' },
                ])) }}
            />
            <Script
                id="kasse-de-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="kasse-de-product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            {/* Hero */}
            <section className="pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <Breadcrumbs items={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kassensystem', href: '/kassensystem-kosmetikstudio' },
                    { label: 'Deutschland' },
                ]} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <span className="mr-2">🇩🇪</span>
                            Kassensystem für Deutschland
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight break-words hyphens-auto" lang="de">
                            Kassensystem für Kosmetikstudios in{' '}
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Deutschland</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
                            TSE-konform nach KassenSichV, mit Belegausgabe, DSFinV-K-Export und
                            Fiskaly-Sicherheitseinrichtung. Kassiere direkt aus dem Termin – ohne
                            eigene Kassen-Hardware.
                        </p>
                        <AiAnswerCapsule
                            className="mb-10"
                            question="Welches Kassensystem ist für Kosmetikstudios in Deutschland geeignet?"
                            answer="In Deutschland muss eine elektronische Kasse seit der KassenSichV eine zertifizierte TSE besitzen. Treatflow signiert jeden Verkauf über eine Fiskaly-TSE, erfüllt die Belegausgabepflicht und erzeugt DSFinV-K-Exporte für das Finanzamt. Du kassierst direkt aus dem Terminkalender, akzeptierst Bar, Karte, Gutschein und Überweisung. Die Kasse ist ein Add-on für 39 €/Monat zzgl. einmalig 149 € Einrichtung, ohne Transaktionsgebühren."
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

            {/* KassenSichV-Anforderungen */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Was die KassenSichV für dein Studio bedeutet
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Treatflow erfüllt die zentralen Anforderungen automatisch – du musst dich
                            nicht mit den technischen Details beschäftigen.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { t: 'Zertifizierte TSE', d: 'Jeder Kassenvorgang wird über eine zertifizierte technische Sicherheitseinrichtung (Fiskaly) manipulationssicher signiert.' },
                            { t: 'Belegausgabepflicht', d: 'Für jeden Verkauf wird ein Beleg bereitgestellt – als PDF-Druck oder per E-Mail an die Kundin.' },
                            { t: 'GoBD-konform', d: 'Belege sind unveränderbar und nachvollziehbar, mit revisionssicherer Hash-Kette und TSE-Klartext.' },
                            { t: 'DSFinV-K-Export', d: 'Auf Knopfdruck erzeugst du den standardisierten Export für die Finanzverwaltung bei einer Kassennachschau.' },
                        ].map((item) => (
                            <div key={item.t} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <div className="flex items-start gap-3">
                                    <ShieldCheck className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-0.5" />
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
                        individuelle Situation wende dich bitte an deinen Steuerberater.
                    </p>
                </div>
            </section>

            {/* Vorteile */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Warum Treatflow als Kasse?</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, t: 'TSE inklusive', d: 'Fiskaly-TSE ohne eigene Hardware – Provisionierung übernehmen wir.' },
                            { icon: RefreshCcw, t: 'Alles verbunden', d: 'Kasse, Termine, Kundenkartei und NiSV-Doku in einer Plattform.' },
                            { icon: Lock, t: 'Keine Provision', d: 'Fester Add-on-Preis statt Gebühren pro Verkauf.' },
                            { icon: Mail, t: 'Digitale Belege', d: 'Beleg per E-Mail oder PDF – papierlos und nachvollziehbar.' },
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
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Kasse als Add-on zum Booking-Plan</h2>
                        <div className="text-4xl font-bold mb-1">39 €<span className="text-lg text-indigo-200">/Monat</span></div>
                        <p className="text-indigo-200 text-sm mb-1">jährlich 35 €/Monat · zzgl. MwSt.</p>
                        <p className="text-indigo-200 text-sm mb-6">einmalig 149 € Einrichtung (TSE-Provisionierung)</p>
                        <Link href="/preise" className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                            Alle Preise ansehen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Verwandte Funktionen */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Weiterführende Seiten</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { href: '/kassensystem-kosmetikstudio', t: 'Kassensystem im Detail', d: 'TSE, RKSV, Exporte & Glossar', icon: Receipt },
                            { href: '/kosmetikstudio-kasse', t: 'Kosmetikstudio Kasse', d: 'Die Kasse im Überblick', icon: Receipt },
                            { href: '/kasse-mit-kundenkartei-kosmetikstudio', t: 'Kasse mit Kundenkartei', d: 'Verkauf + Kundendaten verbunden', icon: FileText },
                            { href: '/laserstudio-software-deutschland', t: 'Laserstudio Software', d: 'NiSV-konform in Deutschland', icon: ShieldCheck },
                            { href: '/kosmetikstudio-software-deutschland', t: 'Kosmetikstudio Software Deutschland', d: 'Alle Funktionen für DE', icon: FileText },
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
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Häufige Fragen – Kasse Deutschland
                        </h2>
                    </div>
                    <div className="space-y-6">
                        {faqData.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-6">
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
                        TSE-konform kassieren – ohne Aufwand
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und schalte die TSE-Kasse als Add-on dazu.
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
