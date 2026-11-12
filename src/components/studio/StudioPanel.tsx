import { Link } from "react-router-dom";
import { studio } from "../../data/studio";

const nav = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/#projects" },
  { label: "Contacts", to: "/#contacts" },
];

export function StudioPanel() {
  return (
    <aside
      id="home"
      className="bg-charcoal text-paper lg:fixed lg:inset-y-0 lg:left-0 lg:w-md lg:overflow-y-auto"
    >
      <div className="flex min-h-full flex-col px-6 py-8 lg:px-8">
        <header className="border-b border-paper/20 pb-4">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            {studio.name}
          </Link>
          <nav aria-label="Primary" className="mt-4 flex gap-6 text-sm">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-paper/70 hover:text-paper">
                {n.label}
              </Link>
            ))}
          </nav>
        </header>

        <section className="py-12">
          <h1 className="max-w-[16ch] text-5xl font-semibold leading-[1.05] tracking-tight">
            {studio.headline}
          </h1>
          <p className="mt-6 max-w-[40ch] text-paper/75">{studio.value}</p>
        </section>

        <section aria-labelledby="services">
          <h2 id="services" className="mb-4 text-sm font-medium text-electric-soft">
            Services
          </h2>
          <dl>
            {studio.services.map((s) => (
              <div key={s.name} className="grid grid-cols-[8rem_1fr] gap-4 border-t border-paper/20 py-4">
                <dt className="font-medium">{s.name}</dt>
                <dd className="text-sm text-paper/70">{s.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="team" className="mt-12">
          <h2 id="team" className="mb-4 text-sm font-medium text-electric-soft">
            The EMJ Team
          </h2>
          <ul className="grid gap-2">
            {studio.team.map((m) => (
              <li
                key={m.role}
                className={
                  m.holder
                    ? "border border-paper/30 border-l-4 border-l-electric-soft p-4"
                    : "border border-paper/30 p-4"
                }
              >
                <p className="font-medium">{m.role}</p>
                {m.holder && <p className="text-sm">{m.holder}</p>}
                <p className="text-sm text-paper/60">{m.focus}</p>
                {m.slug && (
                  <Link to={`/team/${m.slug}`} className="mt-2 inline-block text-sm text-electric-soft underline underline-offset-4">
                    View profile
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>

        <footer id="contacts" className="mt-auto border-t border-paper/20 pt-8">
          <p className="text-sm text-paper/70">Start a project</p>
          <a href={`mailto:${studio.email}`} className="text-lg underline underline-offset-4">
            {studio.email}
          </a>
        </footer>
      </div>
    </aside>
  );
}
