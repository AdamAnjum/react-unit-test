/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render hello fellowed by namw
 */

import { render, screen } from "@testing-library/react";
import Greet from ".";

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");

    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("Greet renders with a name", () => {
      render(<Greet name="Adam" />);
      const textElement = screen.getByText("Hello Adam");

      expect(textElement).toBeInTheDocument();
    });
  });
});
