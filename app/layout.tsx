import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Treatflow - Kosmetikstudio Software für Terminverwaltung & Kundenverwaltung",
    template: "%s | Treatflow"
  },
  description: "Professionelle Kosmetikstudio Software mit Terminkalender, Online-Buchungen, Kundenverwaltung und Behandlungsdokumentation. 14 Tage kostenlos testen. Made in Austria.",
  keywords: ["Kosmetikstudio Software", "Terminverwaltung Kosmetik", "Online Buchungssystem", "Kundenverwaltung Beauty", "Behandlungsdokumentation", "Kosmetik Praxissoftware", "NiSV konform", "Made in Austria"],
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
    url: 'https://treatflow.io',
    title: 'Treatflow - Kosmetikstudio Software für Terminverwaltung & Kundenverwaltung',
    description: 'Professionelle Kosmetikstudio Software mit Terminkalender, Online-Buchungen, Kundenverwaltung und Behandlungsdokumentation. 14 Tage kostenlos testen.',
    siteName: 'Treatflow',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Treatflow - Kosmetikstudio Software Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treatflow - Kosmetikstudio Software',
    description: 'Professionelle Software für Kosmetikstudios. Terminverwaltung, Online-Buchungen & mehr.',
    images: ['/images/og-image.jpg'],
    creator: '@treatflow',
  },
  alternates: {
    canonical: 'https://treatflow.io',
  },
  other: {
    'google-site-verification': 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4f46e5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="Treatflow Blog RSS Feed" href="/blog/feed.xml" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SPCW9Q0HY6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Initialize with denied consent by default (GDPR compliance)
            gtag('consent', 'default', {
              analytics_storage: 'denied'
            });
            
            gtag('config', 'G-SPCW9Q0HY6');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
