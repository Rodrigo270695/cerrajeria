import { Container } from "@/components/ui/Container";
import { TRUST_STATS } from "@/lib/constants";

export function TrustStrip() {
  return (
    <section
      className="relative overflow-hidden bg-[#eff6ff] py-14 lg:py-20"
      aria-label="Garantías del servicio"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marketing-alt/30 to-transparent" />
      <Container>
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {TRUST_STATS.map((stat, i) => (
            <li
              key={stat.label}
              className={`flex flex-col items-center justify-center px-6 py-8 text-center lg:px-10 lg:py-0 ${
                i > 0 ? "border-l border-marketing-alt/15" : ""
              }`}
            >
              <p className="flex items-baseline gap-1 leading-none">
                {stat.prefix ? (
                  <span className="text-2xl font-bold text-marketing-alt lg:text-3xl">
                    {stat.prefix}
                  </span>
                ) : null}
                <span className="text-[4rem] font-bold tabular-nums tracking-tight text-marketing sm:text-[5rem] lg:text-[5.5rem]">
                  {stat.target}
                </span>
                <span className="text-xl font-bold text-marketing-alt sm:text-2xl lg:text-3xl">
                  {stat.suffix}
                </span>
              </p>
              <p className="mt-2 text-sm font-semibold text-marketing-dark lg:text-base">
                {stat.label}
              </p>
              <p className="mt-1 text-xs font-medium text-marketing/65">{stat.detail}</p>
            </li>
          ))}
        </ul>
      </Container>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-marketing-alt/30 to-transparent" />
    </section>
  );
}
