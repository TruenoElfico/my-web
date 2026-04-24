"use client";

import Image from "next/image";
import Link from "next/link";
import en from "../locales/en.json";
import es from "../locales/es.json";
import { themes } from "../theme";
import Controls from "../components/Controls";
import { useAppTheme } from "../providers/ThemeProvider";

const locales = { en, es };

const staticProjects = [
  { slug: "multirounds" as const, image: "/multirounds.png", tags: ["React 19", "TypeScript", "Tailwind CSS v4"] },
];

export default function ProjectsPage() {
  const { isDark, toggleTheme, lang, toggleLang } = useAppTheme();
  const theme = isDark ? themes.dark : themes.light;
  const t = locales[lang].projects_page;

  return (
    <main className={`min-h-screen transition-colors duration-300 ${theme.main}`}>
      <Controls
        isDark={isDark}
        onToggleTheme={toggleTheme}
        lang={lang}
        onToggleLang={toggleLang}
        theme={theme}
      />

      {/* Hero */}
      <section className={`relative overflow-hidden ${theme.heroBorder}`}>
        <div className={`absolute inset-0 ${theme.heroGradient}`} />
        <div className={`absolute inset-0 opacity-20 ${theme.heroGrid} [background-size:34px_34px]`} />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
          <Link
            href="/"
            className={`mb-8 inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-80 ${theme.muted}`}
          >
            {t.back}
          </Link>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {t.title}
            <span className={`mt-2 block ${theme.heroSpan}`}>{t.tagline}</span>
          </h1>

          <p className={`mt-6 max-w-2xl text-base font-medium leading-7 md:text-lg ${theme.bodyText}`}>
            {t.description}
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staticProjects.map((project) => {
            const copy = t.items[project.slug];
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`group flex flex-col overflow-hidden rounded-3xl transition-all duration-200 ${theme.workCard}`}
              >
                {/* Thumbnail */}
                <div className={`relative h-48 w-full overflow-hidden ${theme.cardInner}`}>
                  <Image
                    src={project.image}
                    alt={copy.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium backdrop-blur ${theme.badge}`}>
                    {copy.status}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold">{copy.name}</h2>
                  <p className={`mt-1 text-sm font-medium ${theme.accent}`}>{copy.tagline}</p>
                  <p className={`mt-3 flex-1 text-sm leading-6 ${theme.muted}`}>{copy.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`rounded-full px-3 py-1 text-xs font-medium ${theme.skillChip}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={`mt-5 flex items-center gap-1 text-sm font-medium transition group-hover:gap-2 ${theme.accent}`}>
                    {t.cta} <span>→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
