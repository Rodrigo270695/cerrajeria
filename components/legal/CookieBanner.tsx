"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_KEY,
  getStoredConsent,
  storeConsent,
  type CookieConsent,
} from "@/lib/cookies";
import { GTM_EVENTS, pushDataLayer } from "@/lib/gtm";

type CookieBannerProps = {
  onConsentChange: (consent: CookieConsent) => void;
};

export function CookieBanner({ onConsentChange }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  const handleChoice = (consent: CookieConsent) => {
    storeConsent(consent);
    setVisible(false);
    onConsentChange(consent);

    if (consent === "accepted") {
      pushDataLayer({
        event: GTM_EVENTS.cookieConsent,
        consent: "granted",
      });
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      className="fixed inset-x-0 bottom-0 z-[200] border-t border-white/15 bg-marketing-deep/95 p-4 shadow-2xl backdrop-blur-md sm:bottom-20 lg:bottom-0"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p id="cookie-banner-title" className="text-sm font-bold text-white">
            Usamos cookies
          </p>
          <p id="cookie-banner-desc" className="mt-1 text-sm leading-relaxed text-white/70">
            Utilizamos cookies propias y de terceros (Google Tag Manager / Google Ads) para
            medir visitas y conversiones. Puedes aceptar o rechazar. Más info en nuestra{" "}
            <Link href="/privacidad" className="font-semibold text-marketing-highlight underline">
              política de privacidad
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => handleChoice("rejected")}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="rounded-full bg-brand px-5 py-2 text-sm font-bold text-dark-deep transition hover:brightness-110"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

export { COOKIE_CONSENT_KEY };
