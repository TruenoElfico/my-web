import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";

type NavT = typeof en.services_page.nav;

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  nav: NavT;
  links: NavLink[];
  theme: ServicesTheme;
  isDark: boolean;
  onToggleTheme: () => void;
  lang: "en" | "es";
  onToggleLang: () => void;
}

export default function ServicesNav({ nav, links, theme, isDark, onToggleTheme, lang, onToggleLang }: Props) {
  return (
    <header className={`sticky top-0 z-50 h-[var(--services-nav-h)] ${theme.navBg}`}>
      <nav
        aria-label="Primary"
        className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-6 px-6 md:px-10"
      >
        <a href="#top" className={`text-sm font-semibold ${theme.heading}`}>
          Braulio Romero
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`text-sm font-medium transition ${theme.navLink}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleLang}
            className={`hidden rounded-full border px-3 py-1.5 text-xs font-medium transition sm:block ${theme.ctaSecondary}`}
            aria-label="Toggle language"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button
            type="button"
            onClick={onToggleTheme}
            className={`hidden rounded-full border px-3 py-1.5 text-xs font-medium transition sm:block ${theme.ctaSecondary}`}
            aria-label="Toggle theme"
          >
            {isDark ? "Light" : "Dark"}
          </button>
          <a
            href="#contacto"
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${theme.ctaPrimary}`}
          >
            {nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
