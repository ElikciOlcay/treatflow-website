import SocialProofBar from "@/app/components/SocialProofBar";
import FeatureHero, { FeatureTitleHighlight } from "@/app/components/FeatureHero";
import {
  FeatureUnderstand,
  FeatureHowItWorks,
  FeatureCards,
  FeatureRelated,
  FeaturePageCta,
} from "@/app/components/FeatureSections";
import { filterByFeature } from "@/app/i18n/feature-availability";
import { resolveHref, sitePagePath } from "@/app/i18n/site-pages";
import { getFeatureCommon } from "@/app/site/content/feature-common";
import { getHomeContent } from "@/app/site/content/home";
import { getShopContent } from "@/app/site/content/shop";
import { gatedTexts, type SiteMarket } from "@/app/site/content/shared";
import { siteIcons, type SiteIconName } from "@/app/site/icons";

/**
 * Seite „shop“ (Produktverkauf & Lager) für alle Sprachen.
 * Markup = bisherige deutsche Seite (ohne FAQ/JSON-LD); Texte aus app/site/content/shop/<lang>.ts.
 * Kasse/Gutscheine (DACH-only) entfallen außerhalb von DE über `feature`-Tags bzw. Seiten-Keys.
 */
export default function ShopPage({ market }: { market: SiteMarket }) {
  const content = getShopContent(market);
  const common = getFeatureCommon(market);
  const theme = "emerald" as const;
  const featuresPath = sitePagePath(market, "features");
  const breadcrumbs = [
    featuresPath
      ? { label: common.breadcrumbFeatures, href: featuresPath }
      : { label: common.breadcrumbFeatures },
    { label: content.breadcrumb },
  ];
  const hero = content.hero;
  const heroSecondaryHref = hero.secondaryCta ? resolveHref(market, hero.secondaryCta.href) : null;
  const ctaSecondaryHref = content.cta.secondary ? resolveHref(market, content.cta.secondary.href) : null;
  const related = filterByFeature(content.related.items, market).flatMap((item) => {
    const href = resolveHref(market, item.href);
    return href ? [{ href, title: item.title, description: item.description }] : [];
  });
  const icon = (name: SiteIconName) => siteIcons[name];

  return (
    <>
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
        image={hero.image}
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
