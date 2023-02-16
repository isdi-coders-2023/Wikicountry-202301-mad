/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { Cards } from "./cards";

describe("Given Cards component", () => {
  describe("When it renders", () => {
    render(<Cards></Cards>);
    test("Then it should detect the a mock property", () => {
      const elements = screen.getAllByRole("img");
      expect(elements[0]).toBeInTheDocument();
    });
  });
});
