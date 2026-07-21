// next.config.js (TypeScript)

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  async rewrites() {
    return {
      // fallback rewrites greifen NUR, wenn weder eine Page-Route noch eine
      // statische Datei in /public unter dieser URL existiert. Damit liefert
      // /images/og-*.jpg fuer alle fehlenden OG-Bilder dynamisch ein Bild
      // aus /og?slug=...; bestehende statische OG-Bilder bleiben unberuehrt.
      fallback: [
        {
          source: '/images/og-:slug.jpg',
          destination: '/og?slug=:slug',
        },
      ],
    };
  },

  async redirects() {
    return [
      // Brand-Keywords: treatflow login
      { source: '/login', destination: 'https://app.treatflow.io/auth/login', permanent: true },

      // vorhandene Redirects
      { source: '/home', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },

      // Legacy English-NL Markt → globale EN-Seiten
      { source: '/en-nl', destination: '/en', permanent: true },
      { source: '/en-nl/:path*', destination: '/en/:path*', permanent: true },

      // Neuigkeiten-Seite vorerst entfernt
      { source: '/neuigkeiten', destination: '/', permanent: true },
      { source: '/neuigkeiten/', destination: '/', permanent: true },

      // 404-Fixes: Alte URLs aus Search Console
      { source: '/cookie-richtlinie-eu', destination: '/datenschutz', permanent: true },
      { source: '/cookie-richtlinie-eu/', destination: '/datenschutz', permanent: true },
      { source: '/datenschutzerklaerung', destination: '/datenschutz', permanent: true },
      { source: '/datenschutzerklaerung/', destination: '/datenschutz', permanent: true },
      { source: '/category/behandlungsdokumentation', destination: '/behandlungsdokumentation', permanent: true },
      { source: '/category/behandlungsdokumentation/', destination: '/behandlungsdokumentation', permanent: true },
      { source: '/uber-treatflow', destination: '/ueber-uns', permanent: true },
      { source: '/uber-treatflow/', destination: '/ueber-uns', permanent: true },
      { source: '/category/digitale-kundenkartei', destination: '/kundenkartei-software', permanent: true },
      { source: '/category/digitale-kundenkartei/', destination: '/kundenkartei-software', permanent: true },
      { source: '/vom-papier-zum-pixel-warum-ihr-schoenheitssalon-treatflow-fuer-effektive-medizinische-anamnese-und-behandlungsdokumentation-benoetigt', destination: '/behandlungsdokumentation', permanent: true },
      { source: '/vom-papier-zum-pixel-warum-ihr-schoenheitssalon-treatflow-fuer-effektive-medizinische-anamnese-und-behandlungsdokumentation-benoetigt/', destination: '/behandlungsdokumentation', permanent: true },

      // Thematische Redirects alter Blogartikel auf passende Zielseiten
      {
        source: '/anamnese-im-kosmetikstudio-wie-sie-mit-der-richtigen-methode-erfolgreich-behandeln',
        destination: '/anamnesebogen-kosmetikstudio',
        permanent: true,
      },
      {
        source: '/warum-eine-digitale-kundenkartei-fuer-kosmetikstudios-unverzichtbar-ist',
        destination: '/kundenkartei-software',
        permanent: true,
      },
      {
        source: '/behandlungen-dokumentieren-wie-digitale-tools-den-prozess-optimieren',
        destination: '/behandlungsdokumentation',
        permanent: true,
      },
      {
        source: '/die-zukunft-der-kosmetikbranche-trends-und-technologien-die-kosmetikstudios-2024-kennen-sollten',
        destination: '/kosmetikstudio-software',
        permanent: true,
      },
      {
        source: '/die-zukunft-der-behandlungsdokumentation-in-kosmetikstudios',
        destination: '/behandlungsdokumentation-kosmetikstudio',
        permanent: true,
      },

      // mit trailing slash
      {
        source: '/anamnese-im-kosmetikstudio-wie-sie-mit-der-richtigen-methode-erfolgreich-behandeln/',
        destination: '/anamnesebogen-kosmetikstudio',
        permanent: true,
      },
      {
        source: '/warum-eine-digitale-kundenkartei-fuer-kosmetikstudios-unverzichtbar-ist/',
        destination: '/kundenkartei-software',
        permanent: true,
      },
      {
        source: '/behandlungen-dokumentieren-wie-digitale-tools-den-prozess-optimieren/',
        destination: '/behandlungsdokumentation',
        permanent: true,
      },
      {
        source: '/die-zukunft-der-kosmetikbranche-trends-und-technologien-die-kosmetikstudios-2024-kennen-sollten/',
        destination: '/kosmetikstudio-software',
        permanent: true,
      },
      {
        source: '/die-zukunft-der-behandlungsdokumentation-in-kosmetikstudios/',
        destination: '/behandlungsdokumentation-kosmetikstudio',
        permanent: true,
      },

      // Keyword-Kannibalisierung: Duplicate-Intent-Seiten konsolidieren
      { source: '/kundenkartei-kosmetikstudio', destination: '/kundenkartei-software', permanent: true },
      { source: '/kundenkartei-kosmetikstudio/', destination: '/kundenkartei-software', permanent: true },
      { source: '/terminsoftware-kosmetikstudio', destination: '/terminkalender', permanent: true },
      { source: '/terminsoftware-kosmetikstudio/', destination: '/terminkalender', permanent: true },
      { source: '/online-terminbuchung-kosmetikstudio', destination: '/online-buchungen', permanent: true },
      { source: '/online-terminbuchung-kosmetikstudio/', destination: '/online-buchungen', permanent: true },

      // Geo-Seiten auf Exact-Match-URLs umgezogen (kosmetikstudio-software-*)
      { source: '/studio-software-oesterreich', destination: '/kosmetikstudio-software-oesterreich', permanent: true },
      { source: '/studio-software-oesterreich/', destination: '/kosmetikstudio-software-oesterreich', permanent: true },
      { source: '/studio-software-deutschland', destination: '/kosmetikstudio-software-deutschland', permanent: true },
      { source: '/studio-software-deutschland/', destination: '/kosmetikstudio-software-deutschland', permanent: true },

      // Exact-Match-Keywords auf bestehende Money-Pages
      { source: '/kosmetikstudio-terminplaner', destination: '/terminkalender', permanent: true },
      { source: '/kosmetikstudio-terminplaner/', destination: '/terminkalender', permanent: true },
      { source: '/online-buchung-kosmetikstudio', destination: '/online-buchungen', permanent: true },
      { source: '/online-buchung-kosmetikstudio/', destination: '/online-buchungen', permanent: true },
    ];
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  ...(process.env.ANALYZE === 'true'
    ? {
      webpack: (config: any) => {
        config.plugins.push(
          new (require('@next/bundle-analyzer'))({
            enabled: true,
          })
        );
        return config;
      },
    }
    : {}),
};

export default nextConfig;
