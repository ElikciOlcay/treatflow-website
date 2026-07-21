"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { generateFaqSchema } from "@/lib/schema";

export type FaqEntry = {
  question: string;
  answer: string;
};

type FaqSectionEnProps = {
  faqs: FaqEntry[];
  title?: string;
  badge?: string;
};

export default function FaqSectionEn({
  faqs,
  title = "Common questions",
  badge = "FAQ",
}: FaqSectionEnProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema(faqs)) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="h-4 w-4" />
            {badge}
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
