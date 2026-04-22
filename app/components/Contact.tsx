import { Theme } from "../theme";
import en from "../locales/en.json";

type ContactT = typeof en.contact;

interface Props {
  contact: ContactT;
  theme: Theme;
}

export default function Contact({ contact, theme }: Props) {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-16">
      <div className={`rounded-[2rem] p-8 md:p-10 ${theme.contactCard}`}>
        <p className={`text-sm uppercase tracking-[0.24em] ${theme.accent}`}>
          {contact.label}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          {contact.heading}
        </h2>
        <p className={`mt-4 max-w-2xl leading-7 ${theme.muted}`}>{contact.body}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:terrbete@gmail.com?subject=Project Inquiry&body=Hi Braulio, I'd like to talk about..."
            className="rounded-2xl bg-[#69E8FF] px-6 py-3 text-sm font-medium text-black"
          >
            {contact.email_btn}
          </a>
          <a
            href="https://www.linkedin.com/in/braulio-romero/"
            target="_blank"
            className={`rounded-2xl px-6 py-3 text-sm font-medium transition ${theme.secondaryBtn}`}
          >
            {contact.linkedin_btn}
          </a>
          <a
            href="https://github.com/TruenoElfico"
            target="_blank"
            className={`rounded-2xl px-6 py-3 text-sm font-medium transition ${theme.secondaryBtn}`}
          >
            {contact.github_btn}
          </a>
        </div>
      </div>
    </section>
  );
}
