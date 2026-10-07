"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import Container from "./ui/Container";
import ServiceCard from "./ui/ServiceCard";
import { easeOut, Reveal, StaggerGroup, StaggerItem } from "./motion";

type PricingT = typeof en.services_page.pricing;

interface Props {
  pricing: PricingT;
  theme: ServicesTheme;
  showComparison: boolean;
  onToggleComparison: () => void;
}

export default function PricingSection({
  pricing,
  theme,
  showComparison,
  onToggleComparison,
}: Props) {
  return (
    <Container as="section" id="servicios" className="py-16 lg:py-24">
      <Reveal className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <p
            className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}
          >
            {pricing.eyebrow}
          </p>
          <h2
            className={`mt-3 text-4xl font-semibold tracking-tight md:text-5xl ${theme.heading}`}
          >
            {pricing.heading}
          </h2>
        </div>
        <p className={`self-end leading-7 ${theme.body}`}>
          {pricing.description}
        </p>
      </Reveal>

      <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.1}>
        {pricing.cards.map((card) => (
          <StaggerItem key={card.name}>
            <ServiceCard
              name={card.name}
              price={card.price}
              description={card.description}
              features={card.features}
              theme={theme}
              highlighted={card.highlighted}
            />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <Reveal
        className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        delay={0.1}
      >
        {pricing.chips.map((chip) => (
          <div
            key={chip.label}
            className={`flex items-center gap-2.5 text-base font-semibold ${theme.heading}`}
          >
            <Image src={chip.icon} alt="" width={22} height={22} />
            {chip.label}
          </div>
        ))}
      </Reveal>

      <div className="mt-8 flex justify-center">
        <motion.button
          type="button"
          onClick={onToggleComparison}
          aria-expanded={showComparison}
          aria-controls="comparativa"
          className={`rounded-xl px-6 py-3 text-sm font-medium transition-colors ${theme.ctaSecondary}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: easeOut }}
        >
          {showComparison ? pricing.viewLess : pricing.viewAll}
        </motion.button>
      </div>
    </Container>
  );
}
