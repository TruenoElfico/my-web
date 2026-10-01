"use client";

import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import Container from "./ui/Container";
import FAQItem from "./ui/FAQItem";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";

type FAQT = typeof en.services_page.faq;

interface Props {
  faq: FAQT;
  theme: ServicesTheme;
}

export default function FAQSection({ faq, theme }: Props) {
  return (
    <Container as="section" className="py-16 lg:py-24">
      <Reveal>
        <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{faq.eyebrow}</p>
        <h2 className={`mt-3 text-4xl font-semibold tracking-tight md:text-5xl ${theme.heading}`}>{faq.heading}</h2>
      </Reveal>

      <StaggerGroup className="mt-8 grid grid-cols-1 gap-x-12 sm:grid-cols-2" stagger={0.06}>
        {faq.items.map((item) => (
          <StaggerItem key={item.q}>
            <FAQItem question={item.q} answer={item.a} theme={theme} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Container>
  );
}
