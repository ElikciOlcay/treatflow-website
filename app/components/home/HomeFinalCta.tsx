import { ArrowRight, CheckCircle } from "lucide-react";
import { APP_REGISTER_BY_MARKET, demoBookingUrl } from "@/app/i18n/market-access";
import type { HomeCtaContent } from "@/app/site/content/home/types";
import type { SiteMarket } from "@/app/site/content/shared";

/** Startseite, Abschnitt 7: Abschluss-CTA. */
export default function HomeFinalCta({ content, market }: { content: HomeCtaContent; market: SiteMarket }) {
  const demoUrl = demoBookingUrl(market);
  return (
    <section className="py-20 bg-indigo-600" aria-label={content.ariaLabel}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
          {content.title}
        </h2>
        <p className="text-indigo-100 text-lg mb-8">
          {content.subtitle}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 text-white/90">
          {content.checks.map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-3 text-sm"
            >
              <CheckCircle className="h-4 w-4 text-indigo-200 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
          <a
            href={APP_REGISTER_BY_MARKET[market]}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
          >
            {content.primaryCta}
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
            >
              {content.demoCta}
            </a>
          )}
        </div>
        <p className="text-sm text-indigo-200 mt-6">{content.note}</p>
      </div>
    </section>
  );
}
