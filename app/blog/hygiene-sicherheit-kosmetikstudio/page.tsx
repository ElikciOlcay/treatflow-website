'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Shield, AlertTriangle, CheckCircle, Droplets } from 'lucide-react';

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <article className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="mb-8">
                        <Link href="/blog" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                            <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Zurück zum Blog
                        </Link>
                    </nav>

                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                                Recht & Compliance
                            </span>
                            <div className="flex items-center text-gray-500">
                                <Calendar className="h-4 w-4 mr-2" />
                                28. November 2024
                            </div>
                            <div className="flex items-center text-gray-500">
                                <Clock className="h-4 w-4 mr-2" />
                                12 min Lesezeit
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Hygiene und Sicherheit im Kosmetikstudio: Rechtssicher und professionell
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Hygieneverordnungen, Desinfektionsvorschriften und Sicherheitsstandards -
                            alles was du für einen rechtssicheren Studiobetrieb wissen musst.
                        </p>
                    </div>

                    <div className="mb-12">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/blog/hygiene-sicherheit.jpg"
                                alt="Hygiene und Sicherheit im Kosmetikstudio - Professionelle Desinfektion und Sauberkeit"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                            <h3 className="text-lg font-semibold text-red-900 mb-2 flex items-center">
                                <Shield className="h-5 w-5 mr-2" />
                                Warum Hygiene überlebenswichtig ist
                            </h3>
                            <p className="text-red-800 mb-0">
                                <strong>Ein einziger Hygieneverstoß kann dein Studio ruinieren.</strong>
                                Hautinfektionen, Allergien oder gar Hepatitis-Übertragungen führen nicht nur zu Schadensersatzforderungen,
                                sondern auch zum Vertrauensverlust und Geschäftsschließung.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Rechtliche Grundlagen und Vorschriften</h2>

                        <div className="space-y-6 mb-8">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h4 className="font-semibold text-blue-900 mb-4">📋 Wichtige Gesetze und Verordnungen:</h4>
                                <div className="space-y-3">
                                    <div>
                                        <h5 className="font-medium text-blue-900 mb-1">Infektionsschutzgesetz (IfSG):</h5>
                                        <p className="text-blue-800 text-sm">Grundlage für alle Hygienemaßnahmen in kosmetischen Betrieben</p>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-blue-900 mb-1">Kosmetik-Verordnung (KosmetikV):</h5>
                                        <p className="text-blue-800 text-sm">Regelt Herstellung, Kennzeichnung und Verkauf von Kosmetika</p>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-blue-900 mb-1">Arbeitsschutzgesetz (ArbSchG):</h5>
                                        <p className="text-blue-800 text-sm">Schutz der Mitarbeiter vor Gesundheitsgefahren</p>
                                    </div>
                                    <div>
                                        <h5 className="font-medium text-blue-900 mb-1">TRBA 250:</h5>
                                        <p className="text-blue-800 text-sm">Technische Regel für biologische Arbeitsstoffe im Gesundheitswesen</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Hygienemaßnahmen im Detail</h2>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Händehygiene - Die Basis von allem</h3>

                        <div className="bg-green-50 p-6 rounded-lg mb-6">
                            <h4 className="font-semibold text-green-900 mb-3">🧼 Händedesinfektion Schritt für Schritt:</h4>
                            <ol className="text-green-800 text-sm space-y-2">
                                <li><strong>1.</strong> Hände mit Seife waschen (30 Sekunden)</li>
                                <li><strong>2.</strong> Gründlich mit Einmalhandtüchern abtrocknen</li>
                                <li><strong>3.</strong> Desinfektionsmittel auftragen (3-5 ml)</li>
                                <li><strong>4.</strong> 30 Sekunden einwirken lassen</li>
                                <li><strong>5.</strong> Erst nach dem Trocknen mit der Behandlung beginnen</li>
                            </ol>
                            <div className="mt-4 p-3 bg-green-100 rounded">
                                <p className="text-green-900 text-sm font-medium">
                                    ⏰ Wann desinfizieren? Vor jeder Kundin, nach Toilettengang,
                                    nach Kontakt mit kontaminierten Oberflächen, vor Pausen
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Instrumentenaufbereitung</h3>

                        <div className="space-y-6 mb-8">
                            <div className="border border-gray-200 rounded-lg p-6">
                                <h4 className="text-gray-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                                    Vorreinigung
                                </h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Sofort nach Gebrauch grobe Verschmutzungen entfernen</li>
                                    <li>• Instrumente in Desinfektionslösung einlegen</li>
                                    <li>• Niemals trocken liegen lassen!</li>
                                </ul>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-6">
                                <h4 className="text-gray-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                                    Reinigung
                                </h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Mechanische Reinigung mit Bürste und Reinigungsmittel</li>
                                    <li>• Ultraschallbad für schwer erreichbare Stellen</li>
                                    <li>• Gründliches Abspülen mit sterilem Wasser</li>
                                </ul>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-6">
                                <h4 className="text-gray-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                                    Desinfektion
                                </h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Instrumentendesinfektion mit VAH-gelisteten Mitteln</li>
                                    <li>• Einwirkzeit genau beachten (meist 15-60 Minuten)</li>
                                    <li>• Dokumentation der Desinfektionszeiten</li>
                                </ul>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-6">
                                <h4 className="text-gray-800 font-semibold mb-4 flex items-center">
                                    <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                                    Sterilisation (bei invasiven Behandlungen)
                                </h4>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Dampfsterilisation bei 134°C für 5 Minuten</li>
                                    <li>• Heißluftsterilisation bei 180°C für 30 Minuten</li>
                                    <li>• Sterile Lagerung bis zum Gebrauch</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Flächendesinfektion</h3>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <h5 className="font-medium text-yellow-900 mb-2">🧽 Täglich zu desinfizieren:</h5>
                                <ul className="text-yellow-800 text-sm space-y-1">
                                    <li>• Behandlungsliegen nach jeder Kundin</li>
                                    <li>• Arbeitsflächen und Rollwagen</li>
                                    <li>• Türklinken und Lichtschalter</li>
                                    <li>• Waschbecken und Armaturen</li>
                                    <li>• Geräteoberflächen</li>
                                </ul>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <h5 className="font-medium text-orange-900 mb-2">🧹 Wöchentlich zu desinfizieren:</h5>
                                <ul className="text-orange-800 text-sm space-y-1">
                                    <li>• Böden mit Desinfektionsreiniger</li>
                                    <li>• Schränke innen und außen</li>
                                    <li>• Stühle und Wartebereich</li>
                                    <li>• Beleuchtung und Lampen</li>
                                    <li>• Klimaanlage-Filter</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Besondere Hygieneanforderungen</h2>

                        <div className="space-y-6 mb-8">
                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    Invasive Behandlungen (Microneedling, Permanent Make-up)
                                </h4>
                                <ul className="text-red-800 text-sm space-y-1">
                                    <li>• Sterile Einmalinstrumente verwenden</li>
                                    <li>• Behandlungsbereich wie OP-Bereich vorbereiten</li>
                                    <li>• Sterile Handschuhe und Mundschutz</li>
                                    <li>• Dokumentation jeder Behandlung</li>
                                    <li>• Nachsorge-Anweisungen schriftlich geben</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                                <h4 className="text-purple-800 font-semibold mb-2 flex items-center">
                                    <Droplets className="h-5 w-5 mr-2" />
                                    Wimpernverlängerung
                                </h4>
                                <ul className="text-purple-800 text-sm space-y-1">
                                    <li>• Augenpads und Klebestrips nur einmal verwenden</li>
                                    <li>• Pinzetten nach jeder Kundin desinfizieren</li>
                                    <li>• Kleber-Tropfen auf Einmalunterlage</li>
                                    <li>• Jade-Stein oder Glasplatte nach Gebrauch entsorgen</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Dokumentation und Kontrollen</h2>

                        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-indigo-900 mb-4">📋 Pflichtdokumentation:</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h5 className="font-medium text-indigo-900 mb-2">Täglich:</h5>
                                    <ul className="text-indigo-800 text-sm space-y-1">
                                        <li>• Desinfektionsmaßnahmen</li>
                                        <li>• Temperaturkontrollen</li>
                                        <li>• Sichtprüfung der Geräte</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-medium text-indigo-900 mb-2">Regelmäßig:</h5>
                                    <ul className="text-indigo-800 text-sm space-y-1">
                                        <li>• Wartung der Sterilisatoren</li>
                                        <li>• Schulungsnachweise</li>
                                        <li>• Hygieneplan-Updates</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Mitarbeiterschulung und -schutz</h2>

                        <div className="space-y-4 mb-8">
                            <div className="border border-gray-200 rounded-lg p-4">
                                <h5 className="font-medium text-gray-900 mb-2">🎓 Pflichtschulungen</h5>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Hygieneschulung vor Arbeitsbeginn</li>
                                    <li>• Jährliche Auffrischungsschulungen</li>
                                    <li>• Schulung bei neuen Behandlungsmethoden</li>
                                    <li>• Dokumentation aller Schulungen</li>
                                </ul>
                            </div>

                            <div className="border border-gray-200 rounded-lg p-4">
                                <h5 className="font-medium text-gray-900 mb-2">🦺 Arbeitsschutzmaßnahmen</h5>
                                <ul className="text-gray-700 text-sm space-y-1">
                                    <li>• Bereitstellung von Schutzausrüstung</li>
                                    <li>• Arbeitsmedizinische Vorsorgeuntersuchungen</li>
                                    <li>• Hepatitis B-Impfung anbieten</li>
                                    <li>• Erste-Hilfe-Ausrüstung vorhalten</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Häufige Hygienefehler vermeiden</h2>

                        <div className="space-y-6 mb-8">
                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    Fehler #1: Unzureichende Instrumentenaufbereitung
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Instrumente nur oberflächlich gereinigt oder falsche Desinfektionsmittel verwendet.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Standardisierte Aufbereitungsprozesse etablieren und dokumentieren.
                                </p>
                            </div>

                            <div className="border border-red-200 rounded-lg p-6">
                                <h4 className="text-red-800 font-semibold mb-2 flex items-center">
                                    <AlertTriangle className="h-5 w-5 mr-2" />
                                    Fehler #2: Mangelhafte Dokumentation
                                </h4>
                                <p className="text-gray-700 mb-2">
                                    <strong>Problem:</strong> Keine oder unvollständige Aufzeichnungen über Hygienemaßnahmen.
                                </p>
                                <p className="text-green-700">
                                    <strong>Lösung:</strong> Digitale Checklisten und automatische Erinnerungen nutzen.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Digitale Hygienedokumentation</h2>

                        <div className="bg-purple-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-purple-900 mb-4">🚀 Hygiene-Management mit Treatflow:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Formular-Generator für Hygiene-Checklisten</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Behandlungsdokumentation mit Hygiene-Protokollen</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Digitale Kundenkartei für lückenlose Dokumentation</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Online-Terminkalender mit Hygiene-Übersicht</span>
                                </li>
                                <li className="flex items-center text-sm">
                                    <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
                                    <span className="text-purple-800">Rechtssichere Archivierung aller Nachweise</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Fazit: Hygiene ist nicht verhandelbar</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Hygiene und Sicherheit sind die Grundpfeiler eines jeden seriösen Kosmetikstudios.
                            Nur wer hier keine Kompromisse eingeht, kann langfristig erfolgreich sein.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Investiere in die richtige Ausstattung, schule dein Team regelmäßig und dokumentiere
                            alles lückenlos. Deine Kundinnen und dein Geschäft werden es dir danken.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">🛡️ Hygiene digital verwalten!</h3>
                            <p className="mb-6 text-indigo-100">
                                Mit Treatflow hast du alle Hygienemaßnahmen im Blick und dokumentierst
                                rechtssicher - automatisch und ohne Papierkram.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://app.treatflow.io/"
                                    target="_blank"
                                    className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                                >
                                    14 Tage kostenlos testen
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-8 mb-12">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">War dieser Leitfaden hilfreich?</h3>
                                <p className="text-gray-600">Teile ihn mit anderen Studio-Betreibern!</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => {
                                        const url = window.location.href;
                                        const text = 'Hygiene und Sicherheit im Kosmetikstudio: Rechtssicher und professionell - Treatflow Blog';
                                        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
                                    }}
                                    className="inline-flex items-center bg-blue-500 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    Twitter
                                </button>
                                <button
                                    onClick={() => {
                                        const url = window.location.href;
                                        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                                    }}
                                    className="inline-flex items-center bg-blue-700 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-800 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    LinkedIn
                                </button>
                                <button
                                    onClick={() => {
                                        const url = window.location.href;
                                        const text = 'Hygiene und Sicherheit im Kosmetikstudio: Rechtssicher und professionell';
                                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
                                    }}
                                    className="inline-flex items-center bg-blue-600 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    Facebook
                                </button>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert('Link in die Zwischenablage kopiert!');
                                    }}
                                    className="inline-flex items-center bg-gray-600 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-gray-700 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    Kopieren
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}

