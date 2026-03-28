import {
    Calendar, Link2, Bell, CheckCircle, ArrowRight, Clock, Users,
    Smartphone, X, TrendingUp, Zap
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';

const clusterLinks = [
    { href: '/kosmetikstudio-software', title: 'Kosmetikstudio Software', description: 'Die All-in-One Lösung für dein Studio' },
    { href: '/terminsoftware-kosmetikstudio', title: 'Terminsoftware', description: 'Online-Buchung und Terminkalender' },
    { href: '/sms-erinnerungen-kosmetikstudio', title: 'SMS-Erinnerungen', description: 'Weniger No-Shows durch automatische Erinnerungen' },
    { href: '/kundenkartei-kosmetikstudio', title: 'Digitale Kundenkartei', description: 'Alle Kundendaten immer griffbereit' },
];

export const metadata = {
    title: 'Online-Terminbuchung Kosmetikstudio: 24/7',
    description: 'Online-Terminbuchung für Kosmetikstudios. Kunden buchen 24/7 über deinen Buchungslink. Keine Doppelbuchungen, automatische Bestätigungen.',
    keywords: [
        'Online Terminbuchung Kosmetikstudio',
        'Terminbuchung Kosmetik online',
        'Buchungssystem Kosmetikstudio',
        'Online Buchung Kosmetik',
        'Kosmetikstudio Online Termin',
        'Terminvergabe Kosmetikstudio',
        'Buchungslink Kosmetikstudio',
        'Online Buchungssystem Beauty',
        'Kosmetik Terminbuchung App',
    ],
    alternates: { canonical: 'https://www.treatflow.io/online-terminbuchung-kosmetikstudio' },
    openGraph: {
        title: 'Online-Terminbuchung für Kosmetikstudios | Treatflow',
        description: 'Kunden buchen 24/7 über deinen persönlichen Buchungslink. Keine Doppelbuchungen.',
        url: 'https://www.treatflow.io/online-terminbuchung-kosmetikstudio',
        images: [{ url: '/images/og-online-buchungen.jpg', width: 1200, height: 630, alt: 'Treatflow Online-Terminbuchung' }],
    },
};

export default function OnlineTerminbuchungKosmetikstudioPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Link2 className="h-4 w-4 mr-2" />
                            Online-Terminbuchung
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Online-Terminbuchung für dein{' '}
                            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Kosmetikstudio</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                            Deine Kunden buchen rund um die Uhr über deinen persönlichen Buchungslink - auch nach Feierabend. Du erhältst automatisch alle Termine, Bestätigungen und Erinnerungen.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center">
                                14 Tage kostenlos testen <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f" target="_blank" rel="noopener noreferrer" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-orange-600 hover:text-orange-600 transition-colors duration-200">Beratung buchen</a>
                        </div>
                    </div>
                    <div className="mt-12 max-w-5xl mx-auto">
                        <Image src="/images/funktionen/hero-online-buchung.jpg" alt="Termin gebucht – mehr Zeit für das Wesentliche" width={1920} height={823} className="w-full rounded-2xl shadow-xl object-cover aspect-[21/9]" sizes="100vw" />
                    </div>
                </div>
            </section>

            {/* Das Problem */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dein Telefon klingelt. Schon wieder.</h2>
                            <p className="text-lg text-gray-600 mb-6">Die meisten Kosmetikstudios verbringen mehrere Stunden pro Tag mit Terminvereinbarungen per Telefon, WhatsApp und Instagram-DMs. Gleichzeitig gehen potenzielle Kunden verloren, die außerhalb der Geschäftszeiten buchen möchten.</p>
                            <div className="space-y-4">
                                {['Stundenlange Telefonate statt Behandlungen', 'Verpasste Anrufe = verpasste Kunden', 'Doppelbuchungen durch manuelle Terminvergabe', 'Kein Buchungsmöglichkeit nach Feierabend'].map((p, i) => (
                                    <div key={i} className="flex items-center gap-3"><X className="h-5 w-5 text-red-500 flex-shrink-0" /><span className="text-gray-700">{p}</span></div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
                            <div className="text-center">
                                <div className="text-6xl font-bold text-orange-600 mb-2">67%</div>
                                <p className="text-gray-600">der Kunden bevorzugen Online-Buchungen gegenüber Telefonaten</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Die Lösung */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Dein persönlicher Buchungslink</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ein Link, überall einsetzbar. Kunden buchen selbst, du erhältst alles automatisch.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Link2, title: 'Persönlicher Link', desc: 'Dein individueller Buchungslink für Instagram-Bio, Website, WhatsApp und Visitenkarten.', gradient: 'from-orange-500 to-red-600', bg: 'from-orange-50 to-red-50' },
                            { icon: Calendar, title: 'Automatische Verfügbarkeit', desc: 'Das System zeigt nur freie Termine an. Keine Doppelbuchungen, keine manuelle Prüfung.', gradient: 'from-blue-500 to-indigo-600', bg: 'from-blue-50 to-indigo-50' },
                            { icon: Bell, title: 'Bestätigungen & Erinnerungen', desc: 'Kunden erhalten sofort eine Bestätigung und automatische Erinnerungen vor dem Termin.', gradient: 'from-emerald-500 to-teal-600', bg: 'from-emerald-50 to-teal-50' },
                        ].map((s, i) => (
                            <div key={i} className={`bg-gradient-to-br ${s.bg} p-8 rounded-2xl`}>
                                <div className={`w-12 h-12 bg-gradient-to-r ${s.gradient} rounded-lg flex items-center justify-center mb-6`}><s.icon className="h-6 w-6 text-white" /></div>
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
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Ohne vs. mit Online-Buchungen</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                            <h3 className="text-xl font-bold text-red-700 mb-6">Ohne Online-Buchungen</h3>
                            <div className="space-y-4">
                                {['Telefonate während Behandlungen', 'Verpasste Anrufe am Wochenende', 'Doppelbuchungen und Verwechslungen', 'Manuelle Bestätigungen per WhatsApp', 'Kein Buchungsmöglichkeit nachts'].map((p, i) => (
                                    <div key={i} className="flex items-center gap-3"><X className="h-5 w-5 text-red-500 flex-shrink-0" /><span className="text-red-800">{p}</span></div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
                            <h3 className="text-xl font-bold text-green-700 mb-6">Mit Treatflow</h3>
                            <div className="space-y-4">
                                {['Kunden buchen selbstständig 24/7', '30% mehr Buchungen außerhalb Geschäftszeiten', 'Keine Doppelbuchungen möglich', 'Automatische Bestätigung per E-Mail & SMS', 'Buchungslink für Instagram, Website & Co'].map((p, i) => (
                                    <div key={i} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" /><span className="text-green-800">{p}</span></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { value: '30%', label: 'mehr Buchungen', desc: 'durch 24/7 Verfügbarkeit' },
                            { value: '80%', label: 'weniger No-Shows', desc: 'durch automatische Erinnerungen' },
                            { value: '5h+', label: 'pro Woche gespart', desc: 'keine Termintelefonate mehr' },
                            { value: '0', label: 'Doppelbuchungen', desc: 'automatische Verfügbarkeitsprüfung' },
                        ].map((s, i) => (<div key={i} className="text-center"><div className="text-5xl font-bold text-white mb-2">{s.value}</div><div className="text-lg font-semibold text-orange-100 mb-1">{s.label}</div><div className="text-sm text-orange-200">{s.desc}</div></div>))}
                    </div>
                </div>
            </section>

            <SocialProofBar />

            {/* CTA */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Bereit für automatische Buchungen?</h2>
                    <p className="text-xl text-gray-600 mb-8">Teste die Online-Terminbuchung 14 Tage kostenlos und erlebe, wie einfach Terminvergabe sein kann.</p>
                    <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors">14 Tage gratis testen <ArrowRight className="ml-2 h-5 w-5" /></a>
                    <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
                </div>
            </section>

            {/* Internal Links Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Mehr als nur Online-Buchungen</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Treatflow vereint alle Tools, die dein Kosmetikstudio braucht.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {clusterLinks.map((link, index) => (
                            <Link key={index} href={link.href} className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-orange-200 hover:shadow-lg transition-all duration-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200 flex items-center">
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
                        {[
                            { q: 'Wie funktioniert die Online-Buchung?', a: 'Du erhältst einen persönlichen Buchungslink. Kunden klicken darauf, wählen Behandlung und Wunschtermin. Das System zeigt nur freie Zeiten an und bestätigt automatisch.' },
                            { q: 'Kann ich meinen Buchungslink auf Instagram teilen?', a: 'Ja, der Link passt perfekt in deine Instagram-Bio, auf deine Website, in WhatsApp-Nachrichten oder auf Visitenkarten.' },
                            { q: 'Werden Kunden automatisch erinnert?', a: 'Ja, Treatflow sendet automatische Erinnerungen per E-Mail und SMS - z.B. 3 Tage und 1 Tag vor dem Termin. Das reduziert No-Shows um bis zu 80%.' },
                            { q: 'Kann ich die Buchungszeiten anpassen?', a: 'Ja, du definierst deine Arbeitszeiten, Behandlungsdauern und Pausen. Das System zeigt nur verfügbare Slots an.' },
                        ].map((faq, i) => (
                            <div key={i} className="border border-gray-200 rounded-xl p-6"><h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3><p className="text-gray-600 leading-relaxed">{faq.a}</p></div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
