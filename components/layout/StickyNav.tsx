"use client";

import { Key } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Header } from "./Header";

type StickyNavProps = {
  isDistrictPage?: boolean;
};

function ScrollProgressBar({ progress }: { progress: number }) {
  const percent = Math.round(progress * 100);

  return (
    <div
      className="relative h-[3px] w-full bg-marketing-alt/20 shadow-[0_1px_8px_rgba(59,130,246,0.15)]"
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progreso de lectura"
    >
      <div
        className="h-full bg-gradient-to-r from-marketing-deep via-marketing to-marketing-alt shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-[width] duration-150 ease-out"
        style={{ width: `${percent}%` }}
      />
      {percent > 3 && (
        <span
          className="absolute top-1/2 -translate-y-1/2 text-marketing-alt opacity-90 transition-[left] duration-150"
          style={{ left: `clamp(8px, ${percent}%, calc(100% - 20px))` }}
          aria-hidden
        >
          <Key className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
      )}
    </div>
  );
}

export function StickyNav({ isDistrictPage = false }: StickyNavProps) {
  const { progress, scrolled } = useScrollProgress();

  return (
    <div className="sticky top-0 z-[60]">
      <ScrollProgressBar progress={progress} />
      <Header isDistrictPage={isDistrictPage} scrolled={scrolled} />
    </div>
  );
}
