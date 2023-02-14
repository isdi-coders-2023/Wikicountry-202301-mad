import React, { useEffect, useMemo } from "react";
import "./App.css";
import { ApiCountryRepo } from "./services/api.country.repo";

function App() {
  const load = useMemo(() => new ApiCountryRepo(), []);

  useEffect(() => {
    load.loadCountries();
  }, [load]);
  return (
    <div className="App">
      <h1>Working in progress</h1>
    </div>
  );
}

export default App;
