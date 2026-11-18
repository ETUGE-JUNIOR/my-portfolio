import { useEffect, useState } from "react";

/** The line, measured from the top of the window, where a section counts as "reached": the header plus some breathing room. */
const LINE = 56 + 96;

/**
 * Which section the visitor is reading: the last one whose top has passed the line.
 * Returns null above the first section (the hero) or when `enabled` is false.
 * `ids` must be a stable array (define it outside the component).
 */
export function useActiveSection(ids: readonly string[], enabled: boolean): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= LINE) current = id;
      }
      // At the very bottom the last section is always the one being read, even if it is short.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && ids.length > 0) current = ids[ids.length - 1] ?? current;
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(frame);
    };
  }, [ids, enabled]);

  return enabled ? active : null;
}
