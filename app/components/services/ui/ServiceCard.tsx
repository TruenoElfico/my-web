"use client";

import { motion } from "framer-motion";
import { ServicesTheme } from "../theme";
import { easeOut } from "../motion";

interface Props {
  name: string;
  price: string;
  description: string;
  features: string[];
  theme: ServicesTheme;
  highlighted?: boolean;
}

export default function ServiceCard({
  name,
  price,
  description,
  features,
  theme,
  highlighted = false,
}: Props) {
  return (
    <motion.div
      className={`flex flex-col rounded-3xl p-6 transition-colors duration-300 ${
        highlighted ? theme.cardHighlight : `${theme.cardBg} hover:border-[#69E8FF]/50`
      }`}
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ duration: 0.25, ease: easeOut }}
    >
      <h3 className={`text-lg font-semibold ${theme.heading}`}>{name}</h3>
      <p className={`mt-1 text-4xl font-bold ${theme.heading}`}>{price}</p>
      <p className={`mt-3 text-sm leading-6 ${theme.body}`}>{description}</p>

      <ul className="mt-5 space-y-2.5">
        {features.map((feature) => (
          <li key={feature} className={`flex items-start gap-2 text-sm leading-6 ${theme.body}`}>
            <svg viewBox="0 0 20 20" width="16" height="16" className={`mt-1 shrink-0 ${theme.checkIcon}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m4 10 4 4 8-8" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
