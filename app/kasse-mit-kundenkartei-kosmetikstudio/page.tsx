import {
    Receipt, Users, FileText, Calendar, Camera, ClipboardCheck,
    ArrowRight, Check, X,
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Script from 'next/script';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import AiAnswerCapsule from '../components/AiAnswerCapsule';

export const metadata = {
    title: 'Kasse mit Kundenkartei fürs Kosmetikstudio | Treatflow',
    description: 'Normale Kassen verkaufen nur. Treatflow verbindet Kasse mit Kundenkartei, Terminen, Anamnese, Fotos und Behandlungshistorie. TSE/RKSV-konform. 14 Tage testen.',
    keywords: [
        'Kasse mit Kundenkartei Kosmetikstudio', 'Kassensystem mit Kundenverwaltung',
        'Kasse mit online Terminbuchung', 'Kasse mit Behandlungsdokumentation',
        'Kassensystem mit Terminbuchung', 'Kasse Kundenkartei Beauty', 'POS mit Kundenkartei',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/kasse-mit-kundenkartei-kosmetikstudio',
    },
    openGraph: {
        type: 'website',
        locale: 'de_DE',
        siteName: 'Treatflow',
        title: 'Kasse mit Kundenkartei fürs Kosmetikstudio | Treatflow',
        description: 'Treatflow verbindet Kasse mit Kundenkartei, Terminen, Anamnese, Fotos und Behandlungshistorie – nicht nur Verkauf.',
        url: 'https://www.treatflow.io/kasse-mit-kundenkartei-kosmetikstudio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kasse mit Kundenkartei fürs Kosmetikstudio | Treatflow',
        description: 'Treatflow verbindet Kasse mit Kundenkartei, Terminen, Anamnese, Fotos und Behandlungshistorie.',
    },
};

const faqData = [
    {
        question: 'Was ist der Unterschied zwischen einer normalen Kasse und Treatflow?',
        answer: 'Eine normale Kasse kann verkaufen und einen Beleg ausgeben. Treatflow verbindet den Verkauf zusätzlich mit der Kundenkartei, der Behandlungshistorie, Anamnese, Fotos und dem Terminkalender. So entsteht aus jedem Kassiervorgang ein vollständiges Kundenbild – ohne doppelte Pflege.',
    },
    {
        question: 'Wird der Verkauf der Kundin zugeordnet?',
        answer: 'Ja. Wenn du aus dem Termin kassierst, wird der Verkauf automatisch der Kundin zugeordnet und in ihrer Historie gespeichert. Du siehst auf einen Blick, welche Behandlungen und Produkte sie gekauft hat.',
    },
    {
        question: 'Ist die Kasse trotzdem rechtssicher?',
        answer: 'Ja. Die Treatflow Kasse ist TSE-konform in Deutschland (KassenSichV) und RKSV-konform in Österreich – die Verbindung mit der Kundenkartei ändert daran nichts.',
    },
    {
        question: 'Kann ich auch Anamnese und Fotos mit dem Verkauf verbinden?',
        answer: 'Ja. Anamnesebögen, Einwilligungen, Vorher-Nachher-Fotos und die Behandlungsdokumentation liegen in derselben Kundenkartei wie die Kassenbelege. Alles an einem Ort, DSGVO-konform auf EU-Servern.',
    },
    {
        question: 'Was kostet die Kasse mit Kundenkartei?',
        answer: 'Die Kasse ist ein Add-on zum Booking-Plan und kostet 39 €/Monat (zzgl. MwSt.), jährlich 35 €/Monat, zzgl. einmalig 149 € Einrichtung. Die Kundenkartei ist im Booking-Plan bereits enthalten.',
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

const comparisonRows = [
    { feature: 'Verkaufen & Beleg ausgeben', normal: true, treatflow: true },
    { feature: 'TSE-/RKSV-konform', normal: true, treatflow: true },
    { feature: 'Verkauf der Kundin zuordnen', normal: false, treatflow: true },
    { feature: 'Behandlungshistorie pro Kundin', normal: false, treatflow: true },
    { feature: 'Aus dem Termin kassieren', normal: false, treatflow: true },
    { feature: 'Anamnese & Einwilligungen', normal: false, treatflow: true },
    { feature: 'Vorher-Nachher-Fotos', normal: false, treatflow: true },
    { feature: 'Online-Buchung integriert', normal: false, treatflow: true },
    { feature: 'Gutscheine & Erinnerungen', normal: false, treatflow: true },
];

const connections = [
    { icon: Users, title: 'Kundenkartei', text: 'Jeder Verkauf landet in der Historie der Kundin – inkl. gekaufter Behandlungen und Produkte.' },
    { icon: Calendar, title: 'Termine', text: 'Aus dem Terminkalender kassieren, ohne etwas abzutippen.' },
    { icon: ClipboardCheck, title: 'Anamnese', text: 'Anamnesebögen und Einwilligungen liegen bei derselben Kundin.' },
    { icon: Camera, title: 'Fotos', text: 'Vorher-Nachher-Bilder dokumentiert und mit der Behandlung verknüpft.' },
    { icon: FileText, title: 'Dokumentation', text: 'Behandlungsdokumentation und Kassenbelege in einer Akte.' },
    { icon: Receipt, title: 'Kasse', text: 'Bar, Karte, Gutschein und Überweisung – rechtssicher signiert.' },
];

export default function KasseMitKundenkarteiPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kassensystem', href: '/kassensystem-kosmetikstudio' },
                    { label: 'Kasse mit Kundenkartei' },
                ])) }}
            />
            <Script
                id="kasse-kartei-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero */}
            <section className="pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <Breadcrumbs items={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Kassensystem', href: '/kassensystem-kosmetikstudio' },
                    { label: 'Kasse mit Kundenkartei' },
                ]} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Users className="h-4 w-4 mr-2" />
                            Kasse + Kundenkartei
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight break-words hyphens-auto" lang="de">
                            Die Kasse, die mit deiner{' '}
                            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Kundenkartei</span> verbunden ist
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
                            Normale Kassen können verkaufen. Treatflow verbindet den Verkauf mit
                            Kundendaten, Behandlungshistorie, Fotos, Anamnese und Terminen – alles in
                            einer Plattform.
                        </p>
                        <AiAnswerCapsule
                            className="mb-10"
                            question="Was bringt eine Kasse mit Kundenkartei im Kosmetikstudio?"
                            answer="Eine Kasse mit Kundenkartei ordnet jeden Verkauf automatisch der Kundin zu und speichert ihn in der Behandlungshistorie. Bei Treatflow ist die Kasse mit Kundenkartei, Terminkalender, Anamnese, Fotos und Dokumentation verbunden. So entsteht aus jedem Kassiervorgang ein vollständiges Kundenbild – ohne doppelte Datenpflege und rechtssicher (TSE in Deutschland, RKSV in Österreich)."
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
                                href="/kundenkartei-software"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200"
                            >
                                Kundenkartei ansehen
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vergleich */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Standard-Kasse vs. Treatflow
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Der Unterschied liegt nicht im Kassieren – sondern in dem, was danach passiert.
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-gray-200">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="py-4 px-5 text-sm font-semibold text-gray-900">Funktion</th>
                                    <th className="py-4 px-5 text-sm font-semibold text-gray-500 text-center">Normale Kasse</th>
                                    <th className="py-4 px-5 text-sm font-semibold text-indigo-600 text-center">Treatflow</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonRows.map((row, i) => (
                                    <tr key={row.feature} className={i % 2 === 1 ? 'bg-gray-50/50' : 'bg-white'}>
                                        <td className="py-4 px-5 text-sm text-gray-700">{row.feature}</td>
                                        <td className="py-4 px-5 text-center">
                                            {row.normal
                                                ? <Check className="h-5 w-5 text-green-500 mx-auto" />
                                                : <X className="h-5 w-5 text-gray-300 mx-auto" />}
                                        </td>
                                        <td className="py-4 px-5 text-center">
                                            {row.treatflow
                                                ? <Check className="h-5 w-5 text-indigo-600 mx-auto" />
                                                : <X className="h-5 w-5 text-gray-300 mx-auto" />}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Was verbunden ist */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 break-words hyphens-auto" lang="de">
                            Ein Kassiervorgang, der alles verbindet
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Wenn du aus dem Termin kassierst, fließt der Verkauf automatisch dorthin,
                            wo er hingehört.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {connections.map((c) => (
                            <div key={c.title} className="p-8 rounded-2xl bg-white border border-gray-100">
                                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                                    <c.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{c.text}</p>
                            </div>
                        ))}
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
                            { href: '/kassensystem-kosmetikstudio', t: 'Kassensystem im Detail', d: 'TSE, RKSV & Exporte erklärt' },
                            { href: '/kosmetikstudio-kasse', t: 'Kosmetikstudio Kasse', d: 'Die Kasse im Überblick' },
                            { href: '/kundenkartei-software', t: 'Digitale Kundenkartei', d: 'Kundendaten & Historie' },
                            { href: '/behandlungsdokumentation-kosmetikstudio', t: 'Behandlungsdokumentation', d: 'Behandlungen & Fotos festhalten' },
                            { href: '/terminkalender', t: 'Terminkalender', d: 'Aus dem Termin kassieren' },
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
                            Häufige Fragen
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
                        Mehr als nur kassieren
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und erlebe, wie Kasse und Kundenkartei
                        zusammenarbeiten.
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
