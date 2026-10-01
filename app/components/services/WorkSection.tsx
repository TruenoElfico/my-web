"use client";

import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import Container from "./ui/Container";
import ProjectCard from "./ui/ProjectCard";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";

type WorkT = typeof en.services_page.work;

interface Props {
  work: WorkT;
  theme: ServicesTheme;
}

// Rendered only while SHOW_WORK is true in ServicesPageClient — kept ready for
// when real project thumbnails replace the gray placeholders.
export default function WorkSection({ work, theme }: Props) {
  return (
    <Container as="section" id="trabajo" className="py-16 lg:py-24">
      <Reveal className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{work.eyebrow}</p>
          <h2 className={`mt-3 text-4xl font-semibold tracking-tight md:text-5xl ${theme.heading}`}>
            {work.heading}
          </h2>
        </div>
        <a href="/projects" className={`hidden shrink-0 text-sm font-medium sm:block ${theme.navLink}`}>
          {work.viewAll} →
        </a>
      </Reveal>

      <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
        {work.items.map((item) => (
          <StaggerItem key={item.title}>
            <ProjectCard title={item.title} subtitle={item.subtitle} theme={theme} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Container>
  );
}
