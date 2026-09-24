import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';
import { generateFaqSchema } from '@/lib/schema';

const canonical = 'https://www.treatflow.io/blog/anamnesebogen-kosmetikstudio';
const imagePath = '/images/blog/anamnesebogen-kosmetikstudio.jpg';
const trialUrl = 'https://app.treatflow.io/auth/register?lang=de';

const faqs = [
    {
        question: 'Ist ein Anamnesebogen im Kosmetikstudio Pflicht?',
        answer: 'Nicht für jede Creme und jede Augenbrauenkorrektur. Sobald du die Haut stärker beanspruchst, mit Geräten arbeitest oder eine Einwilligung brauchst, gehört der Bogen dazu. In Deutschland kommt bei bestimmten Geräteanwendungen die NiSV-Dokumentation extra dazu. Was bei deinem Angebot gilt, klärst du fachlich, nicht aus einem Blogartikel.',
    },
    {
        question: 'Was muss in einem Anamnesebogen stehen?',
        answer: 'Typisch sind Kontaktdaten, Behandlungsziel, Hautbild, Allergien, Medikamente, relevante Vorerkrankungen, Schwangerschaft, frühere Behandlungen und die konkrete Einwilligung. Der Bogen sollte zur Behandlung passen: Laser, Permanent Make-up und Microneedling fragen andere Risiken ab als eine klassische Gesichtsbehandlung.',
    },
    {
        question: 'Wie lange sollte ein Kosmetikstudio Anamnesebögen aufbewahren?',
        answer: 'Es gibt keine einzelne Frist, die für jedes Studio und jedes Formular gilt. Gesundheitsnahe Angaben und Einwilligungen bewahrst du so lange auf, wie du sie für die Behandlung, mögliche Rückfragen und dein Löschkonzept brauchst. Steuerlich relevante Belege folgen eigenen Fristen. Lege die Dauer im Datenschutzkonzept fest und stimme sie bei Unsicherheit mit Datenschutz- oder Rechtsberatung ab.',
    },
    {
        question: 'Darf ein Anamnesebogen digital ausgefüllt werden?',
        answer: 'Ja. Digital ist zulässig, wenn die Kundin den Inhalt verstehen kann, die Einwilligung nachvollziehbar ist und du die Angaben geschützt aufbewahrst. Eine lesbare digitale Unterschrift und eine klare Zuordnung zur Kundin ersetzen den Papierbogen, sie senken die Anforderungen an den Inhalt nicht.',
    },
    {
        question: 'Muss die Kundin den Anamnesebogen bei jedem Termin neu ausfüllen?',
        answer: 'Nicht bei jedem kurzen Folgetermin von vorn. Vor der ersten Behandlung und immer dann, wenn sich Gesundheit, Medikamente, Schwangerschaft oder das Behandlungsziel geändert haben, solltest du aktualisieren. Ein kurzer Check zu Beginn des Termins reicht oft, statt den kompletten Bogen neu zu tippen.',
    },
    {
        question: 'Kann der Anamnesebogen vor dem Termin ausgefüllt werden?',
        answer: 'Ja, und das ist im Alltag meist die ruhigere Variante. Die Kundin erhält einen Link und füllt Anamnese und Einwilligung zu Hause aus. Im Studio prüfst du die Angaben, klärst offene Punkte und startest die Behandlung, ohne dass der Termin mit Papierkram beginnt.',
    },
];

