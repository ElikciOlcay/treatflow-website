'use client';

import { useEffect, useState } from 'react';
import { LANDING_URLS, trackLandingDemo } from '@/lib/analytics/landingEvents';
import { isCookiebotDialogVisible, onCookiebotVisibilityChange } from '@/lib/cookiebot';

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
            setVisible(scrollY > 280 && !nearBottom && !isCookiebotDialogVisible());
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        const stopCookiebotWatch = onCookiebotVisibilityChange(onScroll);
        onScroll();
        return () => {
            window.removeEventListener('scroll', onScroll);
            stopCookiebotWatch();
        };
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden animate-slide-up">
            <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-4 py-2.5">
                <a
                    href={LANDING_URLS.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackLandingDemo(landingPage, { placement: 'sticky_mobile' })}
                    className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white py-3.5 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Persönliche Demo buchen
                </a>
                <p className="text-center text-sm text-gray-600 mt-1.5">Kostenlos und unverbindlich</p>
            </div>
        </div>
    );
}
