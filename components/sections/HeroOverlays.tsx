export function HeroOverlays() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(145deg,#0a1929 0%,#0f2a44 40%,#1a4a7a 70%,#2563eb 100%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-dark-deep/95 via-dark-deep/75 to-dark-deep/20"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-dark-deep/70 via-transparent to-dark-deep/25"
        aria-hidden
      />
    </>
  );
}
