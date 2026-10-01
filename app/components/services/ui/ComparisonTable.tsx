import { ServicesTheme } from "../theme";

interface Row {
  label: string;
  values: string[];
  highlight?: boolean;
}

interface Props {
  columns: string[];
  rows: Row[];
  theme: ServicesTheme;
}

function Cell({ value, theme }: { value: string; theme: ServicesTheme }) {
  if (value === "check") {
    return (
      <svg viewBox="0 0 20 20" width="18" height="18" className={theme.checkIcon} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m4 10 4 4 8-8" />
      </svg>
    );
  }
  if (value === "dash") {
    return <span className={theme.dashIcon}>—</span>;
  }
  return <span>{value}</span>;
}

export default function ComparisonTable({ columns, rows, theme }: Props) {
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
                    <Cell value={value} theme={theme} />
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
