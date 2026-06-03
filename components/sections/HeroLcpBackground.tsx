import { HERO_LCP } from "@/lib/constants";
import { HeroOverlays } from "./HeroOverlays";

/** LCP: AVIF/WebP estáticos + preload en layout (sin pasar por /_next/image). */
export function HeroLcpBackground() {
  return (
    <div
      id="hero-lcp-bg"
      className="absolute inset-0 overflow-hidden bg-marketing-deep"
      aria-hidden
    >
      <picture>
        <source srcSet={HERO_LCP.avif} type="image/avif" />
        <source srcSet={HERO_LCP.webp} type="image/webp" />
        <img
          src={HERO_LCP.webp}
          alt=""
          width={HERO_LCP.width}
          height={HERO_LCP.height}
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>
      <HeroOverlays />
    </div>
  );
}
