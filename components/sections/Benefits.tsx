import { BenefitIcon } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { benefits } from "@/lib/content";
import type { District } from "@/lib/districts";
import { SITE } from "@/lib/site";

type BenefitsProps = {
  district?: District;
};

export function Benefits({ district }: BenefitsProps) {
  return (
    <section id="beneficios" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marketing-alt/15 to-transparent" />
      <Container>
        <Reveal>
          <SectionHeading
            id="benefits-heading"
            theme="light"
            eyebrow="Por qué elegirnos"
            highlight="Beneficios"
            title="que marcan la diferencia"
            description={
              district
                ? `Cerrajeros especializados en ${district.name} con la confianza de ${SITE.name}.`
                : "Profesionales en cerrajería fina con los mejores cerrajeros a domicilio en Lima."
            }
          />
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-labelledby="benefits-heading">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} as="li" delay={index * 65}>
              <div className="group relative overflow-hidden rounded-2xl border border-marketing-alt/12 bg-[#f8fbff] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-marketing-alt/35 hover:shadow-lg hover:shadow-marketing-alt/8">
                {/* Icon */}
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl metal-marketing-gradient shadow-md ring-1 ring-marketing-alt/20 transition-transform duration-300 group-hover:scale-105">
                  <BenefitIcon name={benefit.icon} className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-base font-bold leading-snug text-marketing-dark lg:text-lg">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-marketing/65">
                  {benefit.description}
                </p>

                {/* Hover accent bar */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-marketing-alt transition-all duration-500 group-hover:w-full" aria-hidden />
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
