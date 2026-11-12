import { Link } from "react-router-dom";
import { studio } from "../../data/studio";
import { members } from "../../data/team";

const marker = "React.";
const at = studio.headline.lastIndexOf(marker);
const lead = at >= 0 ? studio.headline.slice(0, at) : studio.headline;
const tail = at >= 0 ? studio.headline.slice(at + marker.length) : "";

/** A static, design-tool style cursor label, attached inline to the last word. */
function CursorTag() {
  return (
    <span aria-hidden="true" className="ml-3 inline-flex select-none items-start align-middle">
      <svg width="20" height="20" viewBox="0 0 16 16" className="shrink-0">
        <path d="M1 1l5.2 13.2 2-5.4 5.4-2L1 1z" fill="#4A3AFF" stroke="#F6F6F3" strokeWidth="1" />
      </svg>
      <span className="-ml-1 mt-4 bg-electric px-2 py-1 text-sm font-medium text-paper">Etuge</span>
    </span>
  );
}

export function Hero() {
  const person = members[0];
  return (
    <section aria-labelledby="hero-title" className="pt-4 lg:pt-8">
      <p className="mb-6 flex w-fit max-w-full items-center gap-2 border border-electric px-3 py-1 text-sm text-electric">
        <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-electric" />
        {person.availability}
      </p>
      <h1
        id="hero-title"
        className="max-w-[18ch] text-4xl font-semibold leading-[1.02] tracking-tight min-[400px]:text-5xl sm:text-6xl lg:text-7xl"
      >
        {lead}
        {at >= 0 && (
          <span className="whitespace-nowrap">
            {marker}
            <CursorTag />
          </span>
        )}
        {tail}
      </h1>
      <p className="mt-6 max-w-[48ch] text-lg text-charcoal/80">{studio.value}</p>
      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          to={`/team/${person.slug}`}
          className="bg-electric px-4 py-2 font-medium text-paper transition-colors hover:bg-charcoal motion-reduce:transition-none"
        >
          View profile
        </Link>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-charcoal px-4 py-2 transition-colors hover:bg-charcoal hover:text-paper motion-reduce:transition-none"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}