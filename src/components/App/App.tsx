import React from "react";
<<<<<<< HEAD
import { Details } from "../Details/details";
import { Favourites } from "../Favourites/favourites";
import { FormCountry } from "../formcountry/formcountry";
=======

import { AppRouter } from "../App-router/app-router";

import { Footer } from "../footer/footer";

>>>>>>> main
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
<<<<<<< HEAD
      <Header></Header>
      <Favourites></Favourites>
      <Details></Details>
      <FormCountry></FormCountry>
=======
      <Header>
        <MenuButton options={menuOptions}></MenuButton>
      </Header>

      <AppRouter menuOptions={menuOptions}></AppRouter>
      <Footer></Footer>
>>>>>>> main
    </>
  );
}

export default App;
