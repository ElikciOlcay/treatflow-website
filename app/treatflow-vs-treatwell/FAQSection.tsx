'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Was ist der Unterschied zwischen Treatflow und Treatwell?',
    answer:
      'Treatflow ist eine Studio-Software speziell für Kosmetikstudios - mit Kundenkartei, Behandlungsdokumentation, Formularen und Online-Buchung. Du zahlst einen festen Monatspreis ohne Provisionen. Treatwell ist ein Marktplatz (wie Booking.com für Beauty), wo Kunden über die Treatwell-Plattform buchen und du bis zu 35% Provision auf Neukunden zahlst.',
  },
  {
    question: 'Nimmt Treatflow Provisionen auf Buchungen?',
    answer:
      'Nein, niemals. Treatflow arbeitet mit transparenten Festpreisen: Basic ab 39 Euro/Monat, Booking ab 59 Euro/Monat. Es fallen keine Provisionen, Transaktionsgebühren oder versteckten Kosten an - egal wie viele Kunden du hast.',
  },
  {
    question: 'Wie hoch sind die Provisionen bei Treatwell?',
    answer:
      'Treatwell berechnet bis zu 35% Provision auf die erste Buchung eines Neukunden über den Marktplatz. Zusätzlich fallen 2% Gebühr auf Online-Vorauszahlungen an. Bei 15 Neukunden pro Monat mit durchschnittlich 80 Euro Behandlungswert sind das über 400 Euro extra pro Monat.',
  },
  {
    question: 'Hat Treatwell eine Behandlungsdokumentation?',
    answer:
      'Nein. Treatwell ist primär eine Buchungsplattform ohne integrierte Behandlungsdokumentation oder NiSV-konforme Formulare. Wenn du dokumentationspflichtige Behandlungen anbietest (z.B. mit Laser, IPL oder anderen NiSV-pflichtigen Geräten), fehlt dir bei Treatwell diese wichtige Funktion.',
  },
  {
    question: 'Kann ich von Treatwell zu Treatflow wechseln?',
    answer:
      'Ja, der Wechsel ist unkompliziert. Wir helfen dir kostenlos beim Umzug deiner Kundendaten. Du kannst Treatflow 14 Tage kostenlos testen und beide Systeme parallel nutzen, bis du bereit bist, komplett zu wechseln.',
  },
  {
    question: 'Bekomme ich bei Treatflow auch Neukunden?',
    answer:
      'Treatflow ist kein Marktplatz, sondern gibt dir die Werkzeuge, um selbst Kunden zu gewinnen: einen professionellen Buchungslink, den du auf deiner Website, Instagram, Facebook und Google teilen kannst. Deine Kunden buchen direkt bei dir - ohne Umweg über eine Plattform.',
  },
  {
    question: 'Welche Software hat die bessere Kundenkartei?',
    answer:
      'Treatflow bietet eine deutlich umfangreichere Kundenkartei mit vollständiger Behandlungshistorie, Vorher-Nachher-Dokumentation, digitalen Anamnese-Formularen und NiSV-konformer Aufbewahrung. Treatwell bietet grundlegende Kundeninformationen und Notizen.',
  },
  {
    question: 'Ist Treatflow auch DSGVO-konform?',
    answer:
      'Ja, Treatflow ist vollständig DSGVO-konform. Alle Daten werden verschlüsselt auf EU-Servern gespeichert. Zusätzlich ist Treatflow NiSV-konform - eine Anforderung, die Treatwell nicht abdeckt.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="h-4 w-4" />
            Häufige Fragen
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Treatflow vs. Treatwell: Häufige Fragen
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-200 hover:border-indigo-200 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
