import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, CheckCircle, MessageCircle, Shield, Bell, AlertTriangle } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'WhatsApp Kosmetikstudio: Termine & Regeln',
    description: 'WhatsApp im Kosmetikstudio sinnvoll nutzen: Business-Account, Terminbestätigungen, Grenzen zur Werbung und DSGVO – ohne Chaos im privaten Chat.',
    keywords: [
        'WhatsApp Kosmetikstudio',
        'WhatsApp Business Kosmetik',
        'Terminbestätigung WhatsApp Beauty',
        'WhatsApp Marketing Kosmetikstudio',
        'Kundenkommunikation Kosmetikstudio',
        'DSGVO WhatsApp Studio',
    ],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: {
        canonical: 'https://www.treatflow.io/blog/whatsapp-kosmetikstudio',
    },
    openGraph: {
        title: 'WhatsApp im Kosmetikstudio: Sinnvoll und regelkonform',
        description: 'Business-Account, Terminbestätigungen, Grenzen zur Werbung und DSGVO – ohne Chaos im privaten Chat.',
        url: 'https://www.treatflow.io/blog/whatsapp-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [
            {
                url: '/images/blog/whatsapp-kosmetikstudio.jpg',
                width: 1200,
                height: 630,
                alt: 'WhatsApp Kommunikation im Kosmetikstudio',
            },
        ],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2026-08-05T12:00:00.000Z',
        authors: ['Olcay Elikci'],
        section: 'Organisation',
        tags: ['WhatsApp', 'Kundenkommunikation', 'Terminverwaltung', 'Kosmetikstudio'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'WhatsApp im Kosmetikstudio: Sinnvoll und regelkonform',
        description: 'Business-Account, Terminbestätigungen, Grenzen zur Werbung und DSGVO.',
        images: ['/images/blog/whatsapp-kosmetikstudio.jpg'],
    },
};

