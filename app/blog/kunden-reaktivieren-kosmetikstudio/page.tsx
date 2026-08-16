import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, CheckCircle, Users, Mail, Gift, RefreshCw } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Kunden reaktivieren Kosmetikstudio: So holst du sie zurück',
    description: 'Inaktive Kundinnen im Kosmetikstudio reaktivieren: Segmentierung, Timing, Vorlagen für E-Mail und SMS sowie Angebote, die ohne Dumping wieder Termine bringen.',
    keywords: [
        'Kunden reaktivieren Kosmetikstudio',
        'inaktive Kunden zurückgewinnen Beauty',
        'Kundenrückgewinnung Kosmetik',
        'Stammkunden reaktivieren',
        'Win-back Kampagne Kosmetikstudio',
        'Kundenbindung Kosmetikstudio',
    ],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: {
        canonical: 'https://www.treatflow.io/blog/kunden-reaktivieren-kosmetikstudio',
    },
    openGraph: {
        title: 'Kunden reaktivieren: Inaktive zurück ins Studio holen',
        description: 'Segmentierung, Timing und Vorlagen für E-Mail und SMS – ohne Dumping-Preise.',
        url: 'https://www.treatflow.io/blog/kunden-reaktivieren-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [
            {
                url: '/images/blog/kunden-reaktivieren-kosmetikstudio.jpg',
                width: 1200,
                height: 630,
                alt: 'Kunden reaktivieren im Kosmetikstudio',
            },
        ],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2026-08-05T11:00:00.000Z',
        authors: ['Olcay Elikci'],
        section: 'Kundenbindung',
        tags: ['Kundenreaktivierung', 'Win-back', 'Marketing', 'Kosmetikstudio'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kunden reaktivieren: Inaktive zurück ins Studio holen',
        description: 'Segmentierung, Timing und Vorlagen für E-Mail und SMS – ohne Dumping-Preise.',
        images: ['/images/blog/kunden-reaktivieren-kosmetikstudio.jpg'],
    },
};

