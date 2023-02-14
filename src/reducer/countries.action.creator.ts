import { ProtoCountryStrucuture } from "../model/country";
import { countriesActions } from "./countries.actions";

interface Action {
  type: string;
  payload?: any;
}

export interface CountryActions extends Action {
  payload: ProtoCountryStrucuture | ProtoCountryStrucuture[];
}

export const loadCountryCreator = (
  payload: ProtoCountryStrucuture[]
): CountryActions => {
  return {
    type: countriesActions.load,
    payload,
  };
};
