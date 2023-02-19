import { ProtoCountryStrucuture } from "../components/model/country";
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

export const getCountryByNameCreator = (
  payload: ProtoCountryStrucuture
): CountryActions => {
  return {
    type: countriesActions.getByName,
    payload,
  };
};

export const getCountryByRegionCreator = (
  payload: ProtoCountryStrucuture[]
): CountryActions => {
  return {
    type: countriesActions.getByRegion,
    payload,
  };
};
