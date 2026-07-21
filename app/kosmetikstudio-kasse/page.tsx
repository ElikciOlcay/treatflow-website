import {
    Receipt, CreditCard, Banknote, Gift, Mail, ArrowRight,
    Calculator, Sparkles, RefreshCcw,
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Script from 'next/script';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import AiAnswerCapsule from '../components/AiAnswerCapsule';

export const metadata = {
    title: {
        absolute: 'Kosmetikstudio Kasse: einfach & rechtssicher | Treatflow',
    },
    description: 'Die Kasse fürs Kosmetikstudio: direkt aus dem Termin kassieren, Belege per E-Mail, Gutscheine verkaufen – TSE/RKSV-konform, ohne Provision. 14 Tage kostenlos testen.',
    keywords: [
        'Kosmetikstudio Kasse', 'Kasse Kosmetikstudio', 'Kasse für Beauty Studio',
        'online Kasse Kosmetikstudio', 'Kasse mit Terminbuchung', 'Beauty Salon Kasse',
        'mobile Kasse Kosmetik', 'Kasse ohne Provision', 'cloudbasierte Kasse Studio',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/kosmetikstudio-kasse',
    },
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        siteName: 'Treatflow',
        title: 'Kosmetikstudio Kasse: einfach & rechtssicher | Treatflow',
        description: 'Direkt aus dem Termin kassieren, Belege per E-Mail, Gutscheine verkaufen – TSE/RKSV-konform und ohne Provision. 14 Tage kostenlos testen.',
        url: 'https://www.treatflow.io/kosmetikstudio-kasse',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kosmetikstudio Kasse: einfach & rechtssicher | Treatflow',
        description: 'Direkt aus dem Termin kassieren, Belege per E-Mail, Gutscheine – TSE/RKSV-konform, ohne Provision.',
    },
};

