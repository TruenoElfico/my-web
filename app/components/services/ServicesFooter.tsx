"use client";

import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import Container from "./ui/Container";
import SocialIcon from "./ui/SocialIcon";
import { Reveal } from "./motion";

type FooterT = typeof en.services_page.footer;

interface Props {
  footer: FooterT;
  theme: ServicesTheme;
}

export default function ServicesFooter({ footer, theme }: Props) {
  return (
    <footer className={theme.footerBg}>
      <Reveal y={0} duration={0.6}>
        <Container className="flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
          <p className={`text-xl font-bold tracking-tight ${theme.heading}`}>{footer.name}</p>

          <div className="flex items-center gap-4">
            {footer.socials.map((social) => (
              <SocialIcon key={social.label} icon={social.icon} label={social.label} href={social.href} theme={theme} />
            ))}
            <a href={footer.siteLink.href} target="_blank" rel="noopener noreferrer" className="text-sm transition hover:opacity-80">
              {footer.siteLink.label}
            </a>
          </div>
        </Container>
      </Reveal>
    </footer>
  );
}
