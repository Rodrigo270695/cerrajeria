"use client";

import Link from "next/link";
import { useState } from "react";
import { IconMenu, IconPhone, IconWhatsApp, IconX } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { SITE, telUrl, whatsappUrl } from "@/lib/site";

type NavLink = { href: string; label: string };

export function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/15"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
      >
        {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b-2 border-marketing-alt/30 bg-marketing px-4 py-6 shadow-2xl animate-fade-in"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-semibold uppercase tracking-wide text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <Button
              href={telUrl()}
              variant="primary"
              className="w-full"
              icon={<IconPhone className="h-4 w-4" />}
            >
              Llamar {SITE.phone}
            </Button>
            <Button
              href={whatsappUrl()}
              variant="whatsapp"
              external
              className="w-full"
              icon={<IconWhatsApp className="h-4 w-4" />}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
