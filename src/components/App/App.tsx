import React from "react";
import { Details } from "../Details/details";
import { Header } from "../Header/header";
import "./App.css";
import { ApiCountryRepo } from "./services/api.country.repo";

function App() {
  return (
    <>
      <Header></Header>
      <Details></Details>
    </>
  );
}
export default App;
