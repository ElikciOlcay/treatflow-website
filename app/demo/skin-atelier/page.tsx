import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight, Phone, Mail, MapPin, Clock, Star, ChevronDown,
  Instagram, Sparkles, Shield, Heart, Leaf,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skin Atelier München | Ästhetische Hautbehandlungen & Laser',
  description: 'Skin Atelier München: Individuelle Hautkonzepte, Laser Haarentfernung, Hydrafacial und Microneedling. Moderne ästhetische Behandlungen in Premium-Atmosphäre.',
  robots: { index: false, follow: false },
};

const BOOKING_URL = 'https://app.treatflow.io/studio/skin-atelier-demo';

const treatments = [
  { name: 'Hydrafacial Deluxe', description: 'Tiefenreinigung, Peeling, Extraktion und intensive Hydration in einer Behandlung. Sofort sichtbar strahlende Haut.', price: '199', duration: '75 Min.', image: '/images/demo/demo-treatment-hydrafacial.png' },
  { name: 'Laser Haarentfernung', description: 'Dauerhafte Haarentfernung mit modernster Diodenlaser-Technologie. Schonend, effektiv und für alle Hauttypen geeignet.', price: '49', duration: 'ab 15 Min.', image: '/images/demo/demo-treatment-laser.png' },
  { name: 'Microneedling', description: 'Stimuliert die natürliche Kollagenproduktion der Haut. Verfeinert Poren, mildert Narben und sorgt für einen ebenmäßigen Teint.', price: '149', duration: '60 Min.', image: '/images/demo/demo-treatment-microneedling.png' },
  { name: 'Hautanalyse & Beratung', description: 'Professionelle Hautanalyse mit modernster Diagnostik. Wir erstellen dein individuelles Behandlungskonzept.', price: '0', duration: '30 Min.', image: '/images/demo/demo-treatment-skinanalysis.png' },
];

const testimonials = [
  { name: 'Laura M.', text: 'Die Hydrafacial-Behandlung war unglaublich. Meine Haut hat noch nie so gestrahlt. Das Team ist professionell und die Atmosphäre einfach wunderschön.', treatment: 'Hydrafacial Deluxe' },
  { name: 'Sophie K.', text: 'Nach 4 Sitzungen Laser bin ich endlich die lästigen Haare los. Schmerzarm, schnell und die Ergebnisse sprechen für sich. Absolute Empfehlung.', treatment: 'Laser Haarentfernung' },
  { name: 'Nina W.', text: 'Die Erstberatung hat mich sofort überzeugt. Endlich jemand, der sich Zeit nimmt und ein Konzept erstellt, das wirklich zu meiner Haut passt.', treatment: 'Hautanalyse' },
];

const faqs = [
  { q: 'Wie läuft der erste Termin ab?', a: 'Beim Ersttermin führen wir eine umfassende Hautanalyse durch und besprechen deine Wünsche und Ziele. Gemeinsam erstellen wir ein individuelles Behandlungskonzept. Die Erstberatung ist kostenlos.' },
  { q: 'Ist die Laser Haarentfernung schmerzhaft?', a: 'Dank modernster Kühltechnologie ist die Behandlung sehr gut verträglich. Die meisten Kundinnen beschreiben ein leichtes Wärmegefühl. Wir passen die Intensität individuell an.' },
  { q: 'Wie oft muss ich zur Behandlung kommen?', a: 'Das hängt von der Behandlung ab. Für Laser Haarentfernung empfehlen wir 6-8 Sitzungen im Abstand von 4-6 Wochen. Bei Facials besprechen wir den idealen Rhythmus in der Erstberatung.' },
  { q: 'Kann ich online einen Termin buchen?', a: 'Ja, über unseren Online-Buchungskalender kannst du rund um die Uhr deinen Wunschtermin auswählen. Du erhältst eine sofortige Bestätigung per E-Mail und SMS.' },
  { q: 'Welche Zahlungsmethoden akzeptiert ihr?', a: 'Wir akzeptieren Barzahlung, EC-Karte und alle gängigen Kreditkarten. Die Zahlung erfolgt nach der Behandlung.' },
];

export default function SkinAtelierDemo() {
  return (
    <div className="min-h-screen">
      <DemoBanner />
      <SkinNav />
      <HeroSection />
      <BenefitsSection />
      <TreatmentsSection />
      <CtaBanner />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <SkinFooter />
      <StickyMobileCta />
    </div>
  );
}

