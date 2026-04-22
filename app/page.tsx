"use client";

import { useState } from "react";
import en from "./locales/en.json";
import es from "./locales/es.json";

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
  const t = locales[lang];

  return (
    <main className="min-h-screen bg-[#0f1115] text-white">
      {/* Language toggle */}
      <div className="fixed right-6 top-6 z-50">
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="cursor-pointer rounded-full border border-white/15 bg-[#141821] px-4 py-2 text-sm font-medium text-white/80 shadow-lg backdrop-blur transition hover:border-[#69E8FF]/40 hover:text-[#69E8FF]"
        >
          {lang === "en" ? "ES" : "EN"}
        </button>
      </div>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(105,232,255,0.16),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_20%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:34px_34px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-10 lg:px-16 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-[#69E8FF]/30 bg-[#69E8FF]/10 px-4 py-1 text-sm text-[#69E8FF] shadow-lg shadow-cyan-500/10">
              {t.badge}
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {t.hero.name}
              <span className="mt-2 block text-[#69E8FF]">
                {t.hero.tagline}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white/90 md:text-lg">
              {t.hero.description}
            </p>
            <p className="mt-6 max-w-2xl text-base font-semibold leading-7 text-[#69E8FF] md:text-lg">
              {t.hero.availability}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-2xl bg-[#69E8FF] px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
              >
                {t.hero.cta_work}
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t.hero.cta_contact}
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#141821] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">{t.card.label}</p>
                    <p className="text-lg font-medium">{t.card.title}</p>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-[#69E8FF] shadow-[0_0_20px_rgba(105,232,255,0.8)]" />
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">
                      {t.card.specialty_label}
                    </p>
                    <p className="mt-1 text-base font-medium">
                      {t.card.specialty_value}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">
                      {t.card.approach_label}
                    </p>
                    <p className="mt-1 text-base font-medium">
                      {t.card.approach_value}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">{t.card.goal_label}</p>
                    <p className="mt-1 text-base font-medium">
                      {t.card.goal_value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#69E8FF]">
              {t.about.label}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              {t.about.heading}
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-white/70">
              {t.about.body}
            </p>
            <p className="mt-4 text-sm text-white/50">{t.about.tags}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="h-fit rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="work"
        className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16 lg:py-12"
      >
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#69E8FF]">
              {t.work.label}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              {t.work.heading}
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.work.projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="mb-4 h-10 w-10 rounded-2xl border border-[#69E8FF]/30 bg-[#69E8FF]/10" />
              <h3 className="text-xl font-medium">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {t.experience.items.map((item) => (
            <div
              key={item.role}
              className="rounded-[1.75rem] border border-white/10 bg-[#12161f] p-6"
            >
              <p className="text-sm text-[#69E8FF]">{item.company}</p>
              <h3 className="mt-2 text-xl font-medium">{item.role}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-16"
      >
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-[#69E8FF]">
            {t.contact.label}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            {t.contact.heading}
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/70">
            {t.contact.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:terrbete@gmail.com?subject=Project Inquiry&body=Hi Braulio, I'd like to talk about..."
              className="rounded-2xl bg-[#69E8FF] px-6 py-3 text-sm font-medium text-black"
            >
              {t.contact.email_btn}
            </a>
            <a
              href="https://www.linkedin.com/in/braulio-romero/"
              target="_blank"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white"
            >
              {t.contact.linkedin_btn}
            </a>
            <a
              href="https://github.com/TruenoElfico"
              target="_blank"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white"
            >
              {t.contact.github_btn}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
