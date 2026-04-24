"use client";

import { useState } from "react";
import Link from "next/link";
import { themes } from "../../theme";
import Controls from "../../components/Controls";

const stack = ["React 19", "TypeScript", "Tailwind CSS v4", "Vite", "Jest"];

const phases = [
  {
    name: "Setup",
    desc: "Preparation before the round",
    color: "bg-[#69E8FF]/20 text-[#69E8FF]",
  },
  {
    name: "Main",
    desc: "Primary round duration",
    color: "bg-[#69E8FF]/20 text-[#69E8FF]",
  },
  {
    name: "Extra",
    desc: "Overtime phase",
    color: "bg-[#69E8FF]/20 text-[#69E8FF]",
  },
  { name: "Idle", desc: "Timer at rest", color: "bg-white/10 text-white/50" },
];

const features = [
  {
    title: "Multi-Timer System",
    desc: "Up to 4 fully independent timers running simultaneously. Dynamic layout splits the screen automatically as timers are added.",
  },
  {
    title: "Phase-Based Flow",
    desc: "Each timer follows Setup → Main → Extra → Idle. Phases transition automatically on completion, mirroring real tournament flow.",
  },
  {
    title: "Inline Editing",
    desc: "Click to edit the timer name or adjust hours, minutes, and seconds directly — no modal interruptions during live use.",
  },
  {
    title: "Persistent State",
    desc: "Configuration survives page reloads via localStorage. Each counter stores its own durations and title under a unique key.",
  },
  {
    title: "Responsive Layout",
    desc: "UI adapts as more timers are added. Font sizes scale with container width to keep readability with 4 timers on screen.",
  },
  {
    title: "Single-Screen Model",
    desc: "No navigation required. All controls are immediately accessible — designed for fast interaction under pressure.",
  },
];

const decisions = [
  {
    title: "Phase-Based Model",
    desc: "Chosen to reflect real-world tournament flow rather than a generic countdown.",
  },
  {
    title: "Independent Timer Instances",
    desc: "Each timer is isolated to avoid shared state complexity and ensure reliability.",
  },
  {
    title: "Inline Editing",
    desc: "Removes friction and allows quick adjustments during live matches.",
  },
  {
    title: "Local Persistence",
    desc: "Avoids login requirements while preserving user configurations between sessions.",
  },
];

const future = [
  "Fullscreen mode for tournament displays",
  "Sound and visual alerts",
  "Presets and saved configurations",
  "Analytics integration",
  "Monetization — donations / premium features",
];

