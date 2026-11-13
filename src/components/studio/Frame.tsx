import type { Shot } from "../../data/studio";

interface FrameProps {
  shot: Shot;
  onOpen?: () => void;
}

const handles = ["-left-1 -top-1", "-right-1 -top-1", "-bottom-1 -left-1", "-bottom-1 -right-1"];

/** A screenshot presented like a design-tool frame: name and size above, selection handles on hover. */
export function Frame({ shot, onOpen }: FrameProps) {
  const { src, alt, label, width, height } = shot;

  if (!src) {
    // Placeholder: visible while developing, hidden on the live site.
    if (!import.meta.env.DEV) return null;
    return (
      <figure>
        <figcaption className="mb-2 flex items-baseline justify-between gap-4 text-sm">
          <span className="font-medium text-electric">{label}</span>
          <span className="tabular-nums text-charcoal/60">
            {width} × {height}
          </span>
        </figcaption>
        <div
          style={{ aspectRatio: `${width} / ${height}` }}
          className="grid place-items-center border border-dashed border-electric bg-paper p-6 text-center text-sm text-electric"
        >
          Screenshot to come. Drop a {width} × {height} image here (development only, hidden on the live site).
        </div>
      </figure>
    );
  }

  return (
    <figure className="group">
      <figcaption className="mb-2 flex items-baseline justify-between gap-4 text-sm">
        <span className="font-medium text-electric">{label}</span>
        <span className="tabular-nums text-charcoal/60">
          {width} × {height}
        </span>
      </figcaption>
      <div className="relative border border-charcoal bg-paper transition-colors group-hover:border-electric motion-reduce:transition-none">
        <button type="button" onClick={onOpen} aria-label={`Open ${label} full size`} className="block w-full cursor-zoom-in">
          <img src={src} alt={alt} width={width} height={height} loading="lazy" className="block h-auto w-full" />
        </button>
        {handles.map((pos) => (
          <span
            key={pos}
            aria-hidden="true"
            className={`pointer-events-none absolute ${pos} h-2 w-2 border border-electric bg-paper opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:transition-none`}
          />
        ))}
      </div>
    </figure>
  );
}
