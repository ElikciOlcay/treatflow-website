import { Metadata } from 'next';
import Image from 'next/image';
import {
    ArrowRight, CheckCircle, Star, Calendar, Bell, Users,
    Clock, Shield, Smartphone, Zap, Phone
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terminsoftware Kosmetikstudio - 14 Tage gratis testen',
    description: 'Online-Terminbuchung, Kalender und automatische Erinnerungen für dein Kosmetikstudio. 80% weniger No-Shows. Jetzt 14 Tage kostenlos testen.',
    robots: 'noindex, nofollow',
    alternates: {
        canonical: 'https://www.treatflow.io/landing/terminsoftware-kosmetikstudio',
    },
};

const registerUrl = 'https://app.treatflow.io/auth/register';
const consultUrl = 'https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f';

const benefits = [
    { icon: Calendar, text: '24/7 Online-Terminbuchung' },
    { icon: Bell, text: 'Automatische Erinnerungen (SMS & E-Mail)' },
    { icon: Users, text: 'Mitarbeiterkalender & Schichtplanung' },
    { icon: Clock, text: '80% weniger No-Shows' },
    { icon: Shield, text: 'DSGVO-konform, EU-Server' },
    { icon: Smartphone, text: 'Mobil, Tablet & Desktop' },
];

const painSolutions = [
    {
        pain: 'Kunden rufen an, schreiben WhatsApp, Instagram DM...',
        solution: 'Ein Buchungslink für alle Kanäle. Kunden buchen 24/7 selbst.',
    },
    {
        pain: 'No-Shows kosten dich jede Woche Umsatz.',
        solution: 'Automatische SMS-Erinnerungen reduzieren Ausfälle um 80%.',
    },
    {
        pain: 'Doppelbuchungen und Kalender-Chaos.',
        solution: 'Intelligenter Kalender synchronisiert alles in Echtzeit.',
    },
];

const steps = [
    {
        num: '1',
        title: 'Behandlungen anlegen',
        desc: 'Definiere deine Behandlungen, Zeiten und Mitarbeiter. Dauert 5 Minuten.',
    },
    {
        num: '2',
        title: 'Buchungslink teilen',
        desc: 'Instagram Bio, Website, QR-Code im Studio - Kunden buchen sofort online.',
    },
    {
        num: '3',
        title: 'Termine verwalten',
        desc: 'Neue Buchungen erscheinen automatisch. Erinnerungen gehen raus. Fertig.',
    },
];

const reviews = [
    {
        text: 'Seit Dezember 2024 nutzen wir Treatflow mit einem dreiköpfigen Team. Es ist eine große Arbeitserleichterung und spart Zeit. Wir arbeiten vollständig digital und erfüllen alle NiSV-Anforderungen. Klare Empfehlung.',
        name: 'Maren Burmeister',
        studio: 'haarfrei',
        initials: 'MB',
        color: 'bg-teal-600',
    },
    {
        text: 'Wir sind mit Treatflow wirklich sehr zufrieden! Auf Wünsche und Vorschläge wird immer eingegangen. Alles wird sofort verständlich erklärt und auch direkt umgesetzt. Man fühlt sich bestens betreut.',
        name: 'E. B.',
        studio: 'Kosmetikstudio',
        initials: 'EB',
        color: 'bg-rose-500',
    },
    {
        text: 'Die App bietet großartige Möglichkeiten, die sowohl uns als auch unseren Kunden das Leben erleichtern. Ein Must-Have für alle Studios. Kein Papierkram mehr und nichts geht verloren.',
        name: 'Fatma Suna',
        studio: 'Kosmetikstudio',
        initials: 'FS',
        color: 'bg-amber-600',
    },
    {
        text: 'Der Service ist einfach super und meine Kunden sind äußerst zufrieden mit den Online-Formularen. Die Benutzerfreundlichkeit und die effiziente Handhabung machen die Erfahrung stressfrei.',
        name: 'Mit Liebe zum Detail',
        studio: 'Kosmetikstudio',
        initials: 'ML',
        color: 'bg-pink-500',
    },
];

