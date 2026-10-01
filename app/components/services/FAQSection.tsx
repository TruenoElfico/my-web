import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import FAQItem from "./ui/FAQItem";

type FAQT = typeof en.services_page.faq;

interface Props {
  faq: FAQT;
  theme: ServicesTheme;
}

export default function FAQSection({ faq, theme }: Props) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 lg:py-24">
      <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{faq.eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-semibold tracking-tight md:text-4xl ${theme.heading}`}>{faq.heading}</h2>

      <div className="mt-8 grid grid-cols-1 gap-x-12 sm:grid-cols-2">
        {faq.items.map((item) => (
          <FAQItem key={item.q} question={item.q} answer={item.a} theme={theme} />
        ))}
      </div>
    </section>
  );
}
