import { test, expect, describe, vi } from "vitest";
import Header from "../Header";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import useCounter from "../../hooks/useCounter";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

describe("heading", () => {
  test("header #1", () => {
    render(<Header title="test for title" />);
    const content = screen.getByText("test for title");
    expect(content).toBeInTheDocument();
    // in text vojod darad? ("test for title")
  });
  test("header #2", () => {
    render(<Header title="test for title" />);
    const content = screen.getByText(/title/i);
    expect(content).toBeInTheDocument();
    // text havi "title" hast? (/title/i)
  });
  test("header #3", () => {
    render(<Header title="test for title" />);
    const h1Emenent = screen.getByRole("heading", { name: /title/i });
    expect(h1Emenent).toBeInTheDocument();
    // daron Heading in text vojod darad? ("heading")
    // Heading ke daraye attribute title hast! ("heading", { name: /title/i })
  });
  test("header #4", () => {
    render(<Header title="test for title" />);
    const h1Emenent = screen.getByTitle("header");
    expect(h1Emenent).toBeInTheDocument();
    // donbal Elementi hast ke in attribute (getByTitle)=> title>>> ro dashte bashe ! ("header")
  });
  test("header #5", () => {
    render(<Header title="test for title" />);
    const h1Emenent = screen.getByTestId("subHeader");
    expect(h1Emenent).toBeInTheDocument();
  });
  test("header #6", async () => {
    render(<Header title="test for title" />);
    const h1Emenent = await screen.findByText(/title/i);
    expect(h1Emenent).toBeInTheDocument();
    // async await
  });
  test("header #7", () => {
    render(<Header title="test for title" />);
    const h1Emenent = screen.queryByText(/react/i);
    expect(h1Emenent).not.toBeInTheDocument();
    // not exist in DOM
  });
  test("header #8", () => {
    render(<Header title="test for title" />);
    const h1Emenent = screen.getAllByRole("heading");
    expect(h1Emenent.length).toBe(2);
    //get All heading [h1,h2]
  });
  test("header #9", () => {
    render(<Header title="test for title" />);
    const h1Emenent = screen.getAllByRole("heading", { level: 2 });
    expect(h1Emenent.length).toBe(1);
    //get All h2 heading [h2]
  });
});
describe("counter", () => {
  test("#1 check initial value", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });
  test("#2 check pass value", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });
  test("#3 check increment", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });
  test("#4 check increment", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
  test("#5 to Have Been Called", async () => {
    const user = userEvent.setup();
    const IncrementHandller = vi.fn();
    const DecrementHandller = vi.fn();

    render(
      <Header
        count={0}
        increment={IncrementHandller}
        decrement={DecrementHandller}
      />
    );
    const incBtn = screen.getByRole("button", { name: "inc" });
    const decBtn = screen.getByRole("button", { name: "dec" });
    //  fireEvent.click(incBtn)
    await user.click(incBtn);
    await user.click(decBtn);
    expect(IncrementHandller).toHaveBeenCalled();
    expect(DecrementHandller).toHaveBeenCalled();
  });
  test("#6 to Have Been Called one times", async () => {
    const user = userEvent.setup();
    const IncrementHandller = vi.fn();
    const DecrementHandller = vi.fn();

    render(
      <Header
        count={0}
        increment={IncrementHandller}
        decrement={DecrementHandller}
      />
    );
    const incBtn = screen.getByRole("button", { name: "inc" });
    const decBtn = screen.getByRole("button", { name: "dec" });
    //  fireEvent.click(incBtn)
    await user.click(incBtn);
    await user.click(decBtn);
    expect(IncrementHandller).toHaveBeenCalledTimes(1);
    expect(DecrementHandller).toHaveBeenCalledTimes(1);
  });
});
