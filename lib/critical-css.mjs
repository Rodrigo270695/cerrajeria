/** CSS crítico compartido: layout + post-build inject. */
export const CRITICAL_CSS =
  "#hero-lcp-bg,.hero-shell{background-color:#0a1929}.hero-shell{position:relative;display:flex;min-height:92vh;width:100%;flex-direction:column;align-items:flex-start;justify-content:center;overflow:hidden}#hero-lcp-bg{position:absolute;inset:0;overflow:hidden}#hero-lcp-bg img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}#hero-heading,.hero-shell h1{color:#fff;font-family:system-ui,sans-serif}.text-gradient-marketing{background:linear-gradient(135deg,#93c5fd,#3b82f6);-webkit-background-clip:text;background-clip:text;color:transparent}.hero-phone-link{color:#fff}.marquee-track{animation:none}@media(min-width:768px){.marquee-track{animation:marquee-scroll 28s linear infinite}}";

export const CRITICAL_CSS_TAG = `<style>${CRITICAL_CSS}</style>`;
