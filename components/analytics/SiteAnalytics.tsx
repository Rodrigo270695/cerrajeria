"use client";

import dynamic from "next/dynamic";

const ConversionTracker = dynamic(
  () =>
    import("@/components/analytics/ConversionTracker").then((m) => ({
      default: m.ConversionTracker,
    })),
  { ssr: false },
);

/** Conversiones vía dataLayer — carga diferida, sin bloquear LCP. */
export function SiteAnalytics() {
  return <ConversionTracker />;
}
