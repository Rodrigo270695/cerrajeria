/**
 * Google Tag Manager / Ads — configurables por entorno (.env).
 *
 * Cuando el cliente pase el contenedor GTM, actualiza:
 *   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
 *
 * Conversiones en GTM (activadores Custom Event):
 *   - phone_click     → clic en tel:
 *   - whatsapp_click  → clic en wa.me
 *
 * Ver lib/gtm.ts y deploy/GTM-CONVERSIONES.md
 */
export const ANALYTICS = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-TD47QX9S",
  googleAdsId: process.env.NEXT_PUBLIC_GA_ADS_ID ?? "AW-722383499",
  phoneConversionLabel:
    process.env.NEXT_PUBLIC_GA_ADS_CONVERSION ??
    "AW-722383499/nc0sCOihmuADEIvlutgC",
} as const;

export function isAnalyticsEnabled(): boolean {
  return process.env.NEXT_PUBLIC_DISABLE_ANALYTICS !== "true";
}
