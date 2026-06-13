import { faqs, services } from "@/lib/content";
import { getDistrictUrl, type District } from "@/lib/districts";
import { SITE, getSiteLogoUrl } from "@/lib/site";

type JsonLdProps = {
  district?: District;
};

/** Schema compacto — menos bytes en el HTML inicial. */
export function JsonLd({ district }: JsonLdProps) {
  const pageUrl = district ? getDistrictUrl(district.slug) : SITE.url;
  const logoUrl = getSiteLogoUrl();

  const graph = [
    {
      "@context": "https://schema.org",
      "@type": "Locksmith",
      "@id": `${SITE.url}/#organization`,
      name: district ? `${SITE.name} - ${district.name}` : SITE.name,
      url: pageUrl,
      logo: logoUrl,
      telephone: SITE.phoneE164,
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.streetAddress,
        addressLocality: SITE.addressLocality,
        addressRegion: SITE.addressRegion,
        addressCountry: SITE.addressCountry,
      },
      areaServed: district
        ? `${district.name}, Lima`
        : "Lima Metropolitana",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de cerrajería",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
