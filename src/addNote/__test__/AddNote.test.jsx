import { render, screen } from "@testing-library/react";
import { test, expect, describe, vi } from "vitest";
import AddNote from "../AddNote";

describe("Add Note", () => {
  test("#1", () => {
    render(<AddNote todos={[]} setTodos={vi.fn()} />);
    // should render input ele
    const inputEle = screen.getByLabelText("todo");
    expect(inputEle).toBeInTheDocument();
  });
});
