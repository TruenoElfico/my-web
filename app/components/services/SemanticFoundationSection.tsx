import Image from "next/image";
import en from "../../locales/en.json";
import Container from "./ui/Container";

type SemanticT = typeof en.services_page.semantic;

interface Props {
  semantic: SemanticT;
}

// This section is an intentional dark band in the approved design — it keeps
// its own fixed dark styling regardless of the site-wide theme toggle, since
// it's built around the semantic-web.png photo (no light variant exists).
export default function SemanticFoundationSection({ semantic }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] text-white">
      <Image src="/services/semantic-web.png" alt="" fill className="object-cover" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/70 to-transparent" aria-hidden="true" />

      <Container className="relative grid gap-10 py-12 md:py-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#69E8FF]">{semantic.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{semantic.heading1}</h2>
          <h2 className="text-4xl font-semibold tracking-tight text-[#69E8FF] md:text-5xl">{semantic.heading2}</h2>
          <p className="mt-5 max-w-md leading-7 text-white/70">{semantic.description}</p>
          <p className="mt-6 text-sm text-white/60">{semantic.sub}</p>

          <div className="mt-3 flex flex-wrap gap-3">
            {semantic.chips.map((chip) => (
              <span
                key={chip.label}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
              >
                <Image src={chip.icon} alt="" width={14} height={14} />
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <Image
            src="/services/semantic-web-a_clean_isolated_ui_concept_design_graphic_on_a_tr_1.png"
            alt={semantic.graphicAlt}
            width={1254}
            height={1254}
            className="mx-auto h-auto w-full max-w-md"
          />
        </div>
      </Container>
    </section>
  );
}
