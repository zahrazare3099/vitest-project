import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect, describe, vi } from "vitest";
import App from "./App";
import NoteList from "./notesList/NoteList";

describe("render App", () => {
  test("App Test", () => {
    render(<App />);
    screen.debug();
  });
});
