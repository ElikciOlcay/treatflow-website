import {
    Calendar, Users, ClipboardCheck, FileText, Link2,
    Shield, Server, Building2, Users as UsersIcon, ArrowRight, MapPin, Receipt
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import GeoFAQ from '../components/GeoFAQ';
import DemoFirstActions from '../components/DemoFirstActions';

export const metadata = {
    title: 'Kosmetikstudio Software Deutschland – NiSV & TSE',
    description: 'Kosmetikstudio Software für Deutschland: Online-Buchungen, Kundenkartei, NiSV-Dokumentation und TSE-Kasse. DSGVO-konform, EU-Hosting. 14 Tage gratis testen.',
    keywords: [
        'Kosmetikstudio Software Deutschland',
        'Studio Software Deutschland',
        'Beauty Software Deutschland',
        'NiSV Software Deutschland',
        'Kassensystem Kosmetikstudio Deutschland',
        'Kosmetik Software DE',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/kosmetikstudio-software-deutschland',
    },
    openGraph: {
        title: 'Kosmetikstudio Software Deutschland – NiSV & TSE',
        description: 'Die moderne Kosmetikstudio Software für Deutschland: Termine, Kundenkartei, NiSV-Doku und TSE-Kasse. DSGVO-konform. 14 Tage gratis testen.',
        url: 'https://www.treatflow.io/kosmetikstudio-software-deutschland',
    },
};

const features = [
    { icon: Calendar, title: 'Terminkalender', desc: 'Tages-, Wochen- und Monatsansicht für maximale Übersicht.' },
    { icon: Users, title: 'Digitale Kundenkartei', desc: 'Alle Kundendaten und Behandlungen an einem Ort.' },
    { icon: ClipboardCheck, title: 'Digitale Formulare', desc: 'Anamnese und Einwilligungen digital, rechtssicher.' },
    { icon: FileText, title: 'NiSV-Dokumentation', desc: 'NiSV-konforme Dokumentation mit Fotos und Notizen.' },
    { icon: Link2, title: 'Online-Buchungen', desc: 'Persönlicher Buchungslink – Kunden buchen 24/7 selbst.' },
    { icon: Receipt, title: 'TSE-Kasse', desc: 'Kassensystem nach KassenSichV direkt integriert.' },
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
        question: 'Ist die Kasse in Treatflow TSE-konform?',
        answer: 'Ja. Die integrierte Kasse ist TSE-konform nach KassenSichV (über Fiskaly), erfüllt die Belegausgabepflicht und erzeugt DSFinV-K-Exporte für das Finanzamt. Mehr dazu auf unserer Seite zum Kassensystem für Deutschland.',
    },
    {
        question: 'Wie werden die Preise abgerechnet – in EUR?',
        answer: 'Ja, alle Preise werden in Euro (EUR) abgerechnet. Du zahlst monatlich per SEPA-Lastschrift oder Kreditkarte. Es gibt keine versteckten Kosten – 14 Tage kostenlos testen, danach ab 39€/Monat.',
    },
];

export default function KosmetikstudioSoftwareDeutschlandPage() {
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
                        Kosmetikstudio Software für <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Deutschland</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        DSGVO-konform, NiSV-ready, deutschsprachig und auf EU-Servern gehostet – inklusive TSE-konformer Kasse für Kosmetikstudios in ganz Deutschland.
                    </p>
                    <DemoFirstActions location="hero" align="center" showDemoNote showTrialDetail />
                </div>
            </section>

            {/* Intro */}
            <section className="py-12 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-600 leading-relaxed">
                        Treatflow wurde für Kosmetik- und Beauty-Studios entwickelt, die Wert auf Datenschutz, rechtssichere Dokumentation und moderne Arbeitsabläufe legen. Mit deutscher Sprachunterstützung, NiSV-konformer Dokumentation, TSE-Kasse und EU-Hosting entspricht Treatflow genau den Anforderungen deutscher Studios.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Alles, was dein Kosmetikstudio braucht</h2>
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
                    <div className="flex flex-wrap justify-center gap-3 mt-10">
                        <Link href="/kassensystem-kosmetikstudio-deutschland" className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                            Kassensystem Deutschland (TSE)
                        </Link>
                        <Link href="/kosmetikstudio-software-berlin" className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                            Kosmetikstudio Software Berlin
                        </Link>
                        <Link href="/nisv-dokumentation-kosmetikstudio" className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors">
                            NiSV-Dokumentation
                        </Link>
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
                                <span className="text-gray-700">Bereits von 500+ Studios getestet</span>
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
                    <h2 className="text-3xl font-bold text-white mb-4">Passt Treatflow zu deinem Studio? Finden wir es gemeinsam heraus.</h2>
                    <p className="text-indigo-100 mb-8">Lerne Treatflow in einer persönlichen Demo kennen und stelle deine Fragen zu deinem Studioalltag.</p>
                    <DemoFirstActions location="footer" tone="onDark" align="center" showDemoNote showTrialDetail />
                </div>
            </section>

            {/* FAQ */}
            <GeoFAQ faqs={faqs} themeColor="indigo" />

            <Footer />
        </div>
    );
}
