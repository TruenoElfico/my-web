import en from "../../locales/en.json";
import { ServicesTheme } from "./theme";
import SocialIcon from "./ui/SocialIcon";

type FooterT = typeof en.services_page.footer;

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  footer: FooterT;
  links: NavLink[];
  theme: ServicesTheme;
}

export default function ServicesFooter({ footer, links, theme }: Props) {
  return (
    <footer className={theme.footerBg}>
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between md:px-10">
        <p className={`text-sm font-semibold ${theme.heading}`}>{footer.name}</p>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`text-sm transition ${theme.navLink}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {footer.socials.map((social) => (
            <SocialIcon key={social.label} icon={social.icon} label={social.label} href={social.href} />
          ))}
          <a href={footer.siteLink.href} target="_blank" rel="noopener noreferrer" className="text-sm transition hover:opacity-80">
            {footer.siteLink.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
