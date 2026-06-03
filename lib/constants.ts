/**
 * Constantes globales del proyecto.
 * Centraliza valores numéricos, colores y configuración
 * que antes eran "magic numbers" dispersos en los componentes.
 */

/** Tiempo en ms del auto-avance del hero carousel */
export const HERO_SLIDE_INTERVAL = 5_000;

/** Slides del hero carousel */
export const HERO_SLIDES = [
  { src: "/hero/perfil.jpeg",                alt: "Cerrajero profesional a domicilio en Lima" },
  { src: "/hero/apertura-puertas.jpeg",      alt: "Apertura de puertas de casas y residencias en Lima" },
  { src: "/hero/apertura-autos.jpeg",        alt: "Apertura de autos sin daños en Lima" },
  { src: "/hero/cambio-cerraduras.jpeg",     alt: "Cambio de cerraduras y pines en Lima" },
  { src: "/hero/instalacion-cerraduras.jpeg",alt: "Instalación de cerraduras de seguridad en Lima" },
  { src: "/hero/motos.jpeg",                 alt: "Cerrajero a domicilio en moto — Lima 24h" },
] as const;

/** Imagen estática pre-optimizada para LCP móvil (ver scripts/generate-lcp-image.mjs) */
export const HERO_LCP = {
  avif: "/hero/perfil-lcp.avif",
  webp: "/hero/perfil-lcp.webp",
  width: 640,
  height: 427,
} as const;

/** Métricas de confianza mostradas en TrustStrip */
export const TRUST_STATS = [
  { target: 20,  prefix: "<", suffix: "min",   label: "Tiempo de llegada",    detail: "Garantizado"        },
  { target: 24,  prefix: "",  suffix: "/7",    label: "Disponibilidad",       detail: "Sin descanso"       },
  { target: 0,   prefix: "",  suffix: "daños", label: "Apertura sin daños",   detail: "Sin tocar la chapa" },
  { target: 15,  prefix: "",  suffix: "+",     label: "Distritos en Lima",    detail: "Cobertura total"    },
] as const;

/** z-index tokens para capas de la UI */
export const Z = {
  base:      0,
  card:     10,
  sticky:   60,
  modal:   100,
  toast:   200,
} as const;

/** Duración base de animaciones (ms) */
export const DURATION = {
  fast:    150,
  normal:  300,
  slow:    500,
  counter: 1_400,
} as const;

/** Breakpoints (sync con Tailwind) */
export const BP = {
  sm:  640,
  md:  768,
  lg: 1024,
  xl: 1280,
} as const;
