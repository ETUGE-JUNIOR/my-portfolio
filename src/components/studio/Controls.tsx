import { Icon } from "../../icons/Icon";
import { useI18n } from "../../i18n/context";
import type { Lang } from "../../i18n/types";
import { useTheme } from "../../theme/context";
import { Select, type SelectOption } from "../ui/Select";

const languages: SelectOption<Lang>[] = [
  { value: "en", label: "English", short: "EN", hint: "EN", lang: "en" },
  { value: "fr", label: "Français", short: "FR", hint: "FR", lang: "fr" },
];

/** Globe icon and the current language code; opens a small menu. Every option is named in its own language. */
export function LangSwitch() {
  const { lang, setLang, ui } = useI18n();
  return (
    <Select
      variant="compact"
      align="end"
      slimOnMobile
      icon="globe"
      ariaLabel={ui.language}
      value={lang}
      onChange={setLang}
      options={languages}
    />
  );
}

/** The icon shows the theme you will get, and the label says so. Same 40px box as the other header controls. */
export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { ui } = useI18n();
  const dark = theme === "dark";
  const label = dark ? ui.switchToLight : ui.switchToDark;
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid h-10 w-10 place-items-center border border-ink transition-colors hover:bg-ink hover:text-surface motion-reduce:transition-none"
    >
      <Icon name={dark ? "sun" : "moon"} />
    </button>
  );
}
