/**
 * EMJ monogram. Every stroke is 8 units on an 8-unit grid (the studio's 8pt rule), so it stays crisp
 * at 20px tall (4px strokes). Letters use currentColor; the closing square is the accent.
 * `soft` swaps in the lighter accent for use on the always-dark drawer colour.
 * `mono` draws the square in the letter colour: use it on the indigo brand colour, where an indigo square would vanish.
 */
export function Logo({ soft = false, mono = false, className }: { soft?: boolean; mono?: boolean; className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 136 40" shapeRendering="crispEdges" className={className}>
      <g fill="currentColor">
        {/* E */}
        <rect x="0" y="0" width="8" height="40" />
        <rect x="8" y="0" width="24" height="8" />
        <rect x="8" y="16" width="16" height="8" />
        <rect x="8" y="32" width="24" height="8" />
        {/* M */}
        <rect x="40" y="0" width="8" height="40" />
        <rect x="48" y="0" width="24" height="8" />
        <rect x="56" y="8" width="8" height="16" />
        <rect x="72" y="0" width="8" height="40" />
        {/* J */}
        <rect x="112" y="0" width="8" height="40" />
        <rect x="88" y="32" width="24" height="8" />
        <rect x="88" y="24" width="8" height="8" />
      </g>
      <rect x="128" y="32" width="8" height="8" className={mono ? "fill-current" : soft ? "fill-electric-soft" : "fill-accent"} />
    </svg>
  );
}
