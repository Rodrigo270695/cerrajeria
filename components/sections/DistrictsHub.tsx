import Link from "next/link";
import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { DISTRICTS, getDistrictPath } from "@/lib/districts";

type DistrictsHubProps = {
  currentSlug?: string;
};

export function DistrictsHub({ currentSlug }: DistrictsHubProps) {
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
              distrito y ve el servicio en tu zona.
            </p>
          </div>
        </Reveal>

        {/* District grid */}
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {DISTRICTS.map((district, index) => {
            const isCurrent = currentSlug === district.slug;

            return (
            <Reveal key={district.slug} as="li" delay={80 + index * 30}>
              <Link
                href={getDistrictPath(district.slug)}
                aria-label={`Cerrajero en ${district.name}`}
                aria-current={isCurrent ? "page" : undefined}
                className={`group flex h-full flex-col items-center justify-center gap-1 rounded-xl border px-3 py-4 text-center backdrop-blur-sm transition-all duration-250 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
                  isCurrent
                    ? "border-white/60 bg-white/20 shadow-lg shadow-white/15"
                    : "border-white/12 bg-white/8 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 hover:shadow-lg hover:shadow-white/10"
                }`}
              >
                <span className={`text-sm font-semibold transition-colors ${
                  isCurrent ? "text-white" : "text-white/80 group-hover:text-white"
                }`}>
                  {district.name}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wide transition-colors ${
                  isCurrent ? "text-white/90" : "text-white/35 group-hover:text-white/85"
                }`}>
                  {isCurrent ? "Estás aquí" : "Ver servicio →"}
                </span>
              </Link>
            </Reveal>
            );
          })}
        </ul>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
