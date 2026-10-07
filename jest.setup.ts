import "@testing-library/jest-dom";
import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

// framer-motion's whileInView relies on IntersectionObserver, which jsdom lacks.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  value: MockIntersectionObserver,
});

// framer-motion calls window.scrollTo while measuring height: "auto"
// animations; jsdom doesn't implement it and logs a noisy error.
window.scrollTo = () => {};
