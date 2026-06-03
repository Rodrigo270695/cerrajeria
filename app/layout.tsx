import type { Metadata, Viewport } from "next";
import { Asap_Condensed } from "next/font/google";
import { GoogleAds } from "@/components/analytics/GoogleAds";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { PhoneConversionTracker } from "@/components/analytics/PhoneConversionTracker";
import { BRAND } from "@/lib/brand";
import "./globals.css";
import { SITE } from "@/lib/site";

const asap = Asap_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-asap",
  display: "swap",
});

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${asap.variable} scroll-smooth`}>
      <head>
        {/* Preconnect para mejorar LCP de imágenes externas */}
        <link rel="preconnect" href="https://cerrajero.pe" />
        <link rel="dns-prefetch" href="https://cerrajero.pe" />
      </head>
      <body className="min-h-screen font-sans antialiased pb-20 sm:pb-0">
        {/* Skip link — accesibilidad: permite saltar al contenido principal */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Saltar al contenido principal
        </a>
        <GoogleTagManager />
        <GoogleAds />
        <PhoneConversionTracker />
        {children}
      </body>
    </html>
  );
}
