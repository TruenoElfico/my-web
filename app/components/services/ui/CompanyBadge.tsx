import Image from "next/image";
import { ServicesTheme } from "../theme";

interface Props {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  company: string;
  role: string;
  theme: ServicesTheme;
}

export default function CompanyBadge({ icon, iconWidth, iconHeight, company, role, theme }: Props) {
  return (
    <div className={`flex items-center gap-4 rounded-2xl p-4 ${theme.cardBg}`}>
      <Image
        src={icon}
        alt={company}
        width={iconWidth}
        height={iconHeight}
        className="h-12 w-12 shrink-0 object-contain"
      />
      <div>
        <p className={`text-sm font-medium ${theme.heading}`}>{company}</p>
        <p className={`text-xs ${theme.faint}`}>{role}</p>
      </div>
    </div>
  );
}
