// import { useReducer } from "react";
// import { ProtoCountryStrucuture } from "../model/country";
// import { CountryActions } from "./countries.action.creator";
// import { countriesActions } from "./countries.actions";
// import { countriesReducer } from "./countries.reducer";

// const state: string = "hola";
// const initialState: ProtoCountryStrucuture[] = [];
// describe("country reducer", () => {
//   const [st, dispatch] = useReducer(countriesReducer, initialState);

//   it("shows state", () => {
//     expect(st).toEqual([]);
//   });
// });

import { countriesReducer } from "./countries.reducer";
import { ProtoCountryStrucuture } from "../model/country";
import { CountryActions } from "./countries.action.creator";


describe('countryreducer', () =>{
  test('returns new state', () =>{
    const state : ProtoCountryStrucuture[] = [];
    const action : CountryActions;

    {

  })
})
