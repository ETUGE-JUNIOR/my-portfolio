interface FrameProps {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
}

const handles = ["-left-1 -top-1", "-right-1 -top-1", "-bottom-1 -left-1", "-bottom-1 -right-1"];

/** A screenshot presented like a design-tool frame: name and size above, selection handles on hover. */
export function Frame({ src, alt, label, width, height }: FrameProps) {
  return (
    <figure className="group">
      <figcaption className="mb-2 flex items-baseline justify-between gap-4 text-sm">
        <span className="font-medium text-electric">{label}</span>
        <span className="tabular-nums text-charcoal/60">
          {width} × {height}
        </span>
      </figcaption>
      <div className="relative border border-charcoal bg-paper transition-colors group-hover:border-electric motion-reduce:transition-none">
        <img src={src} alt={alt} width={width} height={height} loading="lazy" className="block h-auto w-full" />
        {handles.map((pos) => (
          <span
            key={pos}
            aria-hidden="true"
            className={`absolute ${pos} h-2 w-2 border border-electric bg-paper opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:transition-none`}
          />
        ))}
      </div>
    </figure>
  );
}
