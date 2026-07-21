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
        availableLanguage: ['German', 'English', 'Spanish', 'Italian', 'French'],
        areaServed: ['DE', 'AT', 'CH', 'ES', 'IT', 'FR', 'BE', 'EU'],
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
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Consent Mode v2 Defaults - muss VOR dem gtag.js-Loader laufen,
            damit GA4 die Consent-Signale von Anfang an respektiert.
            CookieBanner ruft spaeter gtag('consent', 'update', ...) auf,
            sobald der Nutzer im Banner zugestimmt hat. */}
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

        <Script
          id="ga4-loader"
          src="https://www.googletagmanager.com/gtag/js?id=G-SPCW9Q0HY6"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`gtag('config', 'G-SPCW9Q0HY6', { anonymize_ip: true });`}
        </Script>

        <link rel="alternate" type="application/rss+xml" title="Treatflow Blog RSS Feed" href="/blog/feed.xml" />
        <link rel="alternate" type="text/plain" title="LLM Context" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationWebSiteSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased overflow-x-hidden`}
      >
        {children}
        <StickyMobileCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
