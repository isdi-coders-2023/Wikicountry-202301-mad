import { ApiCountryRepo } from "../services/api.country.repo";

export type UseWorldStructure = ReturnType<typeof useWorld>;
export function useWorld(repo: ApiCountryRepo) {
  const greet = "hola";
  return greet;
}
