import { StickyNav } from "@/components/layout/StickyNav";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { BackToTopDeferred } from "@/components/layout/BackToTopDeferred";
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
      <StickyNav isDistrictPage={Boolean(district)} />
      <main id="main-content">
        <Hero district={district} />
        <MarqueeStrip />
        <TrustStrip />
        <Services district={district} />
        <FAQ district={district} />
        <LandingBelowFold district={district} />
      </main>
      {/* Componentes fijos — server components, sin JS ni CLS */}
      <WhatsAppButton districtName={district?.name} />
      <MobileCallBar />
      {/* BackToTop: único componente client-side real */}
      <BackToTopDeferred />
      <JsonLd district={district} />
    </>
  );
}
