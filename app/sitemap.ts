import type { MetadataRoute } from "next";
import { DISTRICTS, getDistrictUrl } from "@/lib/districts";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const districtPages: MetadataRoute.Sitemap = DISTRICTS.map((district) => ({
    url: getDistrictUrl(district.slug),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/aviso-legal`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    ...districtPages,
  ];
}
