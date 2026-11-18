import { studio } from "../../data/studio";
import { useI18n } from "../../i18n/context";
import { SectionHead } from "./SectionHead";

/** An always-dark band (brand constants, not theme tokens) that breaks the rhythm of the page. */
export function Services() {
  const { t, ui } = useI18n();
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="scroll-mt-20 border border-paper/10 bg-charcoal p-6 text-paper @xl:p-8"
    >
      <SectionHead id="services-title" index="02" title={ui.services} inverse />
      <ol className="border-t border-paper/20">
        {studio.services.map((s, i) => (
          <li
            key={t(s.name)}
            className="group grid gap-2 border-b border-paper/20 py-6 @3xl:grid-cols-[4rem_1fr_1fr] @3xl:items-baseline @3xl:gap-6"
          >
            <span className="font-mono text-sm tabular-nums text-electric-soft">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-3xl font-semibold tracking-tight transition-colors group-hover:text-electric-soft motion-reduce:transition-none @3xl:text-4xl">
              {t(s.name)}
            </h3>
            <p className="max-w-[40ch] text-paper/80">{t(s.text)}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
