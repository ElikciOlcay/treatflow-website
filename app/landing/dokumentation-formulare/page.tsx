import { Metadata } from 'next';
import { CheckCircle, FileText, Shield, Clock, Users, Star, ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'NISV-konforme Dokumentation & Formulare für Kosmetikstudios | Treatflow',
    description: 'Automatisierte NISV-Dokumentation und digitale Formulare für Ihr Kosmetikstudio. Rechtssicher, zeitsparend und professionell. Jetzt 14 Tage kostenlos testen!',
    keywords: 'NISV Dokumentation, Kosmetikstudio Formulare, digitale Behandlungsdokumentation, Kosmetik Software, Beauty Studio Software, Anamnese Formulare, Aufklärungsbogen digital',
    authors: [{ name: 'Treatflow' }],
    robots: 'index, follow',
    alternates: {
        canonical: 'https://treatflow.de/landing/dokumentation-formulare',
    },
    openGraph: {
        title: 'NISV-konforme Dokumentation & Formulare für Kosmetikstudios | Treatflow',
        description: 'Automatisierte NISV-Dokumentation und digitale Formulare für Ihr Kosmetikstudio. Rechtssicher, zeitsparend und professionell. Jetzt 14 Tage kostenlos testen!',
        url: 'https://treatflow.de/landing/dokumentation-formulare',
        siteName: 'Treatflow',
        images: [
            {
                url: '/images/mockups/dokumentation-hero.png',
                width: 1200,
                height: 630,
                alt: 'Treatflow NISV-konforme Dokumentation für Kosmetikstudios',
            },
        ],
        locale: 'de_DE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NISV-konforme Dokumentation & Formulare für Kosmetikstudios',
        description: 'Automatisierte NISV-Dokumentation und digitale Formulare für Ihr Kosmetikstudio. Jetzt 14 Tage kostenlos testen!',
        images: ['/images/mockups/dokumentation-hero.png'],
    },
};

