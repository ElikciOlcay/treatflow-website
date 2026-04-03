import { CheckCircle, ArrowRight, FileText, Shield, Smartphone, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SocialProofBar from "../components/SocialProofBar";
import Breadcrumbs, { generateBreadcrumbSchema } from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Kundenkartei App für Kosmetik & Beauty",
  description:
    "Die Kundenkartei App für Kosmetikstudios: Kundendaten, Behandlungshistorie und Fotos in einer App. DSGVO-konform, 14 Tage kostenlos testen.",
  keywords: [
    "kundenkartei app",
    "kundenkartei app kosmetik",
    "app kundenkartei",
    "app für kundenkartei",
    "kundenkartei kosmetik app",
    "digitale kundenkartei kosmetik",
    "kundenkartei software",
    "kundenkartei software kostenlos",
    "kundenkartei app kostenlos",
  ],
  alternates: {
    canonical: "https://www.treatflow.io/kundenkartei-software",
  },
  openGraph: {
    title: "Kundenkartei App für Kosmetik & Beauty | Treatflow",
    description:
      "Die Kundenkartei App für Kosmetikstudios: Kundendaten, Fotos und Formulare in einer App. Kostenlos testen.",
    url: "https://www.treatflow.io/kundenkartei-software",
  },
};

const breadcrumbItems = [
  { label: "Funktionen", href: "/funktionen" },
  { label: "Kundenkartei Software" },
];

const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

