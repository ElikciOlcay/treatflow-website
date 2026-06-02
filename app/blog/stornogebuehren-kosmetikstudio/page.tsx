import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, CheckCircle, FileSignature, Scale, Clock3, ShieldCheck } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Stornogebühren Kosmetikstudio: Rechtssicher umsetzen',
    description: 'Stornogebühren im Kosmetikstudio rechtssicher einführen: Wann ein Ausfallhonorar erlaubt ist, sinnvolle Fristen und Höhe sowie eine klare Vorlage für deine Stornobedingungen.',
    keywords: [
        'Stornogebühren Kosmetikstudio',
        'Ausfallhonorar Kosmetik',
        'Terminausfall Gebühr Kosmetikstudio',
        'Stornierungsbedingungen Kosmetik',
        'No-Show Gebühr Kosmetikstudio',
        'Stornofrist Kosmetikstudio',
    ],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: {
        canonical: 'https://www.treatflow.io/blog/stornogebuehren-kosmetikstudio',
    },
    openGraph: {
        title: 'Stornogebühren im Kosmetikstudio rechtssicher einführen',
        description: 'Wann ein Ausfallhonorar erlaubt ist, sinnvolle Fristen und Höhe sowie eine klare Vorlage für deine Stornobedingungen.',
        url: 'https://www.treatflow.io/blog/stornogebuehren-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [
            {
                url: '/images/blog/no-shows-reduzieren.jpg',
                width: 1200,
                height: 630,
                alt: 'Stornogebühren im Kosmetikstudio',
            },
        ],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2026-06-01T10:00:00.000Z',
        authors: ['Olcay Elikci'],
        section: 'Recht & Compliance',
        tags: ['Stornogebühren', 'Ausfallhonorar', 'Recht', 'Kosmetikstudio'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Stornogebühren im Kosmetikstudio rechtssicher einführen',
        description: 'Wann ein Ausfallhonorar erlaubt ist, sinnvolle Fristen und Höhe sowie eine klare Vorlage für deine Stornobedingungen.',
        images: ['/images/blog/no-shows-reduzieren.jpg'],
    },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Stornogebühren im Kosmetikstudio: So führst du ein Ausfallhonorar rechtssicher ein",
        "description": "Stornogebühren im Kosmetikstudio rechtssicher einführen: Wann ein Ausfallhonorar erlaubt ist, sinnvolle Fristen und Höhe sowie eine klare Vorlage für deine Stornobedingungen.",
        "image": "https://www.treatflow.io/images/blog/no-shows-reduzieren.jpg",
        "author": {
            "@type": "Person",
            "name": "Olcay Elikci",
            "url": "https://www.treatflow.io/ueber-uns",
            "jobTitle": "Gründer von Treatflow",
            "worksFor": {
                "@type": "Organization",
                "name": "Treatflow"
            }
        },
        "publisher": {
            "@type": "Organization",
            "name": "Treatflow",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.treatflow.io/images/logos/treatflow-logo.svg"
            }
        },
        "datePublished": "2026-06-01T10:00:00.000Z",
        "dateModified": "2026-06-01T10:00:00.000Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.treatflow.io/blog/stornogebuehren-kosmetikstudio"
        },
        "articleSection": "Recht & Compliance",
        "keywords": "Stornogebühren Kosmetikstudio, Ausfallhonorar Kosmetik, Terminausfall Gebühr Kosmetikstudio",
        "wordCount": 2300,
        "timeRequired": "PT9M",
        "inLanguage": "de-DE",
        "isAccessibleForFree": true
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Blog', href: '/blog' },
                    { label: 'Stornogebühren Kosmetikstudio: Rechtssicher umsetzen' },
                ])) }}
            />
            <Breadcrumbs items={[
                { label: 'Blog', href: '/blog' },
                { label: 'Stornogebühren Kosmetikstudio: Rechtssicher umsetzen' },
            ]} />
            {/* Hero */}
            <section className="pt-6 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-6">
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                            Recht & Compliance
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Stornogebühren im Kosmetikstudio: So führst du ein Ausfallhonorar rechtssicher ein
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Kurzfristige Absagen und Nichterscheinen kosten dich bares Geld. Mit klar kommunizierten
                        Stornobedingungen kannst du ein Ausfallhonorar verlangen, ohne deine Kundinnen zu verärgern -
                        wenn du ein paar rechtliche Grundregeln beachtest.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            1. Juni 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            9 min Lesezeit
                        </span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">

                        {/* Inhaltsverzeichnis */}
                        <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">Inhaltsverzeichnis</h2>
                            <nav>
                                <ol className="space-y-2 list-decimal list-inside text-indigo-600">
                                    <li><a href="#erlaubt" className="hover:text-indigo-800 transition-colors">Darf ein Kosmetikstudio Stornogebühren verlangen?</a></li>
                                    <li><a href="#voraussetzungen" className="hover:text-indigo-800 transition-colors">Die 3 Voraussetzungen</a></li>
                                    <li><a href="#fristen" className="hover:text-indigo-800 transition-colors">Sinnvolle Fristen und Höhe</a></li>
                                    <li><a href="#vorlage" className="hover:text-indigo-800 transition-colors">Vorlage für deine Stornobedingungen</a></li>
                                    <li><a href="#vermeiden" className="hover:text-indigo-800 transition-colors">Ausfälle vermeiden statt kassieren</a></li>
                                    <li><a href="#faq" className="hover:text-indigo-800 transition-colors">Häufige Fragen</a></li>
                                    <li><a href="#fazit" className="hover:text-indigo-800 transition-colors">Fazit und Empfehlung</a></li>
                                </ol>
                            </nav>
                        </div>

                        {/* Hinweis */}
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
                            <p className="m-0 text-amber-900">
                                <strong>Hinweis:</strong> Dieser Artikel ist eine praxisorientierte Orientierung, keine
                                Rechtsberatung. Für rechtsverbindliche Stornobedingungen lass deine AGB im Zweifel kurz von
                                einer Anwältin oder einem Anwalt prüfen.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Ein leerer Behandlungsstuhl, der eigentlich gebucht war, ist verlorener Umsatz, den du nicht
                            zurückholst. Viele Studios trauen sich trotzdem nicht, ein Ausfallhonorar zu verlangen - aus Sorge,
                            Kundinnen zu vergraulen. Dabei sind Stornogebühren völlig legitim, wenn sie fair, transparent und
                            vorher akzeptiert sind. So setzt du sie richtig um.
                        </p>

                        {/* Section 1 */}
                        <h2 id="erlaubt" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            1. Darf ein Kosmetikstudio Stornogebühren verlangen?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ja. Wenn eine Kundin einen verbindlichen Termin bucht, kommt ein Dienstvertrag zustande. Erscheint
                            sie nicht oder sagt sie so kurzfristig ab, dass du den Termin nicht mehr anderweitig vergeben kannst,
                            darfst du grundsätzlich ein Ausfallhonorar verlangen. Wichtig ist der Unterschied zwischen einer
                            pauschalen „Strafe“ - die rechtlich problematisch ist - und einem nachvollziehbaren Ersatz für deinen
                            tatsächlichen Schaden.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Du musst dir dabei anrechnen lassen, was du dir durch den Ausfall ersparst (z. B. nicht verbrauchtes
                            Material) oder anderweitig verdienst (z. B. wenn der Slot doch noch gebucht wird). Deshalb ist eine
                            moderate, gut begründete Gebühr deutlich belastbarer als ein pauschaler Maximalbetrag.
                        </p>

                        {/* Section 2 */}
                        <h2 id="voraussetzungen" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            2. Die 3 Voraussetzungen
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Eine Stornogebühr ist nur durchsetzbar, wenn deine Kundin sie vorher kannte und akzeptiert hat. Diese
                            drei Bausteine solltest du immer erfüllen:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            {[
                                { icon: FileSignature, title: 'Klare Stornobedingungen', desc: 'Deine Konditionen müssen vor der Buchung sichtbar und verständlich sein - nicht erst auf der Rechnung.' },
                                { icon: CheckCircle, title: 'Aktive Zustimmung', desc: 'Die Kundin akzeptiert die Bedingungen aktiv bei der Buchung, z. B. per Häkchen im Buchungsprozess.' },
                                { icon: ShieldCheck, title: 'Buchungsbestätigung', desc: 'Eine verbindliche Bestätigung mit Termin, Frist und Konditionen dokumentiert die Vereinbarung.' },
                                { icon: Scale, title: 'Angemessenheit', desc: 'Höhe und Frist müssen in einem fairen Verhältnis zur Behandlung stehen, sonst sind sie angreifbar.' },
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

                        <p className="text-gray-700 leading-relaxed">
                            Genau hier hilft ein digitaler Buchungsprozess: Bei der{' '}
                            <Link href="/online-buchungen" className="text-indigo-600 hover:text-indigo-800">Online-Buchung</Link>{' '}
                            stimmt die Kundin den Bedingungen aktiv zu, und du hast die Zustimmung jederzeit dokumentiert. Das ist
                            im Streitfall deutlich belastbarer als eine mündliche Absprache am Telefon.
                        </p>

                        {/* Section 3 */}
                        <h2 id="fristen" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            3. Sinnvolle Fristen und Höhe
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Es gibt keine gesetzlich fixe Frist oder Höhe - entscheidend ist Angemessenheit. In der Praxis haben
                            sich folgende Eckwerte bewährt:
                        </p>

                        <div className="bg-gray-50 rounded-2xl p-8 my-8">
                            <div className="space-y-4">
                                {[
                                    { title: 'Kostenlose Stornofrist', desc: 'Stornierung bis 24 oder 48 Stunden vor dem Termin ohne Gebühr.' },
                                    { title: 'Späte Absage', desc: 'Bei Absage innerhalb der Frist ein anteiliges Ausfallhonorar, z. B. 50 % des Behandlungspreises.' },
                                    { title: 'Nichterscheinen ohne Absage', desc: 'Bei einem kompletten No-Show bis zu 100 % des Behandlungspreises.' },
                                    { title: 'Längere Frist bei großen Behandlungen', desc: 'Je aufwändiger und länger die Behandlung, desto eher sind höhere Gebühren und längere Fristen gerechtfertigt.' },
                                    { title: 'Kulanz bei Notfällen', desc: 'Bei nachweisbaren Notfällen wie Krankheit oder Unfall lohnt sich Kulanz für die langfristige Bindung.' },
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
                            Je teurer und zeitintensiver eine Behandlung ist, desto eher ist auch eine höhere Gebühr und eine
                            längere Frist gerechtfertigt. Für eine 20-minütige Express-Behandlung wirkt eine 48-Stunden-Frist
                            dagegen schnell unverhältnismäßig.
                        </p>

                        {/* Section 4 */}
                        <h2 id="vorlage" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            4. Vorlage für deine Stornobedingungen
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Eine einfache, transparente Formulierung reicht in den meisten Fällen vollkommen aus. Als
                            Ausgangspunkt:
                        </p>

                        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 my-8">
                            <div className="flex items-start gap-4">
                                <Clock3 className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-1" />
                                <p className="m-0 italic text-gray-700">
                                    „Termine kannst du bis 48 Stunden vorher kostenlos stornieren oder verschieben. Bei späteren
                                    Absagen berechnen wir 50 % des Behandlungspreises, bei Nichterscheinen ohne Absage den vollen
                                    Betrag. In begründeten Notfällen finden wir gemeinsam eine faire Lösung.“
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            Passe die Fristen und Prozentsätze an dein Leistungsangebot an und mach die Bedingungen an allen
                            relevanten Stellen sichtbar: im Buchungsprozess, in der Bestätigungs-Mail und idealerweise als Aushang
                            im Studio.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Wenn du für die Buchung Zahlungsdaten oder eine Kartenhinterlegung verlangst, gelten erhöhte
                            Anforderungen an Transparenz und Datensicherheit. Halte dich an den Grundsatz der Datensparsamkeit -
                            mehr dazu im Beitrag zur{' '}
                            <Link href="/blog/dsgvo-datenschutz-kosmetikstudio" className="text-indigo-600 hover:text-indigo-800">DSGVO im Kosmetikstudio</Link>.
                        </p>

                        {/* Section 5 */}
                        <h2 id="vermeiden" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            5. Ausfälle vermeiden statt kassieren
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Eine Stornogebühr ist die Absicherung - die eigentliche Lösung ist, Ausfälle gar nicht erst entstehen
                            zu lassen. Die wirksamsten Hebel:
                        </p>

                        <div className="space-y-6 my-8">
                            {[
                                { num: '01', title: 'Automatische Erinnerungen', desc: 'Erinnerungen 24 Stunden vorher und am Behandlungstag halten den Termin präsent und senken No-Shows deutlich.' },
                                { num: '02', title: 'Einfaches Umbuchen', desc: 'Wer unkompliziert verschieben kann, sagt seltener komplett ab - der Slot bleibt im Kalender.' },
                                { num: '03', title: 'Klare Buchungsbestätigung', desc: 'Mit Datum, Uhrzeit und Stornofrist gibt es keine Missverständnisse über die Konditionen.' },
                                { num: '04', title: 'Freundlicher Ton', desc: 'Sprich von „Stornobedingungen“ statt von „Strafgebühr“ - das wirkt professionell statt abschreckend.' },
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
                            Wie du mit Erinnerungen und Automatisierung die Ausfallquote senkst, liest du im Detail in unseren
                            Beiträgen zu{' '}
                            <Link href="/blog/no-shows-reduzieren-kosmetikstudio" className="text-indigo-600 hover:text-indigo-800">No-Shows reduzieren</Link>{' '}
                            und zur{' '}
                            <Link href="/nachrichtenautomatisierung" className="text-indigo-600 hover:text-indigo-800">Nachrichtenautomatisierung</Link>.
                        </p>

                        {/* Section 6 - FAQ */}
                        <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            6. Häufige Fragen
                        </h2>

                        <div className="space-y-6 my-8">
                            {[
                                { q: 'Muss die Kundin die Gebühr im Voraus zahlen?', a: 'Nein, das ist keine Pflicht. Du kannst die Gebühr auch nachträglich in Rechnung stellen. Eine Anzahlung oder hinterlegte Karte reduziert allerdings das Risiko, dass die Forderung am Ende offen bleibt.' },
                                { q: 'Was ist bei Krankheit der Kundin?', a: 'Rechtlich entbindet Krankheit nicht automatisch von der Gebühr, da das Risiko der Verhinderung grundsätzlich bei der Kundin liegt. In der Praxis lohnt sich aber Kulanz - das ist fast immer besser für die langfristige Kundenbindung.' },
                                { q: 'Kann ich die Gebühr ohne akzeptierte AGB durchsetzen?', a: 'Schwierig. Ohne nachweisbare Zustimmung zu deinen Bedingungen stehst du im Streitfall deutlich schlechter da. Ein digitaler Buchungsprozess mit dokumentierter Zustimmung ist hier dein bester Freund.' },
                            ].map((item, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                                    <p className="text-gray-600 m-0">{item.a}</p>
                                </div>
                            ))}
                        </div>

                        {/* Section 7 */}
                        <h2 id="fazit" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            7. Fazit und Empfehlung
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Stornogebühren sind legitim, wenn sie angemessen, transparent und vorher akzeptiert sind. Kombiniere
                            klare Stornobedingungen mit automatischen Erinnerungen und einer einfachen Umbuchungsmöglichkeit - so
                            schützt du deinen Umsatz, ohne das Vertrauen deiner Kundinnen zu verlieren.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Mit Treatflow akzeptieren deine Kundinnen die Stornobedingungen direkt bei der Online-Buchung, und
                            automatische Erinnerungen sorgen dafür, dass es im Idealfall gar nicht erst zum Ausfall kommt.
                        </p>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 my-12 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Weniger Ausfälle mit Treatflow
                            </h3>
                            <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
                                Online-Buchung mit akzeptierten Stornobedingungen und automatische Erinnerungen - teste alle
                                Funktionen 14 Tage kostenlos, ohne Kreditkarte.
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

            {/* Related Articles */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Weiterlesen</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link href="/blog/no-shows-reduzieren-kosmetikstudio" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <span className="text-sm text-indigo-600 font-medium">Automatisierung</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">No-Shows im Kosmetikstudio reduzieren</h3>
                            <p className="text-gray-600 text-sm mt-2">Was wirklich hilft, damit Termine nicht ausfallen.</p>
                        </Link>
                        <Link href="/blog/dsgvo-datenschutz-kosmetikstudio" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <span className="text-sm text-indigo-600 font-medium">Recht & Compliance</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">DSGVO im Kosmetikstudio</h3>
                            <p className="text-gray-600 text-sm mt-2">Datenschutz ohne Panik - was du speichern darfst.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Verwandte Seiten */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Passende Funktionen für dein Studio</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { href: '/online-buchungen', title: 'Online-Buchungen', desc: 'Buchung mit akzeptierten Stornobedingungen' },
                            { href: '/nachrichtenautomatisierung', title: 'Nachrichtenautomatisierung', desc: 'Automatische Erinnerungen gegen No-Shows' },
                        ].map((link, i) => (
                            <Link key={i} href={link.href} className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
                                <div>
                                    <span className="font-semibold text-gray-900 group-hover:text-indigo-600 block">{link.title}</span>
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
