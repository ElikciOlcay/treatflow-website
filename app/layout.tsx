import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";
import StickyMobileCTA from "./components/StickyMobileCTA";
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
  keywords: [
    "Kosmetikstudio Software",
    "Beauty Studio Software",
    "Online Buchungssystem Kosmetik",
    "Digitale Kundenkartei",
    "NiSV Dokumentation",
  ],
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
        url: 'https://www.treatflow.io/images/og-image.jpg',
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
    images: ['https://www.treatflow.io/images/og-image.jpg'],
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

const organizationWebSiteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Treatflow',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logos/treatflow-logo.svg`,
      },
      description: 'Software für Kosmetikstudio: Terminkalender, digitale Kundenkartei, Online-Buchungen und Behandlungsdokumentation. Made in Austria.',
      sameAs: [
        'https://www.instagram.com/treatflow.io/',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'hello@treatflow.io',
        availableLanguage: 'German',
        areaServed: ['DE', 'AT'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Treatflow - Kosmetikstudio Software',
      description: 'Software für Kosmetikstudio: Terminkalender, Kundenkartei, Online-Buchungen, Behandlungsdokumentation.',
      publisher: { '@id': `${baseUrl}/#organization` },
      inLanguage: 'de-DE',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${baseUrl}/blog?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" dir="ltr">
      <head>
        {/* Consent Mode v2 Defaults - muss VOR GTM laden, damit GTM-Tags die
            Consent-Signale korrekt respektieren. GA4 wird ausschliesslich
            ueber den GTM-Container (GTM-KK359VS8) konfiguriert, kein zweiter
            gtag.js-Loader mehr (verhindert Doppel-PageViews). */}
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
            gtag('js', new Date());
          `}
        </Script>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KK359VS8');`}
        </Script>

        <link rel="alternate" type="application/rss+xml" title="Treatflow Blog RSS Feed" href="/blog/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationWebSiteSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KK359VS8"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {children}
        <StickyMobileCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
