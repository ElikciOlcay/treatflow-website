import { TrendingDown, CalendarCheck, Clock, Users, ArrowRight } from 'lucide-react';

const stats = [
  {
    icon: TrendingDown,
    value: '50%',
    label: 'weniger No-Shows',
    desc: 'Durch automatische SMS- und E-Mail-Erinnerungen',
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
    label: 'Studios vertrauen uns',
    desc: 'Von Einzelunternehmerinnen bis Teamstudios',
    color: 'bg-amber-100 text-amber-600',
  },
];

export default function BenefitStats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Zahlen lügen nicht - schau selbst, was Treatflow bringt
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Echte Ergebnisse von echten Studios, die mit Treatflow arbeiten.
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

        <div className="text-center mt-12">
          <a
            href="https://app.treatflow.io/auth/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Jetzt selbst erleben
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="text-sm text-gray-500 mt-3">
            14 Tage kostenlos. Ohne Kreditkarte.
          </p>
        </div>
      </div>
    </section>
  );
}
