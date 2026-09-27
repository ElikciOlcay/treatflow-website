import { CheckCircle, X } from 'lucide-react';
import DemoFirstActions from './DemoFirstActions';

type HomeLocale = 'de' | 'en';

const rowsDe = [
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
    feature: 'Hilfe beim Datenumzug',
    treatflow: 'Persönliche Hilfe beim Import',
    other: 'Oft selbst organisiert',
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

const rowsEn = [
  {
    feature: 'Built for beauty and aesthetics',
    treatflow: 'Made for salons and clinics',
    other: 'Generic booking software',
  },
  {
    feature: 'GDPR and EU hosting',
    treatflow: 'EU servers, GDPR-ready',
    other: 'Often unclear compliance',
  },
  {
    feature: 'Complete setup',
    treatflow: 'We set everything up for you',
    other: 'Usually self-serve only',
  },
  {
    feature: 'Made in Austria',
    treatflow: 'Yes, EU servers',
    other: 'Often overseas vendors',
  },
  {
    feature: 'Hidden fees',
    treatflow: 'None',
    other: 'Extra fees are common',
  },
  {
    feature: 'Help with data migration',
    treatflow: 'We help you import your data',
    other: 'Often on your own',
  },
  {
    feature: 'Treatment documentation',
    treatflow: 'Built in, with photos',
    other: 'Usually missing',
  },
  {
    feature: 'Form templates',
    treatflow: 'Ready templates and a form shop',
    other: 'No templates',
  },
];

const copy = {
  de: {
    title: 'Warum Treatflow die beste Wahl für dein Studio ist',
    subtitle: 'Vergleiche selbst - und entscheide, was zu deinem Studio passt.',
    others: 'Andere Anbieter',
    othersShort: 'Andere:',
  },
  en: {
    title: 'Why Treatflow is the better fit for your studio',
    subtitle: 'Compare for yourself – then pick what your studio actually needs.',
    others: 'Other tools',
    othersShort: 'Others:',
  },
};

export default function ComparisonTable({ locale = 'de' }: { locale?: HomeLocale }) {
  const rows = locale === 'en' ? rowsEn : rowsDe;
  const t = copy[locale];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
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
                  {t.others}
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
                    <span className="font-medium">{t.othersShort}</span> {row.other}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <DemoFirstActions
            location="footer"
            lang={locale}
            align="center"
            showDemoNote={false}
          />
        </div>
      </div>
    </section>
  );
}
