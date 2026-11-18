import { Link } from "react-router-dom";
import { studio } from "../../data/studio";
import { useI18n } from "../../i18n/context";
import { Icon } from "../../icons/Icon";
import { LangSwitch, ThemeToggle } from "./Controls";
import { Logo } from "./Logo";
import type { NavItem } from "./useNav";

interface TopBarProps {
  open: boolean;
  onToggle: () => void;
  items: NavItem[];
}

/**
 * Large screens: logo (home link), the page links, then language, theme and the contact button.
 * Below 1024px the links move into the drawer, and the logo becomes the drawer handle.
 */
export function TopBar({ open, onToggle, items }: TopBarProps) {
  const { ui } = useI18n();
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-14 items-stretch border-b border-ink bg-surface text-ink">
      {/* Below 1024px: the wordmark is the drawer handle. */}
      <button
        id="drawer-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="studio-drawer"
        onClick={onToggle}
        className={
          "flex items-center gap-3 border-r border-ink px-4 font-semibold tracking-tight transition-colors focus-visible:outline-offset-[-4px] motion-reduce:transition-none lg:hidden " +
          (open ? "bg-charcoal text-paper" : "hover:bg-ink hover:text-surface")
        }
      >
        <Logo soft={open} className="h-5 w-auto shrink-0" />
        {/* Below 640px only the monogram shows, to make room for the language and theme controls. */}
        <span className="sr-only">{studio.name}</span>
        <span aria-hidden="true" className="hidden font-medium sm:inline">
          Digital Studio
        </span>
        <span className="sr-only">{ui.menuToggle(open)}</span>
        <Icon
          name="chevron-left"
          size={12}
          className={"transition-[rotate] duration-300 motion-reduce:transition-none " + (open ? "" : "rotate-180")}
        />
      </button>

      {/* 1024px and up: the logo goes home, and the links are always in view. */}
      <Link
        to="/"
        aria-label={studio.name}
        className="hidden items-center gap-3 border-r border-ink px-6 font-semibold tracking-tight transition-colors hover:bg-ink hover:text-surface focus-visible:outline-offset-[-4px] motion-reduce:transition-none lg:flex"
      >
        <Logo className="h-5 w-auto shrink-0" />
        <span aria-hidden="true" className="font-medium">
          Digital Studio
        </span>
      </Link>
      <nav aria-label={ui.primaryNav} className="hidden lg:block">
        <ul className="flex h-full items-stretch">
          {items.map((n) => (
            <li key={n.label}>
              <Link
                to={n.to}
                aria-current={n.current ? (n.page ? "page" : "location") : undefined}
                className={
                  "relative flex h-full items-center px-3 pb-1 text-sm font-medium transition-colors hover:text-accent focus-visible:outline-offset-[-4px] motion-reduce:transition-none " +
                  // The logo's 8px square, centred under the label and 8px clear of the header edge.
                  "after:absolute after:bottom-2 after:left-1/2 after:h-2 after:w-2 after:-translate-x-1/2 after:bg-accent after:transition-opacity motion-reduce:after:transition-none " +
                  (n.current ? "after:opacity-100" : "after:opacity-0")
                }
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Three controls, one height (40px). The contact button shows its text from 640 to 1023px, shrinks to its icon
          from 1024 to 1279px while the links need the room, and shows its text again from 1280px. */}
      <div className="ml-auto flex items-center gap-2 px-2 sm:px-4">
        <LangSwitch />
        <ThemeToggle />
        <a
          href={`mailto:${studio.email}`}
          className="inline-flex h-10 items-center gap-2 bg-accent px-3 text-sm font-medium text-on-accent transition-colors hover:bg-ink motion-reduce:transition-none sm:px-4 lg:px-3 xl:px-4"
        >
          <Icon name="mail" />
          <span className="sr-only sm:not-sr-only lg:sr-only xl:not-sr-only">{ui.startProject}</span>
        </a>
      </div>
    </header>
  );
}
