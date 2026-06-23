import {
    Gift, ShieldCheck, Sparkles, ScanLine, CheckCircle, ArrowRight,
    CalendarClock, Receipt, TrendingUp, Wallet,
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Script from 'next/script';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import AiAnswerCapsule from '../components/AiAnswerCapsule';

export const metadata = {
    title: 'Gutscheine für Kosmetikstudios – verkaufen & einlösen',
    description: 'Gutscheinverwaltung für dein Kosmetikstudio: Geschenkgutscheine direkt an der Kasse verkaufen und einlösen, Einzweck- und Mehrzweckgutscheine mit korrekter Steuerlogik, Gültigkeit und Restwert im Blick. Teil der TSE-/RKSV-konformen Treatflow Kasse.',
    keywords: [
        'Gutscheine Kosmetikstudio', 'Gutscheinverwaltung Kosmetikstudio', 'Geschenkgutschein Kosmetikstudio',
        'Gutscheine verkaufen Kosmetikstudio', 'Gutschein einlösen Kasse', 'Gutschein Software Beauty',
        'digitale Gutscheine Studio', 'Einzweckgutschein', 'Mehrzweckgutschein',
        'Gutscheinverwaltung Software', 'Gutschein Kasse Kosmetik', 'Wertgutschein Studio',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/gutscheine-kosmetikstudio',
    },
    openGraph: {
        title: 'Gutscheine für Kosmetikstudios – verkaufen & einlösen | Treatflow',
        description: 'Geschenkgutscheine an der Kasse verkaufen und einlösen – Einzweck- und Mehrzweckgutscheine mit korrekter Steuerlogik, Gültigkeit und Restwert. Teil der Treatflow Kasse.',
        url: 'https://www.treatflow.io/gutscheine-kosmetikstudio',
    },
};

const faqData = [
    {
        question: 'Kann ich mit Treatflow Gutscheine verkaufen und einlösen?',
        answer: 'Ja. In der Treatflow Kasse verkaufst du Geschenkgutscheine direkt im Kassiervorgang und löst sie bei einem späteren Besuch wieder ein – ganz oder teilweise. Restwerte werden automatisch verwaltet, sodass ein Gutschein bei mehreren Besuchen weiter genutzt werden kann.',
    },
    {
        question: 'Was ist der Unterschied zwischen Einzweck- und Mehrzweckgutschein?',
        answer: 'Beim Einzweckgutschein steht der Steuersatz schon beim Verkauf fest (z. B. wenn alle Leistungen denselben Satz haben) – die Steuer wird sofort fällig. Beim Mehrzweckgutschein ist beim Verkauf noch offen, wofür er eingelöst wird (unterschiedliche Steuersätze), daher wird die Steuer erst bei der Einlösung gebucht. Treatflow unterstützt beide Varianten mit korrekter steuerlicher Behandlung.',
    },
    {
        question: 'Sind die Gutscheine fiskalkonform?',
        answer: 'Ja. Verkauf und Einlösung laufen über die TSE-/RKSV-konforme Treatflow Kasse. Jeder Vorgang wird fiskalisch signiert (KassenSichV in Deutschland, RKSV in Österreich) und erscheint mit Signatur-QR auf dem Beleg.',
    },
    {
        question: 'Kann ich eine Gültigkeit für Gutscheine festlegen?',
        answer: 'Ja. Du kannst ein Gültigkeitsdatum hinterlegen. Beim Einlösen prüft Treatflow Status und Restwert des Gutscheins, sodass du immer den aktuellen Stand siehst.',
    },
    {
        question: 'Was kostet die Gutscheinfunktion?',
        answer: 'Der Gutscheinverkauf und die Einlösung sind Teil der Treatflow Kasse, einem Add-on zum Booking-Plan für 39 €/Monat (jährlich 35 €/Monat) zzgl. einmalig 149 € Einrichtung. Es fallen keine Transaktionsgebühren pro Gutschein an.',
    },
    {
        question: 'Lohnen sich Gutscheine für mein Studio?',
        answer: 'Gutscheine bringen sofortigen Umsatz, gewinnen Neukunden über Beschenkte und erhöhen die Kundenbindung. Besonders vor Weihnachten, Muttertag und Valentinstag sind Geschenkgutscheine eine wichtige Einnahmequelle für Beauty- und Kosmetikstudios.',
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

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gutscheinverwaltung für Kosmetikstudios',
    serviceType: 'Gutschein- und Geschenkgutschein-Verwaltung',
    description:
        'Geschenkgutscheine im Kosmetikstudio direkt an der Kasse verkaufen und einlösen – Einzweck- und Mehrzweckgutscheine mit korrekter Steuerlogik, Gültigkeit und Restwertverwaltung. Fiskalkonform über die TSE-/RKSV-konforme Treatflow Kasse.',
    url: 'https://www.treatflow.io/gutscheine-kosmetikstudio',
    provider: {
        '@type': 'Organization',
        name: 'Treatflow',
        url: 'https://www.treatflow.io',
    },
    areaServed: ['DE', 'AT', 'CH'],
};

const features = [
    {
        icon: Gift,
        title: 'Gutscheine verkaufen',
        text: 'Verkaufe Geschenkgutscheine in beliebiger Höhe direkt im Kassiervorgang – ideal für Weihnachten, Muttertag und Geburtstage.',
        points: ['Frei wählbarer Betrag', 'Direkt im Checkout', 'Sofort gültig'],
        gradient: 'from-purple-500 to-pink-600',
        bg: 'from-purple-50 to-pink-100',
    },
    {
        icon: ScanLine,
        title: 'Einfach einlösen',
        text: 'Gutschein beim nächsten Besuch einlösen – ganz oder teilweise. Der Restwert bleibt erhalten und steht beim nächsten Mal wieder bereit.',
        points: ['Teil-Einlösung möglich', 'Restwert automatisch', 'Schnelle Code-Suche'],
        gradient: 'from-indigo-500 to-purple-600',
        bg: 'from-indigo-50 to-purple-100',
    },
    {
        icon: ShieldCheck,
        title: 'Steuerlich korrekt',
        text: 'Einzweck- und Mehrzweckgutscheine werden steuerlich richtig behandelt – die Steuer wird beim Verkauf oder bei der Einlösung gebucht, je nach Gutscheinart.',
        points: ['Einzweckgutschein', 'Mehrzweckgutschein', 'Korrekte Steuerbuchung'],
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-100',
    },
    {
        icon: CalendarClock,
        title: 'Gültigkeit & Restwert',
        text: 'Hinterlege ein Gültigkeitsdatum und behalte Status und Restwert jedes Gutscheins jederzeit im Blick.',
        points: ['Gültigkeitsdatum', 'Status-Prüfung', 'Restwert sichtbar'],
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-100',
    },
    {
        icon: Receipt,
        title: 'Fiskalkonform',
        text: 'Verkauf und Einlösung laufen über die TSE-/RKSV-konforme Kasse. Jeder Vorgang wird signiert und erscheint auf dem Beleg.',
        points: ['KassenSichV (DE)', 'RKSV (AT)', 'Beleg mit Signatur-QR'],
        gradient: 'from-rose-500 to-red-600',
        bg: 'from-rose-50 to-red-100',
    },
    {
        icon: TrendingUp,
        title: 'Mehr Umsatz',
        text: 'Gutscheine bringen sofortigen Umsatz und neue Kunden über die Beschenkten – eine der stärksten Einnahmequellen für Studios.',
        points: ['Sofortiger Cashflow', 'Neukunden gewinnen', 'Stärkere Bindung'],
        gradient: 'from-amber-500 to-orange-600',
        bg: 'from-amber-50 to-orange-100',
    },
];

export default function GutscheinePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Gutscheine' },
                ])) }}
            />
            <Script
                id="gutscheine-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="gutscheine-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            {/* Hero */}
            <section className="pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
                <Breadcrumbs items={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Gutscheine' },
                ]} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Gift className="h-4 w-4 mr-2" />
                            Gutscheine
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 break-words hyphens-auto" lang="de">
                            Gutscheine für dein <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Kosmetikstudio</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Verkaufe Geschenkgutscheine direkt an der Kasse und löse sie beim nächsten
                            Besuch wieder ein – steuerlich korrekt, fiskalkonform und mit automatischer
                            Restwertverwaltung.
                        </p>
                        <AiAnswerCapsule
                            question="Wie kann ich in meinem Kosmetikstudio Gutscheine verwalten?"
                            answer="Mit der Treatflow Kasse verkaufst du Geschenkgutscheine direkt im Kassiervorgang und löst sie später ganz oder teilweise wieder ein – Restwerte werden automatisch verwaltet. Treatflow unterstützt Einzweck- und Mehrzweckgutscheine mit korrekter steuerlicher Behandlung, optionalem Gültigkeitsdatum und fiskalkonformer Signatur (KassenSichV in Deutschland, RKSV in Österreich). Die Gutscheinfunktion ist Teil der Kasse, einem Add-on zum Booking-Plan für 39 €/Monat zzgl. einmalig 149 € Einrichtung."
                        />
                    </div>

                    {/* Gutschein-Visual */}
                    <div className="max-w-md mx-auto">
                        <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 to-pink-600 shadow-xl">
                            <div className="bg-white rounded-[14px] p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                                            <Gift className="h-5 w-5 text-white" />
                                        </div>
                                        <span className="font-semibold text-gray-900">Geschenkgutschein</span>
                                    </div>
                                    <Sparkles className="h-5 w-5 text-purple-400" />
                                </div>
                                <div className="text-center py-4">
                                    <div className="text-4xl font-bold text-gray-900">50,00 €</div>
                                    <p className="text-sm text-gray-500 mt-1">Restwert nach erster Einlösung: 20,00 €</p>
                                </div>
                                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-dashed border-gray-200 pt-3">
                                    <span className="inline-flex items-center"><Wallet className="h-3.5 w-3.5 mr-1" /> Code TF-2026-0042</span>
                                    <span className="inline-flex items-center"><CalendarClock className="h-3.5 w-3.5 mr-1" /> gültig bis 31.12.2027</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Gutscheinverwaltung, die mitdenkt
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Vom Verkauf bis zur Einlösung – steuerlich korrekt und nahtlos mit Kasse,
                            Terminkalender und Kundenkartei verbunden.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className={`bg-gradient-to-br ${feature.bg} p-8 rounded-2xl`}>
                                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-6`}>
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 mb-6">{feature.text}</p>
                                <ul className="space-y-2">
                                    {feature.points.map((p) => (
                                        <li key={p} className="flex items-center text-sm text-gray-700">
                                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Einzweck vs. Mehrzweck */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Einzweck- oder Mehrzweckgutschein?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Treatflow unterstützt beide Varianten und bucht die Steuer automatisch zum
                            richtigen Zeitpunkt.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl border-2 border-purple-200 p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Einzweckgutschein</h3>
                            <p className="text-gray-600 mb-5">
                                Für Studios, bei denen alle Leistungen denselben Steuersatz haben. Die
                                Steuer wird sofort beim Verkauf gebucht – unabhängig davon, wofür der
                                Gutschein später eingelöst wird.
                            </p>
                            <ul className="space-y-3">
                                {['Steuer beim Verkauf fällig', 'Ideal bei einheitlichem Steuersatz', 'Empfohlen für die meisten Beauty-Studios'].map((p) => (
                                    <li key={p} className="flex items-start text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl border border-gray-200 p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Mehrzweckgutschein</h3>
                            <p className="text-gray-600 mb-5">
                                Nötig, wenn du Dinge mit unterschiedlichen Steuersätzen verkaufst (z. B.
                                Produkte und Leistungen). Die Steuer wird erst bei der Einlösung gebucht.
                            </p>
                            <ul className="space-y-3">
                                {['Steuer erst bei Einlösung', 'Für unterschiedliche Steuersätze', 'Flexibel einlösbar'].map((p) => (
                                    <li key={p} className="flex items-start text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* So funktioniert's */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            So einfach funktioniert&rsquo;s
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            In drei Schritten vom Verkauf bis zur Einlösung.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            { n: '1', t: 'Gutschein verkaufen', d: 'Betrag und Gutscheinart wählen, im Checkout verkaufen. Der Verkauf wird fiskalkonform signiert.', g: 'from-purple-500 to-pink-600' },
                            { n: '2', t: 'Code übergeben', d: 'Kunde erhält den Gutschein mit Code und Gültigkeit – ideal als Geschenk.', g: 'from-indigo-500 to-purple-600' },
                            { n: '3', t: 'Einlösen', d: 'Beim nächsten Besuch ganz oder teilweise einlösen. Der Restwert bleibt automatisch erhalten.', g: 'from-emerald-500 to-teal-600' },
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

            {/* Preis-Hinweis */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Teil der Treatflow Kasse</h2>
                        <p className="text-purple-100 mb-6 max-w-xl mx-auto">
                            Gutscheinverkauf und -einlösung sind in der Kasse enthalten – einem Add-on
                            zum Booking-Plan für 39 €/Monat (jährlich 35 €/Monat) zzgl. einmalig 149 €
                            Einrichtung. Keine Gebühren pro Gutschein.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/kassensystem-kosmetikstudio"
                                className="inline-flex items-center justify-center bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                            >
                                Mehr zur Kasse
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="/preise"
                                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                            >
                                Preise ansehen
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Verwandte Funktionen */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Verwandte Funktionen für dein Studio
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Gutscheine sind Teil der All-in-One Plattform von Treatflow.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { href: '/kassensystem-kosmetikstudio', t: 'Kassensystem', d: 'TSE- & RKSV-konform kassieren' },
                            { href: '/terminkalender', t: 'Terminkalender', d: 'Aus dem Termin direkt kassieren' },
                            { href: '/online-buchungen', t: 'Online-Buchungen', d: '24/7 Buchung über deinen Link' },
                            { href: '/kundenverwaltung', t: 'Digitale Kundenkartei', d: 'Kundendaten & Historie' },
                            { href: '/shop', t: 'Produktverkauf & Lager', d: 'Pflegeprodukte verkaufen' },
                            { href: '/funktionen', t: 'Alle Funktionen', d: 'Der komplette Überblick' },
                        ].map((item) => (
                            <Link key={item.href} href={item.href} className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-purple-200 hover:shadow-lg transition-all">
                                <span className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 block mb-1">{item.t}</span>
                                <span className="text-sm text-gray-600 block mb-2">{item.d}</span>
                                <span className="inline-flex items-center text-purple-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
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
                            Häufige Fragen zu Gutscheinen
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
            <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 break-words hyphens-auto" lang="de">
                        Mehr Umsatz mit Gutscheinen
                    </h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und verkaufe Gutscheine fiskalkonform –
                        ohne Gebühren pro Gutschein.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <Link
                            href="/kassensystem-kosmetikstudio"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
                        >
                            Zur Kasse
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
