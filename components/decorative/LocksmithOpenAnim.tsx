export type LocksmithAnimVariant =
  | "key-turn"
  | "door-open"
  | "car-unlock"
  | "lock-open"
  | "lock-install"
  | "safe-open"
  | "master-keys"
  | "lock-swap";

type LocksmithOpenAnimProps = {
  variant: LocksmithAnimVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClass = {
  sm: "unlock-stage--sm",
  md: "unlock-stage--md",
  lg: "unlock-stage--lg",
} as const;

export function LocksmithOpenAnim({
  variant,
  size = "sm",
  className = "",
}: LocksmithOpenAnimProps) {
  return (
    <div
      className={`unlock-stage ${sizeClass[size]} unlock-stage--${variant} ${className}`}
      aria-hidden
    >
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <linearGradient id="unlock-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8c89a" />
            <stop offset="45%" stopColor="#ff941f" />
            <stop offset="100%" stopColor="#ce6a00" />
          </linearGradient>
          <linearGradient id="unlock-panel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5c4536" />
            <stop offset="100%" stopColor="#2e221a" />
          </linearGradient>
        </defs>
      </svg>
      <span className="unlock-spark unlock-spark--1" />
      <span className="unlock-spark unlock-spark--2" />
      <span className="unlock-spark unlock-spark--3" />

      {variant === "key-turn" && <KeyTurnScene />}
      {variant === "door-open" && <DoorOpenScene />}
      {variant === "car-unlock" && <CarUnlockScene />}
      {variant === "lock-open" && <LockOpenScene />}
      {variant === "lock-install" && <LockInstallScene />}
      {variant === "safe-open" && <SafeOpenScene />}
      {variant === "master-keys" && <MasterKeysScene />}
      {variant === "lock-swap" && <LockSwapScene />}
    </div>
  );
}

function KeyTurnScene() {
  return (
    <svg viewBox="0 0 48 48" className="unlock-svg unlock-svg--glow">
      <circle cx="24" cy="24" r="20" className="unlock-ring" />
      <g className="unlock-key-group">
        <circle cx="14" cy="18" r="5" className="unlock-metal-gold" />
        <rect x="17" y="16" width="18" height="4" rx="1" className="unlock-metal-gold" />
        <rect x="33" y="14" width="3" height="3" className="unlock-metal-gold" />
        <rect x="36" y="14" width="3" height="5" className="unlock-metal-gold" />
        <rect x="39" y="14" width="3" height="3" className="unlock-metal-gold" />
      </g>
    </svg>
  );
}

function DoorOpenScene() {
  return (
    <svg viewBox="0 0 48 48" className="unlock-svg unlock-svg--glow">
      <rect x="10" y="6" width="28" height="36" rx="2" className="unlock-door-frame" />
      <g className="unlock-door-panel-group">
        <rect x="12" y="8" width="12" height="32" rx="1" className="unlock-door-panel unlock-door-panel--wood" />
        <circle cx="21" cy="24" r="1.5" className="unlock-door-knob" />
      </g>
      <rect x="24" y="8" width="12" height="32" rx="1" className="unlock-door-panel-static unlock-door-panel--wood" />
      <circle cx="33" cy="24" r="1.5" className="unlock-door-knob" />
    </svg>
  );
}

function LockOpenScene() {
  return (
    <svg viewBox="0 0 48 48" className="unlock-svg">
      <rect x="14" y="22" width="20" height="16" rx="3" className="unlock-lock-body" />
      <path
        d="M18 22 V16 a6 6 0 0 1 12 0 v6"
        className="unlock-shackle"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="24" cy="30" r="2" className="unlock-keyhole" />
    </svg>
  );
}

function CarUnlockScene() {
  return (
    <svg viewBox="0 0 48 48" className="unlock-svg">
      <path
        d="M8 28h4l2-6h20l2 6h4v4H8z"
        className="unlock-car-body"
        fill="currentColor"
      />
      <circle cx="14" cy="32" r="3" className="unlock-car-wheel" />
      <circle cx="34" cy="32" r="3" className="unlock-car-wheel" />
      <g className="unlock-car-door-group">
        <path d="M26 18h10v10H26z" className="unlock-car-door" />
        <path d="M28 22h6" className="unlock-car-door-line" strokeWidth="1.5" />
      </g>
      <g className="unlock-car-lock">
        <rect x="30" y="24" width="6" height="5" rx="1" className="unlock-lock-body" />
        <path
          d="M31 24 V21 a3 3 0 0 1 4 0 v3"
          className="unlock-shackle unlock-shackle--mini"
          fill="none"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

function LockInstallScene() {
  return (
    <svg viewBox="0 0 48 48" className="unlock-svg">
      <rect x="12" y="10" width="24" height="28" rx="2" className="unlock-door-frame" />
      <rect x="16" y="14" width="16" height="20" rx="1" className="unlock-door-panel-static" />
      <g className="unlock-install-lock">
        <rect x="20" y="18" width="8" height="10" rx="1.5" className="unlock-lock-body" />
        <circle cx="24" cy="23" r="1.2" className="unlock-keyhole" />
      </g>
      <path d="M24 6 v6" className="unlock-install-arrow" strokeWidth="2" />
    </svg>
  );
}

function SafeOpenScene() {
  return (
    <svg viewBox="0 0 80 80" className="unlock-svg unlock-svg--glow">
      <rect x="16" y="12" width="48" height="56" rx="4" className="unlock-safe-body" />
      <circle cx="40" cy="40" r="14" className="unlock-safe-dial-ring" />
      <circle cx="40" cy="40" r="10" className="unlock-safe-dial" />
      <line x1="40" y1="40" x2="40" y2="32" className="unlock-safe-dial-hand" />
      <g className="unlock-safe-door-group">
        <rect x="18" y="14" width="22" height="52" rx="2" className="unlock-safe-door" />
        <rect x="20" y="20" width="4" height="40" className="unlock-safe-light" />
      </g>
      <rect x="40" y="14" width="22" height="52" rx="2" className="unlock-safe-door-static" />
    </svg>
  );
}

function MasterKeysScene() {
  return (
    <svg viewBox="0 0 48 48" className="unlock-svg">
      <g className="unlock-master-key unlock-master-key--1">
        <circle cx="16" cy="20" r="4" className="unlock-metal-gold" />
        <rect x="19" y="18.5" width="12" height="3" rx="0.5" className="unlock-metal-gold" />
      </g>
      <g className="unlock-master-key unlock-master-key--2">
        <circle cx="24" cy="24" r="4" className="unlock-metal-gold" />
        <rect x="27" y="22.5" width="12" height="3" rx="0.5" className="unlock-metal-gold" />
      </g>
      <g className="unlock-master-key unlock-master-key--3">
        <circle cx="32" cy="28" r="4" className="unlock-metal-gold" />
        <rect x="35" y="26.5" width="12" height="3" rx="0.5" className="unlock-metal-gold" />
      </g>
    </svg>
  );
}

function LockSwapScene() {
  return (
    <svg viewBox="0 0 48 48" className="unlock-svg">
      <g className="unlock-swap-old">
        <rect x="10" y="20" width="14" height="12" rx="2" className="unlock-lock-body unlock-lock-body--dim" />
        <path
          d="M13 20 V15 a4 4 0 0 1 8 0 v5"
          className="unlock-shackle unlock-shackle--dim"
          fill="none"
          strokeWidth="2"
        />
      </g>
      <g className="unlock-swap-new">
        <rect x="24" y="20" width="14" height="12" rx="2" className="unlock-lock-body" />
        <path
          d="M27 20 V15 a4 4 0 0 1 8 0 v5"
          className="unlock-shackle"
          fill="none"
          strokeWidth="2"
        />
        <circle cx="31" cy="26" r="1.5" className="unlock-keyhole" />
      </g>
      <path d="M20 26h8M26 24l2 2-2 2" className="unlock-swap-arrow" fill="none" strokeWidth="2" />
    </svg>
  );
}

export const quickIconToAnim: Record<
  "key" | "door" | "car" | "lock" | "shield",
  LocksmithAnimVariant
> = {
  key: "key-turn",
  door: "door-open",
  car: "car-unlock",
  lock: "lock-open",
  shield: "lock-install",
};

export const serviceEffectMap: LocksmithAnimVariant[] = [
  "safe-open",
  "door-open",
  "car-unlock",
  "lock-install",
  "master-keys",
  "lock-swap",
];
