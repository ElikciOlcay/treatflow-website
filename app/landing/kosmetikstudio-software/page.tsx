import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { CheckCircle } from 'lucide-react';
import LandingHeader from '@/app/components/landing/LandingHeader';
import LandingFooter from '@/app/components/landing/LandingFooter';
import LandingStickyMobileCTA from '@/app/components/landing/LandingStickyMobileCTA';
import LandingSocialProofBar from '@/app/components/landing/LandingSocialProofBar';
import LandingFeaturedTestimonial from '@/app/components/landing/LandingFeaturedTestimonial';
import LandingInlineCTA from '@/app/components/landing/LandingInlineCTA';
import HeroAppPreview from '@/app/components/landing/HeroAppPreview';
import LandingVideoSection from '@/app/components/landing/LandingVideoSection';
import LandingPricingSection from '@/app/components/landing/LandingPricingSection';
import {
    LandingPrimaryCTA,
    LandingDemoLink,
    LandingPrimaryInverseCTA,
} from '@/app/components/landing/LandingCTA';
import {
    heroBullets,
    painSolutionPairs,
    featureCards,
    screenshotBlocks,
    benefits,
    testimonials,
    faqs,
    steps,
    featuredTestimonial,
    GoogleStars,
    TrustLine,
} from './data';

export const metadata: Metadata = {
    title: 'Kosmetikstudio Software | Termine, Kunden & Behandlungsdoku | Treatflow',
    description:
        'Treatflow ist die einfache Software für Kosmetikstudios: Kundenkartei, Termine, digitale Anamnese, Einwilligungen und Behandlungsdokumentation an einem Ort. 14 Tage kostenlos testen.',
    robots: 'noindex, nofollow',
    alternates: {
        canonical: 'https://www.treatflow.io/kosmetikstudio-software',
    },
    openGraph: {
        title: 'Kosmetikstudio Software | Termine, Kunden & Behandlungsdoku | Treatflow',
        description:
            'Treatflow ist die einfache Software für Kosmetikstudios: Kundenkartei, Termine, digitale Anamnese, Einwilligungen und Behandlungsdokumentation an einem Ort.',
        url: 'https://www.treatflow.io/landing/kosmetikstudio-software',
    },
};

const LANDING_PAGE_ID = 'landing/kosmetikstudio-software';

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
};

const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Treatflow – Kosmetikstudio Software',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://www.treatflow.io/landing/kosmetikstudio-software',
    description:
        'Software für Kosmetikstudios mit Kundenkartei, Terminplaner, digitaler Anamnese und Behandlungsdokumentation.',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
        description: '14 Tage kostenlose Testversion',
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.6',
        reviewCount: '19',
        bestRating: '5',
    },
};

