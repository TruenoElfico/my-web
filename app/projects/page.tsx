"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { themes } from "../theme";
import Controls from "../components/Controls";

const projects = [
  {
    slug: "multirounds",
    name: "Focus Rounds",
    tagline: "Phase-based timer for TCG tournaments",
    description:
      "Built out of a real need at the table. Focus Rounds lets you run up to four independent timers simultaneously — each with its own Setup, Main, and Extra time phases — so you can manage multiple matches without losing track.",
    tags: ["React 19", "TypeScript", "Tailwind CSS v4"],
    status: "Live",
    image: "/multirounds.png",
  },
];

export default function ProjectsPage() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<"en" | "es">("en");
  const theme = isDark ? themes.dark : themes.light;

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${theme.main}`}
    >
      <Controls
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        lang={lang}
        onToggleLang={() => setLang(lang === "en" ? "es" : "en")}
        theme={theme}
      />

      {/* Hero */}
      <section className={`relative overflow-hidden ${theme.heroBorder}`}>
        <div className={`absolute inset-0 ${theme.heroGradient}`} />
        <div
          className={`absolute inset-0 opacity-20 ${theme.heroGrid} [background-size:34px_34px]`}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16 lg:py-28">
          <Link
            href="/"
            className={`mb-8 inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-80 ${theme.muted}`}
          >
            ← Back
          </Link>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Projects
            <span className={`mt-2 block ${theme.heroSpan}`}>
              Things I&apos;ve built
            </span>
          </h1>

          <p
            className={`mt-6 max-w-2xl text-base font-medium leading-7 md:text-lg ${theme.bodyText}`}
          >
            A curated selection of products and experiments I&apos;ve designed
            and engineered.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group flex flex-col overflow-hidden rounded-3xl transition-all duration-200 ${theme.workCard}`}
            >
              {/* Thumbnail */}
              <div className={`relative h-48 w-full overflow-hidden ${theme.cardInner}`}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium backdrop-blur ${theme.badge}`}>
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-lg font-semibold">{project.name}</h2>
                <p className={`mt-1 text-sm font-medium ${theme.accent}`}>
                  {project.tagline}
                </p>
                <p className={`mt-3 flex-1 text-sm leading-6 ${theme.muted}`}>
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${theme.skillChip}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className={`mt-5 flex items-center gap-1 text-sm font-medium transition group-hover:gap-2 ${theme.accent}`}
                >
                  View case study <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
