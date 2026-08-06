import { buildPageMetadata } from "@/app/i18n/seo";
import PricingPageIntl from "@/app/components/PricingPageIntl";
import { getPricingIntlCopy } from "@/app/i18n/markets/pricing-intl";

const copy = getPricingIntlCopy("en");

export const metadata = buildPageMetadata({
  pageKey: "pricing",
  locale: "en",
  title: copy.meta.title,
  description: copy.meta.description,
});

export default function EnPricing() {
  return <PricingPageIntl copy={copy} />;
}