export default function KosmetikstudioSoftwareAdsLandingPage() {
    return (
        <div className="min-h-screen bg-white">
            <LandingHeader landingPage={LANDING_PAGE_ID} />
            <LandingStickyMobileCTA landingPage={LANDING_PAGE_ID} />

            {/* Hero – ein klarer Primary-CTA, Demo nur als Text-Link */}
            <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full text-sm font-medium mb-5">
                                Speziell für Kosmetikstudios
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-gray-900 mb-5 leading-[1.12]">
                                Die einfache Software für{' '}
                                <span className="text-indigo-600">Kosmetikstudios</span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Termine, Kundenkartei, Anamnese und Behandlungsdoku an einem Ort –
                                ohne Papierchaos und ohne komplizierte Einrichtung.
                            </p>

                            <ul className="space-y-2.5 mb-8">
                                {heroBullets.map((bullet) => (
                                    <li key={bullet} className="flex items-start gap-2.5 text-gray-700">
                                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-sm sm:text-base font-medium">{bullet}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col items-start gap-3">
                                <LandingPrimaryCTA
                                    size="large"
                                    landingPage={LANDING_PAGE_ID}
                                    className="w-full sm:w-auto"
                                />
                                <LandingDemoLink landingPage={LANDING_PAGE_ID} />
                            </div>
                            <div className="mt-5">
                                <TrustLine />
                            </div>
                        </div>
                        <HeroAppPreview />
                    </div>
                </div>
            </section>

            <LandingSocialProofBar />
            <LandingFeaturedTestimonial {...featuredTestimonial} />

            {/* Problem → Lösung (höhere Conversion als reine Pain-Liste) */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                            Kommt dir das bekannt vor?
                        </h2>
                        <p className="text-gray-600">
                            Treatflow löst genau diese Probleme – ohne mehrere Tools zu brauchen.
                        </p>
                    </div>
                    <div className="space-y-3">
                        {painSolutionPairs.map((item) => (
                            <div
                                key={item.pain}
                                className="grid sm:grid-cols-2 gap-0 sm:gap-px rounded-xl overflow-hidden border border-gray-200"
                            >
                                <div className="bg-red-50/70 p-5 flex items-start gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold text-xs mt-0.5">
                                        ✕
                                    </span>
                                    <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed">
                                        {item.pain}
                                    </p>
                                </div>
                                <div className="bg-green-50/70 p-5 flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                    <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed">
                                        {item.solution}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                            Alles für deinen Studio-Alltag
                        </h2>
                        <p className="text-gray-600">
                            Eine App statt Zettelwirtschaft, WhatsApp und mehreren Tools.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {featureCards.map((feature) => (
                            <div
                                key={feature.title}
                                className={`bg-gradient-to-br ${feature.bg} p-5 rounded-xl border border-white/80`}
                            >
                                <div
                                    className={`w-10 h-10 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-3`}
                                >
                                    <feature.icon className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="text-base font-bold text-gray-900 mb-1.5">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10">
                        <LandingInlineCTA landingPage={LANDING_PAGE_ID} />
                    </div>
                </div>
            </section>

            {/* 3 Schritte – reduziert Einstiegshürde */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                            In 3 Schritten startklar
                        </h2>
                        <p className="text-gray-600">Keine komplizierte Einrichtung. Kein IT-Wissen nötig.</p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6">
                        {steps.map((step) => (
                            <div key={step.num} className="text-center">
                                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-xl font-bold text-white">{step.num}</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video – echtes Embed statt Platzhalter */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                            In 60 Sekunden erklärt
                        </h2>
                        <p className="text-gray-600">
                            Olcay zeigt dir kurz, wie Treatflow den Studioalltag einfacher macht.
                        </p>
                    </div>
                    <LandingVideoSection />
                    <div className="mt-8 text-center">
                        <LandingPrimaryCTA
                            size="large"
                            landingPage={LANDING_PAGE_ID}
                            className="w-full sm:w-auto"
                        />
                        <p className="text-sm text-gray-500 mt-3">
                            14 Tage kostenlos · keine Kreditkarte · persönliche Hilfe beim Start
                        </p>
                    </div>
                </div>
            </section>

            {/* Screenshots */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                            So sieht dein digitaler Studioalltag aus
                        </h2>
                    </div>

                    <div className="space-y-14 lg:space-y-20">
                        {screenshotBlocks.map((block, index) => (
                            <div key={block.title}>
                                <div
                                    className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                                        index % 2 === 1 ? 'lg:[direction:rtl]' : ''
                                    }`}
                                >
                                    <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                            {block.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">{block.benefit}</p>
                                    </div>
                                    <div
                                        className={`rounded-xl overflow-hidden shadow-lg border border-gray-200 ${
                                            index % 2 === 1 ? 'lg:[direction:ltr]' : ''
                                        }`}
                                    >
                                        <Image
                                            src={block.image}
                                            alt={block.alt}
                                            width={1200}
                                            height={675}
                                            className="w-full h-auto"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            loading={index === 0 ? 'eager' : 'lazy'}
                                        />
                                    </div>
                                </div>
                                {index === 1 && (
                                    <div className="mt-10">
                                        <LandingInlineCTA
                                            landingPage={LANDING_PAGE_ID}
                                            headline="Sieh selbst, wie einfach es ist"
                                            subline="Starte jetzt deinen kostenlosen Test – du siehst sofort, wie Treatflow funktioniert."
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcome-Vorteile – kompakt */}
            <section className="py-12 bg-gray-50 border-y border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 gap-3">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2.5">
                                <CheckCircle className="h-4 w-4 text-indigo-600 shrink-0" />
                                <span className="text-gray-800 text-sm font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials VOR Pricing – reduziert Kaufbedenken */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 mb-3">
                            <GoogleStars />
                            <span className="text-sm font-semibold text-gray-900">4,6/5 auf Google</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Das sagen Studios über Treatflow
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5">
                        {testimonials.map((review) => (
                            <article
                                key={review.name}
                                className="bg-gray-50 p-5 rounded-xl border border-gray-100"
                            >
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <GoogleStars size="sm" />
                                    <span className="text-[11px] font-medium text-gray-400">{review.source}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    &ldquo;{review.shortText}&rdquo;
                                </p>
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-9 h-9 ${review.color} rounded-full flex items-center justify-center text-white text-xs font-semibold`}
                                    >
                                        {review.initials}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                                        <div className="text-xs text-gray-500">{review.studio}</div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <LandingPricingSection landingPage={LANDING_PAGE_ID} />

            {/* FAQ – Einwände zuerst */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Noch Fragen?
                        </h2>
                    </div>
                    <div className="space-y-2">
                        {faqs.map((faq) => (
                            <details key={faq.q} className="group bg-gray-50 border border-gray-200 rounded-xl">
                                <summary className="flex items-center justify-between cursor-pointer p-5 text-left list-none">
                                    <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">{faq.q}</span>
                                    <span className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-500 group-open:rotate-45 transition-transform duration-200 border border-gray-200">
                                        +
                                    </span>
                                </summary>
                                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 sm:py-20 bg-indigo-600">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Bereit, dein Kosmetikstudio digitaler zu führen?
                    </h2>
                    <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Starte jetzt deinen kostenlosen 14-Tage-Test. Keine Kreditkarte, keine Bindung.
                    </p>
                    <LandingPrimaryInverseCTA
                        size="large"
                        landingPage={LANDING_PAGE_ID}
                    />
                    <div className="mt-4">
                        <LandingDemoLink
                            landingPage={LANDING_PAGE_ID}
                            className="!text-indigo-200 hover:!text-white"
                        />
                    </div>
                </div>
            </section>

            <LandingFooter />

            <Script
                id="landing-kosmetikstudio-software-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="landing-kosmetikstudio-software-app-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
        </div>
    );
}
