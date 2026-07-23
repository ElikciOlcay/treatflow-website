import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, CheckCircle, RefreshCw } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';
import AiAnswerCapsule from '../../components/AiAnswerCapsule';

export const metadata: Metadata = {
  title: 'Software-Wechsel Kosmetikstudio: Kundenimport & Checkliste',
  description:
    'Wechsel zur Kosmetikstudio-Software ohne Stress: Kundendaten importieren, Buchungslink aktivieren, Formulare übernehmen. Schritt-für-Schritt-Checkliste für den Umstieg.',
  keywords: [
    'import kundenliste kosmetikstudio',
    'software wechsel kosmetikstudio',
    'kunden importieren studio software',
    'umstieg behandlungssoftware',
    'kosmetikstudio software wechsel',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/guides/software-wechsel-kundenimport',
  },
  openGraph: {
    title: 'Software-Wechsel & Kundenimport | Treatflow',
    description: 'Checkliste für den Umstieg: Import, Setup, Formulare, Buchungslink.',
    url: 'https://www.treatflow.io/guides/software-wechsel-kundenimport',
  },
};

const faqData = [
  {
    q: 'Kann ich meine bestehende Kundenliste importieren?',
    a: 'Ja. In der Regel per CSV/Excel-Export aus dem alten System oder aus Tabellen. Treatflow unterstützt dich beim Import – je sauberer Name, Telefon, E-Mail und Notizen getrennt sind, desto besser.',
  },
  {
    q: 'Verliere ich Termine beim Wechsel?',
    a: 'Offene Termine planst du idealerweise kurz parallel oder überträgst sie manuell für die nächste Woche. Historische Termine bleiben oft als Notiz/Historie in der Kundenakte erhalten, wenn du sie exportierst.',
  },
  {
    q: 'Wie lange dauert ein Software-Wechsel?',
    a: 'Viele Studios sind in 1–3 Tagen arbeitsfähig (Kalender, Buchungslink, Basisformulare). Der Feinschliff (alle Vorlagen, Teamschulung, Kasse) folgt in der ersten Woche.',
  },
  {
    q: 'Was ist mit Treatwell, Fresha oder Excel?',
    a: 'Kundendaten lassen sich häufig exportieren. Marktplatz-Provisionen entfallen, sobald du über deinen eigenen Treatflow-Buchungslink arbeitest – ohne die Kundschaft „mitzuverkaufen“.',
  },
];

const checklist = [
  'Kundendaten exportieren (Name, Kontakt, Notizen, idealerweise Historie)',
  'Treatflow-Account anlegen und Studio-Stammdaten pflegen',
  'Leistungen, Dauer und Preise anlegen',
  'Arbeitszeiten / Ressourcen (Mitarbeiter, Räume) setzen',
  'Kundenliste importieren und Stichproben prüfen',
  'Anamnese- & Einwilligungsformulare aktivieren',
  'Buchungslink testen und auf Website/Instagram teilen',
  'Erinnerungen (E-Mail/SMS) einschalten',
  'Team kurz schulen (Termin anlegen, Doku, Formulare)',
  'Altes System erst abschalten, wenn der Alltag läuft',
];

export default function SoftwareWechselPage() {
  const breadcrumbItems = [
    { label: 'Guides', href: '/guides' },
    { label: 'Software-Wechsel & Kundenimport' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Script id="wechsel-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="wechsel-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }} />

      <section className="pb-12 bg-gradient-to-br from-sky-50 via-white to-indigo-50">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <RefreshCw className="h-4 w-4 mr-2" />
            Umstieg ohne Chaos
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Software-Wechsel & Kundenimport fürs Kosmetikstudio
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            So wechselst du von Excel, Papier oder Marktplatz-Tools zu einer echten Studio-Software –
            mit klarer Checkliste und ohne wochenlangen Stillstand.
          </p>
          <AiAnswerCapsule
            question="Wie importiere ich meine Kundenliste in eine Kosmetikstudio-Software?"
            answer="Exportiere Kundendaten aus dem alten System oder aus Excel (Name, Telefon, E-Mail, Notizen). Importiere die Liste in Treatflow, prüfe Stichproben und aktiviere danach Buchungslink, Formulare und Erinnerungen. So behältst du deine Bestandskunden und startest digital ohne Neuanfang bei null."
          />
          <div className="mt-8">
            <a
              href="https://app.treatflow.io/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-700"
            >
              Jetzt wechseln – 14 Tage testen
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Umstieg-Checkliste</h2>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Was du aus dem alten System mitnehmen solltest</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mindestens: Name, Telefon, E-Mail, relevante Notizen (Allergien, Vorlieben). Ideal zusätzlich:
              letzte Behandlungen, offene Pakete, Gutscheinreste. Fotos und Formulare später nachziehen –
              Hauptsache, der Alltag läuft.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Mehr Kontext zur Digitalisierung:{' '}
              <Link href="/guides/kosmetikstudio-digitalisieren" className="text-indigo-600 font-medium hover:underline">
                Kosmetikstudio digitalisieren
              </Link>
              . Produkt:{' '}
              <Link href="/kundenkartei-software" className="text-indigo-600 font-medium hover:underline">
                Kundenkartei App
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Von Marktplatz zu eigenem Buchungslink</h2>
            <p className="text-gray-700 leading-relaxed">
              Viele Studios starten über Treatwell oder Fresha und zahlen Provision pro Termin. Mit Treatflow
              teilst du einen eigenen Link – auf Website, Google-Profil und Instagram. Vergleiche:{' '}
              <Link href="/treatflow-vs-treatwell" className="text-indigo-600 font-medium hover:underline">
                Treatflow vs. Treatwell
              </Link>{' '}
              ·{' '}
              <Link href="/treatflow-vs-fresha" className="text-indigo-600 font-medium hover:underline">
                Treatflow vs. Fresha
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Häufige Fragen</h2>
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-gray-100 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      <section className="py-16 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Wir helfen dir beim Import</h2>
          <p className="text-indigo-100 mb-8">
            Onboarding mit Support – damit du nicht allein vor der CSV sitzt.
          </p>
          <a
            href="https://app.treatflow.io/auth/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold"
          >
            Kostenlos starten
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
