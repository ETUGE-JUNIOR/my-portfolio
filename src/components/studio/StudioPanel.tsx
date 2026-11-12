import type { TouchEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { studio } from "../../data/studio";
import { members } from "../../data/team";

interface StudioPanelProps {
  open: boolean;
  onNavigate: () => void;
  onTouchStart: (e: TouchEvent<HTMLElement>) => void;
  onTouchEnd: (e: TouchEvent<HTMLElement>) => void;
}

export function StudioPanel({ open, onNavigate, onTouchStart, onTouchEnd }: StudioPanelProps) {
  const { pathname, hash } = useLocation();
  const profile = `/team/${members[0].slug}`;

  const items = [
    { label: "Home", to: "/", current: pathname === "/" && !hash },
    { label: "Projects", to: "/#projects", current: false },
    { label: "Services", to: "/#services", current: false },
    { label: "Team", to: "/#team", current: false },
    { label: "Profile", to: profile, current: pathname.startsWith("/team/") },
  ];

  return (
    <aside
      id="studio-drawer"
      aria-label="Studio menu"
      tabIndex={-1}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={
        "fixed bottom-0 left-0 top-14 z-20 flex w-[min(20rem,85vw)] flex-col overflow-y-auto overscroll-contain bg-charcoal px-6 py-6 text-paper [scrollbar-width:thin] outline-none transition-[translate,visibility] duration-300 ease-out motion-reduce:transition-none lg:w-80 " +
        (open ? "visible translate-x-0" : "invisible -translate-x-full")
      }
    >
      <p className="max-w-[30ch] text-base text-paper/80">{studio.line}</p>

      <nav aria-label="Primary" className="mt-8">
        <ul>
          {items.map((n, i) => (
            <li key={n.label} className="border-t border-paper/20 last:border-b">
              <Link
                to={n.to}
                onClick={onNavigate}
                aria-current={n.current ? "page" : undefined}
                className={
                  "flex items-baseline gap-4 py-2 text-2xl font-medium transition-colors hover:text-electric-soft motion-reduce:transition-none " +
                  (n.current ? "text-electric-soft" : "")
                }
              >
                <span className="text-sm tabular-nums text-electric-soft">{String(i + 1).padStart(2, "0")}</span>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-6">
        <p className="text-sm text-paper/70">Start a project</p>
        <a href={`mailto:${studio.email}`} className="break-all underline underline-offset-4">
          {studio.email}
        </a>
      </div>
    </aside>
  );
}