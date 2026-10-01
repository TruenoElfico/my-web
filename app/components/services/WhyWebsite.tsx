import Image from "next/image";
import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import Container from "./ui/Container";

type WhyT = typeof en.services_page.why;

interface Props {
  why: WhyT;
  theme: ServicesTheme;
}

export default function WhyWebsite({ why, theme }: Props) {
  return (
    <Container as="section" id="por-que-una-web" className="py-16 lg:py-24">
      <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{why.eyebrow}</p>
      <div className="mt-3 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className={`text-4xl font-semibold leading-tight tracking-tight md:text-5xl ${theme.heading}`}>
            {why.heading1}
          </h2>
          <h2 className={`text-4xl font-semibold leading-tight tracking-tight md:text-5xl ${theme.headingAccent}`}>
            {why.heading2}
          </h2>
          <p className={`mt-5 max-w-lg leading-7 ${theme.body}`}>{why.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2">
          {why.benefits.map((benefit) => (
            <div key={benefit.title} className="flex gap-4">
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${theme.iconCircle}`}>
                <Image src={benefit.icon} alt="" width={24} height={24} />
              </div>
              <div>
                <p className={`text-lg font-semibold ${theme.heading}`}>{benefit.title}</p>
                <p className={`mt-1 text-xs leading-6 ${theme.faint}`}>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
