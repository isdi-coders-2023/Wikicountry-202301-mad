import { ProtoCountryStrucuture } from "../components/model/country";
import { CountryActions, loadCountryCreator } from "./countries.action.creator";
import { countriesActions } from "./countries.actions";
import { countriesReducer, countryState } from "./countries.reducer";

const countriesMock: countryState = {
  countries: [],
  country: {
    capital: ["Madrid"],
    coatOfArms: { png: "f", svg: "f" },
    currencies: { USD: { name: "dolar" } },
    flags: { alt: "flag.img", png: "flag.img", svg: "flag.img" },
    languages: { english: "jhk" },
    maps: { googleMaps: "flag.img" },
    name: { common: "flag.img", official: "flag.img" },
    population: 2,
    region: "i",
  },
};
const countryMock: ProtoCountryStrucuture = {
  capital: ["Madrid"],
  coatOfArms: { png: "f", svg: "f" },
  currencies: { USD: { name: "dolar" } },
  flags: { alt: "flag.img", png: "flag.img", svg: "flag.img" },
  languages: { english: "jhk" },
  maps: { googleMaps: "flag.img" },
  name: { common: "flag.img", official: "flag.img" },
  population: 2,
  region: "i",
};

describe("Given the reducer function", () => {
  describe("When the state parameter go into the function", () => {
    test("Then it should return the mock made of an arrray", () => {
      const action: CountryActions = {
        type: countriesActions.load,
        payload: countriesMock.countries,
      };
      const result = countriesReducer(countriesMock, action);
      expect(result).toEqual(countriesMock);
    });
    test("Then it should return  a country", () => {
      const action: CountryActions = {
        type: countriesActions.getByName,
        payload: countriesMock.country,
      };
      const result = countriesReducer(countriesMock, action);
      expect(result).toEqual(countriesMock);
    });
    test("Then it should return the mock made of an arrray with the specific regions", () => {
      const action: CountryActions = {
        type: countriesActions.getByRegion,
        payload: countriesMock.countries,
      };
      const result = countriesReducer(countriesMock, action);
      expect(result).toEqual(countriesMock);
    });
    // test("Then it should return  the same payload, because the action doesnt exist", () => {
    //   let state: countryState = {
    //     countries: countriesMock,
    //     country: countryMock,
    //   };

    //   const action: CountryActions = {
    //     type: "manolo",
    //     payload: state.countries,
    //   };
    //   const result = countriesReducer(state, action);
    //   expect(result).toEqual(countriesMock);
    // });
    // test("Then it should return mockcountry[]", () => {
    //   const initialState: ProtoCountryStrucuture[] = [];
    //   const action = loadCountryCreator([countryMock]);
    //   const newState = countriesReducer(initialState, action);
    //   expect(newState).toEqual([countryMock]);
    // });
  });
});
