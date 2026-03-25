import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, Clock } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Kundenkartei Kosmetik: Digital statt Papier',
  description:
    'Kundenkartei für Kosmetikstudios digital aufbauen: bessere Übersicht, schnellere Abläufe und saubere Dokumentation pro Kundin.',
  keywords: [
    'kundenkartei kosmetik',
    'digitale kundenkartei kosmetik',
    'kundenkartei kosmetikstudio',
    'kundenkartei software',
    'kundendaten kosmetikstudio',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/blog/kundenkartei-kosmetik',
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <article className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zum Blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">Digitalisierung</span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              24. März 2026
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />11 Min. Lesezeit
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Kundenkartei Kosmetik: Digital statt Zettelchaos
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Eine unvollständige Kundenkartei kostet im Alltag Zeit und Qualität. Mit einer digitalen Struktur
            hast du alle Infos zum Termin sofort griffbereit und arbeitest deutlich souveräner.
          </p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2>Welche Daten in jede Kundenkartei gehören</h2>
            <p>
              Neben Basisdaten sollten in einer professionellen Kundenkartei immer Behandlungshistorie, Produkteinsatz,
              Hinweise zu Hautzustand und individuelle Vorlieben enthalten sein. Nur so bleibt jede Behandlung nachvollziehbar.
            </p>
            <p>
              Gute Kundenkarteien enthalten nicht nur Daten, sondern Kontext. Wenn du nachvollziehen kannst, welche Produkte
              bei welcher Hautreaktion funktioniert haben, berätst du präziser und vermeidest Wiederholungsfehler. Genau das
              schafft Vertrauen und erhöht die Wahrscheinlichkeit, dass Kundinnen langfristig bei dir bleiben.
            </p>

            <h2>Empfohlene Struktur für eine digitale Kundenkartei</h2>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-6">
              <ul className="space-y-3">
                {[
                  'Stammdaten: Kontakt, Geburtsdatum, Kommunikationskanal',
                  'Anamnese: Hauttyp, Allergien, Kontraindikationen',
                  'Historie: Datum, Leistung, Produkte, Beobachtungen',
                  'Bilddokumentation: Vorher/Nachher mit Datum und Zuordnung',
                  'Nachsorge: Empfehlungen, Verträglichkeit, Wiedervorlage',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2>3 häufige Fehler bei der Kundenverwaltung</h2>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 my-6">
              <ul className="space-y-3">
                {[
                  'Daten liegen in mehreren Tools und sind nicht synchron',
                  'Notizen sind uneinheitlich und schwer auswertbar',
                  'Verläufe fehlen oder sind nicht vollständig dokumentiert',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2>So führst du dein Team auf einheitliche Einträge</h2>
            <h3>1. Eintragsvorlagen definieren</h3>
            <p>
              Lege verbindliche Felder und kurze Schreibregeln fest. So sehen Einträge bei allen Mitarbeitenden gleich aus
              und sind später besser auswertbar.
            </p>
            <h3>2. Pflichtpunkte je Termin festlegen</h3>
            <p>
              Definiere, welche Informationen nach jeder Behandlung dokumentiert werden müssen. Wenn Pflichtpunkte klar sind,
              sinkt die Gefahr von Lücken erheblich.
            </p>
            <h3>3. Regelmäßig Qualität prüfen</h3>
            <p>
              Nimm dir einmal pro Woche 20 Minuten für einen Kartei-Check. So erkennst du früh, ob Informationen fehlen oder
              unklare Formulierungen auftauchen.
            </p>

            <h2>Praxisbeispiel: Mehr Wiederkehr durch bessere Kartei</h2>
            <p>
              Ein Studio hat seine Kartei von freien Textnotizen auf eine klare Struktur mit Pflichtfeldern umgestellt.
              Nach kurzer Eingewöhnung wurden Empfehlungen konsistenter und Nachbehandlungen zielgenauer geplant. Kundinnen
              fühlten sich individueller betreut, weil bei jedem Termin relevante Details sofort verfügbar waren.
            </p>

            <h2>Häufige Fragen zur Kundenkartei im Kosmetikstudio</h2>
            <h3>Wie detailliert müssen Notizen sein?</h3>
            <p>
              So detailliert wie nötig, so kurz wie möglich. Fokus auf wiederverwendbare Informationen: Hautreaktion,
              Produkteinsatz, Ergebnis und klare Empfehlung für den nächsten Termin.
            </p>
            <h3>Was tun bei alten Papierkarteien?</h3>
            <p>
              Starte pragmatisch: aktive Kundinnen zuerst digitalisieren, Altbestände nach und nach übernehmen. So bleibt
              der Aufwand überschaubar und der operative Betrieb läuft weiter.
            </p>
            <h3>Warum ist eine zentrale Kartei besser als mehrere Tools?</h3>
            <p>
              Eine zentrale Kartei verhindert Medienbrüche. Du musst nicht in verschiedenen Systemen suchen, was Zeit spart
              und Fehler durch unvollständige Informationen reduziert.
            </p>

            <h2>Fazit</h2>
            <p>
              Eine digitale Kundenkartei macht den Unterschied zwischen reaktiver Verwaltung und professionellem Studio-Alltag.
              Du arbeitest schneller, persönlicher und mit deutlich mehr Sicherheit bei jedem Termin.
            </p>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Passende Seiten zum Thema</h3>
            <div className="flex flex-wrap gap-4 text-sm mb-6">
              <Link href="/kundenkartei-software" className="text-indigo-700 hover:text-indigo-800 underline underline-offset-4">
                Kundenkartei Software
              </Link>
              <Link href="/kundenkartei-kosmetikstudio" className="text-indigo-700 hover:text-indigo-800 underline underline-offset-4">
                Kundenkartei Kosmetikstudio
              </Link>
              <Link href="/schoenheitssalon-software" className="text-indigo-700 hover:text-indigo-800 underline underline-offset-4">
                Schönheitssalon Software
              </Link>
            </div>
            <a
              href="https://app.treatflow.io/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              14 Tage kostenlos testen
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
