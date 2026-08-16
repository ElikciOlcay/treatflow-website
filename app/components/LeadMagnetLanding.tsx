import { CheckCircle, FileText, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Navigation from './Navigation';
import Footer from './Footer';
import LeadDownloadForm from './LeadDownloadForm';
import { SHORT_DISCLAIMER, type LeadMagnet } from '@/lib/leadMagnets';

export function leadMagnetMetadata(magnet: LeadMagnet): Metadata {
    const title = `${magnet.title}: ${magnet.highlight}`;
    return {
        title,
        description: magnet.description,
        keywords: magnet.keywords,
        alternates: {
            canonical: `https://www.treatflow.io/${magnet.slug}`,
        },
        openGraph: {
            title,
            description: magnet.description,
            url: `https://www.treatflow.io/${magnet.slug}`,
        },
    };
}

export default function LeadMagnetLanding({ magnet }: { magnet: LeadMagnet }) {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: magnet.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    };

    return (
        <div className="min-h-screen bg-white">
            <Script
                id={`faq-${magnet.slug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Navigation />

            <section className="pt-32 pb-20 bg-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <FileText className="h-4 w-4 mr-2" />
                                {magnet.badge}
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {magnet.title}: <span className="text-indigo-600">{magnet.highlight}</span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">{magnet.description}</p>
                            <div className="space-y-3">
                                {magnet.bullets.map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:sticky lg:top-28">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-1">{magnet.formTitle}</h2>
                                <p className="text-gray-500 text-sm mb-5">{magnet.formHint}</p>
                                <LeadDownloadForm
                                    downloadUrl={magnet.downloadUrl}
                                    leadSource={magnet.leadSource}
                                    buttonText={magnet.buttonText}
                                    successTitle={magnet.successTitle}
                                    successDescription="Der Download startet automatisch. Falls nicht, klicke auf den Button unten."
                                    disclaimerText={SHORT_DISCLAIMER}
                                    compact
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{magnet.definitionTitle}</h2>
                    <p className="text-gray-700 leading-relaxed">{magnet.definition}</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">{magnet.contentsTitle}</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {magnet.contents.map((item) => (
                            <div key={item} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                                <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">{magnet.audienceTitle}</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {magnet.audience.map((item) => (
                            <div key={item.name} className="bg-white border border-gray-100 rounded-xl p-5">
                                <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Häufige Fragen</h2>
                    <div className="space-y-4">
                        {magnet.faqs.map((faq) => (
                            <div key={faq.question} className="border border-gray-100 rounded-xl p-5">
                                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-indigo-600 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-white mb-3">Lieber gleich digital statt Papier?</h2>
                        <p className="text-indigo-100 mb-6">
                            Formulare, Kundenkartei und Erinnerungen laufen in Treatflow an einem Ort.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50"
                            >
                                14 Tage kostenlos testen
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                            <Link
                                href={magnet.relatedHref}
                                className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600"
                            >
                                {magnet.relatedLabel}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
