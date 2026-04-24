import { Theme } from "../theme";
import en from "../locales/en.json";

type HeroT = typeof en.hero;
type CardT = typeof en.card;

interface Props {
  badge: string;
  hero: HeroT;
  card: CardT;
  theme: Theme;
}

export default function Hero({ badge, hero, card, theme }: Props) {
  return (
    <section className={`relative overflow-hidden ${theme.heroBorder}`}>
      <div className={`absolute inset-0 ${theme.heroGradient}`} />
      <div className={`absolute inset-0 opacity-20 ${theme.heroGrid} [background-size:34px_34px]`} />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:px-10 lg:px-16 lg:py-28">
        <div className="flex flex-col justify-center">
          <div className={`mb-6 inline-flex w-fit items-center rounded-full px-4 py-1 text-sm shadow-lg ${theme.badge}`}>
            {badge}
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {hero.name}
            <span className={`mt-2 block ${theme.heroSpan}`}>{hero.tagline}</span>
          </h1>

          <p className={`mt-6 max-w-2xl text-base font-medium leading-7 md:text-lg ${theme.bodyText}`}>
            {hero.description}
          </p>
          <p className={`mt-6 max-w-2xl text-base font-semibold leading-7 md:text-lg ${theme.availability}`}>
            {hero.availability}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-2xl bg-[#69E8FF] px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02]"
            >
              {hero.cta_work}
            </a>
            <a
              href="#contact"
              className={`rounded-2xl px-6 py-3 text-sm font-medium transition ${theme.secondaryBtn}`}
            >
              {hero.cta_contact}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className={`w-full max-w-md rounded-[2rem] p-4 shadow-2xl backdrop-blur ${theme.cardOuter}`}>
            <div className={`rounded-[1.5rem] p-6 ${theme.cardInner}`}>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className={`text-sm ${theme.subtle}`}>{card.label}</p>
                  <p className="text-lg font-medium">{card.title}</p>
                </div>
                <div className={`h-3 w-3 rounded-full ${theme.dot}`} />
              </div>

              <div className="space-y-4">
                {[
                  { label: card.specialty_label, value: card.specialty_value },
                  { label: card.approach_label, value: card.approach_value },
                  { label: card.goal_label, value: card.goal_value },
                ].map((row) => (
                  <div key={row.label} className={`rounded-2xl p-4 ${theme.cardRow}`}>
                    <p className={`text-sm ${theme.subtle}`}>{row.label}</p>
                    <p className="mt-1 text-base font-medium">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
