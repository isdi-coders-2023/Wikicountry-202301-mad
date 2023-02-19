import React from "react";

import { AppRouter } from "../App-router/app-router";

import { Footer } from "../footer/footer";

import { Header } from "../Header/header";
import { MenuButton } from "../Menu-button/menu-button";
import "./App.css";

export type MenuOption = {
  label: string;
  path: string;
};
export const menuOptions: MenuOption[] = [
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

      <AppRouter menuOptions={menuOptions}></AppRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
