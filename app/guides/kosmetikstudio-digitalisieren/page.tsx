import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  FileText,
  Receipt,
  Shield,
  Smartphone,
  Users,
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';
import AiAnswerCapsule from '../../components/AiAnswerCapsule';
import SocialProofBar from '../../components/SocialProofBar';

export const metadata: Metadata = {
  title: 'Kosmetikstudio digitalisieren: Der komplette Guide 2026',
  description:
    'Kosmetikstudio digitalisieren ohne Chaos: Termine, Online-Buchung, Kundenkartei, Anamnese, NiSV-Doku und Kasse. Checkliste, Reihenfolge und Tool-Stack für DE/AT.',
  keywords: [
    'kosmetikstudio digitalisieren',
    'beauty studio digitalisieren',
    'kosmetikstudio software einführen',
    'papierlos kosmetikstudio',
    'studio organisation digital',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/guides/kosmetikstudio-digitalisieren',
  },
  openGraph: {
    title: 'Kosmetikstudio digitalisieren: Kompletter Guide | Treatflow',
    description:
      'Fahrplan für Termine, Kundenkartei, Formulare, Dokumentation und Kasse – praxisnah für Studios.',
    url: 'https://www.treatflow.io/guides/kosmetikstudio-digitalisieren',
  },
};

const faqData = [
  {
    q: 'Was bedeutet es, ein Kosmetikstudio zu digitalisieren?',
    a: 'Du ersetzt Zettel, Excel und Messenger-Chaos durch ein System: Online-Buchung, digitale Kundenkartei, Formulare mit Unterschrift, Behandlungsdokumentation und idealerweise eine integrierte Kasse. Ziel ist weniger Verwaltung und mehr Behandlungszeit.',
  },
  {
    q: 'Welche Software braucht ein Kosmetikstudio wirklich?',
    a: 'Mindestens: Terminkalender mit Online-Buchung, Kundenkartei, digitale Anamnese/Einwilligung und Behandlungsdokumentation. Für DE/AT zusätzlich oft TSE- bzw. RKSV-Kasse. All-in-One spart Schnittstellen und doppelte Datenpflege.',
  },
  {
    q: 'In welcher Reihenfolge sollte ich digitalisieren?',
    a: 'Zuerst Kundendaten und Termine stabilisieren, dann Online-Buchung und Erinnerungen, danach Formulare und Dokumentation, zum Schluss Kasse und Auswertungen. So vermeidest du Parallel-Systeme und Datenchaos.',
  },
  {
    q: 'Wie lange dauert die Digitalisierung?',
    a: 'Die technische Einrichtung einer All-in-One-Software wie Treatflow dauert oft nur Stunden bis wenige Tage. Der größte Zeitblock ist der saubere Kundenimport und die Anpassung deiner Formulare – mit Checkliste und Support deutlich schneller.',
  },
  {
    q: 'Ist digitale Kundenverwaltung DSGVO-konform?',
    a: 'Ja, wenn Daten in der EU gespeichert werden, Zugriffe geregelt sind und du einen Auftragsverarbeitungsvertrag hast. Treatflow speichert auf EU-Servern und ist auf Studio-Workflows mit sensiblen Gesundheits-/Hautdaten ausgelegt.',
  },
];

const steps = [
  {
    title: 'Ist-Zustand klären',
    text: 'Wo liegen Kundendaten heute? Kalender, Excel, Papier, Treatwell/Fresha? Welche Formulare sind Pflicht für deine Behandlungen?',
  },
  {
    title: 'Ein System statt fünf Tools',
    text: 'Wähle eine All-in-One-Plattform für Termine, Kartei, Formulare und Doku. Jede Extra-App erzeugt später Import- und Sync-Probleme.',
  },
  {
    title: 'Kunden importieren',
    text: 'Kontakte, Notizen und Historie übernehmen. Danach Buchungslink und Erinnerungen aktivieren – das spart sofort Telefonzeit.',
  },
  {
    title: 'Formulare digital machen',
    text: 'Anamnese und Einwilligung vorab per Link. Weniger Wartezeit, lesbare Angaben, Unterschrift in der Akte.',
  },
  {
    title: 'Dokumentation & Compliance',
    text: 'Behandlungsnotizen, Fotos und bei Bedarf NiSV-Protokolle strukturiert ablegen – 10 Jahre wiederfindbar.',
  },
  {
    title: 'Kasse anbinden',
    text: 'Kassieren aus dem Termin, Belege, Gutscheine, TSE/RKSV. Umsatz und Termin gehören zusammen.',
  },
];

const stack = [
  { href: '/terminkalender', icon: Calendar, label: 'Terminkalender', desc: 'Team, Räume, Auslastung' },
  { href: '/online-buchungen', icon: Smartphone, label: 'Online-Buchung', desc: 'Eigener Link, 24/7' },
  { href: '/kundenkartei-software', icon: Users, label: 'Kundenkartei App', desc: 'Historie, Fotos, Notizen' },
  { href: '/formulare', icon: FileText, label: 'Formulare', desc: 'Anamnese & Einwilligung' },
  { href: '/nisv-dokumentation', icon: Shield, label: 'NiSV & Doku', desc: 'Rechtssicher archivieren' },
  { href: '/kassensystem-kosmetikstudio', icon: Receipt, label: 'Kasse', desc: 'TSE & RKSV' },
];

