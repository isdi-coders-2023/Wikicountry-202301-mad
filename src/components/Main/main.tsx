import { useContext, useState } from "react";
import { WorldContext } from "../../context/app.context";
import { Cards } from "../Cards/cards";
import "./main.css";

export function Main() {
  const [continent, setContinent] = useState("");
  const { loadCountries, getCountryByRegion, setFirstNum, setSecondNum } =
    useContext(WorldContext);

  return (
    <section role="main" className="main">
      <div className="main-top">
        <form action="" method="get" className="main-search">
          <div className="main-search__input">
            <input type="text" name="name" id="name" required />
          </div>
          <div className="main-search__button">
            <input type="submit" value="Search" />
          </div>
        </form>
        <select
          value={continent}
          onChange={async (element) => {
            const selectContinent = element.target.value;
            setContinent(selectContinent);
            selectContinent === "All"
              ? await loadCountries()
              : await getCountryByRegion(selectContinent);

            setFirstNum(0);
            setSecondNum(10);
          }}
          name="continents"
          className="main-dropdown"
        >
          <option value="All" placeholder="Select a region"></option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <Cards></Cards>
    </section>
  );
}
export default Main;
