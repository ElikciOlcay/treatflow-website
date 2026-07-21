import Script from "next/script";

/**
 * Setzt <html lang> fuer Nicht-Default-Locales.
 * Blocking Script im Head, damit Crawler den Wert auch ohne Client-Hydration sehen.
 * (Root-Layout bleibt lang="de", um alle DE-SSG-Seiten nicht dynamisch zu machen.)
 */
export default function HtmlLang({ lang }: { lang: string }) {
  const safeLang = lang.replace(/[^a-zA-Z-]/g, "");
  return (
    <Script id={`html-lang-${safeLang}`} strategy="beforeInteractive">
      {`document.documentElement.lang=${JSON.stringify(safeLang)};`}
    </Script>
  );
}
