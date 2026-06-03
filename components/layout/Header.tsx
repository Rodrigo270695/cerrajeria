import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { IconPhone, IconWhatsApp } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";

const homeNavLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#distritos", label: "Distritos" },
  { href: "#testimonios", label: "Reseñas" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

const districtNavLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#testimonios", label: "Reseñas" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
  { href: "/#distritos", label: "Distritos" },
];

type HeaderProps = {
  isDistrictPage?: boolean;
  scrolled?: boolean;
};

export function Header({ isDistrictPage = false, scrolled = false }: HeaderProps) {
  const navLinks = isDistrictPage ? districtNavLinks : homeNavLinks;

  return (
    <header
      className={`border-b transition-all duration-300 ${
        scrolled
          ? "border-marketing-alt/30 bg-marketing shadow-xl shadow-marketing/40"
          : "border-marketing-alt/15 bg-marketing backdrop-blur-sm shadow-sm"
      }`}
    >
      <Container as="nav" aria-label="Navegación principal">
        <div className="flex h-[64px] items-center justify-between lg:h-[74px]">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marketing-highlight"
            aria-label={`${SITE.name} - Inicio`}
          >
            <Image
              src="/logo.png"
              alt={SITE.name}
              width={200}
              height={65}
              className="h-9 w-auto max-w-[160px] object-contain transition-opacity duration-200 group-hover:opacity-80 sm:h-10 lg:h-[50px] lg:max-w-[200px]"
              priority
              sizes="200px"
            />
          </Link>

          {/* Desktop: nav links */}
          <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-link-premium text-sm font-semibold uppercase tracking-wider text-marketing-highlight/80 hover:text-marketing-highlight"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop: CTAs */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <a
              href={telUrl()}
              className="flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-bold text-white transition-all hover:border-white/45 hover:bg-white/20"
            >
              <IconPhone className="h-4 w-4 text-marketing-alt" aria-hidden />
              {SITE.phone}
            </a>
            <Button
              href={whatsappUrl()}
              variant="dark"
              size="sm"
              external
              icon={<IconWhatsApp className="h-4 w-4 text-whatsapp" aria-hidden />}
              ariaLabel="Escríbenos por WhatsApp"
              className="border-marketing-alt/15 uppercase tracking-wider hover:border-marketing-alt/35"
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile: solo botones de acción directa — sin hamburguesa */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Llamar — icono + número en pantallas medianas */}
            <a
              href={telUrl()}
              aria-label={`Llamar al ${SITE.phone}`}
              className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-2.5 text-xs font-bold text-white transition-all active:scale-95 hover:bg-white/20"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              <span className="hidden sm:inline">{SITE.phone}</span>
              <span className="sm:hidden">Llamar</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir por WhatsApp"
              className="flex items-center gap-2 rounded-full bg-whatsapp px-3.5 py-2.5 text-xs font-bold text-white shadow-lg shadow-whatsapp/30 transition-all active:scale-95 hover:bg-whatsapp-dark"
            >
              <IconWhatsApp className="h-4 w-4 shrink-0" aria-hidden />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
