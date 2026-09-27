'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import type { Market } from '@/app/i18n/config';
import { isPrefixedMarket } from '@/app/i18n/config';
import { demoFirstLangFromMarket, registerHrefForMarket } from '@/lib/cta/demoFirst';
import { isCookiebotDialogVisible, onCookiebotVisibilityChange } from '@/lib/cookiebot';
import DemoFirstActions from './DemoFirstActions';

const LANDING_PAGES_WITH_OWN_STICKY_CTA = ['/landing/kosmetikstudio-software'];

function hideStickyCta(pathname: string | null): boolean {
  if (!pathname) return false;
  if (LANDING_PAGES_WITH_OWN_STICKY_CTA.includes(pathname)) return true;
  if (pathname.startsWith('/formulare-testen/')) return true;
  if (pathname.startsWith('/en/try-forms/')) return true;
  if (pathname.startsWith('/tr/try-forms/')) return true;
  return false;
}

function marketFromPath(pathname: string | null): Market {
  if (!pathname) return 'de';
  const match = pathname.match(/^\/([a-z]{2})(?=\/|$)/);
  if (match && isPrefixedMarket(match[1])) return match[1];
  return 'de';
}

export default function StickyMobileCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const hideOnLandingPage = hideStickyCta(pathname);
  const market = marketFromPath(pathname);
  const lang = demoFirstLangFromMarket(market);

  useEffect(() => {
    if (hideOnLandingPage) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = scrollY + winHeight > docHeight - 400;
      setVisible(scrollY > 500 && !nearBottom && !isCookiebotDialogVisible());
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    const stopCookiebotWatch = onCookiebotVisibilityChange(onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      stopCookiebotWatch();
    };
  }, [hideOnLandingPage]);

  if (hideOnLandingPage || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden animate-slide-up">
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
        <DemoFirstActions
          location="sticky"
          lang={lang}
          tone="brand"
          density="compact"
          fullWidth
          align="center"
          showDemoNote
          showTrialDetail
          registerHref={registerHrefForMarket(market)}
        />
      </div>
    </div>
  );
}
