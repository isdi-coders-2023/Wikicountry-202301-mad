/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { ProtoCountryStrucuture } from "../../model/country";
import { Card } from "./card";

const mockCountry: ProtoCountryStrucuture = {
  capital: ["Madrid"],
  region: "i",
  coatOfArms: {
    png: "f",
    svg: "f",
  },
  currencies: {
    USD: {
      name: "dolar",
    },
  },
  flags: {
    alt: "flag.img",
    png: "flag.img",
    svg: "flag.img",
  },
  languages: {
    english: "jhk",
  },
  maps: {
    googleMaps: "flag.img",
  },
  name: {
    common: "flag.img",
    official: "flag.img",
  },
  population: 2,
} as unknown as ProtoCountryStrucuture;

describe("Given Card component", () => {
  describe("When it is render", () => {
    let elements: HTMLElement[];
    beforeEach(() => {
      render(
        <ul>
          <Card country={mockCountry}></Card>
        </ul>
      );
      elements = [screen.getByRole("img")];
    });
    test("Then it should detect the a mock property", () => {
      expect(elements[0]).toBeInTheDocument();
    });
  });
});
