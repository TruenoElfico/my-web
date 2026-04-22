import { Theme } from "../theme";
import en from "../locales/en.json";

type WorkT = typeof en.work;

interface Props {
  work: WorkT;
  theme: Theme;
}

export default function Work({ work, theme }: Props) {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16 lg:py-12">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className={`text-sm uppercase tracking-[0.24em] ${theme.accent}`}>
            {work.label}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            {work.heading}
          </h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {work.projects.map((project) => (
          <article
            key={project.title}
            className={`rounded-[1.75rem] p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 ${theme.workCard}`}
          >
            <div className={`mb-4 h-10 w-10 rounded-2xl ${theme.workIcon}`} />
            <h3 className="text-xl font-medium">{project.title}</h3>
            <p className={`mt-3 text-sm leading-7 ${theme.faint}`}>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
