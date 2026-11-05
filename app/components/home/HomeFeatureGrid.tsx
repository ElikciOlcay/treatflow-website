import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { filterByFeature } from "@/app/i18n/feature-availability";
import { APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";
import { resolveHref } from "@/app/i18n/site-pages";
import { siteIcons } from "@/app/site/icons";
import type { HomeFeaturesContent } from "@/app/site/content/home/types";
import type { SiteMarket } from "@/app/site/content/shared";

/** Startseite, Abschnitt 4: Funktionskacheln + Test-CTA. */
export default function HomeFeatureGrid({
  content,
  market,
}: {
  content: HomeFeaturesContent;
  market: SiteMarket;
}) {
  const items = filterByFeature(content.items, market).flatMap((item) => {
    const href = resolveHref(market, item.href);
    return href ? [{ ...item, href, Icon: siteIcons[item.icon] }] : [];
  });

  return (
    <section id="features" className="py-20 bg-gray-50 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl block"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <item.Icon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.label}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href={APP_REGISTER_BY_MARKET[market]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            {content.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="text-sm text-gray-500 mt-3">{content.ctaNote}</p>
        </div>
      </div>
    </section>
  );
}