const faqs = [
    {
        q: 'Was kostet die Terminsoftware?',
        a: 'Ab 39 EUR/Monat. Die ersten 14 Tage sind komplett kostenlos - ohne Kreditkarte, ohne versteckte Kosten. Jederzeit kündbar.',
    },
    {
        q: 'Wie schnell bin ich startklar?',
        a: 'In unter 10 Minuten. Behandlungen anlegen, Zeiten festlegen, Buchungslink teilen - fertig. Keine komplizierte Einrichtung nötig.',
    },
    {
        q: 'Können meine Kunden wirklich rund um die Uhr buchen?',
        a: 'Ja. Über deinen persönlichen Buchungslink buchen Kunden jederzeit - auch nachts oder am Wochenende. Der Termin erscheint sofort in deinem Kalender.',
    },
    {
        q: 'Wie funktionieren die automatischen Erinnerungen?',
        a: 'Nach der Buchung erhalten Kunden eine Bestätigung. 24h und 2h vor dem Termin geht automatisch eine Erinnerung per SMS oder E-Mail raus. Das reduziert No-Shows um bis zu 80%.',
    },
    {
        q: 'Kann ich mehrere Mitarbeiter verwalten?',
        a: 'Ja. Jeder Mitarbeiter hat seinen eigenen Kalender mit individuellen Arbeitszeiten. Kunden wählen bei der Buchung den gewünschten Behandler.',
    },
    {
        q: 'Ist Treatflow DSGVO-konform?',
        a: 'Ja. Alle Daten werden verschlüsselt auf EU-Servern gespeichert. Treatflow erfüllt alle Anforderungen der DSGVO.',
    },
];

function CTAButton({ variant = 'primary', className = '' }: { variant?: 'primary' | 'secondary'; className?: string }) {
    if (variant === 'primary') {
        return (
            <a
                href={registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 ${className}`}
            >
                14 Tage kostenlos testen
                <ArrowRight className="h-5 w-5" />
            </a>
        );
    }
    return (
        <a
            href={consultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-200 ${className}`}
        >
            <Phone className="h-5 w-5" />
            Kostenlose Beratung
        </a>
    );
}

function TrustBadge() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Keine Kreditkarte
            </span>
            <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Keine versteckten Kosten
            </span>
            <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Jederzeit kündbar
            </span>
        </div>
    );
}

