import { FileText, Shield, Archive, ClipboardList, Zap, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Script from 'next/script';
import { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import FeatureHero, { FeatureTitleHighlight } from '../components/FeatureHero';
import {
    FeatureUnderstand,
    FeatureHowItWorks,
    FeatureCards,
    FeatureFaq,
    FeatureRelated,
    FeaturePageCta,
} from '../components/FeatureSections';

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

const faqs = [
    {
        question: 'Wie lange muss ich Beratungsprotokoll und Einverständniserklärung aufbewahren?',
        answer: 'Nach § 3 NiSV sind Beratungsprotokoll und Einverständniserklärung zehn Jahre aufzubewahren. Diese Frist beginnt mit dem Tag der Behandlung. Eine digitale, rechtssichere Ablage erleichtert die Einhaltung dieser Frist.',
    },
    {
        question: 'Was verlangt die NiSV von Betreibern kosmetischer Anlagen?',
        answer: 'Die NiSV (Verordnung zum Schutz vor nichtionisierender Strahlung) verlangt u. a. Gerätesicherheit, Beratung und Aufklärung der Kundinnen sowie die Dokumentation von Beratung und Einwilligung. Die genauen Anforderungen ergeben sich aus § 3 NiSV.',
    },
    {
        question: 'Kann ich NiSV-Dokumentation digital führen?',
        answer: 'Ja. Eine softwaregestützte Dokumentation mit Formularen, digitaler Signatur und lückenloser Aufbewahrung ist geeignet, die NiSV-Anforderungen zu erfüllen – und reduziert Papier und Suchaufwand.',
    },
    {
        question: 'Welche Geräte fallen unter die NiSV?',
        answer: 'Alle Geräte, die nichtionisierende Strahlung zu kosmetischen oder nichtmedizinischen Zwecken am Menschen einsetzen, fallen unter die NiSV. Dazu gehören unter anderem IPL-Geräte, Laser, Ultraschallgeräte, Radiofrequenz-Geräte, Mikrostrom-Geräte und LED-Therapiegeräte. Entscheidend ist die Zweckbestimmung: Wird das Gerät kosmetisch eingesetzt, greift die NiSV.',
    },
    {
        question: 'Wie lange müssen NiSV-Dokumente aufbewahrt werden?',
        answer: 'Beratungsprotokoll und Einwilligungserklärung müssen nach § 3 NiSV mindestens zehn Jahre aufbewahrt werden. Diese Frist beginnt mit dem Tag der Behandlung. Bei einer digitalen Lösung wie Treatflow wird die Aufbewahrungsfrist automatisch eingehalten.',
    },
    {
        question: 'Brauche ich für jede Behandlung ein neues Beratungsprotokoll?',
        answer: 'Bei einer Erstbehandlung ist ein vollständiges Beratungsprotokoll Pflicht. Bei Folgebehandlungen mit derselben Methode kann auf das vorhandene Protokoll verwiesen werden, sofern sich keine relevanten Änderungen ergeben haben. Ändern sich die Parameter oder der Gesundheitszustand der Kundin, muss eine erneute Beratung und Dokumentation erfolgen.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
};

export default function NisvDokumentationPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Funktionen', href: '/funktionen' },
                            { label: 'NiSV-Dokumentation' },
                        ])
                    ),
                }}
            />
            <Script id="nisv-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <FeatureHero
                theme="teal"
                breadcrumbs={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'NiSV-Dokumentation' },
                ]}
                eyebrow="NiSV-konform"
                eyebrowIcon={Shield}
                title={<>NiSV-Dokumentation <FeatureTitleHighlight theme="teal">digital</FeatureTitleHighlight></>}
                description="Beratung, Einwilligung und Archiv – weniger Papier, Fristen im Blick."
                chips={['10 Jahre Archiv', 'Digitale Signatur', 'Fristen im Blick']}
                secondaryCta={{ label: 'Zu den Formularen', href: '/formulare' }}
                image={{
                    src: '/images/lifestyle/nisv-dokumentation-sicherheit.png',
                    alt: 'NiSV-Dokumentation digital und sicher im Kosmetikstudio',
                }}
            />

            <FeatureUnderstand
                theme="teal"
                title="NiSV-Pflichten einfach digital erledigen"
                description="Bei Behandlungen mit Laser, IPL oder Ultraschall musst du Beratung, Einwilligung und Doku laut Gesetz aufbewahren. Treatflow macht das digital und übersichtlich."
                items={[
                    {
                        icon: FileText,
                        title: 'Beratung dokumentieren',
                        text: 'Vor der Behandlung musst du deine Kundin über Wirkung, Risiken und Nachsorge aufklären. Mit Vorlagen geht nichts vergessen.',
                    },
                    {
                        icon: CheckCircle,
                        title: 'Einwilligung digital unterschreiben',
                        text: 'Deine Kundin unterschreibt am Tablet oder Smartphone. Die Einwilligung wird automatisch im Kundenprofil gespeichert.',
                    },
                    {
                        icon: Archive,
                        title: '10 Jahre sicher aufbewahrt',
                        text: 'Das Gesetz verlangt eine Aufbewahrung von zehn Jahren. Digital musst du keine Ordner durchsuchen – alles ist zentral und auffindbar.',
                    },
                ]}
            />

            <FeatureHowItWorks
                theme="teal"
                description="In drei Schritten von der Beratung zur archivierten Dokumentation."
                steps={[
                    { title: 'Kundin beraten und aufklären', text: 'Nutze eine Vorlage für das Beratungsprotokoll. Darin haltst du fest: Welche Behandlung, welche Risiken, welche Nachsorge.' },
                    { title: 'Einwilligung unterschreiben lassen', text: 'Deine Kundin unterschreibt digital am Tablet oder Smartphone. Die Erklärung wird dem Kundenprofil zugeordnet.' },
                    { title: 'Dokumentieren und archivieren', text: 'Halte Geräteparameter und Behandlungsverlauf fest. Alles bleibt mindestens 10 Jahre gespeichert und auffindbar.' },
                ]}
            />

            {/* Kondensierter Bildungs-Content */}
            <section className="py-14 sm:py-16 bg-white border-b border-gray-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 hyphens-none" lang="de">
                        NiSV-Pflichten im Überblick
                    </h2>
                    <p className="text-base text-gray-600 leading-relaxed mb-8">
                        Die NiSV gilt in Deutschland für Anlagen mit nichtionisierender Strahlung zu kosmetischen Zwecken.
                        Aus § 3 NiSV folgen konkrete Anforderungen an Beratung, Einwilligung und Aufbewahrung.
                        Mit Treatflow erfüllst du diese Pflichten digital – ohne Zettelwirtschaft.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Beratung und Aufklärung</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Vor der Anwendung musst du Kundinnen beraten: Art der Behandlung, erwartete Wirkungen, Risiken und Nachsorge.
                        Digitale Formulare und Vorlagen helfen, Lücken zu vermeiden.{' '}
                        <Link href="/formulare" className="text-teal-700 font-medium hover:underline">
                            Zu den Formularen
                        </Link>
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Einwilligung</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Die schriftliche Einwilligung ist erforderlich. In Treatflow unterschreibst du am Tablet oder Smartphone
                        und ordnest die Erklärung dem{' '}
                        <Link href="/kundenverwaltung" className="text-teal-700 font-medium hover:underline">
                            Kundenprofil
                        </Link>{' '}
                        zu.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Aufbewahrung: 10 Jahre</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        Beratungsprotokoll und Einverständniserklärung sind zehn Jahre aufzubewahren (Frist ab Behandlungstag).
                        Digital speicherst du zentral und findest Unterlagen schnell wieder –{' '}
                        <Link href="/behandlungsdokumentation" className="text-teal-700 font-medium hover:underline">
                            zur Behandlungsdokumentation
                        </Link>
                        .
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Welche Behandlungen fallen unter die NiSV?</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        Typisch betroffen sind Geräte mit optischer oder elektromagnetischer Strahlung zu kosmetischen Zwecken:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 mb-6">
                        <li>Laser- und IPL-Haarentfernung</li>
                        <li>Ultraschallbehandlungen</li>
                        <li>Radiofrequenz (RF)</li>
                        <li>Mikrostrom</li>
                        <li>LED-Therapie</li>
                    </ul>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Parameter wie Energie, Frequenz oder Wellenlänge gehören zur Dokumentation. Entscheidend ist die
                        kosmetische Zweckbestimmung des Geräts.
                    </p>
                </div>
            </section>

            <FeatureCards
                theme="teal"
                title="Was du bekommst"
                description="Digitale NiSV-Dokumentation – von der Beratung bis zum Archiv."
                items={[
                    {
                        icon: FileText,
                        title: 'Beratungsprotokolle',
                        text: 'Einheitliche Vorlagen für Aufklärung und Risiken.',
                        points: ['Vorlagen', 'Vollständig', 'Anpassbar'],
                    },
                    {
                        icon: CheckCircle,
                        title: 'Einwilligungen',
                        text: 'Digitale Signatur am Gerät – im Kundenprofil gespeichert.',
                        points: ['Unterschrift', 'Zuordnung', 'Nachvollziehbar'],
                    },
                    {
                        icon: Archive,
                        title: '10-Jahre-Archiv',
                        text: 'Unterlagen zentral, suchbar und fristgerecht aufbewahrt.',
                        points: ['Zentral', 'Auffindbar', 'DSGVO-konform'],
                    },
                    {
                        icon: ClipboardList,
                        title: 'Behandlungsparameter',
                        text: 'Gerätewerte und Verlauf zur Sitzung festhalten.',
                        points: ['Laser/IPL', 'RF & US', 'Nachsorge'],
                    },
                    {
                        icon: Zap,
                        title: 'Weniger Papier',
                        text: 'Kein Ordnerchaos – alles digital beim Kundenprofil.',
                        points: ['Schneller', 'Weniger Suchen', 'Im Studio'],
                    },
                    {
                        icon: Shield,
                        title: 'Rechtssicherer Workflow',
                        text: 'Beratung, Einwilligung und Doku greifen ineinander.',
                        points: ['§ 3 NiSV', 'Formulare', 'Dokumentation'],
                    },
                ]}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zur NiSV-Dokumentation" items={faqs} />

            <FeatureRelated
                items={[
                    { href: '/behandlungsdokumentation', title: 'Behandlungsdokumentation', description: 'Fotos, Notizen & Parameter' },
                    { href: '/formulare', title: 'Formulare', description: 'Anamnese & Einwilligungen' },
                    { href: '/kundenverwaltung', title: 'Kundenverwaltung', description: 'Unterlagen im Kundenprofil' },
                ]}
            />

            <FeaturePageCta
                theme="teal"
                title="NiSV-Pflichten digital erledigen?"
                description="14 Tage kostenlos testen – Beratung, Einwilligung und Archiv in einer App."
                secondaryLabel="Zu den Formularen"
                secondaryHref="/formulare"
            />

            <Footer />
        </div>
    );
}
