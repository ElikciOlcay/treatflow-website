import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import CookieBanner from "./components/CookieBanner";
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
  keywords: ["Kosmetikstudio Software", "Software für Kosmetikstudio", "Software Kosmetikstudio", "Software Kosmetik", "Kundenkartei Kosmetik", "digitale Kundenkartei Kosmetik", "Terminverwaltung Kosmetik", "Terminplaner App Kosmetikstudio", "Online Buchungssystem", "Online Terminbuchung Kosmetik", "Terminbuchungssoftware Kosmetik", "Kundenverwaltung Beauty", "Behandlungsdokumentation", "Behandlungsdokumentation Software Kosmetik", "NiSV konform", "NiSV Dokumentation Software", "NiSV konform dokumentieren", "NiSV Beratungsprotokoll Vorlage", "Anamnese Software Kosmetik", "Einverständniserklärung Kosmetik", "Kosmetik Praxissoftware", "Beste Kosmetikstudio Software", "Kosmetikstudio Software Vergleich", "Kosmetikstudio Software Test", "Kosmetikstudio Software Preis", "Kosmetikstudio Software DSGVO konform", "All-in-One Software Kosmetikstudio", "DSGVO konform Kosmetikstudio", "Beauty Salon Software", "Made in Austria"],
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
  other: {
    'google-site-verification': 'fB1kQag5y2XvmoHzg6-NG4dFb5qUF47LMa0BDMQHisc',
  },
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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KK359VS8');`}
        </Script>
        {/* End Google Tag Manager */}
        
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4f46e5" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="Treatflow Blog RSS Feed" href="/blog/feed.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationWebSiteSchema) }}
        />
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
        <CookieBanner />

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '796776476409381');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=796776476409381&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