export default function DokumentationFormulareLandingPage() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Treatflow",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "NISV-konforme Dokumentation und digitale Formulare für Kosmetikstudios",
        "url": "https://treatflow.de/landing/dokumentation-formulare",
        "author": {
            "@type": "Organization",
            "name": "Treatflow"
        },
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "14 Tage kostenlose Testversion"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "500"
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Minimale Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Image
                                src="/images/logos/treatflow-logo.svg"
                                alt="Treatflow"
                                width={120}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </div>
                        <div className="flex items-center">
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
                            >
                                Kostenlos testen
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                <Zap className="w-4 h-4 mr-2" />
                                Automatisierte NISV-Dokumentation
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                <span className="text-blue-600">Rechtssichere</span><br />
                                Dokumentation &<br />
                                <span className="text-purple-600">Digitale Formulare</span><br />
                                <span className="text-gray-700 text-3xl lg:text-4xl">für Kosmetikstudios</span>
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Sparen Sie <strong>bis zu 3 Stunden täglich</strong> mit automatisierter NISV-konformer Dokumentation
                                und professionellen digitalen Formularen für Ihr Kosmetikstudio.
                            </p>

                            <div className="flex justify-center sm:justify-start">
                                <a
                                    href="https://app.treatflow.io/auth/register"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                                >
                                    14 Tage kostenlos testen
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                            </div>

                            <div className="flex items-center space-x-6 text-sm text-gray-600">
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Keine Kreditkarte erforderlich
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    DSGVO-konform
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>

                            {/* Video Container - Hochformat */}
                            <div className="relative bg-gray-900 rounded-2xl shadow-2xl overflow-hidden group max-w-sm mx-auto">
                                <div className="aspect-[9/16]">
                                    <video
                                        id="demo-video"
                                        className="w-full h-full object-cover"
                                        controls
                                        preload="metadata"
                                        poster="/images/video/video-bild.png"
                                    >
                                        <source src="/videos/treatflow-demo.mp4" type="video/mp4" />
                                        <source src="/videos/treatflow-demo.webm" type="video/webm" />
                                        {/* Fallback für Browser ohne Video-Support */}
                                        <div className="flex items-center justify-center h-full bg-gray-800 text-white">
                                            <div className="text-center">
                                                <p className="mb-4">Ihr Browser unterstützt keine Videos.</p>
                                                <a
                                                    href="/videos/treatflow-demo.mp4"
                                                    className="text-blue-400 underline"
                                                    download
                                                >
                                                    Video herunterladen
                                                </a>
                                            </div>
                                        </div>
                                    </video>
                                </div>

                                {/* Play Button Overlay - versteckt sich beim Abspielen */}
                                <div id="video-overlay" className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none transition-opacity duration-300">
                                    <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                                        <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>

                                    {/* "Demo Video" Label */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                                            <p className="text-sm font-semibold text-gray-900">📱 Demo Video</p>
                                            <p className="text-xs text-gray-600">Treatflow in Aktion</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                            Kennen Sie diese Probleme?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <Clock className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Zeitaufwändige Dokumentation</h3>
                                <p className="text-gray-600">Stundenlange manuelle Dokumentation nach jeder Behandlung</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <Shield className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">NISV-Compliance Unsicherheit</h3>
                                <p className="text-gray-600">Angst vor rechtlichen Konsequenzen bei unvollständiger Dokumentation</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <FileText className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">Papierformulare Chaos</h3>
                                <p className="text-gray-600">Verlust von Formularen und unleserliche Handschriften</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Die Lösung: Automatisierte NISV-Dokumentation
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Treatflow automatisiert Ihre gesamte Behandlungsdokumentation und macht sie NISV-konform –
                                ohne zusätzlichen Zeitaufwand.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <Image
                                    src="/images/mockups/ai-doc.png"
                                    alt="KI-gestützte Dokumentation"
                                    width={500}
                                    height={400}
                                    className="rounded-2xl shadow-2xl"
                                />
                            </div>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Zap className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">KI-gestützte Dokumentation</h3>
                                        <p className="text-gray-600">Unsere KI erstellt automatisch NISV-konforme Behandlungsberichte basierend auf Ihren Eingaben.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">100% NISV-konform</h3>
                                        <p className="text-gray-600">Alle Dokumentationen entsprechen automatisch den aktuellen NISV-Richtlinien und Gesetzesvorgaben.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Digitale Formulare</h3>
                                        <p className="text-gray-600">Professionelle, anpassbare Formulare für Anamnese, Aufklärung und Einverständniserklärungen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Ihre Vorteile mit Treatflow
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                                    <Clock className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">3+ Stunden täglich sparen</h3>
                                <p className="text-gray-600">Automatisierte Dokumentation reduziert Ihren Verwaltungsaufwand drastisch.</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                                    <Shield className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Rechtssicherheit</h3>
                                <p className="text-gray-600">100% NISV-konforme Dokumentation schützt Sie vor rechtlichen Risiken.</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                                    <Users className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professioneller Eindruck</h3>
                                <p className="text-gray-600">Digitale Formulare und Dokumentation wirken modern und vertrauensvoll.</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                                    <FileText className="w-8 h-8 text-yellow-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Papierlos arbeiten</h3>
                                <p className="text-gray-600">Keine verlorenen Formulare mehr – alles digital und sicher gespeichert.</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                                    <Zap className="w-8 h-8 text-red-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sofort einsatzbereit</h3>
                                <p className="text-gray-600">Vorgefertigte Formulare und Templates – keine Einrichtungszeit nötig.</p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                                    <Star className="w-8 h-8 text-indigo-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kundenzufriedenheit</h3>
                                <p className="text-gray-600">Kunden schätzen die professionelle, digitale Abwicklung.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Showcase */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Alles was Sie brauchen – in einer Software
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900">Intelligente Dokumentation</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">KI-gestützte Behandlungsberichte</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Automatische NISV-Compliance</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Foto-Dokumentation mit Zeitstempel</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Behandlungsparameter erfassen</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Image
                                    src="/images/mockups/dokumentation-hero.png"
                                    alt="Dokumentation Features"
                                    width={500}
                                    height={400}
                                    className="rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <Image
                                    src="/images/mockups/formulare-marketplace.png"
                                    alt="Formulare Marketplace"
                                    width={500}
                                    height={400}
                                    className="rounded-2xl shadow-2xl"
                                />
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900">Professionelle Formulare</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Anamnese-Bögen für alle Behandlungen</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Aufklärungs- und Einverständniserklärungen</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Digitale Unterschriften</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">Individuelle Anpassungen möglich</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
                            Über 500+ Kosmetikstudios vertrauen bereits auf Treatflow
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="flex items-center justify-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4">
                                    "Treatflow hat unser Studio revolutioniert. Die automatische Dokumentation spart uns täglich Stunden!"
                                </p>
                                <p className="font-semibold text-gray-900">Marina K., Beauty Lounge München</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="flex items-center justify-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4">
                                    "Endlich NISV-konforme Dokumentation ohne Stress. Unsere Kunden sind begeistert von den digitalen Formularen."
                                </p>
                                <p className="font-semibold text-gray-900">Sandra M., Kosmetikstudio Berlin</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="flex items-center justify-center mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4">
                                    "Die Zeitersparnis ist unglaublich. Mehr Zeit für Kunden, weniger Papierkram. Perfekt!"
                                </p>
                                <p className="font-semibold text-gray-900">Lisa R., Aesthetic Center Hamburg</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center space-x-8 text-gray-600">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600">500+</div>
                                <div className="text-sm">Zufriedene Studios</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-600">50k+</div>
                                <div className="text-sm">Dokumentationen</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600">4.9/5</div>
                                <div className="text-sm">Kundenbewertung</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                            Starten Sie noch heute mit professioneller Dokumentation
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Testen Sie Treatflow 14 Tage kostenlos und erleben Sie, wie einfach NISV-konforme Dokumentation sein kann.
                        </p>

                        <div className="text-center">
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-white text-blue-600 px-12 py-4 rounded-lg font-semibold text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-blue-600 hover:bg-blue-50"
                            >
                                <span>Jetzt 14 Tage kostenlos testen</span>
                                <ArrowRight className="ml-2 w-6 h-6" />
                            </a>

                            <div className="mt-4 text-sm text-white/80">
                                <CheckCircle className="w-4 h-4 inline mr-1 text-green-400" />
                                Keine Kreditkarte erforderlich
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-sm opacity-75">
                                Über 500 Kosmetikstudios vertrauen bereits auf Treatflow
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-12 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                            <div className="flex items-center space-x-2">
                                <Shield className="w-5 h-5 text-green-400" />
                                <span className="text-sm">DSGVO-konform</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span className="text-sm">Deutscher Support</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Star className="w-5 h-5 text-yellow-400" />
                                <span className="text-sm">4.9/5 Sterne Bewertung</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video & Tracking Scripts */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            // Video Play Button Handler
            document.addEventListener('DOMContentLoaded', function() {
              const video = document.getElementById('demo-video');
              const overlay = document.getElementById('video-overlay');
              
              if (video && overlay) {
                // Verstecke Overlay beim Abspielen
                video.addEventListener('play', function() {
                  overlay.style.opacity = '0';
                  overlay.style.pointerEvents = 'none';
                });
                
                // Zeige Overlay beim Pausieren
                video.addEventListener('pause', function() {
                  overlay.style.opacity = '1';
                  overlay.style.pointerEvents = 'none';
                });
                
                // Zeige Overlay wenn Video zu Ende ist
                video.addEventListener('ended', function() {
                  overlay.style.opacity = '1';
                  overlay.style.pointerEvents = 'none';
                });
              }
            });
            
            // Lead Tracking
            function trackLead(email, phone, name) {
              // Facebook Pixel Lead Event
              if (typeof fbq !== 'undefined') {
                fbq('track', 'Lead', {
                  content_name: 'Dokumentation & Formulare Landing Page',
                  content_category: 'Lead Generation',
                  value: 0,
                  currency: 'EUR'
                });
              }
              
              // Google Analytics Event
              if (typeof gtag !== 'undefined') {
                gtag('event', 'generate_lead', {
                  event_category: 'engagement',
                  event_label: 'dokumentation-formulare-landing',
                  value: 1
                });
              }
              
              console.log('Lead tracked:', { email, phone, name });
            }
            
            // Form Submission Handler
            document.addEventListener('DOMContentLoaded', function() {
              const forms = document.querySelectorAll('form');
              forms.forEach(form => {
                form.addEventListener('submit', function(e) {
                  e.preventDefault();
                  
                  const formData = new FormData(form);
                  const email = form.querySelector('input[type="email"]')?.value;
                  const phone = form.querySelector('input[type="tel"]')?.value;
                  const name = form.querySelector('input[type="text"]')?.value;
                  
                  if (email) {
                    trackLead(email, phone, name);
                    
                    // Hier würde normalerweise der API-Call erfolgen
                    alert('Vielen Dank! Wir melden uns in Kürze bei Ihnen.');
                  }
                });
              });
            });
          `,
                }}
            />
        </div>
    );
}
