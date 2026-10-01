import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import ComparisonTable from "./ui/ComparisonTable";

type ComparisonT = typeof en.services_page.comparison;

interface Props {
  comparison: ComparisonT;
  theme: ServicesTheme;
}

export default function ComparisonSection({ comparison, theme }: Props) {
  return (
    <section id="comparativa" className="mx-auto max-w-[1200px] px-6 pb-16 md:px-10 lg:pb-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{comparison.eyebrow}</p>
          <h2 className={`mt-3 text-3xl font-semibold tracking-tight md:text-4xl ${theme.heading}`}>
            {comparison.heading}
          </h2>
        </div>
        <p className={`self-end leading-7 ${theme.body}`}>{comparison.description}</p>
      </div>

      <div className="mt-8">
        <ComparisonTable columns={comparison.columns} rows={comparison.rows} theme={theme} />
      </div>
    </section>
  );
}
