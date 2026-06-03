import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { privacyPolicy } from "@/lib/legal-content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  alternates: {
    canonical: `${SITE.url}/privacidad`,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      title={privacyPolicy.title}
      description={privacyPolicy.description}
      updatedAt={privacyPolicy.updatedAt}
      sections={privacyPolicy.sections}
    />
  );
}
