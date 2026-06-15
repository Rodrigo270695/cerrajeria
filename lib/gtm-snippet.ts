/** ID de contenedor GTM (build-time, visible en el HTML inicial). */
export const GTM_ID =
  process.env.NEXT_PUBLIC_GTM_ID?.trim() || "GTM-TD47QX9S";

const GTM_LOADER = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

/**
 * Snippet en <head>: visible para Google, pero gtm.js se carga tras el LCP
 * (requestIdleCallback / load — no compite con la imagen hero).
 */
export const GTM_HEAD_SCRIPT = `window.dataLayer=window.dataLayer||[];function gtmLoad(){${GTM_LOADER}}if("requestIdleCallback"in window){requestIdleCallback(gtmLoad,{timeout:3500})}else{window.addEventListener("load",gtmLoad)}`;

export const GTM_NOSCRIPT_HTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

export const GTM_HEAD_HTML = `<!-- Google Tag Manager --><script>${GTM_HEAD_SCRIPT}</script><!-- End Google Tag Manager -->`;

export const GTM_BODY_HTML = `<!-- Google Tag Manager (noscript) --><noscript>${GTM_NOSCRIPT_HTML}</noscript><!-- End Google Tag Manager (noscript) -->`;
