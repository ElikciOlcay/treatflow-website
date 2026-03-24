import { ArrowRight, CheckCircle, FileText, Shield } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Hygieneplan Kosmetikstudio PDF: Vorlage und Anleitung | Treatflow",
  description:
    "Hygieneplan für Kosmetikstudio als PDF: Was muss enthalten sein, wie oft aktualisieren und wie du den Plan digital dokumentierst.",
  keywords: [
    "hygieneplan kosmetikstudio pdf",
    "hygieneplan kosmetikstudio",
    "reinigungs und desinfektionsplan kosmetik",
    "instrumentendesinfektion nagelstudio",
  ],
  alternates: {
    canonical: "https://www.treatflow.io/hygieneplan-kosmetikstudio-pdf",
  },
};

export default function HygieneplanKosmetikstudioPdfPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="h-4 w-4 mr-2" />
            Hygieneplan Kosmetikstudio PDF
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hygieneplan für dein Kosmetikstudio: <span className="text-blue-600">PDF-Checkliste</span> und Best Practices
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Diese Seite zeigt dir, welche Inhalte ein sauberer Hygieneplan haben muss und wie du
            Reinigung, Desinfektion und Nachweise im Studio strukturiert dokumentierst.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Was gehört in einen Hygieneplan für Kosmetikstudios?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Reinigungs- und Desinfektionsintervalle pro Bereich",
              "Liste der Flächen, Geräte und Instrumente",
              "Verantwortlichkeiten im Team",
              "Dokumentation der durchgeführten Hygieneschritte",
              "Vorgaben zur Instrumentendesinfektion",
              "Aktualisierungsdatum und Version des Plans",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
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
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Praxis-Tipp für Studios</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Nutze eine feste Routine: tägliche Aufgaben, wöchentliche Kontrollen und monatliche
              Überprüfung des gesamten Hygieneplans. So bleibt dein Hygieneprozess stabil und
              dein Team arbeitet konsistent.
            </p>
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
