import { FileText, Zap, Edit3, CheckCircle, ArrowRight, Sparkles, Layout } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Formulare für Kosmetikstudios - KI-Generator & Vorlagen | Treatflow',
    description: 'Professionelle Formulare für Kosmetikstudios mit KI-Generator. Anamnesen, Einverständniserklärungen und Behandlungsformulare. NiSV-konform und rechtssicher.',
    keywords: ['Formulare Kosmetik', 'KI Formular Generator', 'Anamnese Vorlagen', 'NiSV konform Formulare', 'Einverständniserklärung Beauty'],
    alternates: {
        canonical: 'https://www.treatflow.io/formulare',
    },
    openGraph: {
        title: 'Formulare für Kosmetikstudios - KI-Generator & Vorlagen',
        description: 'Professionelle Formulare mit KI-Generator für Kosmetikstudios. NiSV-konform und rechtssicher.',
        url: 'https://www.treatflow.io/formulare',
        images: [
            {
                url: '/images/mockups/formulare-marketplace.png',
                width: 1200,
                height: 630,
                alt: 'Treatflow Formulare Marketplace',
            },
        ],
    },
};

export default function FormularePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <FileText className="h-4 w-4 mr-2" />
                            Formulare & KI-Generator
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Professionelle <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Formulare</span> für alle Behandlungen
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Umfangreicher Formular-Marketplace mit KI-Generator und Drag & Drop Editor.
                            Erstelle individuelle Formulare oder nutze fertige Vorlagen für alle Beauty-Behandlungen.
                        </p>
                    </div>

                    {/* Formulare Marketplace Screenshot */}
                    <div className="max-w-5xl mx-auto">
                        <img
                            src="/images/mockups/formulare-marketplace.png"
                            alt="Treatflow Formulare Marketplace - Professionelle Formulare für alle Beauty-Behandlungen mit KI-Generator"
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
                            Drei Wege zu perfekten Formularen
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Egal ob fertige Vorlage, KI-Generator oder individueller Editor - finde den perfekten Weg für deine Formulare.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Marketplace */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FileText className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Formular-Marketplace</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Fertige professionelle Formulare für alle Beauty-Behandlungen.
                                Rechtssicher, NiSV-konform und sofort einsatzbereit.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Anamnese & Aufklärung</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Einverständniserklärungen</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Zufriedenheits-Umfragen</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Alle Kategorien abgedeckt</span>
                                </li>
                            </ul>
                            <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
                                Sofort verfügbar
                            </div>
                        </div>

                        {/* KI Generator */}
                        <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-2xl text-center relative overflow-hidden">
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                                <Zap className="h-3 w-3 mr-1" />
                                KI
                            </div>
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">KI-Generator</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Beschreibe deine Behandlung und die KI erstellt automatisch
                                das perfekte Formular mit allen nötigen Feldern.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Intelligente Feld-Erstellung</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Automatische Rechtssicherheit</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Personalisierte Inhalte</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Blitzschnelle Erstellung</span>
                                </li>
                            </ul>
                            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-medium">
                                In Sekunden fertig
                            </div>
                        </div>

                        {/* Drag & Drop Editor */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Layout className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Drag & Drop Editor</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Erstelle individuelle Formulare mit unserem intuitiven Editor.
                                Ziehe Felder per Drag & Drop und passe alles nach deinen Wünschen an.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Intuitive Bedienung</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Alle Feldtypen verfügbar</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Vollständige Anpassung</span>
                                </li>
                                <li className="flex items-center text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                    <span>Live-Vorschau</span>
                                </li>
                            </ul>
                            <div className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium">
                                Vollständige Kontrolle
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Editor Demo */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            So einfach erstellst du Formulare
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Drei Schritte zu professionellen Formularen - egal welchen Weg du wählst.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-white font-bold text-sm">1</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Vorlage wählen oder KI nutzen</h3>
                                        <p className="text-gray-600">
                                            Starte mit einer fertigen Vorlage aus dem Marketplace oder beschreibe der KI,
                                            welches Formular du brauchst.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-white font-bold text-sm">2</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Anpassen und personalisieren</h3>
                                        <p className="text-gray-600">
                                            Nutze den Drag & Drop Editor um Felder hinzuzufügen, zu entfernen oder
                                            anzupassen. Alles genau nach deinen Vorstellungen.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-white font-bold text-sm">3</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Sofort einsatzbereit</h3>
                                        <p className="text-gray-600">
                                            Dein Formular ist sofort verfügbar. Teile es per Link,
                                            QR-Code oder integriere es direkt in deinen Workflow.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Builder Mockup */}
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">Formular Editor</h3>
                                    <div className="flex items-center space-x-2">
                                        <button className="bg-white/20 px-3 py-1 rounded text-sm">Vorschau</button>
                                        <button className="bg-white/20 px-3 py-1 rounded text-sm">Speichern</button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="space-y-4">
                                    <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-medium text-gray-900">Vorname</span>
                                            <Edit3 className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Max" readOnly />
                                    </div>

                                    <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-medium text-gray-900">Nachname</span>
                                            <Edit3 className="h-4 w-4 text-gray-400" />
                                        </div>
                                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Mustermann" readOnly />
                                    </div>

                                    <div className="border-2 border-dashed border-blue-300 bg-blue-50 p-4 rounded-lg">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-medium text-gray-900">Behandlungsart</span>
                                            <Edit3 className="h-4 w-4 text-blue-500" />
                                        </div>
                                        <select className="w-full p-2 border border-gray-300 rounded" disabled>
                                            <option>Gesichtsbehandlung</option>
                                        </select>
                                    </div>

                                    <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg opacity-50">
                                        <div className="text-center text-gray-500">
                                            <span className="text-sm">+ Neues Feld hinzufügen</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Formulare für alle Behandlungsarten
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Egal ob Kosmetik, Medizin, Beauty, Haar oder Nägel - wir haben die passenden Formulare für dein Studio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-6 rounded-xl text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-sm">K</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Kosmetik</h3>
                            <p className="text-sm text-gray-600">Gesichtsbehandlungen, Peelings, Anti-Aging und viele weitere</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-sm">M</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Medizin</h3>
                            <p className="text-sm text-gray-600">Microneedling, Filler, medizinische Behandlungen und viele weitere</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-sm">B</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Beauty</h3>
                            <p className="text-sm text-gray-600">Permanent Makeup, Wimpern, Augenbrauen und viele weitere</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-sm">H</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Haar</h3>
                            <p className="text-sm text-gray-600">Haarverlängerung, Haartransplantation und viele weitere</p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-white font-bold text-sm">N</span>
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Nägel</h3>
                            <p className="text-sm text-gray-600">Nageldesign, Nagelmodellage, Pflege und viele weitere</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Bereit für professionelle Formulare?
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Teste alle Formular-Features 14 Tage kostenlos und erstelle rechtssichere Formulare in Minuten.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                        >
                            14 Tage gratis testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <Link
                            href="/"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
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
