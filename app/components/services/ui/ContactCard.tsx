import Image from "next/image";
import { ServicesTheme } from "../theme";

interface Props {
  icon: string;
  label: string;
  theme: ServicesTheme;
}

export default function ContactCard({ icon, label, theme }: Props) {
  return (
    <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${theme.cardBg}`}>
      <Image src={icon} alt="" width={18} height={18} />
      <span className={`text-sm font-bold ${theme.heading}`}>{label}</span>
    </div>
  );
}
