import { buildPageMetadata } from "@/app/i18n/seo";
import PricingPageIntl from "@/app/components/PricingPageIntl";
import { getPricingIntlCopy } from "@/app/i18n/markets/pricing-intl";

const copy = getPricingIntlCopy("es");

export const metadata = buildPageMetadata({
  pageKey: "pricing",
  locale: "es",
  title: copy.meta.title,
  description: copy.meta.description,
});

export default function EsPricingPage() {
  return <PricingPageIntl copy={copy} />;
}
