import { ShoppingBag, Package, TrendingUp, CheckCircle, ArrowRight, Euro, BarChart3, Camera, CreditCard } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export const metadata = {
    title: 'Produktverkauf & Lagerverwaltung für Kosmetikstudios',
    description: 'Integriertes Produktverkauf-System für Kosmetikstudios. Verkaufe Pflegeprodukte direkt an deine Kunden mit einfacher Lagerverwaltung und vollständiger Nachverfolgung.',
    keywords: ['Produktverkauf Kosmetikstudio', 'Lagerverwaltung Beauty', 'Kosmetik Produkte verkaufen', 'Studio Verkaufssystem', 'Zusatzumsatz Kosmetik'],
    openGraph: {
        title: 'Produktverkauf & Lagerverwaltung für Kosmetikstudios',
        description: 'Integriertes System für Produktverkauf mit einfacher Lagerverwaltung und Nachverfolgung.',
        url: 'https://treatflow.io/shop',
        images: [
            {
                url: '/images/og-shop.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow Produktverkauf System',
            },
        ],
    },
};

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Package className="h-4 w-4 mr-2" />
                            Produktverkauf & Lager
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Verkaufe <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Produkte</span> und behalte alles im Blick
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Internes Verkaufssystem für dein Studio. Verkaufe Pflegeprodukte direkt an deine Kunden,
                            verwalte dein Lager und verfolge alle Verkäufe nach - wer hat was wann gekauft.
                        </p>
                    </div>

                    {/* Shop Screenshot */}
                    <div className="max-w-5xl mx-auto">
                        <img
                            src="/images/mockups/shop-hero.png"
                            alt="Treatflow Produktverkauf System - Einfache Lagerverwaltung und Verkaufsübersicht für Kosmetikstudios"
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
                            Einfache Produktverwaltung für dein Studio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Verkaufe Pflegeprodukte direkt in deinem Studio und behalte den Überblick - wer hat was wann gekauft.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Unbegrenzte Produkte */}
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                                <Package className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Unbegrenzte Produkte</h3>
                            <p className="text-gray-600 mb-6">
                                Füge so viele Produkte hinzu, wie du möchtest.
                                Keine Limits bei der Anzahl deiner Shop-Artikel.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Keine Produktlimits
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Kategorien & Tags
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Flexible Preisgestaltung
                                </li>
                            </ul>
                        </div>

                        {/* Automatische Lagerverwaltung */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                                <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Einfache Lagerverwaltung</h3>
                            <p className="text-gray-600 mb-6">
                                Behalte deine Lagerbestände einfach im Blick.
                                Sieh sofort, was noch da ist und was nachbestellt werden muss.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Bestandsübersicht auf einen Blick
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Warnung bei niedrigen Beständen
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Verkaufshistorie & Nachverfolgung
                                </li>
                            </ul>
                        </div>

                        {/* Produktbilder & Beschreibungen */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                                <Camera className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Produktbilder & Beschreibungen</h3>
                            <p className="text-gray-600 mb-6">
                                Präsentiere deine Produkte mit hochwertigen Bildern
                                und detaillierten Beschreibungen.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Mehrere Produktbilder
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Rich-Text Beschreibungen
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Produktvarianten
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sales Analytics Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Vollständige Nachverfolgung aller Verkäufe
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Sieh genau wer was wann gekauft hat. Perfekte Übersicht über alle Produktverkäufe
                            und deine Kunden-Kaufhistorie.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold">Verkaufsstatistiken</h3>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-indigo-100 text-sm">Letzte 30 Tage</span>
                                        <BarChart3 className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="grid md:grid-cols-4 gap-6 mb-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-gray-900 mb-2">€1.245</div>
                                        <p className="text-sm text-gray-600">Gesamtumsatz</p>
                                        <div className="text-green-600 text-xs font-medium mt-1">+12% vs. Vormonat</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-gray-900 mb-2">42</div>
                                        <p className="text-sm text-gray-600">Verkäufe</p>
                                        <div className="text-green-600 text-xs font-medium mt-1">+8% vs. Vormonat</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-gray-900 mb-2">€29.60</div>
                                        <p className="text-sm text-gray-600">Ø Bestellwert</p>
                                        <div className="text-green-600 text-xs font-medium mt-1">+3% vs. Vormonat</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
                                        <p className="text-sm text-gray-600">Produkte verkauft</p>
                                        <div className="text-blue-600 text-xs font-medium mt-1">5 verschiedene</div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Top Produkte</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                                <span className="font-medium text-gray-900">Hyaluron Serum Premium</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="font-bold text-gray-900">€445</span>
                                                <p className="text-xs text-gray-600">5 Verkäufe</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                                                <span className="font-medium text-gray-900">Gutschein €100</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="font-bold text-gray-900">€700</span>
                                                <p className="text-xs text-gray-600">7 Verkäufe</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                                            <div className="flex items-center">
                                                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                                <span className="font-medium text-gray-900">Augencreme</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="font-bold text-gray-900">€260</span>
                                                <p className="text-xs text-gray-600">4 Verkäufe</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Purchase History */}
            <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Immer den Überblick behalten
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Wer hat was wann gekauft? Mit der integrierten Nachverfolgung behältst du
                            den kompletten Überblick über alle Produktverkäufe.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Beispiel: Kunde Maria Müller</h3>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                            <Package className="h-5 w-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Hyaluron Serum Premium</p>
                                            <p className="text-sm text-gray-600">15.09.2024 • nach Gesichtsbehandlung</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-gray-900">€89</p>
                                        <p className="text-sm text-green-600">Bezahlt</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                            <Euro className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Gutschein €50</p>
                                            <p className="text-sm text-gray-600">28.08.2024 • für ihre Schwester</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-gray-900">€50</p>
                                        <p className="text-sm text-green-600">Bezahlt</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                            <Package className="h-5 w-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Augencreme Deluxe</p>
                                            <p className="text-sm text-gray-600">10.08.2024 • empfohlen nach Beratung</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-gray-900">€65</p>
                                        <p className="text-sm text-green-600">Bezahlt</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold text-indigo-900">Gesamt gekauft von Maria</p>
                                        <p className="text-sm text-indigo-700">3 Produkte in den letzten 3 Monaten</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-indigo-900">€204</p>
                                        <p className="text-sm text-indigo-700">Zusatzumsatz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Types Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Was kannst du verkaufen?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Von Pflegeprodukten bis zu digitalen Gutscheinen - verkaufe alles was deine Kunden brauchen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Package className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Pflegeprodukte</h3>
                            <p className="text-gray-600 text-sm">
                                Seren, Cremes, Masken und alle Produkte die du in deinen Behandlungen verwendest.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Euro className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Gutscheine</h3>
                            <p className="text-gray-600 text-sm">
                                Digitale Gutscheine für Behandlungen oder feste Beträge - perfekt für Geschenke.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <ShoppingBag className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Behandlungspakete</h3>
                            <p className="text-gray-600 text-sm">
                                Verkaufe Behandlungsserien oder Kombi-Pakete zu attraktiven Preisen.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Zubehör</h3>
                            <p className="text-gray-600 text-sm">
                                Tools, Geräte oder Accessoires die deine Kunden für die Heimpflege brauchen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Warum ein integrierter Shop dein Studio voranbringt
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Zusätzliche Einnahmen, zufriedenere Kunden und professionelle Abwicklung - das sind die Vorteile.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                                <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Zusätzliche Einnahmen</h3>
                            <p className="text-gray-600">
                                Generiere passives Einkommen durch den Verkauf von Produkten und Gutscheinen -
                                auch außerhalb deiner Behandlungszeiten.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                                <CheckCircle className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Kundenbindung stärken</h3>
                            <p className="text-gray-600">
                                Biete deinen Kunden die Möglichkeit, ihre Lieblings-Pflegeprodukte
                                direkt bei dir zu kaufen und stärke so die Bindung.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                                <CreditCard className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Professionelle Abwicklung</h3>
                            <p className="text-gray-600">
                                Automatische Rechnungen, sichere Zahlungen und Lagerverwaltung -
                                alles läuft ohne zusätzlichen Aufwand für dich.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für deinen eigenen Studio-Shop?
                    </h2>
                    <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Teste den integrierten Shop 14 Tage kostenlos und entdecke eine neue Einnahmequelle für dein Studio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <Link
                            href="/"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors duration-200"
                        >
                            Zurück zur Startseite
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
