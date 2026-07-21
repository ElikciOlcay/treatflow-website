import {
  Calendar, Users, ClipboardCheck, FileText, Link2, Bell,
  Shield, Server, Building2, ArrowRight, MapPin, Receipt
} from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import GeoFAQ from '../components/GeoFAQ';

export const metadata = {
  title: {
    absolute: 'Kosmetikstudio Software Wien: Online-Buchung & RKSV | Treatflow',
  },
  description:
    'Software für Kosmetikstudios in Wien: Terminkalender, Online-Buchung ohne Provision, Kundenkartei, Formulare und RKSV-Registrierkasse. Made in Austria. 14 Tage gratis.',
  keywords: [
    'Kosmetikstudio Software Wien',
    'Beauty Software Wien',
    'Kosmetik Wien Terminbuchung',
    'Studio Software Wien',
    'Registrierkasse Kosmetikstudio Wien',
    'RKSV Kasse Wien',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/kosmetikstudio-software-wien',
  },
  openGraph: {
    title: 'Kosmetikstudio Software Wien | Treatflow',
    description:
      'Made in Austria: Online-Buchung, Kundenkartei und RKSV-Kasse für Beauty Studios in Wien.',
    url: 'https://www.treatflow.io/kosmetikstudio-software-wien',
  },
};

const features = [
  { icon: Calendar, title: 'Terminkalender', desc: 'Übersicht für dich und dein Team – auch bei mehreren Kabinen.', href: '/terminkalender' },
  { icon: Link2, title: 'Online-Buchungen', desc: 'Persönlicher Link 24/7, ohne Provision pro Termin.', href: '/online-buchungen' },
  { icon: Users, title: 'Kundenkartei', desc: 'Behandlungshistorie und Notizen zentral und mobil.', href: '/kundenkartei-software' },
  { icon: ClipboardCheck, title: 'Digitale Formulare', desc: 'Anamnese und Einwilligung digital vor dem Termin.', href: '/formulare' },
  { icon: FileText, title: 'Behandlungsdokumentation', desc: 'Fotos und Notizen je Sitzung – nachvollziehbar.', href: '/behandlungsdokumentation' },
  { icon: Receipt, title: 'RKSV-Registrierkasse', desc: 'Kassieren nach österreichischer Registrierkassenpflicht.', href: '/registrierkasse-kosmetikstudio-oesterreich' },
];

const faqs = [
  {
    question: 'Ist Treatflow ein österreichisches Unternehmen?',
    answer:
      'Ja. Treatflow kommt aus Salzburg. Support, Onboarding und Produktentwicklung sind auf den österreichischen Studioalltag ausgerichtet – inklusive RKSV-Themen.',
  },
  {
    question: 'Brauche ich in Wien eine RKSV-konforme Kasse?',
    answer:
      'Für barzahlungspflichtige Umsätze gelten in Österreich die Regeln zur Registrierkasse. Treatflow bietet eine RKSV-fähige Kasse inkl. Belegen. Mehr dazu auf der Seite Registrierkasse Österreich.',
  },
  {
    question: 'Nutzen Wiener Studios bereits Treatflow?',
    answer:
      'Ja – von Einzelstudios bis zu Teams in verschiedenen Bezirken. Onboarding und Datenumzug begleiten wir persönlich.',
  },
  {
    question: 'Wie läuft das Onboarding?',
    answer:
      'Nach der Registrierung erhältst du eine kurze Einführung. Bei Bedarf helfen wir beim Import bestehender Kundendaten – auf Deutsch, ohne Agentur-Umweg.',
  },
];

export default function KosmetikstudioSoftwareWienPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-28 pb-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="h-4 w-4 mr-2" />
            Wien · Österreich
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kosmetikstudio Software für{' '}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Wien</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Made in Austria – Termine, Kundenkartei, Formulare und RKSV-Kasse für Beauty Studios in Wien
            und allen Bezirken. Ohne Marktplatz-Provision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.treatflow.io/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-rose-700 transition-colors flex items-center justify-center"
            >
              14 Tage gratis testen
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link
              href="/kosmetikstudio-software-oesterreich"
              className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-rose-50 transition-colors text-center"
            >
              Software für Österreich
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-gray-600 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Für Studios, die in Wien wachsen wollen</h2>
          <p>
            Wien hat eine starke Beauty-Szene – und Kundinnen, die online buchen wollen. Viele Studios jonglieren
            trotzdem noch mit Telefon, WhatsApp und Papierformularen. Treatflow bündelt Terminkalender, eigene
            Online-Buchung, Kundenkartei und Dokumentation in einer App.
          </p>
          <p>
            Als österreichisches Produkt kennen wir typische Anforderungen vor Ort: deutschsprachiger Support,
            DSGVO/EU-Hosting und – wenn du kassierst – eine{' '}
            <Link href="/registrierkasse-kosmetikstudio-oesterreich" className="text-rose-600 font-medium hover:underline">
              RKSV-konforme Registrierkasse
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Alles, was dein Wiener Studio braucht</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <Link key={f.title} href={f.href} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-rose-200 hover:shadow-md transition-all block">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-rose-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Vertrauen & Nähe</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-rose-600 flex-shrink-0" />
                <span className="text-gray-700">DSGVO-konform</span>
              </div>
              <div className="flex items-center gap-3">
                <Server className="h-8 w-8 text-rose-600 flex-shrink-0" />
                <span className="text-gray-700">EU-Hosting</span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-rose-600 flex-shrink-0" />
                <span className="text-gray-700">Unternehmen aus Salzburg</span>
              </div>
              <div className="flex items-center gap-3">
                <Bell className="h-8 w-8 text-rose-600 flex-shrink-0" />
                <span className="text-gray-700">Persönlicher Support</span>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6 text-sm">
              <Link href="/kosmetikstudio-software" className="text-rose-600 font-medium hover:underline">
                Zur All-in-One Kosmetikstudio Software
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-rose-600 to-pink-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Jetzt 14 Tage kostenlos testen</h2>
          <p className="text-rose-100 mb-8">Keine Kreditkarte erforderlich. Starte in wenigen Minuten.</p>
          <a
            href="https://app.treatflow.io/auth/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-white text-rose-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            14 Tage gratis testen
          </a>
        </div>
      </section>

      <GeoFAQ faqs={faqs} themeColor="rose" />

      <Footer />
    </div>
  );
}
