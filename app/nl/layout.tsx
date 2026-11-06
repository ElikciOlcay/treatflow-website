import RootDocument from "@/app/components/RootDocument";
import { rootMetadata, rootViewport } from "@/app/root-metadata";

export const metadata = rootMetadata;
export const viewport = rootViewport;

/** Eigene Seiten unter /nl, die nicht über [market] laufen (Beispiel-Formulare unter /nl/try-forms). */
export default function DutchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="nl">{children}</RootDocument>;
}
