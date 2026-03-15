import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, Zap,
    ClipboardCheck, Settings, CheckCircle
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Laser Studio Software Deutschland - NiSV-konform dokumentieren | Treatflow',
    description: 'Software für Laser-Studios in Deutschland. NiSV-konforme Dokumentation, digitale Einwilligungen und Online-Buchungen. DSGVO-konform. 14 Tage gratis.',
    keywords: ['Laser Studio Software Deutschland', 'Laserhaarentfernung Software DE', 'NiSV Dokumentation Deutschland', 'Laser Klinik Software DE', 'IPL Software Deutschland'],
    alternates: { canonical: 'https://www.treatflow.io/laserstudio-software-deutschland' },
    openGraph: {
        title: 'Laser Studio Software Deutschland - NiSV-konform dokumentieren | Treatflow',
        description: 'Software für Laser-Studios in Deutschland. NiSV-konforme Dokumentation, digitale Einwilligungen und Online-Buchungen.',
        url: 'https://www.treatflow.io/laserstudio-software-deutschland',
    },
};

const features = [
    { icon: Shield, title: 'NiSV-konforme Dokumentation', desc: 'Parameter, Zonen und Geräte rechtssicher dokumentieren.' },
    { icon: ClipboardCheck, title: 'Digitale Einwilligungen', desc: 'Aufklärung und Einwilligung digital mit Unterschrift.' },
    { icon: Settings, title: 'Laser-Parameter erfassen', desc: 'Wellenlänge, Energie, Spot-Größe und Durchgänge erfassen.' },
    { icon: Calendar, title: 'Online-Buchungen', desc: '24/7 Buchungen für Erstberatung und Serienbehandlungen.' },
    { icon: Users, title: 'Kundenverwaltung', desc: 'Hauttyp, Kontraindikationen und Behandlungsverlauf im Profil.' },
    { icon: Bell, title: 'Erinnerungen', desc: 'Automatische Erinnerungen reduzieren No-Shows deutlich.' },
];

const faqs = [
    { q: 'Erfüllt Treatflow die NiSV-Anforderungen in Deutschland?', a: 'Ja. Seit 2021 gilt die NiSV mit Dokumentationspflicht für Laserbehandlungen. Treatflow unterstützt die erforderliche Dokumentation von Geräten, Parametern, Behandlungszonen und Ergebnissen – NiSV-konform und digital.' },
    { q: 'Kann ich Laser-Parameter dokumentieren?', a: 'Ja. Du kannst Wellenlänge, Energie, Spot-Größe, Anzahl der Durchgänge und andere relevante Parameter pro Behandlung erfassen und speichern.' },
    { q: 'Sind digitale Einwilligungen rechtlich gültig?', a: 'Ja. Digitale Aufklärungs- und Einwilligungsbögen mit elektronischer Unterschrift sind in Deutschland rechtlich anerkannt, sofern sie ordnungsgemäß ausgefüllt und gespeichert werden.' },
    { q: 'Unterstützt Treatflow IPL-Behandlungen?', a: 'Ja. Treatflow eignet sich für Laser- und IPL-Behandlungen. Du dokumentierst Gerät, Parameter und Zonen für beide Verfahren.' },
];

export default function LaserstudioSoftwareDeutschlandPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Zap className="h-4 w-4 mr-2" />
                            Für Deutschland
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Laser Studio Software für{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Deutschland</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                            NiSV-konforme Dokumentation, digitale Einwilligungen und Online-Buchungen für dein Laser-Studio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                                14 Tage kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                                Beratung buchen
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
                        Seit 2021 verlangt die NiSV in Deutschland eine lückenlose Dokumentation von Laserbehandlungen. Für Laser-Studios und Kliniken bedeutet das: Parameter, Behandlungszonen und Gerätedaten müssen festgehalten werden. Treatflow unterstützt dich mit NiSV-konformer Dokumentation, digitalen Einwilligungen und allen Funktionen, die ein modernes Laser-Studio braucht.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                    <f.icon className="h-5 w-5 text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                                <p className="text-gray-600 text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                        <div className="flex flex-wrap gap-6 items-center justify-center text-gray-700">
                            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> NiSV-konform</span>
                            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> DSGVO-konform</span>
                            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> EU-Hosting</span>
                            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Österreichisches Unternehmen</span>
                            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Genutzt von Laser-Studios in ganz Deutschland.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Bereit für NiSV-konforme Dokumentation?</h2>
                    <p className="text-blue-100 mb-6">Teste Treatflow 14 Tage kostenlos – keine Kreditkarte nötig.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer"
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            Beratung buchen
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Häufige Fragen – Laser Studio DE</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
                                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
