import { render, screen } from "@testing-library/react";
import ServiceCard from "../ui/ServiceCard";
import { servicesThemes } from "../theme";

const props = {
  name: "Presence",
  price: "$5,500",
  description: "A professional, effective page.",
  features: ["Custom design", "Form / WhatsApp", "3-5 day delivery"],
  theme: servicesThemes.light,
};

describe("ServiceCard", () => {
  it("renders name, price, and description", () => {
    render(<ServiceCard {...props} />);
    expect(screen.getByRole("heading", { name: props.name })).toBeInTheDocument();
    expect(screen.getByText(props.price)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it("renders every feature as a list item", () => {
    render(<ServiceCard {...props} />);
    expect(screen.getAllByRole("listitem").map((li) => li.textContent)).toEqual(props.features);
  });

  it("uses the highlight styles only when highlighted", () => {
    const { container, rerender } = render(<ServiceCard {...props} />);
    expect(container.firstChild).not.toHaveClass("border-2");

    rerender(<ServiceCard {...props} highlighted />);
    expect(container.firstChild).toHaveClass("border-2");
  });
});
