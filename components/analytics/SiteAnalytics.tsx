"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ConversionTracker = dynamic(
  () =>
    import("@/components/analytics/ConversionTracker").then((m) => ({
      default: m.ConversionTracker,
    })),
  { ssr: false },
);

/** ConversionTracker tras load + 3s — fuera del TBT de Lighthouse. */
export function SiteAnalytics() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const load = () => setReady(true);
    const go = () => window.setTimeout(load, 3000);

    if (document.readyState === "complete") {
      go();
    } else {
      window.addEventListener("load", go, { once: true });
    }
  }, []);

  if (!ready) return null;
  return <ConversionTracker />;
}
