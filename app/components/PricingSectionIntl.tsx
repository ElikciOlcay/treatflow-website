"use client";

import { CheckCircle, X, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { PricingIntlCopy } from "@/app/i18n/markets/pricing-intl";

function PricingCta({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function PricingSectionIntl({ copy }: { copy: PricingIntlCopy }) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="pt-28 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="h-4 w-4 fill-current" />
            {copy.eyebrow}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {copy.titleBefore}{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {copy.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-xl flex">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                !isYearly ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {copy.monthly}
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 relative ${
                isYearly ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {copy.yearly}
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                {copy.saveBadge}
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{copy.basic.name}</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {isYearly ? (
                  <>
                    €421<span className="text-lg text-gray-600">{copy.perYear}</span>
                  </>
                ) : (
                  <>
                    €39<span className="text-lg text-gray-600">{copy.perMonth}</span>
                  </>
                )}
              </div>
              {isYearly && (
                <p className="text-sm text-green-600 font-medium">
                  {copy.basicYearlyHint}
                </p>
              )}
              <p className="text-xs text-gray-500 mt-1">{copy.exclVat}</p>
              <p className="text-sm text-gray-500 mt-2">{copy.basic.description}</p>
            </div>

            <ul className="space-y-3 mb-6">
              {copy.basic.included.map((item) => (
                <li key={item} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
              {copy.basic.excluded.map((item) => (
                <li key={item} className="flex items-center">
                  <X className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <PricingCta
              href={copy.earlyAccessHref}
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
            >
              {copy.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </PricingCta>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-full">
              {copy.popular}
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{copy.booking.name}</h3>
              <div className="text-4xl font-bold mb-1">
                {isYearly ? (
                  <>
                    €637<span className="text-lg text-indigo-200">{copy.perYear}</span>
                  </>
                ) : (
                  <>
                    €59<span className="text-lg text-indigo-200">{copy.perMonth}</span>
                  </>
                )}
              </div>
              {isYearly && (
                <p className="text-sm text-green-300 font-medium">
                  {copy.bookingYearlyHint}
                </p>
              )}
              <p className="text-xs text-indigo-200 mt-1">{copy.exclVat}</p>
              <p className="text-sm text-indigo-200 mt-2">{copy.booking.description}</p>
            </div>

            <ul className="space-y-3 mb-6">
              {copy.booking.included.map((item) => (
                <li key={item} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-300 mr-3 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <PricingCta
              href={copy.earlyAccessHref}
              className="w-full bg-white text-indigo-600 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
            >
              {copy.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </PricingCta>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{copy.trialBox.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{copy.trialBox.text}</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-500">
              {copy.trialBox.points.map((point) => (
                <span key={point}>✓ {point}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
