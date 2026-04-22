import { Theme } from "../theme";
import en from "../locales/en.json";

type ExperienceT = typeof en.experience;

interface Props {
  experience: ExperienceT;
  theme: Theme;
}

export default function Experience({ experience, theme }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
      <div className="mb-8">
        <p className={`text-sm uppercase tracking-[0.24em] ${theme.accent}`}>
          {experience.label}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          {experience.heading}
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {experience.items.map((item) => (
          <div key={item.role} className={`rounded-[1.75rem] p-6 ${theme.expCard}`}>
            <p className={`text-sm ${theme.expCompany}`}>{item.company}</p>
            <h3 className="mt-2 text-xl font-medium">{item.role}</h3>
            <p className={`mt-3 text-sm leading-7 ${theme.faint}`}>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
