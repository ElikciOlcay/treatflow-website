import InternationalSeoPage from "@/app/components/InternationalSeoPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { buildIntlFeatureContent } from "@/app/i18n/markets/intl-feature-pages";

const content = buildIntlFeatureContent("fr", "beauty-salon-software")!;

export const metadata = buildPageMetadata({
  pageKey: "beauty-salon-software",
  locale: "fr",
  title: content.serviceName,
  description: content.serviceDescription,
});

export default function Page() {
  return <InternationalSeoPage content={content} />;
}
