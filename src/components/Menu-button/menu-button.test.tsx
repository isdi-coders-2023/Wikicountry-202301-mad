import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { MenuOption } from "../App/App";
import { MenuButton } from "./menu-button";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/main",
  }),
}));

describe("Given Menu component", () => {
  describe("When it is rendered details", () => {
    const mockOptions: MenuOption[] = [
      {
        label: "/main",
        path: "/main",
      },
      {
        label: "Favouites",
        path: "/favourites",
      },
    ];
    test("Then menu should be in the screen and dont pass the condition", () => {
      render(
        <Router>
          <MenuButton options={mockOptions}></MenuButton>
        </Router>
      );
      const element = screen.getByLabelText("Option2");
      expect(element).toBeInTheDocument();
    });
  });
});
