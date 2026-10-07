import es from "../../locales/es.json";
import { buildServicesJsonLd, parsePrice, servicesJsonLdScript } from "../structuredData";

type Node = Record<string, unknown> & { "@type": string };

const graph = buildServicesJsonLd()["@graph"] as Node[];
const byType = (type: string) => graph.find((node) => node["@type"] === type)!;

describe("services structured data", () => {
  it("parses displayed prices into numbers", () => {
    expect(parsePrice("$5,500")).toBe(5500);
    expect(parsePrice("$19,500")).toBe(19500);
  });

  it("has one priced offer per pricing card, in MXN before tax", () => {
    const catalog = byType("ProfessionalService").hasOfferCatalog as { itemListElement: Node[] };
    const cards = es.services_page.pricing.cards;

    expect(catalog.itemListElement).toHaveLength(cards.length);
    catalog.itemListElement.forEach((offer, i) => {
      expect(offer.price).toBe(parsePrice(cards[i].price));
      expect(offer.priceCurrency).toBe("MXN");
      expect(offer.price).toBeGreaterThan(0);
    });
  });

  it("mirrors every FAQ item", () => {
    const faq = byType("FAQPage").mainEntity as { name: string }[];
    expect(faq.map((q) => q.name)).toEqual(es.services_page.faq.items.map((item) => item.q));
  });

  it("only references @ids that exist in the graph or the root layout", () => {
    const ids = new Set(graph.map((node) => node["@id"]));
    ids.add("https://truenoelfico.com/#person");
    const refs = [...JSON.stringify(graph).matchAll(/\{"@id":"([^"]+)"\}/g)].map((m) => m[1]);
    expect(refs.length).toBeGreaterThan(0);
    refs.forEach((ref) => expect(ids).toContain(ref));
  });

  it("escapes < so the script tag can't be closed early", () => {
    expect(servicesJsonLdScript()).not.toContain("<");
  });
});
