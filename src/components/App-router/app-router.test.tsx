/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";

import { MemoryRouter as Router } from "react-router-dom";
import { MenuOption } from "../App/App";
import { AppRouter } from "./app-router";

const mockOptions: MenuOption[] = [
  {
    label: "Details",
    path: "/details",
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
      <Router initialEntries={["/details", "/favourites"]} initialIndex={count}>
        <AppRouter menuOptions={mockOptions}></AppRouter>
      </Router>
    );
    count++;
  });

  describe("When the route is details", () => {
    test("Then it should go to /details and render it", async () => {
      const element = await screen.findByText(/Nombre pais/i);
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
