import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen von Treatflow für die Nutzung der Studio-Software. Vertrag, Preise, Laufzeit, Haftung und Kündigung.",
  alternates: {
    canonical: "https://www.treatflow.io/agb",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AGB | Treatflow",
    description:
      "Allgemeine Geschäftsbedingungen von Treatflow für die Nutzung der Studio-Software.",
    url: "https://www.treatflow.io/agb",
    locale: "de_DE",
    type: "website",
    siteName: "Treatflow",
  },
};

export default function AgbPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-indigo-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Allgemeine Geschäftsbedingungen
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Gültig für die Nutzung der Treatflow-Software und zugehöriger Services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 space-y-12 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Geltungsbereich</h2>
              <p className="mb-3">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
                Treatflow (Olcay Elikci, Bahnhofstrasse 17, 5500 Bischofshofen, Österreich;
                E-Mail:{" "}
                <a href="mailto:hello@treatflow.io" className="text-indigo-600 hover:text-indigo-700">
                  hello@treatflow.io
                </a>
                ) und dem Kunden über die Nutzung der Treatflow-Software und zugehöriger
                Online-Dienste.
              </p>
              <p>
                Abweichende Bedingungen des Kunden gelten nur, wenn Treatflow ihnen ausdrücklich
                schriftlich zugestimmt hat.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Vertragsgegenstand</h2>
              <p className="mb-3">
                Treatflow stellt eine cloudbasierte Software zur Studioverwaltung bereit
                (unter anderem Terminkalender, Online-Buchung, Kundenkartei, Formulare,
                Behandlungsdokumentation und optionale Kassensoftware). Der genaue Funktionsumfang
                ergibt sich aus dem jeweils gebuchten Tarif und der aktuellen Produktbeschreibung
                auf{" "}
                <Link href="/preise" className="text-indigo-600 hover:text-indigo-700">
                  treatflow.io/preise
                </Link>
                .
              </p>
              <p>
                Treatflow ist berechtigt, die Software weiterzuentwickeln und Funktionen
                anzupassen, soweit der vertragliche Kernnutzen erhalten bleibt.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Vertragsschluss und Testphase</h2>
              <p className="mb-3">
                Der Vertrag kommt durch Registrierung und Freischaltung des Accounts bzw. durch
                Annahme eines Angebots von Treatflow zustande. Sofern angeboten, kann eine
                kostenlose Testphase genutzt werden. Mit Ablauf der Testphase oder mit Beginn
                eines kostenpflichtigen Tarifs gelten die vereinbarten Preise.
              </p>
              <p>
                Der Kunde versichert, wahrheitsgemäße Angaben zu machen und berechtigt zu sein,
                für das Studio Verträge abzuschließen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Leistungen und Verfügbarkeit</h2>
              <p className="mb-3">
                Treatflow bemüht sich um eine hohe Verfügbarkeit der Software. Wartungsfenster,
                Sicherheitsupdates oder Störungen Dritter (z. B. Internet, Hosting, Zahlungs- oder
                SMS-Anbieter) können die Erreichbarkeit vorübergehend einschränken.
              </p>
              <p>
                Support erfolgt per E-Mail und den im Produkt ausgewiesenen Kanälen während der
                üblichen Geschäftszeiten, soweit nicht anders vereinbart.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Preise und Zahlung</h2>
              <p className="mb-3">
                Es gelten die zum Zeitpunkt der Bestellung ausgewiesenen Preise. Alle Preise
                verstehen sich zuzüglich der gesetzlichen Umsatzsteuer, sofern nicht anders
                angegeben. Die Abrechnung erfolgt in der Regel monatlich oder jährlich im Voraus
                über den vereinbarten Zahlungsweg.
              </p>
              <p>
                Bei Zahlungsverzug kann Treatflow den Zugang nach Mahnung vorübergehend sperren.
                Bereits entstandene Forderungen bleiben bestehen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Laufzeit und Kündigung</h2>
              <p className="mb-3">
                Sofern nicht anders vereinbart, läuft das Abonnement auf unbestimmte Zeit und kann
                zum Ende der jeweiligen Abrechnungsperiode gekündigt werden. Die Kündigung kann
                über die Account-Einstellungen oder per E-Mail an{" "}
                <a href="mailto:hello@treatflow.io" className="text-indigo-600 hover:text-indigo-700">
                  hello@treatflow.io
                </a>{" "}
                erklärt werden.
              </p>
              <p>
                Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                Nach Vertragsende kann der Zugang gesperrt und Daten gemäß der{" "}
                <Link href="/datenschutz" className="text-indigo-600 hover:text-indigo-700">
                  Datenschutzerklärung
                </Link>{" "}
                und gesetzlicher Aufbewahrungspflichten gelöscht oder anonymisiert werden. Der
                Kunde ist für rechtzeitige Exporte selbst verantwortlich, soweit im Produkt
                vorgesehen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Pflichten des Kunden</h2>
              <p className="mb-3">
                Der Kunde ist für Inhalte, Kundendaten und die rechtmäßige Nutzung der Software in
                seinem Studio verantwortlich (einschließlich Einwilligungen, Aufklärungspflichten
                und branchenspezifischer Vorgaben wie NiSV, soweit anwendbar).
              </p>
              <p>
                Zugangsdaten sind vertraulich zu behandeln. Die Software darf nicht missbräuchlich
                genutzt, Dritten ohne Zustimmung weiterverkauft oder technisch umgangen werden.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Datenschutz</h2>
              <p>
                Details zur Verarbeitung personenbezogener Daten ergeben sich aus der{" "}
                <Link href="/datenschutz" className="text-indigo-600 hover:text-indigo-700">
                  Datenschutzerklärung
                </Link>
                . Soweit Treatflow personenbezogene Daten im Auftrag des Kunden verarbeitet, gelten
                zusätzlich die vereinbarten Regelungen zur Auftragsverarbeitung.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Haftung</h2>
              <p className="mb-3">
                Treatflow haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für
                Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.
              </p>
              <p>
                Bei leichter Fahrlässigkeit haftet Treatflow nur bei Verletzung wesentlicher
                Vertragspflichten und begrenzt auf den vorhersehbaren, vertragstypischen Schaden.
                Die Haftung für mittelbare Schäden und entgangenen Gewinn ist – soweit gesetzlich
                zulässig – ausgeschlossen. Zwingende gesetzliche Haftungstatbestände bleiben
                unberührt.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Schlussbestimmungen</h2>
              <p className="mb-3">
                Es gilt österreichisches Recht unter Ausschluss der Verweisungsnormen und des
                UN-Kaufrechts. Gerichtsstand ist – soweit gesetzlich zulässig – der Sitz von
                Treatflow.
              </p>
              <p className="mb-3">
                Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen
                Bestimmungen unberührt. Treatflow kann diese AGB mit angemessener Ankündigung
                anpassen; widerspricht der Kunde nicht und nutzt den Dienst weiter, gelten die
                geänderten AGB als akzeptiert, soweit gesetzlich zulässig.
              </p>
              <p>
                Anbieterkennzeichnung: siehe{" "}
                <Link href="/impressum" className="text-indigo-600 hover:text-indigo-700">
                  Impressum
                </Link>
                .
              </p>
            </div>

            <p className="text-sm text-gray-500 pt-4 border-t border-gray-100">
              Stand: August 2026
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
