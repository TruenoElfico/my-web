"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import Container from "./ui/Container";
import { easeOut, StaggerGroup, StaggerItem, viewportOnce } from "./motion";

type HeroT = typeof en.services_page.hero;

interface Props {
  hero: HeroT;
  theme: ServicesTheme;
}

export default function ServicesHero({ hero, theme }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  // Very light parallax: background drifts a few percent, well inside the
  // oversized layer below so no edge is ever exposed.
  const bgY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section ref={sectionRef} id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <motion.div className="absolute -inset-y-[6%] inset-x-0" style={{ y: bgY }}>
        <Image
          src="/services/hero.png"
          alt=""
          fill
          priority
          className="object-cover object-right"
          aria-hidden="true"
        />
      </motion.div>
      {theme.heroOverlay && <div className={`absolute inset-0 ${theme.heroOverlay}`} aria-hidden="true" />}

      <div className="relative z-10 flex flex-1 items-center">
        <Container
          wide
          className="grid gap-10 pb-12 pt-[calc(var(--services-nav-h)+2rem)] lg:grid-cols-[1fr_1.35fr] lg:items-center lg:gap-6"
        >
          <StaggerGroup stagger={0.12}>
            <StaggerItem>
              <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium ${theme.chip}`}>
                {hero.badge}
              </span>
            </StaggerItem>

            <StaggerItem className="mt-6">
              <h1
                className={`max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl ${theme.heading}`}
              >
                {hero.titleLine1}
                <span className={`block ${theme.headingAccent}`}>{hero.titleLine2}</span>
              </h1>
            </StaggerItem>

            <StaggerItem className="mt-6">
              <p className={`max-w-lg text-lg leading-8 md:text-xl ${theme.body}`}>{hero.description}</p>
            </StaggerItem>

            <StaggerItem className="mt-9 flex flex-wrap gap-4">
              <a href="#contacto" className={`rounded-xl px-7 py-3.5 text-base font-medium transition ${theme.ctaPrimary}`}>
                {hero.ctaPrimary}
              </a>
              <a href="/projects" className={`rounded-xl px-7 py-3.5 text-base font-medium transition ${theme.ctaSecondary}`}>
                {hero.ctaSecondary}
              </a>
            </StaggerItem>

            <StaggerItem className="mt-10 flex flex-nowrap gap-x-6 gap-y-3 overflow-x-auto">
              {hero.indicators.map((indicator) => (
                <div key={indicator.title} className="flex shrink-0 items-center gap-2.5">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${theme.iconCircle}`}>
                    <Image src={indicator.icon} alt="" width={16} height={16} />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold leading-tight whitespace-nowrap ${theme.heading}`}>{indicator.title}</p>
                    <p className={`text-xs leading-tight whitespace-nowrap ${theme.faint}`}>{indicator.desc}</p>
                  </div>
                </div>
              ))}
            </StaggerItem>
          </StaggerGroup>

          <motion.div
            className="relative hidden lg:-mr-10 lg:block xl:-mr-16"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Image
                src="/services/hero-two-manos.png"
                alt={hero.mockupAlt}
                width={1440}
                height={920}
                className="h-auto w-full"
                priority
              />
            </motion.div>
          </motion.div>
        </Container>
      </div>

      <motion.a
        href="#por-que-una-web"
        aria-label="Ir a la siguiente sección"
        className={`relative z-10 mx-auto mb-8 hidden h-8 w-8 items-center justify-center rounded-full transition md:flex ${theme.iconCircle}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1, ease: easeOut }}
      >
        <Image src="/services/svg/04-arrow-down.svg" alt="" width={16} height={16} />
      </motion.a>
    </section>
  );
}
