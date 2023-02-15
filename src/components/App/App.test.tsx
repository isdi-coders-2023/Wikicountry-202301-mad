import { render } from "@testing-library/react";
import { Header } from "../Header/header";
import App from "./App";

jest.mock("../Header/header");

describe("Given App component", () => {
  describe("When it is render", () => {
    test("Then it should call Header", () => {
      render(<App />);
      expect(Header).toHaveBeenCalled();
    });
  });
});
