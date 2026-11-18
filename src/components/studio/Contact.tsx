import { useState } from "react";
import { studio } from "../../data/studio";
import { Icon, type IconName } from "../../icons/Icon";
import { useI18n } from "../../i18n/context";
import type { UI } from "../../i18n/ui";
import { Select } from "../ui/Select";
import { SectionHead } from "./SectionHead";

type Kind = keyof UI["contactSection"]["kinds"];
const kinds: Kind[] = ["website", "app", "design", "unsure"];
const kindIcons: Record<Kind, IconName> = { website: "layout", app: "monitor", design: "pen", unsure: "help" };

const label = "text-sm font-medium";
const field = "mt-2 block w-full border border-ink bg-surface px-3";

/** Direct channels, then a small form that fills in an e-mail or WhatsApp message. Nothing is sent to a server. */
export function Contact() {
  const { ui } = useI18n();
  const c = ui.contactSection;
  const [name, setName] = useState("");
  const [kind, setKind] = useState<Kind>("website");
  const [message, setMessage] = useState("");

  const who = name.trim();
  const body = [c.hello, "", message.trim(), "", who ? c.regards(who) : ""].join("\n").trim();
  const subject = c.subject(c.kinds[kind]);
  const mail = `mailto:${studio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const whatsapp = `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`;

  const channels: { name: string; icon: IconName; value?: string; href: string; external: boolean }[] = [
    { name: c.email, icon: "mail", value: studio.email, href: `mailto:${studio.email}`, external: false },
    { name: c.whatsapp, icon: "whatsapp", href: `https://wa.me/${studio.whatsapp}`, external: true },
    { name: c.linkedin, icon: "linkedin", href: studio.linkedin, external: true },
    { name: c.github, icon: "github", href: studio.github, external: true },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20">
      <SectionHead id="contact-title" index="05" title={c.title} />

      <div className="grid gap-8 border-t border-ink pt-8 @4xl:grid-cols-[16rem_1fr]">
        <div>
          <p className="max-w-[32ch] text-lg text-ink/80">{c.intro}</p>
          <h3 className="mt-8 text-sm font-medium text-accent">{c.channels}</h3>
          <ul className="mt-2 border-t border-ink">
            {channels.map((ch) => (
              <li key={ch.name} className="border-b border-ink">
                <a
                  href={ch.href}
                  target={ch.external ? "_blank" : undefined}
                  rel={ch.external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 px-2 py-3 transition-colors hover:bg-ink hover:text-surface motion-reduce:transition-none"
                >
                  <Icon name={ch.icon} className="mt-1" />
                  <span className="min-w-0">
                    <span className="block font-medium">{ch.name}</span>
                    {ch.value && <span className="block break-all text-sm opacity-70">{ch.value}</span>}
                  </span>
                  {ch.external && <Icon name="arrow-up-right" size={12} className="ml-auto mt-2" />}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border border-ink bg-surface p-6">
          <h3 className="text-2xl font-semibold tracking-tight">{c.briefTitle}</h3>
          <p className="mt-2 max-w-[60ch] text-ink/80">{c.briefHint}</p>

          <div className="mt-6 grid gap-4 @xl:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className={label}>
                {c.name}
              </label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={field + " h-10"}
              />
            </div>
            <div>
              <label htmlFor="contact-kind" className={label}>
                {c.kind}
              </label>
              <Select
                id="contact-kind"
                value={kind}
                onChange={setKind}
                options={kinds.map((k) => ({ value: k, label: c.kinds[k], icon: kindIcons[k] }))}
              />
            </div>
            <div className="@xl:col-span-2">
              <label htmlFor="contact-message" className={label}>
                {c.message}
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={field + " resize-y py-2"}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={mail}
              className="inline-flex items-center gap-2 bg-accent h-10 px-4 font-medium text-on-accent transition-colors hover:bg-ink motion-reduce:transition-none"
            >
              <Icon name="mail" />
              {c.sendEmail}
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink h-10 px-4 transition-colors hover:bg-ink hover:text-surface motion-reduce:transition-none"
            >
              <Icon name="whatsapp" />
              {c.sendWhatsApp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
