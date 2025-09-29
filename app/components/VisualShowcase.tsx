// import { Camera } from "lucide-react"; // Removed unused import

export default function VisualShowcase() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        So einfach funktioniert Treatflow
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Sieh selbst, wie übersichtlich und benutzerfreundlich dein neuer Studio-Alltag wird.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Kundenprofile Mockup */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Alle Kundendaten perfekt organisiert
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                            Skalierbare Kundendatenbank mit Import-Funktion. Alle wichtigen Informationen
                            zu deinen Kunden sind sicher und schnell auffindbar.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                                Unbegrenzte Kundenzahl
                            </li>
                            <li className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                                Import bestehender Daten
                            </li>
                            <li className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                                Schnelle Suchfunktion
                            </li>
                        </ul>
                    </div>

                    {/* Kundenverwaltung Screenshot */}
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/images/mockups/kundenverwaltung-overview.png"
                            alt="Treatflow Kundenverwaltung - Übersichtliche Darstellung aller Kunden mit Suchfunktion"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Formular Generator Sektion */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Formulare Marketplace Screenshot */}
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/images/mockups/formulare-marketplace.png"
                            alt="Treatflow Formulare Marketplace - Professionelle Formulare für alle Beauty-Behandlungen"
                            className="w-full h-auto"
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Professionelle Formulare für alle Behandlungen
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                            Umfangreicher Formular-Marketplace für alle Beauty-Behandlungen.
                            KI-Generator oder Drag & Drop Editor für individuelle Anpassungen.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                Fertige Formulare im Marketplace
                            </li>
                            <li className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                KI-Formular-Generator
                            </li>
                            <li className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                Drag & Drop Editor für alle Feldtypen
                            </li>
                            <li className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                Kategorien für alle Behandlungsarten
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Kalender Mockup */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Dein Terminkalender immer im Blick
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                            Behalte den Überblick über alle Termine. Sieh sofort, wann du frei bist
                            und welche Behandlungen anstehen.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                                Online-Buchungen automatisch eintragen
                            </li>
                            <li className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                                Keine Doppelbuchungen möglich
                            </li>
                            <li className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                                Behandlungszeiten automatisch berechnen
                            </li>
                        </ul>
                    </div>

                    {/* Kalender Screenshot */}
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/images/mockups/kalender-overview.png"
                            alt="Treatflow Terminkalender - Übersichtliche Terminverwaltung mit Online-Buchungen"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
