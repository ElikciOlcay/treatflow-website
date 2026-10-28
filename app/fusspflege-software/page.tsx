import {
    Calendar, Users, FileText, Shield, Bell, ArrowRight, CheckCircle,
    Clock, ClipboardCheck, Footprints, Camera, MapPin
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Breadcrumbs, { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import { generateFaqSchema } from '@/lib/schema';

// Keyword-Lücke laut Search Console (Okt 2026): 30+ Fußpflege-Suchanfragen ohne passende Seite
const breadcrumbItems = [{ label: 'Branchen' }, { label: 'Fußpflege Software' }];

const faqs = [
    { question: 'Eignet sich Treatflow für die Fußpflege?', answer: 'Ja, für kosmetische und mobile Fußpflege. Du verwaltest Termine, eine digitale Kundenkartei mit Befunden und Fotos, Anamnesebögen mit Unterschrift und automatische Erinnerungen in einer App. Treatflow ist keine Praxissoftware für Podologie mit Kassen- bzw. Heilmittelabrechnung – wenn du Verordnungen mit Krankenkassen abrechnest, brauchst du dafür eine spezialisierte Podologie-Software.' },
    { question: 'Kann ich Befunde wie Nagelpilz oder Hühneraugen dokumentieren?', answer: 'Ja. Zu jeder Kundin und jeder Behandlung kannst du Notizen, Sprachnotizen und Vorher-Nachher-Fotos speichern. So siehst du beim nächsten Termin sofort, wie sich Nägel und Haut entwickelt haben und was zuletzt gemacht wurde.' },
    { question: 'Gibt es einen Anamnesebogen für die Fußpflege?', answer: 'Ja. Du erstellst deinen Anamnesebogen digital – z. B. mit Fragen zu Diabetes, Blutverdünnern, Durchblutungsstörungen und Allergien – und lässt ihn vorab per Link oder im Studio am Tablet ausfüllen und unterschreiben. Der Bogen landet automatisch in der Kundenkartei.' },
    { question: 'Funktioniert Treatflow auch für die mobile Fußpflege?', answer: 'Ja. Treatflow läuft im Browser auf Smartphone und Tablet. Du hast Termine, Adressen, Notizen und Formulare bei jedem Hausbesuch dabei – ohne Papierkartei.' },
    { question: 'Gibt es eine kostenlose Fußpflege Software?', answer: 'Treatflow kannst du 14 Tage kostenlos und ohne Kreditkarte testen. Danach startet der Basic-Plan mit Kundenkartei, Formularen und Dokumentation ab 39 € pro Monat, mit Terminkalender und Online-Buchung ab 59 € pro Monat (zzgl. MwSt.) – ohne Provision pro Buchung.' },
    { question: 'Brauche ich einen Hygieneplan für die Fußpflege?', answer: 'Ja, auch in der Fußpflege ist ein Hygieneplan Pflicht. Eine kostenlose Muster-Vorlage als PDF mit einem eigenen Abschnitt für die Fußpflege findest du in unserem Hygieneplan-Download.' },
];

export const metadata = {
    title: 'Fußpflege Software: Kundenkartei, Termine & Doku',
    description: 'Software für kosmetische und mobile Fußpflege: digitale Kundenkartei mit Befunden und Fotos, Anamnesebogen mit Unterschrift, Terminkalender und Erinnerungen. 14 Tage gratis testen.',
    keywords: [
        'Fußpflege Software',
        'Software für Fußpflege',
        'Fußpflege Programm',
        'Fußpflege Kundenkartei',
        'Fußpflege Software kostenlos',
        'mobile Fußpflege Software',
        'Fußpflege Terminplaner',
        'Anamnesebogen Fußpflege',
        'Fußpflege App',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/fusspflege-software',
    },
    openGraph: {
        title: 'Fußpflege Software: Kundenkartei, Termine & Doku',
        description: 'Kundenkartei mit Befunden und Fotos, Anamnesebogen, Termine und Erinnerungen für die Fußpflege.',
        url: 'https://www.treatflow.io/fusspflege-software',
        images: [{ url: '/images/branchen/hero-spa.jpg', width: 1200, height: 630, alt: 'Treatflow – Software für Fußpflege' }],
    },
};

const painPoints = [
    { icon: FileText, title: 'Papierkartei voller Befunde', description: 'Nagelpilz, Hühneraugen, eingewachsene Nägel – auf Karteikarten verstreut ist die Entwicklung kaum nachvollziehbar.' },
    { icon: ClipboardCheck, title: 'Risikofragen vergessen', description: 'Diabetes, Blutverdünner oder Durchblutungsstörungen müssen vor der Behandlung bekannt sein. Ein veralteter Papierbogen ist ein Risiko.' },
    { icon: Clock, title: 'Termine per Telefon', description: 'Viele Stammkundinnen kommen alle 4–6 Wochen. Ohne Erinnerung und Online-Buchung bleibt das Telefon im Dauereinsatz.' },
    { icon: MapPin, title: 'Mobile Fußpflege ohne Überblick', description: 'Bei Hausbesuchen fehlen Kartei, Adresse und letzte Notizen – oder liegen im Auto auf dem Beifahrersitz.' },
];

const solutions = [
    { icon: Users, title: 'Digitale Kundenkartei', description: 'Alle Kundinnen mit Kontaktdaten, Risiken, Allergien und Behandlungsverlauf – durchsuchbar statt Karteikasten.', gradient: 'from-teal-500 to-emerald-600', bg: 'from-teal-50 to-emerald-50' },
    { icon: Camera, title: 'Befunde & Fotos', description: 'Vorher-Nachher-Fotos von Nägeln und Haut direkt in der Behandlung speichern. Die Entwicklung siehst du auf einen Blick.', gradient: 'from-violet-500 to-purple-600', bg: 'from-violet-50 to-purple-50' },
    { icon: ClipboardCheck, title: 'Anamnesebogen mit Unterschrift', description: 'Risikofragen digital abfragen und unterschreiben lassen – vorab per Link oder im Studio am Tablet.', gradient: 'from-orange-500 to-amber-600', bg: 'from-orange-50 to-amber-50' },
    { icon: Calendar, title: 'Terminplaner & Online-Buchung', description: 'Wiederkehrende Termine planen, Online-Buchung über deinen Link, alles in einem Kalender.', gradient: 'from-blue-500 to-indigo-600', bg: 'from-blue-50 to-indigo-50' },
    { icon: Bell, title: 'Automatische Erinnerungen', description: 'Erinnerungen per WhatsApp oder E-Mail – gerade für ältere Stammkundinnen ein spürbarer Unterschied.', gradient: 'from-emerald-500 to-teal-600', bg: 'from-emerald-50 to-teal-50' },
    { icon: Shield, title: 'DSGVO & EU-Server', description: 'Gesundheitsangaben gehören geschützt: verschlüsselte Speicherung auf EU-Servern, entwickelt in Österreich.', gradient: 'from-rose-500 to-pink-600', bg: 'from-rose-50 to-pink-50' },
];

export default function FusspflegeSoftwarePage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="breadcrumb-schema-fusspflege"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
            />
            <Navigation />
            <Breadcrumbs items={breadcrumbItems} />

            <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Footprints className="h-4 w-4 mr-2" />
                            Software für Fußpflege
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Software für die{' '}
                            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">Fußpflege</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Kundenkartei mit Befunden und Fotos, Anamnesebogen mit Unterschrift, Termine und Erinnerungen – für kosmetische und mobile Fußpflege in einer App.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://app.treatflow.io/auth/register?lang=de" target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center">
                                14 Tage kostenlos testen <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-teal-600 hover:text-teal-600 transition-colors duration-200">
                                Beratung buchen
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Keine Provision pro Buchung.</p>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                            <Image
                                src="/images/branchen/hero-spa.jpg"
                                alt="Ruhiger Behandlungsraum für Fußpflege"
                                fill
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Typische Probleme in der Fußpflege</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Viel Stammkundschaft, viele Befunde – und meist noch eine Papierkartei.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {painPoints.map((point) => (
                            <div key={point.title} className="flex gap-5 p-6 rounded-2xl bg-red-50/50 border border-red-100">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                    <point.icon className="h-6 w-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                                    <p className="text-gray-600">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">So hilft Treatflow in der Fußpflege</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Kundenkartei, Doku und Termine an einem Ort – im Studio und unterwegs.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((solution) => (
                            <div key={solution.title} className={`bg-gradient-to-br ${solution.bg} p-8 rounded-2xl`}>
                                <div className={`w-12 h-12 bg-gradient-to-r ${solution.gradient} rounded-lg flex items-center justify-center mb-6`}>
                                    <solution.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Kosmetische Fußpflege, mobile Fußpflege oder Podologie?</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Treatflow ist für <strong>kosmetische Fußpflege</strong> und <strong>mobile Fußpflege</strong> gemacht – also für Studios und Fußpflegerinnen,
                            die privat abrechnen und eine gute Kundenkartei, Dokumentation und Terminplanung brauchen. Viele Kosmetikstudios bieten
                            Fußpflege zusätzlich an und führen alles in derselben Software.
                        </p>
                        <p>
                            Wenn du als <strong>Podologin</strong> Heilmittelverordnungen mit Krankenkassen abrechnest, brauchst du dafür eine spezialisierte
                            Praxissoftware mit Kassenabrechnung – das deckt Treatflow nicht ab. Für Privatleistungen, Kartei und Termine kannst du
                            Treatflow trotzdem einsetzen.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-10">
                        {['Kundenkartei mit Risiken (Diabetes, Blutverdünner)', 'Behandlungsverlauf mit Fotos', 'Anamnesebogen mit digitaler Unterschrift', 'Terminplaner mit Online-Buchung', 'Erinnerungen per WhatsApp und E-Mail', 'Mobil nutzbar bei Hausbesuchen', 'Kasse mit TSE (DE) bzw. RKSV (AT) als Add-on', 'DSGVO-konform auf EU-Servern'].map((feature) => (
                            <div key={feature} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-600 mt-8">
                        Noch kein Hygieneplan? Lade dir unsere kostenlose{' '}
                        <Link href="/hygieneplan-kosmetikstudio-pdf" className="text-teal-700 hover:text-teal-800 underline underline-offset-4">
                            Hygieneplan-Vorlage mit Fußpflege-Abschnitt
                        </Link>{' '}
                        herunter.
                    </p>
                </div>
            </section>

            <SocialProofBar />

            <section className="py-20 bg-white">
                <Script
                    id="faq-schema-fusspflege"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
                />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16"><h2 className="text-4xl font-bold text-gray-900 mb-4">Häufige Fragen zur Fußpflege Software</h2></div>
                    <div className="space-y-6">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="border border-gray-200 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Fußpflege ohne Papierkartei</h2>
                    <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">Teste Treatflow 14 Tage kostenlos – Kundenkartei, Doku und Termine in einer App.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://app.treatflow.io/auth/register?lang=de" target="_blank" rel="noopener noreferrer" className="bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                            14 Tage gratis testen <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <Link href="/preise" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-teal-700 transition-colors duration-200">
                            Preise ansehen
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Passende Funktionen</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { href: '/kundenkartei-software', title: 'Digitale Kundenkartei', desc: 'Befunde, Fotos & Historie' },
                            { href: '/anamnesebogen-kosmetikstudio', title: 'Anamnesebögen', desc: 'Digital mit Unterschrift' },
                            { href: '/terminkalender', title: 'Terminplaner', desc: 'Kalender & Online-Buchung' },
                            { href: '/nagelstudio-software', title: 'Nagelstudio Software', desc: 'Maniküre & Nageldesign' },
                        ].map((l) => (
                            <Link key={l.href} href={l.href} className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                                <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">{l.title}</span>
                                <span className="text-sm text-gray-600 block mb-2">{l.desc}</span>
                                <span className="inline-flex items-center text-indigo-600 text-sm font-medium">Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
