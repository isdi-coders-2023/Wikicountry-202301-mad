import { useParams } from "react-router-dom";
import { WorldContext } from "../../context/app.context";
import "./details.css";
import { useContext, useEffect } from "react";

function Details() {
  const { countryName } = useParams();
  const { stateCountries, getCountryByName } = useContext(WorldContext);

  const contextCountry = stateCountries.countries.find(
    (item) => item.name.common === countryName
  );

  useEffect(() => {
    getCountryByName(contextCountry?.name.common);
    // console.log(contextCountry?.name);
    // const loadCountry = async () => {
    //   const country = await getCountryByName(contextCountry?.name.common);
    //   console.log(country);
    // };
    // loadCountry();
  }, [countryName]);

  return (
    <section className="details">
      <div className="details-top">
        <button>Home</button>
        <button>Favourite</button>
      </div>
      <ul className="details-list">
        <li className="details-list__item details-list__item--center">
          {contextCountry?.name.common}
        </li>
        <li className="details-list__item details-list__item--center">
          <img
            src={contextCountry?.flags.svg}
            alt={`Flag of ${contextCountry?.name.common}`}
          />
        </li>
        <li className="details-list__item">
          <p>Capital</p>
          <p>{contextCountry?.capital[0]}</p>
        </li>
        <li className="details-list__item">
          <p>Lenguaje</p>
          <p>{contextCountry?.languages.key}</p>
        </li>
        <li className="details-list__item">
          <p>Moneda</p>
          <p>{contextCountry?.currencies.key?.name}</p>
        </li>
        <li className="details-list__item">
          <p>Población</p>
          <p>{contextCountry?.population}</p>
        </li>
        <li className="details-list__item">
          <p>Continente</p>
          <p>{contextCountry?.region}</p>
        </li>
        <li className="details-list__item details-list__item--center">
          <img src={contextCountry?.coatOfArms.svg} alt="" />
        </li>
      </ul>
    </section>
  );
}
export default Details;
