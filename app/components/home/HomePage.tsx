import PricingSection from "@/app/components/PricingSection";
import FAQSection from "@/app/components/FAQSection";
import SocialProofBar from "@/app/components/SocialProofBar";
import ProductVideoSection from "@/app/components/ProductVideoSection";
import HomeHero from "./HomeHero";
import StudioDayTimeline from "./StudioDayTimeline";
import HomeFeatureGrid from "./HomeFeatureGrid";
import HomeSupportBanner from "./HomeSupportBanner";
import HomeFinalCta from "./HomeFinalCta";
import HomeSeoLinks from "./HomeSeoLinks";
import type { HomeContent } from "@/app/site/content/home/types";
import type { SiteMarket } from "@/app/site/content/shared";

/**
 * Startseiten-Sektionen für alle Sprachen (ohne Navigation/Footer/JSON-LD).
 * DE: app/(de)/page.tsx, andere Sprachen: app/[market]/(home)/page.tsx.
 */
export default function HomePage({ content, market }: { content: HomeContent; market: SiteMarket }) {
  return (
    <>
      {/* 1. Hero */}
      <HomeHero content={content.hero} market={market} />

      {/* 2. Bewertungen */}
      <SocialProofBar content={content.socialProof} />

      {/* 3. Ein Termin von der Buchung bis zur Nachsorge */}
      <StudioDayTimeline content={content.studioDay} market={market} />

      {/* 4. Funktionen */}
      <HomeFeatureGrid content={content.features} market={market} />

      {/* 5. Produktfilm – nur wenn es ein Video in dieser Sprache gibt */}
      {content.video && <ProductVideoSection {...content.video} />}

      {/* 6. Persönliche Betreuung */}
      <HomeSupportBanner content={content.support} market={market} />

      {/* 7. Preise und FAQ */}
      <PricingSection content={content.pricing} market={market} />
      <FAQSection content={content.faq} market={market} />

      {/* 8. Abschluss */}
      <HomeFinalCta content={content.cta} market={market} />

      {/* SEO: kompakt, nach dem CTA – kein Conversion-Ballast */}
      <HomeSeoLinks content={content.seo} market={market} />
    </>
  );
}
