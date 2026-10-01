import Image from "next/image";
import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import ContactCard from "./ui/ContactCard";
import Container from "./ui/Container";

type ContactT = typeof en.services_page.contact;

interface Props {
  contact: ContactT;
  theme: ServicesTheme;
}

export default function ContactSection({ contact, theme }: Props) {
  return (
    <section id="contacto" className="relative overflow-hidden">
      <Image src="/services/contacto.png" alt="" fill className="object-cover" aria-hidden="true" />
      {theme.contactOverlay && <div className={`absolute inset-0 ${theme.contactOverlay}`} aria-hidden="true" />}

      <Container className="relative grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <p className={`text-sm font-medium uppercase tracking-[0.2em] ${theme.eyebrow}`}>{contact.eyebrow}</p>
          <h2 className={`mt-3 text-4xl font-semibold tracking-tight md:text-5xl ${theme.heading}`}>
            {contact.heading}
          </h2>
          <p className={`mt-4 max-w-md leading-7 ${theme.body}`}>{contact.description}</p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="mailto:terrbete@gmail.com?subject=Cotización de proyecto"
              className={`rounded-xl px-6 py-3 text-sm font-medium transition ${theme.ctaPrimary}`}
            >
              {contact.ctaPrimary}
            </a>
            <a href="/projects" className={`rounded-xl px-6 py-3 text-sm font-medium transition ${theme.ctaSecondary}`}>
              {contact.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="space-y-3 lg:justify-self-end lg:w-full lg:max-w-xs">
          {contact.cards.map((card) => (
            <ContactCard key={card.label} icon={card.icon} label={card.label} theme={theme} />
          ))}
        </div>
      </Container>
    </section>
  );
}
