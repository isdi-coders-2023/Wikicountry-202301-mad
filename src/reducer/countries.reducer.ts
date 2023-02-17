import { ProtoCountryStrucuture } from "../components/model/country";
import { CountryActions } from "./countries.action.creator";
import { countriesActions } from "./countries.actions";

// Una función pura
// - no modifica ni depende de nada externo
// - con unos argumentos dados siempre devuelve lo mismo
// que
// recibe un estado + una acción
// devuelve un nuevo estado

export type countryState = {
  countries?: ProtoCountryStrucuture[];
  country?: ProtoCountryStrucuture;
};

export function countriesReducer(
  state: countryState,
  action: CountryActions
): countryState {
  switch (action.type) {
    case countriesActions.load:
      const loadCountries = action.payload as ProtoCountryStrucuture[];
      return { ...state, countries: loadCountries };
    case countriesActions.getByName:
      const getName = action.payload as ProtoCountryStrucuture;
      return { ...state, country: getName };
    case countriesActions.getByRegion:
      const loadByRegion = action.payload as ProtoCountryStrucuture[];
      return { ...state, countries: loadByRegion };
    default:
      return state;
  }
}
