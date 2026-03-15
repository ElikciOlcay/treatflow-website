import {
  Star,
  ArrowRight,
  CalendarDays,
  Users,
  FileText,
  CheckCircle,
  Sparkles,
  Zap,
  ClipboardList,
  Camera,
  Shield,
  Play,
  Palette,
  Gem,
  Eye,
  Pen,
  Stethoscope,
  Waves,
  Link2,
  ClipboardCheck,
  Bell,
  BookOpen
} from "lucide-react";
import Link from 'next/link';
import Script from 'next/script';
import Navigation from "./components/Navigation";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

// Strukturierte Daten für SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Treatflow",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "description": "Software für Kosmetikstudio: Terminkalender, digitale Kundenkartei, Online-Buchungen, SMS-Benachrichtigungen und Behandlungsdokumentation",
  "url": "https://www.treatflow.io",
  "author": {
    "@type": "Organization",
    "name": "Treatflow",
    "url": "https://www.treatflow.io"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Basic",
      "price": "39",
      "priceCurrency": "EUR",
      "billingIncrement": "P1M",
      "description": "Perfekt für kleine Studios und Einzelunternehmer"
    },
    {
      "@type": "Offer",
      "name": "Booking",
      "price": "59",
      "priceCurrency": "EUR",
      "billingIncrement": "P1M",
      "description": "Ideal für wachsende Studios mit Online-Buchung"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "500"
  },
  "featureList": [
    "Terminkalender mit Online-Buchung",
    "SMS-Benachrichtigungen",
    "Digitale Kundenkartei und Kundenverwaltung",
    "Formulare für Anamnesen",
    "Behandlungsdokumentation",
    "NiSV konform"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist Treatflow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treatflow ist eine Software für Kosmetikstudios mit Terminkalender, digitaler Kundenkartei, Online-Buchungen, Anamnese-Formularen und Behandlungsdokumentation. Die App ist NiSV-konform und wird von über 500 Kosmetikerinnen genutzt. Made in Austria."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Software braucht ein Kosmetikstudio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Kosmetikstudio braucht Software für Terminverwaltung (Terminplaner), digitale Kundenkartei, Online-Buchung, Anamnesebogen und Behandlungsdokumentation. Treatflow vereint alle Funktionen in einer App und ist speziell für Beauty-Studios entwickelt."
      }
    },
    {
      "@type": "Question",
      "name": "Kostet die Kundenkartei für Kosmetikstudios etwas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treatflow bietet eine digitale Kundenkartei inklusive. Du kannst 14 Tage kostenlos testen. Danach gibt es Tarife ab 39 Euro pro Monat (Basic) bzw. 59 Euro mit Online-Buchung (Booking)."
      }
    },
    {
      "@type": "Question",
      "name": "Ist Treatflow NiSV-konform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Die Behandlungsdokumentation und Formulare sind NiSV-konform und rechtssicher für Kosmetikstudios in Deutschland und Österreich."
      }
    },
    {
      "@type": "Question",
      "name": "Wie buchen Kunden online beim Kosmetikstudio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mit Treatflow erhältst du einen persönlichen Buchungslink. Kunden wählen dort Termin und Behandlung; der Kalender wird automatisch aktualisiert. Erinnerungen und Nachrichten können automatisiert werden, was No-Shows reduziert."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich die Kosmetikstudio-Software kostenlos testen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Treatflow kannst du 14 Tage kostenlos und unverbindlich testen – ohne Kreditkarte. So siehst du, ob Terminplaner, Kundenkartei, Online-Buchung und Behandlungsdokumentation zu deinem Studio passen."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* Strukturierte Daten: SoftwareApplication + FAQPage (Google Snippets + KI) */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  NEU
                </div>
                <span className="text-gray-600 text-lg font-medium">NiSV konform dokumentieren</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
                Kosmetikstudio Software für mehr Zeit mit deinen{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Kunden</span>{" "}
                - weniger Papierkram
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-4 leading-relaxed max-w-2xl mx-auto">
                Kalender, Kunden, Buchungen, Dokumentation – alles in einer App.
              </p>
              <p className="text-base text-gray-500 mb-10">
                Perfekt für Kosmetikstudios, Laser-Studios, Permanent Makeup und ästhetische Behandlungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a
                  href="https://app.treatflow.io/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transform hover:-translate-y-1"
                >
                  Kostenlos testen
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
                <a
                  href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-gray-200 text-gray-700 px-10 py-5 rounded-2xl text-xl font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Beratung buchen
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full border-3 border-white shadow-lg"></div>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-3 border-white shadow-lg"></div>
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full border-3 border-white shadow-lg"></div>
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white font-bold text-sm">
                      +500
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-lg font-semibold text-gray-900">500+ Kosmetikerinnen</div>
                    <div className="text-sm text-gray-600">vertrauen bereits auf Treatflow</div>
                  </div>
                </div>
                <div className="flex items-center bg-white px-4 py-3 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Bewertung</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="max-w-5xl mx-auto">
              <img
                src="/images/mockups/dashboard-main.png"
                alt="Treatflow Dashboard auf einem Tablet - Kundenverwaltung und Terminübersicht"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Branchen-Cluster Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Für welche Studios ist Treatflow gemacht?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Treatflow ist die All-in-One Software für Beauty-Studios, ästhetische Praxen und viele weitere Branchen – mit Funktionen, die zu deinem Workflow passen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {[
                { href: '/kosmetikstudio-software', icon: Sparkles, label: 'Kosmetikstudios', desc: 'Termine, Kunden und Formulare für deinen Studio-Alltag.', color: 'text-indigo-600 bg-indigo-100', border: 'hover:border-indigo-200' },
                { href: '/laser-haarentfernung-software', icon: Zap, label: 'Laser & IPL', desc: 'NiSV-konforme Dokumentation und Einwilligungen.', color: 'text-blue-600 bg-blue-100', border: 'hover:border-blue-200' },
                { href: '/permanent-makeup-software', icon: Palette, label: 'Permanent Makeup', desc: 'Fotodokumentation und digitale Einwilligungen.', color: 'text-rose-600 bg-rose-100', border: 'hover:border-rose-200' },
                { href: '/nagelstudio-software', icon: Gem, label: 'Nagelstudios', desc: 'Kundenvorlieben speichern und online buchbar.', color: 'text-pink-600 bg-pink-100', border: 'hover:border-pink-200' },
                { href: '/lash-studio-software', icon: Eye, label: 'Lash Studios', desc: 'Refill-Planung und Wimpern-Details pro Kundin.', color: 'text-violet-600 bg-violet-100', border: 'hover:border-violet-200' },
                { href: '/tattoo-studio-software', icon: Pen, label: 'Tattoo Studios', desc: 'Einwilligungen und Kundenverwaltung digital.', color: 'text-gray-700 bg-gray-200', border: 'hover:border-gray-300' },
                { href: '/aesthetische-medizin-software', icon: Stethoscope, label: 'Ästhetische Medizin', desc: 'Praxisverwaltung für Filler, Botox und mehr.', color: 'text-teal-600 bg-teal-100', border: 'hover:border-teal-200' },
                { href: '/spa-wellness-software', icon: Waves, label: 'Spa & Wellness', desc: 'Gästeverwaltung und Therapeuten-Kalender.', color: 'text-cyan-600 bg-cyan-100', border: 'hover:border-cyan-200' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`bg-white p-6 rounded-xl border border-gray-100 ${item.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg block group`}
                >
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white border border-dashed border-gray-300 rounded-xl px-6 py-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600"><Sparkles className="h-4 w-4" /></div>
                  <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600"><Users className="h-4 w-4" /></div>
                  <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center text-lime-600"><CheckCircle className="h-4 w-4" /></div>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Und viele mehr</span> – Treatflow passt sich an jede Branche an, die mit Terminen, Kunden und Dokumentation arbeitet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Kompakte Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <Sparkles className="h-4 w-4" />
                Alles in einer App
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Alles was du für deinen
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Studio-Erfolg</span> brauchst
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Schluss mit Zettelwirtschaft und Doppelarbeit. Treatflow bringt Ordnung
                in deinen Arbeitsalltag und lässt dich entspannter arbeiten.
              </p>
            </div>

            {/* Hauptfeatures - 3 Spalten */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Online Buchungen */}
              <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CalendarDays className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Online-Buchungskalender
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Professioneller Kalender mit Wochen-, Tages- und Monatsansicht.
                    Deine Kunden buchen direkt über deinen Buchungslink - mit automatischer SMS-Bestätigung.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Buchungslink für Kunden</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">SMS- und E-Mail-Bestätigungen</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Erinnerungen per E-Mail und SMS</span>
                    </div>
                  </div>
                  <Link
                    href="/terminkalender"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium group"
                  >
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Formulare */}
              <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ClipboardList className="h-8 w-8 text-white" />
                    </div>
                    <div className="ml-3 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
                      <Zap className="h-3 w-3 inline mr-1" />
                      KI
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Smarte Formulare
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Professionelle Formulare für alle Behandlungen. Drag & Drop Editor oder
                    KI-Generator für individuelle Anpassungen.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Fertige Vorlagen</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">KI-Formular-Generator</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Drag & Drop Editor</span>
                    </div>
                  </div>
                  <Link
                    href="/formulare"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium group"
                  >
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Behandlungsdokumentation */}
              <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <div className="ml-3 bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
                      <Zap className="h-3 w-3 inline mr-1" />
                      KI
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Dokumentation
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Halte jede Behandlung fest - mit Fotos, Notizen und allen wichtigen Details.
                    Unsere KI schreibt automatisch mit.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Automatische Notizen</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Foto-Management</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Rechtssicher</span>
                    </div>
                  </div>
                  <Link
                    href="/behandlungsdokumentation"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group"
                  >
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Kompakte Zusatzfeatures - 4 Spalten */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Kundenverwaltung */}
              <Link href="/kundenverwaltung" className="bg-white p-6 rounded-xl border border-gray-100 hover:border-green-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg block group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Kundenverwaltung & Kundenkartei</h4>
                <p className="text-sm text-gray-600">Digitale Kundenkartei Kosmetik: Kundendatenbank mit Import-Funktion</p>
              </Link>

              {/* Foto-Management */}
              <Link href="/behandlungsdokumentation" className="bg-white p-6 rounded-xl border border-gray-100 hover:border-pink-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg block group">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Foto-Management</h4>
                <p className="text-sm text-gray-600">Vorher-Nachher Fotos sicher speichern</p>
              </Link>

              {/* Sicherheit */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">100% Sicher</h4>
                <p className="text-sm text-gray-600">DSGVO-konform und verschlüsselt</p>
              </div>

              {/* NiSV Konform */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-pointer">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">NiSV Konform</h4>
                <p className="text-sm text-gray-600">Rechtssichere Dokumentation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature-Cluster Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Alles was dein Studio braucht – in einer Plattform
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Entdecke die wichtigsten Funktionen im Detail und erfahre, wie sie deinen Alltag vereinfachen.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                { href: '/online-terminbuchung-kosmetikstudio', icon: Link2, label: 'Online-Terminbuchung', desc: 'Kunden buchen 24/7 über deinen persönlichen Link.', gradient: 'from-orange-500 to-red-600' },
                { href: '/digitale-anamnese-kosmetikstudio', icon: ClipboardCheck, label: 'Digitale Anamnese', desc: 'Formulare vorab digital ausfüllen und unterschreiben.', gradient: 'from-emerald-500 to-teal-600' },
                { href: '/sms-erinnerungen-kosmetikstudio', icon: Bell, label: 'SMS-Erinnerungen', desc: 'No-Shows um bis zu 80% reduzieren.', gradient: 'from-purple-500 to-pink-600' },
                { href: '/behandlungsdokumentation-kosmetikstudio', icon: FileText, label: 'Dokumentation', desc: 'Behandlungen digital und NiSV-konform festhalten.', gradient: 'from-blue-500 to-indigo-600' },
                { href: '/kundenverwaltung', icon: Users, label: 'Kundenverwaltung', desc: 'Digitale Kundenkartei mit Behandlungshistorie.', gradient: 'from-green-500 to-emerald-600' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group bg-gray-50 hover:bg-white p-6 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg block"
                >
                  <div className={`w-11 h-11 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{item.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <Play className="h-4 w-4" />
                Video Demo
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                So einfach funktioniert Treatflow
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sieh in 2 Minuten, wie Treatflow deinen Studio-Alltag vereinfacht – von der Online-Buchung bis zur Dokumentation.
              </p>
            </div>

            {/* Video Platzhalter */}
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-indigo-900 aspect-video group cursor-pointer">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-2">Produktvideo</h3>
                  <p className="text-white/70 text-lg">Kommt bald - bleib gespannt!</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                  <div className="h-full w-0 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Bereit für den Test? Probiere Treatflow 14 Tage kostenlos aus.
              </p>
              <a
                href="https://app.treatflow.io/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transform hover:-translate-y-1"
              >
                Jetzt kostenlos testen
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </div>
          </div>
        </section>

        {/* SEO-Keyword-Textblock */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
              Warum moderne Kosmetikstudios auf digitale Software setzen
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Der Alltag im Kosmetikstudio ist anspruchsvoll: Termine koordinieren, Kunden betreuen, Behandlungen dokumentieren und gleichzeitig den Überblick über das gesamte Business behalten. Viele Studios arbeiten noch mit Papierkalender, WhatsApp-Nachrichten und handgeschriebenen Karteikarten – das kostet wertvolle Zeit, die für die eigentliche Arbeit am Kunden fehlt.
              </p>
              <p>
                Eine spezialisierte Studio Software wie Treatflow löst genau diese Probleme. Online-Buchungen ermöglichen Kunden, rund um die Uhr Termine zu buchen. Automatische Erinnerungen per SMS reduzieren No-Shows. Digitale Anamnesebögen ersetzen den Papierstapel. Und die Behandlungsdokumentation erfüllt alle Anforderungen – auch für NiSV-pflichtige Geräte. Das Ergebnis: weniger Verwaltung, mehr Zeit für das, was zählt – deine Kunden.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <Link href="/blog/beste-kosmetikstudio-software-2026" className="hover:text-indigo-600 transition-colors underline underline-offset-4">Beste Kosmetikstudio Software 2026</Link>
              <Link href="/blog/online-buchungssystem-vorteile" className="hover:text-indigo-600 transition-colors underline underline-offset-4">Vorteile eines Online-Buchungssystems</Link>
              <Link href="/blog/behandlungsdokumentation-nisv-konform" className="hover:text-indigo-600 transition-colors underline underline-offset-4">NiSV-konform dokumentieren</Link>
            </div>
          </div>
        </section>

        {/* Trust / Social Proof Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Über 500 Studios vertrauen bereits auf Treatflow
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Von Einzelunternehmerinnen bis zu Studios mit mehreren Mitarbeitern – Treatflow wächst mit deinem Business.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '500+', label: 'Studios', desc: 'nutzen Treatflow täglich', icon: Users },
                { value: '4.9/5', label: 'Bewertung', desc: 'von zufriedenen Kunden', icon: Star },
                { value: '100%', label: 'DSGVO-konform', desc: 'EU-Hosting, verschlüsselt', icon: Shield },
                { value: 'AT', label: 'Made in Austria', desc: 'Entwickelt in Salzburg', icon: CheckCircle },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{item.value}</div>
                  <div className="font-semibold text-gray-700 mb-1">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PricingSection />
        <TestimonialsSection />
        <FAQSection />

        {/* Finaler CTA */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Bereit, deinen Studio-Alltag zu vereinfachen?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-x-8 gap-y-3 mb-10 text-white/90">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>14 Tage kostenlos testen</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>Keine Kreditkarte nötig</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span>In 2 Minuten startklar</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.treatflow.io/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Jetzt kostenlos starten
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
              <a
                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                Beratung buchen
              </a>
            </div>
            <p className="text-sm text-indigo-200 mt-6">Jederzeit kündbar. DSGVO-konform. Made in Austria.</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