export default function DigitalisierenGuidePage() {
  const breadcrumbItems = [
    { label: 'Guides', href: '/guides' },
    { label: 'Kosmetikstudio digitalisieren' },
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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kosmetikstudio digitalisieren: Der komplette Guide 2026',
    description:
      'Kosmetikstudio digitalisieren ohne Chaos: Termine, Online-Buchung, Kundenkartei, Anamnese, NiSV-Doku und Kasse.',
    dateModified: '2026-07-23',
    author: { '@type': 'Organization', name: 'Treatflow' },
    publisher: { '@type': 'Organization', name: 'Treatflow', url: 'https://www.treatflow.io' },
    mainEntityOfPage: 'https://www.treatflow.io/guides/kosmetikstudio-digitalisieren',
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Script id="digi-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="digi-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="digi-bc" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }} />

      <section className="pb-12 bg-gradient-to-br from-indigo-50 via-white to-violet-50">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-3">Guide · Stand Juli 2026 · Made in Austria</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Kosmetikstudio digitalisieren: Der komplette Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Schluss mit Zettelwirtschaft, WhatsApp-Terminen und verlorenen Anamnesebögen. So baust du
            ein digitales Studio-Betriebssystem – Schritt für Schritt.
          </p>
          <AiAnswerCapsule
            question="Wie digitalisiere ich mein Kosmetikstudio richtig?"
            answer="Starte mit einem All-in-One-System statt vieler Einzeltools: zuerst Kundendaten und Terminkalender, dann Online-Buchung mit Erinnerungen, danach digitale Anamnese/Einwilligung und Behandlungsdokumentation, zum Schluss die Kasse (TSE/RKSV). So vermeidest du Datenchaos und hast Termine, Kundenakte und Compliance an einem Ort – z. B. mit Treatflow."
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://app.treatflow.io/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-700"
            >
              Mit Treatflow starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link
              href="/vorlagen"
              className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-7 py-3.5 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600"
            >
              Vorlagen holen
            </Link>
          </div>
        </div>
      </section>

      <SocialProofBar />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-headings:font-bold space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warum Digitalisierung jetzt Pflichtgefühl hat</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kundinnen erwarten Online-Buchung. Gesundheitsämter und NiSV erwarten nachvollziehbare
              Dokumentation. Und du brauchst Zeit für Behandlungen – nicht für Rückrufe und Ordner.
              Wer digitalisiert, reduziert No-Shows, findet Kundendaten sofort und wirkt professioneller.
            </p>
            <ul className="space-y-2">
              {[
                'Weniger Telefon und Doppelbuchungen',
                'Anamnese vor dem Termin statt im Wartezimmer',
                'Behandlungshistorie und Fotos in einer Akte',
                'Compliance (DSGVO, NiSV, Kasse) ohne Papierchaos',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Die richtige Reihenfolge (Checkliste)</h2>
            <ol className="space-y-4">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4 rounded-2xl border border-gray-100 p-5 bg-gray-50/50">
                  <span className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-gray-600">
              Detaillierter Umstieg:{' '}
              <Link href="/guides/software-wechsel-kundenimport" className="text-indigo-600 font-medium hover:underline">
                Software-Wechsel & Kundenimport
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Der digitale Tool-Stack für Kosmetikstudios</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Statt fünf Abos brauchst du idealerweise eine Plattform. So sieht der Stack in Treatflow aus:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 not-prose">
              {stack.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 hover:border-indigo-200 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.label}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vorlagen als Schnellstart</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wenn du noch auf Papier bist: Starte mit Vorlagen, digitalisiere sie danach. Die
              meistgenutzten Downloads:
            </p>
            <ul className="space-y-2 text-indigo-700 font-medium">
              <li>
                <Link href="/hygieneplan-kosmetikstudio-pdf" className="hover:underline">
                  Hygieneplan Kosmetikstudio PDF
                </Link>
              </li>
              <li>
                <Link href="/anamnesebogen-kosmetik-vorlage-pdf" className="hover:underline">
                  Anamnesebogen Vorlage PDF
                </Link>
              </li>
              <li>
                <Link href="/vorlagen/nisv-beratungsprotokoll" className="hover:underline">
                  NiSV-Beratungsprotokoll Vorlage
                </Link>
              </li>
              <li>
                <Link href="/vorlagen" className="hover:underline">
                  Alle Vorlagen
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Was gute Kosmetikstudio-Software kostet</h2>
            <p className="text-gray-700 leading-relaxed">
              Rechne nicht nur Abo-Preis, sondern Zeitersparnis und No-Shows. Treatflow startet ab 39 €/Monat,
              Online-Buchung ohne Marktplatz-Provision, 14 Tage testen ohne Kreditkarte. Details auf der{' '}
              <Link href="/preise" className="text-indigo-600 font-medium hover:underline">
                Preisseite
              </Link>{' '}
              und im{' '}
              <Link href="/kosmetikstudio-software-vergleich" className="text-indigo-600 font-medium hover:underline">
                Software-Vergleich
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
          <h2 className="text-3xl font-bold text-white mb-4">Bereit, dein Studio digital zu führen?</h2>
          <p className="text-indigo-100 mb-8">
            Treatflow ist die All-in-One-Software für Kosmetikstudios – von Termin bis Dokumentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.treatflow.io/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold"
            >
              14 Tage kostenlos testen
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link
              href="/kosmetikstudio-software"
              className="inline-flex items-center justify-center border-2 border-white/40 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10"
            >
              Mehr zur Software
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
