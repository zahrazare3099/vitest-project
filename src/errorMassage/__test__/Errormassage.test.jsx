import { describe, test, expect } from "vitest";
import ErrorMassage from "../ErrorMassage";
import { render, screen } from "@testing-library/react";

describe("ErrorMassage", () => {
  test("#1", () => {
    render(<ErrorMassage count={1} />);
    const pElement = screen.getByText(/1 Error occured./i);
    expect(pElement).toBeInTheDocument();
  });
  test("#2", () => {
    render(<ErrorMassage count={2} />);
    const pElement = screen.getByText(/2 Errors occured./i);
    expect(pElement).toBeTruthy();
  });
  test("#3", () => {
    render(<ErrorMassage count={2} />);
    const pElement = screen.getByText(/2 Errors occured./i);
    expect(pElement).toBeVisible();
    // opacity !==0
  });
  test("#4", () => {
    render(<ErrorMassage count={2} />);
    const pElement = screen.getByText(/2 Errors occured./i);
    expect(pElement).toHaveTextContent("2 Errors occured.");
  });
  test("#5", () => {
    render(<ErrorMassage count={2} />);
    const pElement = screen.getByText(/2 Errors occured./i);
    expect(pElement).not.toBeFalsy();
  });
  test("#6", () => {
    render(<ErrorMassage count={2} />);
    const pElement = screen.getByText(/2 Errors occured./i);
    expect(pElement.textContent).not.toBe("2 Errors occured.");
  });
  test("#7", () => {
    render(<ErrorMassage count={2} />);
    const pElement = screen.getByText(/2 Errors occured./i);
    expect(pElement).toContainHTML("<span>test</span>");
  });
  test("#8", () => {
    render(<ErrorMassage count={2} />);
    const pElement = screen.getByText(/2 Errors occured./i);
    const span = screen.getByText("test");
    expect(pElement).toContainElement(span);
  });
});
