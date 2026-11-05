import type { Metadata, Viewport } from "next";

const baseUrl = 'https://www.treatflow.io';

/** Standard-Metadaten der deutschen Seiten; die Sprach-Layouts überschreiben Titel, Beschreibung und Locale. */
export const rootMetadata: Metadata = {
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
    // Meta Business (Treatflow) – Domain-Verifizierung für treatflow.io
    'facebook-domain-verification': 'qfde3hj070qzksr1c3fpavsq94kl09',
  },
};

export const rootViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4f46e5',
};
