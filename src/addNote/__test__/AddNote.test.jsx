import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect, describe, vi } from "vitest";
import AddNote from "../AddNote";
import App from "../../App";

describe("CHECK Note Input", () => {
  const callbackTODOS = vi.fn();
  test("#1", () => {
    render(<AddNote todos={[]} setTodos={vi.fn()} />);
    // should render input ele
    const inputEle = screen.getByLabelText("todo");
    expect(inputEle).toBeInTheDocument();
  });
  test("#2", () => {
    render(<AddNote todos={[]} setTodos={vi.fn()} />);
    // input ele to be writing,click, check value
    const inputEle = screen.getByLabelText("todo");
    fireEvent.click(inputEle);
    fireEvent.change(inputEle, { target: { value: "task 1" } });
    expect(inputEle.value).toBe("task 1");
  });
  test("#3", () => {
    render(<AddNote todos={[]} setTodos={vi.fn()} />);
    // empty input?
    const inputEle = screen.getByLabelText("todo");
    fireEvent.click(inputEle);
    fireEvent.change(inputEle, { target: { value: "task 1" } });
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(inputEle.value).toBe("");
  });
  test("#4", () => {
    render(<AddNote todos={[]} setTodos={callbackTODOS} />);
    // setTodoscall mishe?
    const inputEle = screen.getByLabelText("todo");
    fireEvent.click(inputEle);
    fireEvent.change(inputEle, { target: { value: "task 1" } });
    const button = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(button);
    expect(callbackTODOS).toBeCalled();
  });
});
function addNote(todos) {
  const labelTitle = screen.getByLabelText("todo");
  const button = screen.getByRole("button", { name: "Add" });
  todos.forEach((task) => {
    fireEvent.change(labelTitle, { target: { value: task.task } });
    fireEvent.click(button);
  });
}
describe("Add note", () => {
  test("#1", () => {
    render(<AddNote todos={[]} setTodos={vi.fn()} />);
    addNote([{ task: "task one" }]);
    const inputTitle = screen.getByLabelText("todo");
    expect(inputTitle.value).toBe("");
  });
  test("#2", () => {
    render(<App />);
    addNote([{ task: "task one" }, { task: "task one" }, { task: "task one" }]);
    const divEle = screen.getAllByText("task one");
    expect(divEle.length).toBe(3);
  });
});
