import Image from "next/image";
import { IconPhone, IconWhatsApp } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { District } from "@/lib/districts";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";
import { HeroCarouselLazy } from "./HeroCarouselLazy";
import { HeroLcpBackground } from "./HeroLcpBackground";

type HeroProps = {
  district?: District;
};

const paymentMethods = [
  { src: "/pagos/yape.png", alt: "Yape" },
  { src: "/pagos/plin.png", alt: "Plin" },
  { src: "/pagos/tarjeta.png", alt: "Visa / Tarjeta" },
] as const;


export function Hero({ district }: HeroProps) {
  const locationLabel = district ? district.name : "Lima";
  const locationLine = district
    ? `EN ${district.name.toUpperCase()} · 24 HORAS`
    : "EN LIMA · 24 HORAS";

  return (
    <section
      className="hero-shell relative flex min-h-[92vh] w-full flex-col items-start justify-center overflow-hidden bg-marketing-deep"
      aria-labelledby="hero-heading"
    >
      {/* LCP en servidor + carrusel como mejora progresiva */}
      <HeroLcpBackground />
      <HeroCarouselLazy />

      {/* ── Content overlay ── */}
      <div className="relative z-10 w-full py-20 lg:py-28">
        <Container>
          <div className="max-w-[640px]">

            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/logo.png"
                alt={`${SITE.name} — Cerrajería a domicilio en ${locationLabel}`}
                width={260}
                height={84}
                className="h-16 w-auto max-w-[260px] object-contain drop-shadow-2xl"
                loading="lazy"
                sizes="260px"
              />
            </div>

            {/* Live badge */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-marketing-alt/30 bg-dark-deep/65 px-4 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/90">
                Atendemos Ahora · 24 Horas
              </span>
            </div>

            {/* H1 — sin animación de opacidad para no retrasar LCP */}
            <h1 id="hero-heading">
              <span className="block text-5xl font-bold leading-[1.0] tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-[4.25rem]">
                Cerrajeros
              </span>
              <span className="block text-5xl font-bold leading-[1.0] tracking-tight text-gradient-marketing sm:text-6xl lg:text-[4.25rem]">
                a Domicilio
              </span>
            </h1>

            {/* Location */}
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.25em] text-white/55 sm:text-base">
              {locationLine}
            </p>

            {/* Phone — focal point con glow pulsante */}
            <a
              href={telUrl()}
              className="hero-phone-link mt-7 inline-flex items-center gap-3 group"
              aria-label={`Llamar al ${SITE.phone}`}
            >
              {/* Pulsing icon */}
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand shadow-lg">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-50" />
                <svg viewBox="0 0 24 24" fill="white" className="relative h-5 w-5" aria-hidden>
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </span>
              <span className="text-4xl font-bold tabular-nums tracking-tight text-white drop-shadow-md transition-colors group-hover:text-marketing-highlight sm:text-5xl lg:text-[3.1rem]">
                {SITE.phone}
              </span>
            </a>

            {/* Description */}
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
              Llegamos en{" "}
              <strong className="font-semibold text-white">
                {SITE.arrivalTime}
              </strong>
              . Abrimos sin dañar tu chapa. Puertas, autos, cajas fuertes,
              instalaciones de chapas principales e interiores y más.
            </p>

            {/* Stars */}
            <div className="mt-4 flex items-center gap-2.5">
              <div role="img" aria-label="5 de 5 estrellas" className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className="h-4 w-4 fill-brand text-brand"
                    aria-hidden
                  >
                    <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.94.94-5.5-4-3.9 5.53-.8L10 1.5z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-white/60">
                Clientes 100% satisfechos
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={telUrl()}
                variant="primary"
                size="lg"
                icon={<IconPhone className="h-5 w-5" aria-hidden />}
                className="w-full sm:w-auto shadow-xl"
                ariaLabel="Llamar ahora"
              >
                Llamar ahora
              </Button>
              <Button
                href={whatsappUrl(district?.name)}
                variant="whatsapp"
                size="lg"
                external
                icon={<IconWhatsApp className="h-5 w-5" aria-hidden />}
                className="w-full sm:w-auto uppercase tracking-wider"
                ariaLabel="Escríbenos por WhatsApp"
              >
                WhatsApp
              </Button>
            </div>

            {/* Payment methods */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                Aceptamos:
              </span>
              {paymentMethods.map(({ src, alt }) => (
                <div
                  key={src}
                  className="flex h-9 items-center rounded-lg border border-white/12 bg-white/10 px-3 py-1.5 backdrop-blur-sm"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={64}
                    height={28}
                    loading="lazy"
                    className="h-5 w-auto object-contain"
                  />
                </div>
              ))}
              <span className="flex h-9 items-center rounded-lg border border-white/12 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white/55 backdrop-blur-sm">
                Efectivo
              </span>
            </div>
          </div>

        </Container>
      </div>
    </section>
  );
}
