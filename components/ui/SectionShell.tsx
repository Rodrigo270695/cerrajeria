import type { ReactNode } from "react";
import { KeysBackground } from "@/components/decorative/KeysBackground";
import { Container } from "./Container";

type SectionVariant = "dark" | "elevated" | "light" | "brand";

const variantClasses: Record<SectionVariant, string> = {
  dark: "bg-marketing text-white section-dark",
  elevated: "section-elevated",
  light: "section-light",
  brand: "section-brand",
};

const keysVariant: Record<SectionVariant, "hero" | "dark" | "light" | null> = {
  dark: null,
  elevated: null,
  light: null,
  brand: null,
};

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  variant?: SectionVariant;
  className?: string;
  /** ID del heading dentro de la sección (para aria-labelledby) */
  ariaLabelledBy?: string;
};

export function SectionShell({
  children,
  id,
  variant = "dark",
  className = "",
  ariaLabelledBy,
}: SectionShellProps) {
  const bgKeys = keysVariant[variant];

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-20 lg:py-28 ${variantClasses[variant]} ${className}`}
      {...(ariaLabelledBy ? { "aria-labelledby": ariaLabelledBy } : {})}
    >
      {bgKeys && (
        <KeysBackground
          variant={bgKeys}
          spread={bgKeys === "light" ? "minimal" : "sparse"}
        />
      )}
      <Container className="relative">{children}</Container>
    </section>
  );
}
