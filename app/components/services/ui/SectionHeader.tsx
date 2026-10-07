import { ServicesTheme } from "../theme";

interface Props {
  eyebrow: string;
  heading: React.ReactNode;
  theme: ServicesTheme;
  id?: string;
  className?: string;
}

export default function SectionHeader({ eyebrow, heading, theme, id, className }: Props) {
  return (
    <div className={className}>
      <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{eyebrow}</p>
      <h2 id={id} className={`mt-3 text-4xl font-semibold tracking-tight md:text-5xl ${theme.heading}`}>
        {heading}
      </h2>
    </div>
  );
}
