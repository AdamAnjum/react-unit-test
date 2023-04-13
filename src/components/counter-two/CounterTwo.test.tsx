import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CounterTwo from ".";

describe("Counter 2", () => {
  test("renders correctly", async () => {
    user.setup();

    const handleIncrement = jest.fn();
    const handleDecrement = jest.fn();

    render(
      <CounterTwo
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        count={10}
      />
    );

    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });

    const decrementButton = screen.getByRole("button", {
      name: "Decrement",
    });

    await Promise.all([
      user.click(incrementButton),
      user.click(decrementButton),
    ]);

    expect(handleIncrement).toBeCalledTimes(1);
    expect(handleDecrement).toBeCalledTimes(1);
  });
});
