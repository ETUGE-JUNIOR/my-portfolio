import { useEffect, useRef, useState, type ReactNode, type TouchEvent } from "react";
import { useLocation } from "react-router-dom";
import { StudioPanel } from "./StudioPanel";
import { TopBar } from "./TopBar";

const QUERY = "(min-width: 1024px)";
const STORE = "emj-drawer";

const isDesktop = () => window.matchMedia(QUERY).matches;

function saved(): boolean {
  try {
    return localStorage.getItem(STORE) !== "closed";
  } catch {
    return true;
  }
}

function persist(open: boolean) {
  try {
    localStorage.setItem(STORE, open ? "open" : "closed");
  } catch {
    /* storage unavailable: the drawer simply will not remember its state */
  }
}

export function Shell({ children }: { children: ReactNode }) {
  const { hash, pathname } = useLocation();
  const [desktop, setDesktop] = useState(isDesktop);
  const [open, setOpen] = useState(() => (isDesktop() ? saved() : false));
  const startX = useRef<number | null>(null);

  // Desktop: open by default and remembered. Phone: closed by default.
  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = () => {
      setDesktop(mq.matches);
      setOpen(mq.matches ? saved() : false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Phone overlay: Escape closes it, the page behind does not scroll, focus moves into the drawer.
  useEffect(() => {
    if (desktop || !open) return;
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
  }, [desktop, open]);

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [hash, pathname]);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (desktop) persist(next);
  };
  const onNavigate = () => {
    if (!desktop) setOpen(false);
  };
  const onTouchStart = (e: TouchEvent<HTMLElement>) => {
    startX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: TouchEvent<HTMLElement>) => {
    const from = startX.current;
    const to = e.changedTouches[0]?.clientX;
    startX.current = null;
    if (!desktop && from !== null && to !== undefined && to - from < -60) setOpen(false);
  };

  return (
    <div className="studio min-h-screen bg-paper font-sans text-charcoal">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <TopBar open={open} onToggle={toggle} />
      <StudioPanel open={open} onNavigate={onNavigate} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} />
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={
          "fixed bottom-0 left-0 right-0 top-14 z-10 bg-charcoal/60 transition-opacity duration-300 motion-reduce:transition-none lg:hidden " +
          (open ? "opacity-100" : "pointer-events-none opacity-0")
        }
      />
      <main
        id="main"
        tabIndex={-1}
        className={
          "bg-grid min-h-screen px-6 pb-24 pt-20 outline-none transition-[padding] duration-300 motion-reduce:transition-none lg:pr-12 " +
          (open ? "lg:pl-[23rem]" : "lg:pl-12")
        }
      >
        <div className="@container mx-auto max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
