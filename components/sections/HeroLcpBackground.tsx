import { HERO_LCP } from "@/lib/constants";
import { HeroOverlays } from "./HeroOverlays";

const lcpImgStyle = {
  position: "absolute" as const,
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover" as const,
  objectPosition: "center" as const,
};

/** LCP: AVIF estático; estilos inline para pintar sin esperar el CSS de Next. */
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
        decoding="async"
        style={lcpImgStyle}
      />
      <HeroOverlays />
    </div>
  );
}
