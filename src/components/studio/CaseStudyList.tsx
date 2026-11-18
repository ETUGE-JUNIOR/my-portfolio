import { useState } from "react";
import { caseStudies, type CaseStudy, type Design, type Shot } from "../../data/studio";
import { Icon } from "../../icons/Icon";
import { useI18n } from "../../i18n/context";
import { Compare } from "./Compare";
import { Frame } from "./Frame";
import { SectionHead } from "./SectionHead";
import { Lightbox } from "./Lightbox";

const pad = (n: number) => String(n).padStart(2, "0");

/** Placeholders (no src) show only in development. */
const visible = (s: Shot) => Boolean(s.src) || import.meta.env.DEV;

/** Every real screenshot of a case study, in reading order, without duplicates. */
function galleryOf(c: CaseStudy): Shot[] {
  const all = [
    ...(c.images ?? []),
    ...(c.design?.compare ?? []),
    ...(c.design?.decisions.flatMap((d) => d.shots ?? []) ?? []),
  ];
  const seen = new Set<string>();
  const out: Shot[] = [];
  for (const s of all) {
    if (s.src && !seen.has(s.src)) {
      seen.add(s.src);
      out.push(s);
    }
  }
  return out;
}

export function CaseStudyList() {
  const { t, ui } = useI18n();
  const [view, setView] = useState<{ id: string; index: number } | null>(null);
  const active = view ? caseStudies.find((c) => c.id === view.id) : undefined;
  const activeShots = active ? galleryOf(active) : [];

  return (
    <div id="projects" className="scroll-mt-20">
      <SectionHead id="projects-title" index="01" title={ui.caseStudies} aside={ui.projectCount(pad(caseStudies.length))} />

      <div className="border-b border-ink">
        {caseStudies.map((c, i) => {
          const gallery = galleryOf(c);
          const open = (s: Shot) => {
            const index = gallery.findIndex((g) => g.src === s.src);
            if (index >= 0) setView({ id: c.id, index });
          };

          return (
            <article
              key={c.id}
              id={c.id}
              className="scroll-mt-20 grid gap-6 border-t border-ink py-12 @4xl:grid-cols-[16rem_1fr] @4xl:gap-8"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 @4xl:sticky @4xl:top-20 @4xl:flex-col @4xl:items-start @4xl:gap-4 @4xl:self-start">
                <p className="text-5xl font-semibold leading-none tabular-nums text-accent">{pad(i + 1)}</p>
                <span
                  className={
                    "w-fit border px-2 py-1 font-mono text-xs " +
                    (c.status === "live" ? "border-accent bg-accent text-on-accent" : "border-ink bg-surface")
                  }
                >
                  {ui.status[c.status]}
                </span>
                {c.stack.length > 0 && (
                  <ul className="flex w-full flex-wrap gap-2 text-sm @4xl:w-auto">
                    {c.stack.map((t) => (
                      <li key={t} className="border border-rule bg-surface px-2 py-1 font-mono text-xs">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
                {c.links && (
                  <p className="flex gap-4 text-sm">
                    {c.links.live && (
                      <a
                        className="inline-flex items-center gap-1 text-accent underline underline-offset-4"
                        href={c.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {ui.liveDemo}
                        <Icon name="arrow-up-right" size={12} />
                      </a>
                    )}
                    {c.links.code && (
                      <a
                        className="inline-flex items-center gap-1 text-accent underline underline-offset-4"
                        href={c.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon name="code" size={14} />
                        {ui.sourceCode}
                      </a>
                    )}
                  </p>
                )}
              </div>

              <div className="@container">
                <h3 className="text-3xl font-semibold tracking-tight">{t(c.title)}</h3>
                <p className="mt-2 max-w-[60ch] text-lg text-ink/80">{t(c.summary)}</p>

                {c.images && c.images.length > 0 && (
                  <div className="mt-8 grid gap-8">
                    {c.images.map((im) => (
                      <Frame key={im.src ?? t(im.label)} shot={im} onOpen={() => open(im)} />
                    ))}
                  </div>
                )}

                {(c.problem || c.solution || c.role || c.statusNote || c.proof) && (
                  <dl className="mt-8 grid max-w-[60ch] gap-4">
                    {c.problem && <Row term={ui.problem} text={t(c.problem)} />}
                    {c.solution && <Row term={ui.solution} text={t(c.solution)} />}
                    {c.role && <Row term={ui.myRole} text={t(c.role)} />}
                    {c.statusNote && <Row term={ui.whereItStands} text={t(c.statusNote)} />}
                    {c.proof && <Row term={ui.howChecked} text={t(c.proof)} />}
                  </dl>
                )}

                {c.design && <DesignDecisions design={c.design} open={open} />}
              </div>
            </article>
          );
        })}
      </div>

      {view && activeShots.length > 0 && (
        <Lightbox
          shots={activeShots}
          index={view.index}
          onChange={(index) => setView({ id: view.id, index })}
          onClose={() => setView(null)}
        />
      )}
    </div>
  );
}

function DesignDecisions({ design, open }: { design: Design; open: (s: Shot) => void }) {
  const { t, ui } = useI18n();
  const [before, after] = design.compare ?? [];
  const compareShown = design.compare && design.compare.length > 0 && (design.compare.every((s) => s.src) || import.meta.env.DEV);

  return (
    <div className="mt-12 border-t border-ink pt-8">
      <h4 className="text-2xl font-semibold tracking-tight">{ui.designDecisions}</h4>
      <p className="mt-4 max-w-[60ch]">{t(design.intro)}</p>

      <h5 className="mt-8 text-sm font-medium text-accent">{ui.feedbackTitle}</h5>
      <p className="mt-2 max-w-[60ch]">{t(design.session)}</p>
      <ol className="mt-4 grid max-w-[60ch] gap-3">
        {design.feedback.map((f, i) => (
          <li key={t(f)} className="grid grid-cols-[2rem_1fr] gap-2">
            <span className="tabular-nums text-accent">{pad(i + 1)}</span>
            <span>{t(f)}</span>
          </li>
        ))}
      </ol>

      {compareShown && design.compare && (
        <div className="mt-10">
          <h5 className="text-sm font-medium text-accent">{ui.beforeAfter}</h5>
          <div className="mt-4">
            {before?.src && after?.src ? (
              <Compare before={before} after={after} />
            ) : (
              <div className="grid gap-8 @2xl:grid-cols-2">
                {design.compare.map((s) => (
                  <Frame key={t(s.label)} shot={s} onOpen={() => open(s)} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <h5 className="mt-10 text-sm font-medium text-accent">{ui.whatIChanged}</h5>
      <div className="mt-4 grid gap-10">
        {design.decisions.map((d, i) => (
          <article key={t(d.title)}>
            <h6 className="text-lg font-semibold">
              <span className="mr-3 tabular-nums text-accent">{pad(i + 1)}</span>
              {t(d.title)}
            </h6>
            <p className="mt-2 max-w-[60ch] text-ink/80">{t(d.text)}</p>
            {d.shots && d.shots.some(visible) && (
              <div className="mt-4 grid gap-8">
                {d.shots.map((s) => (
                  <Frame key={t(s.label)} shot={s} onOpen={() => open(s)} />
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

function Row({ term, text }: { term: string; text: string }) {
  return (
    <div>
      <dt className="font-mono text-xs text-accent">{term}</dt>
      <dd className="mt-1">{text}</dd>
    </div>
  );
}
