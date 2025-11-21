import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(() => {
        // Initialize from localStorage or system preference
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            return savedTheme === "dark";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        // Apply theme when isDark changes
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            {/* Sun icon for light mode */}
            <Sun
                className={`absolute w-6 h-6 transition-all duration-500 transform ${isDark
                    ? "opacity-0 scale-0 -rotate-180"
                    : "opacity-100 scale-100 rotate-0"
                    }`}
                strokeWidth={2}
            />

            {/* Moon icon for dark mode */}
            <Moon
                className={`absolute w-6 h-6 transition-all duration-500 transform ${isDark
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-0 rotate-180"
                    }`}
                strokeWidth={2}
            />
        </button>
    );
}
