import SocialProofBar from "@/app/components/SocialProofBar";
import FeatureHero, { FeatureTitleHighlight } from "@/app/components/FeatureHero";
import {
  FeatureUnderstand,
  FeatureHowItWorks,
  FeatureCards,
  FeatureFaq,
  FeatureRelated,
  FeaturePageCta,
} from "@/app/components/FeatureSections";
import { filterByFeature } from "@/app/i18n/feature-availability";
import { resolveHref, sitePagePath } from "@/app/i18n/site-pages";
import { getFeatureCommon } from "@/app/site/content/feature-common";
import { getHomeContent } from "@/app/site/content/home";
import { getIntegrationsContent } from "@/app/site/content/integrations";
import { gatedTexts, type SiteMarket } from "@/app/site/content/shared";
import { siteIcons } from "@/app/site/icons";
import { PageSchemas } from "@/app/site/schema";

const theme = "indigo" as const;

/**
 * Seite „integrations“ für alle Sprachen (DE: Root-Route, sonst app/[market]/…).
 * Wie FeaturePage, aber mit App-Raster im Hero statt Bild und ohne Datum
 * (WebPage-Schema aus Meta-Titel/-Beschreibung). Texte: app/site/content/integrations/<lang>.ts
 */
export default function IntegrationsPage({ market }: { market: SiteMarket }) {
  const content = getIntegrationsContent(market);
  const common = getFeatureCommon(market);
  const featuresPath = sitePagePath(market, "features");
  const breadcrumbs = [
    featuresPath
      ? { label: common.breadcrumbFeatures, href: featuresPath }
      : { label: common.breadcrumbFeatures },
    { label: content.breadcrumb },
  ];

  const faqs = filterByFeature(content.faq.items, market);
  const hero = content.hero;
  const heroSecondaryHref = hero.secondaryCta ? resolveHref(market, hero.secondaryCta.href) : null;
  const ctaSecondaryHref = content.cta.secondary ? resolveHref(market, content.cta.secondary.href) : null;
  const related = filterByFeature(content.related.items, market).flatMap((item) => {
    const href = resolveHref(market, item.href);
    return href ? [{ href, title: item.title, description: item.description }] : [];
  });
  const tiles = filterByFeature(hero.tiles, market);
  const icon = (name: keyof typeof siteIcons) => siteIcons[name];

  return (
    <>
      <PageSchemas
        market={market}
        path={sitePagePath(market, "integrations") ?? "/"}
        name={content.meta.title}
        description={content.meta.description}
        breadcrumbs={breadcrumbs}
        faq={faqs}
      />

      <FeatureHero
        theme={theme}
        market={market}
        breadcrumbs={breadcrumbs}
        eyebrow={hero.eyebrow}
        eyebrowIcon={icon(hero.eyebrowIcon)}
        title={
          <>
            {hero.title.before}
            <FeatureTitleHighlight theme={theme}>{hero.title.highlight}</FeatureTitleHighlight>
            {hero.title.after || null}
          </>
        }
        description={hero.description}
        chips={gatedTexts(hero.chips, market)}
        secondaryCta={
          hero.secondaryCta && heroSecondaryHref
            ? { label: hero.secondaryCta.label, href: heroSecondaryHref }
            : undefined
        }
        aiCapsules={filterByFeature(hero.capsules ?? [], market).map(({ question, answer }) => ({ question, answer }))}
        visual={
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {tiles.map((app) => {
              const Icon = icon(app.icon);
              return (
                <div
                  key={app.name}
                  className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-lg shadow-gray-100/80"
                >
                  <div className={`w-11 h-11 bg-gradient-to-r ${app.gradient} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{app.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{app.category}</p>
                </div>
              );
            })}
          </div>
        }
      />

      <FeatureUnderstand
        theme={theme}
        market={market}
        title={content.understand.title}
        description={content.understand.description}
        items={filterByFeature(content.understand.items, market).map((item) => ({
          icon: icon(item.icon),
          title: item.title,
          text: item.text,
        }))}
      />

      <FeatureHowItWorks
        theme={theme}
        market={market}
        title={content.howItWorks.title}
        description={content.howItWorks.description}
        steps={filterByFeature(content.howItWorks.steps, market)}
      />

      <FeatureCards
        theme={theme}
        market={market}
        title={content.cards.title}
        description={content.cards.description}
        items={filterByFeature(content.cards.items, market).map((item) => ({
          icon: icon(item.icon),
          title: item.title,
          text: item.text,
          points: item.points ? gatedTexts(item.points, market) : undefined,
        }))}
      />

      <SocialProofBar content={getHomeContent(market).socialProof} />

      <FeatureFaq market={market} title={content.faq.title} items={faqs} />

      <FeatureRelated market={market} title={content.related.title} items={related} />

      <FeaturePageCta
        theme={theme}
        market={market}
        title={content.cta.title}
        description={content.cta.description}
        secondaryLabel={content.cta.secondary && ctaSecondaryHref ? content.cta.secondary.label : undefined}
        secondaryHref={ctaSecondaryHref ?? undefined}
      />
    </>
  );
}
