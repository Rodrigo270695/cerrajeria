import { DeferredUiChrome } from "@/components/layout/DeferredUiChrome";
import { StickyNav } from "@/components/layout/StickyNav";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { Services } from "@/components/sections/Services";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FAQ } from "@/components/sections/FAQ";
import { LandingBelowFold } from "@/components/LandingBelowFold";
import type { District } from "@/lib/districts";

type LandingPageProps = {
  district?: District;
};

export function LandingPage({ district }: LandingPageProps) {
  return (
    <>
      <JsonLd district={district} />
      <StickyNav isDistrictPage={Boolean(district)} />
      <main id="main-content">
        <Hero district={district} />
        <MarqueeStrip />
        <TrustStrip />
        <Services district={district} />
        <FAQ district={district} />
        <LandingBelowFold district={district} />
      </main>
      <DeferredUiChrome districtName={district?.name} />
    </>
  );
}
