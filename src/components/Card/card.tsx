import { ProtoCountryStrucuture } from "../../model/country";

type CountryProps = {
  country: ProtoCountryStrucuture;
};

export function Card({ country }: CountryProps) {
  return (
    <li className="country-card">
      <img src={country.flags.png} alt={country.flags.alt} />
      <div className="country-card__name" role="country-name">
        {country.name.common}
      </div>
    </li>
  );
}
