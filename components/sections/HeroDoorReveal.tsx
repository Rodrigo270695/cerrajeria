"use client";

import { KeysBackgroundDoor } from "@/components/decorative/KeysBackground";
import type { ReactNode } from "react";

function DoorPanel({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";

  return (
    <div
      className={`hero-door-panel hero-door-panel--${side}`}
      aria-hidden
    >
      <div className="hero-door-frame" />
      <div className={`hero-door-surface hero-door-surface--${side}`}>
        <div className="hero-door-inset" />
        <div className="hero-door-plank hero-door-plank--1" />
        <div className="hero-door-plank hero-door-plank--2" />
        <div className="hero-door-plank hero-door-plank--3" />
        <span className="hero-door-peephole" />
        <div
          className={`hero-door-handle ${isLeft ? "hero-door-handle--right-edge" : "hero-door-handle--left-edge"}`}
        >
          <span className="hero-door-handle-plate" />
          <span className="hero-door-handle-lever" />
        </div>
        <span className="hero-door-keyhole" />
      </div>
      <span
        className={`hero-door-hinge hero-door-hinge--top ${isLeft ? "hero-door-hinge--left" : "hero-door-hinge--right"}`}
      />
      <span
        className={`hero-door-hinge hero-door-hinge--bottom ${isLeft ? "hero-door-hinge--left" : "hero-door-hinge--right"}`}
      />
      <KeysBackgroundDoor />
    </div>
  );
}

type HeroDoorRevealProps = {
  children: ReactNode;
};

export function HeroDoorReveal({ children }: HeroDoorRevealProps) {
  return (
    <div className="hero-door-scene relative w-full">
      <DoorPanel side="left" />
      <DoorPanel side="right" />
      <div className="hero-door-seam" aria-hidden />
      <div className="hero-door-content">{children}</div>
    </div>
  );
}
