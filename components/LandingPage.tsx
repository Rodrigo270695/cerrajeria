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
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BackToTop } from "@/components/layout/BackToTop";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
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
        {/* 1. Hero con carrusel */}
        <Hero district={district} />

        {/* 2. Marquee ticker de servicios */}
        <MarqueeStrip />

        {/* 3. Stats gigantes */}
        <TrustStrip />

        {/* 5. Servicios */}
        <Services district={district} />

        {/* 6. Benefits en cards */}
        <Benefits district={district} />

        {/* 7. CTA full-bleed */}
        <CtaBanner district={district} />

        {/* 8. Features */}
        <Features district={district} />

        {/* 9. Testimonials con navegación */}
        <Testimonials />

        {/* 10. About con stats superpuesto */}
        <About district={district} />

        {/* 11. Distritos — visible en home y páginas de distrito */}
        <DistrictsHub currentSlug={district?.slug} />

        {/* 12. FAQ numerado */}
        <FAQ district={district} />

        {/* 13. Contact dark */}
        <Contact district={district} />
      </main>
      <Footer />
      <WhatsAppButton districtName={district?.name} />
      <BackToTop />
      <MobileCallBar />
    </>
  );
}
