/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { WorldContext } from "../../context/app.context";
import { UseWorldStructure } from "../../hook/use.world";
import { countryState } from "../../reducer/countries.reducer";
import { MenuOption } from "../App/App";
import { AppRouter } from "./app-router";

describe("Given AppRouter component", () => {
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

  const mockContext = {
    loadBeers: jest.fn(),
    beerList: [{ name: "test" }],
  } as unknown as UseWorldStructure;
  const prepareTestFunction = (num: number) => {
    render(
      <WorldContext.Provider value={mockContext}>
        <Router initialEntries={["/main", "/favourites"]} initialIndex={num}>
          <AppRouter menuOptions={mockOptions}></AppRouter>
        </Router>
      </WorldContext.Provider>
    );
  };

  describe("When the route is main", () => {
    test("Then it should go to main path and render it", async () => {
      await waitFor(async () => prepareTestFunction(0));
      const element = await screen.findByRole("form");
      expect(element).toBeInTheDocument();
    });
  });
  describe("When the route is favourites", () => {
    test("Then it should go to /favourites and render it", async () => {
      await waitFor(async () => prepareTestFunction(1));
      const element = await screen.findByRole("heading", {
        name: "Favourites",
      });
      expect(element).toBeInTheDocument();
    });
  });
});
