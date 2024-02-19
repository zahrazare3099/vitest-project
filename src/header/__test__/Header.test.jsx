import { test, expect, describe } from "vitest";
import Header from "../Header";
import { render, screen } from "@testing-library/react";

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
