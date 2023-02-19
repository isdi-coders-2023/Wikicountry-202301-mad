/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { WorldContext } from "../../context/app.context";
import { UseWorldStructure } from "../../hook/use.world";
import { countryState } from "../../reducer/countries.reducer";
import { MenuOption } from "../App/App";
import Main from "../Main/main";
import { AppRouter } from "./app-router";

describe("Given AppRouter component", () => {
  jest.mock("../Main/main");

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
    loadCountries: jest.fn(),
    countryList: [{ name: "test" }],
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

  describe("When the route is favourites", () => {
    test("Then it should go to /favourites and render it", async () => {
      await waitFor(async () => prepareTestFunction(1));
      const element = await screen.findByRole("heading", {
        name: "Favourites",
      });
      expect(element).toBeInTheDocument();
    });
  });
  describe("When the route is main", () => {
    test("Then it should go to /main and render it", async () => {
      await waitFor(async () => prepareTestFunction(0));
      const element = await screen.findByRole("generic");
      expect(element).toBeInTheDocument();
    });
  });
});
