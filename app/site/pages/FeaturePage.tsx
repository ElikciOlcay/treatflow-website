import type { ReactNode } from "react";
import Script from "next/script";
import SocialProofBar from "@/app/components/SocialProofBar";
import { generateBreadcrumbSchema } from "@/app/components/Breadcrumbs";
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
import { BASE_URL } from "@/app/i18n/config";
import { filterByFeature } from "@/app/i18n/feature-availability";
import { resolveHref, sitePagePath, type SitePageKey } from "@/app/i18n/site-pages";
import { generateWebPageSchema } from "@/lib/content-attribution";
import { getFeatureCommon, type FeaturePageContent } from "@/app/site/content/feature-common";
import { getHomeContent } from "@/app/site/content/home";
import { gatedTexts, type SiteMarket } from "@/app/site/content/shared";
import { siteIcons } from "@/app/site/icons";

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
  const pageUrl = `${BASE_URL}${sitePagePath(market, pageKey) ?? ""}`;
  const homePath = sitePagePath(market, "home") ?? "/";
  const featuresPath = sitePagePath(market, "features");
  const breadcrumbs = [
    featuresPath
      ? { label: common.breadcrumbFeatures, href: featuresPath }
      : { label: common.breadcrumbFeatures },
    { label: content.breadcrumb },
  ];

  const faqs = filterByFeature(content.faq.items, market);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const sw = content.schema.software;
  const softwareSchema = sw && {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: sw.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: sw.description,
    url: pageUrl,
    ...(sw.featureList ? { featureList: sw.featureList } : {}),
    offers: { "@type": "Offer", price: sw.price, priceCurrency: sw.currency },
    ...(sw.rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.6",
            reviewCount: "19",
            bestRating: "5",
          },
        }
      : {}),
  };

  const id = content.schema.id;
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            market === "de"
              ? generateBreadcrumbSchema(breadcrumbs)
              : generateBreadcrumbSchema(breadcrumbs, homePath, common.breadcrumbHome)
          ),
        }}
      />
      <Script id={`${id}-faq-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script
        id={`${id}-webpage-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateWebPageSchema({
              name: content.schema.webPage.name,
              description: content.schema.webPage.description,
              url: pageUrl,
              dateModified: content.dates.modified,
              datePublished: content.dates.published,
              inLanguage: common.schemaLanguage,
            })
          ),
        }}
      />
      {softwareSchema && (
        <Script id={`${id}-software-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      )}

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
