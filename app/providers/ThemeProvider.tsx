"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type Lang = "en" | "es";

interface ThemeCtx {
  isDark: boolean;
  toggleTheme: () => void;
  lang: Lang;
  toggleLang: () => void;
}

const ThemeContext = createContext<ThemeCtx>({
  isDark: false,
  toggleTheme: () => {},
  lang: "es",
  toggleLang: () => {},
});

// Theme and language live in localStorage, which React treats as an external
// store: useSyncExternalStore renders the server defaults during hydration,
// then switches to the stored values — no setState-in-effect needed.
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  // Also pick up changes made in other tabs.
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function notify() {
  listeners.forEach((listener) => listener());
}

const readDark = () => localStorage.getItem("theme-dark") === "true";
// Spanish is the default; only an explicit "en" choice switches to English.
const readLang = (): Lang => (localStorage.getItem("theme-lang") === "en" ? "en" : "es");

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isDark = useSyncExternalStore(subscribe, readDark, () => false);
  const lang = useSyncExternalStore(subscribe, readLang, (): Lang => "es");

  // Keep <html lang> in sync with the toggle so screen readers pronounce the
  // page in the language it's actually shown in (WCAG 3.1.1).
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = () => {
    localStorage.setItem("theme-dark", String(!readDark()));
    notify();
  };

  const toggleLang = () => {
    localStorage.setItem("theme-lang", readLang() === "es" ? "en" : "es");
    notify();
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, lang, toggleLang }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  return useContext(ThemeContext);
}
