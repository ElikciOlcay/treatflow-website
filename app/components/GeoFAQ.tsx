'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export type FAQItem = {
    question: string;
    answer: string;
};

type GeoFAQProps = {
    faqs: FAQItem[];
    themeColor?: 'indigo' | 'emerald' | 'rose';
};

const themeClasses = {
    indigo: {
        badge: 'bg-indigo-100 text-indigo-700',
        icon: 'text-indigo-600',
        accent: 'from-indigo-600 to-purple-600',
    },
    emerald: {
        badge: 'bg-emerald-100 text-emerald-700',
        icon: 'text-emerald-600',
        accent: 'from-emerald-600 to-teal-600',
    },
    rose: {
        badge: 'bg-rose-100 text-rose-700',
        icon: 'text-rose-600',
        accent: 'from-rose-600 to-pink-600',
    },
};

export default function GeoFAQ({ faqs, themeColor = 'indigo' }: GeoFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const theme = themeClasses[themeColor];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className={`inline-flex items-center gap-2 ${theme.badge} px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                        <HelpCircle className="h-4 w-4" />
                        Häufige Fragen
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Noch Fragen?
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-base font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`h-5 w-5 ${theme.icon} flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-5">
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
