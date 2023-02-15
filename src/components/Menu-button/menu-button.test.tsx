import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { MenuOption } from "../App/App";
import { MenuButton } from "./menu-button";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/details",
  }),
}));

describe("Given Menu component", () => {
  describe("When it is rendered", () => {
    const mockOptions: MenuOption[] = [
      {
        label: "Details",
        path: "/details",
      },
      {
        label: "Test",
        path: "/test",
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
    test("Then menu should be in the screen and pass the condition", () => {
      render(
        <Router>
          <MenuButton options={mockOptions}></MenuButton>
        </Router>
      );
      const element = screen.getByLabelText("Option1");
      expect(element).toBeInTheDocument();
    });
  });
});
