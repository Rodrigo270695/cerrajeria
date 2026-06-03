import { IconWhatsApp } from "@/components/icons";
import { whatsappUrl } from "@/lib/site";

type WhatsAppButtonProps = {
  districtName?: string;
};

export function WhatsAppButton({ districtName }: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl(districtName)}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/40 transition-transform hover:scale-110 hover:bg-whatsapp-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp sm:bottom-6 sm:right-6 animate-lock-pulse"
      aria-label="Contactar por WhatsApp"
    >
      <IconWhatsApp className="h-7 w-7" />
      <span className="pointer-events-none absolute -left-2 top-1/2 hidden -translate-x-full -translate-y-1/2 whitespace-nowrap rounded-lg bg-dark px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
        WhatsApp 24h
      </span>
    </a>
  );
}
