import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "marketing" | "secondary" | "whatsapp" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "metal-gradient text-dark-deep hover:brightness-110 shadow-lg shadow-brand/30 shine-sweep font-bold",
  marketing:
    "metal-marketing-gradient text-white hover:brightness-110 shadow-lg shadow-marketing/35 font-bold",
  secondary:
    "border-2 border-brand/40 bg-dark/80 text-white hover:border-brand hover:bg-dark-alt",
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp-dark shadow-lg shadow-whatsapp/30",
  dark: "bg-white/15 text-white hover:bg-white/25 border border-white/20 shadow-md backdrop-blur-sm",
  ghost: "text-marketing hover:bg-marketing-alt/10 hover:text-marketing-alt",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm gap-2 rounded-full",
  md: "h-12 px-6 text-sm gap-2 rounded-full",
  lg: "h-14 px-8 text-base gap-2.5 rounded-full",
};

type ButtonBaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  external?: boolean;
  ariaLabel?: string;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: never;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
    icon,
    ariaLabel,
  } = props;

  const focusRing =
    variant === "marketing" ? "focus-visible:outline-marketing" : "focus-visible:outline-brand";
  const classes = `inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${focusRing} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  const { type = "button", onClick } = props as ButtonAsButton;
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
