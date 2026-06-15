import { ConversionTracker } from "@/components/analytics/ConversionTracker";

/** Eventos de conversión vía dataLayer (GTM va en head/body del layout). */
export function SiteAnalytics() {
  return <ConversionTracker />;
}
