import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';
import { generateFaqSchema } from '@/lib/schema';

const canonical = 'https://www.treatflow.io/blog/registrierkasse-kosmetikstudio-oesterreich';
const imagePath = '/images/blog/registrierkasse-kosmetikstudio-oesterreich.jpg';
const trialUrl = 'https://app.treatflow.io/auth/register?lang=de';

const faqs = [
    {
        question: 'Wann braucht ein Kosmetikstudio in Österreich eine Registrierkasse?',
        answer: 'Die Registrierkassenpflicht gilt, wenn beide Grenzen überschritten sind: ein Jahresumsatz von 15.000 Euro je Betrieb und Barumsätze dieses Betriebs von mehr als 7.500 Euro im Jahr. Sie beginnt mit dem viertfolgenden Monat nach Ablauf des Umsatzsteuer-Voranmeldungszeitraums, in dem die Grenzen erstmals überschritten wurden. Ob dein Studio schon darüber liegt, rechnest du mit deiner Steuerberatung, nicht aus dem Bauch heraus.',
    },
    {
        question: 'Was bedeutet RKSV?',
        answer: 'RKSV steht für Registrierkassensicherheitsverordnung. Sie beschreibt den Manipulationsschutz einer Registrierkasse: Signatur der Barumsätze, Verkettung der Belege, maschinenlesbarer Code und ein Datenerfassungsprotokoll. Eine Kasse ohne diese Sicherheitseinrichtung erfüllt die Vorgabe nicht.',
    },
    {
        question: 'Gilt die Registrierkassenpflicht auch für Kartenzahlungen?',
        answer: 'Die Pflicht knüpft an Barumsätze, nicht nur an Bargeld in der Lade. Welche Zahlungsarten in deinem Fall als Barumsatz zählen, steht in der Barumsatzverordnung. Eine Überweisung ist nicht automatisch dasselbe wie eine Barzahlung. Die konkrete Einordnung von Karte, Gutschein oder Anzahlung klärst du mit deiner Steuerberatung.',
    },
    {
        question: 'Muss für jede Behandlung ein Beleg ausgestellt werden?',
        answer: 'Die Belegerteilungspflicht gilt ab dem ersten Barumsatz, auch wenn noch keine Registrierkassenpflicht besteht. Du erstellst den Beleg und bietest ihn an. Die Kundin muss ihn nicht zwingend mitnehmen. Liegt eine Registrierkassenpflicht vor, kommt der Beleg aus dem elektronischen System, inklusive der zusätzlichen Kassenangaben.',
    },
    {
        question: 'Wie wird eine Registrierkasse bei FinanzOnline registriert?',
        answer: 'Die Kasse wird über FinanzOnline angemeldet, inklusive Sicherheitseinrichtung und Startbeleg. Den genauen Ablauf und die nötigen Zugangsdaten stimmst du mit deiner Steuerberatung oder der Einrichtung deiner Kasse ab. Auf Unternehmerseite beschreibt das USP die Pflichten, das BMF die Details der Anmeldung.',
    },
    {
        question: 'Kann Terminsoftware gleichzeitig als Kassensystem genutzt werden?',
        answer: 'Ja, wenn die Software eine Registrierkasse im Sinne der RKSV ist: Signatur, Datenerfassungsprotokoll, Beleg und Anmeldung. Ein Terminkalender allein ersetzt das nicht. Eine integrierte Lösung kassiert den abgeschlossenen Termin und erzeugt den Beleg im selben Vorgang.',
    },
    {
        question: 'Was passiert mit Gutscheinen?',
        answer: 'Verkauf und Einlösung eines Gutscheins sind nicht bei jedem Studio derselbe Vorgang. Ob der Verkauf schon ein Barumsatz ist oder erst die Einlösung, hängt von der Art des Gutscheins und der Zahlungsart ab. Halte beides nachvollziehbar fest und lass die steuerliche Behandlung von deiner Steuerberatung einordnen.',
    },
    {
        question: 'Welche Daten müssen auf einem Beleg stehen?',
        answer: 'Das USP nennt als Mindestinhalt unter anderem die Bezeichnung des Unternehmens, eine fortlaufende Belegnummer, den Tag der Ausstellung, Menge und Art der Leistung, den Betrag der Barzahlung und bei einer Registrierkasse zusätzlich Kassenidentifikationsnummer, Datum und Uhrzeit, die Beträge nach Steuersätzen sowie den maschinenlesbaren Code.',
    },
];

