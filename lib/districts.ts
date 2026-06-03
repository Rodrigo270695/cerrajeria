import { SITE } from "@/lib/site";

export type District = {
  slug: string;
  name: string;
};

export const DISTRICTS: District[] = [
  { slug: "miraflores",       name: "Miraflores" },
  { slug: "san-isidro",       name: "San Isidro" },
  { slug: "santiago-de-surco",name: "Surco" },
  { slug: "lince",            name: "Lince" },
  { slug: "surquillo",        name: "Surquillo" },
  { slug: "la-molina",        name: "La Molina" },
  { slug: "jesus-maria",      name: "Jesús María" },
  { slug: "pueblo-libre",     name: "Pueblo Libre" },
  { slug: "magdalena-del-mar",name: "Magdalena del Mar" },
  { slug: "barranco",         name: "Barranco" },
  { slug: "chorrillos",       name: "Chorrillos" },
  { slug: "san-miguel",       name: "San Miguel" },
  { slug: "san-borja",        name: "San Borja" },
  { slug: "san-luis",         name: "San Luis" },
  { slug: "la-victoria",      name: "La Victoria" },
];

export function getDistrictBySlug(slug: string): District | undefined {
  return DISTRICTS.find((d) => d.slug === slug);
}

export function getDistrictPath(slug: string): string {
  return `/en-${slug}`;
}

export function getDistrictUrl(slug: string): string {
  return `${SITE.url}${getDistrictPath(slug)}`;
}

export function districtPageTitle(district: District): string {
  return `Cerrajero en ${district.name} a Domicilio — Atención 24 Horas`;
}

export function districtPageDescription(district: District): string {
  return `Cerrajero en ${district.name} 24 horas. Apertura de puertas, autos y cajas fuertes sin daños. Servicio a domicilio en ${district.name}, Lima. Llama al ${SITE.phone}.`;
}
