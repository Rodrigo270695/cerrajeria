import { IconPhone, IconWhatsApp } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { District } from "@/lib/districts";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";

type CtaBannerProps = {
  district?: District;
};

export function CtaBanner({ district }: CtaBannerProps) {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      aria-label="Llamada a la acción de emergencia"
      style={{
        background:
          "linear-gradient(135deg, #1a4a7a 0%, #2563eb 35%, #3b82f6 60%, #1d4ed8 80%, #1a4a7a 100%)",
      }}
    >
      {/* Glows */}
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand/12 blur-3xl"
        aria-hidden
      />
      {/* Accent lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <Container className="relative text-center">
        <Reveal>
          {/* Eyebrow */}
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-90" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Emergencia 24 horas
          </p>

          {/* Headline */}
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            ¿Cerradura o{" "}
            <span className="text-[#fed7aa]">puerta bloqueada?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            No esperes más{district ? ` en ${district.name}` : ""}. Un cerrajero profesional llegará en{" "}
            <strong className="font-bold text-white">{SITE.arrivalTime}</strong>.
          </p>

          {/* Giant phone number */}
          <a
            href={telUrl()}
            className="mt-8 block text-5xl font-bold tabular-nums tracking-tight text-white transition-all duration-200 hover:scale-105 hover:text-[#bfdbfe] sm:text-6xl lg:text-7xl"
            aria-label={`Llamar al ${SITE.phone}`}
          >
            {SITE.phone}
          </a>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={telUrl()}
              variant="primary"
              size="lg"
              icon={<IconPhone className="h-5 w-5" aria-hidden />}
              className="min-w-52 shadow-2xl"
            >
              Llamar ahora
            </Button>
            <Button
              href={whatsappUrl(district?.name)}
              variant="whatsapp"
              size="lg"
              external
              icon={<IconWhatsApp className="h-5 w-5" aria-hidden />}
              className="min-w-52"
            >
              Escribir por WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
