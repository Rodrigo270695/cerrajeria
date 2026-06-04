import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { carBrands, features } from "@/lib/content";
import type { District } from "@/lib/districts";

type FeaturesProps = {
  district?: District;
};

const featureIcons = ["🗺️", "⏰", "🔧", "💳"] as const;

export function Features({ district }: FeaturesProps) {
  const localizedFeatures = features.map((f, i) =>
    i === 0 && district
      ? { ...f, title: `Cobertura en ${district.name}`, description: `Atención rápida en ${district.name} y distritos aledaños de Lima.` }
      : f,
  );

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marketing-alt/15 to-transparent" />

      <Container>
        {/* Heading */}
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-marketing-alt/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-marketing">
              Capacidades
            </p>
            <h2 className="text-3xl font-bold text-marketing-dark sm:text-4xl">
              Todo lo que{" "}
              <span className="text-marketing-alt">necesitas</span>,<br className="hidden sm:block" /> en un solo servicio
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: feature numbered cards 2×2 */}
          <ul className="grid gap-4 sm:grid-cols-2">
            {localizedFeatures.map((feature, i) => (
              <Reveal key={feature.title} as="li" delay={i * 80}>
                <div className="group relative overflow-hidden rounded-2xl border border-marketing-alt/12 bg-[#f8fbff] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-marketing-alt/35 hover:shadow-lg hover:shadow-marketing-alt/8">
                  {/* Big number watermark */}
                  <span className="pointer-events-none absolute -right-2 -top-3 select-none text-7xl font-bold tabular-nums text-marketing-alt/6 transition-colors duration-300 group-hover:text-marketing-alt/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl metal-marketing-gradient text-xl shadow-md">
                    {featureIcons[i]}
                  </span>

                  <h3 className="font-bold text-marketing-dark">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-marketing/60">
                    {feature.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-marketing-alt transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </ul>

          {/* Right: car brands dark card */}
          <Reveal delay={120}>
            <div
              className="rounded-2xl p-8 lg:p-10"
              style={{
                background: "linear-gradient(145deg, #0a1929 0%, #0f2a44 45%, #1a4a7a 100%)",
                boxShadow: "0 24px 64px rgba(15,42,68,0.22), 0 0 0 1px rgba(59,130,246,0.15)",
              }}
            >
              {/* Header */}
              <div className="mb-6">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-marketing-alt">
                  Apertura de vehículos
                </p>
                <h3 className="text-xl font-bold text-white">
                  Marcas que atendemos
                </h3>
                <p className="mt-1 text-sm text-marketing-highlight/55">
                  Sin daños · En pocos minutos
                </p>
              </div>

              {/* Brand chips */}
              <ul className="flex flex-wrap gap-2">
                {carBrands.map((brand) => (
                  <li
                    key={brand}
                    className="rounded-lg border border-marketing-alt/20 bg-white/8 px-3 py-1.5 text-sm font-semibold text-white/75 transition-all hover:border-marketing-alt/50 hover:bg-marketing-alt/20 hover:text-white"
                  >
                    {brand}
                  </li>
                ))}
                <li className="rounded-lg border border-marketing-alt bg-marketing-alt/25 px-3 py-1.5 text-sm font-bold text-marketing-highlight">
                  y más
                </li>
              </ul>

              {/* CTA al WhatsApp */}
              <div className="my-6 h-px bg-white/8" />
              <p className="text-sm leading-relaxed text-marketing-highlight/55">
                ¿Tienes un auto de otra marca? Contáctanos — atendemos cualquier vehículo.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
