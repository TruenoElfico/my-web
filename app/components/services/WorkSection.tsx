import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import ProjectCard from "./ui/ProjectCard";

type WorkT = typeof en.services_page.work;

interface Props {
  work: WorkT;
  theme: ServicesTheme;
}

// Rendered only while SHOW_WORK is true in ServicesPageClient — kept ready for
// when real project thumbnails replace the gray placeholders.
export default function WorkSection({ work, theme }: Props) {
  return (
    <section id="trabajo" className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 lg:py-24">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{work.eyebrow}</p>
          <h2 className={`mt-3 text-3xl font-semibold tracking-tight md:text-4xl ${theme.heading}`}>
            {work.heading}
          </h2>
        </div>
        <a href="/projects" className={`hidden shrink-0 text-sm font-medium sm:block ${theme.navLink}`}>
          {work.viewAll} →
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {work.items.map((item) => (
          <ProjectCard key={item.title} title={item.title} subtitle={item.subtitle} theme={theme} />
        ))}
      </div>
    </section>
  );
}
