import { FileText, Shield, Archive, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'NiSV-Dokumentation digital: Beratung, Einwilligung & Doku sauber verwalten | Treatflow',
    description: 'Erstelle, speichere und finde Unterlagen schnell wieder. Reduziere Papieraufwand und behalte Fristen im Blick – ideal für NiSV-relevante Behandlungen.',
    keywords: ['NiSV Dokumentation Software', 'NiSV konform dokumentieren', 'NiSV Kosmetikstudio Pflichten', 'NiSV Beratungsprotokoll Vorlage', 'NiSV Einverständniserklärung Aufbewahrung'],
    alternates: {
        canonical: 'https://www.treatflow.io/nisv-dokumentation',
    },
    openGraph: {
        title: 'NiSV-Dokumentation digital: Beratung, Einwilligung & Doku sauber verwalten',
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
                text: 'Nach § 3 NiSV sind Beratungsprotokoll und Einverständniserklärung zehn Jahre aufzubewahren. Eine digitale, rechtssichere Ablage erleichtert die Einhaltung dieser Frist.',
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

            <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
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
                        <img src="/images/funktionen/hero-nisv-sicherheit.jpg" alt="Sicher und rechtssicher dokumentieren" className="w-full rounded-2xl shadow-xl object-cover aspect-[21/9]" loading="lazy" />
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-lg text-gray-600 mb-12">
                        Die <strong>NiSV</strong> (Verordnung zum Schutz vor nichtionisierender Strahlung bei der Anwendung am Menschen) gilt in Deutschland für Anlagen zur Anwendung nichtionisierender Strahlung zu kosmetischen oder sonstigen nichtmedizinischen Zwecken. Aus <strong>§ 3 NiSV</strong> ergeben sich konkrete Anforderungen an Gerätesicherheit, Beratung und Aufklärung sowie an die Dokumentation und Aufbewahrung. Mit der richtigen Software erfüllst du diese Pflichten ohne Zettelwirtschaft.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                        <FileText className="h-8 w-8 mr-3 text-indigo-600" />
                        Beratung und Aufklärung
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Vor der Anwendung musst du deine Kundinnen beraten und aufklären. Das Beratungsprotokoll hält fest, was besprochen wurde. Mit digitalen Formularen und Vorlagen erstellst du einheitliche Protokolle und vermeidest Lücken. Treatflow bietet Formulare für Anamnesen und Einverständniserklärungen, die du an deine Behandlungen anpassen kannst.
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
                        Die schriftliche Einwilligung der Kundin ist erforderlich. Ob Laser, IPL oder andere NiSV-relevante Behandlungen – die Einverständniserklärung muss klar und nachvollziehbar sein. Digitale Formulare mit optionaler Signatur erleichtern die Ablage und die spätere Auffindbarkeit.
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
                        § 3 NiSV verlangt die <strong>Aufbewahrung von Beratungsprotokoll und Einverständniserklärung für zehn Jahre</strong>. In Papierform bedeutet das Ordner, Platz und das Risiko von Verlust. Mit einer digitalen, rechtssicheren Dokumentation speicherst du alle Unterlagen zentral, findest sie schnell wieder und behältst die Fristen im Blick.
                    </p>
                    <Link href="/behandlungsdokumentation" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                        Zur Behandlungsdokumentation
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Häufige Fragen zur NiSV-Dokumentation</h2>
                    <dl className="space-y-8">
                        <div>
                            <dt className="text-lg font-semibold text-gray-900 mb-2">Wie lange muss ich Beratungsprotokoll und Einverständniserklärung aufbewahren?</dt>
                            <dd className="text-gray-600">Nach § 3 NiSV sind Beratungsprotokoll und Einverständniserklärung zehn Jahre aufzubewahren. Eine digitale, rechtssichere Ablage erleichtert die Einhaltung dieser Frist.</dd>
                        </div>
                        <div>
                            <dt className="text-lg font-semibold text-gray-900 mb-2">Was verlangt die NiSV von Betreibern kosmetischer Anlagen?</dt>
                            <dd className="text-gray-600">Die NiSV verlangt u. a. Gerätesicherheit, Beratung und Aufklärung der Kundinnen sowie die Dokumentation von Beratung und Einwilligung. Die genauen Anforderungen ergeben sich aus § 3 NiSV. Weitere Informationen findest du beim Bundesamt für Strahlenschutz (BFS) und beim Bundesministerium für Umwelt.</dd>
                        </div>
                        <div>
                            <dt className="text-lg font-semibold text-gray-900 mb-2">Kann ich NiSV-Dokumentation digital führen?</dt>
                            <dd className="text-gray-600">Ja. Eine softwaregestützte Dokumentation mit Formularen, digitaler Signatur und lückenloser Aufbewahrung ist geeignet, die NiSV-Anforderungen zu erfüllen – und reduziert Papier und Suchaufwand.</dd>
                        </div>
                    </dl>
                    <p className="mt-8 text-sm text-gray-500">
                        Rechtliche Hinweise: Diese Seite dient der Information. Für die verbindliche Auslegung der NiSV sind die offiziellen Quellen maßgeblich, z. B. <a href="https://www.bfs.de/DE/themen/opt/uv/nichtionisierende-strahlung/nisv/nisv_node.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Bundesamt für Strahlenschutz</a> und die Verordnung im Bundesrecht.
                    </p>
                </div>
            </section>

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

            {/* Verwandte Seiten / Cluster-Verlinkung */}
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
