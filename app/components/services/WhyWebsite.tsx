import Image from "next/image";
import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";

type WhyT = typeof en.services_page.why;

interface Props {
  why: WhyT;
  theme: ServicesTheme;
}

export default function WhyWebsite({ why, theme }: Props) {
  return (
    <section id="por-que-una-web" className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{why.eyebrow}</p>
          <h2 className={`mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-4xl ${theme.heading}`}>
            {why.heading1}
          </h2>
          <h2 className={`text-3xl font-semibold leading-tight tracking-tight md:text-4xl ${theme.headingAccent}`}>
            {why.heading2}
          </h2>
          <p className={`mt-5 max-w-lg leading-7 ${theme.body}`}>{why.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {why.benefits.map((benefit) => (
            <div key={benefit.title} className="flex gap-3">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${theme.iconCircle}`}>
                <Image src={benefit.icon} alt="" width={20} height={20} />
              </div>
              <div>
                <p className={`text-sm font-semibold ${theme.heading}`}>{benefit.title}</p>
                <p className={`mt-1 text-sm leading-6 ${theme.faint}`}>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
