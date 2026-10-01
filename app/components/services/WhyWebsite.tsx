"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import Container from "./ui/Container";
import { Reveal, scaleFadeItem, StaggerGroup, StaggerItem } from "./motion";

type WhyT = typeof en.services_page.why;

interface Props {
  why: WhyT;
  theme: ServicesTheme;
}

export default function WhyWebsite({ why, theme }: Props) {
  return (
    <Container as="section" id="por-que-una-web" className="py-16 lg:py-24">
      <Reveal>
        <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{why.eyebrow}</p>
      </Reveal>
      <div className="mt-3 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal delay={0.05}>
          <h2 className={`text-4xl font-semibold leading-tight tracking-tight md:text-5xl ${theme.heading}`}>
            {why.heading1}
          </h2>
          <h2 className={`text-4xl font-semibold leading-tight tracking-tight md:text-5xl ${theme.headingAccent}`}>
            {why.heading2}
          </h2>
          <p className={`mt-5 max-w-lg leading-7 ${theme.body}`}>{why.description}</p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2" stagger={0.1} delayChildren={0.15}>
          {why.benefits.map((benefit) => (
            <StaggerItem key={benefit.title} className="flex gap-4">
              <motion.div
                variants={scaleFadeItem}
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${theme.iconCircle}`}
              >
                <Image src={benefit.icon} alt="" width={24} height={24} />
              </motion.div>
              <div>
                <p className={`text-lg font-semibold ${theme.heading}`}>{benefit.title}</p>
                <p className={`mt-1 text-xs leading-6 ${theme.faint}`}>{benefit.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Container>
  );
}
