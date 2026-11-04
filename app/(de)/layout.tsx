import RootDocument from "@/app/components/RootDocument";
import { rootMetadata, rootViewport } from "@/app/root-metadata";

export const metadata = rootMetadata;
export const viewport = rootViewport;

export default function GermanLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="de">{children}</RootDocument>;
}
