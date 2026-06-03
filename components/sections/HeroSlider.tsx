"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useId } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES, HERO_SLIDE_INTERVAL } from "@/lib/constants";
import { HeroOverlays } from "./HeroOverlays";

const SLIDES = HERO_SLIDES;
const INTERVAL = HERO_SLIDE_INTERVAL;

type Props = {
  onSlideChange?: (index: number) => void;
};

export function HeroSlider({ onSlideChange }: Props) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const carouselId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const next = (index + SLIDES.length) % SLIDES.length;
      setActive(next);
      onSlideChange?.(next);
    },
    [onSlideChange],
  );

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (!mounted || paused) return;
    const t = setInterval(goNext, INTERVAL);
    return () => clearInterval(t);
  }, [mounted, paused, goNext]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    },
    [goPrev, goNext],
  );

  if (!mounted) return null;

  const showCarouselLayer = active > 0;
  const nextIndex = (active + 1) % SLIDES.length;

  return (
    <>
      <div
        className="absolute inset-0 overflow-hidden transition-opacity duration-1000"
        style={{ opacity: showCarouselLayer ? 1 : 0 }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onKeyDown={handleKeyDown}
        role="region"
        aria-label="Galería de imágenes del servicio"
        aria-roledescription="carrusel"
      >
        {SLIDES.map((slide, i) => {
          if (i === 0) return null;

          const isActive = i === active;
          const isNext = i === nextIndex && nextIndex !== 0;
          if (!isActive && !isNext) return null;

          return (
            <div
              key={slide.src}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`Imagen ${i + 1} de ${SLIDES.length}: ${slide.alt}`}
              aria-hidden={!isActive}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{ opacity: isActive ? 1 : 0 }}
            >
              <Image
                src={slide.src}
                alt={isActive ? slide.alt : ""}
                fill
                loading={isActive ? "eager" : "lazy"}
                quality={65}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          );
        })}

        <HeroOverlays />
      </div>

      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {`Imagen ${active + 1} de ${SLIDES.length}: ${SLIDES[active].alt}`}
      </div>

      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-marketing-alt/20 bg-dark-deep/60 text-white backdrop-blur-sm transition-all hover:border-marketing-alt/50 hover:bg-marketing/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-marketing-alt lg:left-8"
        aria-label="Imagen anterior"
        aria-controls={carouselId}
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </button>

      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-marketing-alt/20 bg-dark-deep/60 text-white backdrop-blur-sm transition-all hover:border-marketing-alt/50 hover:bg-marketing/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-marketing-alt lg:right-8"
        aria-label="Imagen siguiente"
        aria-controls={carouselId}
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </button>

      <div
        id={carouselId}
        role="tablist"
        aria-label="Seleccionar imagen"
        className="absolute bottom-8 left-1/2 z-20 hidden md:flex -translate-x-1/2 items-center gap-2"
      >
        {SLIDES.map((slide, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Imagen ${i + 1}: ${slide.alt}`}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-400 ${
              i === active
                ? "h-2 w-8 bg-marketing-alt shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                : "h-2 w-2 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {!paused && active > 0 && (
        <div className="absolute bottom-0 left-0 z-20 h-0.5 w-full bg-white/10" aria-hidden>
          <div
            key={active}
            className="h-full bg-marketing-alt"
            style={{ animation: `hero-progress ${INTERVAL}ms linear forwards` }}
          />
        </div>
      )}
    </>
  );
}
