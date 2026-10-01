"use client";

import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import en from "../locales/en.json";
import es from "../locales/es.json";
import { useAppTheme } from "../providers/ThemeProvider";
import { servicesThemes } from "../components/services/theme";
import { easeOut } from "../components/services/motion";
import ServicesNav from "../components/services/ServicesNav";
import ServicesHero from "../components/services/ServicesHero";
import WhyWebsite from "../components/services/WhyWebsite";
import PricingSection from "../components/services/PricingSection";
import ComparisonSection from "../components/services/ComparisonSection";
import SemanticFoundationSection from "../components/services/SemanticFoundationSection";
import ProcessSection from "../components/services/ProcessSection";
import WorkSection from "../components/services/WorkSection";
import AboutSection from "../components/services/AboutSection";
import FAQSection from "../components/services/FAQSection";
import ContactSection from "../components/services/ContactSection";
import ServicesFooter from "../components/services/ServicesFooter";

const locales = { en, es };

// The "Trabajo" section is built but hidden until real project thumbnails
// replace the gray placeholders — flip this to bring it back everywhere
// (nav, footer, and the section itself) at once.
const SHOW_WORK = false;

export default function ServicesPageClient() {
  const { isDark, toggleTheme, lang, toggleLang } = useAppTheme();
  const [showComparison, setShowComparison] = useState(false);
  const t = locales[lang].services_page;
  const theme = isDark ? servicesThemes.dark : servicesThemes.light;

  const navLinks = [
    { label: t.nav.servicios, href: "#servicios" },
    { label: t.nav.porQueWeb, href: "#por-que-una-web" },
    { label: t.nav.proceso, href: "#proceso" },
    ...(SHOW_WORK ? [{ label: t.nav.trabajo, href: "#trabajo" }] : []),
    { label: t.nav.sobreMi, href: "#sobre-mi" },
    { label: t.nav.contacto, href: "#contacto" },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <main
        className={`min-h-screen transition-colors duration-300 ${theme.pageBg}`}
        style={{ "--services-nav-h": "72px" } as React.CSSProperties}
      >
        <ServicesNav
          nav={t.nav}
          links={navLinks}
          theme={theme}
          isDark={isDark}
          onToggleTheme={toggleTheme}
          lang={lang}
          onToggleLang={toggleLang}
        />
        <ServicesHero hero={t.hero} theme={theme} />
        <WhyWebsite why={t.why} theme={theme} />
        <hr className={`border-t ${theme.divider}`} />
        <PricingSection
          pricing={t.pricing}
          theme={theme}
          showComparison={showComparison}
          onToggleComparison={() => setShowComparison((prev) => !prev)}
        />
        <AnimatePresence initial={false}>
          {showComparison && (
            <motion.div
              key="comparison"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="overflow-hidden"
            >
              <ComparisonSection comparison={t.comparison} theme={theme} />
            </motion.div>
          )}
        </AnimatePresence>
        <SemanticFoundationSection semantic={t.semantic} />
        <ProcessSection process={t.process} theme={theme} />
        {SHOW_WORK && <WorkSection work={t.work} theme={theme} />}
        <AboutSection about={t.about} />
        <FAQSection faq={t.faq} theme={theme} />
        <ContactSection contact={t.contact} theme={theme} />
        <ServicesFooter footer={t.footer} theme={theme} />
      </main>
    </MotionConfig>
  );
}
