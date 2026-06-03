import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import {
  DISTRICTS,
  districtPageDescription,
  districtPageTitle,
  getDistrictBySlug,
  getDistrictUrl,
} from "@/lib/districts";
import { SITE } from "@/lib/site";

type PageProps = {
  params: Promise<{ district: string }>;
};

export function generateStaticParams() {
  return DISTRICTS.map((district) => ({
    district: district.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { district: slug } = await params;
  const district = getDistrictBySlug(slug);

  if (!district) {
    return { title: "Distrito no encontrado" };
  }

  const title = districtPageTitle(district);
  const description = districtPageDescription(district);
  const url = getDistrictUrl(district.slug);

  return {
    title,
    description,
    keywords: [
      `cerrajero ${district.name.toLowerCase()}`,
      `cerrajero en ${district.name.toLowerCase()}`,
      `cerrajero a domicilio ${district.name.toLowerCase()}`,
      "cerrajero 24 horas lima",
      "apertura de puertas",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function DistrictPage({ params }: PageProps) {
  const { district: slug } = await params;
  const district = getDistrictBySlug(slug);

  if (!district) {
    notFound();
  }

  return <LandingPage district={district} showDistrictsHub={false} />;
}
