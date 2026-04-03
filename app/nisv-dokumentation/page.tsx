import { FileText, Shield, Archive, ArrowRight, CheckCircle, ExternalLink, AlertTriangle, Zap, ClipboardList } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';

export const metadata = {
    title: 'NiSV-Dokumentation: Beratung & Doku digital',
    description: 'Erstelle, speichere und finde Unterlagen schnell wieder. Reduziere Papieraufwand und behalte Fristen im Blick – ideal für NiSV-relevante Behandlungen.',
    keywords: ['NiSV Dokumentation Software', 'NiSV konform dokumentieren', 'NiSV Kosmetikstudio Pflichten', 'NiSV Beratungsprotokoll Vorlage', 'NiSV Einverständniserklärung Aufbewahrung'],
    alternates: {
        canonical: 'https://www.treatflow.io/nisv-dokumentation',
    },
    openGraph: {
        title: 'NiSV-Dokumentation: Beratung, Einwilligung & Doku',
        description: 'Unterlagen digital verwalten, Fristen im Blick – ideal für NiSV-relevante Behandlungen im Kosmetikstudio.',
        url: 'https://www.treatflow.io/nisv-dokumentation',
        images: [
            {
                url: '/images/mockups/formulare-marketplace.png',
                width: 1200,
                height: 630,
                alt: 'Treatflow NiSV-konforme Dokumentation',
            },
        ],
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Wie lange muss ich Beratungsprotokoll und Einverständniserklärung aufbewahren?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Nach § 3 NiSV sind Beratungsprotokoll und Einverständniserklärung zehn Jahre aufzubewahren. Diese Frist beginnt mit dem Tag der Behandlung. Eine digitale, rechtssichere Ablage erleichtert die Einhaltung dieser Frist.',
            },
        },
        {
            '@type': 'Question',
            name: 'Was verlangt die NiSV von Betreibern kosmetischer Anlagen?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Die NiSV (Verordnung zum Schutz vor nichtionisierender Strahlung) verlangt u. a. Gerätesicherheit, Beratung und Aufklärung der Kundinnen sowie die Dokumentation von Beratung und Einwilligung. Die genauen Anforderungen ergeben sich aus § 3 NiSV.',
            },
        },
        {
            '@type': 'Question',
            name: 'Kann ich NiSV-Dokumentation digital führen?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Ja. Eine softwaregestützte Dokumentation mit Formularen, digitaler Signatur und lückenloser Aufbewahrung ist geeignet, die NiSV-Anforderungen zu erfüllen – und reduziert Papier und Suchaufwand.',
            },
        },
        {
            '@type': 'Question',
            name: 'Welche Geräte fallen unter die NiSV?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Alle Geräte, die nichtionisierende Strahlung zu kosmetischen oder nichtmedizinischen Zwecken am Menschen einsetzen, fallen unter die NiSV. Dazu gehören unter anderem IPL-Geräte, Laser, Ultraschallgeräte, Radiofrequenz-Geräte, Mikrostrom-Geräte und LED-Therapiegeräte. Entscheidend ist die Zweckbestimmung: Wird das Gerät kosmetisch eingesetzt, greift die NiSV.',
            },
        },
        {
            '@type': 'Question',
            name: 'Wie lange müssen NiSV-Dokumente aufbewahrt werden?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Beratungsprotokoll und Einwilligungserklärung müssen nach § 3 NiSV mindestens zehn Jahre aufbewahrt werden. Diese Frist beginnt mit dem Tag der Behandlung. Bei einer digitalen Lösung wie Treatflow wird die Aufbewahrungsfrist automatisch eingehalten.',
            },
        },
        {
            '@type': 'Question',
            name: 'Brauche ich für jede Behandlung ein neues Beratungsprotokoll?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Bei einer Erstbehandlung ist ein vollständiges Beratungsprotokoll Pflicht. Bei Folgebehandlungen mit derselben Methode kann auf das vorhandene Protokoll verwiesen werden, sofern sich keine relevanten Änderungen ergeben haben. Ändern sich die Parameter oder der Gesundheitszustand der Kundin, muss eine erneute Beratung und Dokumentation erfolgen.',
            },
        },
    ],
};

