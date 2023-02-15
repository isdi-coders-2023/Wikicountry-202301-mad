import { worldContext } from "./app.context";
export function WorldContextProvider({ children }: { children: JSX.Element }) {
  const worldRepo = "";
  console.log(worldRepo);

  return (
    <worldContext.Provider value={"context"}>{children}</worldContext.Provider>
  );
}
