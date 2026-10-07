"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import en from "../../locales/en.json";
import Container from "./ui/Container";
import { easeOut, Reveal, StaggerGroup, StaggerItem, viewportOnce } from "./motion";

type SemanticT = typeof en.services_page.semantic;

interface Props {
  semantic: SemanticT;
}

// This section is an intentional dark band in the approved design — it keeps
// its own fixed dark styling regardless of the site-wide theme toggle, since
// it's built around the semantic-web.png photo (no light variant exists).
//
// This is the page's strongest animation moment. The stacked-layers graphic
// is a single flattened PNG (not separate DOM layers), so "layers sliding in
// one after another" is approximated as one deliberate, slightly slower
// entrance (fade + slide + scale) plus a one-time cyan glow pulse over the
// whole graphic — echoing the already-highlighted "Contenido estructurado"
// row baked into the artwork — rather than true per-layer staggering.
export default function SemanticFoundationSection({ semantic }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] text-white">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.9, ease: easeOut }}
      >
        <Image src="/services/semantic-web.png" alt="" fill className="object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/70 to-transparent" aria-hidden="true" />
      </motion.div>

      <Container className="relative grid gap-10 py-12 md:py-16 lg:grid-cols-2 lg:items-center">
        <Reveal y={16}>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#69E8FF]">{semantic.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            {semantic.heading1}
            <span className="block text-[#69E8FF]">{semantic.heading2}</span>
          </h2>
          <p className="mt-5 max-w-md leading-7 text-white/70">{semantic.description}</p>
          <p className="mt-6 text-sm text-white/60">{semantic.sub}</p>

          <StaggerGroup className="mt-3 flex flex-wrap gap-3" stagger={0.1} delayChildren={0.3}>
            {semantic.chips.map((chip) => (
              <StaggerItem key={chip.label}>
                <span className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
                  <Image src={chip.icon} alt="" width={14} height={14} />
                  {chip.label}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, y: 28, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: ["drop-shadow(0 0 0px rgba(105,232,255,0))", "drop-shadow(0 0 26px rgba(105,232,255,0.5))", "drop-shadow(0 0 0px rgba(105,232,255,0))"] }}
          viewport={viewportOnce}
          transition={{
            default: { duration: 0.8, ease: easeOut },
            filter: { duration: 1.4, times: [0, 0.5, 1], delay: 0.85, ease: "easeInOut" },
          }}
        >
          <Image
            src="/services/semantic-web-a_clean_isolated_ui_concept_design_graphic_on_a_tr_1.png"
            alt={semantic.graphicAlt}
            width={1254}
            height={1254}
            className="mx-auto h-auto w-full max-w-md"
          />
        </motion.div>
      </Container>
    </section>
  );
}
