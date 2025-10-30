import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import Script from 'next/script';

export const metadata = {
    title: 'Kontakt - Treatflow Support & Beratung | Treatflow',
    description: 'Kontaktiere das Treatflow Team für persönliche Beratung. Kostenlos testen, Fragen zur Kosmetikstudio Software stellen oder Support erhalten. Made in Austria.',
    keywords: ['Treatflow Kontakt', 'Kosmetikstudio Software Support', 'Kostenlos testen', 'Treatflow Beratung', 'Beauty Software Hilfe'],
    alternates: {
        canonical: 'https://www.treatflow.io/kontakt',
    },
    openGraph: {
        title: 'Kontakt - Treatflow Support & Beratung',
        description: 'Kontaktiere das Treatflow Team für persönliche Beratung und Support.',
        url: 'https://www.treatflow.io/kontakt',
        images: [
            {
                url: '/images/og-kontakt.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow Kontakt und Support',
            },
        ],
    },
};

export default function KontaktPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Lass uns <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">sprechen</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Hast du Fragen zu Treatflow? Brauchst du Hilfe bei der Einrichtung?
                            Oder möchtest du einfach Feedback geben? Wir sind für dich da!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-8">
                                Kontaktiere uns
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                                Wir antworten in der Regel innerhalb von 24 Stunden.
                                Bei dringenden Fragen sind wir auch schneller erreichbar.
                            </p>

                            <div className="space-y-8">
                                {/* E-Mail */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">E-Mail</h3>
                                        <p className="text-gray-600 mb-2">
                                            Für alle Fragen, Support-Anfragen und Feedback
                                        </p>
                                        <a
                                            href="mailto:hello@treatflow.io"
                                            className="text-indigo-600 hover:text-indigo-700 font-semibold"
                                        >
                                            hello@treatflow.io
                                        </a>
                                    </div>
                                </div>

                                {/* Demo Termin */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MessageCircle className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Demo Termin</h3>
                                        <p className="text-gray-600 mb-4">
                                            Lerne Treatflow in einer persönlichen Demo kennen
                                        </p>
                                        <a
                                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                        >
                                            Beratung buchen
                                            <Send className="ml-2 h-4 w-4" />
                                        </a>
                                    </div>
                                </div>

                                {/* Antwortzeiten */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Clock className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Antwortzeiten</h3>
                                        <div className="space-y-2 text-gray-600">
                                            <p><strong>E-Mail:</strong> Innerhalb von 24 Stunden</p>
                                            <p><strong>Support-Anfragen:</strong> Innerhalb von 12 Stunden</p>
                                            <p><strong>Dringende Probleme:</strong> Sofort</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Standort */}
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Unser Standort</h3>
                                        <div className="text-gray-600">
                                            <p>Treatflow</p>
                                            <p>Bahnhofstrasse 17</p>
                                            <p>5500 Bischofshofen</p>
                                            <p>Österreich</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Schreib uns eine Nachricht
                            </h3>

                            <Script
                                src="https://js-eu1.hsforms.net/forms/embed/26775153.js"
                                strategy="lazyOnload"
                            />
                            <div
                                className="hs-form-frame"
                                data-region="eu1"
                                data-form-id="0d70fb34-6e5e-4a2d-babc-d80dacb623d9"
                                data-portal-id="26775153"
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Teaser */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Häufige Fragen bereits beantwortet?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Vielleicht findest du die Antwort auf deine Frage bereits in unseren FAQs.
                    </p>
                    <Link
                        href="/#faq"
                        className="inline-flex items-center bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200"
                    >
                        Zu den FAQs
                        <Send className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
}
