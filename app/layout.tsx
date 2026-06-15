import type { Metadata, Viewport } from "next";
import {
  GoogleTagManagerHead,
  GoogleTagManagerNoScript,
} from "@/components/analytics/GoogleTagManager";
import { SiteAnalytics } from "@/components/analytics/SiteAnalytics";
import { HERO_LCP } from "@/lib/constants";
import { BRAND } from "@/lib/brand";
import "./globals.css";
import { SITE } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: BRAND.marketing,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "cerrajero lima",
    "cerrajero a domicilio",
    "cerrajero 24 horas",
    "apertura de puertas lima",
    "apertura de autos lima",
    "cerrajería lima",
    "cerrajero san borja",
    "cerrajero miraflores",
    "apertura caja fuerte lima",
    "cambio de cerraduras lima",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
  icons: {
    icon: [
      { url: "/logoico.png", sizes: "512x512", type: "image/png" },
      { url: "/logoico.png", sizes: "192x192", type: "image/png" },
      { url: "/logoico.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/logoico.png", sizes: "512x512", type: "image/png" }],
    shortcut: ["/logoico.png"],
  },
};

const criticalCss = `
#hero-lcp-bg,.hero-shell{background-color:${BRAND.marketingDeep}}
#hero-heading,.hero-shell h1{color:#fff;font-family:system-ui,sans-serif}
.text-gradient-marketing{background:linear-gradient(135deg,#93c5fd,#3b82f6);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero-phone-link{color:#fff}
.marquee-track{animation:none}
@media(min-width:768px){.marquee-track{animation:marquee-scroll 28s linear infinite}}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <GoogleTagManagerHead />
        <link
          rel="preload"
          as="image"
          href={HERO_LCP.avif}
          type="image/avif"
          fetchPriority="high"
        />
        <link rel="icon" href="/logoico.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/logoico.png" sizes="512x512" />
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
      </head>
      <body className="min-h-screen font-sans antialiased pb-20 sm:pb-0">
        <GoogleTagManagerNoScript />
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}
