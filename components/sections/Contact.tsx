import Image from "next/image";
import { MapPin, Clock, Phone } from "lucide-react";
import { IconWhatsApp } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";
import type { District } from "@/lib/districts";

type ContactProps = { district?: District };

const contactItems = [
  { Icon: MapPin, label: "Dirección", value: SITE.address, href: SITE.mapsUrl },
  { Icon: MapPin, label: "Cobertura", value: "Lima Metropolitana · 15+ distritos" },
  { Icon: Clock, label: "Horario", value: "24 horas · 7 días · Feriados" },
  { Icon: Phone, label: "Teléfono", value: SITE.phone, href: telUrl() },
] as const;

export function Contact({ district }: ContactProps) {
  const location = district?.name ?? "Lima";

  return (
    <section
      id="contacto"
      className="section-contact relative overflow-hidden py-20 lg:py-28"
      aria-labelledby="contact-heading"
    >
      {/* Decorative glows */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left: contact info */}
          <Reveal>
            <div>
              <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                Contáctanos
              </p>
              <h2
                id="contact-heading"
                className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              >
                Estamos en {location}
                <br />
                <span className="text-[#bfdbfe]">listos para ti</span>
              </h2>

              <ul className="mt-10 space-y-5">
                {contactItems.map(({ Icon, label, value, ...item }) => {
                  const href = "href" in item ? item.href : undefined;

                  return (
                  <li key={label} className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 shadow-md ring-1 ring-white/20 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-white" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/55">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-base font-semibold text-white transition-colors hover:text-[#bfdbfe]"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold text-white">{value}</p>
                      )}
                    </div>
                  </li>
                  );
                })}
              </ul>

              {/* Phone giant */}
              <a
                href={telUrl()}
                className="mt-10 block text-4xl font-bold tabular-nums text-white transition-all duration-200 hover:text-[#bfdbfe] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:text-5xl"
                aria-label={`Llamar al ${SITE.phone}`}
              >
                {SITE.phone}
              </a>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  href={telUrl()}
                  variant="primary"
                  size="md"
                  icon={<Phone className="h-4 w-4" aria-hidden />}
                >
                  Llamar ahora
                </Button>
                <Button
                  href={whatsappUrl(district?.name)}
                  variant="whatsapp"
                  size="md"
                  external
                  icon={<IconWhatsApp className="h-4 w-4" aria-hidden />}
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Right: image */}
          <Reveal delay={100}>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20 lg:aspect-[4/3]">
              <Image
                src="/hero/contact-servicio.jpg"
                alt={`Cerrajero a domicilio en ${location}`}
                fill
                loading="lazy"
                quality={85}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-marketing/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
