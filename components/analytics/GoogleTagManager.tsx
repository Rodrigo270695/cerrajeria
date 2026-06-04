import { ANALYTICS, isAnalyticsEnabled } from "@/lib/analytics";

function gtmScript(gtmId: string) {
  return `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;
}

/** Snippet GTM tal cual lo entrega Google — en <head>, lo más arriba posible. */
export function GoogleTagManagerHead() {
  if (!isAnalyticsEnabled()) return null;

  const { gtmId } = ANALYTICS;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: gtmScript(gtmId),
      }}
    />
  );
}

/** Fallback sin JavaScript — justo después de abrir <body>. */
export function GoogleTagManagerNoScript() {
  if (!isAnalyticsEnabled()) return null;

  const { gtmId } = ANALYTICS;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
