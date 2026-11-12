import { caseStudies, type Status } from "../../data/studio";
import { Frame } from "./Frame";

const statusLabel: Record<Status, string> = {
  live: "Live",
  "in-development": "In development",
  draft: "Case study in progress",
};

const pad = (n: number) => String(n).padStart(2, "0");

export function CaseStudyList() {
  return (
    <div id="projects" className="scroll-mt-20">
      <div className="mb-8 flex items-baseline justify-between gap-4">
        <h2 className="text-5xl font-semibold tracking-tight">Case studies</h2>
        <p className="text-sm tabular-nums text-charcoal/60">{pad(caseStudies.length)} projects</p>
      </div>

      <div className="border-b border-charcoal">
        {caseStudies.map((c, i) => (
          <article
            key={c.id}
            id={c.id}
            className="scroll-mt-20 grid gap-6 border-t border-charcoal py-12 @4xl:grid-cols-[16rem_1fr] @4xl:gap-8"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 @4xl:flex-col @4xl:items-start @4xl:gap-4 @4xl:sticky @4xl:top-20 @4xl:self-start">
              <p className="text-5xl font-semibold leading-none tabular-nums text-electric">{pad(i + 1)}</p>
              <span
                className={
                  "w-fit border px-2 py-1 text-sm " +
                  (c.status === "live" ? "border-electric bg-electric text-paper" : "border-charcoal bg-paper")
                }
              >
                {statusLabel[c.status]}
              </span>
              {c.stack.length > 0 && (
                <ul className="flex w-full flex-wrap gap-2 text-sm @4xl:w-auto">
                  {c.stack.map((t) => (
                    <li key={t} className="border border-rule bg-paper px-2 py-1">
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
              <h3 className="text-3xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2 max-w-[60ch] text-lg text-charcoal/80">{c.summary}</p>

              {c.images && c.images.length > 0 && (
                <div className="mt-8 grid gap-8">
                  {c.images.map((im) => (
                    <Frame key={im.src} {...im} />
                  ))}
                </div>
              )}

              {(c.problem || c.solution || c.role || c.statusNote || c.proof) && (
                <dl className="mt-8 grid max-w-[60ch] gap-4">
                  {c.problem && <Row term="Problem" text={c.problem} />}
                  {c.solution && <Row term="Solution" text={c.solution} />}
                  {c.role && <Row term="My role" text={c.role} />}
                  {c.statusNote && <Row term="Where it stands" text={c.statusNote} />}
                  {c.proof && <Row term="How it was checked" text={c.proof} />}
                </dl>
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