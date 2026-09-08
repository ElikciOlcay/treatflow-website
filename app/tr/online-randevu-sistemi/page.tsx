import type { Metadata } from "next";
import TrSeoShell from "@/app/components/tr-seo/TrSeoShell";
import TrMoneyPage from "@/app/components/tr-seo/TrMoneyPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { bookingPage } from "@/app/i18n/tr-seo/money-pages";

export const metadata: Metadata = buildPageMetadata({
  pageKey: bookingPage.pageKey,
  locale: "tr",
  title: bookingPage.title,
  description: bookingPage.description,
});

export default function Page() {
  return (
    <TrSeoShell>
      <TrMoneyPage content={bookingPage} />
    </TrSeoShell>
  );
}
