import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Footer } from "@/components/layout/Footer";
import { StickyNav } from "@/components/layout/StickyNav";
import { SITE } from "@/lib/site";

type LegalSection = {
  id?: string;
  title: string;
  paragraphs: readonly string[];
  list?: readonly string[];
};

type LegalDocumentProps = {
  title: string;
  description: string;
  updatedAt: string;
  sections: readonly LegalSection[];
};

export function LegalDocument({
  title,
  description,
  updatedAt,
  sections,
}: LegalDocumentProps) {
  return (
    <>
      <StickyNav />
      <main id="main-content" className="bg-[#f0f7ff] py-16 lg:py-24">
        <Container className="max-w-3xl">
          <Link
            href="/"
            className="text-sm font-semibold text-marketing-alt transition hover:text-marketing"
          >
            ← Volver al inicio
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-marketing-dark sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-marketing/60">
            Última actualización: {updatedAt} · {SITE.name}
          </p>
          <p className="mt-6 text-base leading-relaxed text-marketing/75">
            {description}
          </p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title} id={section.id}>
                <h2 className="text-xl font-bold text-marketing-dark">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3 text-base leading-relaxed text-marketing/75">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                  {section.list && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
