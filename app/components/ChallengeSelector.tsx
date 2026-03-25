'use client';

import { useState, useRef, useCallback } from 'react';
import { Clock, UserX, Globe, FolderOpen, ArrowRight, CheckCircle } from 'lucide-react';

const challenges = [
  {
    id: 'time',
    icon: Clock,
    label: 'Ich verliere zu viel Zeit mit Papierkram',
    headline: 'Schluss mit manuellem Aufwand',
    description:
      'Treatflow digitalisiert deine Formulare, Anamnesebögen und Dokumentation. Kein Papier mehr, keine doppelte Erfassung. Alles in einer App.',
    benefits: [
      'Digitale Formulare statt Papier',
      'Automatische Dokumentation',
      'Kundendaten sofort griffbereit',
    ],
  },
  {
    id: 'noshow',
    icon: UserX,
    label: 'Kunden erscheinen nicht zu Terminen',
    headline: 'Bis zu 50% weniger No-Shows',
    description:
      'Automatische SMS- und E-Mail-Erinnerungen sorgen dafür, dass deine Kunden ihre Termine nicht vergessen. Weniger Ausfälle, mehr Umsatz.',
    benefits: [
      'Automatische Terminerinnerungen',
      'SMS & E-Mail vor dem Termin',
      'Nachbuchung leicht gemacht',
    ],
  },
  {
    id: 'online',
    icon: Globe,
    label: 'Ich möchte mehr Kunden online gewinnen',
    headline: 'Rund um die Uhr buchbar',
    description:
      'Mit deinem persönlichen Buchungslink können Kunden jederzeit Termine buchen - auch nachts und am Wochenende. Du gewinnst Neukunden, ohne etwas zu tun.',
    benefits: [
      'Online-Buchungsseite für dein Studio',
      'Buchungen rund um die Uhr',
      'Teilbar auf Social Media & Website',
    ],
  },
  {
    id: 'data',
    icon: FolderOpen,
    label: 'Meine Kundendaten sind überall verstreut',
    headline: 'Alles an einem Ort',
    description:
      'Kundenkartei, Behandlungshistorie, Formulare und Termine - zentral in einer übersichtlichen App. Nie wieder suchen.',
    benefits: [
      'Zentrale Kundenkartei',
      'Komplette Behandlungshistorie',
      'DSGVO-konformer Datenschutz',
    ],
  },
];

export default function ChallengeSelector() {
  const [selected, setSelected] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback((id: string) => {
    const isOpening = id !== selected;
    setSelected(isOpening ? id : null);

    if (isOpening) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [selected]);

  const active = challenges.find((c) => c.id === selected);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kennst du das? Wähle deine grösste Herausforderung
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wir zeigen dir, wie Treatflow genau dein Problem löst.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {challenges.map((c) => (
            <button
              key={c.id}
              onClick={() => handleSelect(c.id)}
              className={`flex flex-col items-center text-center p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                selected === c.id
                  ? 'border-indigo-600 bg-indigo-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-md'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                  selected === c.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-100 text-indigo-600'
                }`}
              >
                <c.icon className="h-7 w-7" />
              </div>
              <span
                className={`text-sm font-semibold leading-snug ${
                  selected === c.id ? 'text-indigo-700' : 'text-gray-700'
                }`}
              >
                {c.label}
              </span>
            </button>
          ))}
        </div>

        <div
          ref={resultRef}
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            active ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {active && (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {active.headline}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {active.description}
                  </p>
                  <ul className="space-y-3">
                    {active.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <a
                    href="https://app.treatflow.io/auth/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Jetzt kostenlos testen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
