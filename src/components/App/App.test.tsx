import { render } from "@testing-library/react";
import { AppRouter } from "../App-router/app-router";
import { Header } from "../Header/header";
import App from "./App";

jest.mock("../Header/header");
jest.mock("../App-router/app-router");

describe("Given App component", () => {
  describe("When it is render", () => {
    test("Then it should call Header and AppRouter", () => {
      render(<App />);
      expect(Header).toHaveBeenCalled();
      expect(AppRouter).toHaveBeenCalled();
    });
  });
});
