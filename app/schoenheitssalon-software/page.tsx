import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Bell,
  Calendar,
  CheckCircle,
  FileText,
  Shield,
  Users,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';

export const metadata: Metadata = {
  title: 'Schönheitssalon Software für Kosmetikinstitut',
  description:
    'Schönheitssalon Software für digitale Terminplanung, Kundenkartei und Dokumentation. Ideal als Software für Kosmetikinstitut und Beauty-Studios mit Team.',
  keywords: [
    'schönheitssalon software',
    'beauty salon software',
    'software kosmetikinstitut',
    'kosmetik software',
    'software für kosmetikstudio',
    'terminkalender kosmetikstudio',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/schoenheitssalon-software',
  },
  openGraph: {
    title: 'Schönheitssalon Software: Termine, Kunden & Dokumentation',
    description:
      'Online-Buchungen, Kundenverwaltung und Dokumentation in einer klaren App für Schönheitssalons.',
    url: 'https://www.treatflow.io/schoenheitssalon-software',
  },
};

export default function SchoenheitssalonSoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Schönheitssalon Software
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Schönheitssalon Software für deinen <span className="text-indigo-600">Salon</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Weniger Verwaltungschaos, mehr Zeit für deine Kunden. Mit Treatflow steuerst du Termine,
              Kundendaten und Dokumentation in einer klaren, alltagstauglichen App.
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
                Demo buchen
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">Keine Kreditkarte nötig. Mit persönlicher Betreuung und Hilfe.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Die wichtigsten Funktionen für Schönheitssalons
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Calendar,
                title: 'Terminkalender',
                text: 'Tages- und Wochenansicht, klare Planung ohne Doppelbuchungen.',
              },
              {
                icon: Users,
                title: 'Kundenkartei',
                text: 'Kundendaten, Historie und Notizen zentral an einem Ort.',
              },
              {
                icon: FileText,
                title: 'Formulare & Doku',
                text: 'Anamnese, Einwilligungen und Behandlungsschritte digital erfassen.',
              },
              {
                icon: Bell,
                title: 'Erinnerungen',
                text: 'Automatische SMS- und E-Mail-Erinnerungen gegen No-Shows.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Warum Studios auf Treatflow wechseln
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Vorher</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Telefon und WhatsApp statt klarer Buchungsprozess</li>
                <li>Verteilte Kundendaten in verschiedenen Tools</li>
                <li>Unnötiger Zeitverlust bei Dokumentation</li>
                <li>Wenig Übersicht im Teamalltag</li>
              </ul>
            </div>
            <div className="bg-white border border-indigo-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mit Treatflow</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Klare, digitale Terminplanung',
                  'Zentrale Kundenkartei',
                  'Dokumentation sauber und schnell',
                  'Persönliche Betreuung bei Fragen',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Mehr Infos und Vergleiche</h2>
          <div className="flex flex-wrap justify-center gap-5 text-sm">
            <Link href="/kosmetikstudio-software" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Kosmetikstudio Software
            </Link>
            <Link href="/terminkalender" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Terminkalender Kosmetikstudio
            </Link>
            <Link href="/kundenkartei-software" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Kundenkartei Software
            </Link>
            <Link href="/blog/software-kosmetikinstitut" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
              Software Kosmetikinstitut
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Passende Ratgeber aus dem Blog</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <Link href="/blog/terminbuchung-kosmetikstudio" className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-indigo-200 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Terminbuchung Kosmetikstudio</h3>
              <p className="text-sm text-gray-600">So reduzierst du Terminlücken und bringst mehr Struktur in den Kalender.</p>
            </Link>
            <Link href="/blog/kundenkartei-kosmetik" className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-indigo-200 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Kundenkartei Kosmetik</h3>
              <p className="text-sm text-gray-600">Welche Daten wichtig sind und wie du alles sauber digital strukturierst.</p>
            </Link>
            <Link href="/blog/behandlungsdokumentation-kosmetik" className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-indigo-200 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Behandlungsdokumentation Kosmetik</h3>
              <p className="text-sm text-gray-600">Rechtssicher dokumentieren und im Alltag trotzdem schnell bleiben.</p>
            </Link>
          </div>
        </div>
      </section>

      <SocialProofBar />

      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Bereit für deine neue Studio-Software?</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Starte mit 14 Tagen kostenlos und bekomme persönliche Hilfe beim Onboarding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.treatflow.io/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Jetzt kostenlos testen
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link
              href="/kontakt"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Kontakt aufnehmen
            </Link>
          </div>
          <p className="text-sm text-indigo-200 mt-4">Jederzeit kündbar. DSGVO-konform. Mit persönlicher Betreuung.</p>
        </div>
      </section>

      {/* Passende Funktionen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Passende Funktionen für dein Studio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Treatflow vereint alle Tools in einer Plattform.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/online-terminbuchung-kosmetikstudio', title: 'Online-Terminbuchung', description: 'Kunden buchen 24/7 online' },
              { href: '/sms-erinnerungen-kosmetikstudio', title: 'SMS-Erinnerungen', description: 'Weniger No-Shows durch Erinnerungen' },
              { href: '/behandlungsdokumentation-kosmetikstudio', title: 'Behandlungsdokumentation', description: 'NiSV-konforme Dokumentation' },
              { href: '/digitale-anamnese-kosmetikstudio', title: 'Digitale Anamnese', description: 'Formulare vorab per Link ausfüllen' },
            ].map((link, index) => (
              <Link key={index} href={link.href} className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200 flex items-center">
                  {link.title}
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </h3>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
