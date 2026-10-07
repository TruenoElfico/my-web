import es from "./locales/es.json";
import { ogContentType, ogSize, renderOgImage } from "./components/og/renderOgImage";

export const alt = `${es.hero.name} — ${es.hero.tagline}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    badge: es.badge,
    titleLine1: es.hero.name,
    titleLine2: es.hero.tagline,
    description: "Diseño y construyo sitios y productos web rápidos, claros y accesibles.",
    footer: "braulioromero.dev",
    titleSize: 56,
  });
}