export default function BlogPost() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Kunden reaktivieren im Kosmetikstudio: So holst du inaktive zurück',
        description:
            'Inaktive Kundinnen im Kosmetikstudio reaktivieren: Segmentierung, Timing, Vorlagen für E-Mail und SMS sowie Angebote, die ohne Dumping wieder Termine bringen.',
        image: 'https://www.treatflow.io/images/blog/kunden-reaktivieren-kosmetikstudio.jpg',
        author: {
            '@type': 'Person',
            name: 'Olcay Elikci',
            url: 'https://www.treatflow.io/ueber-uns',
            jobTitle: 'Gründer von Treatflow',
            worksFor: { '@type': 'Organization', name: 'Treatflow' },
        },
        publisher: {
            '@type': 'Organization',
            name: 'Treatflow',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.treatflow.io/images/logos/treatflow-logo.svg',
            },
        },
        datePublished: '2026-08-05T11:00:00.000Z',
        dateModified: '2026-08-05T11:00:00.000Z',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://www.treatflow.io/blog/kunden-reaktivieren-kosmetikstudio',
        },
        articleSection: 'Kundenbindung',
        keywords: 'Kunden reaktivieren Kosmetikstudio, Kundenrückgewinnung, Win-back',
        wordCount: 2200,
        timeRequired: 'PT10M',
        inLanguage: 'de-DE',
        isAccessibleForFree: true,
    };

    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Navigation />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Blog', href: '/blog' },
                            { label: 'Kunden reaktivieren Kosmetikstudio' },
                        ])
                    ),
                }}
            />
            <Breadcrumbs
                items={[
                    { label: 'Blog', href: '/blog' },
                    { label: 'Kunden reaktivieren Kosmetikstudio' },
                ]}
            />

            <section className="pt-6 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                            Kundenbindung
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Kunden reaktivieren im Kosmetikstudio: So holst du inaktive zurück
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Neue Kundinnen zu gewinnen kostet oft mehr als bestehende zurückzuholen. Mit klarer
                        Segmentierung und persönlichen Botschaften füllst du Lücken im Kalender – ohne Rabatt-Chaos.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            5. August 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            10 min Lesezeit
                        </span>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">Inhaltsverzeichnis</h2>
                            <nav>
                                <ol className="space-y-2 list-decimal list-inside text-indigo-600">
                                    <li>
                                        <a href="#warum" className="hover:text-indigo-800 transition-colors">
                                            Warum Reaktivierung lohnt
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#segmentieren" className="hover:text-indigo-800 transition-colors">
                                            Inaktive richtig segmentieren
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#timing" className="hover:text-indigo-800 transition-colors">
                                            Timing und Kanäle
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#vorlagen" className="hover:text-indigo-800 transition-colors">
                                            Text-Vorlagen
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#angebote" className="hover:text-indigo-800 transition-colors">
                                            Angebote ohne Dumping
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#prozess" className="hover:text-indigo-800 transition-colors">
                                            Prozess in der Software
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#fazit" className="hover:text-indigo-800 transition-colors">
                                            Fazit
                                        </a>
                                    </li>
                                </ol>
                            </nav>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            In jeder Kundenkartei schlummern Kontakte, die vor 4, 6 oder 12 Monaten zuletzt da
                            waren. Viele Studios jagen nur Neukunden – dabei ist die Rückholquote oft höher und
                            günstiger. Voraussetzung: Du weißt, wer fehlt, und sprichst sie persönlich an. Grundlage
                            dafür ist eine gepflegte{' '}
                            <Link href="/kundenkartei-software" className="text-indigo-600 hover:text-indigo-800">
                                digitale Kundenkartei
                            </Link>
                            .
                        </p>

                        <h2 id="warum" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            1. Warum Reaktivierung lohnt
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            {[
                                {
                                    icon: Users,
                                    title: 'Bekannte Gesichter',
                                    desc: 'Sie kennen dein Studio, deine Preise und den Weg zu dir – die Hürde ist niedriger.',
                                },
                                {
                                    icon: RefreshCw,
                                    title: 'Schneller Umsatz',
                                    desc: 'Ein guter Win-back-Lauf füllt freie Slots in der nächsten Woche, nicht erst in Monaten.',
                                },
                                {
                                    icon: Mail,
                                    title: 'Günstiger Kanal',
                                    desc: 'E-Mail und SMS kosten bruchteile von Ads – wenn Einwilligung und Daten stimmen.',
                                },
                                {
                                    icon: Gift,
                                    title: 'Beziehung retten',
                                    desc: 'Oft war nur der Alltag im Weg – ein Reminder reicht, statt einer teuren Neukampagne.',
                                },
                            ].map((item, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                            <item.icon className="h-5 w-5 text-indigo-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h2 id="segmentieren" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            2. Inaktive richtig segmentieren
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            „Alle, die länger nicht da waren“ ist zu grob. Trenne zumindest:
                        </p>
                        <div className="my-8 overflow-hidden rounded-2xl border border-gray-200">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="text-left p-4 font-semibold text-gray-900">Segment</th>
                                        <th className="text-left p-4 font-semibold text-gray-900">Definition</th>
                                        <th className="text-left p-4 font-semibold text-gray-900">Ton</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ['Schlafend', '3–6 Monate ohne Termin', 'Freundlicher Reminder'],
                                        ['Risiko', '6–12 Monate', 'Persönlich + kleiner Anreiz'],
                                        ['Verloren', '12+ Monate', 'Kurzer Check-in, kein Druck'],
                                        ['VIP-inaktiv', 'Früher Top-Umsatz, jetzt weg', 'Persönlicher Anruf'],
                                    ].map(([seg, def, ton], index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className="p-4 text-gray-900 font-medium">{seg}</td>
                                            <td className="p-4 text-gray-600">{def}</td>
                                            <td className="p-4 text-gray-600">{ton}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Filtere zusätzlich nach Behandlungstyp (z. B. nur Lashes oder nur Anti-Aging) – dann
                            wirkt die Nachricht relevant statt generisch.
                        </p>

                        <h2 id="timing" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            3. Timing und Kanäle
                        </h2>
                        <div className="bg-gray-50 rounded-2xl p-8 my-8">
                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'E-Mail zuerst',
                                        desc: 'Günstig, ausführlicher Text möglich, gut für DSGVO-Einwilligungen.',
                                    },
                                    {
                                        title: 'SMS als Nachzug',
                                        desc: 'Kurz und direkt – ideal 5–7 Tage nach der E-Mail, wenn keine Reaktion kam.',
                                    },
                                    {
                                        title: 'Anruf bei VIPs',
                                        desc: 'Bei früherer Stammkundschaft wirkt ein persönlicher Anruf oft besser als Rabatt.',
                                    },
                                    {
                                        title: 'Nicht zu oft',
                                        desc: 'Max. 2–3 Kontaktversuche pro Kampagne, dann Pause – Spam zerstört Vertrauen.',
                                    },
                                ].map((feature, index) => (
                                    <div key={index} className="flex gap-4">
                                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                                            <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Mehr zur Automatisierung findest du unter{' '}
                            <Link
                                href="/blog/email-marketing-kosmetikstudios"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                E-Mail-Marketing für Kosmetikstudios
                            </Link>{' '}
                            und{' '}
                            <Link
                                href="/blog/sms-erinnerungen-termine-kosmetikstudio"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                SMS-Erinnerungen
                            </Link>
                            .
                        </p>

                        <h2 id="vorlagen" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            4. Text-Vorlagen
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>E-Mail (Schlafend, 3–6 Monate):</strong>
                        </p>
                        <blockquote className="border-l-4 border-indigo-400 bg-indigo-50/50 pl-6 py-4 my-4 text-gray-700 italic">
                            „Hallo [Name], wir haben dich eine Weile nicht gesehen und wollten kurz nachfragen:
                            Passt alles? Wenn du Lust auf deine nächste [Behandlung] hast, findest du hier freie
                            Termine – oder antworte einfach auf diese Mail.“
                        </blockquote>
                        <p className="text-gray-700 leading-relaxed mb-4 mt-8">
                            <strong>SMS (kurz):</strong>
                        </p>
                        <blockquote className="border-l-4 border-indigo-400 bg-indigo-50/50 pl-6 py-4 my-4 text-gray-700 italic">
                            „Hi [Name], vermisst im Studio! Freie Termine diese Woche: [Link]. Liebe Grüße, [Studio]“
                        </blockquote>
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-6">
                            <p className="m-0 text-amber-900">
                                <strong>Wichtig:</strong> Nur mit Einwilligung und Abmeldemöglichkeit mailen oder
                                SMS senden. Details im Beitrag zur{' '}
                                <Link
                                    href="/blog/dsgvo-datenschutz-kosmetikstudio"
                                    className="text-amber-800 underline hover:text-amber-950"
                                >
                                    DSGVO im Kosmetikstudio
                                </Link>
                                .
                            </p>
                        </div>

                        <h2 id="angebote" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            5. Angebote ohne Dumping
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Dauerhafte 30 %-Rabatte trainieren Kundinnen darauf, nur bei Aktionen zu kommen. Besser:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                            <li>Kostenloses Hautanalyse-Update oder kurze Beratung vor der Behandlung</li>
                            <li>Kleines Produktmuster statt Preisnachlass</li>
                            <li>Bevorzugte Terminzeiten in ruhigen Slots</li>
                            <li>Einmaliges „Willkommen zurück“-Upgrade (z. B. längere Maske)</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            Mehr Ideen zur Bindung:{' '}
                            <Link
                                href="/blog/kundenbindung-kosmetikstudio-5-strategien"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                5 Strategien zur Kundenbindung
                            </Link>
                            .
                        </p>

                        <h2 id="prozess" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            6. Prozess in der Software
                        </h2>
                        <div className="space-y-6 my-8">
                            {[
                                {
                                    num: '01',
                                    title: 'Filter setzen',
                                    desc: 'Letzter Besuch älter als X Tage, Einwilligung vorhanden, keine offenen Konflikte.',
                                },
                                {
                                    num: '02',
                                    title: 'Liste exportieren oder Kampagne starten',
                                    desc: 'Segment speichern, damit du nächstes Quartal denselben Lauf wiederholst.',
                                },
                                {
                                    num: '03',
                                    title: 'Buchungslink mitschicken',
                                    desc: 'Je weniger Klicks bis zum Termin, desto höher die Rücklaufquote.',
                                },
                                {
                                    num: '04',
                                    title: 'Ergebnis notieren',
                                    desc: 'Wer gebucht hat, wer abgelehnt hat – so lernst du, welches Segment sich lohnt.',
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex gap-5 p-6 bg-white rounded-xl border border-gray-200">
                                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                        <span className="text-indigo-600 font-bold text-sm">{item.num}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Mit Treatflow siehst du den letzten Besuch in der{' '}
                            <Link href="/kundenverwaltung" className="text-indigo-600 hover:text-indigo-800">
                                Kundenverwaltung
                            </Link>{' '}
                            und verknüpfst Buchungen direkt mit der Historie.
                        </p>

                        <h2 id="fazit" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            7. Fazit
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Reaktivierung ist planbare Auslastung: Segmentieren, persönlich schreiben, sinnvoll
                            incentivieren und messen. Einmal pro Quartal reicht oft, um den Kalender spürbar zu
                            füllen – ohne dass du ständig neue Ads schalten musst.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 my-12 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Inaktive Kundinnen im Blick</h3>
                            <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
                                Halte Besuchshistorie und Kontakte zentral – teste Treatflow 14 Tage kostenlos.
                            </p>
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                            >
                                Jetzt kostenlos starten
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Weiterlesen</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link
                            href="/blog/kundenbindung-kosmetikstudio-5-strategien"
                            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                        >
                            <span className="text-sm text-indigo-600 font-medium">Kundenbindung</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">
                                5 Strategien zur Kundenbindung
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">Damit Kundinnen erst gar nicht abwandern.</p>
                        </Link>
                        <Link
                            href="/blog/email-marketing-kosmetikstudios"
                            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                        >
                            <span className="text-sm text-indigo-600 font-medium">Marketing</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">
                                E-Mail-Marketing für Kosmetikstudios
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">Kampagnen, die Termine bringen.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Passende Funktionen für dein Studio</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            {
                                href: '/kundenverwaltung',
                                title: 'Kundenverwaltung',
                                desc: 'Historie und Kontakte an einem Ort',
                            },
                            {
                                href: '/online-buchungen',
                                title: 'Online-Buchungen',
                                desc: 'Direkt aus der Kampagne buchbar',
                            },
                        ].map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all"
                            >
                                <div>
                                    <span className="font-semibold text-gray-900 group-hover:text-indigo-600 block">
                                        {link.title}
                                    </span>
                                    <span className="text-sm text-gray-500">{link.desc}</span>
                                </div>
                                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 flex-shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
