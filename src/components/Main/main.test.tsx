import { render, screen } from "@testing-library/react";
import Main from "./main";

describe("Given Main component", () => {
  describe("When it is render", () => {
    test("Then it should appear in the document", () => {
      render(
        <>
          <Main></Main>
        </>
      );
      const element = screen.getByText("Asia");
      expect(element).toBeInTheDocument();
    });
  });
});