export const metadata: Metadata = {
    title: 'Registrierkasse Kosmetikstudio Österreich: RKSV erklärt',
    description:
        'Registrierkasse Kosmetikstudio Österreich: Wann die RKSV greift, was die Belegpflicht bedeutet und worauf du bei der digitalen Kasse im Studio achten solltest.',
    keywords: [
        'Registrierkasse Kosmetikstudio Österreich',
        'Kassensystem Kosmetikstudio Österreich',
        'RKSV Kosmetikstudio',
        'Registrierkassenpflicht Kosmetikstudio',
        'RKSV Registrierkasse',
        'digitale Registrierkasse Kosmetikstudio',
        'Registrierkasse Beauty Studio',
        'FinanzOnline Registrierkasse',
        'Belegpflicht Kosmetikstudio Österreich',
        'Kasse Kosmetikstudio Österreich',
    ],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: { canonical },
    openGraph: {
        title: 'Registrierkasse Kosmetikstudio Österreich: RKSV erklärt',
        description:
            'Wann die RKSV greift, was die Belegpflicht bedeutet und wie Termin und Kasse im Studio zusammenpassen.',
        url: canonical,
        siteName: 'Treatflow Blog',
        images: [
            {
                url: imagePath,
                width: 1280,
                height: 720,
                alt: 'Registrierkasse für Kosmetikstudio in Österreich',
            },
        ],
        locale: 'de_AT',
        type: 'article',
        publishedTime: '2026-09-24T09:00:00.000Z',
        authors: ['Olcay Elikci'],
        section: 'Recht & Compliance',
        tags: ['RKSV', 'Registrierkasse', 'Österreich', 'Belegpflicht'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Registrierkasse Kosmetikstudio Österreich: RKSV erklärt',
        description:
            'Wann die RKSV greift und was die Belegpflicht für dein Kosmetikstudio bedeutet.',
        images: [imagePath],
    },
};

export default function BlogPost() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Registrierkasse Kosmetikstudio Österreich: RKSV und Belegpflicht erklärt',
        description:
            'Registrierkasse im Kosmetikstudio in Österreich: Wann die RKSV greift, was die Belegpflicht bedeutet und wie Termin und Kasse zusammenpassen.',
        image: `https://www.treatflow.io${imagePath}`,
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
        datePublished: '2026-09-24T09:00:00.000Z',
        dateModified: '2026-09-24T09:00:00.000Z',
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        articleSection: 'Recht & Compliance',
        keywords: 'Registrierkasse Kosmetikstudio Österreich, RKSV, Belegpflicht',
        wordCount: 2000,
        timeRequired: 'PT12M',
        inLanguage: 'de-AT',
        isAccessibleForFree: true,
    };

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
            />
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Blog', href: '/blog' },
                            { label: 'Registrierkasse Kosmetikstudio Österreich' },
                        ]),
                    ),
                }}
            />
            <Breadcrumbs
                items={[
                    { label: 'Blog', href: '/blog' },
                    { label: 'Registrierkasse Kosmetikstudio Österreich' },
                ]}
            />

            <section className="pt-6 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                            Recht & Compliance
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Registrierkasse Kosmetikstudio Österreich: RKSV und Belegpflicht erklärt
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        In Österreich sind Registrierkasse und Beleg zwei verschiedene Dinge. Die RKSV greift erst ab
                        bestimmten Umsätzen. Einen Beleg brauchst du bei Barumsätzen schon früher. So ordnest du das
                        für dein Studio ein.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            24. September 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            12 min Lesezeit
                        </span>
                        <span>Olcay Elikci</span>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl mb-12">
                        <Image
                            src={imagePath}
                            alt="Registrierkasse für Kosmetikstudio in Österreich"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 896px) 100vw, 896px"
                        />
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-12 border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">Inhaltsverzeichnis</h2>
                            <nav>
                                <ol className="space-y-2 list-decimal list-inside text-indigo-600">
                                    <li><a href="#brauchst-du" className="hover:text-indigo-800">Registrierkasse im Kosmetikstudio in Österreich</a></li>
                                    <li><a href="#rksv" className="hover:text-indigo-800">Was RKSV bedeutet</a></li>
                                    <li><a href="#unterschied" className="hover:text-indigo-800">Registrierkassenpflicht und Belegpflicht</a></li>
                                    <li><a href="#umsaetze" className="hover:text-indigo-800">Welche Umsätze erfasst werden</a></li>
                                    <li><a href="#funktionen" className="hover:text-indigo-800">Was die Kasse können muss</a></li>
                                    <li><a href="#finanzonline" className="hover:text-indigo-800">Einrichtung über FinanzOnline</a></li>
                                    <li><a href="#alltag" className="hover:text-indigo-800">Karte, Gutscheine und typische Fehler</a></li>
                                    <li><a href="#ablauf" className="hover:text-indigo-800">Ablauf von der Buchung bis zum Beleg</a></li>
                                    <li><a href="#faq" className="hover:text-indigo-800">Häufige Fragen</a></li>
                                </ol>
                            </nav>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
                            <p className="m-0 text-amber-900">
                                <strong>Hinweis:</strong> Die Schwellen und Beleginhalte in diesem Artikel folgen der
                                Darstellung auf dem Unternehmensserviceportal (usp.gv.at). Der Text ist eine Orientierung
                                für Studios und keine individuelle Steuerberatung. Grenzfälle klärst du mit deiner
                                Steuerberatung oder direkt bei Finanzamt und BMF.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            Die meisten Zahlungen im Studio laufen nicht mehr nur über die Geldlade. Karte, Gutschein,
                            manchmal eine Anzahlung per Überweisung. Trotzdem heißt es oft nur: „Wir brauchen eine
                            Kasse.“ Dahinter stecken zwei Pflichten. Eine Registrierkasse fürs Kosmetikstudio in
                            Österreich wird erst ab bestimmten Umsätzen zur Pflicht. Den Beleg gibst du bei Barumsätzen
                            schon davor aus.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            In Deutschland gilt die TSE, das ist ein anderes Thema. Dazu der Beitrag zum{' '}
                            <Link href="/blog/kassensystem-kosmetikstudio" className="text-indigo-600 hover:text-indigo-800">
                                Kassensystem im Kosmetikstudio
                            </Link>
                            . Hier nur Österreich.
                        </p>

                        <h2 id="brauchst-du" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Registrierkasse Kosmetikstudio Österreich: Wann sie zur Pflicht wird
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Das Unternehmensserviceportal nennt zwei Grenzen, und beide müssen überschritten sein: 15.000
                            Euro Jahresumsatz je Betrieb und mehr als 7.500 Euro Barumsatz im Jahr. Erst dann gilt die
                            Registrierkassenpflicht.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Beim ersten Überschreiten startet die Pflicht nicht am nächsten Tag. Sie beginnt mit dem
                            viertfolgenden Monat nach dem Ende deines Umsatzsteuer-Voranmeldungszeitraums, also nach
                            einem Kalendermonat oder einem Kalendervierteljahr. Das USP-Beispiel: Grenzen im Februar
                            überschritten, monatliche Voranmeldung, Pflicht ab 1. Juni. Fällst du später dauerhaft unter
                            die Jahresgrenze, kann die Kassenpflicht mit dem nächsten Jahr wegfallen. Beleg und
                            Einzelaufzeichnung bleiben.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Bei regelmäßigem Kundenverkehr ist die Grenze im laufenden Jahr oft schnell erreicht. Ob
                            du schon darüber liegst, rechnest du mit der Steuerberatung, nicht aus dem Umsatz der
                            letzten Woche.
                        </p>

                        <h2 id="rksv" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Was bedeutet RKSV?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            RKSV heißt Registrierkassensicherheitsverordnung. Sie sorgt dafür, dass Barumsätze nachträglich
                            nicht still verschwinden. Jeder signierte Beleg hängt am vorherigen. Eine Lücke in dieser
                            Kette fällt später auf. Auf dem Bon siehst du das am QR-Code.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Dazu brauchst du ein Datenerfassungsprotokoll, eine Signaturerstellungseinheit und eine
                            Kassenidentifikationsnummer. Das USP weist darauf hin, dass eine Kasse ohne diese
                            Sicherheitseinrichtung als Finanzordnungswidrigkeit geahndet werden kann, mit einer
                            Geldstrafe von bis zu 5.000 Euro. Ob ein konkreter Fall so ausgeht, entscheidet die Behörde.
                        </p>

                        <h2 id="unterschied" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Registrierkassenpflicht und Belegpflicht unterscheiden
                        </h2>
                        <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200">
                            <table className="w-full min-w-[560px] text-left">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="p-4 font-semibold text-gray-900"></th>
                                        <th className="p-4 font-semibold text-gray-900">Registrierkassenpflicht</th>
                                        <th className="p-4 font-semibold text-indigo-600">Belegerteilungspflicht</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ['Ab wann', 'Beide Umsatzgrenzen überschritten', 'Ab dem ersten Barumsatz'],
                                        ['Was du brauchst', 'Elektronisches System mit RKSV-Schutz', 'Einen Beleg, anfangs auch händisch'],
                                        ['Wenn keine Kassenpflicht', 'Nicht zwingend eine Registrierkasse', 'Belegpflicht bleibt'],
                                        ['Annahme durch die Kundin', 'System zeichnet auf', 'Anbieten genügt, Mitnahme ist nicht erzwingbar'],
                                    ].map(([label, kasse, beleg]) => (
                                        <tr key={label}>
                                            <td className="p-4 font-medium text-gray-900">{label}</td>
                                            <td className="p-4 text-gray-600">{kasse}</td>
                                            <td className="p-4 text-gray-900">{beleg}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Unter den Umsatzgrenzen brauchst du noch keine Registrierkasse. Einen Beleg bei jeder
                            Barzahlung schon. Sobald die Kassenpflicht gilt, muss dieser Beleg aus dem elektronischen
                            System kommen, nicht aus einem Block.
                        </p>

                        <h2 id="umsaetze" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Welche Umsätze müssen erfasst werden?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Erfasst werden die Barumsätze, jeder für sich, nicht als Summe am Abend. Es zählt, wann das
                            Geld kommt, nicht wann die Behandlung im Kalender steht. Eine Anzahlung, die vor dem Termin
                            bar eingeht, buchst du an diesem Tag.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Ob Bankomat- und Kreditkarte bei dir als Barumsatz gelten, steht in der Barumsatzverordnung.
                            Eine Überweisung ist nicht automatisch dasselbe. Beim Gutschein können Verkauf und Einlösung
                            steuerlich auseinanderfallen. Beides festhalten, die Einordnung mit der Steuerberatung
                            klären.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Ausnahmen gibt es, zum Beispiel für bestimmte Umsätze im Freien. Ein Studio in festen Räumen
                            fällt da in der Regel nicht hinein. Bei Hausbesuchen erlaubt das USP in bestimmten Fällen,
                            den Barumsatz nach der Rückkehr ohne unnötigen Aufschub zu erfassen, wenn die Kundin vor Ort
                            schon einen Beleg bekommen hat und du eine Durchschrift behältst. Ob das auf deine mobilen
                            Termine zutrifft, prüfst du einzeln. In der Kabine gehören Zahlung und Beleg zum selben Moment.
                        </p>

                        <h2 id="funktionen" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Was muss eine Registrierkasse können?
                        </h2>
                        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 my-8">
                            <div className="space-y-4">
                                {[
                                    ['Datenerfassungsprotokoll', 'Die Barumsätze liegen in einem exportierbaren Protokoll, nicht nur auf dem Bon.'],
                                    ['Signatur', 'Eine Sicherheitseinrichtung signiert und verkettet die Vorgänge.'],
                                    ['Beleg', 'Druck oder elektronische Übermittlung, mit dem maschinenlesbaren Code.'],
                                    ['Kassenidentifikationsnummer', 'Eindeutig innerhalb des Unternehmens.'],
                                    ['Aufbewahrung', 'Eine Durchschrift oder elektronische Speicherung des Belegs bewahrst du sieben Jahre auf.'],
                                ].map(([title, desc]) => (
                                    <div key={title} className="flex gap-4">
                                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                                            <p className="text-gray-600 text-sm mt-1">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Auf dem Beleg stehen laut USP mindestens der Name des Unternehmens, eine fortlaufende Nummer,
                            der Tag, Menge und Art der Leistung und der Betrag. Bei der Registrierkasse kommen
                            Kassenidentifikationsnummer, Datum und Uhrzeit, die Beträge nach Steuersätzen und der
                            maschinenlesbare Code dazu.
                        </p>

                        <h2 id="finanzonline" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Registrierung und Einrichtung über FinanzOnline
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Die Anmeldung läuft über FinanzOnline: Sicherheitseinrichtung, Kasse registrieren, Startbeleg
                            erzeugen und prüfen. Danach kann verkauft werden. Jahresbeleg, Ausfall und Außerbetriebnahme
                            bleiben Aufgaben im laufenden Jahr, nicht ein Formular das du einmal abhakst.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Die Menüs in FinanzOnline ändern sich, und der Webservice-Zugang ist nicht dein normaler
                            Login. Die Erstanmeldung machst du deshalb mit der Steuerberatung oder mit dem Anbieter der
                            Kasse, bevor der erste echte Verkauf läuft. Eine Kasse, die schon boniert, aber nicht
                            angemeldet ist, produziert Belege außerhalb der Kette. Leg im Team fest, wer den Jahresbeleg
                            auslöst und wer einen Ausfall meldet.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Was passiert bei Kartenzahlungen?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Karte ist im Studio oft die normale Zahlungsart. Sie ersetzt den Kassenbeleg nicht. Das
                            Terminal bestätigt, dass die Karte belastet wurde. Die Registrierkasse zeichnet den Umsatz
                            auf. Betrag und Leistung müssen auf beiden zusammenpassen.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            In Treatflow geht der Betrag an ein verbundenes SumUp-Solo-Terminal, ohne dass du ihn noch
                            einmal eintippst. Die RKSV-Signatur bleibt am Kassenbeleg.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Gutscheine, Anzahlungen und unterschiedliche Zahlungsarten
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Drei Fälle landen im Studio ständig auf demselben Bon, obwohl sie nicht dasselbe sind.
                        </p>
                        <ul className="space-y-3 text-gray-700 list-disc pl-5 my-6">
                            <li>
                                <strong>Anzahlung:</strong> Geht sie als Barumsatz ein, wird sie erfasst, wenn das Geld
                                kommt, nicht erst am Behandlungstag.
                            </li>
                            <li>
                                <strong>Restzahlung:</strong> Der offene Betrag ist ein eigener Zahlungsvorgang, wenn
                                er später bar oder mit Karte eingeht.
                            </li>
                            <li>
                                <strong>Gutschein:</strong> Verkauf und Einlösung dokumentierst du getrennt. Ob beides
                                ein Barumsatz ist, hängt vom Gutschein ab. Dazu der Beitrag{' '}
                                <Link href="/blog/gutscheine-kosmetikstudio-verkaufen" className="text-indigo-600 hover:text-indigo-800">
                                    Gutscheine im Kosmetikstudio verkaufen
                                </Link>
                                , die steuerliche Einordnung bleibt bei der Steuerberatung.
                            </li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed">
                            In der Treatflow-Kasse bleiben Bar, Karte über SumUp, Gutschein und Überweisung getrennte
                            Zahlungsarten. Auch eine gemischte Zahlung siehst du auf dem Beleg noch auseinander.
                        </p>
                        <p className="mt-6">
                            <Link
                                href="/registrierkasse-kosmetikstudio-oesterreich"
                                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
                            >
                                So ist die RKSV-Kasse in Treatflow aufgebaut
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Typische Fehler im Studioalltag
                        </h2>
                        <ul className="space-y-3 text-gray-700 list-disc pl-5">
                            <li>Nur Bargeld wird boniert, Kartenzahlungen laufen am System vorbei.</li>
                            <li>Der Beleg wird erst am Abend „zusammengerechnet“.</li>
                            <li>Anzahlungen stehen im Kalender, aber nicht in der Kasse.</li>
                            <li>Ein Gutschein wird beim Verkauf und bei der Einlösung doppelt als Umsatz gezählt oder gar nicht.</li>
                            <li>Die Kasse ist nie bei FinanzOnline angemeldet, obwohl schon signiert werden müsste.</li>
                            <li>Startbeleg und Jahresbeleg kennt niemand im Team.</li>
                            <li>Terminpreis und Kassenpreis weichen voneinander ab.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Warum Terminsoftware und Registrierkasse miteinander verbunden sein sollten
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Steht die Kasse neben dem Kalender, tippst du Leistung, Preis und Kundin ein zweites Mal.
                            Weicht etwas ab, suchst du später den Unterschied. Wenn der abgeschlossene Termin die
                            Positionen schon kennt, kassierst du den Vorgang, statt ihn neu zu schreiben.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Der{' '}
                            <Link href="/terminkalender" className="text-indigo-600 hover:text-indigo-800">
                                Terminkalender
                            </Link>{' '}
                            und die{' '}
                            <Link href="/kassensystem-kosmetikstudio" className="text-indigo-600 hover:text-indigo-800">
                                Kasse
                            </Link>{' '}
                            sollten dieselbe Leistung und denselben Preis haben. Die{' '}
                            <Link href="/online-buchungen" className="text-indigo-600 hover:text-indigo-800">
                                Online-Buchung
                            </Link>{' '}
                            bringt den Termin, die Kasse den Beleg. Die Kundin ist in beiden dieselbe.
                        </p>

                        <h2 id="ablauf" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Beispiel für einen typischen Ablauf
                        </h2>
                        <div className="space-y-4 my-8">
                            {[
                                ['1', 'Kundin bucht den Termin', 'Leistung, Dauer und Preis stehen im Kalender, online oder am Empfang.'],
                                ['2', 'Die Behandlung findet statt', 'Der Termin wird der Behandlerin zugeordnet, nicht einer anonymen Tageslosung.'],
                                ['3', 'Termin wird abgeschlossen', 'Du siehst, was durchgeführt wurde, bevor du kassierst.'],
                                ['4', 'Zahlung wird kassiert', 'Bar, Karte, Gutschein oder eine Kombination, direkt aus dem Termin.'],
                                ['5', 'Beleg wird erstellt', 'Mit den Pflichtangaben und, bei RKSV-Pflicht, mit Signatur und QR-Code. Ausdruck oder E-Mail.'],
                                ['6', 'Umsatz wird dokumentiert', 'Der Vorgang hängt an Kundin und Termin und liegt im Datenerfassungsprotokoll.'],
                            ].map(([num, title, desc]) => (
                                <div key={num} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200">
                                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                                        <span className="text-indigo-600 font-bold text-sm">{num}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                                        <p className="text-gray-600 mt-1">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Vorteile eines integrierten Kassensystems
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Für Studios in Österreich ist die Treatflow-Kasse im selben System wie Kalender und
                            Kundenkartei. Die RKSV-Signatur läuft über Fiskaly. Start-, Monats-, Jahres- und
                            Schlussbeleg werden erzeugt, der DEP7-Export geht an die Steuerberatung. Du kassierst den
                            Termin, hängst den Umsatz an die Kundin und gibst den Beleg als PDF oder per E-Mail aus.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Die Kasse ist ein Zusatz zum Buchungsplan. Die Konditionen stehen unter{' '}
                            <Link href="/preise" className="text-indigo-600 hover:text-indigo-800">
                                Preise
                            </Link>
                            . Die Anmeldung bei FinanzOnline und mit der Steuerberatung bleibt trotzdem bei dir.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Checkliste für die Auswahl einer Registrierkasse
                        </h2>
                        <ul className="space-y-3 text-gray-700 list-disc pl-5">
                            <li>Signatur und Datenerfassungsprotokoll nach RKSV, nicht nur ein Rechnungsprogramm.</li>
                            <li>Beleg mit QR-Code, als Druck und elektronisch.</li>
                            <li>Anmeldung und Startbeleg sind Teil der Einrichtung, nicht ein späteres To-do.</li>
                            <li>DEP-Export, den deine Steuerberatung öffnen kann.</li>
                            <li>Kassieren aus dem Termin, gleiche Preise wie in der Online-Buchung.</li>
                            <li>Bar, Karte, Gutschein und Überweisung getrennt nachweisbar.</li>
                            <li>Jemand im Studio weiß, wer Jahresbeleg und Ausfall meldet.</li>
                            <li>Preise in Kalender, Buchung und Kasse sind dieselben, sonst stimmt der Beleg nicht mit dem Termin überein.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Eine Summe am Abend ist keine Einzelaufzeichnung. Jede Zahlung, die als Barumsatz gilt,
                            braucht ihren eigenen Vorgang. Das ist weniger Arbeit, wenn du den Termin abschließt und
                            direkt kassierst, statt abends eine zweite Liste zu tippen.
                        </p>

                        <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Häufige Fragen zur Registrierkasse
                        </h2>
                        <div className="space-y-6">
                            {faqs.map((faq) => (
                                <div key={faq.question}>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">Fazit</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Die Registrierkasse wird zur Pflicht, wenn beide Umsatzgrenzen überschritten sind. Die
                            Belegpflicht startet früher, beim ersten Barumsatz. RKSV heißt: signieren, die Belege
                            verketten, protokollieren und den Bon anbieten. Was bei dir als Barumsatz zählt, klärst du
                            mit der Steuerberatung, nicht zwischen zwei Terminen.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Im Alltag hilft vor allem, dass Termin, Zahlung und Beleg derselbe Vorgang sind. Dann stimmen
                            Preis, Kundin und Nachweis, ohne eine zweite Liste am Abend.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 my-12 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Termine und Registrierkasse in einem System
                            </h3>
                            <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
                                Behandlung abschließen, kassieren und den Beleg aus demselben Termin erzeugen. 14 Tage
                                testen, ohne Kreditkarte.
                            </p>
                            <a
                                href={trialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                            >
                                Treatflow kostenlos testen
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
                        <Link href="/blog/kassensystem-kosmetikstudio" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <span className="text-sm text-indigo-600 font-medium">Business</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">Kassensystem für Kosmetikstudios</h3>
                            <p className="text-gray-600 text-sm mt-2">TSE, GoBD und Auswahl, vor allem für Studios in Deutschland.</p>
                        </Link>
                        <Link href="/blog/gutscheine-kosmetikstudio-verkaufen" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <span className="text-sm text-indigo-600 font-medium">Business</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">Gutscheine im Kosmetikstudio verkaufen</h3>
                            <p className="text-gray-600 text-sm mt-2">Verkauf, Einlösung und was du dabei dokumentierst.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Passende Funktionen für dein Studio</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { href: '/kassensystem-kosmetikstudio', title: 'Kassensystem', desc: 'TSE und RKSV aus dem Termin' },
                            { href: '/registrierkasse-kosmetikstudio-oesterreich', title: 'Registrierkasse Österreich', desc: 'RKSV, DEP7 und Belege' },
                            { href: '/terminkalender', title: 'Terminkalender', desc: 'Dieselbe Leistung wie an der Kasse' },
                            { href: '/preise', title: 'Preise', desc: 'Kasse als Zusatz zum Buchungsplan' },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
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
