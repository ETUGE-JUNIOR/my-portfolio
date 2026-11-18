import { Link } from "react-router-dom";
import { studio } from "../../data/studio";
import { Icon } from "../../icons/Icon";
import { useI18n } from "../../i18n/context";
import { SectionHead } from "./SectionHead";

/** Only people who are on the team are shown as cards. Roles still to fill are named in one line. */
export function TeamBlock() {
  const { t, ui } = useI18n();
  const people = studio.team.filter((m) => m.holder);
  const planned = studio.team.filter((m) => !m.holder);
  return (
    <section id="team" aria-labelledby="team-title" className="scroll-mt-20">
      <SectionHead id="team-title" index="03" title={ui.teamTitle} />
      <ul className="border-t border-ink">
        {people.map((m) => (
          <li key={t(m.role)} className="grid gap-2 border-b border-ink py-6 @3xl:grid-cols-[16rem_1fr] @3xl:gap-8">
            <div>
              <h3 className="text-xl font-semibold">{t(m.role)}</h3>
              <p className="mt-1 text-accent">{m.holder}</p>
            </div>
            <div>
              <p className="max-w-[48ch] text-lg text-ink/80">{t(m.focus)}</p>
              {m.slug && (
                <Link
                  to={`/team/${m.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-accent underline underline-offset-4"
                >
                  {ui.viewProfile}
                  <Icon name="arrow-right" size={14} />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
      {planned.length > 0 && (
        <p className="mt-6 max-w-[60ch] text-ink/80">
          <span className="font-mono text-sm text-accent">{ui.teamPlanned}</span> {planned.map((m) => t(m.role)).join(", ")}.
        </p>
      )}
    </section>
  );
}
