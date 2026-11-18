import { useEffect, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { members } from "../../data/team";
import { caseStudies, studio } from "../../data/studio";
import { Icon } from "../../icons/Icon";
import { useI18n } from "../../i18n/context";
import { NotFound } from "./NotFound";

/** Title in the 256px anchor column, content beside it. */
function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-ink pt-6 @4xl:grid-cols-[16rem_1fr] @4xl:gap-8">
      <h2 className="text-2xl font-semibold tracking-tight @4xl:sticky @4xl:top-20 @4xl:self-start">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export function TeamProfile() {
  const { t, ui, lang } = useI18n();
  const { slug } = useParams();
  const m = members.find((x) => x.slug === slug);

  useEffect(() => {
    document.title = m ? `${m.name} | ${studio.name}` : `${ui.pageNotFound} | ${studio.name}`;
    return () => {
      document.title = studio.title[lang];
    };
  }, [m, ui.pageNotFound, lang]);

  if (!m) return <NotFound />;

  const work = m.work
    .map((id) => caseStudies.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const cv = studio.cv[lang];
  const others = m.links;

  return (
    <article>
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-accent underline underline-offset-4">
        <Icon name="arrow-left" size={14} />
        {ui.backToCaseStudies}
      </Link>

      <div className="mt-8 grid gap-8 @4xl:grid-cols-[16rem_1fr]">
        <div className="flex flex-col gap-6">
          <img
            src={m.photo}
            alt={ui.portraitOf(m.name)}
            width={640}
            height={640}
            className="aspect-square w-40 border border-ink object-cover @4xl:w-full"
          />
          <div className="text-sm">
            <p className="font-medium text-accent">{ui.languages}</p>
            <ul className="mt-2 grid gap-1">
              {m.languages.map((l) => (
                <li key={t(l)}>{t(l)}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-accent">{ui.roleAt(t(m.role))}</p>
          <h1 className="mt-2 text-5xl font-semibold leading-[1.05] tracking-tight lg:text-6xl">{m.name}</h1>
          <p className="mt-2 text-ink/70">{t(m.location)}</p>

          <div className="mt-8 grid max-w-[60ch] gap-4 text-lg">
            {m.bio.map((p) => (
              <p key={t(p)}>{t(p)}</p>
            ))}
          </div>

          <p className="mt-8 flex w-fit max-w-full items-center gap-2 border border-accent px-3 py-2 text-accent">
            <span aria-hidden="true" className="h-2 w-2 shrink-0 bg-accent" />
            {t(m.availability)}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={cv.href}
              download={cv.filename}
              className="inline-flex items-center gap-2 bg-accent h-10 px-4 font-medium text-on-accent transition-colors hover:bg-ink motion-reduce:transition-none"
            >
              <Icon name="download" />
              {ui.downloadCv}
            </a>
            {others.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent underline underline-offset-4"
              >
                {l.icon && <Icon name={l.icon} />}
                {t(l.label)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-12">
        {work.length > 0 && (
          <Section title={ui.selectedWork}>
            <ul className="grid gap-px border border-ink bg-ink">
              {work.map((c) => (
                <li key={c.id} className="bg-surface">
                  <Link
                    to={`/#${c.id}`}
                    className="block p-4 transition-colors hover:bg-ink hover:text-surface motion-reduce:transition-none"
                  >
                    <span className="block font-medium">{t(c.title)}</span>
                    <span className="block text-sm opacity-70">{t(c.summary)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        )}

        <Section title={ui.skills}>
          <dl className="grid gap-4">
            {m.skills.map((s) => (
              <div key={t(s.group)} className="grid gap-2 @xl:grid-cols-[8rem_1fr]">
                <dt className="text-sm font-medium text-accent">{t(s.group)}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2 text-sm">
                    {s.items.map((i) => (
                      <li key={t(i)} className="border border-rule bg-surface px-2 py-1">
                        {t(i)}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title={ui.experience}>
          <div className="grid gap-8">
            {m.experience.map((e) => (
              <div key={t(e.org) + t(e.period)}>
                <h3 className="text-lg font-semibold">{t(e.title)}</h3>
                <p className="text-sm text-ink/70">
                  {t(e.org)}, {t(e.place)} · {t(e.period)}
                </p>
                <ul className="mt-2 list-disc pl-5">
                  {e.points.map((p) => (
                    <li key={t(p)}>{t(p)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title={ui.education}>
          <div className="grid gap-6">
            {m.education.map((e) => (
              <div key={t(e.title)}>
                <h3 className="text-lg font-semibold">{t(e.title)}</h3>
                <p className="text-sm text-ink/70">
                  {t(e.org)} · {t(e.period)}
                </p>
                {e.note && <p className="mt-1 text-sm">{t(e.note)}</p>}
              </div>
            ))}
          </div>
        </Section>
      </div>
    </article>
  );
}