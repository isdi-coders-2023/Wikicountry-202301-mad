import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MenuOption } from "../App/App";
import Details from "../Details/details";
import { Error } from "../Error/error";

const Favourites = lazy(() => import("../Favourites/favourites"));
const Main = lazy(() => import("../Main/main"));

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Main></Main>}></Route>
        <Route path={menuOptions[0].path} element={<Main></Main>}></Route>
        <Route
          path={menuOptions[1].path}
          element={<Favourites></Favourites>}
        ></Route>
        <Route path={"*"} element={<Error></Error>}></Route>
        <Route
          path={"/details/:countryName"}
          element={<Details></Details>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
