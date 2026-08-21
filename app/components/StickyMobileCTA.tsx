'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import type { Market } from '@/app/i18n/config';
import { isPrefixedMarket } from '@/app/i18n/config';
import { getPrimaryCtaPath, isExternalCta } from '@/app/i18n/market-access';

const LANDING_PAGES_WITH_OWN_STICKY_CTA = ['/landing/kosmetikstudio-software'];

function marketFromPath(pathname: string | null): Market {
  if (!pathname) return 'de';
  const match = pathname.match(/^\/([a-z]{2})(?=\/|$)/);
  if (match && isPrefixedMarket(match[1])) return match[1];
  return 'de';
}

function stickyCopy(market: Market) {
  if (market === 'nl') {
    return { cta: 'Gratis proberen', note: '14 dagen gratis · Geen creditcard' };
  }
  if (market === 'fi') {
    return { cta: 'Aloita ilmainen kokeilu', note: '14 päivää ilmaiseksi · Ei luottokorttia' };
  }
  if (market === 'de') {
    return { cta: 'Jetzt kostenlos testen', note: '14 Tage gratis · Keine Kreditkarte' };
  }
  return { cta: 'Start free trial', note: '14-day free trial · No credit card' };
}

export default function StickyMobileCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const hideOnLandingPage = LANDING_PAGES_WITH_OWN_STICKY_CTA.includes(pathname);
  const market = marketFromPath(pathname);
  const ctaPath = getPrimaryCtaPath(market);
  const external = isExternalCta(market);
  const copy = stickyCopy(market);

  useEffect(() => {
    if (hideOnLandingPage) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const nearBottom = scrollY + winHeight > docHeight - 400;
      const cookieBanner = document.querySelector('[data-cookie-banner]');
      const cookieVisible = cookieBanner !== null;

      setVisible(scrollY > 500 && !nearBottom && !cookieVisible);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [hideOnLandingPage]);

  if (hideOnLandingPage || !visible) return null;

  const className =
    'flex items-center justify-center gap-2 w-full bg-indigo-600 text-white py-3.5 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-colors';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden animate-slide-up">
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3">
        {external ? (
          <a href={ctaPath} target="_blank" rel="noopener noreferrer" className={className}>
            {copy.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        ) : (
          <Link href={ctaPath} className={className}>
            {copy.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
        <p className="text-center text-xs text-gray-500 mt-1.5">{copy.note}</p>
      </div>
    </div>
  );
}
