/* eslint-disable testing-library/no-unnecessary-act */
import { render } from "@testing-library/react";
import { Cards } from "../Cards/cards";
import Main from "./main";

jest.mock("../Cards/cards");

describe("Given Main component", () => {
  describe("When it renders", () => {
    test("Then it should renders Cards", () => {
      render(<Main></Main>);
      expect(Cards).toHaveBeenCalled();
    });
  });
});
