import { render, screen, within } from "@testing-library/react";
import ComparisonTable from "../ui/ComparisonTable";
import { servicesThemes } from "../theme";

const columns = ["Feature", "Basic", "Pro"];
const labels = { included: "Included", notIncluded: "Not included" };
const rows = [
  { label: "Custom design", values: ["check", "check"] },
  { label: "Analytics", values: ["dash", "check"] },
  { label: "Pages", values: ["1", "Up to 5"] },
];

describe("ComparisonTable", () => {
  it("renders one column header per column", () => {
    render(<ComparisonTable columns={columns} rows={rows} labels={labels} theme={servicesThemes.dark} />);
    expect(screen.getAllByRole("columnheader").map((th) => th.textContent)).toEqual(columns);
  });

  it("renders each row label as a row header", () => {
    render(<ComparisonTable columns={columns} rows={rows} labels={labels} theme={servicesThemes.dark} />);
    for (const row of rows) {
      expect(screen.getByRole("rowheader", { name: row.label })).toBeInTheDocument();
    }
  });

  it("gives 'check' and 'dash' cells text for screen readers and renders anything else as text", () => {
    render(<ComparisonTable columns={columns} rows={rows} labels={labels} theme={servicesThemes.dark} />);

    const analyticsRow = screen.getByRole("rowheader", { name: "Analytics" }).closest("tr")!;
    const [basic, pro] = within(analyticsRow).getAllByRole("cell");
    expect(basic).toHaveTextContent(labels.notIncluded);
    expect(pro).toHaveTextContent(labels.included);
    expect(pro.querySelector("svg")).toHaveAttribute("aria-hidden", "true");

    const pagesRow = screen.getByRole("rowheader", { name: "Pages" }).closest("tr")!;
    expect(within(pagesRow).getAllByRole("cell").map((td) => td.textContent)).toEqual(["1", "Up to 5"]);
  });
});
