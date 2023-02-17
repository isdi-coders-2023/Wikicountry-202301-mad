import { useMemo } from "react";
import { useWorld } from "../hook/use.world";
import { ApiCountryRepo } from "../services/api.country.repo";
import { worldContext } from "./app.context";
export function WorldContextProvider({ children }: { children: JSX.Element }) {
  const worldRepo = useMemo(() => new ApiCountryRepo(), []);
  const context = { ...useWorld(worldRepo) };

  return (
    <worldContext.Provider value={context}>{children}</worldContext.Provider>
  );
}
