"use client";

import { useEffect } from "react";
import { isAnalyticsEnabled } from "@/lib/analytics";
import { GTM_EVENTS, pushDataLayer } from "@/lib/gtm";

function getLinkType(element: EventTarget | null): "phone" | "whatsapp" | null {
  if (!(element instanceof Element)) return null;

  const anchor = element.closest("a");
  if (!anchor?.href) return null;

  if (anchor.href.startsWith("tel:")) return "phone";
  if (anchor.href.includes("wa.me") || anchor.href.includes("api.whatsapp.com")) {
    return "whatsapp";
  }

  return null;
}

/** Envía eventos al dataLayer para que GTM registre conversiones. */
export function ConversionTracker() {
  useEffect(() => {
    if (!isAnalyticsEnabled()) return;

    const handleClick = (event: MouseEvent) => {
      const type = getLinkType(event.target);
      if (!type) return;

      if (type === "phone") {
        pushDataLayer({
          event: GTM_EVENTS.phoneClick,
          conversion_type: "phone",
        });
        return;
      }

      pushDataLayer({
        event: GTM_EVENTS.whatsappClick,
        conversion_type: "whatsapp",
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
