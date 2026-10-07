import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FAQItem from "../ui/FAQItem";
import { servicesThemes } from "../theme";

const props = {
  question: "Is hosting included?",
  answer: "No, hosting is quoted separately.",
  theme: servicesThemes.light,
};

describe("FAQItem", () => {
  it("starts collapsed", () => {
    render(<FAQItem {...props} />);
    expect(screen.getByRole("button", { name: props.question })).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText(props.answer)).not.toBeInTheDocument();
  });

  it("expands on click and links the button to the panel", async () => {
    const user = userEvent.setup();
    render(<FAQItem {...props} />);
    const button = screen.getByRole("button", { name: props.question });

    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
    const answer = screen.getByText(props.answer);
    expect(answer.parentElement).toHaveAttribute("id", button.getAttribute("aria-controls"));
  });

  it("collapses again on a second click", async () => {
    const user = userEvent.setup();
    render(<FAQItem {...props} />);
    const button = screen.getByRole("button", { name: props.question });

    await user.click(button);
    await user.click(button);

    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
