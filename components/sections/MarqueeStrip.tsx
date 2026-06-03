import { KeyRound } from "lucide-react";

const items = [
  "Apertura de Puertas",
  "Cerrajero 24 Horas",
  "Apertura de Autos",
  "Cambio de Cerraduras",
  "Apertura de Cajas Fuertes",
  "Instalación de Chapas",
  "Amaestramiento",
  "Cerrajero a Domicilio",
  "Duplicado de Llaves",
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
              <KeyRound className="h-3 w-3 text-white/60" strokeWidth={2.5} />
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </section>
  );
}
