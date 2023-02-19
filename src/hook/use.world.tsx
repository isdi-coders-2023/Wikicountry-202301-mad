import { ApiCountryRepo } from "../services/api.country.repo";
import { useCallback, useReducer, useState } from "react";
import { ProtoCountryStrucuture } from "../components/model/country";
import { countriesReducer, countryState } from "../reducer/countries.reducer";
import * as ac from "../reducer/countries.action.creator";

export type UseWorldStructure = ReturnType<typeof useWorld>;
export function useWorld(repo: ApiCountryRepo) {
  const initialState: countryState = {
    countries: [],
    country: {} as ProtoCountryStrucuture,
  };

  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(10);
  const handlerPrevNextButton = (num: number) => {
    setSecondNum(secondNum + num);
    setFirstNum(firstNum + num);
  };

  const [stateCountries, dispatch] = useReducer(countriesReducer, initialState);

  const handleError = (error: Error) => {
    console.log(error.message);
  };

  const loadCountries = useCallback(async () => {
    try {
      const countries = await repo.loadCountries();
      dispatch(ac.loadCountryCreator(countries));
    } catch (error) {
      handleError(error as Error);
    }
  }, [repo]);

  const getCountryByName = async (name: ProtoCountryStrucuture["name"]) => {
    try {
      const countryByName = await repo.getCountryByName(name);
      dispatch(ac.getCountryByNameCreator(countryByName));
    } catch (error) {
      handleError(error as Error);
    }
  };

  const getCountryByRegion = async (
    region: ProtoCountryStrucuture["region"]
  ) => {
    try {
      const countryByRegion = await repo.getCountryByRegion(region);
      dispatch(ac.getCountryByRegionCreator(countryByRegion));
    } catch (error) {
      handleError(error as Error);
    }
  };

  return {
    stateCountries,
    loadCountries,
    getCountryByName,
    getCountryByRegion,
    handlerPrevNextButton,
    firstNum,
    secondNum,
    setFirstNum,
    setSecondNum,
  };
}
