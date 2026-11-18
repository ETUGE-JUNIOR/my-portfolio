import { createContext, useContext } from "react";
import type { Lang, Loc } from "./types";
import type { UI } from "./ui";

export interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Interface strings in the current language. */
  ui: UI;
  /** Pick the current language from a content string or an { en, fr } pair. */
  t: (text: Loc) => string;
}

export const I18nContext = createContext<I18nValue | null>(null);

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside <I18nProvider>");
  return value;
}
