import { ConversionTracker } from "@/components/analytics/ConversionTracker";
import { GoogleAds } from "@/components/analytics/GoogleAds";
import { PhoneConversionTracker } from "@/components/analytics/PhoneConversionTracker";

/** Eventos de conversión y Google Ads (GTM va en head/body vía layout). */
export function SiteAnalytics() {
  return (
    <>
      <GoogleAds />
      <ConversionTracker />
      <PhoneConversionTracker />
    </>
  );
}
