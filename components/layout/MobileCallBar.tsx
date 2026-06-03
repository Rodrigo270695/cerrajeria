import { IconPhone } from "@/components/icons";
import { SITE, telUrl } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-marketing-alt/20 bg-marketing shadow-[0_-4px_24px_rgba(0,0,0,0.4)] sm:hidden">
      <a
        href={telUrl()}
        className="flex h-[3.25rem] w-full items-center justify-center gap-2 text-base font-bold tracking-wide text-white transition-colors hover:bg-marketing-dark"
        aria-label={`Llamar al ${SITE.phone}`}
      >
        <IconPhone className="h-5 w-5" />
        Llamar ahora — {SITE.phone}
      </a>
    </div>
  );
}
