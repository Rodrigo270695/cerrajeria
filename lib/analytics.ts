/** IDs del sitio original cerrajero.pe — configurables por entorno */
export const ANALYTICS = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-KNZLBFS",
  googleAdsId: process.env.NEXT_PUBLIC_GA_ADS_ID ?? "AW-722383499",
  phoneConversionLabel:
    process.env.NEXT_PUBLIC_GA_ADS_CONVERSION ??
    "AW-722383499/nc0sCOihmuADEIvlutgC",
} as const;

export function isAnalyticsEnabled(): boolean {
  return process.env.NEXT_PUBLIC_DISABLE_ANALYTICS !== "true";
}