const faqData = [
    {
        question: 'Was kostet die Kasse für mein Kosmetikstudio?',
        answer: 'Die Treatflow Kasse ist ein Add-on zum Booking-Plan und kostet 39 €/Monat (zzgl. MwSt.), jährlich 35 €/Monat. Einmalig kommen 149 € Einrichtungsgebühr hinzu. Es gibt keine Transaktionsgebühren und keine Provision pro Verkauf – deine Umsätze gehören dir.',
    },
    {
        question: 'Kann ich direkt aus dem Termin kassieren?',
        answer: 'Ja. Aus dem Treatflow-Terminkalender startest du den Kassiervorgang mit einem Klick. Kundin, Behandlung und Preis landen automatisch im Warenkorb. Du ergänzt Produkte, vergibst Rabatte und wählst die Zahlart – fertig.',
    },
    {
        question: 'Welche Zahlarten unterstützt die Kasse?',
        answer: 'Barzahlung mit automatischer Wechselgeldberechnung, Kartenzahlung, Gutschein sowie Überweisung mit Rechnung und GiroCode. Jede Zahlung wird sauber auf dem Beleg dokumentiert.',
    },
    {
        question: 'Ist die Kasse rechtssicher?',
        answer: 'Ja. In Deutschland ist die Kasse TSE-konform nach KassenSichV, in Österreich RKSV-konform über Fiskaly. Treatflow erkennt automatisch das Land deines Studios und wendet die passenden Vorgaben an – du musst dich um nichts kümmern.',
    },
    {
        question: 'Brauche ich zusätzliche Hardware?',
        answer: 'Nein. Treatflow ist eine cloudbasierte Kasse und läuft im Browser auf Tablet, Laptop oder Smartphone. Belege druckst du als PDF oder sendest sie per E-Mail. Optionale Hardware wie Bondrucker oder Kartenterminal kannst du ergänzen.',
    },
    {
        question: 'Für welche Studios eignet sich die Kasse?',
        answer: 'Für alle Beauty- und Wellnessbetriebe: Kosmetik, Laser & IPL, Hydrafacial, Microneedling, Permanent Make-up, Nagel- und Lash-Studios, Massage und Spa. Die Kasse ist Teil der All-in-One Plattform von Treatflow.',
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
    name: 'Treatflow Kasse',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Point of Sale / Kassensoftware',
    operatingSystem: 'Web',
    url: 'https://www.treatflow.io/kosmetikstudio-kasse',
    description:
        'Cloudbasierte Kasse für Kosmetikstudios: direkt aus dem Termin kassieren, Belege per E-Mail, Gutscheine verkaufen, TSE/RKSV-konform und ohne Provision.',
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

const benefits = [
    {
        icon: Calculator,
        title: 'Aus dem Termin kassieren',
        text: 'Kundin, Behandlung und Preis landen mit einem Klick im Warenkorb. Kein Abtippen, keine doppelte Pflege.',
    },
    {
        icon: CreditCard,
        title: 'Alle Zahlarten',
        text: 'Bar mit automatischem Wechselgeld, Karte, Gutschein und Überweisung mit GiroCode – sauber auf dem Beleg.',
    },
    {
        icon: Gift,
        title: 'Gutscheine verkaufen',
        text: 'Geschenkgutscheine direkt an der Kasse verkaufen und einlösen – der unterschätzte Umsatz-Booster.',
    },
    {
        icon: Mail,
        title: 'Belege digital',
        text: 'Beleg als PDF drucken oder per E-Mail senden – papierlos und jederzeit nachvollziehbar.',
    },
    {
        icon: RefreshCcw,
        title: 'Alles verbunden',
        text: 'Kasse, Terminkalender und Kundenkartei in einer Plattform statt drei getrennter Systeme.',
    },
    {
        icon: Banknote,
        title: 'Keine Provision',
        text: 'Fester Add-on-Preis statt Gebühren pro Verkauf. Deine Umsätze bleiben vollständig bei dir.',
    },
];

export default function KosmetikstudioKassePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kosmetikstudio Kasse' },
                ])) }}
            />
            <Script
                id="kosmetikstudio-kasse-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="kosmetikstudio-kasse-product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />

            {/* Hero */}
            <section className="pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <Breadcrumbs items={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kosmetikstudio Kasse' },
                ]} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Receipt className="h-4 w-4 mr-2" />
                            Kasse für Kosmetikstudios
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight break-words hyphens-auto" lang="de">
                            Die Kasse für dein{' '}
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Kosmetikstudio</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
                            Kassiere direkt aus dem Termin, verkaufe Gutscheine und sende Belege per
                            E-Mail – rechtssicher in Deutschland und Österreich, ohne Provision.
                        </p>
                        <AiAnswerCapsule
                            className="mb-10"
                            question="Welche Kasse eignet sich für ein Kosmetikstudio?"
                            answer="Für Kosmetikstudios eignet sich eine cloudbasierte Kasse, die direkt mit Terminkalender und Kundenkartei verbunden ist. Mit Treatflow kassierst du direkt aus dem Termin, akzeptierst Bar, Karte, Gutschein und Überweisung und sendest Belege per E-Mail. Die Kasse ist TSE-konform (Deutschland) und RKSV-konform (Österreich) und kostet 39 €/Monat als Add-on, ohne Transaktionsgebühren."
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
                            <Link
                                href="/kassensystem-kosmetikstudio"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200"
                            >
                                Technische Details ansehen
                            </Link>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                </div>
            </section>

            {/* Vorteile */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Eine Kasse, die deinen Studio-Alltag versteht
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Keine sperrige Kassen-Hardware, kein separates System – sondern eine Kasse,
                            die mit deinen Terminen und Kundendaten zusammenarbeitet.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((b) => (
                            <div key={b.title} className="p-8 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                                    <b.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{b.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{b.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* So funktioniert's */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            In drei Schritten kassiert
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            { n: '1', t: 'Termin auswählen', d: 'Kundin, Behandlung und Preis übernimmst du mit einem Klick aus dem Kalender in den Warenkorb.', g: 'from-indigo-500 to-purple-600' },
                            { n: '2', t: 'Zahlart wählen', d: 'Bar, Karte, Gutschein oder Überweisung – die Kasse signiert jeden Verkauf automatisch.', g: 'from-blue-500 to-indigo-600' },
                            { n: '3', t: 'Beleg senden', d: 'Beleg per E-Mail an die Kundin oder als PDF drucken. Fertig in Sekunden.', g: 'from-emerald-500 to-teal-600' },
                        ].map((step) => (
                            <div key={step.n} className="text-center">
                                <div className={`w-16 h-16 bg-gradient-to-r ${step.g} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                    <span className="text-white font-bold text-xl">{step.n}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.t}</h3>
                                <p className="text-gray-600">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rechtssicher DE/AT Hinweis */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-gray-200 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                                <Sparkles className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">Rechtssicher in Deutschland und Österreich</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Die Treatflow Kasse erfüllt die gesetzlichen Vorgaben automatisch:
                                    TSE-konform nach KassenSichV in Deutschland, RKSV-konform über Fiskaly
                                    in Österreich. Welche Vorgaben in deinem Land gelten, erklären wir
                                    übersichtlich auf den passenden Seiten.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/kassensystem-kosmetikstudio-deutschland" className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                                        Kasse Deutschland (TSE)
                                    </Link>
                                    <Link href="/registrierkasse-kosmetikstudio-oesterreich" className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                                        Registrierkasse Österreich (RKSV)
                                    </Link>
                                    <Link href="/kasse-mit-kundenkartei-kosmetikstudio" className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                                        Kasse mit Kundenkartei
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Preis */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Kasse als Add-on zum Booking-Plan</h2>
                        <div className="text-4xl font-bold mb-1">39 €<span className="text-lg text-indigo-200">/Monat</span></div>
                        <p className="text-indigo-200 text-sm mb-1">jährlich 35 €/Monat · zzgl. MwSt.</p>
                        <p className="text-indigo-200 text-sm mb-6">einmalig 149 € Einrichtung · keine Provision pro Verkauf</p>
                        <Link
                            href="/preise"
                            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                        >
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Verwandte Funktionen</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Die Kasse ist Teil der All-in-One Plattform von Treatflow.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { href: '/terminkalender', t: 'Terminkalender', d: 'Aus dem Termin direkt kassieren' },
                            { href: '/kundenkartei-software', t: 'Digitale Kundenkartei', d: 'Kundendaten & Historie' },
                            { href: '/gutscheine-kosmetikstudio', t: 'Gutscheine', d: 'Verkaufen, einlösen, Restwert' },
                            { href: '/online-buchungen', t: 'Online-Buchungen', d: '24/7 Buchung über deinen Link' },
                            { href: '/kassensystem-kosmetikstudio', t: 'Kassensystem im Detail', d: 'TSE, RKSV & Exporte erklärt' },
                            { href: '/kosmetikstudio-software', t: 'Kosmetikstudio Software', d: 'Die komplette All-in-One Lösung' },
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
                            Häufige Fragen zur Kosmetikstudio Kasse
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
                        Bereit für eine Kasse, die mitdenkt?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und schalte die Kasse als Add-on dazu –
                        rechtssicher und ohne Provision.
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
                        <Link
                            href="/preise"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
                        >
                            Preise ansehen
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