function DemoBanner() {
  return (
    <div className="bg-stone-900 text-white text-center py-2.5 px-4 text-sm">
      <span className="text-stone-400">Demo-Website von </span>
      <Link href="/website-fuer-kosmetikstudios" className="text-white font-medium underline underline-offset-2 hover:text-stone-200 transition-colors">Treatflow</Link>
      <span className="text-stone-400"> &mdash; </span>
      <Link href="/website-fuer-kosmetikstudios" className="text-white font-medium underline underline-offset-2 hover:text-stone-200 transition-colors">Eigene Website anfragen</Link>
    </div>
  );
}

function SkinNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <a href="#" className="text-2xl font-light tracking-[0.2em] text-stone-900 uppercase">Skin Atelier</a>
          <div className="hidden lg:flex items-center gap-10">
            <a href="#behandlungen" className="text-sm tracking-wide text-stone-600 hover:text-stone-900 transition-colors">Behandlungen</a>
            <a href="#ueber-uns" className="text-sm tracking-wide text-stone-600 hover:text-stone-900 transition-colors">Über uns</a>
            <a href="#bewertungen" className="text-sm tracking-wide text-stone-600 hover:text-stone-900 transition-colors">Bewertungen</a>
            <a href="#faq" className="text-sm tracking-wide text-stone-600 hover:text-stone-900 transition-colors">FAQ</a>
            <a href="#kontakt" className="text-sm tracking-wide text-stone-600 hover:text-stone-900 transition-colors">Kontakt</a>
          </div>
          <a href={BOOKING_URL} className="bg-stone-900 text-white px-6 py-2.5 text-sm tracking-wide hover:bg-stone-800 transition-colors">Termin buchen</a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[85vh] lg:min-h-[90vh]">
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-20 lg:py-0 order-2 lg:order-1">
            <p className="text-sm tracking-[0.3em] text-stone-400 uppercase mb-6">Ästhetische Hautbehandlungen in München</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extralight text-stone-900 leading-[1.1] mb-8">
              Deine Haut.<br /><span className="font-normal">Unser Handwerk.</span>
            </h1>
            <p className="text-lg lg:text-xl text-stone-500 leading-relaxed max-w-lg mb-10">
              Individuelle Hautkonzepte mit modernster Technologie. Für sichtbare Ergebnisse und natürliche Schönheit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BOOKING_URL} className="bg-stone-900 text-white px-10 py-4 text-sm tracking-wide hover:bg-stone-800 transition-all duration-300 text-center flex items-center justify-center gap-2">
                Termin buchen <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#behandlungen" className="border border-stone-300 text-stone-700 px-10 py-4 text-sm tracking-wide hover:border-stone-900 hover:text-stone-900 transition-all duration-300 text-center">
                Behandlungen entdecken
              </a>
            </div>
            <div className="flex items-center gap-6 sm:gap-8 mt-14 pt-8 border-t border-stone-200 flex-wrap">
              <div>
                <div className="flex text-amber-400 mb-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="text-xs text-stone-400 tracking-wide">4.9 / 5 Bewertung</p>
              </div>
              <div className="h-8 w-px bg-stone-200 hidden sm:block" />
              <div><p className="text-sm font-medium text-stone-700">500+</p><p className="text-xs text-stone-400 tracking-wide">Zufriedene Kundinnen</p></div>
              <div className="h-8 w-px bg-stone-200 hidden sm:block" />
              <div><p className="text-sm font-medium text-stone-700">Seit 2019</p><p className="text-xs text-stone-400 tracking-wide">In München</p></div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 min-h-[50vh] lg:min-h-0">
            <img src="/images/demo/demo-hero.png" alt="Skin Atelier München - Moderner Behandlungsraum" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    { icon: Sparkles, title: 'Modernste Technologie', desc: 'Wir arbeiten ausschließlich mit zertifizierten Premium-Geräten der neuesten Generation.' },
    { icon: Heart, title: 'Individuelle Konzepte', desc: 'Jede Haut ist einzigartig. Wir erstellen dein persönliches Behandlungskonzept nach professioneller Analyse.' },
    { icon: Shield, title: 'Medizinische Kompetenz', desc: 'Unser Team verfügt über medizinisch-ästhetische Ausbildung und bildet sich kontinuierlich weiter.' },
    { icon: Leaf, title: 'Premium-Atmosphäre', desc: 'Eine ruhige, private Umgebung, in der du dich vom ersten Moment an wohlfühlst.' },
  ];
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] text-stone-400 uppercase mb-4">Warum Skin Atelier</p>
          <h2 className="text-3xl lg:text-4xl font-extralight text-stone-900">Ästhetik trifft Expertise</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {benefits.map((b, i) => (
            <div key={i} className="text-center lg:text-left group">
              <div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:bg-stone-100 transition-colors">
                <b.icon className="h-6 w-6 text-stone-600" />
              </div>
              <h3 className="text-lg font-medium text-stone-900 mb-3">{b.title}</h3>
              <p className="text-sm text-stone-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentsSection() {
  return (
    <section id="behandlungen" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] text-stone-400 uppercase mb-4">Unsere Behandlungen</p>
          <h2 className="text-3xl lg:text-4xl font-extralight text-stone-900 mb-6">Behandlungen für sichtbare Ergebnisse</h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">Von Laser Haarentfernung bis Hydrafacial &ndash; jede Behandlung wird individuell auf deine Haut abgestimmt.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {treatments.map((t, i) => (
            <div key={i} className="group bg-white overflow-hidden hover:shadow-lg transition-all duration-500">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-medium text-stone-900">{t.name}</h3>
                  <div className="text-right flex-shrink-0 ml-4">
                    <p className="text-lg font-medium text-stone-900">{t.price === '0' ? 'Kostenlos' : `ab ${t.price} €`}</p>
                    <p className="text-xs text-stone-400">{t.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed mb-6">{t.description}</p>
                <a href={BOOKING_URL} className="inline-flex items-center text-sm tracking-wide text-stone-900 font-medium border-b border-stone-900 pb-0.5 hover:border-stone-400 hover:text-stone-600 transition-colors group/link">
                  Jetzt buchen <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-20 lg:py-24 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-extralight mb-6">Dein individuelles Hautkonzept wartet</h2>
        <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto">Vereinbare jetzt deine kostenlose Erstberatung. Wir analysieren deine Haut und erstellen einen Behandlungsplan, der zu dir passt.</p>
        <a href={BOOKING_URL} className="inline-flex items-center bg-white text-stone-900 px-12 py-4 text-sm tracking-wide hover:bg-stone-100 transition-colors gap-2">
          Kostenlose Erstberatung buchen <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="ueber-uns" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <img src="/images/demo/demo-about-owner.png" alt="Sarah, Gründerin von Skin Atelier München" className="w-full aspect-[4/5] object-cover object-top" loading="lazy" />
          </div>
          <div>
            <p className="text-sm tracking-[0.3em] text-stone-400 uppercase mb-4">Über uns</p>
            <h2 className="text-3xl lg:text-4xl font-extralight text-stone-900 mb-8">Schönheit beginnt mit gesunder Haut</h2>
            <div className="space-y-5 text-stone-500 leading-relaxed">
              <p>Skin Atelier wurde 2019 mit einer klaren Vision gegründet: Ästhetische Behandlungen auf höchstem Niveau, in einer Atmosphäre, die sich anfühlt wie ein Rückzugsort.</p>
              <p>Als ausgebildete medizinische Kosmetikerin mit Spezialisierung auf Lasertechnologie und ästhetische Dermatologie verbinde ich fundiertes Fachwissen mit einem feinen Gespür für natürliche Schönheit.</p>
              <p>Jede Behandlung bei uns ist individuell. Wir nehmen uns Zeit für eine umfassende Hautanalyse, bevor wir gemeinsam den idealen Behandlungsplan erstellen.</p>
            </div>
            <div className="mt-10 pt-8 border-t border-stone-100">
              <p className="text-stone-900 font-medium">Sarah Lindner</p>
              <p className="text-sm text-stone-400">Gründerin & Leitende Kosmetikerin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="bewertungen" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] text-stone-400 uppercase mb-4">Kundenstimmen</p>
          <h2 className="text-3xl lg:text-4xl font-extralight text-stone-900">Was unsere Kundinnen sagen</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 lg:p-10">
              <div className="flex text-amber-400 mb-6">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}</div>
              <p className="text-stone-600 leading-relaxed mb-8 text-sm">&ldquo;{t.text}&rdquo;</p>
              <div className="pt-6 border-t border-stone-100">
                <p className="font-medium text-stone-900 text-sm">{t.name}</p>
                <p className="text-xs text-stone-400 mt-0.5">{t.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-stone-400 uppercase mb-4">Häufige Fragen</p>
          <h2 className="text-3xl lg:text-4xl font-extralight text-stone-900">Alles, was du wissen solltest</h2>
        </div>
        <div className="space-y-0 divide-y divide-stone-200">
          {faqs.map((faq, i) => (
            <details key={i} className="group">
              <summary className="flex items-center justify-between py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-medium text-stone-900 pr-8">{faq.q}</h3>
                <ChevronDown className="h-5 w-5 text-stone-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="pb-6"><p className="text-sm text-stone-500 leading-relaxed">{faq.a}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section id="buchen" className="py-24 lg:py-32 bg-stone-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm tracking-[0.3em] text-stone-400 uppercase mb-6">Bereit?</p>
        <h2 className="text-3xl lg:text-5xl font-extralight mb-6">Dein erster Schritt zu strahlender Haut</h2>
        <p className="text-lg text-stone-300 mb-10 max-w-2xl mx-auto">Buche jetzt deinen Termin online oder ruf uns an. Wir freuen uns auf dich.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href={BOOKING_URL} className="inline-flex items-center justify-center bg-white text-stone-900 px-12 py-4 text-sm tracking-wide hover:bg-stone-100 transition-colors gap-2">
            Online Termin buchen <ArrowRight className="h-4 w-4" />
          </a>
          <a href="tel:+4989123456789" className="inline-flex items-center justify-center border border-stone-600 text-white px-12 py-4 text-sm tracking-wide hover:border-white transition-colors gap-2">
            <Phone className="h-4 w-4" /> +49 89 123 456 789
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-stone-400">
          <span>Kostenlose Erstberatung</span>
          <span className="hidden sm:block">&mdash;</span>
          <span>Online buchbar 24/7</span>
          <span className="hidden sm:block">&mdash;</span>
          <span>Sofortige Bestätigung</span>
        </div>
      </div>
    </section>
  );
}

function SkinFooter() {
  return (
    <footer id="kontakt" className="bg-stone-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div>
            <p className="text-xl font-light tracking-[0.15em] uppercase mb-6">Skin Atelier</p>
            <p className="text-sm text-stone-400 leading-relaxed">Dein Studio für ästhetische Hautbehandlungen in München. Individuelle Konzepte. Sichtbare Ergebnisse.</p>
          </div>
          <div>
            <p className="text-sm font-medium tracking-wide uppercase mb-6">Kontakt</p>
            <div className="space-y-4 text-sm text-stone-400">
              <a href="tel:+4989123456789" className="flex items-center gap-3 hover:text-white transition-colors"><Phone className="h-4 w-4 flex-shrink-0" />+49 89 123 456 789</a>
              <a href="mailto:hello@skin-atelier.de" className="flex items-center gap-3 hover:text-white transition-colors"><Mail className="h-4 w-4 flex-shrink-0" />hello@skin-atelier.de</a>
              <div className="flex items-start gap-3"><MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" /><span>Maximilianstraße 28<br />80539 München</span></div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium tracking-wide uppercase mb-6">Öffnungszeiten</p>
            <div className="space-y-2 text-sm text-stone-400">
              <div className="flex items-center gap-3"><Clock className="h-4 w-4 flex-shrink-0" /><span>Mo - Fr: 9:00 - 19:00</span></div>
              <div className="flex items-center gap-3"><Clock className="h-4 w-4 flex-shrink-0" /><span>Sa: 10:00 - 16:00</span></div>
              <p className="text-stone-500 mt-3">Termine auch außerhalb der Öffnungszeiten nach Vereinbarung.</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium tracking-wide uppercase mb-6">Folge uns</p>
            <a href="#" className="inline-flex items-center gap-3 text-sm text-stone-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" />@skin.atelier.muenchen</a>
            <div className="mt-8">
              <a href={BOOKING_URL} className="inline-flex items-center bg-white text-stone-900 px-8 py-3 text-sm tracking-wide hover:bg-stone-100 transition-colors gap-2">Termin buchen <ArrowRight className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>2026 Skin Atelier München. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6"><a href="#" className="hover:text-white transition-colors">Impressum</a><a href="#" className="hover:text-white transition-colors">Datenschutz</a></div>
        </div>
        <div className="mt-8 pt-6 border-t border-stone-800/50 text-center">
          <p className="text-xs text-stone-600">Website erstellt von{' '}<Link href="/website-fuer-kosmetikstudios" className="text-stone-400 hover:text-white transition-colors underline underline-offset-2">Treatflow</Link>{' '}&mdash; Individuelle Websites für Kosmetikstudios</p>
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-stone-200 p-3">
      <a href={BOOKING_URL} className="flex items-center justify-center gap-2 bg-stone-900 text-white w-full py-3.5 text-sm tracking-wide">
        Termin buchen <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
