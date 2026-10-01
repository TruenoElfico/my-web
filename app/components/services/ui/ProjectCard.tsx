import { ServicesTheme } from "../theme";

interface Props {
  title: string;
  subtitle: string;
  theme: ServicesTheme;
}

export default function ProjectCard({ title, subtitle, theme }: Props) {
  return (
    <article className={`overflow-hidden rounded-2xl ${theme.cardBg}`}>
      <div className={`h-40 w-full ${theme.cardBgAlt}`} aria-hidden="true" />
      <div className="p-4">
        <h3 className={`text-sm font-semibold ${theme.heading}`}>{title}</h3>
        <p className={`mt-0.5 text-xs ${theme.faint}`}>{subtitle}</p>
      </div>
    </article>
  );
}
