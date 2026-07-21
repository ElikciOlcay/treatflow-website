import FeaturePageEn from "@/app/components/FeaturePageEn";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getIntlFeaturePage } from "@/app/i18n/markets/feature-pages-intl";

const content = getIntlFeaturePage("es", "forms");

export const metadata = buildPageMetadata({
  pageKey: "forms",
  locale: "es",
  title: content.title,
  description: content.subtitle,
});

export default function Page() {
  return <FeaturePageEn {...content} />;
}
