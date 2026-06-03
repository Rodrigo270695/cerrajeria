import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { IconWhatsApp } from "@/components/icons";
import { services } from "@/lib/content";
import { whatsappServiceUrl } from "@/lib/site";
import type { District } from "@/lib/districts";

type ServicesProps = {
  district?: District;
};


export function Services({ district }: ServicesProps) {
  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#f0f7ff] py-20 lg:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marketing-alt/20 to-transparent" />

      <Container className="relative">
        {/* Heading */}
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-marketing-alt/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-marketing">
              Lo que hacemos
            </p>
            <h2
              id="services-heading"
              className="text-3xl font-bold text-marketing-dark sm:text-4xl lg:text-[2.6rem]"
            >
              Nuestros{" "}
              <span className="text-marketing-alt">servicios</span>
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-14 rounded-full bg-marketing-alt" aria-hidden />
            <p className="mx-auto mt-4 max-w-lg text-base text-marketing/60">
              {district
                ? `Toca el servicio que necesitas en ${district.name} para contactarnos directamente.`
                : "Toca el servicio que necesitas para contactarnos directamente por WhatsApp."}
            </p>
          </div>
        </Reveal>

        {/* 2-col grid */}
        <ul className="grid gap-5 md:grid-cols-2">
          {services.map((service, i) => {
            const waUrl = whatsappServiceUrl(service.title);

            return (
              <Reveal key={service.title} as="li" delay={i * 70}>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Solicitar: ${service.title} por WhatsApp`}
                  className="group flex h-full items-stretch overflow-hidden rounded-2xl bg-white shadow-md shadow-marketing-alt/8 ring-1 ring-marketing-alt/12 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-marketing-alt/15 hover:ring-marketing-alt/40"
                >
                  {/* ── Panel izquierdo ── */}
                  {service.photo ? (
                    /* Foto real — ocupa todo el panel como cover */
                    <div className="relative w-36 shrink-0 overflow-hidden sm:w-44">
                      <div className="absolute inset-y-0 left-0 z-10 w-1 rounded-r bg-marketing-alt transition-all duration-300 group-hover:w-1.5 group-hover:bg-marketing" />
                      <Image
                        src={service.photo}
                        alt={service.alt}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="176px"
                      />
                      {/* Gradiente derecho para fusionar con el contenido */}
                      <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent" />
                    </div>
                  ) : (
                    /* Sin foto — icono SVG centrado */
                    <div
                      className="relative flex w-32 shrink-0 flex-col items-center justify-center overflow-hidden p-5 sm:w-40"
                      style={{ background: "linear-gradient(160deg,#f0f7ff,#dbeafe)" }}
                    >
                      <div className="absolute inset-y-0 left-0 w-1 rounded-r bg-marketing-alt transition-all duration-300 group-hover:w-1.5 group-hover:bg-marketing" />
                      <span className="mb-1 text-xs font-bold tabular-nums text-marketing-alt/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="relative h-20 w-20 transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
                        <Image
                          src={service.image}
                          alt={service.alt}
                          fill
                          className="object-contain drop-shadow-md"
                          sizes="96px"
                        />
                      </div>
                    </div>
                  )}

                  {/* ── Contenido derecho ── */}
                  <div className="flex flex-1 flex-col justify-between p-5 lg:p-6">
                    <div>
                      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-marketing-alt/60">
                        Servicio {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-base font-bold leading-snug text-marketing-dark transition-colors duration-200 group-hover:text-marketing-alt sm:text-[1.05rem]">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-marketing/55">
                        {service.description}
                      </p>
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="mt-5 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-whatsapp/25 bg-whatsapp/8 px-3 py-1.5 text-xs font-bold text-whatsapp transition-all duration-300 group-hover:bg-whatsapp group-hover:text-white group-hover:border-whatsapp">
                        <IconWhatsApp className="h-3.5 w-3.5" aria-hidden />
                        Solicitar por WhatsApp
                      </span>
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-marketing-alt/15 text-marketing-alt/40 transition-all duration-300 group-hover:border-marketing-alt group-hover:bg-marketing-alt group-hover:text-white"
                        aria-hidden
                      >
                        →
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
