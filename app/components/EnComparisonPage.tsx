import Link from "next/link";
import { CheckCircle, X, ArrowRight } from "lucide-react";
import { APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";

export type EnComparisonRow = {
  feature: string;
  treatflow: string;
  competitor: string;
  treatflowOk: boolean;
  competitorOk: boolean;
};

export type EnComparisonContent = {
  competitor: string;
  title: string;
  description: string;
  intro: string;
  rows: EnComparisonRow[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
};

export default function EnComparisonPage({ content }: { content: EnComparisonContent }) {
  const register = APP_REGISTER_BY_MARKET.en;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "en",
    mainEntity: content.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-indigo-600 mb-3">Comparison</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{content.title}</h1>
          <p className="text-xl text-gray-600">{content.intro}</p>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-500">Feature</th>
                <th className="text-left px-4 py-3 font-semibold text-indigo-700">Treatflow</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-500">{content.competitor}</th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row) => (
                <tr key={row.feature} className="border-t border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-900">{row.feature}</td>
                  <td className="px-4 py-3 text-gray-700">
                    <span className="inline-flex items-start gap-2">
                      {row.treatflowOk ? (
                        <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                      )}
                      {row.treatflow}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    <span className="inline-flex items-start gap-2">
                      {row.competitorOk ? (
                        <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                      )}
                      {row.competitor}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">FAQ</h2>
          <div className="space-y-6">
            {content.faqs.map((item) => (
              <div key={item.q} className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{content.ctaTitle}</h2>
          <p className="text-indigo-100 mb-8">14-day free trial. No credit card. No booking commission.</p>
          <a
            href={register}
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-50"
          >
            Start free trial
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-6 text-sm text-indigo-200">
            <Link href="/en/pricing" className="underline">
              See pricing
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
