import { ServicesTheme } from "../theme";

interface Row {
  label: string;
  values: string[];
  highlight?: boolean;
}

interface CellLabels {
  included: string;
  notIncluded: string;
}

interface Props {
  columns: string[];
  rows: Row[];
  labels: CellLabels;
  theme: ServicesTheme;
}

// Icons are hidden from screen readers and paired with text, so "included" /
// "not included" is announced instead of nothing or "em dash".
function Cell({ value, labels, theme }: { value: string; labels: CellLabels; theme: ServicesTheme }) {
  if (value === "check") {
    return (
      <>
        <svg viewBox="0 0 20 20" width="18" height="18" className={theme.checkIcon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m4 10 4 4 8-8" />
        </svg>
        <span className="sr-only">{labels.included}</span>
      </>
    );
  }
  if (value === "dash") {
    return (
      <>
        <span className={theme.dashIcon} aria-hidden="true">—</span>
        <span className="sr-only">{labels.notIncluded}</span>
      </>
    );
  }
  return <span>{value}</span>;
}

export default function ComparisonTable({ columns, rows, labels, theme }: Props) {
  return (
    <div className={`overflow-x-auto rounded-2xl border ${theme.tableBorder}`}>
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className={theme.tableHeadBg}>
            {columns.map((col, i) => (
              <th
                key={col}
                scope="col"
                className={`px-5 py-3 font-medium ${i === 0 ? "text-left" : "text-center"}`}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={`divide-y ${theme.tableBorder}`}>
          {rows.map((row) => (
            <tr
              key={row.label}
              className={`transition ${row.highlight ? `text-base font-bold ${theme.tableHighlight}` : theme.tableRowHover}`}
            >
              <th scope="row" className={`px-5 py-3 text-left font-medium ${row.highlight ? "" : theme.body}`}>
                {row.label}
              </th>
              {row.values.map((value, i) => (
                <td key={i} className="px-5 py-3 text-center">
                  <span className="inline-flex items-center justify-center">
                    <Cell value={value} labels={labels} theme={theme} />
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
