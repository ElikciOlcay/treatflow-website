import RootDocument from "@/app/components/RootDocument";
import { rootMetadata, rootViewport } from "@/app/root-metadata";

export const metadata = rootMetadata;
export const viewport = rootViewport;

/** Eigene Seiten unter /it, die nicht über [market] laufen (Beispiel-Formulare unter /it/try-forms). */
export default function ItalianLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="it">{children}</RootDocument>;
}
