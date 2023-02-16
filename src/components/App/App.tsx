import React from "react";
import { AppRouter } from "../App-router/app-router";
import { Header } from "../Header/header";
import { MenuButton } from "../Menu-button/menu-button";
import "./App.css";

export type MenuOption = {
  label: string;
  path: string;
};
const menuOptions: MenuOption[] = [
  { label: "Main", path: "/main" },
  { label: "Favourites", path: "/favourites" },
  { label: "Details", path: "/details" },
];

function App() {
  return (
    <>
      <Header>
        <MenuButton options={menuOptions}></MenuButton>
      </Header>
      <main>
        <AppRouter menuOptions={menuOptions}></AppRouter>
      </main>
    </>
  );
}
export default App;
