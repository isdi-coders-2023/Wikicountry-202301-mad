import { render, screen } from "@testing-library/react";
import { Error } from "./error";

describe("Given Header component", () => {
  describe("When it is render", () => {
    test("Then it should have the page in the screen", () => {
      render(
        <>
          <Error></Error>
        </>
      );
      const element = screen.getByText(/solicitada no/i);
      expect(element).toBeInTheDocument();
    });
  });
});
