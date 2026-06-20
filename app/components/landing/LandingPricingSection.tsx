'use client';

import { CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { LandingPrimaryCTA } from '@/app/components/landing/LandingCTA';
import { basicFeatures, bookingFeatures } from '@/app/landing/kosmetikstudio-software/data';
import { LANDING_URLS, trackLandingSignup } from '@/lib/analytics/landingEvents';

type LandingPricingSectionProps = {
    landingPage?: string;
};

function TrialPrice() {
    return (
        <div className="mb-4">
            <span className="text-3xl font-bold">0&nbsp;€</span>
            <span className="text-sm ml-1 opacity-80">für 14 Tage</span>
        </div>
    );
}

export default function LandingPricingSection({
    landingPage = 'landing/kosmetikstudio-software',
}: LandingPricingSectionProps) {
    return (
        <section id="pricing" className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                        14 Tage kostenlos testen
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        Einfach starten – ohne Risiko
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Keine Kreditkarte. Keine automatische Abbuchung. Du entscheidest nach dem Testzeitraum.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Basic</h3>
                        <div className="mb-1">
                            <span className="text-sm text-gray-400 line-through">ab 39 €/Monat</span>
                            <span className="text-xs text-gray-500 block mt-0.5">zuzüglich MwSt.</span>
                        </div>
                        <TrialPrice />
                        <p className="text-gray-600 text-sm mb-6">
                            Digitale Anamnesen, Formulare und Behandlungsdokumentation – ohne Terminplanung.
                        </p>
                        <ul className="space-y-3 mb-8 flex-1">
                            {basicFeatures.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <LandingPrimaryCTA
                            label="Kostenlosen Testzugang erstellen"
                            className="w-full"
                            landingPage={landingPage}
                        />
                    </div>

                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-6 lg:p-8 flex flex-col relative overflow-hidden ring-4 ring-indigo-200 ring-offset-2">
                        <div className="absolute top-4 right-4 bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-full">
                            Empfohlen
                        </div>
                        <h3 className="text-2xl font-bold mb-1">Booking</h3>
                        <div className="mb-1">
                            <span className="text-sm text-indigo-300 line-through">ab 59 €/Monat</span>
                            <span className="text-xs text-indigo-200 block mt-0.5">zuzüglich MwSt.</span>
                        </div>
                        <div className="mb-4">
                            <span className="text-3xl font-bold">0&nbsp;€</span>
                            <span className="text-indigo-200 text-sm ml-1">für 14 Tage</span>
                        </div>
                        <p className="text-indigo-100 text-sm mb-6">
                            Terminkalender, Online-Buchungen und automatische Erinnerungen für dein Studio.
                        </p>
                        <ul className="space-y-3 mb-8 flex-1">
                            {bookingFeatures.map((feature) => (
                                <li key={feature} className="flex items-center gap-3 text-sm">
                                    <CheckCircle className="h-4 w-4 text-green-300 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={LANDING_URLS.register}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackLandingSignup(landingPage, { placement: 'pricing_booking' })}
                            className="inline-flex items-center justify-center gap-2 w-full bg-white text-indigo-600 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition-colors"
                        >
                            Kostenlosen Testzugang erstellen
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                        <Shield className="h-4 w-4 text-green-500" />
                        DSGVO-konform
                    </span>
                    <span className="flex items-center gap-1.5">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Monatlich kündbar
                    </span>
                    <span className="flex items-center gap-1.5">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Persönliche Einrichtungshilfe
                    </span>
                </div>
            </div>
        </section>
    );
}
