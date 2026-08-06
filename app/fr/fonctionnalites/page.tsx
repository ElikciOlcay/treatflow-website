import FeaturePageEn from "@/app/components/FeaturePageEn";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getExtraFeaturePage } from "@/app/i18n/markets/extra-feature-pages-intl";

const content = getExtraFeaturePage("fr", "features");

export const metadata = buildPageMetadata({
  pageKey: "features",
  locale: "fr",
  title: content.title,
  description: content.subtitle,
});

export default function Page() {
  return <FeaturePageEn {...content} />;
}
