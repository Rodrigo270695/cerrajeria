import { faqs } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { District } from "@/lib/districts";

type FAQProps = { district?: District };

export function FAQ({ district }: FAQProps) {
  return (
    <section
      id="preguntas-frecuentes"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marketing-alt/20 to-transparent" />

      <Container className="max-w-3xl">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-marketing-alt/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-marketing">
              Dudas frecuentes
            </p>
            <h2
              id="faq-heading"
              className="text-3xl font-bold text-marketing-dark sm:text-4xl"
            >
              Preguntas <span className="text-marketing-alt">frecuentes</span>
            </h2>
            {district && (
              <p className="mt-3 text-base text-marketing/70">
                Resolvemos tus dudas sobre el servicio en {district.name}.
              </p>
            )}
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 55}>
              <details className="group rounded-xl border border-marketing-alt/15 bg-white transition-all duration-200 open:border-marketing-alt/40 open:bg-[#f0f9ff] open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center gap-5 px-6 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marketing-alt">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-marketing-alt/25 bg-[#eff6ff] text-xs font-bold tabular-nums text-marketing-alt transition-colors group-open:border-marketing-alt group-open:bg-marketing-alt group-open:text-white"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm font-semibold text-marketing-dark sm:text-base">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-marketing-alt/60 transition-transform duration-300 group-open:rotate-45" aria-hidden>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path d="M10 3a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5V4a1 1 0 0 1 1-1Z" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-marketing/70 sm:text-base">
                  {faq.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
