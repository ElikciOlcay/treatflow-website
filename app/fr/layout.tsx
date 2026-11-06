import RootDocument from "@/app/components/RootDocument";
import { rootMetadata, rootViewport } from "@/app/root-metadata";

export const metadata = rootMetadata;
export const viewport = rootViewport;

/** Eigene Seiten unter /fr, die nicht über [market] laufen (Beispiel-Formulare unter /fr/try-forms). */
export default function FrenchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="fr">{children}</RootDocument>;
}
