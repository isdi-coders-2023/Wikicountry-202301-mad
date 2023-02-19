/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  let elements: HTMLElement[];
  beforeEach(async () => {
    await act(async () =>
      render(
        <WorldContext.Provider value={mockContext}>
          <Cards></Cards>
        </WorldContext.Provider>
      )
    );
    elements = screen.getAllByRole("button");
  });
  describe("When it renders", () => {
    test("Then it should render the list role", async () => {
      const element = screen.getByRole("list");
      expect(element).toBeInTheDocument();
    });
  });

  describe("When you use the buttons", () => {
    test("Then you expect the prev button to be disable at first", () => {
      expect(elements[0]).toBeDisabled();
    });
    test("Then it should show the next slice of the array", () => {
      fireEvent.click(elements[1]);
      expect(elements[1]).toHaveClass("cards-nav__button");
    });
    describe("When gyou hit a handlerbutton", () => {
      test("Then it should show the next slice of the array", async () => {
        const element = screen.getByRole("list");
        expect(element).toBeInTheDocument();
      });
    });
  });
});
