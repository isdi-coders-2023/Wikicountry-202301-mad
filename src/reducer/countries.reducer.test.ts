import { CountryActions } from "./countries.action.creator";

const state:string = "hola";

describe("country reducer", () =>
  it("Function countryReducer", () => {
    function countriesReducer(
      state: string = 'hola',
      action: CountryActions
    ): string {
      switch (action.type) {
        case countriesActions.load:
          return state;
        default:
          return state;
      }
    }
    test("Should return state=hola", () => {
      expect(console.log(`${state}= hola`));
    });
  }
