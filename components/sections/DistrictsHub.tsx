import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { DISTRICTS } from "@/lib/districts";
import { whatsappDistrictUrl } from "@/lib/site";

export function DistrictsHub() {
  return (
    <section
      id="distritos"
      aria-labelledby="districts-heading"
      className="relative overflow-hidden bg-marketing py-20 lg:py-28"
    >
      {/* Decorative glows */}
      <div
        className="pointer-events-none absolute -left-40 -top-20 h-80 w-80 rounded-full bg-marketing-alt/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <Container className="relative">
        {/* Heading */}
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              Cobertura en Lima
            </p>
            <h2
              id="districts-heading"
              className="text-3xl font-bold text-white sm:text-4xl lg:text-[2.6rem]"
            >
              Cerrajero{" "}
              <span className="text-[#93c5fd]">por distrito</span>
            </h2>
            <div className="mx-auto mt-5 h-0.5 w-16 rounded-full bg-white/25" aria-hidden />
            <p className="mx-auto mt-5 max-w-lg text-base text-white/65">
              Atención 24 horas con páginas dedicadas para cada zona. Elige tu
              distrito y contáctanos al instante.
            </p>
          </div>
        </Reveal>

        {/* District grid */}
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {DISTRICTS.map((district, index) => (
            <Reveal key={district.slug} as="li" delay={80 + index * 30}>
              <a
                href={whatsappDistrictUrl(district.name)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Solicitar cerrajero en ${district.name} por WhatsApp`}
                className="group flex h-full flex-col items-center justify-center gap-1 rounded-xl border border-white/12 bg-white/8 px-3 py-4 text-center backdrop-blur-sm transition-all duration-250 hover:-translate-y-0.5 hover:border-whatsapp/60 hover:bg-whatsapp hover:text-white hover:shadow-lg hover:shadow-whatsapp/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <span className="text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
                  {district.name}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wide text-white/35 transition-colors group-hover:text-white/85">
                  WhatsApp →
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
