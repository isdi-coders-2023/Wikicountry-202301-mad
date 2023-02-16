import { ProtoCountryStrucuture } from "../components/model/country";
import { countriesActions } from "./reducer.api.publica/countries.actions";

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
