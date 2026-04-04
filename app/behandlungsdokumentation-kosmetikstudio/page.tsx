import {
    FileText, Camera, CheckCircle, ArrowRight, X, Shield, Users
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';

const clusterLinks = [
    { href: '/kosmetikstudio-software', title: 'Kosmetikstudio Software', description: 'Die All-in-One Lösung für dein Studio' },
    { href: '/nisv-dokumentation-kosmetikstudio', title: 'NiSV-Dokumentation', description: 'Rechtssichere Dokumentation nach NiSV' },
    { href: '/anamnesebogen-kosmetikstudio', title: 'Digitale Anamnesebögen', description: 'Formulare und Einwilligungen digital' },
    { href: '/kundenverwaltung', title: 'Digitale Kundenkartei', description: 'Alle Kundendaten immer griffbereit' },
];

export const metadata = {
    title: 'Behandlungsdoku Kosmetikstudio: NiSV-konform',
    description: 'Digitale Behandlungsdokumentation für Kosmetikstudios. Fotos, Notizen und Ergebnisse in einer Plattform. NiSV-konform. 14 Tage gratis testen.',
    keywords: [
        'Behandlungsdokumentation Kosmetikstudio',
        'Dokumentation Kosmetik digital',
        'NiSV Dokumentation Kosmetik',
        'Kosmetik Behandlung dokumentieren',
        'Fotodokumentation Kosmetik',
        'Behandlungsprotokoll digital',
        'Kosmetikstudio Dokumentation Software',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/behandlungsdokumentation-kosmetikstudio',
    },
    openGraph: {
        title: 'Behandlungsdokumentation Kosmetikstudio: NiSV-konform',
        description: 'Digitale Behandlungsdokumentation für Kosmetikstudios. Fotos, Notizen, Produkte und Ergebnisse in einer Plattform. NiSV-konform dokumentieren.',
        url: 'https://www.treatflow.io/behandlungsdokumentation-kosmetikstudio',
        images: [
            {
                url: '/images/og-behandlungsdokumentation-kosmetikstudio.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow - Behandlungsdokumentation für Kosmetikstudios',
            },
        ],
    },
};

const painPoints = [
    'Papierchaos – Behandlungsprotokolle stapeln sich und gehen verloren',
    'NiSV-Compliance – auf Papier schwer einzuhalten und nachzuweisen',
    'Keine Fotodokumentation – Vorher-Nachher-Fotos verstreut auf Geräten',
    'Keine Übersicht – Behandlungshistorie pro Kunde fehlt komplett',
];

const solutions = [
    {
        icon: Camera,
        title: 'Digitale Fotodokumentation',
        desc: 'Speichere Vorher-Nachher-Fotos direkt beim Kunden und zur Behandlung. Alles ordentlich abgelegt, sofort abrufbar bei jedem Termin.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
    {
        icon: Shield,
        title: 'NiSV-konform dokumentieren',
        desc: 'Behandlungen, Produkte und Ergebnisse nach NiSV-Vorgaben festhalten. Rechtssicher und bei Kontrollen jederzeit vorzeigbar.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
    {
        icon: Users,
        title: 'Behandlungshistorie pro Kunde',
        desc: 'Vollständige Übersicht aller Behandlungen, Notizen und Produkte pro Kundenprofil. Keine verstreuten Zettel mehr.',
        gradient: 'from-blue-500 to-indigo-600',
        bg: 'from-blue-50 to-indigo-50',
    },
];

const ohneItems = [
    'Papierchaos – Protokolle stapeln sich oder gehen verloren',
    'Keine Fotodokumentation – Fotos verstreut auf Handy und Kamera',
    'NiSV-Compliance-Risiko – schwer auf Papier einzuhalten',
    'Keine Übersicht – Behandlungshistorie fehlt komplett',
    'Zeitverschwendung – Suche nach alten Protokollen',
];

const mitItems = [
    '100% digital – alle Dokumentationen zentral gespeichert',
    'Fotodokumentation – Vorher-Nachher direkt beim Kunden',
    'NiSV-konform – rechtssicher und jederzeit vorzeigbar',
    'Lückenlose Historie – pro Kunde alle Behandlungen im Überblick',
    'Sofort abrufbar – bei jedem Termin in Sekunden parat',
];

const stats = [
    { value: '100%', label: 'digital', desc: 'alle Dokumentationen zentral' },
    { value: 'NiSV', label: 'konform', desc: 'rechtssicher dokumentiert' },
    { value: 'sofort', label: 'abrufbar', desc: 'bei jedem Kunden und Termin' },
    { value: 'lückenlos', label: 'Historie', desc: 'alle Behandlungen pro Kunde' },
];

const faqs = [
    {
        q: 'Ist die digitale Behandlungsdokumentation NiSV-konform?',
        a: 'Ja. Treatflow unterstützt dich dabei, Behandlungen nach NiSV-Vorgaben zu dokumentieren. Du hältst Produkte, Verfahren und Ergebnisse fest – digital, geordnet und jederzeit abrufbar. Bei Kontrollen oder Nachfragen hast du alles sofort parat.',
    },
    {
        q: 'Wie werden Fotos in der Dokumentation gespeichert?',
        a: 'Fotos werden direkt in der Kundenakte und zur jeweiligen Behandlung gespeichert. Vorher-Nachher-Fotos, Zwischenergebnisse und Hautbilder liegen zentral beim Kundenprofil – nicht mehr verstreut auf Handy oder Kamera. Alle Daten sind verschlüsselt in der EU gespeichert.',
    },
    {
        q: 'Kann ich die Dokumentation an meine Behandlungen anpassen?',
        a: 'Ja. Du kannst eigene Behandlungsvorlagen anlegen, Produkte hinterlegen und Notizfelder nutzen. So dokumentierst du genau das, was für dein Studio und deine Leistungen wichtig ist.',
    },
    {
        q: 'Ist die Fotodokumentation DSGVO-konform?',
        a: 'Ja. Alle Daten – inklusive Fotos – werden verschlüsselt in Rechenzentren in der EU gespeichert. Treatflow erfüllt die Anforderungen der DSGVO für sensible Gesundheitsdaten in Kosmetikstudios.',
    },
    {
        q: 'Wird die Produktverwendung mit dokumentiert?',
        a: 'Ja. Du kannst verwendete Produkte pro Behandlung erfassen. Das unterstützt die NiSV-Konformität und gibt dir zugleich einen Überblick über den Produktverbrauch pro Kunde.',
    },
];

export default function BehandlungsdokumentationKosmetikstudioPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <FileText className="h-4 w-4 mr-2" />
                            Digitale Behandlungsdokumentation
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Behandlungsdokumentation für dein{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Kosmetikstudio
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Fotos, Notizen, Produkte und Ergebnisse – alles in einer Plattform. NiSV-konform dokumentieren und jederzeit abrufbar.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                            >
                                14 Tage kostenlos testen
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine versteckten Kosten.</p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <Image src="/images/funktionen/hero-behandlungsdokumentation.jpg" alt="Professionelle Dokumentation und Fuersorge" width={1920} height={823} className="w-full rounded-2xl shadow-xl object-cover aspect-[21/9]" sizes="100vw" />
                    </div>
                </div>
            </section>

            {/* Das Problem */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Das Problem mit Papier-Dokumentation</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Behandlungsprotokolle auf Papier stapeln sich, gehen verloren oder liegen unleserlich in Ordnern. NiSV-Compliance ist auf Papier schwer einzuhalten. Fotos liegen verstreut auf Handy und Kamera – keine strukturierte Fotodokumentation, keine Übersicht über die Behandlungshistorie pro Kunde.
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
                                <div className="text-6xl font-bold text-red-600 mb-2">68%</div>
                                <p className="text-gray-600">der Kosmetikstudios dokumentieren noch auf Papier – mit Papierchaos, NiSV-Risiko und ohne strukturierte Fotodokumentation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Die Lösung */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Die Lösung: Digitale Behandlungsdokumentation mit Treatflow</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Fotos, Notizen, Produkte und Ergebnisse – alles digital in einer Plattform, NiSV-konform und pro Kunde abrufbar.
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
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Ohne vs. mit digitaler Behandlungsdokumentation</h2>
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
                        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                            <h3 className="text-xl font-bold text-blue-700 mb-6">Mit Treatflow</h3>
                            <div className="space-y-4">
                                {mitItems.map((p, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                        <span className="text-blue-800">{p}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((s, i) => (
                            <div key={i} className="text-center">
                                <div className="text-5xl font-bold text-white mb-2">{s.value}</div>
                                <div className="text-lg font-semibold text-blue-100 mb-1">{s.label}</div>
                                <div className="text-sm text-blue-200">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SocialProofBar />

            {/* CTA */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Bereit für digitale Behandlungsdokumentation?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Teste Fotos, Notizen, Produkte und NiSV-konforme Dokumentation 14 Tage kostenlos. Alles in einer Plattform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
                        >
                            Beratung buchen
                        </a>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
                </div>
            </section>

            {/* Internal Links Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Mehr als nur Dokumentation</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Treatflow vereint alle Tools, die dein Kosmetikstudio braucht.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {clusterLinks.map((link, index) => (
                            <Link key={index} href={link.href} className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 flex items-center">
                                    {link.title}
                                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                </h3>
                                <p className="text-gray-600 text-sm">{link.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gray-50">
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
