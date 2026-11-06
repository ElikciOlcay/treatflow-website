import { CheckCircle, X, ArrowRight, ChevronDown } from "lucide-react";
import CTASection from "@/app/components/CTASection";
import PricingSection from "@/app/components/PricingSection";
import QuickFacts from "@/app/components/QuickFacts";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import ContentAttribution from "@/app/components/ContentAttribution";
import AiAnswerCapsule from "@/app/components/AiAnswerCapsule";
import { filterByFeature } from "@/app/i18n/feature-availability";
import { APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";
import { sitePagePath } from "@/app/i18n/site-pages";
import { getFeatureCommon } from "@/app/site/content/feature-common";
import { getHomeContent } from "@/app/site/content/home";
import { getPricingPageContent } from "@/app/site/content/pricing";
import type { SiteMarket } from "@/app/site/content/shared";
import { PageSchemas } from "@/app/site/schema";

/**
 * Preisseite für alle Sprachen (DE: app/(de)/preise, sonst app/[market]/pricing bzw. app/tr/fiyatlar).
 * Markup = bisherige deutsche Seite; Texte aus app/site/content/pricing/<lang>.ts,
 * Preiskarten aus app/site/content/home/<lang>.ts (`pricing`).
 */
export default function PricingPage({ market }: { market: SiteMarket }) {
  const content = getPricingPageContent(market);
  const common = getFeatureCommon(market);
  const homePath = sitePagePath(market, "home") ?? "/";
  const breadcrumbs = [{ label: content.breadcrumb }];
  const { comparison, why } = content;
  const faqData = filterByFeature(content.faq.items, market);
  const rows = filterByFeature(comparison.rows, market);

  const offers = filterByFeature(content.schema.offers, market).map((offer) => ({
    "@type": "Offer",
    name: offer.name,
    price: offer.price,
    priceCurrency: offer.currency,
    priceValidUntil: content.schema.priceValidUntil,
    availability: "https://schema.org/InStock",
    ...(offer.description ? { description: offer.description } : {}),
  }));

  return (
    <>
      <PageSchemas
        market={market}
        path={sitePagePath(market, "pricing") ?? "/"}
        name={content.schema.webPage.name}
        description={content.schema.webPage.description}
        breadcrumbs={breadcrumbs}
        dateModified={content.dates.modified}
        datePublished={content.dates.published}
        faq={faqData}
        software={{ offers }}
        speakable={["#treatflow-quick-facts"]}
      />

      <Breadcrumbs items={breadcrumbs} homeHref={homePath} homeLabel={common.breadcrumbHome} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mb-6 relative z-10">
        <AiAnswerCapsule question={content.capsule.question} answer={content.capsule.answer} />
        <ContentAttribution
          dateModified={content.dates.modified}
          datePublished={content.dates.published}
          className="mb-4"
          market={market}
        />
      </div>

      {/* Pricing Cards */}
      <PricingSection content={getHomeContent(market).pricing} market={market} headingLevel="h1" />

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {comparison.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {comparison.subtitle}
            </p>
            <p className="text-sm text-gray-500 mt-2">{comparison.vatNote}</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-900 text-white">
              <div className="p-4 sm:p-6 font-semibold text-sm sm:text-base">{comparison.featureLabel}</div>
              <div className="p-4 sm:p-6 text-center font-semibold text-sm sm:text-base">{comparison.basicLabel}</div>
              <div className="p-4 sm:p-6 text-center font-semibold text-sm sm:text-base bg-indigo-600">{comparison.bookingLabel}</div>
            </div>
            {rows.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b border-gray-100 last:border-b-0`}
              >
                <div className="p-4 sm:p-5 text-sm sm:text-base text-gray-700 font-medium">
                  {row.label}
                </div>
                <div className="p-4 sm:p-5 flex justify-center items-center">
                  {row.basic ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300" />
                  )}
                </div>
                <div className="p-4 sm:p-5 flex justify-center items-center">
                  {row.booking ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={APP_REGISTER_BY_MARKET[market]}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors text-center flex items-center justify-center"
            >
              {comparison.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Treatflow */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {why.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {why.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {why.stats.map((stat) => (
              <div key={stat.label} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuickFacts variant="compact" market={market} speakableSchema={false} />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {content.faq.title}
            </h2>
            <p className="text-lg text-gray-600">
              {content.faq.subtitle}
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection market={market} />
    </>
  );
}
