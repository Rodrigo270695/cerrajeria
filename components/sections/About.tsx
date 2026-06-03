import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import type { District } from "@/lib/districts";

const aboutStats = [
  { value: "127+", label: "Clientes satisfechos" },
  { value: "5★", label: "Calificación promedio" },
  { value: "24h", label: "Sin interrupciones" },
];

type AboutProps = {
  district?: District;
};

export function About({ district }: AboutProps) {
  const location = district ? district.name : "Lima";

  return (
    <section
      id="sobre-nosotros"
      className="relative overflow-hidden bg-[#eff6ff] py-20 lg:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marketing-alt/25 to-transparent" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image column */}
          <Reveal>
            <div className="relative">
              {/* Main image */}
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-marketing-alt/20">
                <Image
                  src="https://cerrajero.pe/img/cerrajero-a-domiclio-24-horas.webp"
                  alt={`Servicio de cerrajería a domicilio 24 horas en ${location}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-marketing/30 to-transparent" />
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-marketing-alt/20 bg-white px-6 py-5 shadow-xl ring-1 ring-marketing-alt/10 lg:-right-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-marketing/50">
                  Nuestros números
                </p>
                <div className="flex gap-6">
                  {aboutStats.map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-xl font-bold text-marketing-alt">{s.value}</p>
                      <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-marketing/50">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text column */}
          <Reveal delay={100}>
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-marketing-alt">
                Sobre nosotros
              </p>
              <h2
                id="about-heading"
                className="text-3xl font-bold tracking-tight text-marketing-dark sm:text-4xl"
              >
                Cerrajería profesional en{" "}
                <span className="text-marketing-alt">{location}</span>
                <br />
                las 24 horas del día
              </h2>

              <div className="mt-5 h-0.5 w-16 rounded-full bg-marketing-alt" aria-hidden />

              <div className="mt-6 space-y-4 text-base leading-relaxed text-marketing/70">
                <p>
                  Nos desplazamos hasta donde te encuentres y te brindamos
                  soluciones inmediatas en {location}. Al estar ubicados
                  estratégicamente en Lima, llegamos lo antes posible y te
                  damos una pronta solución.
                </p>
                <p>
                  Contamos con todas las herramientas necesarias: aperturas de
                  puertas, autos, cajas fuertes, cambio de cerraduras, duplicado
                  de llaves, reparación y soldadura de chapas.
                </p>
              </div>

              <div className="mt-7 rounded-xl border-l-4 border-marketing-alt bg-white px-5 py-4 text-sm font-medium leading-relaxed text-marketing-dark shadow-sm">
                Somos un grupo de profesionales especializados en cerrajería
                fina con los mejores cerrajeros a domicilio en Lima.
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
