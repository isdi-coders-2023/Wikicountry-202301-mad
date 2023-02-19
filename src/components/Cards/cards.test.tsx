/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, screen, render } from "@testing-library/react";
import { WorldContext } from "../../context/app.context";
import { UseWorldStructure } from "../../hook/use.world";
import { Card } from "../Card/card";
import { ProtoCountryStrucuture } from "../model/country";
import { Cards } from "./cards";

jest.mock("../Card/card");

const mockContext = {
  loadCountries: jest.fn(),
  countryList: [
    {population: 120, region: "Test"}
    {population: 10, region: "Test2"}
  ]
} as unknown as UseWorldStructure;

describe("Given Cards component", () => {
  describe("When it renders", () => {
    let elements: HTMLElement[];

    beforeEach(async () => {
      await act(async () =>
        render(
          <WorldContext.Provider value={mockContext}>
            <Cards></Cards>
          </WorldContext.Provider>
        )
      );

      elements = screen.getAllByRole("image");
    });
    test("Then it should call the card component", async () => {
      expect(Card).toHaveBeenCalled();
    });
  });
});
