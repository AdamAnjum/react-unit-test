import { render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from ".";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await act(async () => await user.click(incrementButton));
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    await act(async () => await user.click(incrementButton));
    await act(async () => await user.click(incrementButton));

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("elements are focused in the right order", async () => {
    user.setup();

    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const setButton = screen.getByRole("button", {
      name: "Set",
    });

    await act(async () => await user.tab());
    expect(incrementButton).toHaveFocus();

    await act(async () => await user.tab());
    expect(amountInput).toHaveFocus();

    await act(async () => await user.tab());
    expect(setButton).toHaveFocus();
  });
});
