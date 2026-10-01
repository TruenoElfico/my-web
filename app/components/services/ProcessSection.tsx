"use client";

import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import Container from "./ui/Container";
import ProcessStep from "./ui/ProcessStep";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";

type ProcessT = typeof en.services_page.process;

interface Props {
  process: ProcessT;
  theme: ServicesTheme;
}

export default function ProcessSection({ process, theme }: Props) {
  return (
    <Container as="section" id="proceso" className="py-16 lg:py-24">
      <Reveal>
        <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{process.eyebrow}</p>
        <h2 className={`mt-3 text-4xl font-semibold tracking-tight md:text-5xl ${theme.heading}`}>
          {process.heading}
        </h2>
        <p className={`mt-5 max-w-md leading-7 ${theme.body}`}>{process.description}</p>
      </Reveal>

      <Reveal delay={0.1} className={`mt-10 rounded-2xl p-6 md:p-8 ${theme.cardBg}`}>
        <StaggerGroup className="flex flex-wrap items-start justify-between gap-x-4 gap-y-8" stagger={0.12}>
          {process.steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <ProcessStep
                number={step.number}
                icon={step.icon}
                title={step.title}
                theme={theme}
                showArrow={i < process.steps.length - 1}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Reveal>
    </Container>
  );
}
