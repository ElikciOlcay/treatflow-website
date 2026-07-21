import InternationalSeoPage from "@/app/components/InternationalSeoPage";
import { getGlobalEnPage } from "@/app/i18n/markets/global-en-pages";
import { buildPageMetadata } from "@/app/i18n/seo";

const content = getGlobalEnPage("laser-hair-removal-software");

export const metadata = buildPageMetadata({
  pageKey: content.pageKey,
  locale: "en",
  title: "Laser Hair Removal Software | Treatflow",
  description:
    "Software for laser hair removal studios: session tracking, consent forms, photo documentation and online booking.",
  keywords: [
    "laser hair removal software",
    "laser studio software",
    "IPL software",
  ],
});

export default function Page() {
  return <InternationalSeoPage content={content} />;
}
