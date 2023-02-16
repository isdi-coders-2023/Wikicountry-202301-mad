import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { menuOptions } from "../App/App";
import { MenuButton } from "./menu-button";

describe("Given Menu component", () => {
  describe("When it is rendered details", () => {
    render(
      <Router>
        <MenuButton options={menuOptions}></MenuButton>
      </Router>
    );
    test("Then menu should be in the screen and dont pass the condition", () => {
      const element = screen.getByText(/home/i);
      expect(element).toBeInTheDocument();
    });
  });
});
