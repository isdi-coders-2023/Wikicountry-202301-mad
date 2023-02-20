import "./card.css";
import { ProtoCountryStrucuture } from "../model/country";
import { Link } from "react-router-dom";

type CountryProps = {
  country: ProtoCountryStrucuture;
};

export function Card({ country }: CountryProps) {
  return (
    <li className="country-card">
      <Link to={`/details/${country.name.common}`}>
        <img
          className="country-card__image"
          src={country.flags.png}
          alt={country.flags.alt}
        />
      </Link>
      <div className="country-card__name">{country.name.common}</div>
    </li>
  );
}
