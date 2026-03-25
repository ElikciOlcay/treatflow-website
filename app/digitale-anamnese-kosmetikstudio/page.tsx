import {
    ClipboardCheck, FileText, CheckCircle, ArrowRight, X, Shield,
    Smartphone, Users, Clock, Zap
} from 'lucide-react';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Digitale Anamnese Kosmetikstudio: papierlos',
    description: 'Digitale Anamnesebögen fürs Kosmetikstudio. Formulare vorab per Link ausfüllen – mit elektronischer Unterschrift. DSGVO-konform. 14 Tage gratis.',
    keywords: [
        'Digitale Anamnese Kosmetikstudio',
        'Anamnesebogen digital Kosmetik',
        'Digitale Formulare Kosmetikstudio',
        'Anamnese App Kosmetik',
        'Einwilligung digital Kosmetik',
        'Kosmetik Formulare online',
        'DSGVO Anamnese Kosmetikstudio',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/digitale-anamnese-kosmetikstudio',
    },
    openGraph: {
        title: 'Digitale Anamnese Kosmetikstudio: Formulare papierlos',
        description: 'Digitale Anamnesebögen für dein Kosmetikstudio. Kunden füllen Formulare vorab per Link aus - mit elektronischer Unterschrift. DSGVO-konform.',
        url: 'https://www.treatflow.io/digitale-anamnese-kosmetikstudio',
        images: [
            {
                url: '/images/og-digitale-anamnese.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Digitale Anamnese für Kosmetikstudios',
            },
        ],
    },
};

const painPoints = [
    'Papierchaos – Anamnesebögen stapeln sich und gehen verloren',
    'DSGVO-Risiken – handschriftliche Formulare sind schwer sicher aufzubewahren',
    'Zeitverschwendung – Kunden füllen Formulare erst im Studio aus und verlängern Wartezeiten',
    'Keine Übersicht – verstreute Bögen ohne digitale Ablage',
];

const solutions = [
    {
        icon: FileText,
        title: 'Digitale Formulare mit E-Unterschrift',
        desc: 'Anamnesebögen und Einwilligungen werden digital ausgefüllt – mit rechtssicherer elektronischer Unterschrift. Kein Papier mehr.',
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-50',
    },
    {
        icon: Smartphone,
        title: 'Vorab per Link ausfüllen',
        desc: 'Sende deinen Kunden vor dem Termin einen Link. Sie füllen Anamnese und Einwilligung in Ruhe zu Hause aus – im Studio ist alles bereits fertig.',
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-50',
    },
    {
        icon: Shield,
        title: 'DSGVO-konforme Speicherung',
        desc: 'Alle Formulare werden verschlüsselt in der EU gespeichert. Vollständig DSGVO-konform und jederzeit abrufbar.',
        gradient: 'from-emerald-500 to-teal-600',
        bg: 'from-emerald-50 to-teal-50',
    },
];

const ohneItems = [
    'Papierbögen stapeln sich im Archiv',
    'Formulare gehen verloren oder sind unleserlich',
    'Kunden füllen alles erst im Studio aus',
    'DSGVO-Compliance bei Papier schwer prüfbar',
    'Keine digitale Suche oder Ablage',
];

const mitItems = [
    '100% papierlos – alle Formulare digital',
    'Sofort abrufbar bei jedem Termin',
    'Kunden füllen vorab zu Hause aus',
    'DSGVO-konform gespeichert in der EU',
    'Elektronische Unterschrift rechtssicher',
];

const stats = [
    { value: '100%', label: 'papierfrei', desc: 'alle Formulare digital' },
    { value: '90%', label: 'schneller ausgefüllt', desc: 'vorab per Link vor dem Termin' },
    { value: 'DSGVO', label: 'konform', desc: 'verschlüsselte EU-Speicherung' },
    { value: 'sofort', label: 'abrufbar', desc: 'bei jedem Kunden und Termin' },
];

