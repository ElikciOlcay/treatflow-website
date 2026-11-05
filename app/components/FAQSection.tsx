'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { DEMO_BOOKING_URL } from '@/app/i18n/market-access';
import { filterByFeature } from '@/app/i18n/feature-availability';
import RichTextView from '@/app/site/RichTextView';
import { homeDe } from '@/app/site/content/home/de';
import type { FaqContent } from '@/app/site/content/home/types';
import type { SiteMarket } from '@/app/site/content/shared';

/** FAQ-Akkordeon. Ohne Props = deutsche Fragen. */
export default function FAQSection({
    content = homeDe.faq,
    market = 'de',
}: {
    content?: FaqContent;
    market?: SiteMarket;
} = {}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = filterByFeature(content.items, market);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <HelpCircle className="h-4 w-4" />
                        {content.badge}
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {content.titleBefore}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {content.titleHighlight}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        {content.subtitle}
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-200 hover:border-indigo-200 transition-all duration-300 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`h-5 w-5 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-8 pb-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        <RichTextView text={faq.answer} market={market} linkClassName="text-indigo-600 hover:underline" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            {content.contactTitle}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {content.contactText}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:hello@treatflow.io"
                                className="bg-white border-2 border-indigo-200 text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300"
                            >
                                hello@treatflow.io
                            </a>
                            <a
                                href={DEMO_BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300"
                            >
                                {content.demoCta}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
