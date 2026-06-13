import { Header } from "./Header";

type StickyNavProps = {
  isDistrictPage?: boolean;
};

export function StickyNav({ isDistrictPage = false }: StickyNavProps) {
  return (
    <div className="sticky top-0 z-[60]">
      <Header isDistrictPage={isDistrictPage} />
    </div>
  );
}
