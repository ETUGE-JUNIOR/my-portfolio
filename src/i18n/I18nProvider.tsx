import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { studio } from "../data/studio";
import { I18nContext } from "./context";
import type { Lang, Loc } from "./types";
import { ui } from "./ui";

const STORE = "emj-lang";

/** English is the default. A visitor's choice is remembered. */
function saved(): Lang {
  try {
    return localStorage.getItem(STORE) === "fr" ? "fr" : "en";
  } catch {
    return "en";
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(saved);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORE, next);
    } catch {
      /* storage unavailable: the choice lasts until the page is closed */
    }
  }, []);

  // Keep the document in step: screen readers, search engines and link previews read these.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.querySelector('meta[name="description"]')?.setAttribute("content", studio.value[lang]);
    // Only the home title is swapped; a profile page sets its own title.
    if (document.title === studio.title.en || document.title === studio.title.fr) document.title = studio.title[lang];
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      ui: ui[lang],
      t: (text: Loc) => (typeof text === "string" ? text : text[lang]),
    }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
