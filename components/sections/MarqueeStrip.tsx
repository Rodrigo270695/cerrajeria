const items = [
  "Apertura de Casas y Apartamentos",
  "Apertura de Autos",
  "Instalación de Chapas",
  "Barras Cantol",
  "Chapas Digitales",
  "Cambio de Combinación",
  "Apertura de Cajas Fuertes",
  "Cerrajero 24 Horas",
  "Servicio en Lima",
];

function Dot() {
  return (
    <span className="mx-6 flex h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" aria-hidden />
  );
}

export function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <section
      aria-label="Servicios disponibles"
      className="overflow-hidden bg-marketing py-3.5"
    >
      <div className="marquee-track select-none whitespace-nowrap" aria-hidden>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75">
              <svg
                className="h-3 w-3 text-white/60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden
              >
                <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
              </svg>
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </section>
  );
}
