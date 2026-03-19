import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Script from 'next/script';
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone,
  Search,
  MousePointerClick,
  Palette,
  CalendarDays,
  ChevronDown,
  Gift,
  Star,
  Shield,
  Zap,
  MessageCircle,
  Send
} from 'lucide-react';

export const metadata = {
  title: 'Website für Kosmetikstudio erstellen lassen | Treatflow',
  description: 'Individuelle Website für dein Kosmetikstudio, Laserstudio oder Beauty Business. Professionell, mobil optimiert und auf Buchungen ausgelegt. Ab 1.000 Euro.',
  keywords: [
    'Website für Kosmetikstudio',
    'Webdesign Kosmetikstudio',
    'Website Beauty Salon',
    'Website für Laserstudio',
    'Homepage Kosmetikstudio',
    'Kosmetikstudio Webseite erstellen',
    'Webdesign Beauty Salon',
    'Website Nagelstudio',
    'Kosmetikstudio Online-Präsenz',
    'Website Permanent Makeup Studio',
  ],
  alternates: {
    canonical: 'https://www.treatflow.io/website-fuer-kosmetikstudios',
  },
  openGraph: {
    title: 'Individuelle Websites für Kosmetikstudios | Treatflow',
    description: 'Professionelle, individuelle Websites für Kosmetikstudios und Beauty Businesses. Auf Buchungen und Neukundengewinnung optimiert.',
    url: 'https://www.treatflow.io/website-fuer-kosmetikstudios',
    images: [
      {
        url: 'https://www.treatflow.io/images/og-website-service.jpg',
        width: 1200,
        height: 630,
        alt: 'Treatflow - Individuelle Websites für Kosmetikstudios',
      },
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Individuelle Website für Kosmetikstudios',
  description: 'Professionelle, individuelle Websites für Kosmetikstudios und Beauty Businesses. Auf Buchungen und Neukundengewinnung optimiert.',
  provider: {
    '@type': 'Organization',
    name: 'Treatflow',
    url: 'https://www.treatflow.io',
  },
  serviceType: 'Webdesign',
  areaServed: ['DE', 'AT'],
  offers: {
    '@type': 'Offer',
    price: '1000',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '1000',
      priceCurrency: 'EUR',
      description: 'Individuelle Website ab 1.000 Euro',
    },
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie lange dauert die Erstellung meiner Studio-Website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In der Regel ist deine Website innerhalb von 2-4 Wochen fertig. Der genaue Zeitraum hängt vom Umfang und der Zulieferung deiner Inhalte ab.',
      },
    },
    {
      '@type': 'Question',
      name: 'Brauche ich bereits Texte und Fotos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein, das ist kein Muss. Wir unterstützen dich bei der Texterstellung und beraten dich zu Bildmaterial. Professionelle Fotos deines Studios sind natürlich ideal, aber wir finden gemeinsam die beste Lösung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann meine bestehende Domain verwendet werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, selbstverständlich. Wenn du bereits eine Domain besitzt, binden wir deine neue Website dort ein. Falls nicht, helfen wir dir bei der Auswahl und Registrierung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist die Website mit Treatflow kombinierbar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolut. Dein Treatflow-Buchungslink, Behandlungen und Öffnungszeiten können direkt in die Website integriert werden. So buchst du neue Kunden direkt über deine eigene Website.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet eine individuelle Website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Individuelle Websites starten ab 1.000 Euro. Der finale Preis hängt vom Umfang und den gewünschten Funktionen ab. Treatflow-Kunden erhalten zusätzlich 200 Euro Treatflow-Guthaben.',
      },
    },
  ],
};

const leistungen = [
  {
    icon: Palette,
    title: 'Individuelles Design',
    desc: 'Kein Baukasten, kein Template. Dein Studio bekommt ein Design, das zu deiner Marke passt und Vertrauen schafft.',
  },
  {
    icon: Smartphone,
    title: 'Mobil optimiert',
    desc: 'Über 80% deiner Besucher kommen vom Handy. Deine Website sieht auf jedem Gerät perfekt aus.',
  },
  {
    icon: Search,
    title: 'SEO-Grundlage',
    desc: 'Saubere Technik, schnelle Ladezeiten und optimierte Inhalte, damit dein Studio bei Google gefunden wird.',
  },
  {
    icon: MousePointerClick,
    title: 'Auf Buchungen optimiert',
    desc: 'Jede Seite ist darauf ausgelegt, Besucher zu Anfragen oder Buchungen zu konvertieren.',
  },
  {
    icon: CalendarDays,
    title: 'Buchungsintegration',
    desc: 'Dein Treatflow-Buchungslink, Kontaktformular oder Telefon-CTA direkt eingebunden.',
  },
  {
    icon: Globe,
    title: 'Passend für jede Branche',
    desc: 'Kosmetik, Laser, Hydrafacial, Permanent Makeup, Microneedling, Nails, Lashes und mehr.',
  },
];

