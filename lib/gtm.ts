/**
 * Eventos del dataLayer para configurar conversiones en Google Tag Manager.
 *
 * En GTM crea activadores (Custom Event) con estos nombres:
 * - phone_click      → conversión llamada telefónica
 * - whatsapp_click   → conversión WhatsApp
 * - cookie_consent   → consentimiento de cookies (consent: granted)
 */
export const GTM_EVENTS = {
  phoneClick: "phone_click",
  whatsappClick: "whatsapp_click",
  cookieConsent: "cookie_consent",
} as const;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(payload);
}
