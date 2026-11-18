import { useState, type KeyboardEvent, type PointerEvent } from "react";
import type { Shot } from "../../data/studio";
import { Icon } from "../../icons/Icon";
import { useI18n } from "../../i18n/context";

const STEP = 5;
const clamp = (n: number) => Math.min(100, Math.max(0, n));

/** Drag-to-compare: "before" is revealed on the left of the handle, "after" on the right. Works with pointer and keyboard. */
export function Compare({ before, after }: { before: Shot; after: Shot }) {
  const { t, ui } = useI18n();
  const [pos, setPos] = useState(50);
  if (!before.src || !after.src) return null;

  const fromPointer = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos(clamp(((e.clientX - r.left) / r.width) * 100));
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, number> = {
      ArrowLeft: pos - STEP,
      ArrowDown: pos - STEP,
      ArrowRight: pos + STEP,
      ArrowUp: pos + STEP,
      Home: 0,
      End: 100,
    };
    const next = keys[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setPos(clamp(next));
  };

  const tag = "absolute top-2 bg-ink px-2 py-1 font-mono text-xs text-surface";

  return (
    <figure>
      <div
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          fromPointer(e);
        }}
        onPointerMove={(e) => {
          if (e.currentTarget.hasPointerCapture(e.pointerId)) fromPointer(e);
        }}
        className="relative cursor-ew-resize touch-pan-y select-none overflow-hidden border border-ink bg-surface"
      >
        <img
          src={after.src}
          alt={t(after.alt)}
          width={after.width}
          height={after.height}
          draggable={false}
          loading="lazy"
          className="block h-auto w-full"
        />
        <img
          src={before.src}
          alt={t(before.alt)}
          width={before.width}
          height={before.height}
          draggable={false}
          loading="lazy"
          className="absolute inset-0 h-full w-full"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />
        <span aria-hidden="true" className={tag + " left-2"}>
          {ui.compare.before}
        </span>
        <span aria-hidden="true" className={tag + " right-2"}>
          {ui.compare.after}
        </span>

        <div
          role="slider"
          tabIndex={0}
          aria-label={ui.compare.slider}
          aria-orientation="horizontal"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKey}
          className="absolute inset-y-0 -ml-4 w-8 cursor-ew-resize"
          style={{ left: `${pos}%` }}
        >
          <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-accent" />
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center border border-accent bg-surface text-accent"
          >
            <Icon name="move-horizontal" />
          </span>
        </div>
      </div>
      <figcaption className="mt-2 flex justify-between gap-4 font-mono text-xs">
        <span className="text-accent">{t(before.label)}</span>
        <span className="text-right text-ink/70">{t(after.label)}</span>
      </figcaption>
      <p className="mt-1 font-mono text-xs text-ink/70">{ui.compare.hint}</p>
    </figure>
  );
}
