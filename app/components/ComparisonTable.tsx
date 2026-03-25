import { CheckCircle, X } from 'lucide-react';

const rows = [
  {
    feature: 'Speziell für Beauty & Kosmetik',
    treatflow: 'Entwickelt für Kosmetikstudios',
    other: 'Generische Buchungssoftware',
    treatflowOk: true,
    otherOk: false,
  },
  {
    feature: 'DSGVO & NiSV-konform',
    treatflow: 'Vollständig konform',
    other: 'Oft unklare Compliance',
    treatflowOk: true,
    otherOk: false,
  },
  {
    feature: 'Persönliche Betreuung',
    treatflow: '1:1 Betreuung und Hilfe',
    other: 'Oft nur Ticket-System',
    treatflowOk: true,
    otherOk: false,
  },
  {
    feature: 'Made in Austria',
    treatflow: 'Ja, EU-Server',
    other: 'Oft internationale Anbieter',
    treatflowOk: true,
    otherOk: false,
  },
  {
    feature: 'Versteckte Kosten',
    treatflow: 'Keine versteckten Kosten',
    other: 'Häufig Zusatzgebühren',
    treatflowOk: true,
    otherOk: false,
  },
  {
    feature: 'Kostenloser Datenumzug',
    treatflow: 'Ja, mit persönlicher Hilfe',
    other: 'Selten oder kostenpflichtig',
    treatflowOk: true,
    otherOk: false,
  },
  {
    feature: 'Behandlungsdokumentation',
    treatflow: 'Integriert und NiSV-konform',
    other: 'Meist nicht vorhanden',
    treatflowOk: true,
    otherOk: false,
  },
  {
    feature: 'Formular-Marketplace',
    treatflow: 'Fertige Vorlagen & KI-Generator',
    other: 'Keine Vorlagen',
    treatflowOk: true,
    otherOk: false,
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Warum Treatflow die beste Wahl für dein Studio ist
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vergleiche selbst - und entscheide, was zu deinem Studio passt.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 w-1/3">
                  Feature
                </th>
                <th className="text-center px-6 py-4 w-1/3">
                  <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold">
                    Treatflow
                  </span>
                </th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-500 w-1/3">
                  Andere Anbieter
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        {row.treatflow}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                      <span className="text-sm text-gray-500">{row.other}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {rows.map((row) => (
            <div
              key={row.feature}
              className="bg-white rounded-xl border border-gray-200 p-5"
            >
              <div className="font-semibold text-gray-900 mb-3 text-sm">
                {row.feature}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">
                    <span className="font-medium text-indigo-600">
                      Treatflow:
                    </span>{' '}
                    {row.treatflow}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <X className="h-4 w-4 text-red-400 flex-shrink-0" />
                  <span className="text-sm text-gray-500">
                    <span className="font-medium">Andere:</span> {row.other}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://app.treatflow.io/auth/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Überzeuge dich selbst - 14 Tage kostenlos
          </a>
        </div>
      </div>
    </section>
  );
}
