import {
  Star,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import Link from 'next/link';
import Script from 'next/script';
import FeaturesSection from "./components/FeaturesSection";
import VisualShowcase from "./components/VisualShowcase";
import ScreenshotSection from "./components/ScreenshotSection";
import ComparisonSection from "./components/ComparisonSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
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
  "url": "https://treatflow.io",
  "author": {
    "@type": "Organization",
    "name": "Treatflow",
    "url": "https://treatflow.io"
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
                  href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Demo buchen
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
                  href="https://app.treatflow.io/"
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
                  Demo buchen
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

        {/* All other sections */}
        <FeaturesSection />
        <VisualShowcase />
        <ScreenshotSection />
        <ComparisonSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
