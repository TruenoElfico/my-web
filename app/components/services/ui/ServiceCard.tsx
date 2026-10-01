import Image from "next/image";
import { ServicesTheme } from "../theme";

interface Props {
  icon: string;
  name: string;
  price: string;
  priceSuffix: string;
  features: string[];
  ctaLabel: string;
  theme: ServicesTheme;
}

export default function ServiceCard({ icon, name, price, priceSuffix, features, ctaLabel, theme }: Props) {
  return (
    <div className={`flex flex-col rounded-3xl p-6 ${theme.cardBg}`}>
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${theme.iconCircle}`}>
        <Image src={icon} alt="" width={20} height={20} />
      </div>

      <h3 className={`mt-4 text-lg font-semibold ${theme.heading}`}>{name}</h3>
      <p className={`mt-1 ${theme.faint}`}>
        <span className={`text-2xl font-semibold ${theme.heading}`}>{price}</span>{" "}
        <span className="text-sm">{priceSuffix}</span>
      </p>

      <ul className="mt-5 flex-1 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className={`flex items-start gap-2 text-sm leading-6 ${theme.body}`}>
            <svg viewBox="0 0 20 20" width="16" height="16" className={`mt-1 shrink-0 ${theme.checkIcon}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m4 10 4 4 8-8" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={`mt-6 w-full rounded-xl px-4 py-2.5 text-sm font-medium transition ${theme.ctaSecondary}`}
      >
        {ctaLabel}
      </button>
    </div>
  );
}
