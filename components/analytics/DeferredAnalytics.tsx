"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { ConversionTracker } from "@/components/analytics/ConversionTracker";
import { GTM_HEAD_SCRIPT } from "@/lib/gtm-snippet";
import { isAnalyticsEnabled } from "@/lib/analytics";

/** GTM y conversiones tras interacción — no compite con LCP ni PageSpeed. */
export function DeferredAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;

    const enable = () => setEnabled(true);
    const events = ["scroll", "click", "touchstart", "keydown"] as const;

    for (const event of events) {
      window.addEventListener(event, enable, { once: true, passive: true });
    }

    const timeout = window.setTimeout(enable, 8_000);

    return () => {
      window.clearTimeout(timeout);
      for (const event of events) {
        window.removeEventListener(event, enable);
      }
    };
  }, []);

  if (!isAnalyticsEnabled()) return null;

  if (!enabled) return null;

  return (
    <>
      <Script
        id="google-tag-manager"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: GTM_HEAD_SCRIPT }}
      />
      <ConversionTracker />
    </>
  );
}
