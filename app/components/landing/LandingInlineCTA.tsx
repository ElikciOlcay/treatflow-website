import { LandingPrimaryCTA, LandingDemoLink } from './LandingCTA';

type LandingInlineCTAProps = {
    headline?: string;
    subline?: string;
    landingPage?: string;
    variant?: 'light' | 'dark';
};

export default function LandingInlineCTA({
    headline = 'Bereit, dein Studio zu vereinfachen?',
    subline = '14 Tage kostenlos testen – ohne Kreditkarte, in wenigen Minuten startklar.',
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
                <LandingPrimaryCTA
                    size="large"
                    landingPage={landingPage}
                    className={isDark ? '!shadow-none' : ''}
                />
                <LandingDemoLink landingPage={landingPage} className={isDark ? '!text-indigo-200 hover:!text-white' : ''} />
            </div>
        </div>
    );
}
