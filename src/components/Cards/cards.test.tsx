/* eslint-disable testing-library/no-unnecessary-act */
import { render, act } from "@testing-library/react";
import { Card } from "../Card/card";
import { ProtoCountryStrucuture } from "../model/country";
import { Cards } from "./cards";

const mockContext = {
  loadCountries: jest.fn(),
  countryList: [
    { name: "test", id: 1 },
    { name: "test", id: 2 },
  ],
} as unknown as ProtoCountryStrucuture;

describe("Given Cards component", () => {
  describe("When it renders", () => {
    test("Then it should be called", async () => {
      await act(async () => render(<Cards></Cards>));
      expect(Card).toBeInTheDocument();
    });
  });
});
