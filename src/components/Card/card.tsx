import "./card.css";
import { ProtoCountryStrucuture } from "../../model/country";

type CountryProps = {
  country: ProtoCountryStrucuture;
};

export function Card({ country }: CountryProps) {
  return (
    <li className="country-card">
      <img
        className="country-card__image"
        src={country.flags.png}
        alt={country.flags.alt}
      />
      <div className="country-card__name">{country.name.common}</div>
    </li>
  );
}
