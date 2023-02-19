import { ProtoCountryStrucuture } from "../components/model/country";
import { CountryActions, loadCountryCreator } from "./countries.action.creator";
import { countriesActions } from "./countries.actions";
import { countriesReducer, countryState } from "./countries.reducer";

const countriesMock: ProtoCountryStrucuture[] = [
  {
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
  },
];
const countryMock: ProtoCountryStrucuture = {
  capital: ["Madrid"],
  region: "i",
  coatOfArms: { png: "f", svg: "f" },
  currencies: { USD: { name: "dolar" } },
  flags: {
    alt: "flag.img",
    png: "flag.img",
    svg: "flag.img",
  },
  languages: { english: "jhk" },
  maps: { googleMaps: "flag.img" },
  name: { common: "flag.img", official: "flag.img" },
  population: 2,
};

describe("Given the reducer function", () => {
  describe("When the state parameter go into the function", () => {
    test("Then it should return  an empty []", () => {
      let state: countryState = {
        countries: countriesMock,
        country: countryMock,
      };

      const action: CountryActions = {
        type: countriesActions.load,
        payload: state.countries,
      };
      const result = countriesReducer(state.countries, action);
      expect(result).toEqual(countriesMock);
    });
    test("Then it should return  a country", () => {
      let state: countryState = {
        countries: countriesMock,
        country: countryMock,
      };

      const action: CountryActions = {
        type: countriesActions.getByName,
        payload: state.country,
      };
      const result = countriesReducer(state.country, action);
      expect(result).toEqual(countryMock);
    });
    test("Then it should return  an array of countries", () => {
      let state: countryState = {
        countries: countriesMock,
        country: countryMock,
      };

      const action: CountryActions = {
        type: countriesActions.getByRegion,
        payload: state.countries,
      };
      const result = countriesReducer(state.countries, action);
      expect(result).toEqual(countriesMock);
    });
    test("Then it should return  the same payload, because the action doesnt exist", () => {
      let state: countryState = {
        countries: countriesMock,
        country: countryMock,
      };

      const action: CountryActions = {
        type: "manolo",
        payload: state.countries,
      };
      const result = countriesReducer(state.countries, action);
      expect(result).toEqual(countriesMock);
    });
    // test("Then it should return mockcountry[]", () => {
    //   const initialState: ProtoCountryStrucuture[] = [];
    //   const action = loadCountryCreator([countryMock]);
    //   const newState = countriesReducer(initialState, action);
    //   expect(newState).toEqual([countryMock]);
    // });
  });
});
