"use client";

import {
  LocksmithOpenAnim,
  type LocksmithAnimVariant,
} from "@/components/decorative/LocksmithOpenAnim";
import { useCallback, useEffect, useRef, useState } from "react";
import { whatsappServiceUrl } from "@/lib/site";
import { IconWhatsApp } from "@/components/icons";

const unlockLabels: Record<LocksmithAnimVariant, string> = {
  "safe-open": "Caja abierta",
  "door-open": "Puerta abierta",
  "car-unlock": "Auto desbloqueado",
  "lock-install": "Cerradura instalada",
  "master-keys": "Llave maestra lista",
  "lock-swap": "Cerradura renovada",
  "key-turn": "Sistema activado",
  "lock-open": "Candado abierto",
};

type Layout = "featured" | "tall" | "compact";

type ServiceCardProps = {
  index: number;
  effect: LocksmithAnimVariant;
  title: string;
  description: string;
  layout?: Layout;
};

export function ServiceCard({
  index,
  effect,
  title,
  description,
  layout = "compact",
}: ServiceCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [playing, setPlaying] = useState(false);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedRef.current) {
          hasPlayedRef.current = true;
          setPlaying(true);
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const replayUnlock = useCallback(() => {
    setPlaying(false);
    requestAnimationFrame(() => requestAnimationFrame(() => setPlaying(true)));
  }, []);

  const animLabel = unlockLabels[effect].toUpperCase();
  const waUrl = whatsappServiceUrl(title);
  const num = String(index + 1).padStart(2, "0");

  /* ── FEATURED layout — hero horizontal ── */
  if (layout === "featured") {
    return (
      <a
        ref={cardRef}
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={replayUnlock}
        aria-label={`Solicitar ${title} por WhatsApp`}
        className={`service-card card-premium card-premium-dark group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl sm:flex-row lg:min-h-[320px] ${playing ? "is-playing" : ""}`}
      >
        {/* Illustration panel — left on sm+ */}
        <div className="service-illus-panel relative flex w-full shrink-0 items-center justify-center sm:w-72 lg:w-80">
          <div className="service-illus-glow" aria-hidden />
          <div className="service-illus-ring" aria-hidden />
          <LocksmithOpenAnim variant={effect} size="md" className="service-illus-anim" />
          <div className="service-unlock-beam" aria-hidden />
          <span className="service-unlock-label">{animLabel}</span>
        </div>

        {/* Text body */}
        <div className="relative flex flex-1 flex-col justify-between p-7 lg:p-9">
          {/* Number */}
          <span className="service-index absolute right-5 top-4 text-5xl font-bold opacity-25" aria-hidden>
            {num}
          </span>

          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
              Servicio destacado
            </p>
            <h3 className="text-xl font-bold leading-snug text-white lg:text-2xl">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted lg:text-base">
              {description}
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-6 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-whatsapp/18 px-4 py-2 text-xs font-bold text-whatsapp ring-1 ring-whatsapp/25 transition-all duration-300 group-hover:bg-whatsapp group-hover:text-white group-hover:ring-whatsapp">
              <IconWhatsApp className="h-3.5 w-3.5" aria-hidden />
              Solicitar por WhatsApp
            </span>
            <span className="text-xs text-white/25 transition-colors group-hover:text-white/50">
              Toca para abrir →
            </span>
          </div>
        </div>
      </a>
    );
  }

  /* ── TALL layout — vertical, illustration top ── */
  if (layout === "tall") {
    return (
      <a
        ref={cardRef}
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={replayUnlock}
        aria-label={`Solicitar ${title} por WhatsApp`}
        className={`service-card card-premium card-premium-dark group relative flex h-full flex-col overflow-hidden rounded-2xl ${playing ? "is-playing" : ""}`}
      >
        {/* Illustration panel — top */}
        <div className="service-illus-panel relative flex aspect-[16/9] w-full items-center justify-center">
          <div className="service-illus-glow" aria-hidden />
          <div className="service-illus-ring" aria-hidden />
          <LocksmithOpenAnim variant={effect} size="md" className="service-illus-anim" />
          <div className="service-unlock-beam" aria-hidden />
          <span className="service-unlock-label">{animLabel}</span>
          <span className="service-index absolute right-3 top-2 text-3xl font-bold opacity-20" aria-hidden>
            {num}
          </span>
        </div>

        {/* Text */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
              Apertura profesional
            </p>
            <h3 className="text-base font-bold text-white lg:text-lg">{title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-foreground-muted">
              {description}
            </p>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp/15 px-3 py-1.5 text-[10px] font-bold text-whatsapp ring-1 ring-whatsapp/20 transition-all duration-300 group-hover:bg-whatsapp group-hover:text-white">
              <IconWhatsApp className="h-3 w-3" aria-hidden />
              WhatsApp
            </span>
          </div>
        </div>
      </a>
    );
  }

  /* ── COMPACT layout — horizontal mini ── */
  return (
    <a
      ref={cardRef}
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={replayUnlock}
      aria-label={`Solicitar ${title} por WhatsApp`}
      className={`service-card card-premium card-premium-dark group relative flex h-full flex-col overflow-hidden rounded-2xl sm:flex-row sm:items-stretch ${playing ? "is-playing" : ""}`}
    >
      {/* Illustration panel */}
      <div className="service-illus-panel relative flex aspect-video w-full shrink-0 items-center justify-center sm:aspect-auto sm:w-32 lg:w-36">
        <div className="service-illus-glow" aria-hidden />
        <div className="service-illus-ring" aria-hidden />
        <LocksmithOpenAnim variant={effect} size="sm" className="service-illus-anim" />
        <div className="service-unlock-beam" aria-hidden />
        <span className="service-unlock-label text-[9px]">{animLabel}</span>
      </div>

      {/* Text */}
      <div className="flex flex-1 flex-col justify-between p-4 lg:p-5">
        <div>
          <span className="service-index mb-1 block text-2xl font-bold opacity-20" aria-hidden>
            {num}
          </span>
          <h3 className="text-sm font-bold leading-snug text-white">{title}</h3>
          <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-foreground-muted">
            {description}
          </p>
        </div>
        <div className="mt-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-whatsapp/15 px-2.5 py-1 text-[10px] font-bold text-whatsapp ring-1 ring-whatsapp/20 transition-all duration-300 group-hover:bg-whatsapp group-hover:text-white">
            <IconWhatsApp className="h-2.5 w-2.5" aria-hidden />
            WhatsApp
          </span>
        </div>
      </div>
    </a>
  );
}
