import { stack } from "../../data/studio";

export function StackBadges() {
  return (
    <section aria-labelledby="stack" className="mt-16">
      <h2 id="stack" className="text-3xl font-semibold tracking-tight">
        Tech stack
      </h2>
      <p className="mt-2 max-w-[60ch] text-charcoal/80">
        Shipped means used in a deployed project. Practiced means on the CV, with no public project yet.
      </p>
      <ul className="mt-8 grid gap-px border border-charcoal bg-charcoal sm:grid-cols-2 xl:grid-cols-3">
        {stack.map((s) => (
          <li key={s.name} className="bg-paper p-4">
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium">{s.name}</span>
              <span
                className={
                  "border px-2 py-0.5 text-xs " +
                  (s.level === "shipped" ? "border-electric text-electric" : "border-rule text-charcoal/70")
                }
              >
                {s.level === "shipped" ? "Shipped" : "Practiced"}
              </span>
            </div>
            <p className="mt-2 text-sm text-charcoal/70">{s.evidence}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
