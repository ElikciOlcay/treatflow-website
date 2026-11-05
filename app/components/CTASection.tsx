import { APP_REGISTER_BY_MARKET, DEMO_BOOKING_URL } from '@/app/i18n/market-access';
import { getFeatureCommon } from '@/app/site/content/feature-common';
import type { SiteMarket } from '@/app/site/content/shared';

/** Abschluss-Block mit Test- und Beratungs-Button. Ohne Props = Deutsch. */
export default function CTASection({ market = 'de' }: { market?: SiteMarket } = {}) {
    const content = getFeatureCommon(market).ctaSection;
    return (
        <section className="py-20 bg-indigo-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                    {content.title}
                </h2>
                <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
                    {content.text}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href={APP_REGISTER_BY_MARKET[market]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                    >
                        {content.primary}
                    </a>
                    <a
                        href={DEMO_BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                    >
                        {content.demo}
                    </a>
                </div>
            </div>
        </section>
    );
}