const faqData = [
  {
    q: "Bietet Treatflow eine digitale Kundenkartei für Kosmetikstudios?",
    a: "Ja. In Treatflow verwaltest du Kundendaten, Behandlungshistorie, Formulare und Fotos zentral an einem Ort. Die gesamte Kundenakte ist jederzeit abrufbar - am Desktop, Tablet oder Smartphone.",
  },
  {
    q: "Kann ich die Kundenkartei kostenlos testen?",
    a: "Ja. Du kannst Treatflow 14 Tage kostenlos und unverbindlich testen, ohne Kreditkarte. In dieser Zeit hast du vollen Zugriff auf alle Funktionen der digitalen Kundenkartei.",
  },
  {
    q: "Ist die Kundenkartei DSGVO-konform?",
    a: "Ja. Alle Kundendaten werden verschlüsselt auf EU-Servern gespeichert und DSGVO-konform verarbeitet. Einwilligungen kannst du direkt über digitale Formulare einholen und dokumentieren.",
  },
  {
    q: "Welche Daten kann ich in der Kundenkartei speichern?",
    a: "Kontaktdaten, Behandlungshistorie, Allergien, Hauttyp, Vorher-Nachher-Fotos, ausgefüllte Formulare, Notizen und Terminhistorie. Alle Informationen sind übersichtlich in der digitalen Kundenakte zusammengefasst.",
  },
  {
    q: "Funktioniert die Kundenkartei auf dem Smartphone?",
    a: "Ja. Treatflow ist eine webbasierte App, die auf Desktop, Tablet und Smartphone funktioniert. Du hast von überall Zugriff auf alle Kundendaten - auch unterwegs oder zwischen zwei Behandlungen.",
  },
  {
    q: "Kann ich bestehende Kundendaten in Treatflow importieren?",
    a: "Ja. Du kannst bestehende Kundendaten manuell in Treatflow anlegen oder unser Team kontaktieren, das dir beim Import hilft. So geht kein Kundendatensatz verloren und der Wechsel zur digitalen Kundenkartei ist reibungslos.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const checklistItems: Array<{
  number: string;
  title: string;
  text: string;
  link?: { href: string; label: string };
}> = [
  {
    number: "1",
    title: "Kontaktdaten verwalten",
    text: "Erfasse Name, Telefonnummer, E-Mail und Adresse übersichtlich an einem Ort. So hast du alle Kontaktinformationen sofort griffbereit und musst nicht mehr in verschiedenen Systemen suchen.",
  },
  {
    number: "2",
    title: "Behandlungshistorie dokumentieren",
    text: "Jede Behandlung wird protokolliert, sodass du bei jedem Besuch sofort siehst, was zuletzt gemacht wurde und wie das Ergebnis war.",
    link: { href: "/behandlungsdokumentation", label: "Mehr zur Behandlungsdokumentation" },
  },
  {
    number: "3",
    title: "Vorher-Nachher-Fotos speichern",
    text: "Dokumentiere Behandlungsergebnisse mit Fotos direkt in der Kundenakte. Vorher-Nachher-Vergleiche machen Fortschritte sichtbar und überzeugen Kunden von deiner Arbeit.",
  },
  {
    number: "4",
    title: "Allergien und Hauttyp erfassen",
    text: "Hinterlege wichtige Gesundheitsinformationen wie Allergien, Unverträglichkeiten und Hauttyp direkt in der Kundenakte. Das sorgt für sichere Behandlungen und schützt dich vor Haftungsrisiken.",
  },
  {
    number: "5",
    title: "Digitale Formulare nutzen",
    text: "Lass Anamnese- und Einwilligungsformulare digital ausfüllen statt auf Papier. Das spart Zeit, vermeidet Lesefehler und ist rechtlich sicherer.",
    link: { href: "/formulare", label: "Digitale Formulare entdecken" },
  },
  {
    number: "6",
    title: "DSGVO-Konformität sicherstellen",
    text: "Kundendaten müssen verschlüsselt gespeichert und datenschutzkonform verarbeitet werden. Achte auf EU-Server, automatische Einwilligungen und die Möglichkeit, Daten auf Anfrage zu löschen.",
  },
  {
    number: "7",
    title: "Schnelle Suchfunktion",
    text: "Finde Kunden in Sekunden über Name, Telefonnummer oder Behandlung. Kein Blättern in Papierkarten oder Scrollen durch endlose Excel-Tabellen mehr.",
  },
];

const comparisonRows = [
  { criterion: "Datensicherheit", paper: "Gering (Verlust, Brand)", excel: "Mittel (lokale Datei)", treatflow: "Hoch (verschlüsselt, EU-Server)" },
  { criterion: "Suchfunktion", paper: "Keine", excel: "Eingeschränkt", treatflow: "Sofortsuche nach Name, Telefon, Behandlung" },
  { criterion: "DSGVO-konform", paper: "Schwierig umzusetzen", excel: "Nicht automatisch", treatflow: "Integriert (Einwilligungen, Löschung)" },
  { criterion: "Fotos speichern", paper: "Nicht möglich", excel: "Umständlich", treatflow: "Direkt in der Kundenakte" },
  { criterion: "Behandlungshistorie", paper: "Manuell (unübersichtlich)", excel: "Manuell (fehleranfällig)", treatflow: "Automatisch dokumentiert" },
  { criterion: "Zugriff von überall", paper: "Nur vor Ort", excel: "Nur mit Cloud-Lösung", treatflow: "Jedes Gerät mit Internetzugang" },
  { criterion: "Zeitaufwand", paper: "Hoch", excel: "Mittel", treatflow: "Gering (automatisiert)" },
];

const stepsData = [
  {
    step: "1",
    title: "Kostenlos registrieren",
    text: "Erstelle in wenigen Minuten dein Treatflow-Konto. Keine Kreditkarte nötig, keine versteckten Kosten. Du bekommst sofort Zugang zu allen Funktionen der digitalen Kundenkartei.",
  },
  {
    step: "2",
    title: "Kundendaten anlegen",
    text: "Lege deine Kunden in Treatflow an oder übertrage bestehende Daten. Erfasse Kontaktdaten, Allergien, Hauttyp und alle relevanten Informationen in der digitalen Kundenakte.",
  },
  {
    step: "3",
    title: "Digital arbeiten",
    text: "Nutze die digitale Kundenkartei im Alltag. Dokumentiere Behandlungen, speichere Fotos und greife jederzeit auf alle Kundendaten zu - von jedem Gerät aus.",
  },
];

export default function KundenkarteiSoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="kundenkartei-software-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="kundenkartei-software-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navigation />

      <section className="pb-20 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Digitale Kundenkartei
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Deine digitale <span className="text-indigo-600">Kundenkartei</span> für Kosmetik
            </h1>
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 max-w-2xl mx-auto mb-8">
              <p className="text-gray-700 leading-relaxed">
                Eine Kundenkartei Software ist eine digitale Lösung, mit der Kosmetikstudios und Beauty-Salons alle Kundendaten zentral verwalten. Statt Papierkarten oder Excel-Tabellen speicherst du Kontaktdaten, Behandlungshistorie, Allergien, Vorher-Nachher-Fotos und Formulare an einem Ort - sicher, DSGVO-konform und jederzeit abrufbar.
              </p>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Kundendaten, Behandlungshistorie, Formulare und Fotos - alles an einem Ort.
              Schnell abrufbar, sicher gespeichert und ohne Zettelchaos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.treatflow.io/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
              >
                14 Tage kostenlos testen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200"
              >
                Beratung buchen
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Jederzeit kündbar.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Alle Kundendaten an einem Ort",
                text: "Kontaktdaten, Notizen, Allergien und Vorlieben direkt in der Kundenakte.",
              },
              {
                icon: FileText,
                title: "Behandlungshistorie sofort sichtbar",
                text: "Sieh auf einen Blick, welche Behandlung zuletzt gemacht wurde und wie sie verlief.",
              },
              {
                icon: Smartphone,
                title: "Kundenkartei App auf jedem Gerät",
                text: "Nutze die Kundenkartei am Desktop, Tablet oder Smartphone.",
              },
              {
                icon: Shield,
                title: "DSGVO-konforme Speicherung",
                text: "Sensible Daten werden verschlüsselt in der EU gespeichert.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">
            Warum Kosmetikstudios auf eine digitale Kundenkartei setzen
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              In vielen Kosmetikstudios gehören Papierkarten und handschriftliche Notizen noch zum Alltag. Doch mit wachsender Kundenzahl wird die manuelle Verwaltung schnell unübersichtlich: Karteikarten gehen verloren, Informationen sind unleserlich oder veraltet, und die Suche nach einem bestimmten Kunden kostet wertvolle Zeit zwischen zwei Behandlungen.
            </p>
            <p>
              Eine digitale Kundenkartei löst diese Probleme. Alle Daten sind zentral gespeichert, sofort abrufbar und immer aktuell. Du siehst auf einen Blick die komplette Behandlungshistorie, gespeicherte Fotos und wichtige Hinweise wie Allergien oder Hauttyp. Das verbessert nicht nur die Betreuungsqualität, sondern spart dir täglich Zeit, die du für deine Kunden nutzen kannst.
            </p>
            <p>
              Mit einer professionellen{" "}
              <Link href="/kundenverwaltung" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
                Kundenverwaltung
              </Link>{" "}
              wie Treatflow organisierst du deinen Studioalltag effizienter. Vom ersten Kontakt über die Anamnese bis zur Nachbehandlung hast du alle Informationen in einer App - sicher, strukturiert und DSGVO-konform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Checkliste: 7 Funktionen einer guten Kundenkartei
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nicht jede Kundenkartei Software bietet denselben Funktionsumfang. Achte bei der Auswahl auf diese sieben Kernfunktionen, damit dein Studio effizient und rechtssicher arbeitet.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {checklistItems.map((item) => (
              <div key={item.number} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <span className="text-indigo-600 font-bold text-sm">{item.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.text}
                    {item.link && (
                      <>
                        {" "}
                        <Link href={item.link.href} className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
                          {item.link.label}
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Vergleich: Papier vs. Excel vs. Kundenkartei Software
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Viele Studios verwalten Kundendaten noch mit Papierkarteien oder Excel-Tabellen. Die folgende Übersicht zeigt, wo die Unterschiede liegen und warum eine spezialisierte Kundenkartei Software die bessere Wahl ist.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left p-4 font-semibold text-gray-900 text-sm">Kriterium</th>
                    <th className="text-center p-4 font-semibold text-gray-900 text-sm">Papierkartei</th>
                    <th className="text-center p-4 font-semibold text-gray-900 text-sm">Excel / Sheets</th>
                    <th className="text-center p-4 font-semibold text-indigo-600 text-sm bg-indigo-50">Treatflow</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr key={row.criterion} className={index < comparisonRows.length - 1 ? "border-b border-gray-50" : ""}>
                      <td className="p-4 font-medium text-gray-900 text-sm">{row.criterion}</td>
                      <td className="p-4 text-center text-sm text-red-600">{row.paper}</td>
                      <td className="p-4 text-center text-sm text-yellow-600">{row.excel}</td>
                      <td className="p-4 text-center text-sm text-green-600 bg-indigo-50/50 font-medium">{row.treatflow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Eine professionelle Kundenkartei Software wie Treatflow deckt alle wichtigen Bereiche ab und ist speziell auf die Anforderungen von Kosmetikstudios und Beauty-Salons zugeschnitten.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Ist eine Kundenkartei kostenlos sinnvoll?</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
            Kostenlose Tools klingen verlockend, stoßen aber schnell an ihre Grenzen. Hier ein direkter Vergleich zwischen kostenlosen Lösungen und einer professionellen Kundenkartei Software.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Kostenlose Lösungen</h3>
              <ul className="space-y-3">
                {[
                  "Oft keine saubere Behandlungshistorie pro Kunde",
                  "Häufig ohne Foto-Dokumentation",
                  "Meist kein DSGVO-konformer Workflow",
                  "Schnell unübersichtlich bei wachsender Kundenzahl",
                  "Kein professioneller Support bei Problemen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-indigo-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mit Treatflow</h3>
              <ul className="space-y-3">
                {[
                  "Strukturierte Kundenkartei mit vollständiger Behandlungshistorie",
                  "Formulare und Dokumentation in einem System",
                  "DSGVO-konforme Datenverwaltung mit EU-Servern",
                  "14 Tage kostenlos testen - ohne Risiko, ohne Kreditkarte",
                  "Persönlicher Support und Hilfe beim Einstieg",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              So wechselst du in 3 Schritten zur digitalen Kundenkartei
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Der Umstieg von Papier oder Excel zur digitalen Kundenkartei ist einfacher als du denkst. In drei Schritten bist du startklar.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {stepsData.map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://app.treatflow.io/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-200 inline-flex items-center"
            >
              Jetzt kostenlos starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Weitere Funktionen entdecken</h2>
          <div className="flex flex-wrap justify-center gap-5 text-sm">
            <Link href="/kundenverwaltung" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Kundenverwaltung
            </Link>
            <Link href="/kundenkartei-kosmetikstudio" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Digitale Kundenkartei Kosmetik
            </Link>
            <Link href="/kosmetikstudio-software" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Kosmetikstudio Software
            </Link>
            <Link href="/formulare" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Digitale Formulare
            </Link>
            <Link href="/terminkalender" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Terminbuchung Kosmetikstudio
            </Link>
            <Link href="/behandlungsdokumentation" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Behandlungsdokumentation Kosmetik
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Häufige Fragen zur Kundenkartei
            </h2>
          </div>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialProofBar />

      <Footer />
    </div>
  );
}
