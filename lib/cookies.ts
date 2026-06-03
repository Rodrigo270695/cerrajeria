export const COOKIE_CONSENT_KEY = "cerrajeriaflash_cookie_consent";

export type CookieConsent = "accepted" | "rejected";

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function storeConsent(value: CookieConsent) {
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
}
