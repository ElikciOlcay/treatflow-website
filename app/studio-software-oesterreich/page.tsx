import {
    Calendar, Users, ClipboardCheck, FileText, Link2, Bell,
    Shield, Server, Building2, Users as UsersIcon, ArrowRight, MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import GeoFAQ from '../components/GeoFAQ';

export const metadata = {
    title: 'Studio Software Österreich - Für Beauty & Kosmetikstudios | Treatflow',
    description: 'Die Studio-Software aus Österreich für Kosmetikstudios. Online-Buchungen, Kundenverwaltung und digitale Formulare. Made in Austria. DSGVO-konform. 14 Tage gratis.',
    keywords: [
        'Studio Software Österreich',
        'Kosmetikstudio Software Österreich',
        'Beauty Software AT',
        'Kosmetik Software Wien',
        'Studio Software AT',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/studio-software-oesterreich',
    },
    openGraph: {
        title: 'Studio Software Österreich - Für Beauty & Kosmetikstudios | Treatflow',
        description: 'Die Studio-Software aus Österreich für Kosmetikstudios. Made in Austria. DSGVO-konform. 14 Tage gratis.',
        url: 'https://www.treatflow.io/studio-software-oesterreich',
    },
};

const features = [
    { icon: Calendar, title: 'Terminkalender', desc: 'Tages-, Wochen- und Monatsansicht für maximale Übersicht.' },
    { icon: Users, title: 'Kundenverwaltung', desc: 'Alle Kundendaten und Behandlungen an einem Ort.' },
    { icon: ClipboardCheck, title: 'Digitale Formulare', desc: 'Anamnese und Einwilligungen digital, rechtssicher.' },
    { icon: FileText, title: 'Behandlungsdokumentation', desc: 'Behandlungen mit Fotos und Notizen dokumentieren.' },
    { icon: Link2, title: 'Online-Buchungen', desc: 'Persönlicher Buchungslink – Kunden buchen 24/7 selbst.' },
    { icon: Bell, title: 'Erinnerungen', desc: 'Automatische E-Mail und SMS – bis zu 80% weniger No-Shows.' },
];

const faqs = [
    {
        question: 'Welche Vorteile bringt ein österreichisches Unternehmen?',
        answer: 'Treatflow ist ein österreichisches Unternehmen mit Sitz in Salzburg. Du arbeitest mit einem lokalen Team, das die österreichischen Besonderheiten kennt – von der Buchhaltung bis zum Datenschutz. Kurze Wege und persönlicher Support.',
    },
    {
        question: 'Ist Treatflow in Österreich DSGVO-konform?',
        answer: 'Ja, Treatflow ist vollständig DSGVO-konform und entspricht den österreichischen Datenschutzbestimmungen (DSG). Alle Kundendaten werden verschlüsselt in der EU gespeichert – sicher und rechtlich abgesichert.',
    },
    {
        question: 'Gibt es lokalen Support für österreichische Studios?',
        answer: 'Ja, unser Team unterstützt dich in deutscher Sprache – per E-Mail und in persönlichen Beratungsgesprächen. Bei Bedarf helfen wir auch bei der Einrichtung und dem Datenumzug von anderen Systemen.',
    },
    {
        question: 'Was bedeutet „Made in Austria“ bei Treatflow?',
        answer: 'Treatflow wurde in Salzburg entwickelt und ist ein österreichisches Produkt. Die Software ist auf die Anforderungen österreichischer Beauty- und Kosmetikstudios zugeschnitten – inklusive EUR-Preisen und österreichischem Kundenservice.',
    },
];

export default function StudioSoftwareOesterreichPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero */}
            <section className="pt-28 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <MapPin className="h-4 w-4 mr-2" />
                        Österreich
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Studio Software aus <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Österreich</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Made in Austria, EU-gehostet, deutschsprachig und mit lokalem Support – die perfekte Wahl für Kosmetikstudios in ganz Österreich.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
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
                        Treatflow wurde in Österreich entwickelt und verbindet moderne Technologie mit österreichischer Zuverlässigkeit. Als einheimisches Unternehmen kennen wir die Bedürfnisse heimischer Beauty- und Kosmetikstudios – von der Buchhaltung bis zum Datenschutz. EU-Hosting, deutsche Sprache und ein Support-Team aus Wien.
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
                                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                                    <f.icon className="h-5 w-5 text-emerald-600" />
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
                    <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                        <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Vertrauen & Sicherheit</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="flex items-center gap-3">
                                <Shield className="h-8 w-8 text-emerald-600 flex-shrink-0" />
                                <span className="text-gray-700">DSGVO-konform</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Server className="h-8 w-8 text-emerald-600 flex-shrink-0" />
                                <span className="text-gray-700">EU-Hosting</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Building2 className="h-8 w-8 text-emerald-600 flex-shrink-0" />
                                <span className="text-gray-700">Österreichisches Unternehmen</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <UsersIcon className="h-8 w-8 text-emerald-600 flex-shrink-0" />
                                <span className="text-gray-700">500+ Studios nutzen Treatflow</span>
                            </div>
                        </div>
                        <p className="text-center text-gray-600 mt-6 text-sm">
                            Ein österreichisches Unternehmen. Genutzt von Studios in Wien, Graz, Linz, Salzburg und ganz Österreich.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Jetzt 14 Tage kostenlos testen</h2>
                    <p className="text-emerald-100 mb-8">Keine Kreditkarte erforderlich. Starte in wenigen Minuten.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
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
            <GeoFAQ faqs={faqs} themeColor="emerald" />

            <Footer />
        </div>
    );
}
