import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MenuOption } from "../App/App";

const Favourites = lazy(() => import("../Favourites/favourites"));
const Details = lazy(() => import("../Details/details"));

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Favourites></Favourites>}></Route>
        <Route path={menuOptions[0].path} element={<Details></Details>}></Route>
        <Route
          path={menuOptions[1].path}
          element={<Favourites></Favourites>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
