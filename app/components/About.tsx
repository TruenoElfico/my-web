import { Theme } from "../theme";
import en from "../locales/en.json";

type AboutT = typeof en.about;

interface Props {
  about: AboutT;
  skills: string[];
  theme: Theme;
}

export default function About({ about, skills, theme }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className={`text-sm uppercase tracking-[0.24em] ${theme.accent}`}>
            {about.label}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            {about.heading}
          </h2>
          <p className={`mt-5 max-w-xl leading-7 ${theme.muted}`}>{about.body}</p>
          <p className={`mt-4 text-sm ${theme.subtle}`}>{about.tags}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className={`h-fit rounded-2xl px-4 py-2 text-sm ${theme.skillChip}`}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
