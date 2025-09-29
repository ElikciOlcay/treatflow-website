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

  async redirects() {
    return [
      // vorhandene Redirects
      { source: '/home', destination: '/', permanent: true },
      { source: '/index', destination: '/', permanent: true },

      // neue Redirects für alte Blogartikel
      {
        source: '/anamnese-im-kosmetikstudio-wie-sie-mit-der-richtigen-methode-erfolgreich-behandeln',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/warum-eine-digitale-kundenkartei-fuer-kosmetikstudios-unverzichtbar-ist',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/behandlungen-dokumentieren-wie-digitale-tools-den-prozess-optimieren',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/die-zukunft-der-kosmetikbranche-trends-und-technologien-die-kosmetikstudios-2024-kennen-sollten',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/die-zukunft-der-behandlungsdokumentation-in-kosmetikstudios',
        destination: '/blog',
        permanent: true,
      },

      // optional: mit trailing slash
      {
        source: '/anamnese-im-kosmetikstudio-wie-sie-mit-der-richtigen-methode-erfolgreich-behandeln/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/warum-eine-digitale-kundenkartei-fuer-kosmetikstudios-unverzichtbar-ist/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/behandlungen-dokumentieren-wie-digitale-tools-den-prozess-optimieren/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/die-zukunft-der-kosmetikbranche-trends-und-technologien-die-kosmetikstudios-2024-kennen-sollten/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/die-zukunft-der-behandlungsdokumentation-in-kosmetikstudios/',
        destination: '/blog',
        permanent: true,
      },
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
