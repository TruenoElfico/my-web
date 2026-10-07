import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import ComparisonTable from "./ui/ComparisonTable";
import Container from "./ui/Container";

type ComparisonT = typeof en.services_page.comparison;
type A11yT = typeof en.services_page.a11y;

interface Props {
  comparison: ComparisonT;
  a11y: A11yT;
  theme: ServicesTheme;
}

export default function ComparisonSection({ comparison, a11y, theme }: Props) {
  return (
    <Container as="section" id="comparativa" className="pb-16 lg:pb-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{comparison.eyebrow}</p>
          <h2 className={`mt-3 text-4xl font-semibold tracking-tight md:text-5xl ${theme.heading}`}>
            {comparison.heading}
          </h2>
        </div>
        <p className={`self-end leading-7 ${theme.body}`}>{comparison.description}</p>
      </div>

      <div className="mt-8">
        <ComparisonTable
          columns={comparison.columns}
          rows={comparison.rows}
          labels={{ included: a11y.included, notIncluded: a11y.notIncluded }}
          theme={theme}
        />
      </div>
    </Container>
  );
}