export const metadata: Metadata = {
    title: 'Anamnesebogen Kosmetikstudio: Digital & sicher 2026',
    description:
        'Anamnesebogen Kosmetikstudio: Welche Angaben dazugehören, wann der Bogen fällig ist und wie digitale Formulare Kundendaten im Alltag sicher entlasten.',
    keywords: [
        'Anamnesebogen Kosmetikstudio',
        'digitaler Anamnesebogen Kosmetikstudio',
        'Anamnese Kosmetikstudio',
        'Anamneseformular Kosmetik',
        'digitales Anamneseformular',
        'Kundenfragebogen Kosmetikstudio',
        'Einwilligung Kosmetikstudio',
        'digitale Formulare Kosmetikstudio',
        'DSGVO Anamnesebogen Kosmetik',
        'Kosmetikstudio Kundendokumentation',
    ],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: { canonical },
    openGraph: {
        title: 'Anamnesebogen Kosmetikstudio: Digital & sicher 2026',
        description:
            'Welche Angaben in den Anamnesebogen gehören, wann du ihn einsetzt und wie digitale Formulare den Studioalltag entlasten.',
        url: canonical,
        siteName: 'Treatflow Blog',
        images: [
            {
                url: imagePath,
                width: 1280,
                height: 720,
                alt: 'Digitaler Anamnesebogen im Kosmetikstudio',
            },
        ],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2026-09-24T09:00:00.000Z',
        authors: ['Olcay Elikci'],
        section: 'Digitalisierung',
        tags: ['Anamnese', 'Formulare', 'DSGVO', 'Kosmetikstudio'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Anamnesebogen Kosmetikstudio: Digital & sicher 2026',
        description:
            'Welche Angaben in den Anamnesebogen gehören und wie digitale Formulare den Studioalltag entlasten.',
        images: [imagePath],
    },
};

export default function BlogPost() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Anamnesebogen Kosmetikstudio: Warum digitale Bögen 2026 dazugehören',
        description:
            'Anamnesebogen im Kosmetikstudio: Welche Angaben dazugehören, wann du ihn einsetzt und wie digitale Formulare sensible Kundendaten im Alltag entlasten.',
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
        articleSection: 'Digitalisierung',
        keywords: 'Anamnesebogen Kosmetikstudio, digitaler Anamnesebogen, Einwilligung Kosmetikstudio',
        wordCount: 1900,
        timeRequired: 'PT11M',
        inLanguage: 'de-DE',
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
                            { label: 'Anamnesebogen Kosmetikstudio' },
                        ]),
                    ),
                }}
            />
            <Breadcrumbs
                items={[{ label: 'Blog', href: '/blog' }, { label: 'Anamnesebogen Kosmetikstudio' }]}
            />

            <section className="pt-6 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                            Digitalisierung
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Anamnesebogen Kosmetikstudio: Warum digitale Bögen 2026 dazugehören
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Der Anamnesebogen im Kosmetikstudio ist die kurze Nachfrage vor der Behandlung: Allergien,
                        Medikamente, was die Haut verträgt. Digital füllen Kundinnen ihn vor dem Termin aus, und du
                        findest die Antworten beim nächsten Mal wieder.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            24. September 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            11 min Lesezeit
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
                            alt="Digitaler Anamnesebogen im Kosmetikstudio"
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
                                    <li><a href="#was-ist" className="hover:text-indigo-800">Was ein Anamnesebogen ist</a></li>
                                    <li><a href="#warum" className="hover:text-indigo-800">Warum die Anamnese vor der Behandlung zählt</a></li>
                                    <li><a href="#angaben" className="hover:text-indigo-800">Welche Angaben typischerweise abgefragt werden</a></li>
                                    <li><a href="#behandlungen" className="hover:text-indigo-800">Anamnese je nach Behandlung</a></li>
                                    <li><a href="#papier-digital" className="hover:text-indigo-800">Papier oder digitaler Anamnesebogen</a></li>
                                    <li><a href="#datenschutz" className="hover:text-indigo-800">Datenschutz und Einwilligung</a></li>
                                    <li><a href="#ablauf" className="hover:text-indigo-800">Praktischer Ablauf im Studio</a></li>
                                    <li><a href="#faq" className="hover:text-indigo-800">Häufige Fragen</a></li>
                                </ol>
                            </nav>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
                            <p className="m-0 text-amber-900">
                                <strong>Hinweis:</strong> Dieser Artikel beschreibt die Praxis im Studio. Er ist keine
                                individuelle Rechts- oder Datenschutzberatung. Für dein konkretes Angebot holst du dir
                                fachlichen Rat, besonders bei Geräteanwendungen und bei der Speicherdauer.
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            Kennst du das: Die Kundin ist da, der letzte Bogen liegt im Ordner von März, die Allergie
                            ist kaum zu lesen, und die Einwilligung fehlt auf der Rückseite. Dann behandelst du entweder
                            aus dem Gedächtnis oder du hältst den Termin auf, während sie noch einmal alles aufschreibt.
                            Ein digitaler Anamnesebogen stellt dieselben Fragen. Nur früher, lesbar und an der Kundin,
                            nicht in einem Stapel.
                        </p>

                        <h2 id="was-ist" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Was ist ein Anamnesebogen im Kosmetikstudio?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Der Anamnesebogen ist der Fragebogen vor der Behandlung. Du willst wissen, wie die Haut
                            gerade ist, worauf sie schon reagiert hat, welche Medikamente laufen und was die Kundin
                            sich von heute erwartet. Fehlen die, wird aus Peeling, Laser oder Microneedling schnell eine
                            Schätzung.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Dazu kommt die Einwilligung. Die Kundin bestätigt, dass sie Ablauf und mögliche Reaktionen
                            kennt und dass ihre Angaben stimmen. Beides gehört in die{' '}
                            <Link href="/behandlungsdokumentation" className="text-indigo-600 hover:text-indigo-800">
                                Behandlungsdokumentation
                            </Link>
                            , nicht in einen losen Stapel am Empfang.
                        </p>

                        <h2 id="warum" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Warum eine gute Anamnese vor der Behandlung wichtig ist
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Dieselbe Säure, die bei einer Kundin unauffällig ist, brennt bei der nächsten. Ein Laser,
                            der im Herbst gepasst hat, kann nach einer neuen Tablette anders ausfallen. Die Anamnese
                            ist die Minute, in der du das merkst, bevor das Gerät an ist.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Sie hilft auch hinterher. Wenn Ergebnis und Erwartung auseinanderlaufen, steht auf dem
                            Bogen, was besprochen war. Das gilt in der Kabine genauso wie im Laserstudio. Nach dem
                            dritten Termin erinnert sich niemand mehr an jedes Serum. Der Bogen schon.
                        </p>

                        <h2 id="angaben" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Welche Informationen typischerweise abgefragt werden
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Ein Bogen mit vierzig Feldern, von denen die Hälfte nichts mit der heutigen Behandlung zu tun
                            hat, wird schnell abgehakt. Besser ein fester Kern und ein paar Fragen, die nur zu dieser
                            Methode gehören.
                        </p>
                        <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200">
                            <table className="w-full min-w-[520px] text-left">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="p-4 font-semibold text-gray-900">Bereich</th>
                                        <th className="p-4 font-semibold text-gray-900">Wozu du es brauchst</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ['Kontakt und Behandlungswunsch', 'Zuordnung und klares Ziel des Termins'],
                                        ['Hautbild und frühere Behandlungen', 'Was die Haut schon kennt und was gereizt hat'],
                                        ['Allergien und Unverträglichkeiten', 'Produkte und Wirkstoffe ausschließen'],
                                        ['Medikamente und relevante Erkrankungen', 'Risiken erkennen, bevor du behandelst'],
                                        ['Schwangerschaft und Stillzeit', 'Behandlungen verschieben oder anpassen'],
                                        ['Einwilligung und Unterschrift', 'Nachweis, dass aufgeklärt und zugestimmt wurde'],
                                    ].map(([area, why]) => (
                                        <tr key={area} className="bg-white">
                                            <td className="p-4 text-gray-900 font-medium">{area}</td>
                                            <td className="p-4 text-gray-600">{why}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Frag nur, was du für diese Behandlung brauchst. Gesundheitsangaben ohne Zweck helfen weder
                            dir noch dem Datenschutz. Die Kundin füllt selbst aus. Du liest danach gegen und hakst nach,
                            wenn ein Medikament unklar ist. Nicht die Rezeption kreuzt „schnell“ etwas an, das später
                            in der Akte steht, als hätte die Kundin es gesagt.
                        </p>

                        <h2 id="behandlungen" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Anamnese je nach Behandlung
                        </h2>
                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Gesichtsbehandlungen</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Hauttyp, die Pflege der letzten Wochen, bekannte Reaktionen und ob die Haut gerade gereizt
                            oder frisch gebräunt ist. Eine klassische Gesichtsbehandlung braucht nicht denselben Bogen
                            wie ein starkes Peeling.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Laserhaarentfernung</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Hautton, frische Bräune, Mittel, die die Haut lichtempfindlicher machen, und die Zone, die
                            du behandelst. In Deutschland ist bei bestimmten optischen Anwendungen die{' '}
                            <Link href="/nisv-dokumentation" className="text-indigo-600 hover:text-indigo-800">
                                NiSV-Dokumentation
                            </Link>{' '}
                            ein eigener Baustein. Der Anamnesebogen ersetzt das Protokoll nicht. Er liefert die Angaben,
                            die du dafür brauchst.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Permanent Make-up</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Farbe, frühere Pigmentierungen, wie die Haut zuletzt geheilt ist, Blutverdünner und
                            Infektionsrisiken. Die Einwilligung sollte Form, Farbe und mögliche Nachbesserungen nennen.
                            Fotos vorher sind hilfreich, aber nur mit eigener Zustimmung.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Microneedling</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Entzündungen, Herpes in der Zone, Isotretinoin und die geplante Tiefe ändern die Entscheidung.
                            Notier Gerät und Tiefe. „Microneedling gemacht“ reicht später niemandem.
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Apparative Kosmetik</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Radiofrequenz, Ultraschall und ähnliche Geräte haben eigene Ausschlüsse, zum Beispiel
                            Implantate oder frische Unterspritzungen in der Zone. Übernimm die Punkte aus der
                            Gebrauchsanweisung und lass die Kundin genau die beantworten.
                        </p>

                        <h2 id="papier-digital" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Papier-Anamnese oder digitaler Anamnesebogen
                        </h2>
                        <div className="my-8 overflow-x-auto rounded-2xl border border-gray-200">
                            <table className="w-full min-w-[560px] text-left">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="p-4 font-semibold text-gray-900">Punkt</th>
                                        <th className="p-4 font-semibold text-gray-900">Papier</th>
                                        <th className="p-4 font-semibold text-indigo-600">Digital</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ['Lesbarkeit', 'hängt von der Handschrift ab', 'immer lesbar'],
                                        ['Zeitpunkt', 'meist erst im Studio', 'schon vor dem Termin möglich'],
                                        ['Ablage', 'Ordner, Suche von Hand', 'direkt an der Kundin'],
                                        ['Unterschrift', 'auf Papier', 'auf Tablet oder Smartphone'],
                                        ['Zugriff', 'wer den Ordner hat', 'nur berechtigte Personen'],
                                        ['Aktualisierung', 'neuer Bogen, alter bleibt liegen', 'Verlauf bleibt sichtbar'],
                                    ].map(([point, paper, digital]) => (
                                        <tr key={point}>
                                            <td className="p-4 text-gray-900 font-medium">{point}</td>
                                            <td className="p-4 text-gray-600">{paper}</td>
                                            <td className="p-4 text-gray-900">{digital}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            Papier geht, solange du allein arbeitest und die Ordner überschaubar bleiben. Sobald eine
                            Kollegin die Kundin übernimmt, sucht ihr beide. Ein digitaler Anamnesebogen fürs
                            Kosmetikstudio liegt an der Akte. Fehlende Felder siehst du, bevor die Kabine belegt ist,
                            nicht erst als leere Zeile auf dem Blatt. Die fachliche Entscheidung triffst du trotzdem
                            selbst. Du triffst sie nur auf vollständigen Angaben.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Vorteile eines digitalen Anamnesebogens
                        </h2>
                        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 my-8">
                            <div className="space-y-4">
                                {[
                                    ['Vor dem Termin ausgefüllt', 'Die Kabinenzeit bleibt der Behandlung.'],
                                    ['Lesbare Angaben', 'Allergien und Medikamente sind nicht mehr eine Frage der Schrift.'],
                                    ['An der Kundin', 'Der Bogen liegt in der Akte, nicht im Ordner vom März.'],
                                    ['Gleicher Stand im Team', 'Jede Kollegin sieht dieselben Antworten.'],
                                    ['Einwilligung dabei', 'Aufklärung und Unterschrift liegen bei den Angaben.'],
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
                            Mit{' '}
                            <Link href="/formulare" className="text-indigo-600 hover:text-indigo-800">
                                digitalen Formularen
                            </Link>{' '}
                            baust du den Bogen zu deinen Behandlungen, statt ein Fremdformular zu kopieren. Die Kundin
                            füllt ihn am Handy oder am Tablet aus. Die Unterschrift bleibt am Datensatz.
                        </p>
                        <p className="mt-6">
                            <Link
                                href={trialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
                            >
                                Treatflow kostenlos testen
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </p>

                        <h2 id="datenschutz" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Datenschutz und sensible Kundendaten
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Auf dem Bogen stehen Gesundheitsangaben. Die gehören nicht auf den Tresen und nicht in einen
                            geteilten Chat. In Deutschland und Österreich gilt die DSGVO: Du sagst der Kundin, wofür du
                            die Angaben brauchst, und nur das Team, das behandelt, kommt daran.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Digital ist nicht von allein sicherer. Sicher wird es, wenn der Bogen geschützt liegt und
                            du weißt, wann du löschst. Mehr dazu im Beitrag zur{' '}
                            <Link href="/blog/dsgvo-datenschutz-kosmetikstudio" className="text-indigo-600 hover:text-indigo-800">
                                DSGVO im Kosmetikstudio
                            </Link>
                            . Dieser Artikel ersetzt keine Prüfung deiner eigenen Datenschutzunterlagen.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Einwilligungen und Unterschriften
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            In der Einwilligung steht, welche Behandlung geplant ist, welche Reaktionen vorkommen können
                            und dass die Angaben nach bestem Wissen gemacht sind. Eine Unterschrift unter einem Text,
                            den niemand gelesen hat, bringt dir im Streit wenig. Vor dem Termin, zu Hause, liest die
                            Kundin ruhiger als zwischen Tür und Liege.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Die digitale Unterschrift muss zur Person und zum Formular gehören, und du musst den Stand
                            später noch zeigen können. Behandlungseinwilligung und Datenschutz trennst du besser, damit
                            klar ist, wozu zugestimmt wurde. Vorlagen und den Ablauf findest du beim{' '}
                            <Link href="/anamnesebogen-kosmetikstudio" className="text-indigo-600 hover:text-indigo-800">
                                Anamnesebogen fürs Kosmetikstudio
                            </Link>
                            .
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Wie oft sollte eine Anamnese aktualisiert werden?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Einmal ausfüllen und dann Jahre liegen lassen reicht nicht. Vor der ersten Behandlung kommt
                            der volle Bogen. Bei Folgeterminen derselben Methode reicht oft ein kurzer Check:
                            Medikamente, Schwangerschaft, neue Allergien, frische Sonne, anderes Ziel. Wechselst du von
                            der Gesichtsbehandlung zu Laser oder Microneedling, kommen die passenden Fragen dazu.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Sprich im Team eine einfache Regel ab: voller Bogen bei Neukundinnen und bei jedem
                            Methodenwechsel, Kurzcheck bei jeder Sitzung. Sonst macht es jede Kollegin ein bisschen
                            anders, je nachdem wer an der Rezeption steht. Neue Mitarbeiterinnen sollten das am ersten
                            Tag sehen, nicht in einem Chat von letzter Woche.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Formulare bereits vor dem Termin versenden
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Um 17 Uhr am Empfang hat niemand Ruhe für zwölf Fragen. Schick den Link mit der
                            Terminbestätigung. Die Kundin öffnet ihn am Handy, füllt aus und unterschreibt. Du siehst
                            vor der Behandlung, wo du nachfragen musst.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Das hängt an der{' '}
                            <Link href="/online-buchungen" className="text-indigo-600 hover:text-indigo-800">
                                Online-Buchung
                            </Link>
                            . Der Termin steht, das Formular geht raus, im Studio ist der Bogen da. Wer ohne Link kommt,
                            füllt am Tablet aus. Beides landet an derselben Stelle. Wie der Versand läuft, steht auf der
                            Seite zur{' '}
                            <Link href="/digitale-anamnese-kosmetikstudio" className="text-indigo-600 hover:text-indigo-800">
                                digitalen Anamnese
                            </Link>
                            .
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Anamnese direkt mit Kundenkartei und Termin verbinden
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ein Bogen, der neben der Kartei liegt, ist beim nächsten Termin wieder weg. In der{' '}
                            <Link href="/kundenverwaltung" className="text-indigo-600 hover:text-indigo-800">
                                Kundenverwaltung
                            </Link>{' '}
                            hängt die ausgefüllte Anamnese am Kundenprofil, neben früheren Behandlungen und dem heutigen
                            Termin. Die Kollegin öffnet einen Datensatz und sieht Allergien, die letzte Sitzung und die
                            neue Einwilligung.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            In Treatflow legst du die Formulare selbst an: Anamnese, Einwilligung, digitale Unterschrift.
                            Der ausgefüllte Bogen liegt bei der Kundin und am Termin, die Behandlungshistorie daneben.
                            Die Fragen bleiben deine. Die Ablage nicht.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Häufige Fehler im Studioalltag
                        </h2>
                        <ul className="space-y-3 text-gray-700 list-disc pl-5">
                            <li>Ein Bogen für alle Behandlungen, deshalb werden riskante Fragen übersprungen.</li>
                            <li>Die Kundin unterschreibt, während schon das Gerät vorbereitet wird.</li>
                            <li>Alte Papierbögen bleiben im Umlauf, obwohl sich Medikamente geändert haben.</li>
                            <li>Angaben liegen im Chat oder auf einem privaten Telefon.</li>
                            <li>Niemand weiß, wer den Bogen geprüft hat, bevor die Behandlung startet.</li>
                            <li>Einwilligung und Datenschutz werden in einem Satz vermischt.</li>
                        </ul>

                        <h2 id="ablauf" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Praktischer Ablauf für Studios
                        </h2>
                        <div className="space-y-4 my-8">
                            {[
                                ['1', 'Bogen je Behandlung festlegen', 'Kernfragen plus die wenigen Punkte, die nur für diese Methode gelten.'],
                                ['2', 'Link mit der Buchung senden', 'Anamnese und Einwilligung vor dem Termin, nicht in der Kabine.'],
                                ['3', 'Vor Beginn kurz gegenlesen', 'Unklare Medikamente oder fehlende Unterschrift klären, bevor du startest.'],
                                ['4', 'Behandlung dokumentieren', 'Was du gemacht hast, gehört zur selben Kundin wie der Bogen.'],
                                ['5', 'Beim nächsten Termin aktualisieren', 'Kurzcheck statt neuem Stapel, voller Bogen bei einem Methodenwechsel.'],
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

                        <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            Häufige Fragen zum Anamnesebogen
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
                            Ein guter Anamnesebogen passt zur Behandlung, wird vor dem Start gelesen und ist beim
                            nächsten Termin wieder da. Digital heißt vor allem: lesbar, an der Kundin, und nicht erst
                            in der Kabine ausgefüllt.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Wenn Formular, Akte, Termin und Dokumentation zusammenliegen, suchst du den letzten Bogen
                            nicht mehr im Schrank. So ist der Ablauf in Treatflow aufgebaut.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 my-12 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Formulare, Kundenkartei, Termine und Dokumentation an einem Ort
                            </h3>
                            <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
                                Anamnese und Einwilligung digital ausfüllen, der Kundin zuordnen und beim nächsten
                                Termin wiederfinden. 14 Tage testen, ohne Kreditkarte.
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
                        <Link href="/blog/anamnese-formulare-digital-kosmetik" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <span className="text-sm text-indigo-600 font-medium">Recht & Compliance</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">Digitale Anamnese im Kosmetikstudio</h3>
                            <p className="text-gray-600 text-sm mt-2">Was du beim Umstieg von Papier auf Formulare beachten solltest.</p>
                        </Link>
                        <Link href="/blog/dsgvo-datenschutz-kosmetikstudio" className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                            <span className="text-sm text-indigo-600 font-medium">Recht & Compliance</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">DSGVO im Kosmetikstudio</h3>
                            <p className="text-gray-600 text-sm mt-2">Kundendaten, Fotos und Anamnese datenschutzbewusst führen.</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Passende Funktionen für dein Studio</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { href: '/formulare', title: 'Formulare', desc: 'Anamnese und Einwilligung digital' },
                            { href: '/kundenverwaltung', title: 'Kundenverwaltung', desc: 'Bögen in der Kundenakte' },
                            { href: '/behandlungsdokumentation', title: 'Behandlungsdokumentation', desc: 'Verlauf neben der Anamnese' },
                            { href: '/online-buchungen', title: 'Online-Buchung', desc: 'Formular schon vor dem Termin' },
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
