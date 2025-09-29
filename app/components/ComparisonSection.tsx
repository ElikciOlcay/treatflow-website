import { CheckCircle, X, Zap, Shield } from "lucide-react";

export default function ComparisonSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Shield className="h-4 w-4" />
                        Made in Austria
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Warum Treatflow die beste Wahl
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> für dein Studio</span> ist
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Während andere nur Standard-Lösungen anbieten, haben wir Treatflow speziell für die Beauty-Branche entwickelt.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Treatflow Vorteile */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Treatflow</h3>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                    <strong>Made in Austria</strong> - Entwickelt nach europäischen Standards
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                    <strong>Intelligente Behandlungsdokumentation</strong> - Automatische Notizen und Foto-Management
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                    <strong>KI-Formular-Generator</strong> - Erstelle individuelle Formulare in Sekunden
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                    <strong>Automatischer Formular-Versand</strong> - Kunden erhalten passende Formulare bei Buchung
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                    <strong>NiSV-konform</strong> - Rechtssichere Dokumentation für Kosmetikstudios
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                    <strong>Deutscher Support</strong> - Persönlicher Ansprechpartner auf Deutsch
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                    <strong>Alles aus einer Hand</strong> - Termine, Kunden, Formulare & Shop in einer App
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                    <strong>Transparente Preise</strong> - Keine versteckten Kosten oder Setup-Gebühren
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">
                                    <strong>14 Tage kostenlos</strong> - Ohne Risiko testen, jederzeit kündbar
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Andere Anbieter */}
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-sm">?</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-600">Andere Anbieter</h3>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-500">
                                    Keine spezialisierte Behandlungsdokumentation
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-500">
                                    Formulare müssen manuell erstellt und versendet werden
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-500">
                                    Keine KI-Unterstützung für Formulare
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-500">
                                    Oft nicht NiSV-konform oder rechtsunsicher
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-500">
                                    Support nur auf Englisch oder per E-Mail
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-500">
                                    Mehrere Tools nötig - kompliziert und teuer
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-500">
                                    Versteckte Kosten und teure Setup-Gebühren
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-500">
                                    Lange Vertragslaufzeiten oder komplizierte Kündigung
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <X className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-500">
                                    Keine kostenlose Testphase oder kurze Testzeit
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-indigo-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Überzeuge dich selbst
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Teste Treatflow 14 Tage kostenlos und erlebe den Unterschied zu anderen Anbietern.
                        </p>
                        <a
                            href="https://app.treatflow.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Jetzt kostenlos testen
                            <Zap className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
