import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { Icon, type IconName } from "../../icons/Icon";

export interface SelectOption<V extends string> {
  value: V;
  label: string;
  /** Shown on the closed button instead of the label (compact variant), e.g. "EN". */
  short?: string;
  /** Small mono note at the right of the option in the menu. */
  hint?: string;
  icon?: IconName;
  /** Language of the label, so screen readers pronounce it correctly. */
  lang?: string;
}

interface SelectProps<V extends string> {
  value: V;
  onChange: (value: V) => void;
  options: SelectOption<V>[];
  /** Becomes the button id, so a <label htmlFor> can point at it. */
  id?: string;
  /** Needed when there is no visible <label>. */
  ariaLabel?: string;
  /** Leading icon on the button when the selected option has none. */
  icon?: IconName;
  /** "compact": 40px tall header control. "field": full-width form field. */
  variant?: "compact" | "field";
  align?: "start" | "end";
  /** Hide the chevron below 640px to save room in a tight header. */
  slimOnMobile?: boolean;
}

const OPTION_HEIGHT = 40; // matches the 40px control height
const optionId = (base: string, i: number) => `${base}-opt-${i}`;

/**
 * A custom select following the WAI-ARIA "select-only combobox" pattern.
 * Mouse and touch: click to open, click an option. Keyboard: Enter, Space or arrows open it; arrows,
 * Home and End move; Enter or Space picks; Escape closes; Tab leaves; typing jumps to a matching option.
 */
export function Select<V extends string>({
  value,
  onChange,
  options,
  id,
  ariaLabel,
  icon,
  variant = "field",
  align = "start",
  slimOnMobile = false,
}: SelectProps<V>) {
  const auto = useId();
  const baseId = id ?? auto;
  const listId = `${baseId}-list`;
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const typed = useRef({ text: "", timer: 0 });
  const keyHandled = useRef(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [up, setUp] = useState(false);

  const selected = Math.max(
    0,
    options.findIndex((o) => o.value === value),
  );
  const current = options[selected];
  const compact = variant === "compact";

  const openMenu = (index = selected) => {
    const rect = button.current?.getBoundingClientRect();
    const below = rect ? window.innerHeight - rect.bottom : Infinity;
    // Flip upward only when the menu would not fit below and there is more room above.
    setUp(rect ? below < options.length * OPTION_HEIGHT + 16 && rect.top > below : false);
    setActive(index);
    setOpen(true);
  };
  const close = (refocus: boolean) => {
    setOpen(false);
    if (refocus) button.current?.focus();
  };
  const choose = (i: number) => {
    const o = options[i];
    if (o) onChange(o.value);
    close(true);
  };

  // Close when the pointer goes down anywhere outside the control.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  // Keep the highlighted option visible in a long list.
  useEffect(() => {
    if (open) document.getElementById(optionId(baseId, active))?.scrollIntoView({ block: "nearest" });
  }, [open, active, baseId]);

  const typeahead = (char: string) => {
    const buf = typed.current;
    window.clearTimeout(buf.timer);
    buf.text += char.toLowerCase();
    buf.timer = window.setTimeout(() => {
      buf.text = "";
    }, 600);
    const from = open ? active : selected;
    const start = buf.text.length > 1 ? from : from + 1;
    for (let n = 0; n < options.length; n++) {
      const i = (start + n) % options.length;
      if (options[i]?.label.toLowerCase().startsWith(buf.text)) {
        if (open) setActive(i);
        else openMenu(i);
        return;
      }
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = options.length - 1;
    const printable = e.key.length === 1 && e.key !== " " && !e.ctrlKey && !e.metaKey && !e.altKey;
    if (e.key === "Enter" || e.key === " ") keyHandled.current = true;

    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openMenu();
      } else if (printable) typeahead(e.key);
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActive((i) => Math.min(last, i + 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActive((i) => Math.max(0, i - 1));
        break;
      case "Home":
        e.preventDefault();
        setActive(0);
        break;
      case "End":
        e.preventDefault();
        setActive(last);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        choose(active);
        break;
      case "Escape":
        e.preventDefault();
        close(true);
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        if (printable) typeahead(e.key);
    }
  };

  // Space activates a button on key-up. Cancel that click: the key-down already handled it.
  const onKeyUp = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === " ") e.preventDefault();
    window.setTimeout(() => {
      keyHandled.current = false;
    }, 0);
  };

  const onClick = () => {
    if (keyHandled.current) return;
    if (open) close(false);
    else openMenu();
  };

  const shownIcon = current?.icon ?? icon;
  const base = compact
    ? "inline-flex h-10 items-center gap-2 border border-ink px-3 text-sm"
    : "flex h-10 w-full items-center gap-3 border border-ink bg-surface px-3 text-left";
  const state = compact
    ? open
      ? "bg-ink text-surface"
      : "hover:bg-ink hover:text-surface"
    : open
      ? "border-accent"
      : "";

  return (
    <div ref={root} className={"relative " + (compact ? "" : "mt-2")}>
      <button
        ref={button}
        id={baseId}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? optionId(baseId, active) : undefined}
        aria-label={ariaLabel}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        className={`${base} ${state} transition-colors motion-reduce:transition-none`}
      >
        {shownIcon && <Icon name={shownIcon} />}
        <span lang={current?.lang} className={compact ? "font-mono" : ""}>
          {compact && current?.short ? current.short : current?.label}
        </span>
        <Icon
          name="chevron-down"
          size={12}
          className={
            "transition-transform motion-reduce:transition-none " +
            (compact ? "" : "ml-auto ") +
            (open ? "rotate-180 " : "") +
            (slimOnMobile ? "hidden sm:block" : "")
          }
        />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={ariaLabel}
          className={
            "absolute z-40 max-h-64 overflow-auto border border-ink bg-surface py-1 " +
            (compact ? "min-w-40 text-sm " : "min-w-full ") +
            (align === "end" ? "right-0 " : "left-0 ") +
            (up ? "bottom-full mb-1" : "top-full mt-1")
          }
        >
          {options.map((o, i) => (
            <li
              key={o.value}
              id={optionId(baseId, i)}
              role="option"
              aria-selected={i === selected}
              lang={o.lang}
              // Keep keyboard focus on the button while the pointer works the menu.
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => choose(i)}
              onMouseMove={() => setActive(i)}
              className={
                "flex cursor-pointer items-center gap-3 px-3 py-2 " + (i === active ? "bg-ink text-surface" : "")
              }
            >
              {o.icon && <Icon name={o.icon} />}
              <span>{o.label}</span>
              {o.hint && <span className="ml-auto font-mono text-xs opacity-70">{o.hint}</span>}
              <Icon name="check" className={(o.hint ? "" : "ml-auto ") + (i === selected ? "" : "invisible")} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
