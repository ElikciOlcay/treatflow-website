import {
  Star,
  ArrowRight,
  ChevronDown,
  CalendarDays,
  Users,
  FileText,
  CheckCircle,
  Sparkles,
  Zap,
  ClipboardList,
  Camera,
  Shield
} from "lucide-react";
import Link from 'next/link';
import Script from 'next/script';
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";

// Strukturierte Daten für SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Treatflow",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "description": "Professionelle Kosmetikstudio Software mit Terminkalender, Online-Buchungen, Kundenverwaltung und Behandlungsdokumentation",
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
    "Kundenverwaltung",
    "Formulare für Anamnesen",
    "Behandlungsdokumentation",
    "NiSV konform"
  ]
};

export default function Home() {
  return (
    <>
      {/* Strukturierte Daten */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <img
                    src="/images/logos/treatflow-logo.svg"
                    alt="Treatflow Logo"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <div className="relative group">
                  <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                    Funktionen
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link href="/terminkalender" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                        Terminkalender
                      </Link>
                      <Link href="/kundenverwaltung" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                        Kundenverwaltung
                      </Link>
                      <Link href="/formulare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                        Formulare
                      </Link>
                      <Link href="/behandlungsdokumentation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                        Dokumentation
                      </Link>
                      <Link href="/online-buchungen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                        Online-Buchungen
                      </Link>
                      <Link href="/nachrichtenautomatisierung" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                        Nachrichtenautomatisierung
                      </Link>
                      <Link href="/shop" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                        Shop
                      </Link>
                    </div>
                  </div>
                </div>
                <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Preise</a>
                <Link href="/blog" className="text-gray-600 hover:text-indigo-600 transition-colors">Blog</Link>
                <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">Referenzen</a>
                <Link href="/kontakt" className="text-gray-600 hover:text-indigo-600 transition-colors">Kontakt</Link>
                <a
                  href="https://app.treatflow.io/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Kostenlos testen
                </a>
              </div>
              <MobileMenu />
            </div>
          </div>
        </nav>

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
              <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                Terminkalender mit Online-Buchung, Formulare für Anamnesen & Behandlungsdokumentation.
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
            <div className="max-w-6xl mx-auto">
              <img
                src="/images/mockups/dashboard-main.png"
                alt="Treatflow Dashboard - Hauptansicht mit Kundenverwaltung und Terminübersicht"
                className="w-full h-auto shadow-lg"
              />
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
                    Deine Kunden buchen direkt über deinen Buchungslink.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Buchungslink für Kunden</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Mehrere Kalenderansichten</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">15-Min Zeitraster</span>
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
                <h4 className="font-bold text-gray-900 mb-2">Kundenverwaltung</h4>
                <p className="text-sm text-gray-600">Skalierbare Kundendatenbank mit Import-Funktion</p>
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

        {/* Einfache Visual Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                So einfach funktioniert Treatflow
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sieh selbst, wie übersichtlich und benutzerfreundlich dein neuer Studio-Alltag wird.
              </p>
            </div>

            {/* Nur das Dashboard Mockup */}
            <div className="max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/mockups/dashboard-main.png"
                  alt="Treatflow Dashboard - Hauptansicht mit Kundenverwaltung und Terminübersicht"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Einfacher CTA */}
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

        {/* Nur die wichtigsten Sektionen beibehalten */}
        <PricingSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </>
  );
}
