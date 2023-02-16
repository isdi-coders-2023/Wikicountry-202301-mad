import { ApiCountryRepo } from "../services/api.country.repo";
import { useCallback, useState } from "react";
import { ProtoCountryStrucuture } from "../model/country";
export type UseWorldStructure = ReturnType<typeof useWorld>;
export function useWorld(repo: ApiCountryRepo) {
  const initialState: ProtoCountryStrucuture[] = [];

  const [countries, setCountries] = useState(initialState);

  const handleError = (error: Error) => {
    console.log(error.message);
  };

  const loadCountries = useCallback(async () => {
    try {
      const countries = await repo.loadCountries();
      setCountries(countries);
    } catch (error) {
      handleError(error as Error);
    }
  }, [repo]);

  const getCountryByName = async (name: ProtoCountryStrucuture["name"]) => {
    try {
      const countryByName = await repo.getCountryByName(name);
      setCountries([...countries, countryByName]);
    } catch (error) {
      handleError(error as Error);
    }
  };

  const getCountryByRegion = async (
    region: ProtoCountryStrucuture["region"]
  ) => {
    try {
      const countryByRegion = await repo.getCountryByRegion(region);
      setCountries([...countries, countryByRegion]);
    } catch (error) {
      handleError(error as Error);
    }
  };

  return {
    countries,
    loadCountries,
    getCountryByName,
    getCountryByRegion,
  };
}
