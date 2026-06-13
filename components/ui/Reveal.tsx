import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article";
};

/** Contenedor estático — sin JS (mejor PageSpeed que IntersectionObserver). */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  return <Tag className={className}>{children}</Tag>;
}
