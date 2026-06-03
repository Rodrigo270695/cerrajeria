import Link from "next/link";
import { KeyRound, Car, Lock, Shield, Key } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { quickServices } from "@/lib/content";

const serviceIcons = {
  key:    <KeyRound className="h-5 w-5" />,
  door:   <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" /><circle cx="14" cy="13" r="1" fill="currentColor"/></svg>,
  car:    <Car className="h-5 w-5" />,
  lock:   <Lock className="h-5 w-5" />,
  shield: <Shield className="h-5 w-5" />,
} as const;

const serviceColors = [
  { bg: "bg-[#1a4a7a]", glow: "shadow-[#1a4a7a]/30" },
  { bg: "bg-[#2563eb]", glow: "shadow-[#2563eb]/30" },
  { bg: "bg-[#0891b2]", glow: "shadow-[#0891b2]/30" },
  { bg: "bg-[#1d4ed8]", glow: "shadow-[#1d4ed8]/30" },
  { bg: "bg-[#0f2a44]", glow: "shadow-[#0f2a44]/30" },
];

export function QuickServices() {
  return (
    <section
      aria-label="Servicios rápidos"
      className="relative bg-white py-12 lg:py-16"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marketing-alt/15 to-transparent" />

      <Container>
        <Reveal>
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.28em] text-marketing/50">
            ¿Qué necesitas hoy?
          </p>
        </Reveal>

        <ul className="flex flex-wrap justify-center gap-3">
          {quickServices.map((service, i) => {
            const color = serviceColors[i % serviceColors.length];
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? <Key className="h-5 w-5" />;

            return (
              <Reveal key={service.id} as="li" delay={i * 60}>
                <Link
                  href="#servicios"
                  className={`group inline-flex items-center gap-2.5 rounded-full ${color.bg} px-5 py-3 text-sm font-semibold text-white shadow-lg ${color.glow} transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marketing-alt`}
                >
                  <span className="opacity-80 transition-opacity group-hover:opacity-100">
                    {Icon}
                  </span>
                  {service.label}
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </Container>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-marketing-alt/10 to-transparent" />
    </section>
  );
}
