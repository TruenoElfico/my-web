import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ServicesPageClient from "../../../services/ServicesPageClient";
import en from "../../../locales/en.json";

const t = en.services_page;

describe("ServicesPageClient", () => {
  it("renders every pricing card from the locale file", () => {
    render(<ServicesPageClient />);
    for (const card of t.pricing.cards) {
      expect(screen.getByRole("heading", { name: card.name })).toBeInTheDocument();
    }
  });

  it("toggles the comparison table from the pricing section", async () => {
    const user = userEvent.setup();
    render(<ServicesPageClient />);
    expect(screen.queryByRole("table")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: t.pricing.viewAll }));
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: t.pricing.viewLess })).toHaveAttribute("aria-expanded", "true");
  });
});
