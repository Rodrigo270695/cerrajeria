import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/Footer";
import { StickyNav } from "@/components/layout/StickyNav";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { DistrictsHub } from "@/components/sections/DistrictsHub";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { Services } from "@/components/sections/Services";
import { BackToTop } from "@/components/layout/BackToTop";
import type { District } from "@/lib/districts";

const TrustStrip = dynamic(
  () => import("@/components/sections/TrustStrip").then((m) => ({ default: m.TrustStrip })),
);

const Testimonials = dynamic(
  () =>
    import("@/components/sections/Testimonials").then((m) => ({
      default: m.Testimonials,
    })),
);

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
        <Benefits district={district} />
        <CtaBanner district={district} />
        <Features district={district} />
        <Testimonials />
        <About district={district} />
        <DistrictsHub currentSlug={district?.slug} />
        <FAQ district={district} />
        <Contact district={district} />
      </main>
      <Footer />
      <WhatsAppButton districtName={district?.name} />
      <BackToTop />
      <MobileCallBar />
    </>
  );
}
