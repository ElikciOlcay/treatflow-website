import { CheckCircle, ArrowRight, CalendarDays, Users, FileText, Shield, Headphones } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Kosmetikstudio Software Vergleich & Checkliste',
    description: 'Online-Buchung, Kundenkartei, Doku/Compliance, Support, Datenschutz: So findest du die passende Lösung – inklusive Checkliste.',
    keywords: ['Kosmetikstudio Software Vergleich', 'Beste Kosmetikstudio Software', 'Kosmetikstudio Software Checkliste'],
    alternates: {
        canonical: 'https://www.treatflow.io/kosmetikstudio-software-vergleich',
    },
    openGraph: {
        title: 'Kosmetikstudio Software im Vergleich: Die Checkliste',
        description: 'Online-Buchung, Kundenkartei, Doku/Compliance, Support, Datenschutz – Checkliste für die passende Software.',
        url: 'https://www.treatflow.io/kosmetikstudio-software-vergleich',
        images: [
            {
                url: '/images/og-image.jpg',
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

export default function KosmetikstudioSoftwareVergleichPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Kosmetikstudio Software im <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Vergleich</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Worauf es wirklich ankommt: Online-Buchung, Kundenkartei, Doku/Compliance, Support und Datenschutz. Mit dieser Checkliste findest du die passende Lösung für dein Studio.
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
                            href="https://app.treatflow.io/auth/register"
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

            <Footer />
        </div>
    );
}
