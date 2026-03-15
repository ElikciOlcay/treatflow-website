import {
    Calendar, Users, ClipboardCheck, FileText, Link2, Bell,
    Shield, Server, Building2, Users as UsersIcon, ArrowRight, MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import GeoFAQ from '../components/GeoFAQ';

export const metadata = {
    title: 'Kosmetikstudio Software Wien - Online-Buchungen & Verwaltung | Treatflow',
    description: 'Software für Kosmetikstudios in Wien. Online-Terminbuchung, Kundenverwaltung und digitale Formulare. Made in Austria. 14 Tage gratis testen.',
    keywords: [
        'Kosmetikstudio Software Wien',
        'Beauty Software Wien',
        'Kosmetik Wien Terminbuchung',
        'Studio Software Wien',
        'Kosmetikstudio Wien digital',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/kosmetikstudio-software-wien',
    },
    openGraph: {
        title: 'Kosmetikstudio Software Wien - Online-Buchungen & Verwaltung | Treatflow',
        description: 'Software für Kosmetikstudios in Wien. Made in Austria. 14 Tage gratis testen.',
        url: 'https://www.treatflow.io/kosmetikstudio-software-wien',
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
        question: 'Ist Treatflow ein österreichisches Unternehmen?',
        answer: 'Ja, Treatflow ist ein österreichisches Unternehmen mit Sitz in Salzburg. Wir kennen den österreichischen Markt und die besonderen Anforderungen von Kosmetikstudios in Wien und ganz Österreich.',
    },
    {
        question: 'Nutzen Wiener Studios bereits Treatflow?',
        answer: 'Ja, zahlreiche Kosmetik- und Beauty-Studios in allen Wiener Bezirken nutzen Treatflow – von kleinen Einzelstudios bis zu mehreren Mitarbeiterinnen. Die Software wächst mit deinem Studio.',
    },
    {
        question: 'Gibt es persönlichen Support vor Ort?',
        answer: 'Unser Support-Team ist in Österreich ansässig und erreichbar per E-Mail sowie in Video-Beratungsgesprächen. Bei Bedarf unterstützen wir dich bei der Einrichtung und dem Umstieg von anderen Systemen.',
    },
    {
        question: 'Wie läuft das Onboarding für Wiener Studios?',
        answer: 'Das Onboarding ist persönlich und unkompliziert: Nach der Registrierung erhältst du eine geführte Einführung. Bei Fragen stehen wir dir zur Seite – auf Deutsch und mit Fokus auf österreichische Besonderheiten.',
    },
];

export default function KosmetikstudioSoftwareWienPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero */}
            <section className="pt-28 pb-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <MapPin className="h-4 w-4 mr-2" />
                        Wien
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Kosmetikstudio Software für <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Wien</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Made in Austria – die perfekte Software für Beauty Studios in Wien und allen Wiener Bezirken. Deutschsprachig, modern und nah am Kunden.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-rose-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-rose-700 transition-colors flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-rose-50 transition-colors"
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
                        Treatflow ist die österreichische Software für Kosmetikstudios in Wien. Wir kennen die Stadt, die Konkurrenz und die Ansprüche von Kunden in Wien. Mit Online-Buchungen, digitaler Kundenverwaltung und professionellen Formularen hilft Treatflow dabei, dein Studio effizienter zu führen – egal ob in der Innenstadt oder den Außenbezirken.
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
                                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                                    <f.icon className="h-5 w-5 text-rose-600" />
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
                    <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
                        <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Vertrauen & Sicherheit</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="flex items-center gap-3">
                                <Shield className="h-8 w-8 text-rose-600 flex-shrink-0" />
                                <span className="text-gray-700">DSGVO-konform</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Server className="h-8 w-8 text-rose-600 flex-shrink-0" />
                                <span className="text-gray-700">EU-Hosting</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Building2 className="h-8 w-8 text-rose-600 flex-shrink-0" />
                                <span className="text-gray-700">Österreichisches Unternehmen</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <UsersIcon className="h-8 w-8 text-rose-600 flex-shrink-0" />
                                <span className="text-gray-700">500+ Studios nutzen Treatflow</span>
                            </div>
                        </div>
                        <p className="text-center text-gray-600 mt-6 text-sm">
                            Made in Austria. Für Studios in Wien und allen Wiener Bezirken.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Jetzt 14 Tage kostenlos testen</h2>
                    <p className="text-rose-100 mb-8">Keine Kreditkarte erforderlich. Starte in wenigen Minuten.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
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
            <GeoFAQ faqs={faqs} themeColor="rose" />

            <Footer />
        </div>
    );
}
