"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const BackToTop = dynamic(
  () => import("@/components/layout/BackToTop").then((m) => ({ default: m.BackToTop })),
  { ssr: false },
);

/** Carga BackToTop solo tras idle — cero impacto en TBT inicial. */
export function BackToTopDeferred() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const load = () => setReady(true);
    const win = window as Window & { requestIdleCallback?: (cb: () => void, opts?: object) => void };
    if (win.requestIdleCallback) {
      win.requestIdleCallback(load, { timeout: 5000 });
    } else {
      window.addEventListener("load", load, { once: true });
    }
  }, []);

  if (!ready) return null;
  return <BackToTop />;
}
