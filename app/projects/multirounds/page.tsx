"use client";

import { useState } from "react";
import Link from "next/link";
import en from "../../locales/en.json";
import es from "../../locales/es.json";
import { themes } from "../../theme";
import Controls from "../../components/Controls";

const locales = { en, es };

const stack = ["React 19", "TypeScript", "Tailwind CSS v4", "Vite", "Jest"];

export default function MultiroundsPage() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<"en" | "es">("en");
  const theme = isDark ? themes.dark : themes.light;
  const t = locales[lang].multirounds_page;

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
            href="/projects"
            className={`mb-8 inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-80 ${theme.muted}`}
          >
            {t.back}
          </Link>

          <div>
            <div
              className={`mb-6 inline-flex w-fit items-center rounded-full px-4 py-1 text-sm shadow-lg ${theme.badge}`}
            >
              {t.badge}
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {t.title}
              <span className={`mt-2 block ${theme.heroSpan}`}>
                {t.hero_span}
              </span>
            </h1>
          </div>

          <p
            className={`mt-6 max-w-2xl text-base font-medium leading-7 md:text-lg ${theme.bodyText}`}
          >
            {t.hero_description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className={`rounded-full px-3 py-1 text-xs font-medium ${theme.skillChip}`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-32 md:px-10 lg:px-16">
        {/* Problem + Idea */}
        <section className="grid gap-6 py-20 md:grid-cols-2">
          <div className={`rounded-3xl p-8 ${theme.expCard}`}>
            <p
              className={`mb-3 text-xs font-semibold uppercase tracking-widest ${theme.subtle}`}
            >
              {t.problem.label}
            </p>
            <h2 className="mb-4 text-2xl font-semibold">{t.problem.heading}</h2>
            <ul className={`space-y-3 text-sm leading-6 ${theme.muted}`}>
              {t.problem.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className={`mt-0.5 text-base ${theme.accent}`}>×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-3xl p-8 ${theme.expCard}`}>
            <p
              className={`mb-3 text-xs font-semibold uppercase tracking-widest ${theme.subtle}`}
            >
              {t.idea.label}
            </p>
            <h2 className="mb-4 text-2xl font-semibold">{t.idea.heading}</h2>
            <p className={`mb-6 text-sm leading-6 ${theme.muted}`}>
              {t.idea.description}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {t.phases.map((phase, i) => (
                <div key={phase.name} className="flex items-center gap-2">
                  <div
                    className={`rounded-xl px-3 py-2 text-center ${theme.cardInner}`}
                  >
                    <p className={`text-xs font-semibold ${theme.accent}`}>
                      {phase.name}
                    </p>
                    <p className={`mt-0.5 text-xs ${theme.subtle}`}>
                      {phase.desc}
                    </p>
                  </div>
                  {i < t.phases.length - 1 && (
                    <span className={`text-sm ${theme.subtle}`}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="pb-20">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-widest ${theme.subtle}`}
          >
            {t.features.label}
          </p>
          <h2 className="mb-10 text-3xl font-semibold">{t.features.heading}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((f) => (
              <div
                key={f.title}
                className={`rounded-3xl p-6 ${theme.workCard}`}
              >
                <div
                  className={`mb-3 flex h-8 w-8 items-center justify-center rounded-xl ${theme.workIcon}`}
                >
                  <span className={`text-sm font-bold ${theme.accent}`}>✓</span>
                </div>
                <h3 className="mb-2 font-semibold">{f.title}</h3>
                <p className={`text-sm leading-6 ${theme.muted}`}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical approach */}
        <section className={`mb-6 rounded-3xl p-8 md:p-12 ${theme.expCard}`}>
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-widest ${theme.subtle}`}
          >
            {t.tech.label}
          </p>
          <h2 className="mb-6 text-3xl font-semibold">{t.tech.heading}</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className={`mb-3 font-semibold ${theme.accent}`}>
                {t.tech.hook.title}
              </h3>
              <p className={`mb-4 text-sm leading-6 ${theme.muted}`}>
                {t.tech.hook.desc}
              </p>
              <div
                className={`rounded-2xl p-5 font-mono text-sm ${theme.cardInner}`}
              >
                <p className={theme.subtle}>{t.tech.hook.persisted_comment}</p>
                <p className={`mt-1 ${theme.bodyText}`}>title</p>
                <p className={theme.bodyText}>phaseDurations</p>
                <p className={theme.bodyText}>activePhase</p>
                <p className={`mt-3 ${theme.subtle}`}>
                  {t.tech.hook.runtime_comment}
                </p>
                <p className={`mt-1 ${theme.bodyText}`}>remainingTime</p>
                <p className={theme.bodyText}>isRunning / isPaused</p>
              </div>
            </div>

            <div>
              <h3 className={`mb-3 font-semibold ${theme.accent}`}>
                {t.tech.persistence.title}
              </h3>
              <p className={`mb-4 text-sm leading-6 ${theme.muted}`}>
                {t.tech.persistence.desc}
              </p>
              <div
                className={`rounded-2xl p-5 font-mono text-sm ${theme.cardInner}`}
              >
                <p className={theme.bodyText}>
                  <span className={theme.subtle}>
                    {t.tech.persistence.key_label}
                  </span>{" "}
                  multi-rounds:tcg:counter:
                  <span className={theme.accent}>&lt;id&gt;</span>
                </p>
                <p className={`mt-4 ${theme.subtle}`}>
                  {t.tech.persistence.defaults_comment}
                </p>
                <p className={`mt-1 ${theme.bodyText}`}>Setup — 5 min</p>
                <p className={theme.bodyText}>Main — 50 min</p>
                <p className={theme.bodyText}>Extra — 5 min</p>
              </div>

              <h3 className={`mb-3 mt-6 font-semibold ${theme.accent}`}>
                {t.tech.phase_seq.title}
              </h3>
              <div
                className={`rounded-2xl px-5 py-4 font-mono text-sm ${theme.cardInner}`}
              >
                <p className={theme.bodyText}>
                  Start → Setup → Main → Extra → Idle
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Design decisions */}
        <section className="py-20">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-widest ${theme.subtle}`}
          >
            {t.decisions.label}
          </p>
          <h2 className="mb-10 text-3xl font-semibold">
            {t.decisions.heading}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.decisions.items.map((d) => (
              <div key={d.title} className={`rounded-2xl p-6 ${theme.cardRow}`}>
                <h3 className={`mb-2 font-semibold ${theme.accent}`}>
                  {d.title}
                </h3>
                <p className={`text-sm leading-6 ${theme.muted}`}>{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges + Outcome */}
        <section className="grid gap-6 pb-20 md:grid-cols-2">
          <div className={`rounded-3xl p-8 ${theme.expCard}`}>
            <p
              className={`mb-3 text-xs font-semibold uppercase tracking-widest ${theme.subtle}`}
            >
              {t.challenges.label}
            </p>
            <ul className={`space-y-3 text-sm leading-6 ${theme.muted}`}>
              {t.challenges.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className={`mt-0.5 ${theme.accent}`}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`rounded-3xl p-8 ${theme.expCard}`}>
            <p
              className={`mb-3 text-xs font-semibold uppercase tracking-widest ${theme.subtle}`}
            >
              {t.outcome.label}
            </p>
            <ul className={`space-y-3 text-sm leading-6 ${theme.muted}`}>
              {t.outcome.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className={`mt-0.5 ${theme.accent}`}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Future improvements */}
        <section className="pb-20">
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-widest ${theme.subtle}`}
          >
            {t.future.label}
          </p>
          <h2 className="mb-8 text-3xl font-semibold">{t.future.heading}</h2>
          <div className="flex flex-wrap gap-3">
            {t.future.items.map((item) => (
              <span
                key={item}
                className={`rounded-full px-4 py-2 text-sm font-medium ${theme.skillChip}`}
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Reflection + CTA */}
        <section className={`rounded-3xl p-8 md:p-12 ${theme.contactCard}`}>
          <p
            className={`mb-3 text-xs font-semibold uppercase tracking-widest ${theme.subtle}`}
          >
            {t.reflection.label}
          </p>
          <p className={`mb-8 max-w-2xl text-base leading-7 ${theme.bodyText}`}>
            {t.reflection.body}
          </p>
          <a
            href="https://multirounds.com/"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#69E8FF] px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            {t.reflection.cta}
          </a>
        </section>
      </div>
    </main>
  );
}
