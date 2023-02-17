/* eslint-disable testing-library/no-unnecessary-act */
import { render, act } from "@testing-library/react";
import { Card } from "../Card/card";
import { Cards } from "./cards";

describe("Given Cards component", () => {
  describe("When it renders", () => {
    test("Then it should be called", async () => {
      await act(async () => render(<Cards></Cards>));
      expect(Card).toBeInTheDocument();
    });
  });
});
