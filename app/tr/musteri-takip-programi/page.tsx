import type { Metadata } from "next";
import TrSeoShell from "@/app/components/tr-seo/TrSeoShell";
import ClientRecordsPage from "@/app/site/pages/ClientRecordsPage";
import { buildPageMetadata } from "@/app/i18n/seo";
import { getClientRecordsContent } from "@/app/site/content/client-records";

const { meta } = getClientRecordsContent("tr");

export const metadata: Metadata = buildPageMetadata({
  pageKey: "client-records",
  locale: "tr",
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
});

/** Gleiche Seite wie DE/[market], Inhalte aus app/site/content/client-records/tr.ts */
export default function Page() {
  return (
    <TrSeoShell>
      <ClientRecordsPage market="tr" />
    </TrSeoShell>
  );
}
