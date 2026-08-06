import { CheckCircle, X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import PricingSectionIntl from "./PricingSectionIntl";
import type { PricingIntlCopy } from "@/app/i18n/markets/pricing-intl";

export default function PricingPageIntl({ copy }: { copy: PricingIntlCopy }) {
  return (
    <>
      <PricingSectionIntl copy={copy} />

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {copy.comparison.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{copy.comparison.subtitle}</p>
            <p className="text-sm text-gray-500 mt-2">{copy.comparison.vatNote}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-900 text-white">
              <div className="p-4 sm:p-6 font-semibold text-sm sm:text-base">
                {copy.comparison.featureCol}
              </div>
              <div className="p-4 sm:p-6 text-center font-semibold text-sm sm:text-base">
                Basic (39€)
              </div>
              <div className="p-4 sm:p-6 text-center font-semibold text-sm sm:text-base bg-indigo-600">
                Booking (59€)
              </div>
            </div>
            {copy.comparison.rows.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } border-b border-gray-100 last:border-b-0`}
              >
                <div className="p-4 sm:p-5 text-sm sm:text-base text-gray-700 font-medium">
                  {row.feature}
                </div>
                <div className="p-4 sm:p-5 flex justify-center items-center">
                  {row.basic ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300" />
                  )}
                </div>
                <div className="p-4 sm:p-5 flex justify-center items-center">
                  {row.booking ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href={copy.earlyAccessHref}
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
            >
              {copy.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{copy.why.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{copy.why.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {copy.why.items.map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{item.value}</div>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{copy.faq.title}</h2>
            <p className="text-lg text-gray-600">{copy.faq.subtitle}</p>
          </div>
          <div className="space-y-4">
            {copy.faq.items.map((item) => (
              <details
                key={item.question}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">{copy.trialBox.title}</h2>
          <p className="text-indigo-100 text-lg mb-8">{copy.subtitle}</p>
          <Link
            href={copy.earlyAccessHref}
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg"
          >
            {copy.cta}
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
