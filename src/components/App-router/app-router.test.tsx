/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";

import { MemoryRouter as Router } from "react-router-dom";
import { MenuOption } from "../App/App";
import { AppRouter } from "./app-router";

const mockOptions: MenuOption[] = [
  {
    label: "Main",
    path: "/main",
  },
  {
    label: "Favourites",
    path: "/favourites",
  },
];

describe("Given AppRouter component", () => {
  let count = 0;

  beforeEach(() => {
    render(
      <Router initialEntries={["/main", "/favourites"]} initialIndex={count}>
        <AppRouter menuOptions={mockOptions}></AppRouter>
      </Router>
    );
    count++;
  });

  describe("When the route is main", () => {
    test("Then it should go to /main and render it", async () => {
      const element = await screen.findByText(/Asia/i);
      expect(element).toBeInTheDocument();
    });
  });
  describe("When the route is favourites", () => {
    test("Then it should go to /favourites and render it", async () => {
      const element = await screen.findByRole("heading", {
        name: "Favourites",
      });
      expect(element).toBeInTheDocument();
    });
  });
});