export default function TerminsoftwareLandingPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Minimal Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <a href="/" className="flex items-center gap-2">
                        <img src="/images/logos/treatflow-logo.svg" alt="Treatflow Logo" className="h-8 w-auto" />
                    </a>
                    <div className="hidden sm:flex items-center gap-3">
                        <div className="flex text-amber-400 mr-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3.5 w-3.5 fill-current" />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">4.9/5 auf Google</span>
                        <span className="text-gray-300">|</span>
                        <span className="text-sm text-gray-600">500+ Studios</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="/"
                            className="text-sm text-gray-600 hover:text-indigo-600 transition-colors font-medium hidden sm:inline-flex"
                        >
                            Alle Funktionen
                        </a>
                        <a
                            href={registerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
                        >
                            Kostenlos testen
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-200">
                                <Zap className="h-4 w-4" />
                                In 5 Minuten startklar - ohne Einrichtungsgebühr
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-gray-900 mb-6 leading-[1.15]">
                                Schluss mit Terminchaos in deinem{' '}
                                <span className="text-indigo-600">Kosmetikstudio</span>
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                                Kunden buchen online, Erinnerungen gehen automatisch raus, No-Shows sinken um 80%.
                                Alles in einer App - starte jetzt kostenlos.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 mb-5">
                                <CTAButton variant="primary" />
                                <CTAButton variant="secondary" />
                            </div>
                            <TrustBadge />
                        </div>
                        <div className="relative">
                            <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden aspect-[4/3]">
                                <Image
                                    src="/images/branchen/hero-kosmetikstudio.jpg"
                                    alt="Terminsoftware für Kosmetikstudios - Online-Buchung und Kalender"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Neuer Termin gebucht</div>
                                        <div className="text-xs text-gray-500">Gerade eben - online</div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-2 -right-2 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                                <div className="flex items-center gap-2">
                                    <Bell className="h-4 w-4 text-indigo-600" />
                                    <span className="text-xs font-medium text-gray-700">Erinnerung gesendet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Bar */}
            <section className="py-6 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-indigo-600">500+</span>
                            <span className="text-sm text-gray-600">Studios nutzen<br />Treatflow</span>
                        </div>
                        <div className="h-8 w-px bg-gray-200 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <div className="flex text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">4.9/5 auf Google</span>
                        </div>
                        <div className="h-8 w-px bg-gray-200 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-indigo-600">80%</span>
                            <span className="text-sm text-gray-600">weniger<br />No-Shows</span>
                        </div>
                        <div className="h-8 w-px bg-gray-200 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-indigo-600">5h+</span>
                            <span className="text-sm text-gray-600">Zeitersparnis<br />pro Woche</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem -> Solution */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Kennst du das?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Die typischen Terminprobleme im Kosmetikstudio - und wie Treatflow sie löst.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {painSolutions.map((item, i) => (
                            <div key={i} className="grid md:grid-cols-2 gap-0 md:gap-4 rounded-2xl overflow-hidden border border-gray-200">
                                <div className="bg-red-50 p-6 flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold text-sm">
                                        ✕
                                    </span>
                                    <p className="text-gray-700 font-medium">{item.pain}</p>
                                </div>
                                <div className="bg-green-50 p-6 flex items-start gap-4">
                                    <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                    </span>
                                    <p className="text-gray-700 font-medium">{item.solution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Alles, was dein Studio für die Terminverwaltung braucht
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((b, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 flex items-start gap-4 shadow-sm">
                                <div className="flex-shrink-0 w-11 h-11 bg-indigo-50 rounded-lg flex items-center justify-center">
                                    <b.icon className="h-5 w-5 text-indigo-600" />
                                </div>
                                <span className="text-gray-800 font-medium pt-2.5">{b.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            In 3 Schritten zum digitalen Terminkalender
                        </h2>
                        <p className="text-lg text-gray-600">
                            Keine komplizierte Einrichtung. In wenigen Minuten bist du startklar.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="relative text-center">
                                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                                    <span className="text-2xl font-bold text-white">{step.num}</span>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-indigo-200" />
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <CTAButton variant="primary" />
                        <p className="text-sm text-gray-500 mt-3">Kostenlos starten - in 5 Minuten bereit</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="flex text-amber-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <span className="text-sm font-semibold text-gray-900">4.9/5 auf Google</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Das sagen echte Studiobetreiber
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {reviews.map((review) => (
                            <div key={review.name} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                                <div className="flex items-center gap-1 mb-4">
                                    <div className="flex text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-current" />
                                        ))}
                                    </div>
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 ml-auto text-gray-300" fill="currentColor">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                    </svg>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    &ldquo;{review.text}&rdquo;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className={`w-9 h-9 ${review.color} rounded-full flex items-center justify-center text-white text-xs font-semibold`}>
                                        {review.initials}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                                        <div className="text-xs text-gray-500">{review.studio}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Häufige Fragen
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group border border-gray-200 rounded-xl">
                                <summary className="flex items-center justify-between cursor-pointer p-5 text-left">
                                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                                    <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 group-open:rotate-45 transition-transform duration-200">
                                        +
                                    </span>
                                </summary>
                                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 sm:py-20 bg-indigo-600">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Bereit für stressfreie Terminplanung?
                    </h2>
                    <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Starte jetzt deinen 14-Tage-Test und erlebe, wie Treatflow dein Studio verändert.
                        Keine Kreditkarte, kein Risiko.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={registerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
                        >
                            14 Tage kostenlos testen
                            <ArrowRight className="h-5 w-5" />
                        </a>
                        <a
                            href={consultUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                        >
                            <Phone className="h-5 w-5" />
                            Kostenlose Beratung
                        </a>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-indigo-200 mt-6">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="h-4 w-4" />
                            Keine Kreditkarte
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="h-4 w-4" />
                            Kein Risiko
                        </span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle className="h-4 w-4" />
                            Jederzeit kündbar
                        </span>
                    </div>
                </div>
            </section>

            {/* Minimal Footer */}
            <footer className="py-8 bg-gray-900 text-gray-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <img src="/images/logos/treatflow-logo.svg" alt="Treatflow Logo" className="h-6 w-auto brightness-0 invert" />
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                            <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
                            <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
                            <a href="/agb" className="hover:text-white transition-colors">AGB</a>
                        </div>
                        <p className="text-xs">&copy; {new Date().getFullYear()} Treatflow</p>
                    </div>
                </div>
            </footer>

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        name: 'Treatflow Terminsoftware',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Web',
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'EUR',
                            description: '14 Tage kostenlose Testversion',
                        },
                        aggregateRating: {
                            '@type': 'AggregateRating',
                            ratingValue: '4.9',
                            reviewCount: '7',
                            bestRating: '5',
                        },
                        description: 'Terminsoftware für Kosmetikstudios mit Online-Buchung, Terminkalender und automatischen Erinnerungen.',
                    }),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faqs.map((faq) => ({
                            '@type': 'Question',
                            name: faq.q,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: faq.a,
                            },
                        })),
                    }),
                }}
            />
        </div>
    );
}
