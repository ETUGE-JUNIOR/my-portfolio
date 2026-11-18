interface SectionHeadProps {
  id: string;
  index: string;
  title: string;
  /** Small right-aligned note, e.g. a project count. */
  aside?: string;
  /** For sections on the always-dark band: colours come from the brand constants, not the theme. */
  inverse?: boolean;
}

/** Shared section heading: a mono index above a large title, so every section starts the same way. */
export function SectionHead({ id, index, title, aside, inverse }: SectionHeadProps) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className={"font-mono text-sm tabular-nums " + (inverse ? "text-electric-soft" : "text-accent")}>{index}</p>
        <h2 id={id} className="mt-2 text-5xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
      {aside && (
        <p className={"pb-1 font-mono text-sm tabular-nums " + (inverse ? "text-paper/70" : "text-ink/70")}>{aside}</p>
      )}
    </div>
  );
}
