"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const BackToTop = dynamic(
  () => import("@/components/layout/BackToTop").then((m) => ({ default: m.BackToTop })),
  { ssr: false },
);

/** BackToTop tras load + 5s — sin impacto en TBT inicial. */
export function BackToTopDeferred() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const load = () => setReady(true);
    const go = () => window.setTimeout(load, 5000);

    if (document.readyState === "complete") {
      go();
    } else {
      window.addEventListener("load", go, { once: true });
    }
  }, []);

  if (!ready) return null;
  return <BackToTop />;
}
