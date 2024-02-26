import { render, screen } from "@testing-library/react";
import { test, expect, describe, vi } from "vitest";
import UserList from "../UserList";
import { server } from "../../mocks/server";
import { http, HttpResponse } from "msw";

describe("test user list", () => {
  test("#1 render correctly", () => {
    render(<UserList />);
    const heading = screen.getByText("UserList");
    expect(heading).toBeInTheDocument();
  });
  test("#2 check items", async () => {
    render(<UserList />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
  test("#3 check Errors", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return HttpResponse.json(null, { status: 404 });
      })
    );
    render(<UserList />);
    const error = await screen.findByText("Error Fetching Users");
    expect(error).toBeInTheDocument();
  });
});

// in result
/**
 * mock Func
 * mock httpReq
 * msw
 * testing on catching error
 */
