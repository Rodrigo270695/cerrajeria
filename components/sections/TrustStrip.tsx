"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { TRUST_STATS, DURATION } from "@/lib/constants";

const stats = TRUST_STATS;

function useCounter(target: number, active: boolean, duration = DURATION.counter) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active || target === 0) { setValue(target); return; }
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setValue(Math.round(ease * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function StatItem({
  stat,
  active,
  divider,
}: {
  stat: (typeof stats)[number];
  active: boolean;
  divider: boolean;
}) {
  const count = useCounter(stat.target, active);

  return (
    <li
      className={`flex flex-col items-center justify-center px-6 py-8 text-center lg:px-10 lg:py-0 ${
        divider ? "border-l border-marketing-alt/15" : ""
      }`}
    >
      {/* Giant animated number */}
      <p className="flex items-baseline gap-1 leading-none">
        {stat.prefix && (
          <span className="text-2xl font-bold text-marketing-alt lg:text-3xl">{stat.prefix}</span>
        )}
        <span className="text-[4rem] font-bold tabular-nums tracking-tight text-marketing sm:text-[5rem] lg:text-[5.5rem]">
          {count}
        </span>
        <span className="text-xl font-bold text-marketing-alt sm:text-2xl lg:text-3xl">
          {stat.suffix}
        </span>
      </p>
      <p className="mt-2 text-sm font-semibold text-marketing-dark lg:text-base">{stat.label}</p>
      <p className="mt-1 text-xs font-medium text-marketing/65">{stat.detail}</p>
    </li>
  );
}

export function TrustStrip() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#eff6ff] py-14 lg:py-20"
      aria-label="Garantías del servicio"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-marketing-alt/30 to-transparent" />
      <Container>
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={active} divider={i > 0} />
          ))}
        </ul>
      </Container>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-marketing-alt/30 to-transparent" />
    </section>
  );
}
