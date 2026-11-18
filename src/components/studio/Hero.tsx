import { Link } from "react-router-dom";
import { caseStudies, studio } from "../../data/studio";
import { members } from "../../data/team";
import { Icon } from "../../icons/Icon";
import { useI18n } from "../../i18n/context";

const handles = ["-left-1 -top-1", "-right-1 -top-1", "-bottom-1 -left-1", "-bottom-1 -right-1"];

/** A static, design-tool style cursor label resting on the corner of the frame. */
function CursorTag() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute bottom-1 right-10 inline-flex select-none items-start">
      <svg width="20" height="20" viewBox="0 0 16 16" className="shrink-0 fill-accent stroke-surface" strokeWidth="1">
        <path d="M1 1l5.2 13.2 2-5.4 5.4-2L1 1z" />
      </svg>
      <span className="-ml-1 mt-4 bg-accent px-2 py-1 text-sm font-medium text-on-accent">Etuge</span>
    </span>
  );
}

export function Hero() {
  const { t, ui, lang } = useI18n();
  const cv = studio.cv[lang];
  const person = members[0];
  const project = caseStudies.find((c) => c.id === "drink-manage");
  const shot = project?.images?.[0];

  return (
    <section
      aria-labelledby="hero-title"
      className={
        "grid gap-12 pt-4 lg:pt-8 " +
        (shot?.src ? "@3xl:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] @3xl:items-center @3xl:gap-8" : "")
      }
    >
      <div>
        <p className="rise mb-6 flex w-fit max-w-full items-center gap-2 border border-accent px-3 py-1 font-mono text-sm text-accent">
          <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-accent" />
          {t(person.availability)}
        </p>
        <h1
          id="hero-title"
          className="rise rise-2 max-w-[16ch] text-balance text-4xl font-semibold leading-[1.02] tracking-tight min-[400px]:text-5xl @5xl:text-6xl"
        >
          {t(studio.headline)}
        </h1>
        <p className="rise rise-3 mt-6 max-w-[48ch] text-lg text-ink/80">{t(studio.value)}</p>
        <div className="rise rise-4 mt-8 flex flex-wrap gap-2">
          <Link
            to={`/team/${person.slug}`}
            className="inline-flex items-center gap-2 bg-accent h-10 px-4 font-medium text-on-accent transition-colors hover:bg-ink motion-reduce:transition-none"
          >
            <Icon name="user" />
            {ui.viewProfile}
          </Link>
          <a
            href={cv.href}
            download={cv.filename}
            className="inline-flex items-center gap-2 border border-ink h-10 px-4 transition-colors hover:bg-ink hover:text-surface motion-reduce:transition-none"
          >
            <Icon name="download" />
            {ui.downloadCv}
          </a>
        </div>
      </div>

      {project && shot?.src && (
        <Link
          to={`/#${project.id}`}
          aria-label={ui.readCase(project.name)}
          className="rise rise-3 bg-dots group relative block border border-ink p-4 pb-10 @xl:p-6 @xl:pb-12"
        >
          <figure>
            <figcaption className="mb-2 flex items-baseline justify-between gap-4 font-mono text-xs">
              <span className="text-accent">
                {project.name} / {t(shot.label)}
              </span>
              <span className="tabular-nums text-ink/70">
                {shot.width} × {shot.height}
              </span>
            </figcaption>
            <div className="relative border border-accent bg-surface">
              <img
                src={shot.src}
                alt={t(shot.alt)}
                width={shot.width}
                height={shot.height}
                fetchPriority="high"
                className="block h-auto w-full"
              />
              {handles.map((pos) => (
                <span
                  key={pos}
                  aria-hidden="true"
                  className={`pointer-events-none absolute ${pos} h-2 w-2 border border-accent bg-surface`}
                />
              ))}
            </div>
          </figure>
          <CursorTag />
        </Link>
      )}
    </section>
  );
}
