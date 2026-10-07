import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";
import { servicesJsonLdScript } from "./structuredData";

const BASE_URL = "https://braulioromero.dev";
const PAGE_URL = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Servicios web",
  description:
    "Diseño y desarrollo de páginas web profesionales para negocios: landing pages, sitios corporativos y soluciones orientadas a resultados, con SEO técnico, accesibilidad y analítica listos desde el inicio.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: PAGE_URL,
    siteName: "Braulio Romero",
    title: "Servicios web | Braulio Romero",
    description:
      "Diseño y desarrollo de páginas web profesionales para negocios que quieren una presencia clara y orientada a resultados.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios web | Braulio Romero",
    description:
      "Diseño y desarrollo de páginas web profesionales para negocios que quieren una presencia clara y orientada a resultados.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: servicesJsonLdScript() }} />
      <ServicesPageClient />
    </>
  );
}
