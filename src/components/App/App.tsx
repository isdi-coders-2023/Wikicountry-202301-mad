import React from "react";
import { Details } from "../Details/details";
import { Favourites } from "../Favourites/favourites";
import { Header } from "../Header/header";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Favourites></Favourites>
      <Details></Details>
    </>
  );
}
export default App;
