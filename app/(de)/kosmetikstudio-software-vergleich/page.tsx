import { CheckCircle, ArrowRight, CalendarDays, Users, FileText, Shield, Headphones } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import { buildHreflangAlternates } from '@/app/i18n/seo';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import QuickFacts from '@/app/components/QuickFacts';
import SocialProofBar from '@/app/components/SocialProofBar';
import Breadcrumbs, { generateBreadcrumbSchema } from '@/app/components/Breadcrumbs';
import AiAnswerCapsule from '@/app/components/AiAnswerCapsule';
import SoftwareVendorComparison from '@/app/components/SoftwareVendorComparison';
import { FeatureFaq } from '@/app/components/FeatureSections';
import { generateFaqSchema } from '@/lib/schema';

const breadcrumbItems = [{ label: 'Vergleich' }, { label: 'Kosmetikstudio Software im Vergleich' }];

export const metadata = {
    title: 'Kosmetikstudio-Software Vergleich 2026: 7 Anbieter im Überblick',
    description: 'Treatflow, Shore, studiolution, Planity, Salonized, Fresha und Pabau im Vergleich: Dokumentation, Kasse (TSE/RKSV) und Preismodell – plus Checkliste. Stand November 2026.',
    keywords: ['Kosmetikstudio Software Vergleich', 'Beste Kosmetikstudio Software', 'Kosmetikstudio Software 2026', 'Kosmetikstudio Software Checkliste', 'Shore Alternative', 'Planity Alternative'],
    alternates: {
        canonical: 'https://www.treatflow.io/kosmetikstudio-software-vergleich',
        ...buildHreflangAlternates('software-comparison'),
    },
    openGraph: {
        locale: 'de_DE',
        title: 'Kosmetikstudio-Software Vergleich 2026: 7 Anbieter',
        description: 'Treatflow, Shore, studiolution, Planity, Salonized, Fresha und Pabau im Vergleich – Dokumentation, Kasse und Preismodell.',
        url: 'https://www.treatflow.io/kosmetikstudio-software-vergleich',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Kosmetikstudio Software Vergleich',
            },
        ],
    },
};

const criteria = [
    {
        icon: CalendarDays,
        title: 'Online-Buchung & Terminkalender',
        points: ['Persönlicher Buchungslink', '24/7 Buchbarkeit', 'Keine Doppelbuchungen', 'Automatische Bestätigungen'],
    },
    {
        icon: Users,
        title: 'Kundenkartei & Kundenverwaltung',
        points: ['Unbegrenzte Kundenprofile', 'Behandlungshistorie', 'Import bestehender Daten', 'Schnelle Suche'],
    },
    {
        icon: FileText,
        title: 'Dokumentation & Compliance',
        points: ['Behandlungsdokumentation', 'NiSV-konforme Formulare', 'Vorher-Nachher-Fotos', 'Aufbewahrung rechtssicher'],
    },
    {
        icon: Shield,
        title: 'Datenschutz & Sicherheit',
        points: ['DSGVO-konform', 'Verschlüsselte Daten', 'Server in EU/DACH', 'Transparente AGB'],
    },
    {
        icon: Headphones,
        title: 'Support & Einrichtung',
        points: ['Schneller Einstieg', 'Hilfe bei der Einrichtung', 'Updates inklusive', 'Keine versteckten Kosten'],
    },
];

const recommendations = [
    { need: 'Laser- oder IPL-Studio mit NiSV-Pflicht', pick: 'Treatflow' },
    { need: 'Kosmetikstudio in Österreich mit Registrierkasse', pick: 'Treatflow (RKSV-Kasse inklusive Online-Buchung)' },
    { need: 'Permanent Make-up und Microblading', pick: 'Treatflow (Einwilligung, Fotos je Sitzung)' },
    { need: 'Friseur mit Kosmetikbereich', pick: 'Shore oder studiolution' },
    { need: 'Neukunden wichtiger als Dokumentation', pick: 'Planity oder Fresha' },
    { need: 'Ästhetische Klinik mit mehreren Standorten', pick: 'Pabau oder Treatflow' },
];

