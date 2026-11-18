import { stack } from "../../data/studio";
import { useI18n } from "../../i18n/context";
import { SectionHead } from "./SectionHead";

/** A spec-sheet list: technology, how it was used, and where. */
export function StackBadges() {
  const { t, ui } = useI18n();
  return (
    <section id="stack" aria-labelledby="stack-title" className="scroll-mt-20">
      <SectionHead id="stack-title" index="04" title={ui.techStack} />
      <p className="mb-6 max-w-[60ch] text-ink/80">{ui.stackNote}</p>
      <ul className="border-t border-ink">
        {stack.map((s) => (
          <li
            key={s.name}
            className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-ink py-3 @xl:grid-cols-[10rem_8rem_1fr]"
          >
            <span className="font-medium">{s.name}</span>
            <span className={"flex items-center gap-2 font-mono text-xs " + (s.level === "shipped" ? "text-accent" : "text-ink/70")}>
              <span
                aria-hidden="true"
                className={"h-2 w-2 " + (s.level === "shipped" ? "bg-accent" : "border border-ink/50")}
              />
              {s.level === "shipped" ? ui.shipped : ui.practiced}
            </span>
            <span className="col-span-2 text-sm text-ink/70 @xl:col-span-1">{t(s.evidence)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
