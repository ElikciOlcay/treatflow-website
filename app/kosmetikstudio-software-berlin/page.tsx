import {
  Calendar, Users, FileText, Shield, Bell, ArrowRight, MapPin,
  ClipboardCheck, CheckCircle, Receipt, Link2
} from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { generateFaqSchema } from '@/lib/schema';

export const metadata = {
  title: {
    absolute: 'Kosmetikstudio Software Berlin: Termine, Kundenkartei & TSE | Treatflow',
  },
  description:
    'Software für Kosmetikstudios in Berlin: Online-Buchung ohne Provision, Kundenkartei, digitale Formulare, NiSV-Doku und TSE-Kasse. DSGVO, EU-Server. 14 Tage gratis.',
  keywords: [
    'Kosmetikstudio Software Berlin',
    'Beauty Software Berlin',
    'Kosmetik Berlin Terminbuchung',
    'Studio Software Berlin',
    'Kosmetikstudio Berlin digital',
    'TSE Kasse Kosmetikstudio Berlin',
  ],
  alternates: { canonical: 'https://www.treatflow.io/kosmetikstudio-software-berlin' },
  openGraph: {
    title: 'Kosmetikstudio Software Berlin | Treatflow',
    description:
      'Online-Buchung, Kundenkartei, Formulare und TSE-Kasse für Studios in Berlin – ohne Marktplatz-Provision.',
    url: 'https://www.treatflow.io/kosmetikstudio-software-berlin',
  },
};

const features = [
  { icon: Calendar, title: 'Terminkalender', desc: 'Team und Behandlungsräume in einer Tagesansicht – ideal bei hohem Takt in Berlin.', href: '/terminkalender' },
  { icon: Link2, title: 'Online-Buchung ohne Provision', desc: 'Eigener Link 24/7 – unabhängig von Treatwell & Co.', href: '/online-buchungen' },
  { icon: Users, title: 'Kundenkartei', desc: 'Historie, Fotos und Notizen – auch mobil vor Ort abrufbar.', href: '/kundenkartei-software' },
  { icon: ClipboardCheck, title: 'Digitale Formulare', desc: 'Anamnese und Einwilligung vorab per Link – weniger Wartezeit im Studio.', href: '/formulare' },
  { icon: FileText, title: 'NiSV-Dokumentation', desc: 'Geräte, Parameter und Zonen strukturiert dokumentieren.', href: '/nisv-dokumentation' },
  { icon: Receipt, title: 'TSE-Kasse', desc: 'Kassieren nach KassenSichV direkt aus dem Termin.', href: '/kassensystem-kosmetikstudio-deutschland' },
];

const faqs = [
  {
    question: 'Eignet sich Treatflow für Kosmetikstudios in Berlin?',
    answer:
      'Ja. Treatflow ist für Studios gebaut, die in einem dichten Markt wie Berlin Online-Buchungen, klare Kundenkarteien und rechtssichere Formulare brauchen – ohne Provision pro Termin.',
  },
  {
    question: 'Brauche ich in Berlin eine TSE-Kasse?',
    answer:
      'In Deutschland gilt die KassenSichV. Treatflow bietet eine TSE-konforme Kasse (u. a. Fiskaly) inkl. Belegausgabe und DSFinV-K-Export. Details findest du auf unserer Seite zum Kassensystem Deutschland.',
  },
  {
    question: 'Unterstützt Treatflow mehrsprachige Kundschaft?',
    answer:
      'Ja. Über die Buchungsseite und flexible Formulare kannst du internationale Kundinnen in Berlin besser abholen – ohne separates Tool.',
  },
  {
    question: 'Was kostet Treatflow?',
    answer:
      'Pläne ab 39 EUR/Monat. 14 Tage kostenlos testen, ohne Kreditkarte. Preise und Pakete siehst du unter /preise.',
  },
];

export default function KosmetikstudioSoftwareBerlinPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4 mr-2" />
              Berlin · Deutschland
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Kosmetikstudio Software für{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Berlin</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Termine, Kundenkartei, Formulare, NiSV-Doku und TSE-Kasse in einer App – gebaut für Studios
              in Mitte, Prenzlauer Berg, Charlottenburg, Neukölln und ganz Berlin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center">
                14 Tage kostenlos testen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link href="/kosmetikstudio-software"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors text-center">
                Zur All-in-One Software
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Warum Berliner Studios digital arbeiten müssen</h2>
          <p>
            In Berlin ist die Konkurrenz hoch: Kundinnen vergleichen Buchungslinks, erwarten kurze Reaktionszeiten
            und wechseln schnell, wenn die Organisation im Studio stockt. Gleichzeitig gelten in Deutschland klare
            Regeln zu Datenschutz (DSGVO), oft NiSV-Dokumentation bei Geräteanwendungen und – beim Kassieren –
            die TSE-Pflicht.
          </p>
          <p>
            Treatflow ersetzt den Mix aus WhatsApp, Excel und Marktplatz-Provisionen durch eine eigene Online-Buchung,
            eine echte Kundenkartei und digitale Formulare. Du behältst die Kundendaten – und zahlst keine Kommission
            pro Termin.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Funktionen für den Berliner Studioalltag</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <Link key={f.title} href={f.href} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all block">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Passend zum deutschen Markt</h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                'DSGVO & EU-Server',
                'NiSV-fähige Dokumentation',
                'TSE-Kasse (KassenSichV)',
                'Deutschsprachiger Support',
                'Keine Marktplatz-Provision',
                'Onboarding mit Datenumzug',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-center mt-6 text-sm">
              <Link href="/kosmetikstudio-software-deutschland" className="text-indigo-600 font-medium hover:underline">
                Mehr zur Kosmetikstudio Software Deutschland
              </Link>
              {' · '}
              <Link href="/kassensystem-kosmetikstudio-deutschland" className="text-indigo-600 font-medium hover:underline">
                TSE-Kassensystem
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bereit, dein Berliner Studio zu digitalisieren?</h2>
          <p className="text-indigo-100 mb-6">Teste Treatflow 14 Tage kostenlos – keine Kreditkarte nötig.</p>
          <a href="https://app.treatflow.io/auth/register" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
            14 Tage gratis testen
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <Script
          id="faq-schema-berlin"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Häufige Fragen – Berlin</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
