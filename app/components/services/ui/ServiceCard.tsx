import { ServicesTheme } from "../theme";

interface Props {
  name: string;
  price: string;
  priceSuffix: string;
  description: string;
  features: string[];
  theme: ServicesTheme;
  highlighted?: boolean;
}

export default function ServiceCard({
  name,
  price,
  priceSuffix,
  description,
  features,
  theme,
  highlighted = false,
}: Props) {
  return (
    <div className={`flex flex-col rounded-3xl p-6 ${highlighted ? theme.cardHighlight : theme.cardBg}`}>
      <h3 className={`text-lg font-semibold ${theme.heading}`}>{name}</h3>
      <p className={`mt-1 ${theme.faint}`}>
        <span className={`text-4xl font-bold ${theme.heading}`}>{price}</span>{" "}
        <span className="text-sm">{priceSuffix}</span>
      </p>
      <p className={`mt-3 text-sm leading-6 ${theme.body}`}>{description}</p>

      <ul className="mt-5 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className={`flex items-start gap-2 text-sm leading-6 ${theme.body}`}>
            <svg viewBox="0 0 20 20" width="16" height="16" className={`mt-1 shrink-0 ${theme.checkIcon}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m4 10 4 4 8-8" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