export default function MultiroundsPage() {
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
            href="/projects"
            className={`mb-8 inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-80 ${theme.muted}`}
          >
            ← Projects
          </Link>

          <div>
            <div
              className={`mb-6 inline-flex w-fit items-center rounded-full px-4 py-1 text-sm shadow-lg ${theme.badge}`}
            >
              TCG · Multi-Timer · Web App
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Multi Rounds
              <span className={`mt-2 block ${theme.heroSpan}`}>
                Phase-based timer for TCG tournaments
              </span>
            </h1>
          </div>

          <p
            className={`mt-6 max-w-2xl text-base font-medium leading-7 md:text-lg ${theme.bodyText}`}
          >
            A multi-timer web application built for Trading Card Game
            tournaments and structured time workflows. Run up to four
            independent timers simultaneously, each with its own phase sequence,
            configuration, and persistent state.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className={`rounded-full px-3 py-1 text-xs font-medium ${theme.skillChip}`}
              >
                {t}
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
              The Problem
            </p>
            <h2 className="mb-4 text-2xl font-semibold">
              Generic timers fail in real tournaments
            </h2>
            <ul className={`space-y-3 text-sm leading-6 ${theme.muted}`}>
              {[
                "No concept of phases — setup, round, extra time",
                "Poor readability during live matches",
                "No support for multiple simultaneous games",
                "Friction when adjusting time mid-game",
              ].map((item) => (
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
              The Idea
            </p>
            <h2 className="mb-4 text-2xl font-semibold">
              A timer as a sequence of structured phases
            </h2>
            <p className={`mb-6 text-sm leading-6 ${theme.muted}`}>
              Instead of a simple countdown, Multi Rounds models each timer as a
              flow that mirrors how real tournaments actually operate.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {phases.map((phase, i) => (
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
                  {i < phases.length - 1 && (
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
            Key Features
          </p>
          <h2 className="mb-10 text-3xl font-semibold">
            Everything needed for live timing
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className={`rounded-3xl p-6 ${theme.workCard}`}
              >
                <div
                  className={`mb-3 h-8 w-8 rounded-xl ${theme.workIcon} flex items-center justify-center`}
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
            Technical Approach
          </p>
          <h2 className="mb-6 text-3xl font-semibold">Architecture</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className={`mb-3 font-semibold ${theme.accent}`}>
                useTcgCounter hook
              </h3>
              <p className={`mb-4 text-sm leading-6 ${theme.muted}`}>
                Each timer is powered by a dedicated React hook that
                encapsulates state management, countdown logic, phase
                transitions, and persistence.
              </p>
              <div
                className={`rounded-2xl p-5 font-mono text-sm ${theme.cardInner}`}
              >
                <p className={theme.subtle}>// Persisted state</p>
                <p className={`mt-1 ${theme.bodyText}`}>title</p>
                <p className={theme.bodyText}>phaseDurations</p>
                <p className={theme.bodyText}>activePhase</p>
                <p className={`mt-3 ${theme.subtle}`}>// Runtime state</p>
                <p className={`mt-1 ${theme.bodyText}`}>remainingTime</p>
                <p className={theme.bodyText}>isRunning / isPaused</p>
              </div>
            </div>

            <div>
              <h3 className={`mb-3 font-semibold ${theme.accent}`}>
                Persistence
              </h3>
              <p className={`mb-4 text-sm leading-6 ${theme.muted}`}>
                Each timer stores its configuration under a unique key with safe
                fallbacks for malformed data.
              </p>
              <div
                className={`rounded-2xl p-5 font-mono text-sm ${theme.cardInner}`}
              >
                <p className={theme.bodyText}>
                  <span className={theme.subtle}>key:</span>{" "}
                  multi-rounds:tcg:counter:
                  <span className={theme.accent}>&lt;id&gt;</span>
                </p>
                <p className={`mt-4 ${theme.subtle}`}>// Defaults</p>
                <p className={`mt-1 ${theme.bodyText}`}>Setup — 5 min</p>
                <p className={theme.bodyText}>Main — 50 min</p>
                <p className={theme.bodyText}>Extra — 5 min</p>
              </div>

              <h3 className={`mb-3 mt-6 font-semibold ${theme.accent}`}>
                Phase Sequencing
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
            Design Decisions
          </p>
          <h2 className="mb-10 text-3xl font-semibold">
            Why it works this way
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {decisions.map((d) => (
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
              Challenges
            </p>
            <ul className={`space-y-3 text-sm leading-6 ${theme.muted}`}>
              {[
                "Managing multiple independent timers without state conflicts",
                "Keeping UI readable across dynamic layouts",
                "Designing a flexible yet simple phase system",
                "Ensuring smooth transitions between phases",
              ].map((item) => (
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
              Outcome
            </p>
            <ul className={`space-y-3 text-sm leading-6 ${theme.muted}`}>
              {[
                "Improves clarity and timing consistency during tournaments",
                "Reduces manual overhead for organizers and players",
                "Supports real-world multi-match workflows",
                "Demonstrates product thinking and UX design under constraints",
              ].map((item) => (
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
            What&apos;s Next
          </p>
          <h2 className="mb-8 text-3xl font-semibold">Future improvements</h2>
          <div className="flex flex-wrap gap-3">
            {future.map((item) => (
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
            Reflection
          </p>
          <p className={`mb-8 max-w-2xl text-base leading-7 ${theme.bodyText}`}>
            This project started as a personal need and evolved into a focused
            product. It highlights the importance of building from real use
            cases, designing for context, and keeping interfaces simple under
            pressure.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#69E8FF] px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
          >
            View live project →
          </a>
        </section>
      </div>
    </main>
  );
}
