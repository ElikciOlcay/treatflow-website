import { FileText, Camera, Zap, Clock, CheckCircle, ArrowRight, Brain, Shield } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export const metadata = {
    title: 'Behandlungsdokumentation für Kosmetikstudios - NiSV konform',
    description: 'Professionelle Behandlungsdokumentation für Kosmetikstudios mit intelligenter Dokumentation. Vorher-Nachher Fotos, automatische Notizen und NiSV-konforme Aufzeichnungen.',
    keywords: ['Behandlungsdokumentation Kosmetik', 'NiSV konform Dokumentation', 'Vorher Nachher Fotos', 'Automatische Behandlungsnotizen', 'Rechtssichere Dokumentation'],
    openGraph: {
        title: 'Behandlungsdokumentation für Kosmetikstudios - NiSV konform',
        description: 'Professionelle Behandlungsdokumentation mit intelligenter Dokumentation und NiSV-konformen Aufzeichnungen.',
        url: 'https://treatflow.io/behandlungsdokumentation',
        images: [
            {
                url: '/images/mockups/ai-doc.png',
                width: 1200,
                height: 630,
                alt: 'Treatflow Behandlungsdokumentation Interface',
            },
        ],
    },
};

export default function BehandlungsdokumentationPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <FileText className="h-4 w-4 mr-2" />
                            <Zap className="h-4 w-4 mr-1" />
                            Behandlungsdokumentation
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Professionelle <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Behandlungsdokumentation</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Halte jede Behandlung professionell fest - mit KI-Unterstützung, Fotos, Notizen und allen wichtigen Details.
                            So weißt du beim nächsten Termin genau, was gemacht wurde.
                        </p>
                    </div>

                    {/* Behandlungsdokumentation Screenshot */}
                    <div className="max-w-5xl mx-auto">
                        <img
                            src="/images/mockups/dokumentation-hero.png"
                            alt="Treatflow Behandlungsdokumentation - Professionelle Dokumentation mit Vorher-Nachher Fotos und automatischen Notizen"
                            className="w-full h-auto shadow-2xl rounded-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Dokumentation war nie einfacher
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Professionelle Dokumentation mit intelligenter Unterstützung für rechtssichere Behandlungsverläufe.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* KI-Unterstützung */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                                <Brain className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">KI-Assistent</h3>
                            <p className="text-gray-600 mb-6">
                                Unsere KI hilft dir beim Erstellen professioneller Behandlungsnotizen
                                und gibt automatisch Empfehlungen für Nachbehandlungen.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Automatische Textvorschläge
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Intelligente Empfehlungen
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Behandlungsverlauf-Analyse
                                </li>
                            </ul>
                        </div>

                        {/* Foto-Management */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                                <Camera className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Foto-Management</h3>
                            <p className="text-gray-600 mb-6">
                                Dokumentiere Behandlungsverläufe mit Vorher/Nachher-Fotos.
                                Sicher gespeichert und DSGVO-konform organisiert.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Vorher/Nachher Vergleiche
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Automatische Sortierung
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Sichere Speicherung
                                </li>
                            </ul>
                        </div>

                        {/* Rechtssicherheit */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">NiSV-konform</h3>
                            <p className="text-gray-600 mb-6">
                                Alle Dokumentationen entsprechen den gesetzlichen Anforderungen
                                der NiSV und sind rechtssicher archiviert.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    NiSV-konforme Archivierung
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Automatische Backups
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Export-Funktionen
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Vollständiger Behandlungsverlauf
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Behalte den kompletten Überblick über alle Behandlungen deiner Kunden - chronologisch sortiert und übersichtlich dargestellt.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                                <h3 className="text-xl font-bold">Behandlungsverlauf - Maria Müller</h3>
                                <p className="text-indigo-100">Kundin seit Januar 2023</p>
                            </div>

                            <div className="p-8">
                                <div className="space-y-8">
                                    {/* Timeline Item 1 */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mt-6"></div>
                                        <div className="ml-6 flex-1">
                                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h4 className="text-lg font-semibold text-gray-900">Gesichtsbehandlung</h4>
                                                    <span className="text-sm text-gray-500">15.09.2024</span>
                                                </div>
                                                <p className="text-gray-700 mb-4">
                                                    Tiefenreinigung mit Ultraschall. Hyaluron-Maske angewendet.
                                                    Hautbild deutlich verbessert, keine Irritationen.
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-4">
                                                        <span className="text-sm text-gray-600">2 Fotos</span>
                                                        <span className="text-sm text-gray-600">€120</span>
                                                    </div>
                                                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Abgeschlossen</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline Item 2 */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-6"></div>
                                        <div className="ml-6 flex-1">
                                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h4 className="text-lg font-semibold text-gray-900">Microneedling</h4>
                                                    <span className="text-sm text-gray-500">28.08.2024</span>
                                                </div>
                                                <p className="text-gray-700 mb-4">
                                                    Professionelles Microneedling zur Hautstraffung.
                                                    Behandlung gut vertragen, leichte Rötung wie erwartet.
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-4">
                                                        <span className="text-sm text-gray-600">4 Fotos</span>
                                                        <span className="text-sm text-gray-600">€180</span>
                                                    </div>
                                                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Abgeschlossen</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline Item 3 */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 w-4 h-4 bg-purple-500 rounded-full mt-6"></div>
                                        <div className="ml-6 flex-1">
                                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h4 className="text-lg font-semibold text-gray-900">Erstberatung</h4>
                                                    <span className="text-sm text-gray-500">10.08.2024</span>
                                                </div>
                                                <p className="text-gray-700 mb-4">
                                                    Umfassende Hautanalyse und Beratung.
                                                    Behandlungsplan für die nächsten Monate erstellt.
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-4">
                                                        <span className="text-sm text-gray-600">1 Foto</span>
                                                        <span className="text-sm text-gray-600">€50</span>
                                                    </div>
                                                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Abgeschlossen</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Warum professionelle Dokumentation wichtig ist
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Eine lückenlose Dokumentation schützt dich rechtlich und hilft dir, bessere Behandlungsergebnisse zu erzielen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Shield className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Rechtssicherheit</h3>
                            <p className="text-gray-600 text-sm">
                                Lückenlose Dokumentation schützt dich bei Haftungsfragen und entspricht allen gesetzlichen Anforderungen.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Clock className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Zeitersparnis</h3>
                            <p className="text-gray-600 text-sm">
                                Mit KI-Unterstützung dokumentierst du schneller und effizienter - mehr Zeit für deine Kunden.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Brain className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Bessere Ergebnisse</h3>
                            <p className="text-gray-600 text-sm">
                                Vollständige Behandlungsverläufe helfen dir, optimale Behandlungspläne zu entwickeln.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FileText className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Professionalität</h3>
                            <p className="text-gray-600 text-sm">
                                Professionelle Dokumentation stärkt das Vertrauen deiner Kunden und deine Reputation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für professionelle Dokumentation?
                    </h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        Teste die professionelle Behandlungsdokumentation 14 Tage kostenlos und erlebe, wie einfach rechtssichere Dokumentation sein kann.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <Link
                            href="/"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
                        >
                            Zurück zur Startseite
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
