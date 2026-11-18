import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./context";

const STORE = "emj-theme";
const QUERY = "(prefers-color-scheme: dark)";
/** Browser toolbar colours: the header's surface colour in each theme (see studio.css). */
const BAR: Record<Theme, string> = { light: "#f6f6f3", dark: "#17181c" };

function saved(): Theme | null {
  try {
    const v = localStorage.getItem(STORE);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

const systemTheme = (): Theme => (window.matchMedia(QUERY).matches ? "dark" : "light");

/** Follows the device setting until the visitor picks a theme; after that their choice wins and is remembered. */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<Theme | null>(saved);
  const [system, setSystem] = useState<Theme>(systemTheme);
  const theme = choice ?? system;

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = () => setSystem(mq.matches ? "dark" : "light");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", BAR[theme]);
  }, [theme]);

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setChoice(next);
    try {
      localStorage.setItem(STORE, next);
    } catch {
      /* storage unavailable: the choice lasts until the page is closed */
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, toggle }), [theme, toggle]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
