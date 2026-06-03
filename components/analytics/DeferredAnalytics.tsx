"use client";

import { useEffect, useState } from "react";
import { GoogleAds } from "@/components/analytics/GoogleAds";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { PhoneConversionTracker } from "@/components/analytics/PhoneConversionTracker";

/** Analytics solo tras interacción — no compite con métricas de Lighthouse. */
export function DeferredAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const enable = () => setEnabled(true);
    const events = ["scroll", "click", "touchstart", "keydown"] as const;

    for (const event of events) {
      window.addEventListener(event, enable, { once: true, passive: true });
    }

    const timeout = window.setTimeout(enable, 10_000);

    return () => {
      window.clearTimeout(timeout);
      for (const event of events) {
        window.removeEventListener(event, enable);
      }
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <GoogleTagManager />
      <GoogleAds />
      <PhoneConversionTracker />
    </>
  );
}
