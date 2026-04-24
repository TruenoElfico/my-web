"use client";

import { createContext, useContext, useState, useEffect } from "react";

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

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const storedDark = localStorage.getItem("theme-dark");
    const storedLang = localStorage.getItem("theme-lang");
    if (storedDark !== null) setIsDark(storedDark === "true");
    if (storedLang === "en" || storedLang === "es") setLang(storedLang);
  }, []);

  const toggleTheme = () =>
    setIsDark((prev) => {
      localStorage.setItem("theme-dark", String(!prev));
      return !prev;
    });

  const toggleLang = () =>
    setLang((prev) => {
      const next = prev === "en" ? "es" : "en";
      localStorage.setItem("theme-lang", next);
      return next;
    });

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, lang, toggleLang }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  return useContext(ThemeContext);
}
