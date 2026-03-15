import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, Palette,
    ClipboardCheck, Camera, CheckCircle
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Permanent Makeup Software Deutschland - PMU & Microblading | Treatflow',
    description: 'Software für Permanent Makeup Studios in Deutschland. Digitale Einwilligungen, Vorher-Nachher Dokumentation und Online-Buchungen. 14 Tage gratis testen.',
    keywords: ['Permanent Makeup Software Deutschland', 'PMU Software DE', 'Microblading Software Deutschland', 'Permanent Makeup Terminbuchung DE', 'PMU Einwilligung Deutschland'],
    alternates: { canonical: 'https://www.treatflow.io/permanent-makeup-software-deutschland' },
    openGraph: {
        title: 'Permanent Makeup Software Deutschland - PMU & Microblading | Treatflow',
        description: 'Software für Permanent Makeup Studios in Deutschland. Digitale Einwilligungen, Vorher-Nachher Dokumentation und Online-Buchungen.',
        url: 'https://www.treatflow.io/permanent-makeup-software-deutschland',
    },
};

const features = [
    { icon: ClipboardCheck, title: 'Digitale Einwilligungen', desc: 'Aufklärung und Einwilligung digital mit Unterschrift vor der Behandlung.' },
    { icon: Camera, title: 'Vorher-Nachher Dokumentation', desc: 'Fotos und Behandlungsverlauf pro Kunde festhalten.' },
    { icon: Calendar, title: 'Online-Buchungen', desc: '24/7 Buchungen für Erstbehandlung, Nachstich und Auffrischung.' },
    { icon: Users, title: 'Kundenprofile', desc: 'Allergien, Farben und Behandlungshistorie im Überblick.' },
    { icon: FileText, title: 'Behandlungsdokumentation', desc: 'Technik, Farben und Notizen pro Sitzung dokumentieren.' },
    { icon: Shield, title: 'DSGVO-konform', desc: 'EU-Hosting und datenschutzkonforme Speicherung.' },
];

const faqs = [
    { q: 'Wie dokumentiere ich PMU-Behandlungen mit Treatflow?', a: 'Bei jeder Behandlung kannst du Fotos hochladen, verwendete Farben und Techniken erfassen sowie Notizen hinzufügen. Die Vorher-Nachher Dokumentation ist ideal für Nachstiche und dein Portfolio.' },
    { q: 'Sind digitale Einwilligungsformulare für PMU rechtlich gültig?', a: 'Ja. Digitale Aufklärungs- und Einwilligungsbögen mit elektronischer Unterschrift sind in Deutschland rechtlich anerkannt. Deine Kunden können vor oder im Termin digital unterschreiben.' },
    { q: 'Kann ich ein Fotoportfolio mit Treatflow führen?', a: 'Ja. Du speicherst Fotos bei jeder Behandlung und kannst diese pro Kunde und pro Sitzung abrufen. Ideal für Vorher-Nachher Vergleiche und deine Portfolio-Arbeit.' },
    { q: 'Was kostet Treatflow für PMU-Studios?', a: 'Treatflow bietet flexible Pläne ab 39 EUR im Monat. Du kannst alle Funktionen 14 Tage kostenlos testen – ohne Kreditkarte und ohne versteckte Kosten.' },
];

export default function PermanentMakeupSoftwareDeutschlandPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <section className="pt-32 pb-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Palette className="h-4 w-4 mr-2" />
                            Für Deutschland
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Permanent Makeup Software für{' '}
                            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Deutschland</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                            Digitale Einwilligungen, Vorher-Nachher Dokumentation und Online-Buchungen für dein PMU-Studio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer"
                                className="bg-rose-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-rose-700 transition-colors flex items-center justify-center">
                                14 Tage kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-rose-600 hover:text-rose-600 transition-colors">
                                Beratung buchen
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
                        Der PMU-Markt in Deutschland wächst. Microblading, Powder Brows, Lip Blush und weitere Techniken verlangen eine professionelle Dokumentation und rechtssichere Einwilligungen. Treatflow unterstützt PMU-Studios und Microblading-Artists mit digitaler Dokumentation, Vorher-Nachher Fotos und Online-Buchungen – für Erstbehandlungen und Nachstiche.
                    </p>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                                    <f.icon className="h-5 w-5 text-rose-600" />
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
                    <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
                        <div className="flex flex-wrap gap-6 items-center justify-center text-gray-700">
                            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> DSGVO-konform</span>
                            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> EU-Hosting</span>
                            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Österreichisches Unternehmen</span>
                            <span className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600" /> Genutzt von PMU-Studios und Microblading-Artists in ganz Deutschland.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Bereit für dein digitales PMU-Studio?</h2>
                    <p className="text-rose-100 mb-6">Teste Treatflow 14 Tage kostenlos – keine Kreditkarte nötig.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer"
                            className="bg-white text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center">
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-rose-600 transition-colors">
                            Beratung buchen
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Häufige Fragen – PMU Deutschland</h2>
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
