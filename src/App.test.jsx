import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import App from "./App";

test("App Test", () => {
  render(<App />);
  screen.debug();
});
