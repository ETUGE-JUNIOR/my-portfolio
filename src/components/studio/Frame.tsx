import type { Shot } from "../../data/studio";
import { useI18n } from "../../i18n/context";

interface FrameProps {
  shot: Shot;
  onOpen?: () => void;
}

const handles = ["-left-1 -top-1", "-right-1 -top-1", "-bottom-1 -left-1", "-bottom-1 -right-1"];

/** A screenshot presented like a design-tool frame: name and size above, selection handles on hover. */
export function Frame({ shot, onOpen }: FrameProps) {
  const { t, ui } = useI18n();
  const { src, width, height } = shot;
  const label = t(shot.label);
  const alt = t(shot.alt);

  if (!src) {
    // Placeholder: visible while developing, hidden on the live site.
    if (!import.meta.env.DEV) return null;
    return (
      <figure>
        <figcaption className="mb-2 flex items-baseline justify-between gap-4 text-sm">
          <span className="font-medium text-accent">{label}</span>
          <span className="font-mono text-xs tabular-nums text-ink/70">
            {width} × {height}
          </span>
        </figcaption>
        <div
          style={{ aspectRatio: `${width} / ${height}` }}
          className="grid place-items-center border border-dashed border-accent bg-surface p-6 text-center text-sm text-accent"
        >
          Screenshot to come. Drop a {width} × {height} image here (development only, hidden on the live site).
        </div>
      </figure>
    );
  }

  return (
    <figure className="group">
      <figcaption className="mb-2 flex items-baseline justify-between gap-4 text-sm">
        <span className="font-medium text-accent">{label}</span>
        <span className="font-mono text-xs tabular-nums text-ink/70">
          {width} × {height}
        </span>
      </figcaption>
      <div className="relative border border-ink bg-surface transition-colors group-hover:border-accent motion-reduce:transition-none">
        <button type="button" onClick={onOpen} aria-label={ui.openFull(label)} className="block w-full cursor-zoom-in">
          <img src={src} alt={alt} width={width} height={height} loading="lazy" className="block h-auto w-full" />
        </button>
        {handles.map((pos) => (
          <span
            key={pos}
            aria-hidden="true"
            className={`pointer-events-none absolute ${pos} h-2 w-2 border border-accent bg-surface opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:transition-none`}
          />
        ))}
      </div>
    </figure>
  );
}
