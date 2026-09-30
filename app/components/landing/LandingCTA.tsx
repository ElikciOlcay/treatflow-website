'use client';

import { ArrowRight, Phone } from 'lucide-react';
import { LANDING_URLS, trackLandingSignup, trackLandingDemo } from '@/lib/analytics/landingEvents';

type LandingCTAProps = {
    variant?: 'primary' | 'secondary' | 'primary-inverse';
    size?: 'default' | 'large';
    label?: string;
    className?: string;
    landingPage?: string;
};

export function LandingPrimaryCTA({
    size = 'default',
    label = 'Kostenlosen Testzugang erstellen',
    className = '',
    landingPage = 'landing/kosmetikstudio-software',
}: Omit<LandingCTAProps, 'variant'>) {
    const sizeClasses =
        size === 'large'
            ? 'px-8 py-4 text-lg'
            : 'px-6 py-3.5 text-base';

    return (
        <a
            href={LANDING_URLS.register}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLandingSignup(landingPage)}
            className={`inline-flex items-center justify-center gap-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-200 shadow-lg shadow-indigo-200/60 hover:shadow-xl hover:shadow-indigo-300/60 ${sizeClasses} ${className}`}
        >
            {label}
            <ArrowRight className="h-5 w-5" />
        </a>
    );
}

/** Sekundärer Button – nur dort einsetzen, wo er nicht vom Primary-CTA ablenkt */
export function LandingDemoCTA({
    size = 'default',
    label = 'Demo buchen',
    className = '',
    landingPage = 'landing/kosmetikstudio-software',
}: Omit<LandingCTAProps, 'variant'>) {
    const sizeClasses =
        size === 'large'
            ? 'px-8 py-4 text-lg'
            : 'px-6 py-3.5 text-base';

    return (
        <a
            href={LANDING_URLS.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLandingDemo(landingPage)}
            className={`inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-200 ${sizeClasses} ${className}`}
        >
            <Phone className="h-5 w-5" />
            {label}
        </a>
    );
}

/** Dezenter Text-Link – im Hero bevorzugt, damit der Primary-CTA dominiert */
export function LandingDemoLink({
    label = 'Persönliche Demo buchen',
    className = '',
    landingPage = 'landing/kosmetikstudio-software',
}: Pick<LandingCTAProps, 'label' | 'className' | 'landingPage'>) {
    return (
        <a
            href={LANDING_URLS.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLandingDemo(landingPage, { placement: 'text_link' })}
            className={`text-sm text-gray-500 hover:text-indigo-600 underline underline-offset-4 transition-colors ${className}`}
        >
            {label}
        </a>
    );
}

export function LandingPrimaryInverseCTA({
    size = 'default',
    label = 'Kostenlosen Testzugang erstellen',
    className = '',
    landingPage = 'landing/kosmetikstudio-software',
}: Omit<LandingCTAProps, 'variant'>) {
    const sizeClasses =
        size === 'large'
            ? 'px-8 py-4 text-lg'
            : 'px-6 py-3.5 text-base';

    return (
        <a
            href={LANDING_URLS.register}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLandingSignup(landingPage)}
            className={`inline-flex items-center justify-center gap-2 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg ${sizeClasses} ${className}`}
        >
            {label}
            <ArrowRight className="h-5 w-5" />
        </a>
    );
}
