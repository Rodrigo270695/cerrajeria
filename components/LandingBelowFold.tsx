"use client";

import dynamic from "next/dynamic";
import type { District } from "@/lib/districts";

const Benefits = dynamic(
  () =>
    import("@/components/sections/Benefits").then((m) => ({
      default: m.Benefits,
    })),
  { ssr: false },
);

const CtaBanner = dynamic(
  () =>
    import("@/components/sections/CtaBanner").then((m) => ({
      default: m.CtaBanner,
    })),
  { ssr: false },
);

const Features = dynamic(
  () =>
    import("@/components/sections/Features").then((m) => ({
      default: m.Features,
    })),
  { ssr: false },
);

const Testimonials = dynamic(
  () =>
    import("@/components/sections/Testimonials").then((m) => ({
      default: m.Testimonials,
    })),
  { ssr: false },
);

const About = dynamic(
  () =>
    import("@/components/sections/About").then((m) => ({ default: m.About })),
  { ssr: false },
);

const DistrictsHub = dynamic(
  () =>
    import("@/components/sections/DistrictsHub").then((m) => ({
      default: m.DistrictsHub,
    })),
  { ssr: false },
);

const Contact = dynamic(
  () =>
    import("@/components/sections/Contact").then((m) => ({
      default: m.Contact,
    })),
  { ssr: false },
);

const Footer = dynamic(
  () =>
    import("@/components/layout/Footer").then((m) => ({ default: m.Footer })),
  { ssr: false },
);

type Props = {
  district?: District;
};

/** Secciones bajo el pliegue — sin SSR para HTML inicial más ligero. */
export function LandingBelowFold({ district }: Props) {
  return (
    <>
      <Benefits district={district} />
      <CtaBanner district={district} />
      <Features district={district} />
      <Testimonials />
      <About district={district} />
      <DistrictsHub currentSlug={district?.slug} />
      <Contact district={district} />
      <Footer />
    </>
  );
}
