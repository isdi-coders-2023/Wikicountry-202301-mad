import React, { useEffect } from "react";
import "./App.css";
import { ApiCountryRepo } from "./services/api.country.repo";

function App() {
  const load = new ApiCountryRepo();
  load.getCountryByName("españa");
  return (
    <div className="App">
      <h1>Working in progress</h1>
    </div>
  );
}

export default App;
