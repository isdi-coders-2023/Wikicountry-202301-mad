import { render, screen } from "@testing-library/react";
import Details from "./details";

describe("Given Details component", () => {
  describe("When it is render", () => {
    test("Then it should have the title in the screen", () => {
      render(
        <>
          <Details></Details>
        </>
      );
      const element = screen.getByText(/Capital/i);
      expect(element).toBeInTheDocument();
    });
  });
});
