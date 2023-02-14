import { render, screen } from "@testing-library/react";
import { Favourites } from "./favourites";

describe("Given Favourites component", () => {
  describe("When it is render", () => {
    test("Then it should have the title in the screen", () => {
      render(
        <>
          <Favourites></Favourites>
        </>
      );
      const element = screen.getByText(/Favourites/i);
      expect(element).toBeInTheDocument();
    });
  });
});
