"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const value = maxScroll > 0 ? scrollTop / maxScroll : 0;
      const clamped = Math.min(1, Math.max(0, value));

      setProgress(clamped);
      setScrolled(scrollTop > 32);
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(clamped),
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { progress, scrolled };
}
