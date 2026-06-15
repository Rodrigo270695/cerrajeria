import { isAnalyticsEnabled } from "@/lib/analytics";
import {
  GTM_HEAD_SCRIPT,
  GTM_ID,
  GTM_NOSCRIPT_HTML,
} from "@/lib/gtm-snippet";

/** Snippet GTM en <head> — tal como lo entrega Google. */
export function GoogleTagManagerHead() {
  if (!isAnalyticsEnabled()) return null;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: GTM_HEAD_SCRIPT,
      }}
    />
  );
}

/** Fallback sin JavaScript — justo después de abrir <body>. */
export function GoogleTagManagerNoScript() {
  if (!isAnalyticsEnabled()) return null;

  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: GTM_NOSCRIPT_HTML,
      }}
    />
  );
}

export { GTM_ID, GTM_HEAD_SCRIPT, GTM_NOSCRIPT_HTML };
