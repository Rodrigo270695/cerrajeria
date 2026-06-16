import { HERO_LCP } from "@/lib/constants";
import { HeroOverlays } from "./HeroOverlays";

/** LCP: AVIF estático + preload en layout. */
export function HeroLcpBackground() {
  return (
    <div
      id="hero-lcp-bg"
      className="absolute inset-0 overflow-hidden bg-marketing-deep"
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_LCP.avif}
        alt=""
        width={HERO_LCP.width}
        height={HERO_LCP.height}
        fetchPriority="high"
        decoding="sync"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <HeroOverlays />
    </div>
  );
}
