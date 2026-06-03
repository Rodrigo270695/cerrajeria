import { KeyRound } from "lucide-react";

type SectionHeadingProps = {
  /** ID para aria-labelledby en el section padre */
  id?: string;
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  theme = "dark",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const isLight = theme === "light";

  return (
    <div className={`max-w-3xl ${alignClass} mb-12 lg:mb-16`}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${
            isLight
              ? "bg-marketing-alt/10 text-marketing"
              : "bg-marketing-alt/15 text-marketing-highlight"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          <KeyRound className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15] ${
          isLight ? "text-marketing-dark" : "text-white"
        }`}
      >
        {highlight ? (
          <>
            <span
              className={
                isLight ? "text-marketing-alt" : "text-gradient-marketing"
              }
            >
              {highlight}
            </span>{" "}
            {title}
          </>
        ) : (
          title
        )}
      </h2>
      <div
        className={`heading-accent mt-5 ${align === "center" ? "mx-auto" : ""} ${
          isLight ? "heading-accent--light" : ""
        }`}
        aria-hidden
      />
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            isLight ? "text-marketing-dark/65" : "text-foreground-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
