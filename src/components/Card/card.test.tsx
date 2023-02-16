import { render, screen } from "@testing-library/react";
import { ProtoCountryStrucuture } from "../../model/country";
import { Card } from "./card";

const mockContry: ProtoCountryStrucuture = {
  country: "Test country",
} as unknown as ProtoCountryStrucuture;

describe("Given Card component", () => {
  describe("When it is render", () => {
    render(
      <ul>
        <Card country={mockContry}></Card>
      </ul>
    );
    test("Then it should detect the components", () => {
      const element = screen.getByRole("listitem");
      expect(element).toBeInTheDocument();
    });
  });
});
