import { http, HttpResponse } from "msw";
const users = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "zizi golo" },
  { id: 3, name: "zarzar joon" },
];

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", ({ params }) => {
    return HttpResponse.json(users, { status: 200 });
  }),
];
