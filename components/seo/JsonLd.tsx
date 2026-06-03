import { faqs, services } from "@/lib/content";
import {
  DISTRICTS,
  getDistrictUrl,
  type District,
} from "@/lib/districts";
import { SITE } from "@/lib/site";

type JsonLdProps = {
  district?: District;
};

export function JsonLd({ district }: JsonLdProps) {
  const pageUrl = district ? getDistrictUrl(district.slug) : SITE.url;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": `${SITE.url}/#organization`,
    name: district ? `${SITE.name} - ${district.name}` : SITE.name,
    url: pageUrl,
    image: `${SITE.url}/opengraph-image`,
    telephone: SITE.phoneE164,
    email: SITE.email,
    priceRange: "$$",
    description: district
      ? `Cerrajero a domicilio 24 horas en ${district.name}, Lima.`
      : SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Claudio Galeno 224",
      addressLocality: "San Borja",
      addressRegion: "Lima",
      postalCode: "15036",
      addressCountry: "PE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -12.0975,
      longitude: -77.0028,
    },
    areaServed: district
      ? [
          {
            "@type": "City",
            name: `${district.name}, Lima`,
          },
        ]
      : DISTRICTS.map((item) => ({
          "@type": "City",
          name: `${item.name}, Lima`,
        })),
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
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "127",
      bestRating: "5",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: "es-PE",
    publisher: { "@id": `${SITE.url}/#organization` },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumb = district
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: `Cerrajero en ${district.name}`,
            item: pageUrl,
          },
        ],
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      {breadcrumb && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      )}
    </>
  );
}
