import Image from "next/image";
import { ServicesTheme } from "../theme";

interface Props {
  icon: string;
  company: string;
  role: string;
  theme: ServicesTheme;
}

export default function CompanyBadge({ icon, company, role, theme }: Props) {
  return (
    <div className={`flex items-center gap-3 rounded-2xl p-4 ${theme.cardBg}`}>
      <Image src={icon} alt="" width={28} height={28} className="shrink-0 rounded-full" />
      <div>
        <p className={`text-sm font-medium ${theme.heading}`}>{company}</p>
        <p className={`text-xs ${theme.faint}`}>{role}</p>
      </div>
    </div>
  );
}