const faqs = [
  {
    question: 'Wie lange dauert die Erstellung meiner Studio-Website?',
    answer: 'In der Regel ist deine Website innerhalb von 2-4 Wochen fertig. Der genaue Zeitraum hängt vom Umfang und der Zulieferung deiner Inhalte ab.',
  },
  {
    question: 'Brauche ich bereits Texte und Fotos?',
    answer: 'Nein, das ist kein Muss. Wir unterstützen dich bei der Texterstellung und beraten dich zu Bildmaterial. Professionelle Fotos deines Studios sind natürlich ideal, aber wir finden gemeinsam die beste Lösung.',
  },
  {
    question: 'Kann meine bestehende Domain verwendet werden?',
    answer: 'Ja, selbstverständlich. Wenn du bereits eine Domain besitzt, binden wir deine neue Website dort ein. Falls nicht, helfen wir dir bei der Auswahl und Registrierung.',
  },
  {
    question: 'Ist die Website mit Treatflow kombinierbar?',
    answer: 'Absolut. Dein Treatflow-Buchungslink, Behandlungen und Öffnungszeiten können direkt in die Website integriert werden. So buchst du neue Kunden direkt über deine eigene Website.',
  },
  {
    question: 'Was kostet eine individuelle Website?',
    answer: 'Individuelle Websites starten ab 1.000 Euro. Der finale Preis hängt vom Umfang und den gewünschten Funktionen ab. Treatflow-Kunden erhalten zusätzlich 200 Euro Treatflow-Guthaben.',
  },
  {
    question: 'Kümmert ihr euch auch um Hosting und Wartung?',
    answer: 'Ja, auf Wunsch übernehmen wir auch das Hosting und die technische Wartung deiner Website. So musst du dich um nichts kümmern.',
  },
  {
    question: 'Kann ich die Website später selbst bearbeiten?',
    answer: 'Je nach Setup bieten wir Lösungen, bei denen du einfache Anpassungen wie Texte und Bilder selbst vornehmen kannst. Bei grösseren Änderungen unterstützen wir dich.',
  },
];

export default function WebsiteFuerKosmetikstudiosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema-websites"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Globe className="h-4 w-4" />
              Neuer Service von Treatflow
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Individuelle Websites für{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Kosmetikstudios
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
              Professionell, modern und auf Buchungen optimiert.
              Deine Website wird zum stärksten Kanal für neue Kunden.
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              Wir bauen nicht einfach nur schöne Websites. Wir bauen Websites,
              die Vertrauen schaffen und Anfragen generieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Kostenlos beraten lassen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="mailto:hello@treatflow.io?subject=Website-Projekt%20anfragen"
                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                Anfrage per E-Mail
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-indigo-500" />
                <span>Ab 1.000 Euro</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-indigo-500" />
                <span>Individuelles Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-indigo-500" />
                <span>Fertig in 2-4 Wochen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Showcase */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Globe className="h-4 w-4" />
              Live-Beispiel ansehen
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              So kann deine Studio-Website aussehen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Überzeuge dich selbst. Diese Beispiel-Website haben wir für ein fiktives Premium-Studio erstellt.
            </p>
          </div>
          <a
            href="/demo/skin-atelier"
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 max-w-5xl mx-auto"
          >
            <div className="aspect-[16/9] relative overflow-hidden bg-stone-100">
              <img
                src="/images/demo/demo-hero.png"
                alt="Skin Atelier - Demo-Website für Kosmetikstudios von Treatflow"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-white/70 tracking-[0.2em] uppercase mb-2">Demo-Website</p>
                <p className="text-2xl lg:text-3xl font-light text-white tracking-wide">Skin Atelier München</p>
              </div>
              <div className="absolute top-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Demo ansehen
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">Individuelle Demo-Website</p>
                <p className="text-sm text-gray-500">Premium-Design mit Buchungsintegration, Behandlungen, Testimonials und mehr</p>
              </div>
              <div className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 flex-shrink-0 group-hover:bg-indigo-700 transition-colors">
                Live ansehen
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Warum eine professionelle Website */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Warum dein Studio eine professionelle Website braucht
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Deine Kunden informieren sich online, bevor sie buchen.
              Eine professionelle Website ist deine digitale Visitenkarte und dein stärkstes Werkzeug für Neukundengewinnung.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                value: '97%',
                label: 'suchen online',
                desc: 'Fast alle Kunden googeln ein Studio, bevor sie buchen.',
              },
              {
                value: '75%',
                label: 'beurteilen nach Website',
                desc: 'Die Qualität deiner Website beeinflusst das Vertrauen in dein Studio.',
              },
              {
                value: '3x',
                label: 'mehr Anfragen',
                desc: 'Studios mit professioneller Website erhalten deutlich mehr Buchungsanfragen.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100"
              >
                <div className="text-4xl lg:text-5xl font-bold text-indigo-600 mb-2">
                  {item.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {item.label}
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Was in deiner Website steckt
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jede Website wird individuell für dein Studio konzipiert.
              Kein Template, keine Kompromisse.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leistungen.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-5">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatflow-Vorteil */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 lg:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Zap className="h-4 w-4" />
                  Exklusiver Vorteil
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ideal in Kombination mit Treatflow
                </h2>
                <p className="text-lg text-indigo-100 leading-relaxed mb-8">
                  Deine Website wird noch stärker, wenn sie mit Treatflow verbunden ist.
                  Buchungslink, Behandlungen und Öffnungszeiten können direkt aus Treatflow eingebunden werden.
                </p>
                <div className="space-y-4">
                  {[
                    'Online-Buchungslink direkt eingebunden',
                    'Behandlungen und Preise auf der Website',
                    'Automatische Aktualisierung möglich',
                    'Nahtloses Kundenerlebnis vom Klick bis zum Termin',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-indigo-200 flex-shrink-0" />
                      <span className="text-indigo-50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <Gift className="h-8 w-8 text-indigo-200" />
                  <h3 className="text-2xl font-bold">Treatflow-Kunden-Vorteil</h3>
                </div>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  Als Treatflow-Kunde erhältst du bei Beauftragung einer Website zusätzlich:
                </p>
                <div className="bg-white/15 rounded-xl p-6 mb-6">
                  <div className="text-3xl font-bold mb-1">200 Euro</div>
                  <div className="text-indigo-200 font-medium">
                    Treatflow-Guthaben geschenkt
                  </div>
                </div>
                <p className="text-sm text-indigo-200">
                  Einlösbar für dein Treatflow-Abo. So sparst du zusätzlich bei deiner Studio-Software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preis-Bereich */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Transparente Preise, keine versteckten Kosten
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Wir glauben an faire, klare Preise. Kein Kleingedrucktes.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl border-2 border-indigo-200 p-8 lg:p-10 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-indigo-600 text-white px-6 py-1.5 rounded-full text-sm font-semibold">
                  Individuelles Website-Projekt
                </div>
              </div>
              <div className="text-center mb-8 pt-4">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-lg text-gray-500">ab</span>
                  <span className="text-5xl lg:text-6xl font-bold text-gray-900">1.000</span>
                  <span className="text-2xl text-gray-500">Euro</span>
                </div>
                <p className="text-gray-500 mt-2">Einmalig. Kein Abo für die Website-Erstellung.</p>
              </div>
              <div className="space-y-4 mb-8">
                {[
                  'Individuelles Design nach deinen Wünschen',
                  'Responsive auf allen Geräten',
                  'SEO-Grundoptimierung',
                  'Conversion-optimierter Aufbau',
                  'Kontakt- und Buchungsintegration',
                  'Bis zu 5 Unterseiten inklusive',
                  'Impressum und Datenschutz',
                  'SSL-Verschlüsselung',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 mb-8 border border-indigo-100">
                <div className="flex items-center gap-3">
                  <Gift className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-indigo-700">Treatflow-Kunden:</span>{' '}
                    <span className="text-indigo-600">200 Euro Treatflow-Guthaben inklusive</span>
                  </div>
                </div>
              </div>
              <a
                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 text-center shadow-md hover:shadow-lg"
              >
                Website-Projekt anfragen
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </a>
              <p className="text-center text-sm text-gray-500 mt-4">
                Unverbindliches Erstgespräch. Wir beraten dich kostenlos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              So entsteht deine Studio-Website
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Von der ersten Idee bis zur fertigen Website – in vier einfachen Schritten.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Erstgespräch',
                desc: 'Wir lernen dein Studio kennen, verstehen deine Ziele und besprechen den Umfang.',
              },
              {
                step: '02',
                title: 'Konzept & Design',
                desc: 'Wir erstellen ein individuelles Design-Konzept, das zu deiner Marke passt.',
              },
              {
                step: '03',
                title: 'Umsetzung',
                desc: 'Deine Website wird professionell entwickelt und mit deinen Inhalten bestückt.',
              },
              {
                step: '04',
                title: 'Launch',
                desc: 'Nach deiner Freigabe geht die Website live. Wir unterstützen dich beim Go-Live.',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-indigo-100 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <WebsiteFAQSection faqs={faqs} />

      {/* Finaler CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Bereit für deine professionelle Studio-Website?
          </h2>
          <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
            Lass uns gemeinsam die perfekte Website für dein Studio bauen.
            Unverbindlich und kostenlos beraten lassen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Kostenlos beraten lassen
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            <a
              href="mailto:hello@treatflow.io?subject=Website-Projekt%20anfragen"
              className="border-2 border-white text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
            >
              Anfrage per E-Mail
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-x-8 gap-y-3 text-white/90 text-sm">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-indigo-200" />
              <span>Unverbindlich</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-indigo-200" />
              <span>Individuelle Beratung</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-indigo-200" />
              <span>Spezialisiert auf Beauty-Studios</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function WebsiteFAQSection({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Häufige Fragen zur Website-Erstellung
          </h2>
          <p className="text-lg text-gray-600">
            Alles, was du vor der Beauftragung wissen solltest.
          </p>
        </div>
        <WebsiteFAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}

function WebsiteFAQAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
  'use client';
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <WebsiteFAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

function WebsiteFAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-2xl border border-gray-200 hover:border-indigo-200 transition-all duration-300 overflow-hidden">
      <summary className="w-full px-8 py-6 text-left flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
        <ChevronDown className="h-5 w-5 text-indigo-600 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="px-8 pb-6">
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}
