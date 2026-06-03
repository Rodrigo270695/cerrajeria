"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ConversionTracker } from "@/components/analytics/ConversionTracker";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { isAnalyticsEnabled } from "@/lib/analytics";
import { getStoredConsent, type CookieConsent } from "@/lib/cookies";
import { CookieBanner } from "./CookieBanner";

type CookieConsentGateProps = {
  children: ReactNode;
};

export function CookieConsentGate({ children }: CookieConsentGateProps) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConsent(getStoredConsent());
    setReady(true);
  }, []);

  const analyticsAllowed = isAnalyticsEnabled() && consent === "accepted";

  return (
    <>
      {ready && (
        <CookieBanner
          onConsentChange={(value) => {
            setConsent(value);
          }}
        />
      )}
      {analyticsAllowed && (
        <>
          <GoogleTagManager />
          <ConversionTracker />
        </>
      )}
      {children}
    </>
  );
}
