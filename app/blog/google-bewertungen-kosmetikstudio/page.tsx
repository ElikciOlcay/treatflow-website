import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, CheckCircle, Star, MessageSquare, Repeat, ThumbsUp } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Google Bewertungen Kosmetikstudio: Mehr sammeln',
    description: 'So sammelst du als Kosmetikstudio mehr Google-Bewertungen: erlaubte Methoden, der richtige Zeitpunkt, automatische Bewertungsanfragen und der Umgang mit negativer Kritik.',
    keywords: [
        'Google Bewertungen Kosmetikstudio',
        'mehr Google Rezensionen sammeln',
        'Bewertungen Kosmetikstudio',
        'Google Rezensionen Kosmetik',
        'negative Bewertungen Kosmetikstudio',
        'Bewertungen automatisch sammeln',
    ],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: {
        canonical: 'https://www.treatflow.io/blog/google-bewertungen-kosmetikstudio',
    },
    openGraph: {
        title: 'Google Bewertungen für Kosmetikstudios: So sammelst du mehr',
        description: 'Erlaubte Methoden, der richtige Zeitpunkt und automatische Bewertungsanfragen für mehr Google-Rezensionen in deinem Kosmetikstudio.',
        url: 'https://www.treatflow.io/blog/google-bewertungen-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [
            {
                url: '/images/blog/google-business-kosmetik.jpg',
                width: 1200,
                height: 630,
                alt: 'Google Bewertungen für Kosmetikstudios',
            },
        ],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2026-06-02T10:00:00.000Z',
        authors: ['Olcay Elikci'],
        section: 'Marketing',
        tags: ['Google Bewertungen', 'Online Reputation', 'Kosmetikstudio Marketing', 'Kundenbindung'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Google Bewertungen für Kosmetikstudios: So sammelst du mehr',
        description: 'Erlaubte Methoden, der richtige Zeitpunkt und automatische Bewertungsanfragen für mehr Google-Rezensionen.',
        images: ['/images/blog/google-business-kosmetik.jpg'],
    },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Google Bewertungen für Kosmetikstudios: So sammelst du mehr und bessere Rezensionen",
        "description": "So sammelst du als Kosmetikstudio mehr Google-Bewertungen: erlaubte Methoden, der richtige Zeitpunkt, automatische Bewertungsanfragen und der Umgang mit negativer Kritik.",
        "image": "https://www.treatflow.io/images/blog/google-business-kosmetik.jpg",
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
        "datePublished": "2026-06-02T10:00:00.000Z",
        "dateModified": "2026-06-02T10:00:00.000Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.treatflow.io/blog/google-bewertungen-kosmetikstudio"
        },
        "articleSection": "Marketing",
        "keywords": "Google Bewertungen Kosmetikstudio, mehr Google Rezensionen sammeln, Bewertungen Kosmetikstudio",
        "wordCount": 2400,
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
                    { label: 'Google Bewertungen Kosmetikstudio: Mehr sammeln' },
                ])) }}
            />
            <Breadcrumbs items={[
                { label: 'Blog', href: '/blog' },
                { label: 'Google Bewertungen Kosmetikstudio: Mehr sammeln' },
            ]} />
            {/* Hero */}
            <section className="pt-6 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-6">
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                            Marketing
                        </span>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Google Bewertungen für Kosmetikstudios: So sammelst du mehr und bessere Rezensionen
                    </h1>

                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Bewertungen sind die neue Mundpropaganda. Für ein Kosmetikstudio entscheiden sie oft darüber,
                        ob eine neue Kundin bucht oder zur Konkurrenz weiterklickt. So baust du systematisch ein starkes
                        Google-Profil auf - rechtssicher und ohne Druck.
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
                                    <li><a href="#warum-bewertungen" className="hover:text-indigo-800 transition-colors">Warum Google-Bewertungen so entscheidend sind</a></li>
                                    <li><a href="#worauf-achten" className="hover:text-indigo-800 transition-colors">Worauf es bei Bewertungen wirklich ankommt</a></li>
                                    <li><a href="#zeitpunkt" className="hover:text-indigo-800 transition-colors">Der richtige Zeitpunkt und Weg zu fragen</a></li>
                                    <li><a href="#erlaubt-verboten" className="hover:text-indigo-800 transition-colors">Erlaubt vs. verboten: Das musst du beachten</a></li>
                                    <li><a href="#tipps" className="hover:text-indigo-800 transition-colors">7 Tipps für mehr und bessere Bewertungen</a></li>
                                    <li><a href="#negative" className="hover:text-indigo-800 transition-colors">Mit negativen Bewertungen richtig umgehen</a></li>
                                    <li><a href="#fazit" className="hover:text-indigo-800 transition-colors">Fazit und Empfehlung</a></li>
                                </ol>
                            </nav>
                        </div>

                        {/* Introduction */}
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Bevor eine neue Kundin in deinem Studio anruft oder bucht, googelt sie dich. Was sie dann sieht -
                            deine Sterne-Bewertung und die letzten Rezensionen - entscheidet in Sekunden über den ersten
                            Eindruck. Wer hier nur drei alte Bewertungen hat, verliert Buchungen an Studios mit einem
                            gepflegten, aktuellen Profil. Die gute Nachricht: Mehr Bewertungen zu bekommen ist kein Zufall,
                            sondern ein einfacher, wiederholbarer Prozess.
                        </p>

                        {/* Section 1 */}
                        <h2 id="warum-bewertungen" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            1. Warum Google-Bewertungen so entscheidend sind
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Google-Bewertungen wirken auf zwei Ebenen. Erstens beeinflussen sie deine lokale Sichtbarkeit:
                            Studios mit vielen, aktuellen und positiven Rezensionen tauchen in der lokalen Suche und in
                            Google Maps weiter oben auf. Zweitens sind sie sozialer Beweis - sie nehmen neuen Kundinnen die
                            Unsicherheit und machen den Schritt zur Buchung leichter.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Gerade in der Beauty-Branche, in der Vertrauen und Nähe zählen, ist eine ehrliche Bewertung oft
                            überzeugender als jede Anzeige. Dein Google-Profil ist damit kein Nebenschauplatz, sondern einer
                            deiner wichtigsten Marketingkanäle - und er kostet dich keinen Cent Werbebudget. Wie du das Profil
                            selbst optimal aufsetzt, liest du im Beitrag zum{' '}
                            <Link href="/blog/google-business-profil-kosmetikstudio" className="text-indigo-600 hover:text-indigo-800">Google Business Profil für Kosmetikstudios</Link>.
                        </p>

                        {/* Section 2 */}
                        <h2 id="worauf-achten" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            2. Worauf es bei Bewertungen wirklich ankommt
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Es geht nicht nur um die Sterne-Zahl. Vier Faktoren bestimmen, wie stark dein Profil wirkt:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            {[
                                { icon: Star, title: 'Durchschnittliche Wertung', desc: 'Ein Schnitt zwischen 4,5 und 5,0 Sternen wirkt vertrauenswürdig. 100 % perfekte Bewertungen wirken dagegen schnell unecht.' },
                                { icon: MessageSquare, title: 'Anzahl & Inhalt', desc: 'Viele Bewertungen mit konkreten Texten überzeugen mehr als wenige Sterne ohne Worte.' },
                                { icon: Repeat, title: 'Aktualität', desc: 'Regelmäßig neue Bewertungen signalisieren ein aktives, lebendiges Studio. Alte Rezensionen verlieren an Gewicht.' },
                                { icon: ThumbsUp, title: 'Deine Antworten', desc: 'Wer auf Bewertungen reagiert - auch auf kritische - zeigt Engagement und Professionalität.' },
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

                        {/* Section 3 */}
                        <h2 id="zeitpunkt" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            3. Der richtige Zeitpunkt und Weg zu fragen
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die meisten Studios fragen schlicht nie nach einer Bewertung - dabei sind zufriedene Kundinnen fast
                            immer bereit, eine abzugeben, wenn man sie freundlich darum bittet. Entscheidend ist das richtige
                            Timing und ein möglichst einfacher Weg:
                        </p>

                        <div className="bg-gray-50 rounded-2xl p-8 my-8">
                            <div className="space-y-4">
                                {[
                                    { title: 'Direkt nach der Behandlung', desc: 'Im Moment der Zufriedenheit ist die Bereitschaft am höchsten. Ein kurzer persönlicher Hinweis an der Kasse wirkt am stärksten.' },
                                    { title: 'Per Nachricht am selben oder nächsten Tag', desc: 'Eine automatische Follow-up-Nachricht mit direktem Bewertungslink trifft die Kundin in entspannter Stimmung.' },
                                    { title: 'Mit einem direkten Link', desc: 'Verlinke direkt auf das Bewertungsfenster deines Profils. Jeder zusätzliche Klick kostet dich Bewertungen.' },
                                    { title: 'Per QR-Code im Studio', desc: 'Ein QR-Code an der Kasse oder auf der Rechnung führt mit einem Scan zur Bewertung.' },
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
                            Den größten Unterschied macht Automatisierung: Wenn die Bewertungsanfrage automatisch nach jedem
                            Termin verschickt wird, entsteht ein konstanter, planbarer Strom an neuen Bewertungen - ohne dass du
                            täglich daran denken musst. Genau das leistet eine{' '}
                            <Link href="/nachrichtenautomatisierung" className="text-indigo-600 hover:text-indigo-800">Nachrichtenautomatisierung</Link>{' '}
                            mit automatischen Follow-ups.
                        </p>

                        {/* Section 4 */}
                        <h2 id="erlaubt-verboten" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            4. Erlaubt vs. verboten: Das musst du beachten
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Bewertungen aktiv zu sammeln ist erlaubt - solange sie echt und freiwillig sind. Wer dagegen
                            Bewertungen kauft oder mit Rabatten erkauft, riskiert die Löschung der Rezensionen und im schlimmsten
                            Fall des gesamten Profils. Diese Übersicht hilft dir, auf der sicheren Seite zu bleiben:
                        </p>

                        <div className="my-8 overflow-hidden rounded-2xl border border-gray-200">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="text-left p-4 font-semibold text-gray-900">Methode</th>
                                        <th className="text-center p-4 font-semibold text-green-600">Erlaubt</th>
                                        <th className="text-center p-4 font-semibold text-red-500">Riskant</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ['Alle Kundinnen freundlich um eine Bewertung bitten', true],
                                        ['Automatische Bewertungsanfrage per Nachricht', true],
                                        ['Direkten Bewertungslink oder QR-Code bereitstellen', true],
                                        ['Auf Bewertungen sachlich antworten', true],
                                        ['Bewertungen kaufen oder gefälschte erstellen', false],
                                        ['Rabatt oder Geschenk gegen Bewertung anbieten', false],
                                        ['Nur ausgewählten Kundinnen den Link geben', false],
                                        ['Negative Bewertungen heimlich selbst melden ohne Grund', false],
                                    ].map(([method, allowed], index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className="p-4 text-gray-700">{method as string}</td>
                                            <td className="p-4 text-center">
                                                {allowed ? (
                                                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                                                ) : (
                                                    <span className="text-gray-300 font-medium">--</span>
                                                )}
                                            </td>
                                            <td className="p-4 text-center">
                                                {allowed ? (
                                                    <span className="text-gray-300 font-medium">--</span>
                                                ) : (
                                                    <span className="text-red-400 font-medium">!</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                            Wichtig ist auch der Datenschutz: Bewertungsanfragen per E-Mail oder SMS solltest du nur auf Basis
                            einer sauberen Rechtsgrundlage versenden. Mehr dazu im Beitrag zur{' '}
                            <Link href="/blog/dsgvo-datenschutz-kosmetikstudio" className="text-indigo-600 hover:text-indigo-800">DSGVO im Kosmetikstudio</Link>.
                        </p>

                        {/* Section 5 */}
                        <h2 id="tipps" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            5. 7 Tipps für mehr und bessere Bewertungen
                        </h2>

                        <div className="space-y-6 my-8">
                            {[
                                { num: '01', title: 'Mach es zur Routine', desc: 'Frag jede zufriedene Kundin - nicht nur die Stammkundinnen. Je systematischer, desto stetiger der Zustrom.' },
                                { num: '02', title: 'Automatisiere die Anfrage', desc: 'Eine automatische Nachricht nach dem Termin nimmt dir das Nachfragen ab und sorgt für Konstanz.' },
                                { num: '03', title: 'Mach den Weg so kurz wie möglich', desc: 'Direkter Link oder QR-Code statt langer Erklärung. Jeder Klick weniger bedeutet mehr Bewertungen.' },
                                { num: '04', title: 'Sei konkret in der Bitte', desc: '„Schreib gern, wie dir die Behandlung gefallen hat“ führt zu aussagekräftigeren Texten als ein bloßes „Bewerte uns“.' },
                                { num: '05', title: 'Antworte auf jede Bewertung', desc: 'Ein kurzes Dankeschön bei positiven und eine sachliche Reaktion bei kritischen Bewertungen zeigt Wertschätzung.' },
                                { num: '06', title: 'Nutze Bewertungen weiter', desc: 'Teile schöne Rezensionen auf Instagram oder deiner Website - das motiviert andere, ebenfalls zu schreiben.' },
                                { num: '07', title: 'Bleib dran', desc: 'Bewertungen sammeln ist kein Projekt, sondern ein Dauerlauf. Aktualität zählt für Google und für neue Kundinnen.' },
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
                        <h2 id="negative" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            6. Mit negativen Bewertungen richtig umgehen
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Eine kritische Bewertung ist kein Drama - im Gegenteil. Ein Profil mit ausschließlich
                            Fünf-Sterne-Bewertungen wirkt unglaubwürdig. Wichtig ist, wie du reagierst: ruhig, sachlich und
                            lösungsorientiert. Bedanke dich für das Feedback, gehe auf den Punkt ein und biete eine Klärung an -
                            ohne dich auf einen öffentlichen Streit einzulassen.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Verstößt eine Bewertung klar gegen die Google-Richtlinien (z. B. Beleidigungen, offensichtlich
                            falsche Behauptungen oder eine Verwechslung mit einem anderen Studio), kannst du sie über Google
                            zur Prüfung melden. Der beste Schutz gegen einzelne schlechte Bewertungen bleibt aber ein stetiger
                            Strom guter, echter Rezensionen, der sie schnell in den Hintergrund rücken lässt.
                        </p>

                        {/* Section 7 */}
                        <h2 id="fazit" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            7. Fazit und Empfehlung
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Google-Bewertungen sind einer der wirksamsten und günstigsten Marketinghebel für dein Kosmetikstudio.
                            Der Schlüssel ist nicht eine einmalige Aktion, sondern ein verlässlicher Prozess: zufriedene Kundinnen
                            zum richtigen Zeitpunkt freundlich fragen, den Weg so einfach wie möglich machen und auf jede
                            Rezension reagieren.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Mit automatischen Follow-up-Nachrichten nach jedem Termin läuft das fast von allein - und dein Profil
                            wächst Woche für Woche. Genau dafür ist Treatflow gebaut: Termine, Kundinnen und automatische
                            Nachrichten in einer Plattform.
                        </p>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 my-12 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Sammle Bewertungen automatisch mit Treatflow
                            </h3>
                            <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
                                Versende automatische Follow-up-Nachrichten nach jedem Termin und teste alle Funktionen 14 Tage
                                kostenlos - ohne Kreditkarte.
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
                        <Link href="/blog/google-business-profil-kosmetikstudio" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <span className="text-sm text-indigo-600 font-medium">Marketing</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">Google Business Profil für Kosmetikstudios</h3>
                            <p className="text-gray-600 text-sm mt-2">So richtest du dein Profil ein und wirst lokal sichtbar.</p>
                        </Link>
                        <Link href="/blog/social-media-marketing-kosmetikstudio" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <span className="text-sm text-indigo-600 font-medium">Marketing</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">Social Media Marketing für Kosmetikstudios</h3>
                            <p className="text-gray-600 text-sm mt-2">Instagram- und TikTok-Strategien für mehr Sichtbarkeit.</p>
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
                            { href: '/nachrichtenautomatisierung', title: 'Nachrichtenautomatisierung', desc: 'Automatische Follow-ups nach jedem Termin' },
                            { href: '/sms-erinnerungen-kosmetikstudio', title: 'SMS-Erinnerungen', desc: 'Erinnerungen und Nachrichten, die ankommen' },
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
