import es from "../locales/es.json";

// schema.org JSON-LD for /services, so search engines can read the page as a
// software development business with priced services, an FAQ, and a
// breadcrumb. Built from es.json (the default language) so it stays in sync
// with what the page actually shows.

const BASE_URL = "https://truenoelfico.com";
const PAGE_URL = `${BASE_URL}/services`;

// Matches the @id on the Person in app/layout.tsx so the graphs link up.
const PERSON_ID = `${BASE_URL}/#person`;
const BUSINESS_ID = `${PAGE_URL}#business`;

const t = es.services_page;

// "$5,500" → 5500
export function parsePrice(price: string): number {
  return Number(price.replace(/[^\d.]/g, ""));
}

export function buildServicesJsonLd() {
  const prices = t.pricing.cards.map((card) => parsePrice(card.price));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": BUSINESS_ID,
        name: "Braulio Romero — Desarrollo web y software",
        description: t.hero.description,
        url: PAGE_URL,
        image: `${BASE_URL}/services/hero-two-manos.png`,
        email: "terrbete@gmail.com",
        founder: { "@id": PERSON_ID },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Monterrey",
          addressRegion: "NL",
          addressCountry: "MX",
        },
        areaServed: { "@type": "Country", name: "México" },
        priceRange: `MXN ${Math.min(...prices).toLocaleString("en-US")} – ${Math.max(...prices).toLocaleString("en-US")}`,
        knowsAbout: [
          "Desarrollo web",
          "Desarrollo de software",
          "Diseño UX/UI",
          "SEO técnico",
          "Accesibilidad web",
          "React",
          "Next.js",
        ],
        sameAs: ["https://www.linkedin.com/in/braulio-romero/", "https://github.com/TruenoElfico"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: t.pricing.heading,
          itemListElement: t.pricing.cards.map((card) => ({
            "@type": "Offer",
            price: parsePrice(card.price),
            priceCurrency: "MXN",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: parsePrice(card.price),
              priceCurrency: "MXN",
              valueAddedTaxIncluded: false,
            },
            itemOffered: {
              "@type": "Service",
              name: `Página web ${card.name}`,
              description: `${card.description} Incluye: ${card.features.join(", ")}.`,
              serviceType: "Diseño y desarrollo web",
              provider: { "@id": BUSINESS_ID },
              areaServed: { "@type": "Country", name: "México" },
            },
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Servicios web | Braulio Romero",
        inLanguage: "es-MX",
        about: { "@id": BUSINESS_ID },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Servicios", item: PAGE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

// JSON for a <script type="application/ld+json">, with "<" escaped so page
// text can never close the script tag early.
export function servicesJsonLdScript(): string {
  return JSON.stringify(buildServicesJsonLd()).replace(/</g, "\\u003c");
}
