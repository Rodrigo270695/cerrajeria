import { Header } from "./Header";

type StickyNavProps = {
  isDistrictPage?: boolean;
};

/** Nav fija — puede ir después del hero en el DOM sin afectar LCP. */
export function StickyNav({ isDistrictPage = false }: StickyNavProps) {
  return (
    <div className="fixed inset-x-0 top-0 z-[60]">
      <Header isDistrictPage={isDistrictPage} />
    </div>
  );
}
