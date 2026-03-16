import {
  Star,
  ArrowRight,
  CalendarDays,
  Users,
  FileText,
  CheckCircle,
  Sparkles,
  Zap,
  Camera,
  Shield,
  Bell,
  Link2,
  ClipboardCheck,
  ChevronsRight
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
  "description": "Software für Kosmetikstudio: Terminkalender, digitale Kundenkartei, Online-Buchungen und Behandlungsdokumentation",
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

        {/* Hero Section - 2 Spalten: links Text, rechts Bild */}
        <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="order-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                  NEU
                </div>
                <span className="text-gray-600 text-sm font-medium">NiSV konform dokumentieren</span>
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4">
                Mehr Zeit für deine{" "}
                <span className="text-indigo-600">Kunden</span>
                {" "}– mit Treatflow
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-indigo-600 mb-4">
                Die All-in-One Software für Kosmetikstudios
              </p>
              <p className="text-lg lg:text-xl text-gray-600 mb-3 leading-relaxed">
                Kalender, Kunden, Buchungen, Dokumentation – alles in einer App.
              </p>
              <p className="text-sm text-gray-500 mb-8">
                Perfekt für Kosmetikstudios, Laser-Studios, Permanent Makeup und ästhetische Behandlungen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <a
                  href="https://app.treatflow.io/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Kostenlos testen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
                >
                  Beratung buchen
                </a>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full border-2 border-white shadow-md flex items-center justify-center text-indigo-600 text-xs font-semibold">1</div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full border-2 border-white shadow-md flex items-center justify-center text-gray-600 text-xs font-semibold">2</div>
                    <div className="w-10 h-10 bg-indigo-100 rounded-full border-2 border-white shadow-md flex items-center justify-center text-indigo-600 text-xs font-semibold">3</div>
                    <div className="w-10 h-10 bg-gray-100 rounded-full border-2 border-white shadow-md flex items-center justify-center text-gray-700 font-bold text-xs">
                      +500
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold text-gray-900">500+ Studios</div>
                    <div className="text-xs text-gray-500">vertrauen auf Treatflow</div>
                  </div>
                </div>
                <div className="flex items-center bg-white px-3 py-2 rounded-xl shadow-md border border-gray-100">
                  <div className="flex text-amber-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">4.9/5</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-2">
              <img
                src="/images/hero-treatflow-calendar.png"
                alt="Treatflow Kalender im modernen Kosmetikstudio"
                className="w-full rounded-2xl shadow-xl object-cover aspect-[4/3] lg:aspect-auto lg:min-h-[400px]"
              />
            </div>
          </div>
        </section>

        {/* Funktionen Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4" />
                Alles in einer App
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Alles was du für deinen
                <span className="text-indigo-600"> Studio-Erfolg</span> brauchst
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Schluss mit Zettelwirtschaft und Doppelarbeit. Treatflow bringt Ordnung
                in deinen Arbeitsalltag.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { href: '/online-terminbuchung-kosmetikstudio', icon: CalendarDays, label: 'Online-Buchungskalender', desc: 'Kunden buchen 24/7 über deinen persönlichen Link. Automatische SMS-Bestätigungen und Erinnerungen.', color: 'bg-indigo-100 text-indigo-600', bullets: ['Buchungslink für Kunden', 'SMS- und E-Mail-Bestätigungen', 'Erinnerungen automatisch'] },
                { href: '/digitale-anamnese-kosmetikstudio', icon: ClipboardCheck, label: 'Smarte Formulare', desc: 'Professionelle Anamnese- und Einwilligungsformulare. KI-Generator und Drag & Drop Editor.', color: 'bg-orange-100 text-orange-600', bullets: ['Fertige Vorlagen', 'KI-Formular-Generator', 'Drag & Drop Editor'], badge: 'KI' },
                { href: '/behandlungsdokumentation-kosmetikstudio', icon: FileText, label: 'Dokumentation', desc: 'Halte jede Behandlung fest - mit Fotos, Notizen und KI-Zusammenfassungen. NiSV-konform.', color: 'bg-blue-100 text-blue-600', bullets: ['KI-Notizen automatisch', 'Foto-Management', 'NiSV-konform'], badge: 'KI' },
                { href: '/kundenverwaltung', icon: Users, label: 'Kundenverwaltung', desc: 'Digitale Kundenkartei mit kompletter Behandlungshistorie, Vorlieben und Import-Funktion.', color: 'bg-emerald-100 text-emerald-600', bullets: ['Unbegrenzt Kunden', 'Behandlungshistorie', 'Daten-Import'] },
                { href: '/sms-erinnerungen-kosmetikstudio', icon: Bell, label: 'SMS-Erinnerungen', desc: 'Reduziere No-Shows um bis zu 80% mit automatischen Erinnerungen per SMS und E-Mail.', color: 'bg-rose-100 text-rose-600', bullets: ['Automatisch versenden', 'SMS und E-Mail', 'Bis zu 80% weniger No-Shows'] },
                { href: '/behandlungsdokumentation', icon: Camera, label: 'Foto-Management', desc: 'Vorher-Nachher Fotos sicher speichern und Behandlungsverläufe visuell dokumentieren.', color: 'bg-rose-100 text-rose-600', bullets: ['Vorher-Nachher Fotos', 'Sichere Speicherung', 'Kundenzuordnung'] },
                { href: '/nisv-dokumentation', icon: Shield, label: 'NiSV-Dokumentation', desc: 'Rechtssichere Dokumentation für NiSV-pflichtige Geräte. DSGVO-konform und verschlüsselt.', color: 'bg-teal-100 text-teal-600', bullets: ['NiSV-konform', 'DSGVO-konform', 'EU-Hosting'] },
                { href: '/nachrichtenautomatisierung', icon: Zap, label: 'Automatisierungen', desc: 'Geburtstagsnachrichten, Follow-ups und Terminerinnerungen vollautomatisch versenden.', color: 'bg-blue-100 text-blue-600', bullets: ['Geburtstagsnachrichten', 'Follow-up nach Behandlung', 'Vollautomatisch'] },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    {'badge' in item && item.badge && (
                      <div className="ml-2 bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-full">
                        <Zap className="h-3 w-3 inline mr-0.5" />
                        {item.badge}
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                  <div className="space-y-2">
                    {item.bullets.map((b, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{b}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
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

            {/* Slider-Hinweis */}
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-4">
              <ChevronsRight className="h-4 w-4" aria-hidden />
              <span>Wische zum Durchblättern</span>
              <ChevronsRight className="h-4 w-4" aria-hidden />
            </div>

            {/* Branchen-Slider mit Bildern */}
            <div className="mb-10 -mx-4 sm:mx-0 relative">
              <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-4 pb-4 px-4 sm:px-0 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {[
                  { href: '/kosmetikstudio-software', label: 'Kosmetikstudios', image: '/images/branchen/hero-kosmetikstudio.jpg' },
                  { href: '/laser-haarentfernung-software', label: 'Laser & IPL', image: '/images/branchen/hero-laser.jpg' },
                  { href: '/permanent-makeup-software', label: 'Permanent Makeup', image: '/images/branchen/hero-pmu.jpg' },
                  { href: '/nagelstudio-software', label: 'Nagelstudios', image: '/images/branchen/hero-nagelstudio.jpg' },
                  { href: '/lash-studio-software', label: 'Lash Studios', image: '/images/branchen/hero-lash.jpg' },
                  { href: '/tattoo-studio-software', label: 'Tattoo Studios', image: '/images/branchen/hero-tattoo.jpg' },
                  { href: '/aesthetische-medizin-software', label: 'Ästhetische Medizin', image: '/images/branchen/hero-aesthetik.jpg' },
                  { href: '/spa-wellness-software', label: 'Spa & Wellness', image: '/images/branchen/hero-spa.jpg' },
                  { href: '/massage-software', label: 'Massage', image: '/images/branchen/hero-massage.jpg' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex-shrink-0 w-[320px] sm:w-[400px] lg:w-[480px] snap-center group block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-white font-semibold text-lg drop-shadow-sm">{item.label}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="absolute right-0 top-0 bottom-4 w-16 sm:w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none rounded-r-2xl" aria-hidden />
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white border border-dashed border-gray-300 rounded-2xl px-6 py-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600"><Sparkles className="h-4 w-4" /></div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600"><Users className="h-4 w-4" /></div>
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600"><CheckCircle className="h-4 w-4" /></div>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Und viele mehr</span> – Treatflow passt sich an jede Branche an, die mit Terminen, Kunden und Dokumentation arbeitet.
                </p>
              </div>
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
                <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
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

        {/* SEO-Keyword-Textblock */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
              Warum moderne Kosmetikstudios auf digitale Software setzen
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Der Alltag im Kosmetikstudio ist anspruchsvoll: Termine koordinieren, Kunden betreuen, Behandlungen dokumentieren, Produkte über den <Link href="/shop" className="text-indigo-600 hover:underline">Online-Shop</Link> verkaufen und gleichzeitig den Überblick über das gesamte Business behalten. Viele Studios arbeiten noch mit Papierkalender, WhatsApp-Nachrichten und handgeschriebenen Karteikarten – das kostet wertvolle Zeit, die für die eigentliche Arbeit am Kunden fehlt.
              </p>
              <p>
                Eine spezialisierte Studio Software wie Treatflow löst genau diese Probleme. Der <Link href="/terminkalender" className="text-indigo-600 hover:underline">Terminkalender</Link> mit <Link href="/online-buchungen" className="text-indigo-600 hover:underline">Online-Buchungen</Link> ermöglicht Kunden, rund um die Uhr Termine zu buchen. Automatische Erinnerungen per SMS reduzieren No-Shows. Digitale <Link href="/formulare" className="text-indigo-600 hover:underline">Anamnesebögen und Formulare</Link> ersetzen den Papierstapel. Und die Behandlungsdokumentation erfüllt alle Anforderungen – auch für NiSV-pflichtige Geräte. Das Ergebnis: weniger Verwaltung, mehr Zeit für das, was zählt – deine Kunden.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <Link href="/kosmetikstudio-software-vergleich" className="hover:text-indigo-600 transition-colors underline underline-offset-4">Software-Vergleich</Link>
              <Link href="/blog/beste-kosmetikstudio-software-2026" className="hover:text-indigo-600 transition-colors underline underline-offset-4">Beste Kosmetikstudio Software 2026</Link>
              <Link href="/blog/online-buchungssystem-vorteile" className="hover:text-indigo-600 transition-colors underline underline-offset-4">Vorteile eines Online-Buchungssystems</Link>
              <Link href="/blog/behandlungsdokumentation-nisv-konform" className="hover:text-indigo-600 transition-colors underline underline-offset-4">NiSV-konform dokumentieren</Link>
            </div>
          </div>
        </section>

        {/* Finaler CTA */}
        <section className="py-20 bg-indigo-600" aria-label="Call-to-Action">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Bereit, deinen Studio-Alltag zu vereinfachen?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-x-8 gap-y-3 mb-10 text-white/90">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-200" />
                <span>14 Tage kostenlos testen</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-200" />
                <span>Keine Kreditkarte nötig</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-200" />
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
