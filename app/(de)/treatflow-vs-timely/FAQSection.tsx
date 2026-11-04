'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Was ist Timely und für wen ist es gedacht?',
    answer:
      'Timely ist eine Salon-Management-Software aus Neuseeland, die sich an Friseure, Kosmetikstudios und Spas weltweit richtet. Der Fokus liegt auf Terminbuchung, Kassensystem und Marketing-Tools.',
  },
  {
    question: 'Was ist der Unterschied zwischen Treatflow und Timely?',
    answer:
      'Treatflow ist spezialisiert auf Kosmetikstudios im deutschsprachigen Raum mit NiSV-Dokumentation, digitalen Anamnesebögen und Behandlungsdokumentation. Timely ist eine internationale Salon-Software ohne spezialisierte Kosmetik-Funktionen und ohne deutschen Support.',
  },
  {
    question: 'Hat Timely eine Behandlungsdokumentation?',
    answer:
      'Nein. Timely bietet keine integrierte Behandlungsdokumentation, keine NiSV-konformen Formulare und keine Vorher-Nachher-Foto-Dokumentation für Behandlungsverläufe.',
  },
  {
    question: 'Kann ich von Timely zu Treatflow wechseln?',
    answer:
      'Ja. Unser Team unterstützt dich kostenlos beim Umzug deiner Kundendaten. Du kannst Treatflow 14 Tage kostenlos testen und in Ruhe vergleichen.',
  },
  {
    question: 'Ist Timely auf Deutsch verfügbar?',
    answer:
      'Timely ist primär auf Englisch ausgerichtet. Support und Dokumentation sind auf Englisch. Treatflow hingegen ist komplett auf Deutsch verfügbar - Software, Support und alle Formulare.',
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
            Treatflow vs. Timely: Häufige Fragen
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
