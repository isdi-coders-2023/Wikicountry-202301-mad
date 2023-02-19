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
  countries: ProtoCountryStrucuture[];
  country: ProtoCountryStrucuture;
};

export function countriesReducer(
  state: ProtoCountryStrucuture[] | ProtoCountryStrucuture,
  action: CountryActions
): ProtoCountryStrucuture[] | ProtoCountryStrucuture {
  switch (action.type) {
    case countriesActions.load:
      const loadCountries = action.payload as ProtoCountryStrucuture[];
      return loadCountries;
    case countriesActions.getByName:
      const getName = action.payload as ProtoCountryStrucuture;
      return getName;
    case countriesActions.getByRegion:
      const loadByRegion = action.payload as ProtoCountryStrucuture[];
      return loadByRegion;
    default:
      return state;
  }
}
