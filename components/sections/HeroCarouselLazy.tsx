"use client";

import dynamic from "next/dynamic";

const HeroSlider = dynamic(
  () => import("./HeroSlider").then((m) => ({ default: m.HeroSlider })),
  { ssr: false },
);

export function HeroCarouselLazy() {
  return <HeroSlider />;
}
