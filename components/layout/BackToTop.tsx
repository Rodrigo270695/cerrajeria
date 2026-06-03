"use client";

import { KeyRound } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-36 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-marketing/40 bg-dark-deep/95 text-marketing-alt shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:border-marketing hover:bg-dark hover:text-marketing focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marketing sm:bottom-24 sm:right-6"
      aria-label="Volver arriba"
    >
      <KeyRound className="h-5 w-5 rotate-[-45deg]" strokeWidth={2.25} />
    </button>
  );
}
