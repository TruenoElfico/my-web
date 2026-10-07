import es from "../locales/es.json";
import { ogContentType, ogSize, renderOgImage } from "../components/og/renderOgImage";

const hero = es.services_page.hero;

export const alt = `${hero.titleLine1} ${hero.titleLine2} — Braulio Romero, diseño y desarrollo web`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    badge: "Diseño y desarrollo web",
    titleLine1: hero.titleLine1,
    titleLine2: hero.titleLine2,
    description: hero.description,
  });
}
