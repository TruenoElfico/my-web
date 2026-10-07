import Image from "next/image";
import { ServicesTheme } from "../theme";

interface Props {
  number: string;
  icon: string;
  title: string;
  theme: ServicesTheme;
  showArrow: boolean;
}

export default function ProcessStep({ number, icon, title, theme, showArrow }: Props) {
  return (
    <div className="flex items-center justify-center gap-4 sm:justify-start">
      <div className="flex flex-col items-center gap-2 text-center">
        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${theme.iconCircle}`}>
          <Image src={icon} alt="" width={22} height={22} />
        </div>
        <p className={`text-lg font-bold ${theme.heading}`}>{number}</p>
        <p className={`text-sm ${theme.faint}`}>{title}</p>
      </div>
      {showArrow && (
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          className={`hidden shrink-0 self-start mt-5 sm:block ${theme.faint}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )}
    </div>
  );
}
