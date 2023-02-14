<<<<<<< HEAD:src/App.tsx
import React, { useEffect, useMemo } from "react";
=======
import React from "react";
import { Header } from "../Header/header";
>>>>>>> main:src/components/App/App.tsx
import "./App.css";
import { ApiCountryRepo } from "./services/api.country.repo";

function App() {
<<<<<<< HEAD:src/App.tsx
  const load = useMemo(() => new ApiCountryRepo(), []);

  useEffect(() => {
    load.loadCountries();
  }, [load]);
  return (
    <div className="App">
      <h1>Working in progress</h1>
    </div>
  );
=======
  return <Header></Header>;
>>>>>>> main:src/components/App/App.tsx
}

export default App;
