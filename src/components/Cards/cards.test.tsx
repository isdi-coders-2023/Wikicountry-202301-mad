/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from "@testing-library/react";
import { WorldContext } from "../../context/app.context";
import { UseWorldStructure } from "../../hook/use.world";
import { Cards } from "./cards";

jest.mock("../Card/card");

const mockContext = {
  loadCountries: jest.fn(),
  countryList: [
    { region: "test", population: 1 },
    { region: "test2", population: 2 },
  ],
} as unknown as UseWorldStructure;

describe("Given Cards component", () => {
  describe("When it renders", () => {
    beforeEach(async () => {
      await act(async () =>
        render(
          <WorldContext.Provider value={mockContext}>
            <Cards></Cards>
          </WorldContext.Provider>
        )
      );
    });
    test("Then it should call the card component", async () => {
      const element = screen.getByRole("list");
      expect(element).toBeInTheDocument();
    });
  });
});
