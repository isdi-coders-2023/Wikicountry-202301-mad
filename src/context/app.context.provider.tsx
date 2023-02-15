import { useMemo } from "react";
import { ApiCountryRepo } from "../services/api.country.repo";
import { worldContext } from "./app.context";
export function WorldContextProvider({ children }: { children: JSX.Element }) {
  const worldRepo = useMemo(() => new ApiCountryRepo(), []);
  console.log(worldRepo);

  return (
    <worldContext.Provider value={"context"}>{children}</worldContext.Provider>
  );
}
