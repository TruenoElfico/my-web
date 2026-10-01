import Image from "next/image";
import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";

type HeroT = typeof en.services_page.hero;

interface Props {
  hero: HeroT;
  theme: ServicesTheme;
}

export default function ServicesHero({ hero, theme }: Props) {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <Image
        src="/services/hero.png"
        alt=""
        fill
        priority
        className="object-cover object-right"
        aria-hidden="true"
      />
      {theme.heroOverlay && <div className={`absolute inset-0 ${theme.heroOverlay}`} aria-hidden="true" />}

      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 pb-12 pt-[calc(var(--services-nav-h)+2rem)] md:px-10 lg:grid-cols-[1fr_1.35fr] lg:items-center lg:gap-6">
          <div>
            <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium ${theme.chip}`}>
              {hero.badge}
            </span>

            <h1 className={`mt-6 max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl xl:text-7xl ${theme.heading}`}>
              {hero.titleLine1}
              <span className={`block ${theme.headingAccent}`}>{hero.titleLine2}</span>
            </h1>

            <p className={`mt-6 max-w-lg text-lg leading-8 md:text-xl ${theme.body}`}>{hero.description}</p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contacto" className={`rounded-xl px-7 py-3.5 text-base font-medium transition ${theme.ctaPrimary}`}>
                {hero.ctaPrimary}
              </a>
              <a href="/projects" className={`rounded-xl px-7 py-3.5 text-base font-medium transition ${theme.ctaSecondary}`}>
                {hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-10 flex flex-nowrap gap-x-6 gap-y-3 overflow-x-auto">
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
            </div>
          </div>

          <div className="relative hidden lg:-mr-10 lg:block xl:-mr-16">
            <Image
              src="/services/hero-two-manos.png"
              alt={hero.mockupAlt}
              width={1440}
              height={920}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>

      <a
        href="#por-que-una-web"
        aria-label="Ir a la siguiente sección"
        className={`relative z-10 mx-auto mb-8 hidden h-8 w-8 items-center justify-center rounded-full transition md:flex ${theme.iconCircle}`}
      >
        <Image src="/services/svg/04-arrow-down.svg" alt="" width={16} height={16} />
      </a>
    </section>
  );
}
