import { useEffect, useRef, useState, type TouchEvent } from "react";
import type { Shot } from "../../data/studio";

interface LightboxProps {
  shots: Shot[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}

const btn =
  "border border-paper/40 px-3 py-1 transition-colors hover:bg-paper hover:text-charcoal motion-reduce:transition-none";
const arrow =
  "absolute top-1/2 -translate-y-1/2 border border-paper/40 bg-charcoal px-3 py-4 transition-colors hover:bg-paper hover:text-charcoal motion-reduce:transition-none";

/** Full-size screenshot viewer: arrow keys, swipe, Escape, and an actual-size zoom. */
export function Lightbox({ shots, index, onChange, onClose }: LightboxProps) {
  const [zoom, setZoom] = useState(false);
  const startX = useRef<number | null>(null);
  const count = shots.length;
  const shot = shots[index];

  const go = (step: number) => {
    setZoom(false);
    onChange((index + step + count) % count);
  };

  // Keyboard: Escape closes, arrows move, Z toggles zoom.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") {
        setZoom(false);
        onChange((index + 1) % count);
      } else if (e.key === "ArrowLeft") {
        setZoom(false);
        onChange((index - 1 + count) % count);
      } else if (e.key === "z" || e.key === "Z") setZoom((z) => !z);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, count, onChange, onClose]);

  // Lock page scroll, move focus into the dialog, give focus back on close.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.getElementById("lightbox")?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);

  // Warm up the neighbours so next and previous feel instant.
  useEffect(() => {
    for (const step of [-1, 1]) {
      const near = shots[(index + step + count) % count];
      if (near?.src) {
        const img = new Image();
        img.src = near.src;
      }
    }
  }, [index, count, shots]);

  if (!shot?.src) return null;

  const onTouchStart = (e: TouchEvent<HTMLElement>) => {
    startX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: TouchEvent<HTMLElement>) => {
    const from = startX.current;
    const to = e.changedTouches[0]?.clientX;
    startX.current = null;
    if (zoom || from === null || to === undefined || count < 2) return;
    if (to - from < -60) go(1);
    else if (to - from > 60) go(-1);
  };

  return (
    <div
      id="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={shot.label}
      tabIndex={-1}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="fixed inset-0 z-50 flex flex-col bg-charcoal/95 text-paper outline-none"
    >
      <div className="flex items-center justify-between gap-4 border-b border-paper/20 px-4 py-3 text-sm">
        <p aria-live="polite" className="min-w-0 truncate">
          <span className="font-medium">{shot.label}</span>
          <span className="ml-3 tabular-nums text-paper/60">
            {shot.width} × {shot.height}
          </span>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <span className="tabular-nums text-paper/60">
            {index + 1} / {count}
          </span>
          <button type="button" aria-pressed={zoom} onClick={() => setZoom((z) => !z)} className={btn}>
            {zoom ? "Fit to screen" : "Actual size"}
          </button>
          <button type="button" onClick={onClose} className={btn}>
            Close
          </button>
        </div>
      </div>

      <div className="relative min-h-0 flex-1">
        <div className={"h-full overflow-auto " + (zoom ? "" : "flex items-center justify-center p-4")}>
          <img
            src={shot.src}
            alt={shot.alt}
            width={shot.width}
            height={shot.height}
            onClick={() => setZoom((z) => !z)}
            style={zoom ? { width: shot.width } : undefined}
            className={zoom ? "max-w-none cursor-zoom-out" : "max-h-full max-w-full cursor-zoom-in object-contain"}
          />
        </div>

        {count > 1 && (
          <>
            <button type="button" aria-label="Previous screenshot" onClick={() => go(-1)} className={arrow + " left-2"}>
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7.5 2L3.5 6l4 4" />
              </svg>
            </button>
            <button type="button" aria-label="Next screenshot" onClick={() => go(1)} className={arrow + " right-2"}>
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4.5 2l4 4-4 4" />
              </svg>
            </button>
          </>
        )}
      </div>

      <p className="border-t border-paper/20 px-4 py-2 text-xs text-paper/60">
        Arrow keys to move. Z or click to zoom. Escape to close.
      </p>
    </div>
  );
}
