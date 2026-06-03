"use client";

import { useEffect, useState } from "react";
import { GoogleAds } from "@/components/analytics/GoogleAds";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { PhoneConversionTracker } from "@/components/analytics/PhoneConversionTracker";

/** Carga analytics tras interacción o 4s para no competir con LCP. */
export function DeferredAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const enable = () => setEnabled(true);
    const timeout = window.setTimeout(enable, 4_000);
    const events = ["scroll", "click", "touchstart", "keydown"] as const;

    for (const event of events) {
      window.addEventListener(event, enable, { once: true, passive: true });
    }

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