export default function NisvDokumentationPage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="nisv-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'NiSV-Dokumentation' },
                ])) }}
            />
            <section className="pb-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
                <Breadcrumbs items={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'NiSV-Dokumentation' },
                ]} />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Shield className="h-4 w-4 mr-2" />
                            NiSV-konform
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            NiSV-Dokumentation <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">digital</span> im Griff
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Beratung, Einwilligung und Doku sauber verwalten – weniger Papier, Fristen im Blick. Ideal für NiSV-relevante Behandlungen im Kosmetikstudio.
                        </p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <Image src="/images/funktionen/hero-nisv-sicherheit.jpg" alt="Sicher und rechtssicher dokumentieren" width={1920} height={823} className="w-full rounded-2xl shadow-xl object-cover aspect-[21/9]" sizes="100vw" />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-lg text-gray-600 mb-12">
                        Die <strong>NiSV</strong> (Verordnung zum Schutz vor nichtionisierender Strahlung bei der Anwendung am Menschen) gilt in Deutschland für Anlagen zur Anwendung nichtionisierender Strahlung zu kosmetischen oder sonstigen nichtmedizinischen Zwecken. Seit dem 31. Dezember 2020 ist die Verordnung vollständig in Kraft und wird von den zuständigen Landesbehörden überwacht. Aus <strong>§ 3 NiSV</strong> ergeben sich konkrete Anforderungen an Gerätesicherheit, Beratung und Aufklärung sowie an die Dokumentation und Aufbewahrung. Mit der richtigen Software erfüllst du diese Pflichten ohne Zettelwirtschaft – und schützt gleichzeitig dich und deine Kundinnen.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <FileText className="h-8 w-8 mr-3 text-indigo-600" />
                        Beratung und Aufklärung
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Vor der Anwendung musst du deine Kundinnen beraten und aufklären. Das Beratungsprotokoll hält fest, was besprochen wurde – von der Art der Behandlung über erwartete Wirkungen bis hin zu möglichen Risiken und Nebenwirkungen. Mit digitalen Formularen und Vorlagen erstellst du einheitliche Protokolle und vermeidest Lücken. Treatflow bietet <Link href="/formulare" className="text-indigo-600 hover:text-indigo-700 font-medium">Formulare für Anamnesen und Einverständniserklärungen</Link>, die du an deine Behandlungen anpassen kannst.
                    </p>
                    <Link href="/formulare" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                        Zu den Formularen
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>

                    <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6 flex items-center">
                        <CheckCircle className="h-8 w-8 mr-3 text-indigo-600" />
                        Einwilligung (Einverständniserklärung)
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Die schriftliche Einwilligung der Kundin ist erforderlich. Ob Laser, IPL oder andere NiSV-relevante Behandlungen – die Einverständniserklärung muss klar und nachvollziehbar sein. Digitale Formulare mit optionaler Signatur erleichtern die Ablage und die spätere Auffindbarkeit. In Treatflow kannst du die Einwilligung direkt am Tablet oder Smartphone unterschreiben lassen und dem <Link href="/kundenverwaltung" className="text-indigo-600 hover:text-indigo-700 font-medium">Kundenprofil</Link> zuordnen.
                    </p>
                    <Link href="/formulare" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                        Einverständniserklärungen in Treatflow
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>

                    <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6 flex items-center">
                        <Archive className="h-8 w-8 mr-3 text-indigo-600" />
                        Aufbewahrung (10 Jahre)
                    </h2>
                    <p className="text-gray-600 mb-8">
                        § 3 NiSV verlangt die <strong>Aufbewahrung von Beratungsprotokoll und Einverständniserklärung für zehn Jahre</strong>. In Papierform bedeutet das Ordner, Platz und das Risiko von Verlust. Mit einer digitalen, rechtssicheren Dokumentation speicherst du alle Unterlagen zentral, findest sie schnell wieder und behältst die Fristen im Blick. Treatflow archiviert alle Dokumente automatisch und stellt sicher, dass nichts verloren geht.
                    </p>
                    <Link href="/behandlungsdokumentation" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                        Zur Behandlungsdokumentation
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <Zap className="h-8 w-8 mr-3 text-indigo-600" />
                        Welche Behandlungen fallen unter die NiSV?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Die NiSV betrifft alle Geräte und Anlagen, die nichtionisierende Strahlung zu kosmetischen oder sonstigen nichtmedizinischen Zwecken am Menschen einsetzen. In der Praxis betrifft das vor allem die folgenden Behandlungskategorien, die in vielen Kosmetikstudios zum Standardangebot gehören:
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Laser- und IPL-Haarentfernung</h3>
                            <p className="text-gray-600">
                                Intense Pulsed Light (IPL) und Diodenlaser zählen zu den häufigsten NiSV-relevanten Anwendungen im Kosmetikstudio. Beide Technologien arbeiten mit gebündeltem Licht, das gezielt auf die Haarfollikel wirkt und das Haarwachstum dauerhaft reduziert. Da optische Strahlung eingesetzt wird, fallen diese Behandlungen klar unter die NiSV. Die verwendeten Parameter wie Wellenlänge, Energiedichte (Joule pro Quadratzentimeter) und Impulsdauer müssen für jede einzelne Sitzung dokumentiert werden.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Ultraschallbehandlungen</h3>
                            <p className="text-gray-600">
                                Hochfrequenter Ultraschall wird in der Kosmetik für Hautreinigung, Wirkstoffeinschleusung (Sonophorese) und Hautstraffung eingesetzt. Ultraschallgeräte mit kosmetischer Zweckbestimmung fallen unter die NiSV, sobald sie bestimmte Leistungsschwellen überschreiten. Die verwendeten Frequenzen und Intensitäten gehören zu den Pflichtangaben in der Behandlungsdokumentation.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Radiofrequenz-Behandlungen (RF)</h3>
                            <p className="text-gray-600">
                                Radiofrequenz-Geräte erzeugen elektromagnetische Wellen, die das Gewebe kontrolliert erwärmen und so die Kollagenproduktion anregen. Diese Technologie wird häufig für Hautstraffung und Bodycontouring eingesetzt. Da es sich um hochfrequente elektromagnetische Felder handelt, sind RF-Behandlungen NiSV-pflichtig. Leistung, Behandlungsdauer und die behandelte Körperregion müssen erfasst werden.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mikrostrom-Behandlungen</h3>
                            <p className="text-gray-600">
                                Mikrostromgeräte arbeiten mit niedrigen elektrischen Strömen, die die Gesichtsmuskulatur stimulieren und den Zellstoffwechsel anregen. Obwohl die eingesetzten Ströme vergleichsweise gering sind, fallen auch diese Geräte unter die NiSV, sofern sie zu kosmetischen Zwecken verwendet werden. Die Stromstärke, Frequenz und Anwendungsdauer sind Teil der Dokumentationspflicht.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">LED-Therapie</h3>
                            <p className="text-gray-600">
                                LED-Lichttherapie nutzt verschiedene Wellenlängen – typischerweise Rot, Blau und Infrarot –, um Hautzellen zu stimulieren, Entzündungen zu reduzieren oder die Kollagenbildung zu fördern. Da die Geräte optische Strahlung emittieren, fallen sie ebenfalls unter die NiSV. Die verwendete Wellenlänge, Bestrahlungsdauer und Leistungsdichte müssen pro Behandlung dokumentiert werden.
                            </p>
                        </div>
                    </div>

                    <p className="text-gray-600 mt-8">
                        Für alle genannten Behandlungen gilt: Die vollständige <Link href="/behandlungsdokumentation" className="text-indigo-600 hover:text-indigo-700 font-medium">Behandlungsdokumentation</Link> inklusive Beratungsprotokoll und Einwilligungserklärung ist gesetzlich vorgeschrieben. Mit Treatflow erstellst du diese Unterlagen digital und ordnest sie automatisch dem jeweiligen <Link href="/kundenverwaltung" className="text-indigo-600 hover:text-indigo-700 font-medium">Kundenprofil</Link> zu.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <ClipboardList className="h-8 w-8 mr-3 text-indigo-600" />
                        NiSV-Dokumentation: Was muss dokumentiert werden?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Gemäß § 3 NiSV sind Betreiber verpflichtet, für jede NiSV-relevante Behandlung eine vollständige Dokumentation zu erstellen und aufzubewahren. Die folgenden Punkte müssen lückenlos erfasst werden:
                    </p>

                    <ol className="space-y-6">
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Beratungsprotokoll</h3>
                                <p className="text-gray-600">
                                    Vor jeder Erstanwendung muss ein schriftliches Beratungsprotokoll erstellt werden. Dieses muss mindestens enthalten: Informationen über die Art der Anwendung, die erwarteten Wirkungen, mögliche Nebenwirkungen und Risiken, Hinweise zur Nachsorge sowie individuelle Kontraindikationen. Das Protokoll muss von der Kundin und dem Anwender unterschrieben werden.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Einwilligungserklärung</h3>
                                <p className="text-gray-600">
                                    Die Kundin muss ihre ausdrückliche, schriftliche Einwilligung zur Behandlung geben. Die Einwilligung muss auf Basis der vorangegangenen Beratung erfolgen und darf nicht unter Zeitdruck eingeholt werden. Zwischen Beratung und Einwilligung sollte ausreichend Bedenkzeit liegen.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Behandlungsparameter</h3>
                                <p className="text-gray-600">
                                    Für jede durchgeführte Behandlung müssen die technischen Parameter dokumentiert werden: Frequenz, Leistung (Watt bzw. Joule/cm²), Impulsdauer, Wellenlänge, Behandlungsdauer und behandelte Körperregion. Diese Angaben ermöglichen die Nachvollziehbarkeit und sind bei einer behördlichen Prüfung entscheidend.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">4</span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hauttyp-Bewertung</h3>
                                <p className="text-gray-600">
                                    Der Hauttyp der Kundin (z. B. nach der Fitzpatrick-Skala) muss erfasst werden, da er die Wahl der Behandlungsparameter maßgeblich beeinflusst. Eine falsche Parametereinstellung kann zu Verbrennungen oder Pigmentstörungen führen – die Hauttyp-Bestimmung ist daher sicherheitsrelevant und dokumentationspflichtig.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">5</span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kontraindikationen-Prüfung</h3>
                                <p className="text-gray-600">
                                    Vor jeder Behandlung muss geprüft werden, ob Kontraindikationen vorliegen – beispielsweise Schwangerschaft, Hauterkrankungen, bestimmte Medikamenteneinnahme oder frische Bräunung. Das Ergebnis dieser Prüfung muss schriftlich festgehalten werden, um im Schadensfall die Sorgfaltspflicht nachweisen zu können.
                                </p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-bold text-sm">6</span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Geräte-Identifikation</h3>
                                <p className="text-gray-600">
                                    Das verwendete Gerät muss identifizierbar sein – Hersteller, Modell und Seriennummer müssen in der Dokumentation erscheinen. So kann bei einer Prüfung eindeutig zugeordnet werden, welches Gerät bei welcher Behandlung eingesetzt wurde.
                                </p>
                            </div>
                        </li>
                    </ol>

                    <p className="text-gray-600 mt-8">
                        Mit den <Link href="/formulare" className="text-indigo-600 hover:text-indigo-700 font-medium">digitalen Formularen</Link> von Treatflow deckst du alle Pflichtangaben ab. Pflichtfelder verhindern, dass wichtige Informationen vergessen werden, und alle Daten werden automatisch der jeweiligen Kundin in der <Link href="/kundenverwaltung" className="text-indigo-600 hover:text-indigo-700 font-medium">Kundenverwaltung</Link> zugeordnet.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Vergleich: Papier vs. digitale NiSV-Dokumentation
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Viele Kosmetikstudios führen die NiSV-Dokumentation noch auf Papier. Das ist grundsätzlich zulässig, bringt aber erhebliche Nachteile mit sich – besonders wenn die Behörde prüft oder eine Kundin nach Jahren ihre Unterlagen anfordert. Die folgende Übersicht zeigt die Unterschiede:
                    </p>

                    <div className="overflow-x-auto rounded-xl border border-gray-200">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Kriterium</th>
                                    <th className="text-left p-4 font-semibold text-gray-900 border-b border-gray-200">Papier</th>
                                    <th className="text-left p-4 font-semibold text-indigo-700 bg-indigo-50 border-b border-gray-200">Digital (Treatflow)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="p-4 text-gray-900 font-medium">Aufbewahrung</td>
                                    <td className="p-4 text-gray-600">Ordner, Platzbedarf, Verlustrisiko</td>
                                    <td className="p-4 text-gray-600 bg-indigo-50/30">Cloud-Speicher, automatisches Backup</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-900 font-medium">Suche</td>
                                    <td className="p-4 text-gray-600">Manuelles Durchblättern</td>
                                    <td className="p-4 text-gray-600 bg-indigo-50/30">Sofort per Name oder Datum finden</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-900 font-medium">Vollständigkeit</td>
                                    <td className="p-4 text-gray-600">Lücken werden oft spät bemerkt</td>
                                    <td className="p-4 text-gray-600 bg-indigo-50/30">Pflichtfelder verhindern Lücken</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-900 font-medium">Unterschrift</td>
                                    <td className="p-4 text-gray-600">Nur vor Ort auf Papier</td>
                                    <td className="p-4 text-gray-600 bg-indigo-50/30">Digitale Signatur am Tablet</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-900 font-medium">Fristenkontrolle</td>
                                    <td className="p-4 text-gray-600">Manuelle Überwachung nötig</td>
                                    <td className="p-4 text-gray-600 bg-indigo-50/30">Automatische Erinnerungen</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-900 font-medium">Platzbedarf</td>
                                    <td className="p-4 text-gray-600">Ordner und Regale nötig</td>
                                    <td className="p-4 text-gray-600 bg-indigo-50/30">Kein physischer Platz nötig</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-900 font-medium">Zugriff bei Prüfung</td>
                                    <td className="p-4 text-gray-600">Zeitaufwändiges Suchen</td>
                                    <td className="p-4 text-gray-600 bg-indigo-50/30">Sofort verfügbar und exportierbar</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-gray-600 mt-8">
                        Der Umstieg auf eine digitale NiSV-Dokumentation spart nicht nur Zeit und Platz, sondern erhöht auch die Rechtssicherheit deines Studios. Mit Treatflow erstellst du alle erforderlichen Unterlagen direkt in der <Link href="/behandlungsdokumentation" className="text-indigo-600 hover:text-indigo-700 font-medium">Behandlungsdokumentation</Link> und hast sie jederzeit griffbereit.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <AlertTriangle className="h-8 w-8 mr-3 text-indigo-600" />
                        Strafen und Konsequenzen bei fehlender NiSV-Dokumentation
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Die NiSV ist seit dem 31. Dezember 2020 vollständig in Kraft getreten. Übergangsfristen sind abgelaufen, und die zuständigen Landesbehörden können jederzeit unangekündigte Prüfungen durchführen. Wer die Dokumentationspflichten nicht einhält, riskiert empfindliche Konsequenzen:
                    </p>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <span className="flex-shrink-0 w-2 h-2 mt-2 bg-red-500 rounded-full" />
                                <p className="text-gray-700"><strong>Bußgelder:</strong> Je nach Schwere des Verstoßes und Bundesland können Bußgelder von mehreren tausend Euro verhängt werden. Bei wiederholten Verstößen steigt die Höhe deutlich an.</p>
                            </li>
                            <li className="flex gap-3">
                                <span className="flex-shrink-0 w-2 h-2 mt-2 bg-red-500 rounded-full" />
                                <p className="text-gray-700"><strong>Betriebsuntersagung:</strong> Ist die Sicherheit der Anwendungen nicht gewährleistet, können die Behörden den Betrieb bestimmter Geräte oder sogar des gesamten Studios untersagen, bis die Mängel behoben sind.</p>
                            </li>
                            <li className="flex gap-3">
                                <span className="flex-shrink-0 w-2 h-2 mt-2 bg-red-500 rounded-full" />
                                <p className="text-gray-700"><strong>Nachbesserungsfristen:</strong> Behörden können Fristen setzen, innerhalb derer die Dokumentation vollständig nachgeholt werden muss. Das verursacht zusätzlichen Aufwand unter erheblichem Zeitdruck.</p>
                            </li>
                            <li className="flex gap-3">
                                <span className="flex-shrink-0 w-2 h-2 mt-2 bg-red-500 rounded-full" />
                                <p className="text-gray-700"><strong>Haftungsrisiko:</strong> Fehlt das Beratungsprotokoll oder die Einwilligungserklärung, kann dies im Schadensfall zu erheblichen haftungsrechtlichen Folgen führen. Ohne lückenlose Dokumentation ist es schwer nachzuweisen, dass die Kundin ordnungsgemäß aufgeklärt wurde.</p>
                            </li>
                        </ul>
                    </div>

                    <p className="text-gray-600">
                        Eine vollständige, digitale Dokumentation mit Treatflow schützt dich vor diesen Risiken. Alle Pflichtangaben werden durch <Link href="/formulare" className="text-indigo-600 hover:text-indigo-700 font-medium">strukturierte Formulare</Link> abgedeckt, und die zehnjährige Aufbewahrungspflicht wird automatisch eingehalten. So bist du bei einer behördlichen Prüfung jederzeit vorbereitet.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Häufige Fragen zur NiSV-Dokumentation</h2>
                    <dl className="space-y-8">
                        <div>
                            <dt className="text-lg font-semibold text-gray-900 mb-2">Wie lange muss ich Beratungsprotokoll und Einverständniserklärung aufbewahren?</dt>
                            <dd className="text-gray-600">Nach § 3 NiSV sind Beratungsprotokoll und Einverständniserklärung zehn Jahre aufzubewahren. Diese Frist beginnt mit dem Tag der Behandlung. Eine digitale, rechtssichere Ablage erleichtert die Einhaltung dieser Frist und eliminiert das Risiko von Dokumentenverlust.</dd>
                        </div>
                        <div>
                            <dt className="text-lg font-semibold text-gray-900 mb-2">Was verlangt die NiSV von Betreibern kosmetischer Anlagen?</dt>
                            <dd className="text-gray-600">Die NiSV verlangt u. a. Gerätesicherheit, Beratung und Aufklärung der Kundinnen sowie die Dokumentation von Beratung und Einwilligung. Betreiber müssen sicherstellen, dass nur sachkundige Personen die Geräte bedienen und alle Behandlungen lückenlos dokumentiert werden. Die genauen Anforderungen ergeben sich aus § 3 NiSV.</dd>
                        </div>
                        <div>
                            <dt className="text-lg font-semibold text-gray-900 mb-2">Kann ich NiSV-Dokumentation digital führen?</dt>
                            <dd className="text-gray-600">Ja. Eine softwaregestützte Dokumentation mit Formularen, digitaler Signatur und lückenloser Aufbewahrung ist geeignet, die NiSV-Anforderungen zu erfüllen. Digitale Dokumentation reduziert Papier und Suchaufwand und stellt durch Pflichtfelder sicher, dass keine Angaben fehlen.</dd>
                        </div>
                        <div>
                            <dt className="text-lg font-semibold text-gray-900 mb-2">Welche Geräte fallen unter die NiSV?</dt>
                            <dd className="text-gray-600">Alle Geräte, die nichtionisierende Strahlung zu kosmetischen oder nichtmedizinischen Zwecken am Menschen einsetzen, fallen unter die NiSV. Dazu gehören unter anderem IPL-Geräte, Laser, Ultraschallgeräte, Radiofrequenz-Geräte, Mikrostrom-Geräte und LED-Therapiegeräte. Entscheidend ist die Zweckbestimmung: Wird das Gerät nicht medizinisch, sondern kosmetisch eingesetzt, greift die NiSV.</dd>
                        </div>
                        <div>
                            <dt className="text-lg font-semibold text-gray-900 mb-2">Wie lange müssen NiSV-Dokumente aufbewahrt werden?</dt>
                            <dd className="text-gray-600">Beratungsprotokoll und Einwilligungserklärung müssen nach § 3 NiSV mindestens zehn Jahre aufbewahrt werden. Diese Frist beginnt mit dem Tag der Behandlung. Bei einer digitalen Lösung wie Treatflow wird die Aufbewahrungsfrist automatisch eingehalten, da alle Dokumente zentral und dauerhaft gespeichert werden.</dd>
                        </div>
                        <div>
                            <dt className="text-lg font-semibold text-gray-900 mb-2">Brauche ich für jede Behandlung ein neues Beratungsprotokoll?</dt>
                            <dd className="text-gray-600">Bei einer Erstbehandlung ist ein vollständiges Beratungsprotokoll Pflicht. Bei Folgebehandlungen mit derselben Methode und denselben Parametern kann auf das vorhandene Protokoll verwiesen werden, sofern sich keine relevanten Änderungen ergeben haben. Ändern sich jedoch die Behandlungsparameter, die Körperregion oder der Gesundheitszustand der Kundin, muss eine erneute Beratung und Dokumentation erfolgen. Treatflow macht es einfach, bestehende Protokolle zu duplizieren und bei Bedarf anzupassen.</dd>
                        </div>
                    </dl>
                    <p className="mt-8 text-sm text-gray-500">
                        Rechtliche Hinweise: Diese Seite dient der Information. Für die verbindliche Auslegung der NiSV sind die offiziellen Quellen maßgeblich, z. B. die <a href="https://www.gesetze-im-internet.de/nisv/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">NiSV-Verordnung im Bundesrecht</a> und das Bundesamt für Strahlenschutz.
                    </p>
                </div>
            </section>

            <SocialProofBar />

            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        NiSV-Dokumentation mit Treatflow
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Formulare, Behandlungsdokumentation und Aufbewahrung in einer App. 14 Tage kostenlos testen – keine Kreditkarte nötig.
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
                            href="/kosmetikstudio-software-vergleich"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200 inline-flex items-center justify-center"
                        >
                            Software im Vergleich
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Verwandte Funktionen für dein Studio
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Treatflow vereint NiSV-Dokumentation, Behandlungsdokumentation, Formulare und Terminkalender in einer Plattform.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/kosmetikstudio-software" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Kosmetikstudio Software</span>
                            <span className="text-sm text-gray-600 block mb-2">All-in-One für dein Studio</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren</span>
                        </Link>
                        <Link href="/nisv-dokumentation-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">NiSV-Dokumentation Kosmetikstudio</span>
                            <span className="text-sm text-gray-600 block mb-2">Rechtssicher dokumentieren</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren</span>
                        </Link>
                        <Link href="/behandlungsdokumentation-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Behandlungsdokumentation Kosmetik</span>
                            <span className="text-sm text-gray-600 block mb-2">Digital & NiSV-konform</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren</span>
                        </Link>
                        <Link href="/anamnesebogen-kosmetikstudio" className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Anamnesebögen</span>
                            <span className="text-sm text-gray-600 block mb-2">Formulare & Einwilligungen</span>
                            <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren</span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
