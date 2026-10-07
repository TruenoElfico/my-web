"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

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
  lang: "en",
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
const readLang = (): Lang => (localStorage.getItem("theme-lang") === "es" ? "es" : "en");

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isDark = useSyncExternalStore(subscribe, readDark, () => false);
  const lang = useSyncExternalStore(subscribe, readLang, (): Lang => "en");

  const toggleTheme = () => {
    localStorage.setItem("theme-dark", String(!readDark()));
    notify();
  };

  const toggleLang = () => {
    localStorage.setItem("theme-lang", readLang() === "en" ? "es" : "en");
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
