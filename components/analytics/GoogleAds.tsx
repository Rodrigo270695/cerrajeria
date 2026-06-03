import Script from "next/script";
import { ANALYTICS, isAnalyticsEnabled } from "@/lib/analytics";

export function GoogleAds() {
  if (!isAnalyticsEnabled()) return null;

  const { googleAdsId } = ANALYTICS;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="lazyOnload"
      />
      <Script id="google-ads-init" strategy="lazyOnload">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${googleAdsId}');
      `}</Script>
    </>
  );
}
