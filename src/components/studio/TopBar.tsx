import { studio } from "../../data/studio";

interface TopBarProps {
  open: boolean;
  onToggle: () => void;
}

function Mark() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 64 64" className="shrink-0">
      <rect width="64" height="64" fill="#4A3AFF" />
      <g fill="#F6F6F3">
        <rect x="18" y="14" width="8" height="36" />
        <rect x="18" y="14" width="28" height="8" />
        <rect x="18" y="28" width="22" height="8" />
        <rect x="18" y="42" width="28" height="8" />
      </g>
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={"shrink-0 transition-[rotate] duration-300 motion-reduce:transition-none " + (open ? "" : "rotate-180")}
    >
      <path d="M7.5 2L3.5 6l4 4" />
    </svg>
  );
}

/** The wordmark is the drawer handle: one control, always in the same place. */
export function TopBar({ open, onToggle }: TopBarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-14 items-stretch border-b border-charcoal bg-paper text-charcoal">
      <button
        id="drawer-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="studio-drawer"
        onClick={onToggle}
        className={
          "flex items-center gap-3 border-r border-charcoal px-4 font-semibold focus-visible:outline-offset-[-4px] tracking-tight transition-colors motion-reduce:transition-none " +
          (open ? "bg-charcoal text-paper" : "hover:bg-charcoal hover:text-paper")
        }
      >
        <Mark />
        <span>{studio.name}</span>
        <span className="sr-only">{open ? ", close menu" : ", open menu"}</span>
        <Chevron open={open} />
      </button>

      <div className="ml-auto flex items-center px-3">
        <a
          href={`mailto:${studio.email}`}
          className="bg-electric px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-charcoal motion-reduce:transition-none"
        >
          <span className="hidden sm:inline">Start a project</span>
          <span className="sm:hidden">Contact</span>
        </a>
      </div>
    </header>
  );
}