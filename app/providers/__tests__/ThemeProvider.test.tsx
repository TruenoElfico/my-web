import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider, useAppTheme } from "../ThemeProvider";

function Probe() {
  const { isDark, toggleTheme, lang, toggleLang } = useAppTheme();
  return (
    <>
      <button onClick={toggleTheme}>{isDark ? "dark" : "light"}</button>
      <button onClick={toggleLang}>{lang}</button>
    </>
  );
}

const renderProvider = () =>
  render(
    <ThemeProvider>
      <Probe />
    </ThemeProvider>,
  );

describe("ThemeProvider", () => {
  beforeEach(() => localStorage.clear());

  it("defaults to light and Spanish", () => {
    renderProvider();
    expect(screen.getByRole("button", { name: "light" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "es" })).toBeInTheDocument();
  });

  it("restores stored preferences", () => {
    localStorage.setItem("theme-dark", "true");
    localStorage.setItem("theme-lang", "en");
    renderProvider();
    expect(screen.getByRole("button", { name: "dark" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "en" })).toBeInTheDocument();
  });

  it("toggles and persists both settings", async () => {
    const user = userEvent.setup();
    renderProvider();

    await user.click(screen.getByRole("button", { name: "light" }));
    await user.click(screen.getByRole("button", { name: "es" }));

    expect(screen.getByRole("button", { name: "dark" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "en" })).toBeInTheDocument();
    expect(localStorage.getItem("theme-dark")).toBe("true");
    expect(localStorage.getItem("theme-lang")).toBe("en");
  });

  it("keeps <html lang> in sync with the selected language", async () => {
    const user = userEvent.setup();
    renderProvider();
    expect(document.documentElement.lang).toBe("es");

    await user.click(screen.getByRole("button", { name: "es" }));
    expect(document.documentElement.lang).toBe("en");
  });
});
