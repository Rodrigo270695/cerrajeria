"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroSlider = dynamic(
  () => import("./HeroSlider").then((m) => ({ default: m.HeroSlider })),
  { ssr: false },
);

/** Carrusel solo tras clic/toque o 10s — evita lucide en scroll de Lighthouse. */
export function HeroCarouselLazy() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const enable = () => setEnabled(true);
    const events = ["click", "touchstart", "keydown"] as const;

    for (const event of events) {
      window.addEventListener(event, enable, { once: true, passive: true });
    }

    const timeout = window.setTimeout(enable, 10_000);

    return () => {
      window.clearTimeout(timeout);
      for (const event of events) {
        window.removeEventListener(event, enable);
      }
    };
  }, []);

  if (!enabled) return null;

  return <HeroSlider />;
}