const faqs = [
    {
        q: 'Wie funktioniert die digitale Anamnese?',
        a: 'Du erstellst deine Anamnesebögen und Einwilligungen in Treatflow. Bei der Terminbuchung oder per E-Mail erhalten Kunden einen Link zum Ausfüllen. Sie füllen alles digital aus, unterschreiben elektronisch – und du siehst die Daten direkt im Kundenprofil. Kein Papier, keine Wartezeit im Studio.',
    },
    {
        q: 'Wie erleben Kunden das Ausfüllen?',
        a: 'Kunden erhalten einen klaren Link, den sie auf Smartphone, Tablet oder Laptop öffnen können. Die Formulare sind übersichtlich und schnell ausgefüllt. Die elektronische Unterschrift erfolgt mit wenigen Klicks. Viele Kunden schätzen es, dies in Ruhe zu Hause zu erledigen, statt im Studio zu warten.',
    },
    {
        q: 'Kann ich die Formulare anpassen?',
        a: 'Ja. Du kannst eigene Anamnesebögen und Einwilligungen anlegen oder Vorlagen aus unserem Shop nutzen. Texte, Fragen und Reihenfolge sind frei anpassbar – genau angepasst auf dein Studio und deine Behandlungen.',
    },
    {
        q: 'Ist die digitale Anamnese DSGVO-konform?',
        a: 'Ja. Alle Daten werden verschlüsselt in Rechenzentren in der EU gespeichert. Die Speicherdauer und der Zugriff sind kontrollierbar. Treatflow erfüllt die Anforderungen der DSGVO für sensible Gesundheitsdaten in Kosmetikstudios.',
    },
];

export default function DigitaleAnamneseKosmetikstudioPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <ClipboardCheck className="h-4 w-4 mr-2" />
                            Digitale Anamnese & Formulare
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Digitale Anamnese für dein{' '}
                            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                Kosmetikstudio
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Kunden füllen Anamnesebögen und Einwilligungen per Link vorab aus – mit elektronischer Unterschrift. Papierfrei, DSGVO-konform und jederzeit abrufbar.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center"
                            >
                                14 Tage kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-200"
                            >
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <Image src="/images/funktionen/hero-formulare-anamnese.jpg" alt="Digitale Formulare, Vertrauen und Ordnung" width={1920} height={823} className="w-full rounded-2xl shadow-xl object-cover aspect-[21/9]" sizes="100vw" />
                    </div>
                </div>
            </section>

            {/* Das Problem */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Das Problem mit Papier-Anamnesebögen</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Papierbögen stapeln sich, gehen verloren oder liegen unleserlich in Ordnern. Kunden müssen im Studio ausfüllen und warten – Zeit, die du für Behandlungen nutzen könntest. DSGVO-konforme Aufbewahrung von handschriftlichen Formularen ist aufwendig und fehleranfällig.
                            </p>
                            <div className="space-y-4">
                                {painPoints.map((p, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                                        <span className="text-gray-700">{p}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
                            <div className="text-center">
                                <div className="text-6xl font-bold text-red-600 mb-2">72%</div>
                                <p className="text-gray-600">der Kosmetikstudios nutzen noch Papier für Anamnesebögen – mit allen Risiken für Datenschutz und Zeit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Die Lösung */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Die Lösung: Digitale Anamnese mit Treatflow</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Formulare per Link versenden, vorab ausfüllen lassen, elektronisch unterschreiben – alles DSGVO-konform.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {solutions.map((s, i) => (
                            <div key={i} className={`bg-gradient-to-br ${s.bg} p-8 rounded-2xl`}>
                                <div className={`w-12 h-12 bg-gradient-to-r ${s.gradient} rounded-xl flex items-center justify-center mb-6`}>
                                    <s.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ohne vs. Mit */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Ohne vs. mit digitaler Anamnese</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                            <h3 className="text-xl font-bold text-red-700 mb-6">Ohne Treatflow (Papier)</h3>
                            <div className="space-y-4">
                                {ohneItems.map((p, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                                        <span className="text-red-800">{p}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                            <h3 className="text-xl font-bold text-emerald-700 mb-6">Mit Treatflow</h3>
                            <div className="space-y-4">
                                {mitItems.map((p, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                                        <span className="text-emerald-800">{p}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">{s.value}</div>
                                <div className="text-lg font-semibold text-emerald-100 mb-1">{s.label}</div>
                                <div className="text-sm text-emerald-200">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Bereit für papierlose Anamnese?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Teste digitale Anamnesebögen 14 Tage kostenlos. Deine Kunden füllen vorab aus – du hast alles sofort parat.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-colors duration-200"
                        >
                            Beratung buchen
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Häufige Fragen</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-gray-200 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