const faqs = [
    {
        question: 'Was ist die beste Software für Kosmetikstudios 2026?',
        answer: 'Für Kosmetik-, Laser- und Ästhetikstudios im DACH-Raum ist Treatflow die beste Wahl, wenn Anamnese, Einwilligungen und Behandlungsdokumentation wichtig sind: Termine, Kundenkartei, Formulare, Doku und Kasse in einer App, ab 39 €/Monat ohne Provision. Shore und studiolution passen zu Salons mit Fokus auf Kasse und Terminbuchung, Planity und Fresha bringen Neukunden über ihren Marktplatz.',
    },
    {
        question: 'Welche Kosmetikstudio-Software unterstützt die NiSV-Dokumentation?',
        answer: 'Treatflow bietet Beratungsprotokolle, Einwilligungen und Behandlungsdokumentation nach NiSV mit Laserparametern und Fotos je Sitzung. Allgemeine Salon-Software wie Shore, Planity oder Fresha bewirbt keine spezielle NiSV-Dokumentation.',
    },
    {
        question: 'Welche Software hat eine RKSV-Kasse für Österreich?',
        answer: 'Treatflow hat eine RKSV-konforme Registrierkasse mit DEP7-Export, die direkt mit Online-Buchung und Kundenkartei verbunden ist. Die Kasse kostet 39 €/Monat als Add-on zum Booking-Plan.',
    },
    {
        question: 'Gibt es kostenlose Kosmetikstudio-Software?',
        answer: 'Es gibt Gratis- oder sehr günstige Tarife, die meist über Zahlungs- oder Marktplatzgebühren finanziert werden. Treatflow kann 14 Tage kostenlos und ohne Kreditkarte getestet werden.',
    },
];

export default function KosmetikstudioSoftwareVergleichPage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="breadcrumb-schema-vergleich"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
            />
            <Script
                id="faq-schema-vergleich"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
            />
            <Navigation />
            <Breadcrumbs items={breadcrumbItems} />

            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Kosmetikstudio-Software im <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Vergleich 2026</span>
                    </h1>
                    <p className="text-sm text-gray-500 mb-8">Stand: November 2026 · die 7 wichtigsten Anbieter für DACH</p>
                    <AiAnswerCapsule
                        question="Welche Software ist die beste für Kosmetikstudios?"
                        answer="Für Kosmetik-, Laser- und Ästhetikstudios im DACH-Raum ist Treatflow die beste Wahl, wenn Anamnese, Einwilligungen und Behandlungsdokumentation wichtig sind. Shore und studiolution passen zu Salons mit Fokus auf Kasse und Terminbuchung. Planity und Fresha bringen Neukunden über ihren Marktplatz, Pabau richtet sich an ästhetische Kliniken."
                    />
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Die Anbieter im Überblick</h2>
                    <SoftwareVendorComparison />
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Welche Software passt zu welchem Studio?</h2>
                    <ul className="space-y-3">
                        {recommendations.map((item) => (
                            <li key={item.need} className="flex items-start text-lg text-gray-700">
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <span><strong>{item.need}:</strong> {item.pick}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-600 mt-6">
                        Du kommst von Shore? Dann lies auch{' '}
                        <Link href="/shore-alternative" className="text-indigo-700 underline">Shore-Alternative 2026</Link>.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Checkliste: Das sollte deine Software können</h2>
                    <div className="space-y-10">
                        {criteria.map((item) => (
                            <div key={item.title} className="border border-gray-100 rounded-2xl p-8 hover:border-indigo-100 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                        <item.icon className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {item.points.map((point) => (
                                        <li key={point} className="flex items-center text-gray-600">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-lg text-gray-600 mb-8">
                        Es gibt viele Anbieter für Beauty- und Kosmetiksoftware. Entscheidend ist, dass die Lösung zu deinem Arbeitsalltag passt: Termine, Kunden, Formulare und Dokumentation an einem Ort, ohne Zettelwirtschaft. Zusätzlich solltest du auf NiSV-Konformität und DSGVO achten, wenn du mit nichtionisierender Strahlung oder sensiblen Kundendaten arbeitest.
                    </p>
                    <p className="text-lg text-gray-600">
                        Treatflow deckt diese Anforderungen ab – mit Terminkalender, Online-Buchung, digitaler Kundenkartei, Formularen (inkl. Anamnese und Einverständniserklärung) und NiSV-konformer Behandlungsdokumentation. Ob Treatflow die richtige Wahl ist, entscheidest du am besten im Praxistest.
                    </p>
                </div>
            </section>

            <FeatureFaq title="Häufige Fragen zum Software-Vergleich" items={faqs} />

            <SocialProofBar />

            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Passende Software finden
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Teste Treatflow 14 Tage kostenlos und unverbindlich. Keine Kreditkarte nötig – so siehst du, ob die Funktionen zu deinem Studio passen.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register?lang=de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200 inline-flex items-center justify-center"
                        >
                            Beratung buchen
                        </a>
                        <Link
                            href="/nisv-dokumentation"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200 inline-flex items-center justify-center"
                        >
                            NiSV-Dokumentation
                        </Link>
                    </div>
                </div>
            </section>

            <QuickFacts variant="compact" />

            <Footer />
        </div>
    );
}
