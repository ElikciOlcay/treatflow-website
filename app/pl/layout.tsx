import RootDocument from "@/app/components/RootDocument";
import { rootMetadata, rootViewport } from "@/app/root-metadata";

export const metadata = rootMetadata;
export const viewport = rootViewport;

/** Eigene Seiten unter /pl, die nicht über [market] laufen (Beispiel-Formulare unter /pl/try-forms). */
export default function PolishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="pl">{children}</RootDocument>;
}
