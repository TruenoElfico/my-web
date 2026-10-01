import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import Container from "./ui/Container";
import ProcessStep from "./ui/ProcessStep";

type ProcessT = typeof en.services_page.process;

interface Props {
  process: ProcessT;
  theme: ServicesTheme;
}

export default function ProcessSection({ process, theme }: Props) {
  return (
    <Container as="section" id="proceso" className="py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{process.eyebrow}</p>
          <h2 className={`mt-3 text-4xl font-semibold tracking-tight md:text-5xl ${theme.heading}`}>
            {process.heading}
          </h2>
          <p className={`mt-5 max-w-md leading-7 ${theme.body}`}>{process.description}</p>
        </div>

        <div className="flex flex-wrap items-start gap-x-4 gap-y-8 lg:justify-end">
          {process.steps.map((step, i) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={step.title}
              theme={theme}
              showArrow={i < process.steps.length - 1}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
