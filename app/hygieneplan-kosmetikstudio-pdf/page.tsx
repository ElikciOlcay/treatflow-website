import { ArrowRight, CheckCircle, FileText, GraduationCap, MapPin, Scissors, Shield } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Hygieneplan Kosmetikstudio & Nagelstudio PDF",
  description:
    "Hygieneplan für Kosmetikstudio und Nagelstudio als PDF-Vorlage. Inhalte, Bundesland-Vorgaben (NRW, Bayern) und digitale Dokumentation.",
  keywords: [
    "hygieneplan kosmetikstudio pdf",
    "hygieneplan kosmetikstudio",
    "hygieneplan nagelstudio",
    "hygieneplan für nagelstudio",
    "hygieneplan kosmetikstudio nrw",
    "hygieneplan kosmetikstudio bayern",
    "hygieneverordnung kosmetik",
    "hygienevorschriften kosmetikstudio",
    "hygieneplan kosmetik",
    "rahmenhygieneplan kosmetik",
    "hygieneschulung kosmetik",
    "reinigungs und desinfektionsplan kosmetik",
    "instrumentendesinfektion nagelstudio",
  ],
  alternates: {
    canonical: "https://www.treatflow.io/hygieneplan-kosmetikstudio-pdf",
  },
};

const faqData = [
  {
    question: "Ist ein Hygieneplan im Kosmetikstudio Pflicht?",
    answer:
      "Ja, ein Hygieneplan ist in allen Bundesländern für Kosmetikstudios verpflichtend. Die genauen Anforderungen richten sich nach der jeweiligen Hygieneverordnung des Bundeslandes. Das zuständige Gesundheitsamt kann bei Kontrollen die Vorlage des Hygieneplans verlangen.",
  },
  {
    question: "Was steht in einem Hygieneplan für Nagelstudios?",
    answer:
      "Ein Hygieneplan für Nagelstudios umfasst die Instrumentendesinfektion (Fräser, Scheren, Zangen), Vorgaben zur Fräser-Aufbereitung, Regeln zur Staubabsaugung, Flächendesinfektion der Arbeitsplätze, Handdesinfektion sowie die Dokumentation aller Hygienemaßnahmen.",
  },
  {
    question: "Welche Hygieneverordnung gilt in meinem Bundesland?",
    answer:
      "Jedes Bundesland hat eine eigene Hygieneverordnung für Kosmetik- und Nagelstudios. In Bayern gilt die Verordnung zur Verhütung übertragbarer Krankheiten (MedHygV), in NRW die Hygieneverordnung NRW. Informiere dich beim zuständigen Gesundheitsamt über die genauen Vorschriften.",
  },
  {
    question: "Wie oft muss der Hygieneplan aktualisiert werden?",
    answer:
      "Der Hygieneplan sollte mindestens einmal jährlich überprüft und bei Bedarf aktualisiert werden. Änderungen in den Hygieneverordnungen, neue Behandlungsverfahren oder Erkenntnisse aus Begehungen durch das Gesundheitsamt erfordern eine sofortige Anpassung.",
  },
  {
    question: "Brauche ich eine Hygieneschulung für mein Kosmetikstudio?",
    answer:
      "Ja, regelmäßige Hygieneschulungen sind in den meisten Bundesländern vorgeschrieben. Alle Mitarbeiterinnen und Mitarbeiter müssen über die geltenden Hygienevorschriften informiert und geschult werden. Die Schulungen sollten dokumentiert und mindestens jährlich wiederholt werden.",
  },
];

export default function HygieneplanKosmetikstudioPdfPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="h-4 w-4 mr-2" />
            Hygieneplan Kosmetikstudio PDF
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hygieneplan für dein Kosmetikstudio:{" "}
            <span className="text-blue-600">PDF-Checkliste</span> und Best Practices
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Erfahre, welche Inhalte ein Hygieneplan für Kosmetik- und Nagelstudios haben muss,
            welche Hygienevorschriften je nach Bundesland gelten und wie du Reinigung, Desinfektion
            und Nachweise strukturiert dokumentierst.
          </p>
          <Link
            href="/formulare"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Digitale Formulare ansehen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Was gehört in einen Hygieneplan für Kosmetikstudios?
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Ein vollständiger Hygieneplan (auch Rahmenhygieneplan Kosmetik genannt) regelt alle
            hygienerelevanten Abläufe in deinem Studio. Er dient als verbindliche Arbeitsanweisung
            für das gesamte Team und wird vom Gesundheitsamt bei Kontrollen eingefordert.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Reinigungs- und Desinfektionsintervalle pro Bereich",
              "Liste der Flächen, Geräte und Instrumente",
              "Verantwortlichkeiten im Team",
              "Dokumentation der durchgeführten Hygieneschritte",
              "Vorgaben zur Instrumentendesinfektion",
              "Aktualisierungsdatum und Version des Plans",
              "Handdesinfektionsprotokoll für Mitarbeiter und Kunden",
              "Aufbereitungsverfahren für Mehrweginstrumente",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6">
            Weitere Informationen zu Hygiene und Sicherheit findest du in unserem{" "}
            <Link
              href="/blog/hygiene-sicherheit-kosmetikstudio"
              className="text-blue-600 hover:text-blue-700 underline underline-offset-4"
            >
              Blogartikel zu Hygiene und Sicherheit im Kosmetikstudio
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">PDF-Vorlage vs. digitale Dokumentation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hygieneplan als PDF</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Gut als Startpunkt und für Schulungen</li>
                <li>Einfach zu drucken und aufzubewahren</li>
                <li>Manuelle Updates oft fehleranfällig</li>
                <li>Nachweise im Alltag schnell unvollständig</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl border border-blue-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digitale Hygiene-Dokumentation</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Klare Versionierung und bessere Nachvollziehbarkeit</li>
                <li>Einheitliche Formulare für das Team</li>
                <li>Schneller Zugriff bei Rückfragen und Kontrollen</li>
                <li>Weniger Papierchaos im Studio-Alltag</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Hygienevorschriften nach Bundesland
            </h2>
          </div>
          <p className="text-gray-600 mb-10 max-w-3xl">
            Die Hygieneverordnung Kosmetik unterscheidet sich je nach Bundesland. Jedes Land hat
            eigene Vorschriften für Kosmetik- und Nagelstudios. Prüfe daher immer die Vorgaben
            deines zuständigen Gesundheitsamts.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hygieneplan Kosmetikstudio Bayern
              </h3>
              <p className="text-gray-700 mb-4">
                In Bayern regelt die Verordnung zur Verhütung übertragbarer Krankheiten (MedHygV)
                zusammen mit dem Infektionsschutzgesetz die Hygieneanforderungen. Kosmetikstudios
                müssen einen schriftlichen Hygieneplan vorhalten, der die Aufbereitung von
                Instrumenten, Flächendesinfektion und Personalschulung dokumentiert.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  Schriftlicher Hygieneplan verpflichtend
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  Dokumentation der Instrumentenaufbereitung
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  Regelmäßige Begehungen durch das Gesundheitsamt möglich
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hygieneplan Kosmetikstudio NRW
              </h3>
              <p className="text-gray-700 mb-4">
                In Nordrhein-Westfalen gilt die Hygieneverordnung NRW. Sie verpflichtet Betreiber
                von Kosmetik- und Nagelstudios zur Erstellung eines Hygieneplans, der unter anderem
                Desinfektionsmaßnahmen, Abfallentsorgung und die Schulung des Personals regelt.
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  Hygieneplan nach Hygieneverordnung NRW
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  Nachweispflicht für Desinfektionsmittel (VAH-gelistet)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  Personalschulung mit Dokumentation erforderlich
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Weitere Bundesländer</h3>
            <p className="text-gray-700">
              Auch in allen anderen Bundesländern ist ein Hygieneplan für Kosmetikstudios Pflicht.
              Die konkreten Anforderungen variieren jedoch. In einigen Ländern wie Baden-Württemberg,
              Niedersachsen oder Sachsen gibt es zusätzliche Merkblätter und Rahmenhygienepläne.
              Wende dich im Zweifel an dein örtliches Gesundheitsamt, um die aktuellen Vorgaben
              zu erfahren.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Scissors className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Hygieneplan für Nagelstudios</h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-3xl">
            Nagelstudios haben besondere Hygieneanforderungen, da bei vielen Behandlungen direkter
            Hautkontakt und der Einsatz rotierender Instrumente stattfinden. Ein Hygieneplan für
            Nagelstudios muss daher spezifische Bereiche abdecken.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              {
                title: "Instrumentendesinfektion",
                description:
                  "Alle wiederverwendbaren Instrumente (Scheren, Zangen, Hautschieber) müssen nach jedem Einsatz desinfiziert und bei Bedarf sterilisiert werden. Die Einwirkzeiten der Desinfektionsmittel sind strikt einzuhalten.",
              },
              {
                title: "Fräser-Aufbereitung",
                description:
                  "Nagelfräser und Aufsätze müssen nach jeder Kundin gereinigt, desinfiziert und gegebenenfalls im Autoklaven sterilisiert werden. Einmalaufsätze sind nach Gebrauch zu entsorgen.",
              },
              {
                title: "Staubabsaugung",
                description:
                  "Beim Feilen und Fräsen entsteht Feinstaub, der gesundheitsschädlich sein kann. Eine leistungsfähige Staubabsaugung am Arbeitsplatz ist Pflicht und muss regelmäßig gewartet werden.",
              },
              {
                title: "UV-Sterilisation und Desinfektion",
                description:
                  "UV-Sterilisatoren können ergänzend zur chemischen Desinfektion eingesetzt werden. Sie ersetzen jedoch nicht die normgerechte Aufbereitung von Instrumenten nach RKI-Empfehlungen.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600">
            Du suchst eine digitale Lösung speziell für dein Nagelstudio? Erfahre mehr über unsere{" "}
            <Link
              href="/nagelstudio-software"
              className="text-blue-600 hover:text-blue-700 underline underline-offset-4"
            >
              Software für Nagelstudios
            </Link>{" "}
            mit Kundenverwaltung, Terminbuchung und digitalen Formularen.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Hygieneschulung im Kosmetikstudio</h2>
          </div>
          <p className="text-gray-600 mb-6 max-w-3xl">
            Ein Hygieneplan allein reicht nicht aus. Damit die Hygienevorschriften im Kosmetikstudio
            tatsächlich eingehalten werden, müssen alle Mitarbeiterinnen und Mitarbeiter regelmäßig
            geschult werden.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Erstunterweisung",
                description:
                  "Neue Mitarbeiter müssen vor dem ersten Arbeitstag über den Hygieneplan, Desinfektionsverfahren und Schutzmaßnahmen unterwiesen werden.",
              },
              {
                title: "Jährliche Auffrischung",
                description:
                  "Mindestens einmal pro Jahr sollte eine Hygieneschulung für das gesamte Team stattfinden, um aktuelle Änderungen in den Vorschriften zu vermitteln.",
              },
              {
                title: "Dokumentation der Schulung",
                description:
                  "Jede Schulung muss mit Datum, Inhalt und Teilnehmerliste dokumentiert werden. Diese Nachweise kann das Gesundheitsamt bei Kontrollen anfordern.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600">
            Mit Treatflow kannst du Schulungsnachweise digital erfassen und zentral ablegen. So hast
            du bei einer Kontrolle alle Unterlagen sofort griffbereit. Mehr dazu unter{" "}
            <Link
              href="/formulare"
              className="text-blue-600 hover:text-blue-700 underline underline-offset-4"
            >
              Digitale Formulare
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Praxis-Tipp für Studios</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Nutze eine feste Routine: tägliche Aufgaben, wöchentliche Kontrollen und monatliche
              Überprüfung des gesamten Hygieneplans. So bleibt dein Hygieneprozess stabil und dein
              Team arbeitet konsistent. Führe ein Logbuch oder eine digitale Checkliste, in der
              jeder Schritt abgehakt wird. Das erleichtert nicht nur den Alltag, sondern auch die
              Nachweisführung bei einer Begehung durch das Gesundheitsamt.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Häufige Fragen zum Hygieneplan im Kosmetik- und Nagelstudio
          </h2>
          <div className="space-y-6">
            {faqData.map((faq) => (
              <div key={faq.question} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Passende Seiten für dein Studio</h2>
          <div className="flex flex-wrap justify-center gap-5 text-sm">
            <Link href="/formulare" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Digitale Formulare
            </Link>
            <Link href="/nagelstudio-software" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Software für Nagelstudios
            </Link>
            <Link href="/behandlungsdokumentation" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Behandlungsdokumentation Kosmetik
            </Link>
            <Link href="/nisv-dokumentation" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              NiSV Dokumentation
            </Link>
            <Link href="/blog/hygiene-sicherheit-kosmetikstudio" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Hygiene und Sicherheit im Studio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
