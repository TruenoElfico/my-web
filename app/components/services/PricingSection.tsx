import Image from "next/image";
import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import Container from "./ui/Container";
import ServiceCard from "./ui/ServiceCard";

type PricingT = typeof en.services_page.pricing;

interface Props {
  pricing: PricingT;
  theme: ServicesTheme;
  showComparison: boolean;
  onToggleComparison: () => void;
}

export default function PricingSection({ pricing, theme, showComparison, onToggleComparison }: Props) {
  return (
    <Container as="section" id="servicios" className="py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{pricing.eyebrow}</p>
          <h2 className={`mt-3 text-4xl font-semibold tracking-tight md:text-5xl ${theme.heading}`}>
            {pricing.heading}
          </h2>
        </div>
        <p className={`self-end leading-7 ${theme.body}`}>{pricing.description}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pricing.cards.map((card) => (
          <ServiceCard
            key={card.name}
            name={card.name}
            price={card.price}
            priceSuffix={card.priceSuffix}
            description={card.description}
            features={card.features}
            theme={theme}
            highlighted={card.highlighted}
          />
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {pricing.chips.map((chip) => (
          <div key={chip.label} className={`flex items-center gap-2.5 text-base font-semibold ${theme.heading}`}>
            <Image src={chip.icon} alt="" width={22} height={22} />
            {chip.label}
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={onToggleComparison}
          aria-expanded={showComparison}
          aria-controls="comparativa"
          className={`rounded-xl px-6 py-3 text-sm font-medium transition ${theme.ctaSecondary}`}
        >
          {showComparison ? pricing.viewLess : pricing.viewAll}
        </button>
      </div>
    </Container>
  );
}
