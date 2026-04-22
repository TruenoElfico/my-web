import { Theme } from "../theme";

interface Props {
  isDark: boolean;
  onToggleTheme: () => void;
  lang: "en" | "es";
  onToggleLang: () => void;
  theme: Theme;
}

export default function Controls({ isDark, onToggleTheme, lang, onToggleLang, theme }: Props) {
  return (
    <div className="fixed right-6 top-6 z-50 flex gap-2">
      <button
        onClick={onToggleTheme}
        className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium shadow-lg backdrop-blur transition ${theme.toggleBtn}`}
      >
        {isDark ? "Light" : "Dark"}
      </button>
      <button
        onClick={onToggleLang}
        className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-medium shadow-lg backdrop-blur transition ${theme.toggleBtn}`}
      >
        {lang === "en" ? "ES" : "EN"}
      </button>
    </div>
  );
}
