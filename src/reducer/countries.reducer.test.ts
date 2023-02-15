import { CountryActions } from "./countries.action.creator";
import { countriesActions } from "./countries.actions";

const state: string = "hola";

describe("country reducer", () => {
  function countriesReducer(state: string, action: CountryActions): string {
    switch (action.type) {
      case countriesActions.load:
        return state;
      default:
        return state;
    }
  }
  it("should equal 4", () => {
    expect(countriesReducer("hola", 2)).toBe("hola");
  });

  test("also should equal 4", () => {
    expect(countriesReducer("hola", 3)).toBe("hola");
  });
});
