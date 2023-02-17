import { ProtoCountryStrucuture } from "../components/model/country";
import { CountryActions, loadCountryCreator } from "./countries.action.creator";
import { countriesActions } from "./countries.actions";
import { countriesReducer, countryState } from "./countries.reducer";

const countryMock: ProtoCountryStrucuture = {
  capital: ["Madrid"],
  region: "i",
  coatOfArms: {
    png: "f",
    svg: "f",
  },
  currencies: {
    USD: {
      name: "dolar",
    },
  },
  flags: {
    alt: "flag.img",
    png: "flag.img",
    svg: "flag.img",
  },
  languages: {
    english: "jhk",
  },
  maps: {
    googleMaps: "flag.img",
  },
  name: {
    common: "flag.img",
    official: "flag.img",
  },
  population: 2,
};

describe("Given the reducer function", () => {
  describe("When the state parameter go into the function", () => {
    test("Then it should return  an empty []", () => {
      let state: countryState = {
        countries: [countryMock],
        country: countryMock,
      };
      let newState = state.countries as ProtoCountryStrucuture[];
      const action: CountryActions =
        countriesActions.load as unknown as CountryActions;
      countriesReducer(state, action);
      expect(state).toEqual([countryMock]);
    });

    // test("Then it should return mockcountry[]", () => {
    //   const initialState: ProtoCountryStrucuture[] = [];
    //   const action = loadCountryCreator([countryMock]);
    //   const newState = countriesReducer(initialState, action);
    //   expect(newState).toEqual([countryMock]);
    // });
  });
});
