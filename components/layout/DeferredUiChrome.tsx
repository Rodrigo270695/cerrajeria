"use client";

import dynamic from "next/dynamic";

const BackToTop = dynamic(
  () => import("@/components/layout/BackToTop").then((m) => ({ default: m.BackToTop })),
  { ssr: false },
);

const WhatsAppButton = dynamic(
  () =>
    import("@/components/layout/WhatsAppButton").then((m) => ({
      default: m.WhatsAppButton,
    })),
  { ssr: false },
);

const MobileCallBar = dynamic(
  () =>
    import("@/components/layout/MobileCallBar").then((m) => ({
      default: m.MobileCallBar,
    })),
  { ssr: false },
);

type Props = {
  districtName?: string;
};

export function DeferredUiChrome({ districtName }: Props) {
  return (
    <>
      <WhatsAppButton districtName={districtName} />
      <BackToTop />
      <MobileCallBar />
    </>
  );
}
