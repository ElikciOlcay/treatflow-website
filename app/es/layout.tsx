import RootDocument from "@/app/components/RootDocument";
import { rootMetadata, rootViewport } from "@/app/root-metadata";

export const metadata = rootMetadata;
export const viewport = rootViewport;

/** Eigene Seiten unter /es, die nicht über [market] laufen (Beispiel-Formulare unter /es/try-forms). */
export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="es">{children}</RootDocument>;
}
