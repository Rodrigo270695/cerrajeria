"use client";

import { useEffect } from "react";
import { ANALYTICS, isAnalyticsEnabled } from "@/lib/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function isTelLink(element: EventTarget | null): boolean {
  if (!(element instanceof Element)) return false;

  const anchor = element.closest("a");
  if (!anchor?.href) return false;

  return anchor.href.startsWith("tel:");
}

export function PhoneConversionTracker() {
  useEffect(() => {
    if (!isAnalyticsEnabled()) return;

    const handleClick = (event: MouseEvent) => {
      if (!isTelLink(event.target)) return;
      if (typeof window.gtag !== "function") return;

      window.gtag("event", "conversion", {
        send_to: ANALYTICS.phoneConversionLabel,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
