/** Elementos decorativos temáticos de cerrajería (solo CSS, sin JS) */
export function LocksmithDecor() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-8 top-24 hidden text-brand opacity-[0.15] animate-key-float lg:block"
        aria-hidden
      >
        <KeySvg className="h-28 w-28" />
      </div>
      <div
        className="pointer-events-none absolute -right-4 top-40 hidden text-brand-alt opacity-[0.12] animate-key-float-reverse lg:block"
        aria-hidden
      >
        <KeySvg className="h-20 w-20 rotate-45" />
      </div>
      <div
        className="pointer-events-none absolute bottom-32 left-1/4 hidden text-brand opacity-[0.08] animate-key-float animation-delay-300 lg:block"
        aria-hidden
      >
        <LockSvg className="h-16 w-16" />
      </div>
    </>
  );
}

function KeySvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M42 24a10 10 0 1 0-17.3-7.1L14 27.6V36h6v8h8v-8h4.7l10.3 10.3 5.7-5.7L38.1 30A9.9 9.9 0 0 0 42 24zm-10 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
    </svg>
  );
}

function LockSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 28V22a12 12 0 1 1 24 0v6h4v28H16V28h4zm8 0h8V22a4 4 0 0 0-8 0v6z" />
    </svg>
  );
}

export function KeyDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden>
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-brand/50" />
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 bg-brand/10 text-brand">
        <KeySvg className="h-5 w-5" />
      </span>
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-brand/50" />
    </div>
  );
}
