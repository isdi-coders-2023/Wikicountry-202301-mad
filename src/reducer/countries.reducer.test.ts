import { count } from "console";
import { useReducer } from "react";
import { ProtoCountryStrucuture } from "../components/model/country";
import { CountryActions } from "./countries.action.creator";
import { countriesActions } from "./countries.actions";
import { countriesReducer } from "./countries.reducer";

describe("Given the reducer function", () => {
  describe("When the state parameter go into the function", () => {
    test("Then it should return the same state parameter", () => {
      const initialState: ProtoCountryStrucuture[] = [];
      const action: CountryActions =
        countriesActions.load as unknown as CountryActions;
      countriesReducer(initialState, action);
      expect(initialState).toEqual([]);
    });

    test("Then it should return the parameter", () => {
      const initialState: ProtoCountryStrucuture[] = [];
      const action: CountryActions =
        countriesActions.load as unknown as CountryActions;
      countriesReducer(initialState, action.type.load);
      expect(initialState).toEqual([]);
    });
  });
});
