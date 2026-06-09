'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { LANDING_URLS, trackLandingSignup } from '@/lib/analytics/landingEvents';

type LandingStickyMobileCTAProps = {
    landingPage?: string;
};

export default function LandingStickyMobileCTA({
    landingPage = 'landing/kosmetikstudio-software',
}: LandingStickyMobileCTAProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            const nearBottom = scrollY + winHeight > docHeight - 400;
            const cookieBanner = document.querySelector('[data-cookie-banner]');
            const cookieVisible = cookieBanner !== null;

            setVisible(scrollY > 280 && !nearBottom && !cookieVisible);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden animate-slide-up">
            <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-4 py-2.5">
                <a
                    href={LANDING_URLS.register}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackLandingSignup(landingPage, { placement: 'sticky_mobile' })}
                    className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors"
                >
                    Kostenlos testen
                    <ArrowRight className="h-4 w-4" />
                </a>
                <p className="text-center text-[11px] text-gray-500 mt-1">
                    14 Tage gratis &middot; Keine Kreditkarte
                </p>
            </div>
        </div>
    );
}
