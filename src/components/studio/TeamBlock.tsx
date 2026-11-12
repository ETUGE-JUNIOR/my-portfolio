import { Link } from "react-router-dom";
import { studio } from "../../data/studio";

export function TeamBlock() {
  return (
    <section id="team" aria-labelledby="team-title" className="scroll-mt-20">
      <h2 id="team-title" className="mb-8 text-5xl font-semibold tracking-tight">
        The EMJ Team
      </h2>
      <ul className="grid gap-px border border-charcoal bg-charcoal @xl:grid-cols-2">
        {studio.team.map((m) => (
          <li key={m.role} className="bg-paper p-6">
            <h3 className="text-xl font-semibold">{m.role}</h3>
            {m.holder && <p className="mt-1 font-medium text-electric">{m.holder}</p>}
            <p className="mt-2 text-charcoal/80">{m.focus}</p>
            {m.slug && (
              <Link to={`/team/${m.slug}`} className="mt-4 inline-block text-electric underline underline-offset-4">
                View profile
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}