import { useEffect, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { members } from "../../data/team";
import { caseStudies } from "../../data/studio";
import { NotFound } from "./NotFound";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12 border-t border-charcoal pt-6">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function TeamProfile() {
  const { slug } = useParams();
  const m = members.find((x) => x.slug === slug);

  useEffect(() => {
    document.title = m ? `${m.name} | EMJ Digital Studio` : "Page not found | EMJ Digital Studio";
  }, [m]);

  if (!m) return <NotFound />;

  const work = m.work
    .map((id) => caseStudies.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <article>
      <Link to="/" className="text-sm text-electric underline underline-offset-4">
        Back to case studies
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[16rem_1fr]">
        <div className="flex flex-col gap-6">
          <img
            src={m.photo}
            alt={`Portrait of ${m.name}`}
            width={640}
            height={640}
            className="aspect-square w-full border border-charcoal object-cover"
          />
          <ul className="grid gap-2 text-sm">
            {m.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") || l.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-charcoal px-4 py-2 hover:bg-charcoal hover:text-paper"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="text-sm">
            <p className="font-medium text-electric">Languages</p>
            <ul className="mt-2 grid gap-1">
              {m.languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-electric">{m.role}, EMJ Digital Studio</p>
          <h1 className="mt-2 text-5xl font-semibold leading-[1.05] tracking-tight">{m.name}</h1>
          <p className="mt-2 text-charcoal/70">{m.location}</p>

          <div className="mt-8 grid max-w-[60ch] gap-4">
            {m.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <p className="mt-8 max-w-[60ch] border border-electric p-4 text-electric">{m.availability}</p>

          {work.length > 0 && (
            <Section title="Selected work">
              <ul className="grid gap-px border border-charcoal bg-charcoal">
                {work.map((c) => (
                  <li key={c.id} className="bg-paper">
                    <Link to={`/#${c.id}`} className="block p-4 hover:bg-charcoal hover:text-paper">
                      <span className="block font-medium">{c.title}</span>
                      <span className="block text-sm opacity-70">{c.summary}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <Section title="Skills">
            <dl className="grid gap-4">
              {m.skills.map((s) => (
                <div key={s.group} className="grid gap-2 sm:grid-cols-[8rem_1fr]">
                  <dt className="text-sm font-medium text-electric">{s.group}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2 text-sm">
                      {s.items.map((i) => (
                        <li key={i} className="border border-rule px-2 py-1">
                          {i}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section title="Experience">
            <div className="grid gap-8">
              {m.experience.map((e) => (
                <div key={e.org}>
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                  <p className="text-sm text-charcoal/70">
                    {e.org}, {e.place} · {e.period}
                  </p>
                  <ul className="mt-2 list-disc pl-5">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Education">
            <div className="grid gap-6">
              {m.education.map((e) => (
                <div key={e.title}>
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                  <p className="text-sm text-charcoal/70">
                    {e.org} · {e.period}
                  </p>
                  {e.note && <p className="mt-1 text-sm">{e.note}</p>}
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </article>
  );
}
