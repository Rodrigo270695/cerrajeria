import { DeferredUiChrome } from "@/components/layout/DeferredUiChrome";
import { StickyNav } from "@/components/layout/StickyNav";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { LandingBelowFold } from "@/components/LandingBelowFold";
import type { District } from "@/lib/districts";

type LandingPageProps = {
  district?: District;
};

export function LandingPage({ district }: LandingPageProps) {
  return (
    <>
      <main id="main-content">
        <Hero district={district} />
        <MarqueeStrip />
        <TrustStrip />
        <LandingBelowFold district={district} />
      </main>
      <StickyNav isDistrictPage={Boolean(district)} />
      <DeferredUiChrome districtName={district?.name} />
      <JsonLd district={district} />
    </>
  );
}
