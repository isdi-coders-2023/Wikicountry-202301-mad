import React from "react";
import { AppRouter } from "../App-router/app-router";
import { Favourites } from "../Favourites/favourites";
import { Header } from "../Header/header";
import { MenuButton } from "../Menu-button/menu-button";
import "./App.css";

export type MenuOption = {
  label: string;
  path: string;
};
const menuOptions: MenuOption[] = [
  { label: "Details", path: "/details" },
  { label: "Favourites", path: "/favourites" },
];

function App() {
  return (
    <>
      <Header>
        <MenuButton options={menuOptions}></MenuButton>
      </Header>
      <AppRouter menuOptions={menuOptions}></AppRouter>
    </>
  );
}
export default App;
