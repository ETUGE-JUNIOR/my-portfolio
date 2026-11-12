import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { StudioPanel } from "./StudioPanel";

export function Shell({ children }: { children: ReactNode }) {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [hash, pathname]);

  return (
    <div className="studio min-h-screen bg-paper font-sans text-charcoal lg:pl-112">
      <StudioPanel />
      <main className="px-6 py-8 lg:px-12 lg:py-12">{children}</main>
    </div>
  );
}
