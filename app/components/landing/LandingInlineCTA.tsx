import { LandingDemoPrimaryCTA } from './LandingCTA';

type LandingInlineCTAProps = {
    headline?: string;
    subline?: string;
    landingPage?: string;
    variant?: 'light' | 'dark';
};

export default function LandingInlineCTA({
    headline = 'Passt Treatflow zu deinem Studio?',
    subline = 'Lerne Treatflow in einer persönlichen Demo kennen und stelle deine Fragen zu deinem Studioalltag.',
    landingPage = 'landing/kosmetikstudio-software',
    variant = 'light',
}: LandingInlineCTAProps) {
    const isDark = variant === 'dark';

    return (
        <div
            className={`rounded-2xl p-8 sm:p-10 text-center ${
                isDark
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-700'
                    : 'bg-indigo-50 border border-indigo-100'
            }`}
        >
            <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {headline}
            </h3>
            <p className={`text-sm sm:text-base mb-6 max-w-lg mx-auto ${isDark ? 'text-indigo-100' : 'text-gray-600'}`}>
                {subline}
            </p>
            <div className="flex flex-col items-center gap-3">
                <LandingDemoPrimaryCTA
                    size="large"
                    landingPage={landingPage}
                    inverse={isDark}
                    className={isDark ? '!shadow-none' : ''}
                />
                <p className={`text-sm ${isDark ? 'text-indigo-100' : 'text-gray-600'}`}>Kostenlos und unverbindlich</p>
            </div>
        </div>
    );
}
