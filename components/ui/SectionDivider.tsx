type SectionDividerProps = {
  /** color de la sección superior */
  top?: "brand" | "marketing" | "dark" | "dark-deep" | "cream";
  /** color de la sección inferior */
  bottom?: "dark" | "dark-deep" | "cream" | "brand" | "marketing";
};

const fills: Record<string, string> = {
  brand: "#ff941f",
  marketing: "#1a4a7a",
  dark: "#0d0d0d",
  "dark-deep": "#080808",
  cream: "#f6f7f9",
};

export function SectionDivider({
  top = "brand",
  bottom = "dark",
}: SectionDividerProps) {
  const topFill = fills[top];
  const bottomFill = fills[bottom];

  return (
    <div className="relative -mt-px h-10 w-full overflow-hidden sm:h-14" aria-hidden>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0,0 L0,18 Q720,56 1440,18 L1440,0 Z"
          fill={topFill}
        />
        <path
          d="M0,18 Q720,56 1440,18 L1440,56 L0,56 Z"
          fill={bottomFill}
        />
      </svg>
    </div>
  );
}
