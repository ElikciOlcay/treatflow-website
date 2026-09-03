import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import StickyMobileCTA from "./components/StickyMobileCTA";
import { GTM_CONTAINER_ID } from "@/lib/cookiebot";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const baseUrl = 'https://www.treatflow.io';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Kosmetikstudio Software: Termine & Kunden | Treatflow",
    template: "%s | Treatflow"
  },
  description: "Verwalte Terminkalender, Online-Buchungen, Kundenkartei und Behandlungsdoku – DSGVO-konform, 14 Tage kostenlos testen. Ideal für dein Studio.",
  authors: [{ name: "Treatflow Team" }],
  creator: "Treatflow",
  publisher: "Treatflow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.treatflow.io',
    title: 'Kosmetikstudio Software: Termine & Kunden | Treatflow',
    description: 'Verwalte Terminkalender, Online-Buchungen, Kundenkartei und Behandlungsdoku – DSGVO-konform, 14 Tage kostenlos testen.',
    siteName: 'Treatflow',
    images: [
      {
        url: 'https://www.treatflow.io/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Treatflow - Kosmetikstudio Software Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treatflow - Kosmetikstudio Software',
    description: 'Software für Kosmetikstudio: Terminplaner, Kundenkartei, Online-Buchungen.',
    images: ['https://www.treatflow.io/images/og-image.png'],
    creator: '@treatflow',
  },
  alternates: {
    canonical: 'https://www.treatflow.io',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  manifest: '/manifest.json',
  other: {
    'google-site-verification': 'fB1kQag5y2XvmoHzg6-NG4dFb5qUF47LMa0BDMQHisc',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4f46e5',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" dir="ltr" suppressHydrationWarning>
      <head>
        <Script id="html-lang-from-path" strategy="beforeInteractive">
          {`(function(){try{var p=location.pathname;if(p==="/en"||p.indexOf("/en/")===0){document.documentElement.lang="en";}}catch(e){}})();`}
        </Script>
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
          `}
        </Script>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
        </Script>

        <link rel="alternate" type="application/rss+xml" title="Treatflow Blog RSS Feed" href="/blog/feed.xml" />
        <link rel="alternate" type="text/plain" title="LLM Context" href="/llms.txt" />
        <link rel="alternate" type="text/plain" title="LLM Context (English)" href="/llms-en.txt" hrefLang="en" />
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
        <StickyMobileCTA />
      </body>
    </html>
  );
}
