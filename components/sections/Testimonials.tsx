"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconStar } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/lib/content";

const GOOGLE_TOTAL = 47;
const GOOGLE_RATING = 4.9;

const avatarColors = [
  "from-[#1a4a7a] to-[#2563eb]",
  "from-[#1d4ed8] to-[#3b82f6]",
  "from-[#0f2a44] to-[#1a4a7a]",
  "from-[#0891b2] to-[#0ea5e9]",
  "from-[#2563eb] to-[#60a5fa]",
  "from-[#1e3a5f] to-[#2563eb]",
  "from-[#164e63] to-[#0891b2]",
  "from-[#1a4a7a] to-[#3b82f6]",
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function GoogleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-[#eff6ff] py-20 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marketing-alt/25 to-transparent" />

      <Container className="relative max-w-3xl">

        {/* ── Header ── */}
        <Reveal>
          <div className="mb-10 flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-marketing-alt">
                Reseñas de clientes
              </p>
              <h2
                id="testimonials-heading"
                className="text-3xl font-bold text-marketing-dark sm:text-4xl"
              >
                Lo que dicen{" "}
                <span className="text-marketing-alt">nuestros clientes</span>
              </h2>
            </div>

            {/* Google rating pill */}
            <div className="shrink-0 rounded-2xl border border-marketing-alt/15 bg-white px-5 py-4 shadow-md text-center">
              <div className="mb-1 flex items-center justify-center gap-1.5">
                <GoogleIcon className="h-4 w-4" />
                <span className="text-[11px] font-bold text-marketing/50">Google Reviews</span>
              </div>
              <p className="text-4xl font-bold tabular-nums leading-none text-marketing-dark">
                {GOOGLE_RATING}
              </p>
              <div role="img" aria-label="5 estrellas" className="mt-1 flex justify-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-3.5 w-3.5 text-[#fbbc05]" aria-hidden />
                ))}
              </div>
              <p className="mt-1 text-[11px] text-marketing/45">{GOOGLE_TOTAL}+ reseñas</p>
            </div>
          </div>
        </Reveal>

        {/* ── Carrusel ── */}
        <Reveal delay={60}>
          <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg shadow-marketing-alt/10 ring-1 ring-marketing-alt/15 lg:p-12">

            {/* Verificado badge */}
            <div className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full bg-[#f0f9ff] px-3 py-1.5 ring-1 ring-marketing-alt/15">
              <GoogleIcon className="h-4 w-4" />
              <span className="text-[10px] font-bold text-marketing/50">Verificado</span>
            </div>

            {/* Estrellas */}
            <div role="img" aria-label={`${current.rating} de 5 estrellas`} className="flex gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <IconStar key={i} className="h-5 w-5 text-[#fbbc05]" aria-hidden />
              ))}
            </div>

            {/* Cita */}
            <blockquote className="mt-5">
              <p
                key={active}
                className="text-xl font-medium leading-relaxed text-marketing-dark sm:text-2xl lg:text-[1.55rem]"
                style={{ animation: "fadeIn 0.35s ease" }}
              >
                &ldquo;{current.quote}&rdquo;
              </p>
            </blockquote>

            {/* Autor + flechas */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[active % avatarColors.length]} text-sm font-bold text-white shadow-md`}
                  aria-hidden
                >
                  {getInitials(current.name)}
                </span>
                <div>
                  <cite className="not-italic text-sm font-bold text-marketing-dark">
                    {current.name}
                  </cite>
                  <p className="text-xs text-marketing/50">{current.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-marketing-alt/20 text-marketing transition-colors hover:border-marketing-alt hover:bg-marketing-alt/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-marketing-alt"
                  aria-label="Reseña anterior"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                </button>
                <button
                  onClick={next}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-marketing-alt/20 text-marketing transition-colors hover:border-marketing-alt hover:bg-marketing-alt/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-marketing-alt"
                  aria-label="Reseña siguiente"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div
              className="mt-6 flex items-center gap-1.5"
              role="tablist"
              aria-label="Seleccionar reseña"
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Reseña ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "h-2 w-8 bg-marketing-alt"
                      : "h-2 w-2 bg-marketing-alt/25 hover:bg-marketing-alt/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
