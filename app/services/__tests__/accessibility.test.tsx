import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import es from "../../locales/es.json";
import { ThemeProvider } from "../../providers/ThemeProvider";
import ServicesPageClient from "../ServicesPageClient";

const t = es.services_page;

// axe can't measure color contrast in jsdom; check that manually.
describe("/services accessibility", () => {
  const renderPage = () =>
    render(
      <ThemeProvider>
        <ServicesPageClient />
      </ThemeProvider>,
    );

  it("has no axe violations", async () => {
    const { container } = renderPage();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("has no axe violations with the comparison table open", async () => {
    const user = userEvent.setup();
    const { container } = renderPage();
    await user.click(screen.getByRole("button", { name: t.pricing.viewAll }));

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });

  it("has a skip link that targets the main landmark", () => {
    renderPage();
    const skipLink = screen.getByRole("link", { name: t.a11y.skipToContent });
    expect(skipLink).toHaveAttribute("href", `#${screen.getByRole("main").id}`);
  });

  it("keeps the header and footer outside main", () => {
    renderPage();
    const main = screen.getByRole("main");
    expect(main).not.toContainElement(screen.getByRole("banner"));
    expect(main).not.toContainElement(screen.getByRole("contentinfo"));
  });
});
