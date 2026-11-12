import { studio } from "../../data/studio";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-20">
      <h2 id="services-title" className="mb-8 text-5xl font-semibold tracking-tight">
        Services
      </h2>
      <ul className="grid gap-px border border-charcoal bg-charcoal @xl:grid-cols-2">
        {studio.services.map((s, i) => (
          <li key={s.name} className="bg-paper p-6">
            <p className="text-sm tabular-nums text-electric">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 text-xl font-semibold">{s.name}</h3>
            <p className="mt-2 text-charcoal/80">{s.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
