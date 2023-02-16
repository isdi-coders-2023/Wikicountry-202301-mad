import { Cards } from "../Cards/cards";
import "./main.css";

export function Main() {
  return (
    <section className="main">
      <div className="main-top">
        <form action="" method="get" className="main-search">
          <div className="main-search__input">
            <input type="text" name="name" id="name" required />
          </div>
          <div className="main-search__button">
            <input type="submit" value="Search" />
          </div>
        </form>
        <select name="continents" className="main-dropdown">
          <option value=""></option>
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
