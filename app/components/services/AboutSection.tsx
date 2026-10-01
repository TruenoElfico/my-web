import en from "../../locales/en.json";
import { servicesThemes } from "./theme";
import CompanyBadge from "./ui/CompanyBadge";
import Container from "./ui/Container";

const badgeTheme = servicesThemes.dark;

type AboutT = typeof en.services_page.about;

interface Props {
  about: AboutT;
}

// Intentional dark band in the approved design, kept fixed regardless of the
// site-wide theme toggle to preserve the light/dark rhythm from the mockup.
export default function AboutSection({ about }: Props) {
  return (
    <section id="sobre-mi" className="bg-[#0B1220] text-white">
      <Container className="grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#69E8FF]">{about.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            {about.heading1}
            <span className="block">{about.heading2}</span>
          </h2>
          <p className="mt-5 max-w-md leading-7 text-white/70">{about.body1}</p>
          <p className="mt-4 max-w-md leading-7 text-white/70">{about.body2}</p>
          <a
            href="#contacto"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#69E8FF] px-6 py-3 text-sm font-medium text-[#0B1220] transition hover:brightness-95"
          >
            {about.cta} →
          </a>
        </div>

        <div className="space-y-3">
          {about.badges.map((badge) => (
            <CompanyBadge
              key={badge.company}
              icon={badge.icon}
              company={badge.company}
              role={badge.role}
              theme={badgeTheme}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
