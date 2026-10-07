import "@testing-library/jest-dom";

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
