import type { TouchEvent } from "react";
import { Link } from "react-router-dom";
import { studio } from "../../data/studio";
import { Icon } from "../../icons/Icon";
import { useI18n } from "../../i18n/context";
import type { NavItem } from "./useNav";

interface StudioPanelProps {
  open: boolean;
  items: NavItem[];
  onNavigate: () => void;
  onTouchStart: (e: TouchEvent<HTMLElement>) => void;
  onTouchEnd: (e: TouchEvent<HTMLElement>) => void;
}

/** The slide-out drawer for medium and small screens (below 1024px). Large screens use the header links. */
export function StudioPanel({ open, items, onNavigate, onTouchStart, onTouchEnd }: StudioPanelProps) {
  const { t, ui } = useI18n();
  return (
    <aside
      id="studio-drawer"
      aria-label={ui.studioMenu}
      tabIndex={-1}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={
        "fixed bottom-0 left-0 top-14 z-20 flex w-[min(20rem,85vw)] flex-col overflow-y-auto overscroll-contain border-r border-paper/10 bg-charcoal px-6 py-6 text-paper [scrollbar-width:thin] outline-none transition-[translate,visibility] duration-300 ease-out motion-reduce:transition-none lg:hidden " +
        (open ? "visible translate-x-0" : "invisible -translate-x-full")
      }
    >
      <p className="max-w-[30ch] text-base text-paper/80">{t(studio.line)}</p>

      <nav aria-label={ui.primaryNav} className="mt-8">
        <ul>
          {items.map((n, i) => (
            <li key={n.label} className="border-t border-paper/20 last:border-b">
              <Link
                to={n.to}
                onClick={onNavigate}
                aria-current={n.current ? (n.page ? "page" : "location") : undefined}
                className={
                  "relative flex items-baseline gap-4 py-2 text-2xl font-medium transition-colors hover:text-electric-soft motion-reduce:transition-none " +
                  (n.current ? "text-electric-soft" : "")
                }
              >
                <span className="text-sm tabular-nums text-electric-soft">{String(i + 1).padStart(2, "0")}</span>
                {n.label}
                {n.current && (
                  <span aria-hidden="true" className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 bg-electric-soft" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-6">
        <p className="text-sm text-paper/70">{ui.startProject}</p>
        <a href={`mailto:${studio.email}`} className="flex items-start gap-2">
          <Icon name="mail" className="mt-1" />
          <span className="break-all underline underline-offset-4">{studio.email}</span>
        </a>
      </div>
    </aside>
  );
}