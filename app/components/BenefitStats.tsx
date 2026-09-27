import { TrendingDown, CalendarCheck, Clock, Users } from 'lucide-react';
import DemoFirstActions from './DemoFirstActions';

type HomeLocale = 'de' | 'en';

const statsDe = [
  {
    icon: TrendingDown,
    value: '50%',
    label: 'weniger No-Shows',
    desc: 'Durch automatische WhatsApp- und E-Mail-Erinnerungen',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: CalendarCheck,
    value: '30+',
    label: 'Online-Buchungen/Monat',
    desc: 'Im Durchschnitt bei aktiven Studios',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Clock,
    value: '10h',
    label: 'weniger Verwaltung/Woche',
    desc: 'Durch digitale Formulare und Automatisierung',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Studios haben getestet',
    desc: 'Von Einzelunternehmerinnen bis Teamstudios',
    color: 'bg-amber-100 text-amber-600',
  },
];

const statsEn = [
  {
    icon: TrendingDown,
    value: '50%',
    label: 'fewer no-shows',
    desc: 'With automatic WhatsApp and email reminders',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: CalendarCheck,
    value: '30+',
    label: 'online bookings / month',
    desc: 'Average for studios that use online booking',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Clock,
    value: '10h',
    label: 'less admin per week',
    desc: 'From digital forms and automation',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Users,
    value: '500+',
    label: 'studios have tried Treatflow',
    desc: 'From solo practitioners to teams',
    color: 'bg-amber-100 text-amber-600',
  },
];

const copy = {
  de: {
    title: 'Zahlen lügen nicht - schau selbst, was Treatflow bringt',
    subtitle: 'Echte Ergebnisse von echten Studios, die mit Treatflow arbeiten.',
  },
  en: {
    title: 'The numbers are straightforward',
    subtitle: 'Results from studios that run their day in Treatflow.',
  },
};

export default function BenefitStats({ locale = 'de' }: { locale?: HomeLocale }) {
  const stats = locale === 'en' ? statsEn : statsDe;
  const t = copy[locale];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className="h-7 w-7" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-gray-700 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">{stat.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <DemoFirstActions
            location="footer"
            lang={locale}
            align="center"
            showDemoNote
          />
        </div>
      </div>
    </section>
  );
}
