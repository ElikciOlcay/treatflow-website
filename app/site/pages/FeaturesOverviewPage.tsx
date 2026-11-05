import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import CTASection from "@/app/components/CTASection";
import FeatureHero, { FeatureTitleHighlight } from "@/app/components/FeatureHero";
import { filterByFeature } from "@/app/i18n/feature-availability";
import { resolveHref, sitePagePath } from "@/app/i18n/site-pages";
import { getFeaturesContent } from "@/app/site/content/features";
import type { SiteMarket } from "@/app/site/content/shared";
import { siteIcons } from "@/app/site/icons";
import { PageSchemas } from "@/app/site/schema";

/**
 * Funktionsübersicht für alle Sprachen (DE: app/(de)/funktionen, sonst app/[market]/features).
 * Markup = bisherige deutsche Seite; Texte aus app/site/content/features/<lang>.ts.
 * Karten, deren Zielseite es in der Sprache (noch) nicht gibt, entfallen.
 */
export default function FeaturesOverviewPage({ market }: { market: SiteMarket }) {
  const content = getFeaturesContent(market);
  const breadcrumbs = [{ label: content.breadcrumb }];
  const { hero, grid, why } = content;
  const secondaryHref = resolveHref(market, hero.secondaryCta.href);
  const tiles = filterByFeature(hero.tiles, market);
  const items = filterByFeature(grid.items, market).flatMap((item) => {
    const href = resolveHref(market, item.href);
    return href ? [{ ...item, href, Icon: siteIcons[item.icon] }] : [];
  });

  return (
    <>
      <PageSchemas
        market={market}
        path={sitePagePath(market, "features") ?? "/"}
        name={content.meta.title}
        description={content.meta.description}
        breadcrumbs={breadcrumbs}
        software={{ featureList: items.map((item) => item.title) }}
      />

      <FeatureHero
        theme="indigo"
        market={market}
        breadcrumbs={breadcrumbs}
        eyebrow={hero.eyebrow}
        eyebrowIcon={siteIcons[hero.eyebrowIcon]}
        title={
          <>
            {hero.title.before}
            <FeatureTitleHighlight>{hero.title.highlight}</FeatureTitleHighlight>
            {hero.title.after || null}
          </>
        }
        description={hero.description}
        chips={hero.chips}
        secondaryCta={secondaryHref ? { label: hero.secondaryCta.label, href: secondaryHref } : undefined}
        visual={
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {tiles.map((item) => {
              const Icon = siteIcons[item.icon];
              return (
                <div key={item.label} className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-lg shadow-gray-100/80 flex items-center gap-3">
                  <div className={`w-11 h-11 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.label}</p>
                </div>
              );
            })}
          </div>
        }
      />

      {/* Kernfunktionen Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {grid.title.replace("{count}", String(items.length))}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {grid.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group flex h-full flex-col bg-white border border-gray-100 rounded-3xl p-7 hover:border-indigo-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`w-11 h-11 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed flex-1">
                  {feature.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {feature.highlights.map((h) => (
                    <li key={h} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center text-sm font-medium text-indigo-600 mt-auto">
                  {grid.more}
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
              {why.title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {why.points.map((v) => (
                <div key={v} className="flex items-start gap-3 p-4">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection market={market} />
    </>
  );
}
