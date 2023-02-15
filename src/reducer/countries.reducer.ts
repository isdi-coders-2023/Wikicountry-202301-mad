import { ProtoCountryStrucuture } from "../model/country";
import { CountryActions } from "./countries.action.creator";
import { countriesActions } from "./countries.actions";

// Una función pura
// - no modifica ni depende de nada externo
// - con unos argumentos dados siempre devuelve lo mismo
// que
// recibe un estado + una acción
// devuelve un nuevo estado

export function countriesReducer(
  state: ProtoCountryStrucuture[],
  action: CountryActions
): ProtoCountryStrucuture[] {
  switch (action.type) {
    case countriesActions.load:
      return action.payload as ProtoCountryStrucuture[];
    default:
      return state;
  }
}
