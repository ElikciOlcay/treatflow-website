import RootDocument from "@/app/components/RootDocument";
import { rootMetadata, rootViewport } from "@/app/root-metadata";

export const metadata = rootMetadata;
export const viewport = rootViewport;

/** Eigene Seiten unter /en, die nicht über [market] laufen (z. B. try-forms). */
export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
