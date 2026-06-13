import dynamic from "next/dynamic";
import { Footer } from "@/components/layout/Footer";
import { DeferredUiChrome } from "@/components/layout/DeferredUiChrome";
import { StickyNav } from "@/components/layout/StickyNav";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import type { District } from "@/lib/districts";

const MarqueeStrip = dynamic(() =>
  import("@/components/sections/MarqueeStrip").then((m) => ({
    default: m.MarqueeStrip,
  })),
);

const Services = dynamic(() =>
  import("@/components/sections/Services").then((m) => ({
    default: m.Services,
  })),
);

const Benefits = dynamic(() =>
  import("@/components/sections/Benefits").then((m) => ({
    default: m.Benefits,
  })),
);

const CtaBanner = dynamic(() =>
  import("@/components/sections/CtaBanner").then((m) => ({
    default: m.CtaBanner,
  })),
);

const Features = dynamic(() =>
  import("@/components/sections/Features").then((m) => ({
    default: m.Features,
  })),
);

const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => ({
    default: m.Testimonials,
  })),
);

const About = dynamic(() =>
  import("@/components/sections/About").then((m) => ({
    default: m.About,
  })),
);

const DistrictsHub = dynamic(() =>
  import("@/components/sections/DistrictsHub").then((m) => ({
    default: m.DistrictsHub,
  })),
);

const FAQ = dynamic(() =>
  import("@/components/sections/FAQ").then((m) => ({ default: m.FAQ })),
);

const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => ({
    default: m.Contact,
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
      <DeferredUiChrome districtName={district?.name} />
    </>
  );
}
