import { render, screen } from "../../test-utils/ThemeWrapper";
import MuiMode from ".";

describe("MuiMode", () => {
  test("renders test correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
