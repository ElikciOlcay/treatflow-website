import type { ReactNode } from "react";
import SocialProofBar from "@/app/components/SocialProofBar";
import FeatureHero, { FeatureTitleHighlight, type FeatureHeroThemeKey } from "@/app/components/FeatureHero";
import ProductVideoSection from "@/app/components/ProductVideoSection";
import {
  FeatureUnderstand,
  FeatureHowItWorks,
  FeatureCards,
  FeatureFaq,
  FeatureRelated,
  FeaturePageCta,
} from "@/app/components/FeatureSections";
import { filterByFeature } from "@/app/i18n/feature-availability";
import { resolveHref, sitePagePath, type SitePageKey } from "@/app/i18n/site-pages";
import { getFeatureCommon, type FeaturePageContent } from "@/app/site/content/feature-common";
import { getHomeContent } from "@/app/site/content/home";
import { gatedTexts, type SiteMarket } from "@/app/site/content/shared";
import { siteIcons } from "@/app/site/icons";
import { PageSchemas } from "@/app/site/schema";

/**
 * Funktionsseite im Hero/Sections-Layout für alle Sprachen
 * (Terminkalender, Online-Buchungen, Kundenverwaltung).
 * Markup = bisherige deutsche Seiten; Texte aus app/site/content/<seite>/<lang>.ts.
 */
export default function FeaturePage({
  content,
  market,
  pageKey,
  theme,
  afterUnderstand,
}: {
  content: FeaturePageContent;
  market: SiteMarket;
  pageKey: SitePageKey;
  theme: FeatureHeroThemeKey;
  /** Optionale Spezialsektion zwischen Understand und HowItWorks (z. B. Formulare: „Beispiele testen“). */
  afterUnderstand?: ReactNode;
}) {
  const common = getFeatureCommon(market);
  const featuresPath = sitePagePath(market, "features");
  const breadcrumbs = [
    featuresPath
      ? { label: common.breadcrumbFeatures, href: featuresPath }
      : { label: common.breadcrumbFeatures },
    { label: content.breadcrumb },
  ];

  const faqs = filterByFeature(content.faq.items, market);
  const sw = content.schema.software;
  const hero = content.hero;
  const heroSecondaryHref = hero.secondaryCta ? resolveHref(market, hero.secondaryCta.href) : null;
  const ctaSecondaryHref = content.cta.secondary ? resolveHref(market, content.cta.secondary.href) : null;
  const related = filterByFeature(content.related.items, market).flatMap((item) => {
    const href = resolveHref(market, item.href);
    return href ? [{ href, title: item.title, description: item.description }] : [];
  });
  const icon = (name: keyof typeof siteIcons) => siteIcons[name];

  return (
    <>
      <PageSchemas
        market={market}
        path={sitePagePath(market, pageKey) ?? "/"}
        name={content.schema.webPage.name}
        description={content.schema.webPage.description}
        breadcrumbs={breadcrumbs}
        dateModified={content.dates.modified}
        datePublished={content.dates.published}
        faq={faqs}
        software={{ description: sw?.description, featureList: sw?.featureList, rating: sw?.rating }}
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
        aiCapsules={filterByFeature(hero.capsules, market).map(({ question, answer }) => ({ question, answer }))}
        dateModified={content.dates.modified}
        datePublished={content.dates.published}
        image={hero.image}
      />

      {content.video && (
        <ProductVideoSection
          title={content.video.title}
          description={content.video.description}
          videoSrc={content.video.videoSrc}
          posterSrc={content.video.posterSrc}
          posterAlt={content.video.posterAlt}
          playLabel={content.video.playLabel}
          playAriaPrefix={content.video.playAriaPrefix}
          unsupported={content.video.unsupported}
        />
      )}

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

      {afterUnderstand}

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