export default function BlogPost() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'WhatsApp im Kosmetikstudio: Termine, Regeln und klare Grenzen',
        description:
            'WhatsApp im Kosmetikstudio sinnvoll nutzen: Business-Account, Terminbestätigungen, Grenzen zur Werbung und DSGVO – ohne Chaos im privaten Chat.',
        image: 'https://www.treatflow.io/images/blog/whatsapp-kosmetikstudio.jpg',
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
        datePublished: '2026-08-05T12:00:00.000Z',
        dateModified: '2026-08-05T12:00:00.000Z',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://www.treatflow.io/blog/whatsapp-kosmetikstudio',
        },
        articleSection: 'Organisation',
        keywords: 'WhatsApp Kosmetikstudio, WhatsApp Business, Terminbestätigung',
        wordCount: 2000,
        timeRequired: 'PT9M',
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
                            { label: 'WhatsApp im Kosmetikstudio' },
                        ])
                    ),
                }}
            />
            <Breadcrumbs
                items={[
                    { label: 'Blog', href: '/blog' },
                    { label: 'WhatsApp im Kosmetikstudio' },
                ]}
            />

            <section className="pt-6 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                            Organisation
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        WhatsApp im Kosmetikstudio: Termine, Regeln und klare Grenzen
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Kundinnen schreiben ohnehin per WhatsApp – die Frage ist nur, ob du den Kanal steuerst
                        oder er dich. Mit Business-Account, festen Regeln und guter Software bleibt der Chat
                        hilfreich statt chaotisch.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            5. August 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            9 min Lesezeit
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
                                        <a href="#sinnvoll" className="hover:text-indigo-800 transition-colors">
                                            Wofür WhatsApp geeignet ist
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#business" className="hover:text-indigo-800 transition-colors">
                                            Business statt Privatnummer
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#termine" className="hover:text-indigo-800 transition-colors">
                                            Termine und Erinnerungen
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#dsgvo" className="hover:text-indigo-800 transition-colors">
                                            DSGVO und Einwilligung
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#grenzen" className="hover:text-indigo-800 transition-colors">
                                            Grenzen: Was nicht über WhatsApp läuft
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#setup" className="hover:text-indigo-800 transition-colors">
                                            Sauberes Setup im Alltag
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
                            WhatsApp ist in DACH der Default-Kanal. Viele Studios managen Termine trotzdem noch
                            über die private Handynummer – mit dem Ergebnis: Nachrichten um 22 Uhr, verlorene
                            Buchungen und kein Teamzugriff. Besser: WhatsApp als unterstützenden Kanal nutzen und
                            den Kalender in einer{' '}
                            <Link href="/terminkalender" className="text-indigo-600 hover:text-indigo-800">
                                Terminsoftware
                            </Link>{' '}
                            führen.
                        </p>

                        <h2 id="sinnvoll" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            1. Wofür WhatsApp geeignet ist
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            {[
                                {
                                    icon: MessageCircle,
                                    title: 'Kurze Rückfragen',
                                    desc: '„Darf ich 10 Minuten später kommen?“ – schnelle Klärung ohne Telefonat.',
                                },
                                {
                                    icon: Bell,
                                    title: 'Bestätigungen',
                                    desc: 'Kundinnen bestätigen Termine dort, wo sie eh lesen – ideal als Ergänzung.',
                                },
                                {
                                    icon: Shield,
                                    title: 'Service, nicht Spam',
                                    desc: 'Service-Nachrichten mit Bezug zum Termin sind meist willkommen.',
                                },
                                {
                                    icon: AlertTriangle,
                                    title: 'Nicht als Hauptkalender',
                                    desc: 'Wer nur per Chat bucht, verliert Übersicht, Statistiken und No-Show-Schutz.',
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

                        <h2 id="business" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            2. Business statt Privatnummer
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nutze WhatsApp Business (oder die offizielle Business-API über einen Anbieter) mit
                            Studio-Profil, Öffnungszeiten und Away-Message. Vorteile:
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-8 my-8">
                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Schnellantworten',
                                        desc: 'Vorlagen für „Termin bestätigen“, „Anfahrt“ und „Stornofrist“.',
                                    },
                                    {
                                        title: 'Katalog / Kurzinfo',
                                        desc: 'Leistungen und Preise verlinken – statt lange Textwände tippen.',
                                    },
                                    {
                                        title: 'Trennung Privat/Beruf',
                                        desc: 'Dein Privatleben bleibt privat – und das Team kann ggf. mitarbeiten.',
                                    },
                                    {
                                        title: 'Professioneller Eindruck',
                                        desc: 'Profilbild, Beschreibung und feste Antwortzeiten wirken wie ein Studio, nicht wie Hobby.',
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

                        <h2 id="termine" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            3. Termine und Erinnerungen
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Best Practice: Buchung läuft über{' '}
                            <Link href="/online-buchungen" className="text-indigo-600 hover:text-indigo-800">
                                Online-Buchung
                            </Link>{' '}
                            oder Telefon – WhatsApp bestätigt und erinnert. So vermeidest du Doppelbuchungen.
                            Automatische Erinnerungen per SMS oder E-Mail senken No-Shows zusätzlich; siehe{' '}
                            <Link
                                href="/blog/sms-erinnerungen-termine-kosmetikstudio"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                SMS-Erinnerungen
                            </Link>{' '}
                            und{' '}
                            <Link
                                href="/blog/no-shows-reduzieren-kosmetikstudio"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                No-Shows reduzieren
                            </Link>
                            .
                        </p>
                        <blockquote className="border-l-4 border-indigo-400 bg-indigo-50/50 pl-6 py-4 my-8 text-gray-700 italic">
                            „Hallo [Name], dein Termin am [Datum] um [Uhrzeit] ist bestätigt. Bitte storniere bis
                            [Frist] unter [Link]. Bis bald, [Studio]!“
                        </blockquote>

                        <h2 id="dsgvo" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            4. DSGVO und Einwilligung
                        </h2>
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-6">
                            <p className="m-0 text-amber-900">
                                <strong>Hinweis:</strong> Keine Rechtsberatung. WhatsApp (Meta) speichert Daten
                                außerhalb der EU-Logik vieler Studios – hole Einwilligung ein, dokumentiere sie und
                                nutze WhatsApp nicht als Ablage für sensible Gesundheitsdaten. Mehr Grundlagen:{' '}
                                <Link
                                    href="/blog/dsgvo-datenschutz-kosmetikstudio"
                                    className="text-amber-800 underline hover:text-amber-950"
                                >
                                    DSGVO im Kosmetikstudio
                                </Link>
                                .
                            </p>
                        </div>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                            <li>Einwilligung für WhatsApp-Kontakt in der Anamnese oder beim Check-in abfragen</li>
                            <li>Keine Anamnese-Fotos oder Diagnose-Chats über den Messenger</li>
                            <li>Werbung (Aktionen, Newsletter-Ersatz) nur mit klarer Marketing-Einwilligung</li>
                            <li>Abmeldung respektieren und in der Kundenkartei vermerken</li>
                        </ul>

                        <h2 id="grenzen" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            5. Grenzen: Was nicht über WhatsApp läuft
                        </h2>
                        <div className="space-y-6 my-8">
                            {[
                                {
                                    num: '01',
                                    title: 'Komplette Terminverwaltung',
                                    desc: 'Chats sind kein Kalender. Ohne Software fehlen Konflikterkennung und Auslastung.',
                                },
                                {
                                    num: '02',
                                    title: 'Behandlungsdokumentation',
                                    desc: 'NiSV und Anamnese gehören in die Behandlungsdokumentation, nicht in den Messenger.',
                                },
                                {
                                    num: '03',
                                    title: '24/7-Erreichbarkeit',
                                    desc: 'Away-Message mit Antwortzeiten setzen – sonst brennst du aus.',
                                },
                                {
                                    num: '04',
                                    title: 'Massenwerbung ohne Opt-in',
                                    desc: 'Broadcast-Listen an alle Kontakte sind rechtlich und reputativ riskant.',
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
                            Für NiSV und Anamnese nutze die{' '}
                            <Link href="/behandlungsdokumentation" className="text-indigo-600 hover:text-indigo-800">
                                Behandlungsdokumentation
                            </Link>
                            {' '}statt den Messenger.
                        </p>

                        <h2 id="setup" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            6. Sauberes Setup im Alltag
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Leite Buchungswünsche immer in den Kalender um („Bitte über den Link buchen – dann
                            ist der Slot sicher“). Speichere die Nummer in der{' '}
                            <Link href="/kundenverwaltung" className="text-indigo-600 hover:text-indigo-800">
                                Kundenverwaltung
                            </Link>
                            , nicht nur im Chat. Für Stornos und Ausfallhonorare brauchst du klare Bedingungen –
                            siehe{' '}
                            <Link
                                href="/blog/stornogebuehren-kosmetikstudio"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                Stornogebühren
                            </Link>
                            .
                        </p>

                        <h2 id="fazit" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            7. Fazit
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            WhatsApp ist der ideale Service-Kanal – aber ein schlechter Ersatz für Kalender,
                            Dokumentation und Marketing-Automation. Trenne Privat und Business, hole Einwilligungen
                            ein und halte den Buchungsprozess in der Software. Dann bleibt der Chat schnell und
                            freundlich, ohne dein Studio zu übernehmen.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 my-12 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Kalender statt Chat-Chaos</h3>
                            <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
                                Online-Buchung, Erinnerungen und Kundenkartei in einer App – 14 Tage kostenlos
                                testen.
                            </p>
                            <a
                                href="https://app.treatflow.io/auth/register?lang=de"
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
                            href="/blog/no-shows-reduzieren-kosmetikstudio"
                            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                        >
                            <span className="text-sm text-indigo-600 font-medium">Automatisierung</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">No-Shows reduzieren</h3>
                            <p className="text-gray-600 text-sm mt-2">Erinnerungen und Prozesse, die wirken.</p>
                        </Link>
                        <Link
                            href="/blog/nachrichtenautomatisierung-kosmetikstudio"
                            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                        >
                            <span className="text-sm text-indigo-600 font-medium">Automatisierung</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">
                                Nachrichtenautomatisierung
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">Weniger Tippen, mehr gebuchte Termine.</p>
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
                                href: '/terminkalender',
                                title: 'Terminkalender',
                                desc: 'Übersicht statt Chat-Buchungen',
                            },
                            {
                                href: '/online-buchungen',
                                title: 'Online-Buchungen',
                                desc: 'Kundinnen buchen selbst 24/7',
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
