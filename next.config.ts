import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https://www.creation-site-internet.dev;
      font-src 'self';
      connect-src 'self' https://vitals.vercel-insights.com https://www.google-analytics.com https://va.vercel-scripts.com;
      object-src 'none';
      base-uri 'self';
      frame-ancestors 'none';
    `.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Embedder-Policy",
    value: "require-corp",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
];

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.creation-site-internet.dev",
        pathname: "/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/Images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "http://www.creation-site-internet.dev",
          },
        ],
        destination: "https://www.creation-site-internet.dev/:1",
        permanent: true,
      },
      {
        source: "/stephane-gamot/portfolio",
        destination: "/fr/stephane-gamot/portfolio",
        permanent: true,
      },
      {
        source: "/stephane-gamot",
        destination: "/fr/stephane-gamot",
        permanent: true,
      },
      {
        source: "/",
        destination: "/fr",
        permanent: true,
      },
      {
        source: "/web",
        destination: "/fr/web",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/fr/contact",
        permanent: true,
      },
      {
        source: "/seo-referencement-naturel",
        destination: "/fr/seo-referencement-naturel",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
