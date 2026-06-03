import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
    optimizeCss: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    // Tamaños de dispositivo optimizados para LCP
    deviceSizes: [390, 640, 768, 1024, 1280, 1440, 1920],
    imageSizes: [32, 64, 96, 128, 176, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  // Headers de seguridad y performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Cache agresivo para assets estáticos
        source: "/(.*)\\.(svg|png|jpg|jpeg|webp|avif|woff2|ico)$",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // Compresión habilitada por defecto en Next.js
  compress: true,

  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/logoico.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
