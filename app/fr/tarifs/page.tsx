import { buildPageMetadata } from "@/app/i18n/seo";
import PricingPageIntl from "@/app/components/PricingPageIntl";
import { getPricingIntlCopy } from "@/app/i18n/markets/pricing-intl";

const copy = getPricingIntlCopy("fr");

export const metadata = buildPageMetadata({
  pageKey: "pricing",
  locale: "fr",
  title: copy.meta.title,
  description: copy.meta.description,
});

export default function FrPricingPage() {
  return <PricingPageIntl copy={copy} />;
}
