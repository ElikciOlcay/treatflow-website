import { Inter } from "next/font/google";
import Script from "next/script";
import StickyMobileCTA from "./StickyMobileCTA";
import AiSearchTrafficCapture from "./AiSearchTrafficCapture";
import AdsAttributionCapture from "./AdsAttributionCapture";
import { GTM_CONTAINER_ID } from "@/lib/cookiebot";
import "../globals.css";

const GOOGLE_ADS_ID = (process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "").trim();
const GOOGLE_ADS_ID_VALID = /^AW-\d+$/.test(GOOGLE_ADS_ID);

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/**
 * llms.txt je Website-Sprache (public/llms*.txt). Deutsch bleibt /llms.txt,
 * unbekannte Sprachen (Legacy-Märkte) bekommen die englische Datei.
 */
const LLMS_BY_LANG: Record<string, { href: string; label: string }> = {
  de: { href: "/llms.txt", label: "Deutsch" },
  en: { href: "/llms-en.txt", label: "English" },
  tr: { href: "/llms-tr.txt", label: "Türkçe" },
  nl: { href: "/llms-nl.txt", label: "Nederlands" },
  it: { href: "/llms-it.txt", label: "Italiano" },
  pl: { href: "/llms-pl.txt", label: "Polski" },
  es: { href: "/llms-es.txt", label: "Español" },
  fr: { href: "/llms-fr.txt", label: "Français" },
};

/**
 * Gemeinsames <html>-Grundgerüst aller Root-Layouts (Deutsch, Sprach-Märkte, /en, /tr).
 * Die Sprache steht dadurch schon im ausgelieferten HTML und nicht erst nach einem Skript.
 */
export default function RootDocument({
  lang,
  children,
}: Readonly<{
  lang: string;
  children: React.ReactNode;
}>) {
  const llms = LLMS_BY_LANG[lang.slice(0, 2).toLowerCase()] ?? LLMS_BY_LANG.en;
  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <head>
        {/* Consent Mode v2: Defaults denied, bevor GTM und Cookiebot laden.
            Cookiebot CMP im GTM aktualisiert die Signale nach der Nutzerwahl. */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'denied',
              personalization_storage: 'denied',
              security_storage: 'granted',
              wait_for_update: 500
            });
            gtag('set', 'url_passthrough', true);
            gtag('set', 'ads_data_redaction', true);
          `}
        </Script>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
        </Script>
        {GOOGLE_ADS_ID_VALID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-ads-config" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = window.gtag || gtag;
                gtag('set', 'linker', {
                  domains: ['treatflow.io', 'www.treatflow.io', 'app.treatflow.io']
                });
                gtag('config', '${GOOGLE_ADS_ID}', { allow_enhanced_conversions: true });
              `}
            </Script>
          </>
        ) : null}

        <link rel="alternate" type="application/rss+xml" title="Treatflow Blog RSS Feed" href="/blog/feed.xml" />
        <link
          rel="alternate"
          type="text/plain"
          title={`LLM Context (${llms.label})`}
          href={llms.href}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased overflow-x-hidden`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <AdsAttributionCapture />
        <AiSearchTrafficCapture />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
