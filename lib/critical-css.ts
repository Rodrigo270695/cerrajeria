import { BRAND } from "@/lib/brand";

/** CSS mínimo para pintar hero + LCP antes del bundle principal. */
export const CRITICAL_CSS = `
#hero-lcp-bg,.hero-shell{background-color:${BRAND.marketingDeep}}
#hero-heading,.hero-shell h1{color:#fff;font-family:system-ui,sans-serif}
.text-gradient-marketing{background:linear-gradient(135deg,#93c5fd,#3b82f6);-webkit-background-clip:text;background-clip:text;color:transparent}
.hero-phone-link{color:#fff}
.marquee-track{animation:none}
@media(min-width:768px){.marquee-track{animation:marquee-scroll 28s linear infinite}}
`.trim();

export const CRITICAL_CSS_TAG = `<style>${CRITICAL_CSS}</style>`;
