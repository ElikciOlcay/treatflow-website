import { Users, Search, Upload, Database, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Kundenverwaltung für Kosmetikstudios - Unbegrenzte Kundenprofile | Treatflow',
    description: 'Professionelle Kundenverwaltung für Kosmetikstudios mit unbegrenzten Kundenprofilen. Import-Funktion, schnelle Suche und komplette Behandlungshistorie. DSGVO-konform.',
    keywords: ['Kundenverwaltung Kosmetik', 'CRM Beauty Salon', 'Kundenprofile Kosmetikstudio', 'Behandlungshistorie', 'DSGVO Kundendaten'],
    alternates: {
        canonical: 'https://www.treatflow.io/kundenverwaltung',
    },
    openGraph: {
        title: 'Kundenverwaltung für Kosmetikstudios - Unbegrenzte Kundenprofile',
        description: 'Professionelle Kundenverwaltung mit unbegrenzten Kundenprofilen, Import-Funktion und schneller Suche.',
        url: 'https://www.treatflow.io/kundenverwaltung',
        images: [
            {
                url: '/images/mockups/kundenverwaltung-overview.png',
                width: 1200,
                height: 630,
                alt: 'Treatflow Kundenverwaltung Interface',
            },
        ],
    },
};

export default function KundenverwaltungPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Users className="h-4 w-4 mr-2" />
                            Kundenverwaltung
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Alle <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Kundendaten</span> perfekt organisiert
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Skalierbare Kundendatenbank mit unbegrenzter Speicherkapazität. Import bestehender Daten,
                            schnelle Suche und alle wichtigen Informationen auf einen Blick.
                        </p>
                    </div>

                    {/* Kundenverwaltung Screenshot */}
                    <div className="max-w-5xl mx-auto">
                        <img
                            src="/images/mockups/kundenverwaltung-overview.png"
                            alt="Treatflow Kundenverwaltung - Übersichtliche Darstellung aller Kunden mit Suchfunktion und Detailansicht"
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
                            Kundenverwaltung die mitwächst
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Von der ersten Kundin bis zum großen Studio - unsere Kundenverwaltung skaliert mit deinem Erfolg.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Unbegrenzte Kunden */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                                <Database className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Unbegrenzte Kapazität</h3>
                            <p className="text-gray-600 mb-6">
                                Speichere unbegrenzt viele Kunden. Das System wächst mit deinem Studio
                                und bleibt dabei immer schnell und übersichtlich.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Keine Begrenzung der Kundenzahl
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Bleibt immer schnell
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Automatische Backups
                                </li>
                            </ul>
                        </div>

                        {/* Schnelle Suche */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                                <Search className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Blitzschnelle Suche</h3>
                            <p className="text-gray-600 mb-6">
                                Finde jeden Kunden in Sekunden. Suche nach Name, Telefonnummer,
                                E-Mail oder sogar nach Behandlungsart.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Intelligente Suchfunktion
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Filter nach Behandlungen
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Sortierung nach Datum
                                </li>
                            </ul>
                        </div>

                        {/* Daten Import */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                                <Upload className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Einfacher Import</h3>
                            <p className="text-gray-600 mb-6">
                                Übertrage bestehende Kundendaten mit wenigen Klicks.
                                Excel, CSV oder andere Formate - wir machen es möglich.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Excel & CSV Import
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Automatische Zuordnung
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Duplikat-Erkennung
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Profile Detail */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Vollständige Kundenprofile
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Alle wichtigen Informationen zu deinen Kunden an einem Ort.
                            Von Kontaktdaten bis zur kompletten Behandlungshistorie.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                                <div className="flex items-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                                        <span className="text-2xl font-bold">MM</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Maria Müller</h3>
                                        <p className="text-indigo-100">Kundin seit Januar 2023</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Kontaktdaten</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <Phone className="h-4 w-4 text-gray-400 mr-3" />
                                                <span className="text-gray-700">+49 123 456 789</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Mail className="h-4 w-4 text-gray-400 mr-3" />
                                                <span className="text-gray-700">maria@example.com</span>
                                            </div>
                                        </div>

                                        <h4 className="text-lg font-semibold text-gray-900 mb-4 mt-8">Statistiken</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-blue-50 p-4 rounded-lg text-center">
                                                <p className="text-2xl font-bold text-blue-600">24</p>
                                                <p className="text-sm text-gray-600">Behandlungen</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg text-center">
                                                <p className="text-2xl font-bold text-green-600">€2.890</p>
                                                <p className="text-sm text-gray-600">Umsatz gesamt</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Letzte Behandlungen</h4>
                                        <div className="space-y-3">
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="font-medium text-gray-900">Gesichtsbehandlung</p>
                                                        <p className="text-sm text-gray-600">15.09.2024</p>
                                                    </div>
                                                    <span className="text-sm font-medium text-green-600">€120</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="font-medium text-gray-900">Microneedling</p>
                                                        <p className="text-sm text-gray-600">28.08.2024</p>
                                                    </div>
                                                    <span className="text-sm font-medium text-green-600">€180</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="font-medium text-gray-900">Beratung</p>
                                                        <p className="text-sm text-gray-600">10.08.2024</p>
                                                    </div>
                                                    <span className="text-sm font-medium text-green-600">€50</span>
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

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für professionelle Kundenverwaltung?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Teste die Kundenverwaltung 14 Tage kostenlos und organisiere dein Studio wie nie zuvor.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <Link
                            href="/"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                        >
                            Zurück zur Startseite
                        </Link>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
}
