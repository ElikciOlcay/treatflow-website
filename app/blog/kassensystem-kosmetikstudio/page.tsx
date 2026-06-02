import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, CheckCircle, Shield, Receipt, FileText, Smartphone } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Kassensystem Kosmetikstudio: TSE-Pflicht & Auswahl',
    description: 'Kassensystem für dein Kosmetikstudio: Was TSE-Pflicht, GoBD und Belegausgabepflicht bedeuten, offene Ladenkasse vs. elektronische Kasse und worauf du bei der Auswahl achten solltest.',
    keywords: [
        'Kassensystem Kosmetikstudio',
        'Kasse Kosmetikstudio TSE',
        'GoBD Kosmetikstudio',
        'Kassensystem Beauty Salon',
        'offene Ladenkasse Kosmetik',
        'Belegausgabepflicht Kosmetikstudio',
    ],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: {
        canonical: 'https://www.treatflow.io/blog/kassensystem-kosmetikstudio',
    },
    openGraph: {
        title: 'Kassensystem für Kosmetikstudios: TSE-Pflicht, GoBD & Auswahl',
        description: 'Was du zu TSE-Pflicht, GoBD und Belegausgabe wissen musst und worauf du bei der Auswahl eines Kassensystems für dein Kosmetikstudio achten solltest.',
        url: 'https://www.treatflow.io/blog/kassensystem-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [
            {
                url: '/images/blog/kosmetikstudio-buchhaltung.jpg',
                width: 1200,
                height: 630,
                alt: 'Kassensystem für Kosmetikstudios',
            },
        ],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2026-06-02T11:00:00.000Z',
        authors: ['Olcay Elikci'],
        section: 'Business',
        tags: ['Kassensystem', 'TSE', 'GoBD', 'Kosmetikstudio Buchhaltung'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kassensystem für Kosmetikstudios: TSE-Pflicht, GoBD & Auswahl',
        description: 'Was du zu TSE, GoBD und Belegausgabe wissen musst und worauf du bei der Auswahl eines Kassensystems achten solltest.',
        images: ['/images/blog/kosmetikstudio-buchhaltung.jpg'],
    },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Kassensystem für Kosmetikstudios: TSE-Pflicht, GoBD und die richtige Auswahl",
        "description": "Kassensystem für dein Kosmetikstudio: Was TSE-Pflicht, GoBD und Belegausgabepflicht bedeuten, offene Ladenkasse vs. elektronische Kasse und worauf du bei der Auswahl achten solltest.",
        "image": "https://www.treatflow.io/images/blog/kosmetikstudio-buchhaltung.jpg",
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
        "datePublished": "2026-06-02T11:00:00.000Z",
        "dateModified": "2026-06-02T11:00:00.000Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.treatflow.io/blog/kassensystem-kosmetikstudio"
        },
        "articleSection": "Business",
        "keywords": "Kassensystem Kosmetikstudio, Kasse Kosmetikstudio TSE, GoBD Kosmetikstudio",
        "wordCount": 2500,
        "timeRequired": "PT11M",
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
                    { label: 'Kassensystem Kosmetikstudio: TSE-Pflicht & Auswahl' },
                ])) }}
            />
            <Breadcrumbs items={[
                { label: 'Blog', href: '/blog' },
                { label: 'Kassensystem Kosmetikstudio: TSE-Pflicht & Auswahl' },
            ]} />
            {/* Hero */}
            <section className="pt-6 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-6">
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                            Business
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Kassensystem für Kosmetikstudios: TSE-Pflicht, GoBD und die richtige Auswahl
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Brauchst du als Kosmetikstudio überhaupt ein elektronisches Kassensystem? Und was bedeuten TSE,
                        GoBD und Belegausgabepflicht für dich? Dieser Leitfaden bringt Klarheit - praxisnah und ohne
                        Fachchinesisch.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            2. Juni 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            11 min Lesezeit
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
                                    <li><a href="#brauche-ich" className="hover:text-indigo-800 transition-colors">Brauchst du ein Kassensystem?</a></li>
                                    <li><a href="#pflichten" className="hover:text-indigo-800 transition-colors">Rechtliche Pflichten: TSE, GoBD & Beleg</a></li>
                                    <li><a href="#funktionen" className="hover:text-indigo-800 transition-colors">Welche Funktionen wichtig sind</a></li>
                                    <li><a href="#vergleich" className="hover:text-indigo-800 transition-colors">Offene Ladenkasse vs. elektronische Kasse</a></li>
                                    <li><a href="#kriterien" className="hover:text-indigo-800 transition-colors">7 Kriterien für die Auswahl</a></li>
                                    <li><a href="#zusammenspiel" className="hover:text-indigo-800 transition-colors">Kasse und Studio-Software verbinden</a></li>
                                    <li><a href="#fazit" className="hover:text-indigo-800 transition-colors">Fazit und Empfehlung</a></li>
                                </ol>
                            </nav>
                        </div>

                        {/* Hinweis */}
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
                            <p className="m-0 text-amber-900">
                                <strong>Hinweis:</strong> Dieser Artikel gibt eine praxisnahe Orientierung und ersetzt keine
                                Steuer- oder Rechtsberatung. Für deine konkrete Situation ist deine Steuerberatung die richtige
                                Ansprechpartnerin.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Viele Kosmetikstudios starten mit einer einfachen Geldkasse und einem Kassenbuch. Sobald aber
                            Produkte verkauft werden, Bargeld fließt und das Finanzamt genauer hinschaut, stellt sich die Frage:
                            Reicht das noch, oder brauche ich ein richtiges Kassensystem? Dieser Leitfaden erklärt die
                            wichtigsten Begriffe und hilft dir, die richtige Entscheidung für dein Studio zu treffen.
                        </p>

                        {/* Section 1 */}
                        <h2 id="brauche-ich" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            1. Brauchst du ein Kassensystem?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            In Deutschland gibt es <strong>keine generelle Pflicht</strong>, ein elektronisches Kassensystem zu
                            nutzen. Du darfst grundsätzlich auch eine sogenannte offene Ladenkasse führen. Sobald du dich aber
                            für eine elektronische Kasse entscheidest, gelten strenge Regeln - allen voran die Pflicht zur
                            technischen Sicherheitseinrichtung (TSE).
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            In der Praxis lohnt sich ein elektronisches Kassensystem fast immer, sobald du regelmäßig Bargeld
                            einnimmst oder Produkte verkaufst. Es spart dir Zeit, reduziert Fehler und macht dich bei einer
                            Kassennachschau oder Betriebsprüfung deutlich entspannter. Wie du Einnahmen und Ausgaben darüber
                            hinaus sauber aufstellst, liest du im Beitrag zur{' '}
                            <Link href="/blog/kosmetikstudio-buchhaltung-steuern" className="text-indigo-600 hover:text-indigo-800">Kosmetikstudio Buchhaltung</Link>.
                        </p>

                        {/* Section 2 */}
                        <h2 id="pflichten" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            2. Rechtliche Pflichten: TSE, GoBD & Beleg
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Drei Begriffe solltest du kennen, wenn es um Kassen geht:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            {[
                                { icon: Shield, title: 'TSE-Pflicht', desc: 'Elektronische Kassen müssen mit einer zertifizierten technischen Sicherheitseinrichtung jeden Vorgang manipulationssicher aufzeichnen.' },
                                { icon: FileText, title: 'GoBD', desc: 'Die Grundsätze ordnungsmäßiger Buchführung verlangen, dass alle Aufzeichnungen vollständig, unveränderbar und nachvollziehbar sind.' },
                                { icon: Receipt, title: 'Belegausgabepflicht', desc: 'Bei einer elektronischen Kasse muss jeder Kundin ein Beleg bereitgestellt werden - digital oder auf Papier.' },
                                { icon: FileText, title: 'Meldepflicht', desc: 'Elektronische Kassensysteme sind beim Finanzamt zu melden. Deine Steuerberatung unterstützt dich dabei.' },
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
                            Die Belegausgabepflicht bedeutet übrigens nicht, dass jede Kundin den Beleg mitnehmen muss - du musst
                            ihn nur ausstellen und anbieten. Ein digitaler Beleg per E-Mail ist dabei oft die einfachste und
                            umweltfreundlichste Lösung.
                        </p>

                        {/* Section 3 */}
                        <h2 id="funktionen" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            3. Welche Funktionen wichtig sind
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Ein gutes Kassensystem für ein Kosmetikstudio sollte mehr können als nur kassieren:
                        </p>

                        <div className="bg-gray-50 rounded-2xl p-8 my-8">
                            <div className="space-y-4">
                                {[
                                    { title: 'TSE-konforme Aufzeichnung', desc: 'Jeder Vorgang wird manipulationssicher und GoBD-konform gespeichert.' },
                                    { title: 'Beleg digital oder gedruckt', desc: 'Belege lassen sich flexibel per E-Mail versenden oder ausdrucken.' },
                                    { title: 'Verkauf von Produkten und Behandlungen', desc: 'Behandlungen und Pflegeprodukte in einem Verkaufsvorgang abrechnen.' },
                                    { title: 'Gutschein- und Rabattverwaltung', desc: 'Gutscheine einlösen und Rabatte sauber dokumentieren - wichtig für die Buchhaltung.' },
                                    { title: 'Verschiedene Zahlarten', desc: 'Bar, Karte und kontaktlos sauber getrennt erfassen.' },
                                    { title: 'Auswertungen und Tagesabschluss', desc: 'Tagesumsätze, Z-Bericht und Auswertungen per Knopfdruck.' },
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
                            Wenn du regelmäßig mit Gutscheinen arbeitest, lohnt sich ein Blick in unseren Beitrag zum{' '}
                            <Link href="/blog/gutscheine-kosmetikstudio-verkaufen" className="text-indigo-600 hover:text-indigo-800">Gutscheinverkauf im Kosmetikstudio</Link> -
                            denn Gutscheine wirken sich direkt auf deine Kassenführung aus.
                        </p>

                        {/* Section 4 */}
                        <h2 id="vergleich" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            4. Offene Ladenkasse vs. elektronische Kasse
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Beide Varianten sind erlaubt - aber sie haben sehr unterschiedliche Vor- und Nachteile. Diese
                            Übersicht hilft dir bei der Einordnung:
                        </p>

                        <div className="my-8 overflow-hidden rounded-2xl border border-gray-200">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="text-left p-4 font-semibold text-gray-900">Kriterium</th>
                                        <th className="text-center p-4 font-semibold text-gray-900">Offene Ladenkasse</th>
                                        <th className="text-center p-4 font-semibold text-indigo-600">Elektronische Kasse</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ['Anschaffungskosten', 'gering', 'höher'],
                                        ['TSE erforderlich', 'nein', 'ja'],
                                        ['Tägliches Zählprotokoll nötig', 'ja', 'nein'],
                                        ['Fehler- und Manipulationsrisiko', 'höher', 'gering'],
                                        ['Aufwand bei Prüfung', 'hoch', 'gering'],
                                        ['Automatische Auswertungen', 'nein', 'ja'],
                                        ['Belege automatisch', 'manuell', 'automatisch'],
                                    ].map(([kriterium, offen, elektronisch], index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className="p-4 text-gray-700">{kriterium}</td>
                                            <td className="p-4 text-center text-gray-600">{offen}</td>
                                            <td className="p-4 text-center text-gray-900 font-medium">{elektronisch}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            Für ein Einzelstudio mit wenigen Barzahlungen kann die offene Ladenkasse anfangs ausreichen. Sobald
                            das Geschäft wächst, mehrere Personen kassieren oder viele Produkte verkauft werden, ist eine
                            elektronische Kasse fast immer die sicherere und entspanntere Wahl.
                        </p>

                        {/* Section 5 */}
                        <h2 id="kriterien" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            5. 7 Kriterien für die Auswahl
                        </h2>

                        <div className="space-y-6 my-8">
                            {[
                                { num: '01', title: 'TSE & GoBD von Haus aus', desc: 'Das System muss zertifiziert TSE-konform sein und alle Vorgaben automatisch erfüllen.' },
                                { num: '02', title: 'Einfache Bedienung', desc: 'Im Studioalltag muss das Kassieren schnell gehen - auch für Aushilfen ohne lange Einarbeitung.' },
                                { num: '03', title: 'Passende Hardware', desc: 'Tablet-Kasse, Bondrucker und Kartenlesegerät sollten zu deinem Studio und deinem Platz passen.' },
                                { num: '04', title: 'Faire, transparente Kosten', desc: 'Achte auf laufende Gebühren, TSE-Kosten und versteckte Zusatzkosten.' },
                                { num: '05', title: 'Gutschein- und Rabattfunktion', desc: 'Gerade in der Beauty-Branche unverzichtbar für saubere Abrechnung.' },
                                { num: '06', title: 'Export für die Steuerberatung', desc: 'Daten sollten sich einfach und im richtigen Format an deine Steuerberatung übergeben lassen.' },
                                { num: '07', title: 'Verlässlicher Support', desc: 'Wenn die Kasse streikt, brauchst du schnelle Hilfe - am besten deutschsprachig.' },
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

                        {/* Section 6 */}
                        <h2 id="zusammenspiel" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            6. Kasse und Studio-Software verbinden
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Eine Kasse erfasst Zahlungen - aber dein Studio besteht aus mehr: Termine, Kundinnen, Behandlungen
                            und Dokumentation. Je besser diese Bereiche zusammenspielen, desto weniger doppelte Arbeit hast du.
                            Wenn dein Terminkalender, deine Kundenkartei und deine Behandlungen sauber digital verwaltet sind,
                            ist die Kasse nur noch der letzte Schritt im Ablauf.
                        </p>
                        <div className="my-8 flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6">
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Smartphone className="h-5 w-5 text-indigo-600" />
                            </div>
                            <p className="m-0 text-gray-700">
                                Treatflow ist keine Registrierkasse, sondern die Plattform für alles drumherum: Termine,
                                Online-Buchungen, Kundenverwaltung und Dokumentation. So hast du Behandlungshistorie und
                                Kundendaten an einem Ort - und deine Kasse erledigt den reinen Zahlvorgang.
                            </p>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Mehr dazu, wie eine spezialisierte{' '}
                            <Link href="/kosmetikstudio-software" className="text-indigo-600 hover:text-indigo-800">Kosmetikstudio Software</Link>{' '}
                            den Alltag vereinfacht, findest du auf unserer Funktionsseite.
                        </p>

                        {/* Section 7 */}
                        <h2 id="fazit" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            7. Fazit und Empfehlung
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Du musst nicht zwingend ein elektronisches Kassensystem nutzen - aber sobald regelmäßig Bargeld
                            fließt und du Produkte verkaufst, spart dir eine TSE-konforme Kasse Zeit, Nerven und Risiko. Achte
                            bei der Auswahl auf zertifizierte Sicherheit, einfache Bedienung und transparente Kosten.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Und denk daran: Die Kasse ist nur ein Baustein. Den größten Hebel hast du, wenn Termine, Kundinnen
                            und Dokumentation digital und an einem Ort zusammenlaufen - genau dafür ist Treatflow gebaut.
                        </p>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 my-12 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Bring Ordnung in deinen Studio-Alltag
                            </h3>
                            <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
                                Termine, Kundinnen, Formulare und Dokumentation in einer Plattform - teste Treatflow 14 Tage
                                kostenlos, ohne Kreditkarte.
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
                        <Link href="/blog/kosmetikstudio-buchhaltung-steuern" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <span className="text-sm text-indigo-600 font-medium">Business</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">Kosmetikstudio Buchhaltung: Was du absetzen kannst</h3>
                            <p className="text-gray-600 text-sm mt-2">Steuern sparen mit der richtigen Buchhaltung.</p>
                        </Link>
                        <Link href="/blog/gutscheine-kosmetikstudio-verkaufen" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <span className="text-sm text-indigo-600 font-medium">Business</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">Gutscheine im Kosmetikstudio verkaufen</h3>
                            <p className="text-gray-600 text-sm mt-2">Mehr Umsatz und neue Kundinnen durch Gutscheine.</p>
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
                            { href: '/kosmetikstudio-software', title: 'Kosmetikstudio Software', desc: 'All-in-One Lösung für dein Studio' },
                            { href: '/kundenverwaltung', title: 'Kundenverwaltung', desc: 'Kundendaten und Historie an einem Ort' },
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
