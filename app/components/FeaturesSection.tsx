import {
    CalendarDays,
    Users,
    Camera,
    FileText,
    Shield,
    CheckCircle,
    Sparkles,
    Zap,
    ClipboardList,
    ArrowRight,
    Star,
    ShoppingCart
} from "lucide-react";
import Link from 'next/link';

export default function FeaturesSection() {
    return (
        <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm">
                        <Sparkles className="h-4 w-4" />
                        Alles in einer App
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Alles was du für deinen
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Studio-Erfolg</span> brauchst
                    </h2>
                    <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Schluss mit Zettelwirtschaft und Doppelarbeit. Treatflow bringt Ordnung
                        in deinen Arbeitsalltag und lässt dich entspannter arbeiten.
                    </p>
                </div>

                {/* Main Features - 3 Column Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {/* Online Buchungen */}
                    <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <CalendarDays className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Online-Buchungskalender
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Professioneller Kalender mit Wochen-, Tages- und Monatsansicht.
                                Deine Kunden buchen direkt über deinen Buchungslink.
                            </p>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Buchungslink für Kunden</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Mehrere Kalenderansichten</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">15-Min Zeitraster</span>
                                </div>
                            </div>
                            <Link
                                href="/terminkalender"
                                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium group"
                            >
                                Mehr erfahren
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Formulare */}
                    <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative">
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <ClipboardList className="h-8 w-8 text-white" />
                                </div>
                                <div className="ml-3 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
                                    <Zap className="h-3 w-3 inline mr-1" />
                                    KI
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Smarte Formulare
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Professionelle Formulare für alle Behandlungen. Drag & Drop Editor oder
                                KI-Generator für individuelle Anpassungen.
                            </p>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Fertige Vorlagen</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">KI-Formular-Generator</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Drag & Drop Editor</span>
                                </div>
                            </div>
                            <Link
                                href="/formulare"
                                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group"
                            >
                                Mehr erfahren
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Behandlungsdokumentation */}
                    <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative">
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <FileText className="h-8 w-8 text-white" />
                                </div>
                                <div className="ml-3 bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
                                    <Zap className="h-3 w-3 inline mr-1" />
                                    KI
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Dokumentation
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Halte jede Behandlung fest - mit Fotos, Notizen und allen wichtigen Details.
                                Unsere KI schreibt automatisch mit.
                            </p>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Automatische Notizen</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Foto-Management</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Rechtssicher</span>
                                </div>
                            </div>
                            <Link
                                href="/behandlungsdokumentation"
                                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group"
                            >
                                Mehr erfahren
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Secondary Features - Clean 4 Column Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {/* Kundenverwaltung */}
                    <Link href="/kundenverwaltung" className="bg-white p-6 rounded-xl border border-gray-100 hover:border-green-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg block group">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Users className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Kundenverwaltung</h4>
                        <p className="text-sm text-gray-600 mb-3">Skalierbare Kundendatenbank mit Import-Funktion</p>
                        <div className="text-green-600 text-sm font-medium group-hover:text-green-700">Unbegrenzt erweiterbar →</div>
                    </Link>

                    {/* Foto-Management */}
                    <Link href="/behandlungsdokumentation" className="bg-white p-6 rounded-xl border border-gray-100 hover:border-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg block group">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Camera className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Foto-Management</h4>
                        <p className="text-sm text-gray-600 mb-3">Vorher-Nachher Fotos sicher speichern</p>
                        <div className="text-pink-600 text-sm font-medium group-hover:text-pink-700">Fortschritte zeigen →</div>
                    </Link>

                    {/* Sicherheit */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Shield className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">100% Sicher</h4>
                        <p className="text-sm text-gray-600 mb-3">DSGVO-konform und verschlüsselt</p>
                        <div className="text-emerald-600 text-sm font-medium group-hover:text-emerald-700">Datenschutz garantiert →</div>
                    </div>

                    {/* Shop Integration */}
                    <Link href="/shop" className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg block group">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <ShoppingCart className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2">Integrierter Shop</h4>
                        <p className="text-sm text-gray-600 mb-3">Verkaufe Produkte direkt an deine Kunden</p>
                        <div className="text-blue-600 text-sm font-medium group-hover:text-blue-700">Zusatzumsatz generieren →</div>
                    </Link>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 border border-indigo-100/50 max-w-4xl mx-auto relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5"></div>
                        <div className="relative">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm">
                                <Star className="h-4 w-4 fill-current" />
                                14 Tage gratis testen
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Bereit für mehr Effizienz in deinem Studio?
                            </h3>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                                Teste alle Features 14 Tage kostenlos - ohne Risiko, ohne Vertragsbindung.
                            </p>
                            <a
                                href="https://app.treatflow.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transform hover:-translate-y-1 inline-flex items-center"
                            >
                                Jetzt kostenlos testen
                                <ArrowRight className="ml-3 h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}