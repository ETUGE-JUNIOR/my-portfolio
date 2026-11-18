import { useEffect, useRef, useState, type ReactNode, type TouchEvent } from "react";
import { useLocation } from "react-router-dom";
import { StudioPanel } from "./StudioPanel";
import { useI18n } from "../../i18n/context";
import { TopBar } from "./TopBar";
import { useNavItems } from "./useNav";

/** From this width up the links sit in the header. Below it they live in the slide-out drawer. */
const HEADER_NAV = "(min-width: 1024px)";

export function Shell({ children }: { children: ReactNode }) {
  const { ui } = useI18n();
  const { hash, pathname } = useLocation();
  const items = useNavItems();
  const [open, setOpen] = useState(false);
  const startX = useRef<number | null>(null);

  // The drawer only exists below the header-nav width: close it if the window grows past that.
  useEffect(() => {
    const mq = window.matchMedia(HEADER_NAV);
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // While the drawer is open: Escape closes it, the page behind does not scroll, focus moves into it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("drawer-toggle")?.focus();
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.getElementById("studio-drawer")?.focus();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [hash, pathname]);

  const onTouchStart = (e: TouchEvent<HTMLElement>) => {
    startX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: TouchEvent<HTMLElement>) => {
    const from = startX.current;
    const to = e.changedTouches[0]?.clientX;
    startX.current = null;
    if (from !== null && to !== undefined && to - from < -60) setOpen(false);
  };

  return (
    <div className="studio min-h-screen bg-surface font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-2 focus:text-paper"
      >
        {ui.skipToContent}
      </a>
      <TopBar open={open} onToggle={() => setOpen((o) => !o)} items={items} />
      <StudioPanel open={open} items={items} onNavigate={() => setOpen(false)} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} />
      <button
        type="button"
        aria-label={ui.closeMenu}
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={
          "fixed bottom-0 left-0 right-0 top-14 z-10 bg-charcoal/60 transition-opacity duration-300 motion-reduce:transition-none lg:hidden " +
          (open ? "opacity-100" : "pointer-events-none opacity-0")
        }
      />
      <main id="main" tabIndex={-1} className="bg-grid min-h-screen px-6 pb-24 pt-20 outline-none lg:px-12">
        <div className="@container mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
