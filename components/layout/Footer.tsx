import Image from "next/image";
import Link from "next/link";
import { IconMail, IconMapPin, IconPhone } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { footerServices } from "@/lib/content";
import { DISTRICTS, getDistrictPath } from "@/lib/districts";
import { SITE, telUrl } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-marketing">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marketing-alt/40 to-transparent" />

      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-block">
              <Image
                src="/logo.png"
                alt={`${SITE.name} — Cerrajería a domicilio Lima`}
                width={210}
                height={68}
                className="h-14 w-auto max-w-[210px] object-contain brightness-95 transition-opacity group-hover:opacity-80"
                sizes="210px"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-marketing-highlight/70">
              Profesionales en cerrajería fina con los mejores cerrajeros a
              domicilio en Lima, disponibles 24 horas.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-marketing-alt">
              Contacto
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href={telUrl()}
                  className="inline-flex items-center gap-2.5 font-bold text-white transition-colors hover:text-marketing-highlight"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-marketing-alt/10 ring-1 ring-marketing-alt/20">
                    <IconPhone className="h-3.5 w-3.5 text-marketing-alt" />
                  </span>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2.5 text-marketing-highlight/70 transition-colors hover:text-marketing-highlight"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-marketing-alt/10 ring-1 ring-marketing-alt/20">
                    <IconMail className="h-3.5 w-3.5 text-marketing-alt" />
                  </span>
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2.5 text-marketing-highlight/70 transition-colors hover:text-marketing-highlight"
                >
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-marketing-alt/10 ring-1 ring-marketing-alt/20">
                    <IconMapPin className="h-3.5 w-3.5 text-marketing-alt" />
                  </span>
                  {SITE.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-marketing-alt">
              Servicios
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    href="#servicios"
                    className="flex items-center gap-2 text-marketing-highlight/65 transition-colors hover:text-marketing-highlight"
                  >
                    <span className="h-px w-3 bg-marketing-alt/40" aria-hidden />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Distritos */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-marketing-alt">
              Distritos
            </h3>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm">
              {DISTRICTS.slice(0, 8).map((district) => (
                <li key={district.slug}>
                  <Link
                    href={getDistrictPath(district.slug)}
                    className="text-marketing-highlight/65 transition-colors hover:text-marketing-highlight"
                  >
                    {district.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/#distritos"
              className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-marketing-alt transition-colors hover:text-marketing-highlight"
            >
              Ver todos
              <span aria-hidden> →</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-marketing-alt/10 py-6">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs sm:justify-start">
            <Link
              href="/aviso-legal"
              className="text-marketing-highlight/65 transition hover:text-marketing-highlight"
            >
              Aviso legal
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-marketing-highlight/45 sm:flex-row sm:text-left">
            <p>
              © {year}{" "}
              <Link href="/" className="font-semibold text-marketing-highlight/70 hover:text-white">
                {SITE.name}
              </Link>
              {" "}· Cerrajería a domicilio en Lima.
            </p>
            <p className="font-medium">
              Apertura de puertas · Apertura de autos · Cerrajero 24h Lima
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
