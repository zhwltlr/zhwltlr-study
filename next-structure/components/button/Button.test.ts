import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button, ButtonProps } from "./Button";

describe("Button component", () => {
  test("renders button correctly", () => {
    const { getByText } = render(<Button label="Click me" />);
    const button = getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  test("calls onClick prop when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button label="Click me" onClick={onClick} />);
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("applies primary mode when primary prop is true", () => {
    const { container } = render(<Button label="Primary" primary />);
    expect(container.firstChild).toHaveClass("storybook-button--primary");
  });

  test("applies secondary mode when primary prop is false", () => {
    const { container } = render(<Button label="Secondary" />);
    expect(container.firstChild).toHaveClass("storybook-button--secondary");
  });

  test("applies custom background color when provided", () => {
    const { container } = render(
      <Button label="Custom BG" backgroundColor="blue" />
    );
    expect(container.firstChild).toHaveStyle("background-color: blue");
  });

  test("applies medium size by default", () => {
    const { container } = render(<Button label="Default size" />);
    expect(container.firstChild).toHaveClass("storybook-button--medium");
  });

  test("applies specified size", () => {
    const { container } = render(<Button label="Large size" size="large" />);
    expect(container.firstChild).toHaveClass("storybook-button--large");
  });
});
