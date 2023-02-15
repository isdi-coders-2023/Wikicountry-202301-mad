import { CountryActions } from "./countries.action.creator";

describe("country reducer", () =>
  it("should return new staction", () => {
    function countriesReducer(
      state: number = 3,
      action: CountryActions
    ): string {
      switch (action.type) {
        case CounytryActions:
          return state;
        default:
          return state;
      }
    }
    expect(console.log(5));
  }));
