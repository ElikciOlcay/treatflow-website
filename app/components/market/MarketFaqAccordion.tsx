"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type MarketFaqItem = {
  question: string;
  answer: string;
};

export default function MarketFaqAccordion({ items }: { items: MarketFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((faq, index) => (
        <div
          key={faq.question}
          className="bg-white rounded-2xl border border-gray-200 hover:border-indigo-200 transition-all duration-300 overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
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
            <div className="px-8 pb-6">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
