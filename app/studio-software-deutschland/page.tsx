import {
    Calendar, Users, ClipboardCheck, FileText, Link2, Bell,
    Shield, Server, Building2, Users as UsersIcon, ArrowRight, MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import GeoFAQ from '../components/GeoFAQ';

export const metadata = {
    title: 'Studio Software Deutschland: Beauty & Kosmetik',
    description: 'Studio-Software für Beauty Studios in Deutschland. Online-Buchungen, Kundenverwaltung, digitale Formulare und NiSV-Doku. DSGVO-konform. 14 Tage gratis.',
    keywords: [
        'Studio Software Deutschland',
        'Kosmetikstudio Software Deutschland',
        'Beauty Software Deutschland',
        'NiSV Software Deutschland',
        'Kosmetik Software DE',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/studio-software-deutschland',
    },
    openGraph: {
        title: 'Studio Software Deutschland: Beauty & Kosmetikstudios',
        description: 'Die moderne Studio-Software für Beauty Studios in Deutschland. DSGVO-konform, NiSV-ready. 14 Tage gratis testen.',
        url: 'https://www.treatflow.io/studio-software-deutschland',
    },
};

const features = [
    { icon: Calendar, title: 'Terminkalender', desc: 'Tages-, Wochen- und Monatsansicht für maximale Übersicht.' },
    { icon: Users, title: 'Kundenverwaltung', desc: 'Alle Kundendaten und Behandlungen an einem Ort.' },
    { icon: ClipboardCheck, title: 'Digitale Formulare', desc: 'Anamnese und Einwilligungen digital, rechtssicher.' },
    { icon: FileText, title: 'Behandlungsdokumentation', desc: 'NiSV-konforme Dokumentation mit Fotos und Notizen.' },
    { icon: Link2, title: 'Online-Buchungen', desc: 'Persönlicher Buchungslink – Kunden buchen 24/7 selbst.' },
    { icon: Bell, title: 'Erinnerungen', desc: 'Automatische E-Mail und SMS – bis zu 80% weniger No-Shows.' },
];

const faqs = [
    {
        question: 'Ist Treatflow in Deutschland DSGVO-konform?',
        answer: 'Ja, Treatflow ist vollständig DSGVO-konform. Alle Kundendaten werden verschlüsselt in der EU gespeichert. Du erfüllst mit Treatflow alle deutschen Datenschutzanforderungen für Kosmetikstudios.',
    },
    {
        question: 'Erfüllt Treatflow die NiSV-Anforderungen?',
        answer: 'Ja, Treatflow unterstützt die NiSV-konforme Dokumentation für kosmetische Behandlungen. Du kannst Behandlungen mit Fotos, Produkten und Nachsorgehinweisen dokumentieren – genau wie vom Gesetzgeber gefordert.',
    },
    {
        question: 'Gibt es deutsche Sprachunterstützung?',
        answer: 'Ja, Treatflow ist vollständig auf Deutsch verfügbar – inklusive Oberfläche, Formularen, E-Mails und SMS-Vorlagen. Alle Texte sind professionell formuliert und branchenüblich.',
    },
    {
        question: 'Wie werden die Preise abgerechnet – in EUR?',
        answer: 'Ja, alle Preise werden in Euro (EUR) abgerechnet. Du zahlst monatlich per SEPA-Lastschrift oder Kreditkarte. Es gibt keine versteckten Kosten – 14 Tage kostenlos testen, danach ab 39€/Monat.',
    },
];

export default function StudioSoftwareDeutschlandPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero */}
            <section className="pt-28 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <MapPin className="h-4 w-4 mr-2" />
                        Deutschland
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Studio Software für <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Deutschland</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        DSGVO-konform, NiSV-ready, deutschsprachig und auf EU-Servern gehostet – die passende Software für Beauty Studios in ganz Deutschland.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
                        >
                            Beratung buchen
                        </a>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-12 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-600 leading-relaxed">
                        Treatflow wurde für Beauty- und Kosmetikstudios entwickelt, die Wert auf Datenschutz, rechtssichere Dokumentation und moderne Arbeitsabläufe legen. Mit deutscher Sprachunterstützung, NiSV-konformer Dokumentation und EU-Hosting entspricht Treatflow genau den Anforderungen deutscher Studios.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Alles, was dein Studio braucht</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <f.icon className="h-5 w-5 text-indigo-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                                <p className="text-sm text-gray-600">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100">
                        <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Vertrauen & Sicherheit</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="flex items-center gap-3">
                                <Shield className="h-8 w-8 text-indigo-600 flex-shrink-0" />
                                <span className="text-gray-700">DSGVO-konform</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Server className="h-8 w-8 text-indigo-600 flex-shrink-0" />
                                <span className="text-gray-700">EU-Hosting</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Building2 className="h-8 w-8 text-indigo-600 flex-shrink-0" />
                                <span className="text-gray-700">Österreichisches Unternehmen</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <UsersIcon className="h-8 w-8 text-indigo-600 flex-shrink-0" />
                                <span className="text-gray-700">500+ Studios nutzen Treatflow</span>
                            </div>
                        </div>
                        <p className="text-center text-gray-600 mt-6 text-sm">
                            Genutzt von Studios in Berlin, München, Hamburg, Köln und ganz Deutschland
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Jetzt 14 Tage kostenlos testen</h2>
                    <p className="text-indigo-100 mb-8">Keine Kreditkarte erforderlich. Starte in wenigen Minuten.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                        >
                            14 Tage gratis testen
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                        >
                            Beratung buchen
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <GeoFAQ faqs={faqs} themeColor="indigo" />

            <Footer />
        </div>
    );
}
