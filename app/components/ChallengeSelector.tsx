'use client';

import { useState, useRef, useCallback } from 'react';
import { Clock, UserX, Globe, FolderOpen, ArrowRight, CheckCircle } from 'lucide-react';
import { APP_REGISTER_BY_MARKET } from '@/app/i18n/market-access';

type HomeLocale = 'de' | 'en';

const challengesDe = [
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
      'Automatische WhatsApp- und E-Mail-Erinnerungen sorgen dafür, dass deine Kunden ihre Termine nicht vergessen. Weniger Ausfälle, mehr Umsatz.',
    benefits: [
      'Automatische Terminerinnerungen',
      'WhatsApp & E-Mail vor dem Termin',
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

const challengesEn = [
  {
    id: 'time',
    icon: Clock,
    label: 'I spend too much time on paperwork',
    headline: 'Stop the manual work',
    description:
      'Treatflow digitises intake forms, consent and treatment notes. No more paper, no double entry. Everything in one app.',
    benefits: [
      'Digital forms instead of paper',
      'Documentation as you treat',
      'Client data ready before they sit down',
    ],
  },
  {
    id: 'noshow',
    icon: UserX,
    label: 'Clients miss their appointments',
    headline: 'Up to 50% fewer no-shows',
    description:
      'Automatic WhatsApp and email reminders mean clients remember their appointments. Fewer gaps, more revenue.',
    benefits: [
      'Automatic appointment reminders',
      'WhatsApp and email before the visit',
      'Easy rebooking',
    ],
  },
  {
    id: 'online',
    icon: Globe,
    label: 'I want more clients booking online',
    headline: 'Bookable around the clock',
    description:
      'With your own booking link, clients book anytime – nights and weekends included. You gain new clients without answering the phone. No marketplace commission.',
    benefits: [
      'Your own booking page',
      'Bookings 24/7',
      'Share on Instagram, Google and your website',
    ],
  },
  {
    id: 'data',
    icon: FolderOpen,
    label: 'My client data is scattered everywhere',
    headline: 'Everything in one place',
    description:
      'Client records, treatment history, forms and appointments – central in one clear app. GDPR-ready EU hosting. Stop searching.',
    benefits: [
      'One digital client record',
      'Full treatment history',
      'GDPR-ready data protection',
    ],
  },
];

const copy = {
  de: {
    title: 'Kennst du das? Wähle deine grösste Herausforderung',
    subtitle: 'Wir zeigen dir, wie Treatflow genau dein Problem löst.',
    cta: 'Jetzt kostenlos testen',
    register: APP_REGISTER_BY_MARKET.de,
  },
  en: {
    title: 'Sound familiar? Pick your biggest challenge',
    subtitle: 'We show you how Treatflow solves that exact problem.',
    cta: 'Start free trial',
    register: APP_REGISTER_BY_MARKET.en,
  },
};

export default function ChallengeSelector({ locale = 'de' }: { locale?: HomeLocale }) {
  const [selected, setSelected] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const challenges = locale === 'en' ? challengesEn : challengesDe;
  const t = copy[locale];

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
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
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
                    href={t.register}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    {t.cta}
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
