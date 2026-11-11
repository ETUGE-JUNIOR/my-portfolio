import { caseStudies, type Status } from "../../data/studio";

const statusLabel: Record<Status, string> = {
  live: "Live",
  "in-development": "In development",
  draft: "Case study in progress",
};

export function CaseStudyList() {
  return (
    <div id="projects" className="scroll-mt-8">
      <h2 className="mb-8 text-3xl font-semibold tracking-tight">Case studies</h2>
      <div className="border-b border-charcoal">
        {caseStudies.map((c) => (
          <article
            key={c.id}
            id={c.id}
            className="scroll-mt-8 grid gap-6 border-t border-charcoal py-8 lg:grid-cols-[16rem_1fr] lg:gap-8"
          >
            <div className="flex flex-col gap-4">
              <span
                className={
                  "w-fit border px-2 py-1 text-sm " +
                  (c.status === "live"
                    ? "border-electric bg-electric text-paper"
                    : "border-charcoal")
                }
              >
                {statusLabel[c.status]}
              </span>
              {c.stack.length > 0 && (
                <ul className="flex flex-wrap gap-2 text-sm">
                  {c.stack.map((t) => (
                    <li key={t} className="border border-rule px-2 py-1">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
              {c.links && (
                <p className="flex gap-4 text-sm">
                  {c.links.live && (
                    <a className="text-electric underline underline-offset-4" href={c.links.live} target="_blank" rel="noopener noreferrer">
                      Live demo
                    </a>
                  )}
                  {c.links.code && (
                    <a className="text-electric underline underline-offset-4" href={c.links.code} target="_blank" rel="noopener noreferrer">
                      Source code
                    </a>
                  )}
                </p>
              )}
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 max-w-[60ch] text-charcoal/80">{c.summary}</p>
              {(c.problem || c.solution || c.role || c.statusNote || c.proof) && (
                <dl className="mt-6 grid max-w-[60ch] gap-4">
                  {c.problem && <Row term="Problem" text={c.problem} />}
                  {c.solution && <Row term="Solution" text={c.solution} />}
                  {c.role && <Row term="My role" text={c.role} />}
                  {c.statusNote && <Row term="Where it stands" text={c.statusNote} />}
                  {c.proof && <Row term="How it was checked" text={c.proof} />}
                </dl>
              )}
              {c.images && c.images.length > 0 && (
                <div className="mt-8 grid gap-4">
                  {c.images.map((im) => (
                    <img
                      key={im.src}
                      src={im.src}
                      alt={im.alt}
                      loading="lazy"
                      className="w-full border border-charcoal"
                    />
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Row({ term, text }: { term: string; text: string }) {
  return (
    <div>
      <dt className="text-sm font-medium text-electric">{term}</dt>
      <dd className="mt-1">{text}</dd>
    </div>
  );
}
