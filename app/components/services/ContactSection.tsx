"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import ContactCard from "./ui/ContactCard";
import Container from "./ui/Container";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";

type ContactT = typeof en.services_page.contact;

interface Props {
  contact: ContactT;
  theme: ServicesTheme;
}

export default function ContactSection({ contact, theme }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section ref={sectionRef} id="contacto" className="relative overflow-hidden">
      <motion.div className="absolute -inset-y-[6%] inset-x-0" style={{ y: bgY }}>
        <Image src="/services/contacto.png" alt="" fill className="object-cover" aria-hidden="true" />
      </motion.div>
      {theme.contactOverlay && <div className={`absolute inset-0 ${theme.contactOverlay}`} aria-hidden="true" />}

      <Container className="relative grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{contact.eyebrow}</p>
          <h2 className={`mt-3 text-4xl font-semibold tracking-tight md:text-5xl ${theme.heading}`}>
            {contact.heading}
          </h2>
          <p className={`mt-4 max-w-md leading-7 ${theme.body}`}>{contact.description}</p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="mailto:terrbete@gmail.com?subject=Cotización de proyecto"
              className={`group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition ${theme.ctaPrimary}`}
            >
              {contact.ctaPrimary}
              <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="/projects"
              className={`group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition ${theme.ctaSecondary}`}
            >
              {contact.ctaSecondary}
              <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>

        <StaggerGroup className="space-y-3 lg:justify-self-end lg:w-full lg:max-w-xs" stagger={0.1}>
          {contact.cards.map((card) => (
            <StaggerItem key={card.label}>
              <ContactCard icon={card.icon} label={card.label} theme={theme} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
