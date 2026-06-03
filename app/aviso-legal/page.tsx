import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { legalNotice } from "@/lib/legal-content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: legalNotice.title,
  description: legalNotice.description,
  alternates: {
    canonical: `${SITE.url}/aviso-legal`,
  },
  robots: { index: true, follow: true },
};

export default function LegalNoticePage() {
  return (
    <LegalDocument
      title={legalNotice.title}
      description={legalNotice.description}
      updatedAt={legalNotice.updatedAt}
      sections={legalNotice.sections}
    />
  );
}
