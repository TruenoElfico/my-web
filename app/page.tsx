"use client";

import { useState } from "react";
import en from "./locales/en.json";
import es from "./locales/es.json";
import { themes } from "./theme";
import Controls from "./components/Controls";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const locales = { en, es };

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Design Systems",
  "Accessibility",
  "Performance",
  "UX Engineering",
  "Frontend Architecture",
];

export default function PersonalPortfolioPage() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [isDark, setIsDark] = useState(true);
  const t = locales[lang];
  const theme = isDark ? themes.dark : themes.light;

  return (
    <main className={`min-h-screen transition-colors duration-300 ${theme.main}`}>
      <Controls
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        lang={lang}
        onToggleLang={() => setLang(lang === "en" ? "es" : "en")}
        theme={theme}
      />
      <Hero badge={t.badge} hero={t.hero} card={t.card} theme={theme} />
      <About about={t.about} skills={skills} theme={theme} />
      <Work work={t.work} theme={theme} />
      <Experience experience={t.experience} theme={theme} />
      <Contact contact={t.contact} theme={theme} />
    </main>
  );
}
