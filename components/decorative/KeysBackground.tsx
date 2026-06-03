import { Key, KeyRound, LockKeyhole, type LucideIcon } from "lucide-react";

const KEY_ICONS: LucideIcon[] = [Key, KeyRound, LockKeyhole];

/** Posiciones solo en bordes y esquinas — el centro queda libre para el contenido */
const EDGE_POSITIONS = [
  { top: "6%", left: "4%", rotate: -18, size: 34 },
  { top: "10%", right: "5%", rotate: 22, size: 30 },
  { top: "38%", left: "2%", rotate: -8, size: 26 },
  { top: "42%", right: "3%", rotate: 14, size: 28 },
  { bottom: "18%", left: "6%", rotate: 12, size: 32 },
  { bottom: "14%", right: "7%", rotate: -20, size: 30 },
  { bottom: "8%", left: "22%", rotate: 6, size: 24 },
  { bottom: "6%", right: "20%", rotate: -10, size: 24 },
] as const;

type KeysBackgroundProps = {
  variant?: "hero" | "dark" | "light";
  /** sparse = solo bordes (default) | minimal = aún menos iconos */
  spread?: "sparse" | "minimal";
};

const colorByVariant = {
  hero: { main: "text-dark-deep opacity-[0.07]", alt: "text-white opacity-[0.06]" },
  dark: { main: "text-brand opacity-[0.08]", alt: "text-brand opacity-[0.05]" },
  light: { main: "text-brand opacity-[0.055]", alt: "text-dark-alt opacity-[0.04]" },
};

export function KeysBackground({
  variant = "hero",
  spread = "sparse",
}: KeysBackgroundProps) {
  const positions =
    spread === "minimal" ? EDGE_POSITIONS.slice(0, 5) : EDGE_POSITIONS;
  const colors = colorByVariant[variant];

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden
    >
      {/* Centro despejado — las llaves no invaden el contenido */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 58% 52% at 50% 48%, transparent 42%, black 88%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 58% 52% at 50% 48%, transparent 42%, black 88%)",
        }}
      >
        {positions.map((pos, i) => {
          const Icon = KEY_ICONS[i % KEY_ICONS.length];
          const { rotate, size, ...placement } = pos;
          const useAlt = variant === "hero" && i % 2 === 1;

          return (
            <span
              key={i}
              className={`absolute ${useAlt ? colors.alt : colors.main}`}
              style={{
                ...placement,
                transform: `rotate(${rotate}deg)`,
              }}
            >
              <Icon size={size} strokeWidth={1.5} aria-hidden />
            </span>
          );
        })}
      </div>
    </div>
  );
}

/** Fondo reducido para paneles de puerta del hero */
export function KeysBackgroundDoor() {
  const doorPositions = [
    { top: "15%", left: "12%", rotate: -12, size: 28 },
    { top: "55%", left: "8%", rotate: 8, size: 24 },
    { bottom: "20%", left: "18%", rotate: -6, size: 26 },
    { top: "25%", right: "10%", rotate: 15, size: 26 },
    { bottom: "30%", right: "14%", rotate: -14, size: 22 },
  ] as const;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {doorPositions.map((pos, i) => {
        const Icon = KEY_ICONS[i % KEY_ICONS.length];
        const { rotate, size, ...placement } = pos;
        return (
          <span
            key={i}
            className="absolute text-brand opacity-[0.1]"
            style={{ ...placement, transform: `rotate(${rotate}deg)` }}
          >
            <Icon size={size} strokeWidth={1.5} aria-hidden />
          </span>
        );
      })}
    </div>
  );
}
