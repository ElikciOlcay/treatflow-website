import type { Metadata } from "next";
import TrSeoShell from "@/app/components/tr-seo/TrSeoShell";
import TrMoneyPage from "@/app/components/tr-seo/TrMoneyPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { laserPage } from "@/app/i18n/tr-seo/money-pages";

export const metadata: Metadata = buildPageMetadata({
  pageKey: laserPage.pageKey,
  locale: "tr",
  title: laserPage.title,
  description: laserPage.description,
});

export default function Page() {
  return (
    <TrSeoShell>
      <TrMoneyPage content={laserPage} />
    </TrSeoShell>
  );
}
