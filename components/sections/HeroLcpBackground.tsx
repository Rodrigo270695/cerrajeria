import Image from "next/image";
import { HERO_SLIDES } from "@/lib/constants";
import { HeroOverlays } from "./HeroOverlays";

/** Imagen LCP renderizada en servidor — no depende de JS del carrusel. */
export function HeroLcpBackground() {
  const slide = HERO_SLIDES[0];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <Image
        src={slide.src}
        alt=""
        fill
        priority
        fetchPriority="high"
        quality={65}
        sizes="(max-width: 768px) 100vw, 1280px"
        className="object-cover object-center"
      />
      <HeroOverlays />
    </div>
  );
}
