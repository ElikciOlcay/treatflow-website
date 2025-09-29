import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "Datenschutzerklärung - Treatflow DSGVO konform",
    description: "Datenschutzerklärung und DSGVO-konforme Informationen zur Datenverarbeitung bei Treatflow. Ihre Rechte, Cookies, Datenerhebung und Kontaktmöglichkeiten.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function Datenschutz() {
    return (
        <>
            <Navigation />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-white py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Datenschutzerklärung
                            </h1>
                            <p className="text-xl text-gray-600">
                                Deine Daten sind bei uns sicher. Hier erfährst du, wie wir mit deinen persönlichen Informationen umgehen.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12 space-y-8">

                            {/* 1. Verantwortliche Stelle */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Verantwortliche Stelle</h2>
                                <div className="text-gray-700 leading-relaxed">
                                    <p className="mb-4">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p><strong>Treatflow</strong></p>
                                        <p>Gökce Elikci</p>
                                        <p>Bahnhofstrasse 17</p>
                                        <p>5500 Bischofshofen, Österreich</p>
                                        <p className="mt-2">E-Mail: <a href="mailto:hello@treatflow.io" className="text-indigo-600 hover:text-indigo-800">hello@treatflow.io</a></p>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Datenerfassung */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Welche Daten erfassen wir?</h2>
                                <div className="text-gray-700 leading-relaxed space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatisch erfasste Daten</h3>
                                        <p>Beim Besuch unserer Website werden automatisch folgende Informationen erfasst:</p>
                                        <ul className="list-disc list-inside mt-2 space-y-1">
                                            <li>IP-Adresse</li>
                                            <li>Datum und Uhrzeit des Zugriffs</li>
                                            <li>Browsertyp und -version</li>
                                            <li>Betriebssystem</li>
                                            <li>Referrer URL</li>
                                            <li>Übertragene Datenmenge</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Daten bei Kontaktaufnahme</h3>
                                        <p>Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, speichern wir:</p>
                                        <ul className="list-disc list-inside mt-2 space-y-1">
                                            <li>Name</li>
                                            <li>E-Mail-Adresse</li>
                                            <li>Nachrichteninhalt</li>
                                            <li>Zeitpunkt der Kontaktaufnahme</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Daten bei der Anmeldung</h3>
                                        <p>Bei der Registrierung für Treatflow erfassen wir:</p>
                                        <ul className="list-disc list-inside mt-2 space-y-1">
                                            <li>Name und Vorname</li>
                                            <li>E-Mail-Adresse</li>
                                            <li>Studio-Informationen</li>
                                            <li>Gewählter Tarif</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Zweck der Datenverarbeitung */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Zweck der Datenverarbeitung</h2>
                                <div className="text-gray-700 leading-relaxed">
                                    <p className="mb-4">Wir verwenden Ihre Daten für folgende Zwecke:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Bereitstellung und Verbesserung unserer Website und Services</li>
                                        <li>Bearbeitung von Anfragen und Kundenservice</li>
                                        <li>Durchführung von Verträgen</li>
                                        <li>Technische Administration</li>
                                        <li>Sicherstellung der IT-Sicherheit</li>
                                        <li>Einhaltung rechtlicher Verpflichtungen</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 4. Rechtsgrundlage */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Rechtsgrundlage</h2>
                                <div className="text-gray-700 leading-relaxed">
                                    <p className="mb-4">Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li><strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung</li>
                                        <li><strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Vertragserfüllung</li>
                                        <li><strong>Art. 6 Abs. 1 lit. c DSGVO:</strong> Rechtliche Verpflichtung</li>
                                        <li><strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigtes Interesse</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 5. Datenspeicherung */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Datenspeicherung und -löschung</h2>
                                <div className="text-gray-700 leading-relaxed space-y-4">
                                    <p>Ihre Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li><strong>Website-Logs:</strong> 30 Tage</li>
                                        <li><strong>Kontaktanfragen:</strong> 2 Jahre nach Bearbeitung</li>
                                        <li><strong>Kundendaten:</strong> Bis zur Kündigung des Vertrags + gesetzliche Aufbewahrungsfristen</li>
                                        <li><strong>Rechnungsdaten:</strong> 7 Jahre (steuerrechtliche Aufbewahrungspflicht)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 6. Datensicherheit */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Datensicherheit</h2>
                                <div className="text-gray-700 leading-relaxed">
                                    <p className="mb-4">Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten zu schützen:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>SSL/TLS-Verschlüsselung für alle Datenübertragungen</li>
                                        <li>Sichere Server in zertifizierten Rechenzentren</li>
                                        <li>Regelmäßige Sicherheitsupdates</li>
                                        <li>Zugriffsbeschränkungen und Authentifizierung</li>
                                        <li>Regelmäßige Backups</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 7. Ihre Rechte */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Ihre Rechte</h2>
                                <div className="text-gray-700 leading-relaxed">
                                    <p className="mb-4">Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li><strong>Auskunftsrecht:</strong> Sie können Auskunft über die von uns verarbeiteten Daten verlangen</li>
                                        <li><strong>Berichtigungsrecht:</strong> Sie können die Korrektur unrichtiger Daten verlangen</li>
                                        <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen</li>
                                        <li><strong>Einschränkungsrecht:</strong> Sie können die Einschränkung der Verarbeitung verlangen</li>
                                        <li><strong>Datenübertragbarkeit:</strong> Sie können Ihre Daten in einem strukturierten Format erhalten</li>
                                        <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung widersprechen</li>
                                        <li><strong>Beschwerderecht:</strong> Sie können sich bei einer Aufsichtsbehörde beschweren</li>
                                    </ul>
                                    <p className="mt-4">
                                        Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter:
                                        <a href="mailto:hello@treatflow.io" className="text-indigo-600 hover:text-indigo-800 ml-1">hello@treatflow.io</a>
                                    </p>
                                </div>
                            </div>

                            {/* 8. Cookies */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies</h2>
                                <div className="text-gray-700 leading-relaxed">
                                    <p className="mb-4">
                                        Unsere Website verwendet Cookies, um die Funktionalität zu gewährleisten und die Nutzererfahrung zu verbessern.
                                        Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden.
                                    </p>
                                    <p className="mb-4">Sie können Cookies in Ihren Browsereinstellungen deaktivieren, dies kann jedoch die Funktionalität der Website beeinträchtigen.</p>
                                </div>
                            </div>

                            {/* 9. Drittanbieter */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Drittanbieter-Services</h2>
                                <div className="text-gray-700 leading-relaxed">
                                    <p className="mb-4">Wir nutzen folgende Drittanbieter-Services:</p>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li><strong>HubSpot:</strong> Für Kontaktformulare und CRM (USA, angemessenes Datenschutzniveau)</li>
                                        <li><strong>Hosting-Provider:</strong> Für die Bereitstellung der Website</li>
                                    </ul>
                                    <p className="mt-4">
                                        Diese Anbieter verarbeiten Daten nur in unserem Auftrag und sind vertraglich zur Einhaltung des Datenschutzes verpflichtet.
                                    </p>
                                </div>
                            </div>

                            {/* 10. Änderungen */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Änderungen der Datenschutzerklärung</h2>
                                <div className="text-gray-700 leading-relaxed">
                                    <p>
                                        Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren, um rechtlichen Anforderungen zu entsprechen
                                        oder Änderungen unserer Services abzubilden. Die aktuelle Version finden Sie stets auf dieser Seite.
                                    </p>
                                    <p className="mt-4 text-sm text-gray-600">
                                        <strong>Stand:</strong> September 2025
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

